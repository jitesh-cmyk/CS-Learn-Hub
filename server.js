const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const port = process.env.PORT || 3000;
const dbPath = path.join(__dirname, 'users.json');
const sessions = new Map();

function loadUsers() {
  try {
    const raw = fs.readFileSync(dbPath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
}

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1e6) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization'
  });
  res.end(JSON.stringify(payload));
}

function getAuthToken(req) {
  const header = req.headers.authorization || '';
  return header.startsWith('Bearer ') ? header.slice(7) : '';
}

function getUserFromToken(token) {
  const user = sessions.get(token);
  return user || null;
}

function createToken() {
  return crypto.randomBytes(24).toString('hex');
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/login' && req.method === 'POST') {
    const body = await readBody(req);
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '').trim();

    if (!email || !password) {
      sendJson(res, 400, { success: false, message: 'Email and password are required.' });
      return;
    }

    const users = loadUsers();
    let user = users.find((item) => item.email === email);

    if (!user) {
      user = {
        id: crypto.randomUUID(),
        email,
        password: hashPassword(password)
      };
      users.push(user);
      saveUsers(users);
    } else if (user.password !== hashPassword(password)) {
      sendJson(res, 401, { success: false, message: 'Invalid email or password.' });
      return;
    }

    const token = createToken();
    sessions.set(token, { id: user.id, email: user.email });

    sendJson(res, 200, {
      success: true,
      token,
      user: { email: user.email }
    });
    return;
  }

  if (url.pathname === '/api/me' && req.method === 'GET') {
    const token = getAuthToken(req);
    const user = getUserFromToken(token);

    if (!user) {
      sendJson(res, 401, { success: false, message: 'Not authenticated.' });
      return;
    }

    sendJson(res, 200, { success: true, user });
    return;
  }

  if (url.pathname === '/api/logout' && req.method === 'POST') {
    const token = getAuthToken(req);
    if (token) {
      sessions.delete(token);
    }
    sendJson(res, 200, { success: true, message: 'Signed out.' });
    return;
  }

  sendJson(res, 404, { success: false, message: 'Route not found.' });
});

server.listen(port, () => {
  console.log(`Auth server running on http://localhost:${port}`);
});
