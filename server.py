import hashlib
import json
import os
import sqlite3
import uuid
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

HOST = "127.0.0.1"
PORT = int(os.environ.get("PORT", "3000"))
DB_PATH = os.path.join(os.path.dirname(__file__), "users.db")
ADMIN_EMAIL = os.environ.get("ADMIN_EMAIL", "admin@cslearnhub.com")
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "admin123")


def init_db():
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL
        )
        """
    )
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS sessions (
            token TEXT PRIMARY KEY,
            email TEXT NOT NULL
        )
        """
    )
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS admin_sessions (
            token TEXT PRIMARY KEY,
            email TEXT NOT NULL
        )
        """
    )
    conn.commit()
    conn.close()


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode("utf-8")).hexdigest()


class AuthHandler(BaseHTTPRequestHandler):
    def _send_json(self, status_code: int, payload: dict):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type,Authorization")
        self.end_headers()
        self.wfile.write(body)

    def _get_bearer_token(self):
        header = self.headers.get("Authorization", "")
        return header[7:] if header.startswith("Bearer ") else ""

    def _require_admin(self):
        token = self._get_bearer_token()
        if not token:
            self._send_json(401, {"success": False, "message": "Admin access required."})
            return False

        conn = get_db()
        try:
            row = conn.execute("SELECT token FROM admin_sessions WHERE token = ?", (token,)).fetchone()
        finally:
            conn.close()

        if not row:
            self._send_json(403, {"success": False, "message": "Admin access required."})
            return False

        return True

    def do_OPTIONS(self):
        self._send_json(204, {})

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/me":
            token = self.headers.get("Authorization", "")
            token = token[7:] if token.startswith("Bearer ") else ""

            if not token:
                self._send_json(401, {"success": False, "message": "Not authenticated."})
                return

            conn = get_db()
            try:
                row = conn.execute("SELECT email FROM sessions WHERE token = ?", (token,)).fetchone()
                if not row:
                    self._send_json(401, {"success": False, "message": "Not authenticated."})
                    return

                self._send_json(200, {"success": True, "user": {"email": row["email"]}})
            finally:
                conn.close()
            return

        if parsed.path == "/api/admin/users":
            if not self._require_admin():
                return

            conn = get_db()
            try:
                rows = conn.execute(
                    "SELECT id, email FROM users ORDER BY email ASC"
                ).fetchall()
                users = [{"id": row["id"], "email": row["email"]} for row in rows]
                self._send_json(200, {"success": True, "users": users})
            finally:
                conn.close()
            return

        self._send_json(404, {"success": False, "message": "Route not found."})

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/login":
            self._handle_login()
        elif parsed.path == "/api/logout":
            self._handle_logout()
        elif parsed.path == "/api/admin/login":
            self._handle_admin_login()
        elif parsed.path == "/api/admin/logout":
            self._handle_admin_logout()
        elif parsed.path == "/api/admin/users/delete":
            if not self._require_admin():
                return
            self._handle_delete_user()
        else:
            self._send_json(404, {"success": False, "message": "Route not found."})

    def _read_json(self):
        length = int(self.headers.get("Content-Length", "0"))
        if length <= 0:
            return {}
        body = self.rfile.read(length).decode("utf-8")
        try:
            return json.loads(body)
        except json.JSONDecodeError:
            return {}

    def _handle_login(self):
        payload = self._read_json()
        email = str(payload.get("email", "")).strip().lower()
        password = str(payload.get("password", "")).strip()

        if not email or not password:
            self._send_json(400, {"success": False, "message": "Email and password are required."})
            return

        conn = get_db()
        try:
            user_row = conn.execute(
                "SELECT id, email, password_hash FROM users WHERE email = ?",
                (email,),
            ).fetchone()

            if user_row is None:
                user_id = str(uuid.uuid4())
                conn.execute(
                    "INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)",
                    (user_id, email, hash_password(password)),
                )
                conn.commit()
                user_row = conn.execute(
                    "SELECT id, email, password_hash FROM users WHERE email = ?",
                    (email,),
                ).fetchone()
            elif user_row["password_hash"] != hash_password(password):
                self._send_json(401, {"success": False, "message": "Invalid email or password."})
                return

            token = uuid.uuid4().hex
            conn.execute("INSERT INTO sessions (token, email) VALUES (?, ?)", (token, email))
            conn.commit()
            self._send_json(
                200,
                {
                    "success": True,
                    "token": token,
                    "user": {"email": user_row["email"]},
                },
            )
        finally:
            conn.close()

    def _handle_logout(self):
        token = self._get_bearer_token()
        if token:
            conn = get_db()
            try:
                conn.execute("DELETE FROM sessions WHERE token = ?", (token,))
                conn.commit()
            finally:
                conn.close()
        self._send_json(200, {"success": True, "message": "Signed out."})

    def _handle_admin_login(self):
        payload = self._read_json()
        email = str(payload.get("email", "")).strip().lower()
        password = str(payload.get("password", "")).strip()

        if not email or not password:
            self._send_json(400, {"success": False, "message": "Admin email and password are required."})
            return

        if email != ADMIN_EMAIL.lower() or password != ADMIN_PASSWORD:
            self._send_json(401, {"success": False, "message": "Invalid admin credentials."})
            return

        token = uuid.uuid4().hex
        conn = get_db()
        try:
            conn.execute("DELETE FROM admin_sessions WHERE email = ?", (email,))
            conn.execute("INSERT INTO admin_sessions (token, email) VALUES (?, ?)", (token, email))
            conn.commit()
            self._send_json(200, {"success": True, "token": token, "user": {"email": email, "role": "admin"}})
        finally:
            conn.close()

    def _handle_admin_logout(self):
        token = self._get_bearer_token()
        if token:
            conn = get_db()
            try:
                conn.execute("DELETE FROM admin_sessions WHERE token = ?", (token,))
                conn.commit()
            finally:
                conn.close()
        self._send_json(200, {"success": True, "message": "Admin signed out."})

    def _handle_delete_user(self):
        payload = self._read_json()
        user_id = str(payload.get("id", "")).strip()
        if not user_id:
            self._send_json(400, {"success": False, "message": "User ID is required."})
            return

        conn = get_db()
        try:
            conn.execute("DELETE FROM sessions WHERE email = (SELECT email FROM users WHERE id = ?)", (user_id,))
            conn.execute("DELETE FROM users WHERE id = ?", (user_id,))
            conn.commit()
            self._send_json(200, {"success": True, "message": "User deleted."})
        finally:
            conn.close()

    def log_message(self, format, *args):
        return


if __name__ == "__main__":
    init_db()
    server = ThreadingHTTPServer((HOST, PORT), AuthHandler)
    print(f"SQLite auth server running on http://{HOST}:{PORT}")
    server.serve_forever()
