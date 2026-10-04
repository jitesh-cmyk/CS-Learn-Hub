(() => {
  const course = window.subjectCourse;
  const topicList = document.querySelector("#topic-list");
  const editor = document.querySelector("#code-editor");
  const preview = document.querySelector("#code-output");
  const status = document.querySelector("#compiler-status");
  const themeToggle = document.querySelector("#theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const authModal = document.querySelector("#auth-modal");
  const isGroupedCourse = Array.isArray(course.modules[0].topics);
  let activeModule = 0;
  let activeTopic = 0;

  const allHtmlTopics = isGroupedCourse
    ? course.modules.flatMap((module, moduleIndex) =>
      module.topics.map((title, topicIndex) => ({ moduleIndex, topicIndex, title })))
    : [];
  const gitSimulatorInitialOutput = "Git & GitHub Practice Simulator\nThis is a simulated repository; no Git commands run on your computer.\n\nTry commands such as:\n  git status\n  git add README.md\n  git commit -m \"Add README\"\n  git log";
  const gitSimulatorState = {
    initialized: false,
    staged: [],
    modified: ["README.md"],
    commits: [],
    branches: [],
    currentBranch: "",
    remoteAdded: false
  };

  const escapeHtml = (value) => value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const renderGitSimulator = (commands) => {
    const output = [];
    const files = ["README.md", "index.html", "style.css"];
    const reset = () => {
      gitSimulatorState.initialized = false;
      gitSimulatorState.staged = [];
      gitSimulatorState.modified = ["README.md"];
      gitSimulatorState.commits = [];
      gitSimulatorState.branches = [];
      gitSimulatorState.currentBranch = "";
      gitSimulatorState.remoteAdded = false;
    };
    reset();

    commands.split(/\r?\n/).forEach((rawLine) => {
      const command = rawLine.trim();
      if (!command || command.startsWith("#")) return;

      output.push(`$ ${command}`);
      if (!command.startsWith("git ")) {
        output.push(`Guidance (not executed): ${command}\n`);
        return;
      }

      const args = command.slice(4).trim();
      if (args === "--version") {
        output.push("git version 2.x (simulated)\n");
      } else if (args === "init") {
        gitSimulatorState.initialized = true;
        gitSimulatorState.branches = ["main"];
        gitSimulatorState.currentBranch = "main";
        output.push("Initialized empty simulated Git repository.\n");
      } else if (args.startsWith("config ")) {
        output.push("Updated simulated Git configuration only; your real Git settings were not changed.\n");
      } else if (!gitSimulatorState.initialized && !args.startsWith("clone ")) {
        output.push("fatal: not a git repository (simulated). Run `git init` first.\n");
      } else if (args === "status") {
        const staged = gitSimulatorState.staged.length
          ? gitSimulatorState.staged.map((file) => `\tnew file:   ${file}`).join("\n")
          : "\t(no changes staged)";
        const modified = gitSimulatorState.modified.length
          ? gitSimulatorState.modified.map((file) => `\tmodified:   ${file}`).join("\n")
          : "\t(no unstaged changes)";
        output.push(`On branch ${gitSimulatorState.currentBranch || "main"}\nChanges to be committed:\n${staged}\n\nChanges not staged for commit:\n${modified}\n`);
      } else if (args === "add ." || args.startsWith("add ")) {
        const requested = args === "add ." ? gitSimulatorState.modified : args.slice(4).split(/\s+/);
        const stagedNow = requested.filter((file) => files.includes(file) && gitSimulatorState.modified.includes(file));
        gitSimulatorState.staged = [...new Set([...gitSimulatorState.staged, ...stagedNow])];
        gitSimulatorState.modified = gitSimulatorState.modified.filter((file) => !stagedNow.includes(file));
        output.push(stagedNow.length ? `Staged: ${stagedNow.join(", ")}\n` : "No matching modified sample files to stage.\n");
      } else if (args.startsWith("commit")) {
        if (!gitSimulatorState.staged.length) {
          output.push("nothing to commit (simulated); stage a sample file with `git add README.md`.\n");
        } else {
          const message = args.match(/-m\s+["'](.+?)["']/);
          const commitMessage = message ? message[1] : "Simulated commit";
          gitSimulatorState.commits.unshift({ hash: String(gitSimulatorState.commits.length + 1).padStart(7, "a"), message: commitMessage });
          gitSimulatorState.staged = [];
          output.push(`[${gitSimulatorState.currentBranch} ${gitSimulatorState.commits[0].hash}] ${commitMessage}\n`);
        }
      } else if (args === "branch" || args === "branch -a") {
        output.push(gitSimulatorState.branches.map((branch) => `${branch === gitSimulatorState.currentBranch ? "* " : "  "}${branch}`).join("\n") || "No branches yet.\n");
      } else if (args.startsWith("branch ")) {
        const name = args.slice(7).trim();
        if (!name || gitSimulatorState.branches.includes(name)) output.push("Branch name is missing or already exists.\n");
        else {
          gitSimulatorState.branches.push(name);
          output.push(`Created branch '${name}'. Switch with 'git switch ${name}'.\n`);
        }
      } else if (args.startsWith("switch ") || args.startsWith("checkout ")) {
        const name = args.startsWith("switch ") ? args.slice(7).trim() : args.slice(9).trim();
        if (gitSimulatorState.branches.includes(name)) {
          gitSimulatorState.currentBranch = name;
          output.push(`Switched to branch '${name}'.\n`);
        } else output.push(`error: branch '${name}' does not exist in this simulated repository.\n`);
      } else if (args.startsWith("merge ")) {
        const name = args.slice(6).trim();
        if (gitSimulatorState.branches.includes(name)) output.push(`Simulated merge of '${name}' into '${gitSimulatorState.currentBranch}'. No conflicts in this sample.\n`);
        else output.push(`merge: ${name} - not a simulated branch.\n`);
      } else if (args.startsWith("remote add ")) {
        gitSimulatorState.remoteAdded = true;
        output.push("Added simulated remote. The URL was not contacted.\n");
      } else if (args === "remote" || args === "remote -v") {
        output.push(gitSimulatorState.remoteAdded ? "origin  https://example.com/user/project.git (simulated)\n" : "No simulated remotes configured.\n");
      } else if (args.startsWith("push")) {
        output.push(gitSimulatorState.remoteAdded ? "Simulated push complete. No network connection was made.\n" : "No remote configured. Try `git remote add origin <url>` in the simulator.\n");
      } else if (args.startsWith("pull") || args.startsWith("fetch")) {
        output.push(gitSimulatorState.remoteAdded ? "Simulated remote update complete. No network connection was made.\n" : "No remote configured in this simulated repository.\n");
      } else if (args === "log" || args === "log --oneline") {
        output.push(gitSimulatorState.commits.length
          ? gitSimulatorState.commits.map((commit) => `${commit.hash} ${commit.message}`).join("\n") + "\n"
          : "No commits yet. Stage and commit a sample file first.\n");
      } else if (args === "diff" || args.startsWith("diff ")) {
        output.push(gitSimulatorState.modified.length ? `diff -- simulated working tree\n${gitSimulatorState.modified.map((file) => `+ updated sample content in ${file}`).join("\n")}\n` : "No unstaged changes in the simulated working tree.\n");
      } else if (args.startsWith("restore ") || args.startsWith("reset ") || args.startsWith("revert ") || args.startsWith("tag ") || args.startsWith("rm --cached ")) {
        output.push(`Simulated ${args.split(" ")[0]} command. Review the lesson example; no repository files or commits were changed.\n`);
      } else if (args.startsWith("clone ")) {
        gitSimulatorState.initialized = true;
        gitSimulatorState.branches = ["main"];
        gitSimulatorState.currentBranch = "main";
        gitSimulatorState.remoteAdded = true;
        output.push("Cloned a simulated sample repository. No URL was contacted.\n");
      } else {
        output.push("Command is not supported by this safe simulator. Try `git status`, `git add README.md`, `git commit -m \"message\"`, `git branch`, or `git log`.\n");
      }
    });

    const text = output.length ? output.join("\n") : gitSimulatorInitialOutput;
    preview.srcdoc = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0;padding:1rem;background:#0b1220;color:#d1fae5;font:13px/1.65 "Courier New",monospace}pre{margin:0;white-space:pre-wrap;overflow-wrap:anywhere;color:#d1fae5}.notice{margin:0 0 1rem;padding:.7rem .8rem;border:1px solid #166534;border-radius:8px;background:#052e16;color:#bbf7d0;font:12px/1.5 system-ui,sans-serif}</style></head><body><p class="notice">SIMULATION ONLY — no local repository, settings, or network are accessed.</p><pre>${escapeHtml(text)}</pre></body></html>`;
    setStatus("Git command simulation complete. No system commands were run.");
  };

  const renderLinuxTerminal = (commands) => {
    const initialOutput = "Linux Learning Terminal\nA fresh virtual Linux lab is created for each run.\n\nTry: pwd, ls, cd /tmp, mkdir practice, touch practice.txt, cat README.txt";
    const directories = new Set(["/", "/home", "/home/student", "/etc", "/tmp", "/usr", "/usr/bin", "/var", "/var/log"]);
    const files = new Map([
      ["/etc/hostname", "linux-lab\n"],
      ["/etc/os-release", "NAME=\"Linux Learning Lab\"\nID=linux-lab\nVERSION=\"1.0\"\n"],
      ["/home/student/README.txt", "Welcome to the virtual Linux learning lab.\n"],
      ["/home/student/notes.txt", "Linux commands operate on files and directories.\nPractice safely in this virtual filesystem.\n"],
      ["/var/log/sample.log", "System started (simulated).\n"]
    ]);
    const packages = new Set(["coreutils", "bash"]);
    const processes = [
      { pid: 1, user: "root", command: "init" },
      { pid: 412, user: "student", command: "bash" },
      { pid: 428, user: "student", command: "learning-terminal" }
    ];
    const output = [];
    let cwd = "/home/student";
    let cleared = false;
    const normalize = (path) => {
      const source = path.startsWith("~")
        ? `/home/student${path.slice(1)}`
        : path.startsWith("/")
          ? path
          : `${cwd}/${path}`;
      const parts = [];
      source.split("/").forEach((part) => {
        if (!part || part === ".") return;
        if (part === "..") parts.pop();
        else parts.push(part);
      });
      return `/${parts.join("/")}`;
    };
    const tokenize = (line) => {
      const tokens = [];
      const pattern = /"([^"]*)"|'([^']*)'|([^\s]+)/g;
      let match;
      while ((match = pattern.exec(line)) !== null) tokens.push(match[1] ?? match[2] ?? match[3]);
      return tokens;
    };
    const isDirectory = (path) => directories.has(path);
    const hasPath = (path) => isDirectory(path) || files.has(path);
    const childrenOf = (path) => {
      const prefix = path === "/" ? "/" : `${path}/`;
      const entries = new Set();
      [...directories, ...files.keys()].forEach((entry) => {
        if (!entry.startsWith(prefix) || entry === path) return;
        const child = entry.slice(prefix.length).split("/")[0];
        if (child) entries.add(child + (entry.slice(prefix.length).includes("/") || directories.has(`${prefix}${child}`) ? "/" : ""));
      });
      return [...entries].sort((left, right) => left.localeCompare(right));
    };
    const parentExists = (path) => isDirectory(path.slice(0, path.lastIndexOf("/")) || "/");

    commands.split(/\r?\n/).forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) return;
      if (line.length > 240) {
        output.push("$ [line omitted]\nInput is too long for this virtual terminal.\n");
        return;
      }
      const tokens = tokenize(line);
      const command = tokens[0];
      const args = tokens.slice(1);
      output.push(`student@linux-lab:${cwd === "/home/student" ? "~" : cwd}$ ${line}`);
      if (/[;|&<>`$]/.test(line) || line.includes("$(") || line.includes("${")) {
        output.push("Shell operators and expansions are not interpreted by this learning terminal.\n");
        return;
      }
      if (command === "clear") {
        output.length = 0;
        cleared = true;
        return;
      }
      if (command === "pwd") {
        output.push(`${cwd}\n`);
      } else if (command === "ls") {
        const pathArg = args.find((arg) => !arg.startsWith("-")) || ".";
        const path = normalize(pathArg);
        output.push(isDirectory(path) ? `${childrenOf(path).join("  ") || "(empty directory)"}\n` : hasPath(path) ? `${path.split("/").pop()}\n` : `ls: cannot access '${pathArg}': No such file or directory\n`);
      } else if (command === "cd") {
        const path = normalize(args[0] || "~");
        if (isDirectory(path)) cwd = path;
        else output.push(`cd: ${args[0] || "~"}: No such directory in the virtual filesystem\n`);
      } else if (command === "mkdir" || command === "touch") {
        const recursive = command === "mkdir" && args[0] === "-p";
        const targets = args.filter((arg) => arg !== "-p");
        if (!targets.length) output.push(`${command}: missing operand\n`);
        targets.forEach((target) => {
          const path = normalize(target);
          if (command === "mkdir" && recursive) {
            const parts = path.split("/").filter(Boolean);
            let current = "";
            parts.forEach((part) => {
              current += `/${part}`;
              directories.add(current);
            });
          } else if (hasPath(path)) {
            output.push(`${command}: '${target}' already exists\n`);
          } else if (!parentExists(path)) {
            output.push(`${command}: parent directory does not exist: '${target}'\n`);
          } else if (command === "mkdir") {
            directories.add(path);
            output.push(`Created virtual directory ${path}\n`);
          } else {
            files.set(path, "");
            output.push(`Created virtual file ${path}\n`);
          }
        });
      } else if (["cat", "less", "head", "tail"].includes(command)) {
        const path = normalize(args.find((arg) => !arg.startsWith("-")) || "");
        if (!files.has(path)) output.push(`${command}: ${args[0] || ""}: No such virtual file\n`);
        else {
          let lines = files.get(path).split(/\r?\n/);
          if (command === "head") lines = lines.slice(0, 10);
          if (command === "tail") lines = lines.slice(-10);
          output.push(`${lines.join("\n")}\n`);
        }
      } else if (command === "cp" || command === "mv") {
        if (args.length !== 2) output.push(`${command}: expected a source and destination path\n`);
        else {
          const source = normalize(args[0]);
          const destination = normalize(args[1]);
          if (!files.has(source)) output.push(`${command}: source must be an existing virtual file\n`);
          else if (!parentExists(destination)) output.push(`${command}: destination directory does not exist\n`);
          else {
            files.set(destination, files.get(source));
            if (command === "mv") files.delete(source);
            output.push(`${command === "cp" ? "Copied" : "Moved"} virtual file to ${destination}\n`);
          }
        }
      } else if (command === "rm") {
        const targetArgs = args.filter((arg) => !arg.startsWith("-"));
        if (!targetArgs.length) output.push("rm: specify a sample file path (directories and system paths are protected)\n");
        targetArgs.forEach((target) => {
          const path = normalize(target);
          if (files.has(path) && path.startsWith("/home/student/")) {
            files.delete(path);
            output.push(`Removed virtual sample file ${path}\n`);
          } else output.push("rm: only files inside the virtual student home can be removed\n");
        });
      } else if (command === "echo") {
        output.push(`${args.join(" ")}\n`);
      } else if (command === "whoami" || command === "id") {
        output.push(command === "whoami" ? "student\n" : "uid=1000(student) gid=1000(student) groups=1000(student),27(sudo)\n");
      } else if (command === "groups") {
        output.push("student sudo\n");
      } else if (command === "chmod" || command === "chown") {
        output.push(`${command}: permission change recorded for the virtual lab only; no real accounts or files are modified.\n`);
      } else if (command === "sudo") {
        output.push("sudo: elevated commands are not available; no privileged operation was run.\n");
      } else if (command === "ps" || command === "top") {
        output.push("  PID USER     COMMAND\n" + processes.map((process) => `${String(process.pid).padStart(5)} ${process.user.padEnd(8)} ${process.command}`).join("\n") + "\n");
      } else if (command === "kill") {
        const pid = Number(args[0]);
        if (!Number.isInteger(pid) || pid === 1) output.push("kill: use a sample process ID other than the protected init process\n");
        else if (processes.some((process) => process.pid === pid)) {
          const process = processes.find((entry) => entry.pid === pid);
          processes.splice(processes.indexOf(process), 1);
          output.push(`Sent simulated TERM to process ${pid}; no real process was affected.\n`);
        } else output.push(`kill: process ${args[0] || ""} not found in the sample process list\n`);
      } else if (command === "apt") {
        if (args[0] === "update") output.push("Package lists refreshed in the virtual lab. No network access or system changes.\n");
        else if (args[0] === "install" && args[1] && /^[a-z0-9][a-z0-9+.-]*$/i.test(args[1])) {
          packages.add(args[1]);
          output.push(`Package ${args[1]} marked installed in the virtual lab only.\n`);
        } else if (args[0] === "remove" && args[1]) {
          packages.delete(args[1]);
          output.push(`Package ${args[1]} marked removed in the virtual lab only.\n`);
        } else output.push(`apt: unsupported practice operation. Installed sample packages: ${[...packages].join(", ")}\n`);
      } else if (command === "ping") {
        output.push(`PING ${args[0] || "example.invalid"} (simulated): 3 packets transmitted, 3 received; no network request was made.\n`);
      } else if (command === "ip") {
        output.push("lo: 127.0.0.1/8\neth0: 192.0.2.10/24 (documentation address; simulated)\n");
      } else if (command === "ssh") {
        output.push("SSH is explained in the lesson, but this terminal never opens network connections.\n");
      } else if (command === "uname") {
        output.push("Linux linux-lab 6.1.0-learning #1 SMP x86_64 GNU/Linux (simulated)\n");
      } else if (command === "env") {
        output.push("HOME=/home/student\nUSER=student\nSHELL=/bin/bash (simulated)\n");
      } else if (command === "df") {
        output.push("Filesystem      Size  Used Avail Use% Mounted on\nvirtual-root     10G  2.1G  7.9G  21% /\n");
      } else if (command === "free") {
        output.push("              total        used        free\nMem:        2048000      512000     1536000 (simulated)\n");
      } else if (command === "systemctl") {
        output.push(args[0] === "status" ? "learning-demo.service - Sample service\n   Active: active (simulated)\n" : "UNIT                     STATE\nlearning-demo.service    active (simulated)\n");
      } else if (command === "bash" && args[0] === "--version") {
        output.push("GNU bash, version 5.x (simulated)\n");
      } else if (command === "help") {
        output.push("Supported practice: pwd, ls, cd, clear, mkdir, touch, cat, less, head, tail, cp, mv, rm, echo, whoami, groups, chmod, chown, ps, top, kill, apt, ping, ip, ssh, uname, env, df, free, systemctl, bash --version.\n");
      } else {
        output.push(`${command}: command is not supported by this virtual terminal. Nothing was executed.\n`);
      }
    });

    const text = cleared && !output.length ? "Terminal cleared. Virtual Linux lab remains active for this run." : output.length ? output.join("\n") : initialOutput;
    preview.srcdoc = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0;padding:1rem;background:#0b1220;color:#d1fae5;font:13px/1.65 "Courier New",monospace}pre{margin:0;white-space:pre-wrap;overflow-wrap:anywhere}.notice{margin:0 0 1rem;padding:.7rem .8rem;border:1px solid #166534;border-radius:8px;background:#052e16;color:#bbf7d0;font:12px/1.5 system-ui,sans-serif}</style></head><body><p class="notice">VIRTUAL TERMINAL — sample state only; no real shell, files, accounts, packages, processes, or network are accessed.</p><pre>${escapeHtml(text)}</pre></body></html>`;
    setStatus("Virtual Linux session complete. No system commands were run.");
  };

  const setStatus = (message) => {
    if (status) status.textContent = message;
  };

  const renderPreview = () => {
    if (course.subject === "Git & GitHub") {
      renderGitSimulator(editor.value);
      return;
    }
    if (course.subject === "Linux") {
      renderLinuxTerminal(editor.value);
      return;
    }
    if (course.subject === "HTML") {
      preview.srcdoc = editor.value;
      setStatus("HTML preview updated.");
      return;
    }

    if (course.subject === "Computer Organization") {
      const escapedExample = editor.value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      preview.srcdoc = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0;padding:1.5rem;background:#0b1220;color:#dbeafe;font:14px/1.7 "Courier New",monospace}pre{margin:0;white-space:pre-wrap;overflow-wrap:anywhere}</style></head><body><pre>${escapedExample}</pre></body></html>`;
      setStatus("Architecture example updated.");
      return;
    }

    const demoDocument = `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            * { box-sizing: border-box; }
            body { margin: 0; min-height: 100vh; padding: 2rem; display: grid; place-items: center; background: #f1f5f9; font-family: system-ui, sans-serif; color: #172554; }
            .demo-card { width: min(100%, 520px); padding: 2rem; border-radius: 20px; background: white; box-shadow: 0 16px 40px rgba(30, 64, 175, .14); }
            .demo-card .eyebrow { color: #2563eb; font-size: .75rem; font-weight: 800; letter-spacing: .12em; }
            .demo-card h1 { margin: .75rem 0; font-size: 2rem; }
            .demo-card p { color: #475569; line-height: 1.6; }
            .demo-card button { border: 0; border-radius: 999px; padding: .75rem 1rem; background: #2563eb; color: white; font-weight: 700; }
            ${editor.value}
          </style>
        </head>
        <body>
          <main class="demo-card">
            <span class="eyebrow">CSS PLAYGROUND</span>
            <h1>Style this card</h1>
            <p>Edit the CSS and preview your design.</p>
            <button type="button">Explore CSS</button>
          </main>
        </body>
      </html>`;
    preview.srcdoc = demoDocument;
    setStatus("CSS preview updated.");
  };

  const makeHtmlExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const explicitTag = topic.match(/<([a-z][a-z0-9-]*)/i);
    const tag = explicitTag ? explicitTag[1].toLowerCase() : "";

    if (lower.includes("doctype")) return "<!DOCTYPE html>\n<html lang=\"en\">\n  <head><title>My page</title></head>\n  <body><h1>Hello!</h1></body>\n</html>";
    if (lower.includes("what is html")) return "<h1>Welcome</h1>\n<p>HTML gives web content its structure and meaning.</p>";
    if (lower.includes("history")) return "<h2>HTML through the years</h2>\n<ul><li>Early web documents</li><li>Standardized markup</li><li>Modern semantic HTML</li></ul>";
    if (lower.includes("version") || lower.includes("html5 introduction")) return "<ul>\n  <li>HTML 4</li>\n  <li>XHTML</li>\n  <li>HTML5 and the living standard</li>\n</ul>";
    if (lower.includes("features") || lower.includes("advantages")) return "<ul>\n  <li>Semantic structure</li>\n  <li>Native forms and media</li>\n  <li>Works across modern browsers</li>\n</ul>";
    if (lower.includes("html vs html5")) return "<table>\n  <tr><th>Earlier HTML</th><th>Modern HTML</th></tr>\n  <tr><td>Limited native media</td><td>Audio and video elements</td></tr>\n  <tr><td>Generic page regions</td><td>Semantic landmarks</td></tr>\n</table>";
    if (lower.includes("how html works")) return "<!-- Browser parses elements into a document tree -->\n<header><h1>Page structure</h1></header>\n<main><p>Visible page content</p></main>";
    if (lower.includes("html comments")) return "<!-- This note is for developers and is not shown as page content -->\n<p>This paragraph is visible.</p>";
    if (lower.includes("html elements") || lower.includes("html tags")) return "<article>\n  <h2>Element example</h2>\n  <p>An element can contain text and other elements.</p>\n</article>";
    if (lower.includes("headings")) return "<h1>Main page heading</h1>\n<h2>Section heading</h2>\n<p>Supporting text goes here.</p>";
    if (lower.includes("paragraph")) return "<p>This is a paragraph of text.</p>";
    if (lower.includes("line break")) return "First line<br>Second line";
    if (lower.includes("horizontal line")) return "<p>First topic</p>\n<hr>\n<p>Next topic</p>";
    if (lower.includes("bold")) return "<p><b>Bold text</b> is styled without adding importance.</p>";
    if (lower.includes("strong")) return "<p><strong>Important:</strong> save your work.</p>";
    if (lower.includes("italic")) return "<p><i>Italic text</i></p>";
    if (lower.includes("emphasis")) return "<p>This word is <em>emphasized</em>.</p>";
    if (lower.includes("underline")) return "<p><u>Underlined text</u></p>";
    if (lower.includes("small text")) return "<p>Price <small>excluding taxes</small></p>";
    if (lower.includes("highlight")) return "<p>Remember to <mark>practice daily</mark>.</p>";
    if (lower.includes("superscript")) return "<p>2<sup>3</sup> = 8</p>";
    if (lower.includes("subscript")) return "<p>H<sub>2</sub>O</p>";
    if (lower.includes("deleted")) return "<p><del>$20</del> $15</p>";
    if (lower.includes("inserted")) return "<p><ins>Newly added text</ins></p>";
    if (lower.includes("preformatted")) return "<pre>Line one\n  Indented line</pre>";
    if (lower.includes("code")) return "<p>Run <code>npm start</code> in the terminal.</p>";
    if (lower.includes("hyperlink") || lower.includes("external link") || lower.includes("absolute url")) return "<a href=\"https://example.com/learn\">Visit the learning page</a>";
    if (lower.includes("relative url")) return "<a href=\"lessons/intro.html\">Open the introduction lesson</a>";
    if (lower.includes("href")) return "<a href=\"about.html\">About this course</a>";
    if (lower.includes("target")) return "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">Open in a new tab</a>";
    if (lower.includes("email link")) return "<a href=\"mailto:hello@example.com\">Email us</a>";
    if (lower.includes("phone link")) return "<a href=\"tel:+15551234567\">Call us</a>";
    if (lower.includes("bookmark") || lower.includes("anchor link") || lower.includes("internal link")) return "<a href=\"#details\">Jump to details</a>\n<section id=\"details\"><h2>Details</h2></section>";
    if (lower.includes("download link")) return "<a href=\"guide.pdf\" download>Download the guide</a>";
    if (lower.includes("responsive image")) return "<img src=\"photo.jpg\" alt=\"A student learning HTML\" style=\"max-width:100%;height:auto\">";
    if (lower.includes("image title")) return "<img src=\"photo.jpg\" alt=\"A student learning HTML\" title=\"HTML lesson\">";
    if (lower.includes("image as a link")) return "<a href=\"course.html\"><img src=\"course.jpg\" alt=\"Open the HTML course\"></a>";
    if (lower.includes("width and height")) return "<img src=\"photo.jpg\" alt=\"A student learning HTML\" width=\"480\" height=\"320\">";
    if (lower.includes("image") || tag === "img") return "<img src=\"photo.jpg\" alt=\"A student learning HTML\" width=\"480\" height=\"320\">";
    if (lower.includes("figure") || tag === "figcaption") return "<figure>\n  <img src=\"photo.jpg\" alt=\"A quiet study desk\">\n  <figcaption>A quiet place to learn.</figcaption>\n</figure>";
    if (lower.includes("ordered list types")) return "<ol type=\"A\"><li>Plan</li><li>Build</li></ol>";
    if (lower.includes("unordered list types")) return "<ul><li>HTML</li><li>CSS</li></ul>";
    if (lower.includes("description list")) return "<dl><dt>HTML</dt><dd>Structures web content.</dd></dl>";
    if (lower.includes("nested list")) return "<ul><li>Frontend<ul><li>HTML</li><li>CSS</li></ul></li></ul>";
    if (lower.includes("list")) return "<ol>\n  <li>Plan the page</li>\n  <li>Write the markup</li>\n</ol>";
    if (lower.includes("table") || ["table", "tr", "th", "td", "thead", "tbody", "tfoot"].includes(tag)) return "<table>\n  <caption>Study plan</caption>\n  <thead><tr><th scope=\"col\">Day</th><th scope=\"col\">Topic</th></tr></thead>\n  <tbody><tr><td>Monday</td><td>HTML</td></tr></tbody>\n</table>";
    if (lower.includes("rowspan")) return "<table border=\"1\"><tr><th rowspan=\"2\">Web</th><td>HTML</td></tr><tr><td>CSS</td></tr></table>";
    if (lower.includes("colspan")) return "<table border=\"1\"><tr><th colspan=\"2\">Course schedule</th></tr><tr><td>HTML</td><td>CSS</td></tr></table>";
    if (lower.includes("password input")) return "<label for=\"password\">Password</label>\n<input id=\"password\" name=\"password\" type=\"password\" required>";
    if (lower.includes("number input")) return "<label for=\"quantity\">Quantity</label>\n<input id=\"quantity\" name=\"quantity\" type=\"number\" min=\"1\" max=\"10\">";
    if (lower.includes("radio")) return "<label><input type=\"radio\" name=\"level\" value=\"beginner\"> Beginner</label>\n<label><input type=\"radio\" name=\"level\" value=\"advanced\"> Advanced</label>";
    if (lower.includes("checkbox")) return "<label><input type=\"checkbox\" name=\"updates\"> Send me course updates</label>";
    if (lower.includes("date input")) return "<label for=\"date\">Choose a date</label>\n<input id=\"date\" name=\"date\" type=\"date\">";
    if (lower.includes("time input")) return "<label for=\"time\">Choose a time</label>\n<input id=\"time\" name=\"time\" type=\"time\">";
    if (lower.includes("file input")) return "<label for=\"file\">Upload a file</label>\n<input id=\"file\" name=\"file\" type=\"file\">";
    if (lower.includes("color input")) return "<label for=\"color\">Choose a color</label>\n<input id=\"color\" name=\"color\" type=\"color\" value=\"#2563eb\">";
    if (lower.includes("range input")) return "<label for=\"progress\">Progress</label>\n<input id=\"progress\" name=\"progress\" type=\"range\" min=\"0\" max=\"100\" value=\"50\">";
    if (lower.includes("email input")) return "<label for=\"email\">Email</label>\n<input id=\"email\" name=\"email\" type=\"email\" autocomplete=\"email\" required>";
    if (lower.includes("text input")) return "<label for=\"name\">Name</label>\n<input id=\"name\" name=\"name\" type=\"text\">";
    if (lower.includes("textarea")) return "<label for=\"message\">Message</label>\n<textarea id=\"message\" name=\"message\" rows=\"4\"></textarea>";
    if (lower.includes("select") || lower.includes("option") || lower.includes("optgroup")) return "<label for=\"course\">Choose a course</label>\n<select id=\"course\" name=\"course\"><optgroup label=\"Web\"><option>HTML</option><option>CSS</option></optgroup></select>";
    if (lower.includes("fieldset") || lower.includes("legend")) return "<fieldset>\n  <legend>Contact details</legend>\n  <label for=\"contact-email\">Email</label>\n  <input id=\"contact-email\" type=\"email\">\n</fieldset>";
    if (lower.includes("reset button")) return "<form>\n  <input name=\"name\" placeholder=\"Your name\">\n  <button type=\"reset\">Reset form</button>\n</form>";
    if (lower.includes("submit button") || lower.includes("<button>")) return "<button type=\"submit\">Submit form</button>";
    if (lower.includes("placeholder")) return "<input type=\"text\" name=\"name\" placeholder=\"Enter your name\">";
    if (lower.includes("pattern")) return "<label for=\"code\">Student code (3 letters)</label>\n<input id=\"code\" name=\"code\" pattern=\"[A-Za-z]{3}\" required>";
    if (lower.includes("min") || lower.includes("max")) return "<input type=\"number\" min=\"1\" max=\"100\" value=\"25\">";
    if (lower.includes("required")) return "<input type=\"email\" name=\"email\" required>";
    if (lower.includes("form validation")) return "<form>\n  <label for=\"email\">Email</label>\n  <input id=\"email\" type=\"email\" required>\n  <button>Continue</button>\n</form>";
    if (lower.includes("action") || lower.includes("method")) return "<form action=\"/register\" method=\"post\">\n  <label for=\"name\">Name</label>\n  <input id=\"name\" name=\"name\" required>\n  <button type=\"submit\">Register</button>\n</form>";
    if (lower.includes("form") || lower.includes("input") || lower.includes("button") || lower.includes("label")) return "<form>\n  <label for=\"email\">Email address</label>\n  <input id=\"email\" name=\"email\" type=\"email\" placeholder=\"you@example.com\" required>\n  <button type=\"submit\">Join</button>\n</form>";
    if (lower.includes("semantic") || ["header", "nav", "main", "section", "article", "aside", "footer"].includes(tag)) return "<header><h1>Learning Hub</h1></header>\n<nav aria-label=\"Main navigation\"><a href=\"#lesson\">Lesson</a></nav>\n<main><article id=\"lesson\"><h2>HTML semantics</h2><p>Meaningful page content.</p></article></main>\n<footer>Keep learning</footer>";
    if (lower.includes("audio")) return "<audio controls>\n  <source src=\"lesson.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>";
    if (lower.includes("autoplay")) return "<video controls muted playsinline>\n  <source src=\"lesson.mp4\" type=\"video/mp4\">\n</video>\n<p>Autoplay should be muted and should not surprise visitors.</p>";
    if (lower.includes("poster")) return "<video controls poster=\"preview.jpg\">\n  <source src=\"lesson.mp4\" type=\"video/mp4\">\n</video>";
    if (lower.includes("muted")) return "<video controls muted>\n  <source src=\"lesson.mp4\" type=\"video/mp4\">\n</video>";
    if (lower.includes("loop")) return "<audio controls loop>\n  <source src=\"music.mp3\" type=\"audio/mpeg\">\n</audio>";
    if (lower.includes("audio controls")) return "<audio controls>\n  <source src=\"lesson.mp3\" type=\"audio/mpeg\">\n</audio>";
    if (lower.includes("video controls")) return "<video controls width=\"480\">\n  <source src=\"lesson.mp4\" type=\"video/mp4\">\n</video>";
    if (lower.includes("<source>")) return "<video controls>\n  <source src=\"lesson.mp4\" type=\"video/mp4\">\n  <source src=\"lesson.webm\" type=\"video/webm\">\n</video>";
    if (lower.includes("video") || lower.includes("youtube") || lower.includes("iframe")) return "<iframe title=\"Video lesson\" width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/VIDEO_ID\" allowfullscreen></iframe>";
    if (lower.includes("entities") || lower.includes("entity") || lower.includes("copyright") || lower.includes("currency") || lower.includes("quotation") || lower.includes("mathematical") || lower.includes("trademark") || lower.includes("registered symbol")) return "<p>HTML uses &lt;tags&gt; &amp; entities. Copyright &copy; 2026.</p>";
    if (lower.includes("canvas")) return "<canvas id=\"art\" width=\"240\" height=\"100\">Canvas is not supported.</canvas>";
    if (lower.includes("svg")) return "<svg viewBox=\"0 0 120 80\" role=\"img\" aria-label=\"Blue circle\"><circle cx=\"40\" cy=\"40\" r=\"30\" fill=\"royalblue\" /></svg>";
    if (lower.includes("session storage")) return "<script>\nsessionStorage.setItem(\"step\", \"1\");\nconst step = sessionStorage.getItem(\"step\");\n</script>";
    if (lower.includes("local storage") || lower.includes("web storage")) return "<script>\nlocalStorage.setItem(\"theme\", \"light\");\nconst theme = localStorage.getItem(\"theme\");\n</script>";
    if (lower.includes("geolocation")) return "<button type=\"button\">Share my location</button>\n<p>Ask permission before accessing location data.</p>";
    if (lower.includes("drag and drop")) return "<div draggable=\"true\">Drag this item</div>\n<div>Drop target</div>";
    if (lower.includes("web worker")) return "// main.js\nconst worker = new Worker(\"worker.js\");\nworker.postMessage(\"start\");";
    if (lower.includes("websocket")) return "const socket = new WebSocket(\"wss://example.com/socket\");\nsocket.addEventListener(\"open\", () => socket.send(\"Hello\"));";
    if (lower.includes("notification")) return "Notification.requestPermission().then((permission) => {\n  if (permission === \"granted\") new Notification(\"Hello!\");\n});";
    if (lower.includes("canvas vs svg")) return "<p>Canvas is pixel-based; SVG keeps individual vector shapes scalable.</p>\n<svg viewBox=\"0 0 80 50\"><circle cx=\"25\" cy=\"25\" r=\"18\" fill=\"royalblue\" /></svg>";
    if (lower.includes("lang")) return "<html lang=\"en\">\n  <body><p>The document language is English.</p></body>\n</html>";
    if (lower.includes("hidden")) return "<p hidden>This content is currently hidden.</p>\n<p>This content is visible.</p>";
    if (lower.includes("contenteditable")) return "<p contenteditable=\"true\">Click here and edit this text.</p>";
    if (lower.includes("draggable")) return "<div draggable=\"true\">Drag this item</div>";
    if (lower.includes("tabindex")) return "<p tabindex=\"0\">This paragraph can receive keyboard focus.</p>";
    if (lower.includes("data-*")) return "<button data-course=\"html\">Open course</button>";
    if (lower.includes("global attributes") || lower.includes("what are attributes")) return "<p id=\"intro\" class=\"note\" title=\"Course introduction\" lang=\"en\">Attributes add information to elements.</p>";
    if (lower.includes("inline css")) return "<p style=\"color: royalblue;\">This element has an inline style.</p>";
    if (lower.includes("internal css")) return "<style>\n  .note { color: royalblue; }\n</style>\n<p class=\"note\">Styled by a style element.</p>";
    if (lower.includes("external css")) return "<link rel=\"stylesheet\" href=\"styles.css\">\n<p class=\"note\">Styled by an external file.</p>";
    if (lower.includes("external javascript")) return "<script src=\"app.js\" defer></script>\n<button id=\"save\">Save</button>";
    if (lower.includes("meta") || lower.includes("viewport") || lower.includes("description") || lower.includes("keywords") || lower.includes("author") || lower.includes("robots") || lower.includes("favicon") || lower.includes("head elements") || tag === "meta" || tag === "title" || tag === "link" || tag === "style" || tag === "script" || tag === "base") return "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"A helpful page description\">\n  <title>My HTML Page</title>\n  <link rel=\"icon\" href=\"favicon.ico\">\n</head>";
    if (lower.includes("div") || lower.includes("span") || lower.includes("block-level") || lower.includes("inline element") || lower.includes("container")) return "<div class=\"card\">A block container with an <span>inline detail</span>.</div>";
    if (lower.includes("attribute") || lower.includes("id") || lower.includes("class") || lower.includes("style") || lower.includes("title")) return "<p id=\"intro\" class=\"note\" title=\"Introduction\">HTML content</p>";
    if (lower.includes("css")) return "<link rel=\"stylesheet\" href=\"styles.css\">\n<h1 class=\"welcome\">Hello, styled page!</h1>";
    if (lower.includes("javascript") || lower.includes("script") || lower.includes("dom") || lower.includes("event") || lower.includes("button click") || lower.includes("interaction")) return "<button id=\"hello\">Say hello</button>\n<script>\n  document.querySelector(\"#hello\").addEventListener(\"click\", () => alert(\"Hello!\"));\n</script>";
    if (lower.includes("project") || lower.includes("website") || lower.includes("page")) return "<header><h1>My project</h1></header>\n<main><section><h2>About</h2><p>Write your content here.</p></section></main>\n<footer>Contact: hello@example.com</footer>";
    if (tag === "html") return "<!DOCTYPE html>\n<html lang=\"en\">\n  <head><title>My page</title></head>\n  <body><h1>Page content</h1></body>\n</html>";
    if (tag === "head") return "<head>\n  <meta charset=\"UTF-8\">\n  <title>My page</title>\n</head>";
    if (tag === "title") return "<head><title>My descriptive page title</title></head>";
    if (tag === "body") return "<body>\n  <h1>Visible page content</h1>\n  <p>This content appears in the browser.</p>\n</body>";
    if (tag === "a") return "<a href=\"https://example.com\">Visit Example</a>";
    if (tag === "b") return "<p><b>Bold text</b></p>";
    if (tag === "i") return "<p><i>Italic text</i></p>";
    if (tag === "u") return "<p><u>Underlined text</u></p>";
    if (tag === "small") return "<p>Price <small>excluding taxes</small></p>";
    if (tag === "mark") return "<p><mark>Highlighted text</mark></p>";
    if (tag === "sup") return "<p>10<sup>2</sup> = 100</p>";
    if (tag === "sub") return "<p>CO<sub>2</sub></p>";
    if (tag === "del") return "<p><del>Old price</del> New price</p>";
    if (tag === "ins") return "<p><ins>Newly added text</ins></p>";
    if (tag === "br") return "First line<br>Second line";
    if (tag === "hr") return "<p>First section</p><hr><p>Next section</p>";
    if (tag === "label") return "<label for=\"name\">Your name</label>\n<input id=\"name\" name=\"name\">";
    if (tag === "summary") return "<details><summary>Read more</summary><p>Additional details are shown here.</p></details>";
    if (tag === "details") return "<details open><summary>Course details</summary><p>HTML structures web content.</p></details>";
    if (tag) return `<${tag}>Add ${topic} content here.</${tag}>`;
    return `<!-- ${moduleTitle} -->\n<p>${topic}</p>`;
  };

  const getHtmlExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    if (lower.includes("history")) return "HTML has evolved from a small document-markup language into the standard semantic foundation of the modern web.";
    if (lower.includes("version") || lower.includes("html5")) return "HTML5 introduced modern semantic elements, native media, improved forms, graphics, and browser APIs while keeping the web platform backward-compatible.";
    if (lower.includes("how html works")) return "A browser reads HTML markup, builds a document tree, and uses that structure to display content and expose it to assistive technologies.";
    if (lower.includes("attribute")) return "An attribute adds information or behavior to an element. It is written in the opening tag, usually as a name and value.";
    if (lower.includes("semantic")) return "Semantic markup describes the purpose of content. Meaningful elements improve navigation, accessibility, and maintainability.";
    if (lower.includes("accessibility") || lower.includes("aria") || lower.includes("keyboard")) return "Accessible HTML gives all visitors clear structure, keyboard-operable controls, useful alternatives, and understandable labels.";
    if (lower.includes("seo")) return "Search engines use clear titles, descriptive metadata, semantic structure, and useful content to understand and present a page.";
    if (lower.includes("form") || lower.includes("input") || lower.includes("label") || lower.includes("validation")) return "Forms collect user data. Correct input types, associated labels, and native validation make them easier to use and more reliable.";
    if (lower.includes("image") || lower.includes("alt")) return "Images add visual information. Source and size attributes load the asset; useful alternative text communicates its purpose when it cannot be seen.";
    if (lower.includes("link") || lower.includes("url") || lower.includes("hyperlink")) return "Links connect documents, resources, and page sections. A descriptive destination and meaningful link text help visitors know where they will go.";
    if (lower.includes("list")) return "Lists group related items. Choose an ordered list when sequence matters and an unordered list when the order does not.";
    if (lower.includes("table") || lower.includes("row") || lower.includes("cell")) return "Tables organize related data into rows and columns. Header cells and captions make relationships clear.";
    if (lower.includes("audio") || lower.includes("video") || lower.includes("multimedia") || lower.includes("iframe")) return "HTML can embed media and other documents. Provide controls, titles, and fallback information so embedded content is understandable.";
    if (lower.includes("meta") || lower.includes("head") || lower.includes("title") || lower.includes("favicon")) return "The head contains document metadata and linked resources. These details help browsers, devices, and search previews interpret the page.";
    if (lower.includes("entity") || lower.includes("symbol") || lower.includes("currency") || lower.includes("quotation")) return "Character references represent reserved markup characters and symbols so the browser displays them as text.";
    if (lower.includes("canvas") || lower.includes("svg") || lower.includes("graphic")) return "HTML graphics can be drawn as pixels on a canvas or described as scalable vector shapes with SVG.";
    if (lower.includes("storage") || lower.includes("api") || lower.includes("geolocation") || lower.includes("worker") || lower.includes("websocket") || lower.includes("notification")) return "Browser APIs extend web pages with capabilities. Use them only when needed, check browser support, and request permission for sensitive data.";
    if (lower.includes("css")) return "HTML defines the content and structure while CSS controls presentation. A stylesheet can be connected with a link element or added in a style block.";
    if (lower.includes("javascript") || lower.includes("script") || lower.includes("dom") || lower.includes("event")) return "JavaScript can respond to user actions and update the document. External scripts are easier to maintain and defer can avoid blocking page parsing.";
    if (lower.includes("best practice") || lower.includes("indentation") || lower.includes("clean code") || lower.includes("deprecated")) return "Good HTML is consistently indented, uses meaningful semantic elements, includes required attributes, and avoids obsolete markup.";
    if (lower.includes("project") || lower.includes("website") || lower.includes("page")) return "A practical page combines semantic regions, headings, links, and content into a clear structure that can later be styled and made interactive.";
    if (lower.includes("div") || lower.includes("span") || lower.includes("block") || lower.includes("inline")) return "Container elements group content. Use semantic elements when they express meaning, and use div or span for generic grouping when no semantic element fits.";
    if (lower.includes("text") || lower.includes("heading") || lower.includes("paragraph") || lower.includes("bold") || lower.includes("italic") || lower.includes("code")) return "Text elements organize and clarify written content. Choose elements by meaning, not only by their default visual appearance.";
    return `${topic} is part of ${moduleTitle}. Learn what it represents, how it is written, and when it is useful in a web document.`;
  };

  const makeCssExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();

    if (lower.includes("comment")) return "/* CSS comments explain intent and are ignored by the browser. */\n.demo-card {\n  color: #1d4ed8;\n}";
    if (lower.includes("syntax") || lower.includes("rule") || lower.includes("what is css") || lower.includes("why css") || lower.includes("how css")) return ".demo-card {\n  color: #1d4ed8;\n  padding: 1.5rem;\n}";
    if (lower.includes("inline") || lower.includes("internal") || lower.includes("external") || lower.includes("import")) return "/* Put this rule in a reusable external .css file. */\n.demo-card {\n  font-family: system-ui, sans-serif;\n  border-top: 4px solid #2563eb;\n}";
    if (lower.includes("selector") || lower === "*" || lower.includes("#id") || lower.includes(".class") || lower.includes("descendant") || lower.includes("sibling") || lower.includes("child selector") || lower.includes("grouping")) return ".demo-card,\n.demo-card p {\n  color: #1e3a8a;\n}\n.demo-card > button {\n  border-radius: 999px;\n}";
    if (lower.includes("color") || lower === "rgb" || lower === "rgba" || lower === "hsl" || lower === "hsla" || lower.includes("hexadecimal") || lower.includes("transparent")) return ".demo-card {\n  color: hsl(222 70% 30%);\n  background-color: rgba(219, 234, 254, 0.85);\n}";
    if (lower.includes("background") || lower.includes("gradient") || lower.includes("image") && moduleTitle.includes("Background")) return ".demo-card {\n  background-color: #dbeafe;\n  background-image: linear-gradient(135deg, #dbeafe, #ede9fe);\n  background-position: center;\n  background-size: cover;\n}";
    if (lower.includes("text") || lower.includes("letter spacing") || lower.includes("word spacing") || lower.includes("line height") || lower.includes("white space") || lower.includes("text overflow")) return ".demo-card p {\n  color: #334155;\n  line-height: 1.7;\n  letter-spacing: 0.02em;\n  text-align: left;\n}";
    if (lower.includes("font") || lower.includes("@font-face")) return ".demo-card {\n  font-family: system-ui, sans-serif;\n  font-size: 1rem;\n  font-weight: 500;\n  font-style: normal;\n}";
    if (lower.includes("unit") || ["px", "%", "em", "rem", "vh", "vw", "vmin", "vmax", "ch", "ex"].includes(lower)) return ".demo-card {\n  width: min(90vw, 32rem);\n  padding: 1.5rem;\n  font-size: clamp(1rem, 2vw, 1.25rem);\n}";
    if (lower.includes("box model") || lower === "content" || lower === "box sizing" || lower.includes("box-sizing") || lower.includes("margin collapse")) return ".demo-card {\n  box-sizing: border-box;\n  width: 320px;\n  padding: 24px;\n  border: 2px solid #93c5fd;\n  margin: 20px auto;\n}";
    if (lower.includes("border") || lower.includes("rounded") || lower.includes("circle")) return ".demo-card {\n  border: 2px solid #60a5fa;\n  border-radius: 18px;\n}";
    if (lower.includes("margin") || lower.includes("padding")) return ".demo-card {\n  margin: 1rem auto;\n  padding: 1.5rem;\n}\n.demo-card p {\n  margin-block: 0.75rem;\n}";
    if (lower.includes("width") || lower.includes("height") || lower.includes("calc()") || lower.includes("min-width") || lower.includes("max-width")) return ".demo-card {\n  width: min(100% - 2rem, 34rem);\n  min-height: 12rem;\n  margin-inline: auto;\n}";
    if (lower.includes("display") || ["block", "inline", "inline-block", "none", "flex", "grid", "table", "contents"].includes(lower) || lower.includes("visibility")) return ".demo-card button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}";
    if (lower.includes("position") || ["static", "relative", "absolute", "fixed", "sticky", "top", "right", "bottom", "left", "z-index"].includes(lower)) return ".demo-card {\n  position: relative;\n}\n.demo-card::after {\n  content: \"New\";\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n}";
    if (lower.includes("overflow") || ["visible", "hidden", "scroll", "auto", "overflow-x", "overflow-y"].includes(lower) || lower.includes("scrollable")) return ".demo-card {\n  max-height: 12rem;\n  overflow: auto;\n}\n.demo-card p {\n  overflow-wrap: anywhere;\n}";
    if (lower.includes("flex") || lower.includes("justify") || lower.includes("align") || lower.includes("grow") || lower.includes("shrink") || lower.includes("basis") || lower.includes("order")) return ".demo-card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1rem;\n}";
    if (lower.includes("grid") || lower.includes("columns") || lower.includes("rows") || lower.includes("grid area")) return ".demo-card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));\n  gap: 1rem;\n}";
    if (lower.includes("shadow") || lower.includes("blur") || lower.includes("glow")) return ".demo-card {\n  box-shadow: 0 16px 40px rgba(30, 64, 175, 0.16);\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n}";
    if (lower.includes("opacity") || lower.includes("transparen")) return ".demo-card {\n  background: rgba(255, 255, 255, 0.78);\n  border: 1px solid rgba(37, 99, 235, 0.24);\n}";
    if (lower.includes(":") || lower.includes("pseudo-class") || lower.includes("pseudo-element") || lower.includes("first-child") || lower.includes("last-child") || lower.includes("nth-child") || lower.includes("before") || lower.includes("after") || lower.includes("placeholder") || lower.includes("selection")) return ".demo-card button:hover {\n  background: #1d4ed8;\n}\n.demo-card button:focus-visible {\n  outline: 3px solid #93c5fd;\n  outline-offset: 3px;\n}";
    if (lower.includes("transition")) return ".demo-card button {\n  transition: transform 180ms ease, background-color 180ms ease;\n}\n.demo-card button:hover {\n  transform: translateY(-3px);\n}";
    if (lower.includes("transform") || lower.includes("translate") || lower.includes("rotate") || lower.includes("scale") || lower.includes("skew")) return ".demo-card {\n  transform: translateY(-4px) rotate(-1deg);\n  transform-origin: center;\n}";
    if (lower.includes("animation") || lower.includes("keyframes") || lower.includes("loading")) return "@keyframes gentle-bob {\n  from { transform: translateY(0); }\n  to { transform: translateY(-6px); }\n}\n.demo-card {\n  animation: gentle-bob 1.2s ease-in-out infinite alternate;\n}";
    if (lower.includes("responsive") || lower.includes("media") || lower.includes("mobile") || lower.includes("breakpoint") || lower.includes("@media")) return ".demo-card {\n  width: min(100%, 32rem);\n}\n@media (max-width: 600px) {\n  .demo-card { padding: 1rem; }\n}";
    if (lower.includes("function") || lower.includes("clamp") || lower.includes("min()") || lower.includes("max()") || lower.includes("var()") || lower.includes("url()")) return ":root { --card-space: clamp(1rem, 4vw, 2rem); }\n.demo-card {\n  padding: var(--card-space);\n  width: min(100%, 34rem);\n}";
    if (lower.includes("variable") || lower.includes("theme") || lower.includes("dark/light") || lower.includes("--variable")) return ":root {\n  --brand: #2563eb;\n  --surface: #ffffff;\n}\n.demo-card {\n  color: var(--brand);\n  background: var(--surface);\n}";
    if (lower.includes("form") || lower.includes("input") || lower.includes("label") || lower.includes("textarea") || lower.includes("select") || lower.includes("checkbox") || lower.includes("radio") || lower.includes("focus") || lower.includes("validation")) return ".demo-card input,\n.demo-card textarea,\n.demo-card select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #94a3b8;\n  border-radius: 0.65rem;\n}\n.demo-card input:focus {\n  outline: 3px solid #bfdbfe;\n}";
    if (lower.includes("table") || lower.includes("zebra")) return ".demo-card table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.demo-card th,\n.demo-card td {\n  padding: 0.75rem;\n  border-bottom: 1px solid #cbd5e1;\n}\n.demo-card tr:nth-child(even) { background: #eff6ff; }";
    if (lower.includes("list") || lower.includes("navbar") || lower.includes("navigation") || lower.includes("menu") || lower.includes("hamburger") || lower.includes("dropdown")) return ".demo-card ul {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  list-style: none;\n  padding: 0;\n}\n.demo-card a { color: #1d4ed8; }";
    if (lower.includes("card") || lower.includes("portfolio") || lower.includes("login page") || lower.includes("registration form") || lower.includes("landing page") || lower.includes("dashboard") || lower.includes("gallery") || lower.includes("e-commerce") || lower.includes("animated website")) return ".demo-card {\n  width: min(100%, 32rem);\n  padding: 2rem;\n  border: 1px solid #dbeafe;\n  border-radius: 1.25rem;\n  background: #ffffff;\n  box-shadow: 0 16px 40px rgba(30, 64, 175, 0.14);\n}";
    if (lower.includes("column") || lower.includes("container quer") || lower.includes("aspect-ratio") || lower.includes("object-fit") || lower.includes("layered") || lower.includes("flexbox vs grid")) return ".demo-card {\n  container-type: inline-size;\n  aspect-ratio: 16 / 9;\n  overflow: hidden;\n}\n@container (min-width: 30rem) {\n  .demo-card { display: grid; grid-template-columns: 1fr 1fr; }\n}";
    if (lower.includes("glass") || lower.includes("neumorphism") || lower.includes("backdrop") || lower.includes("3d") || lower.includes("modern effect")) return ".demo-card {\n  background: rgba(255, 255, 255, 0.72);\n  backdrop-filter: blur(12px);\n  box-shadow: 0 16px 40px rgba(30, 64, 175, 0.16);\n}";
    if (lower.includes("accessib") || lower.includes("contrast") || lower.includes("reduced motion") || lower.includes("prefers-reduced") || lower.includes("focus indicator")) return ".demo-card button:focus-visible {\n  outline: 3px solid #1d4ed8;\n  outline-offset: 3px;\n}\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: 0.01ms !important; }\n}";
    if (lower.includes("best practice") || lower.includes("clean css") || lower.includes("naming") || lower.includes("reusable") || lower.includes("duplicate") || lower.includes("organization") || lower.includes("important") || lower.includes("maintainable")) return "/* Keep component rules grouped and use reusable tokens. */\n:root { --space: 1rem; }\n.demo-card { padding: var(--space); }";
    return `.demo-card {\n  color: #1e3a8a;\n  padding: 1.5rem;\n  border-radius: 1rem;\n}`;
  };

  const getCssExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    if (lower.includes("intro") || lower.includes("what is css") || lower.includes("why css") || lower.includes("html vs css") || lower.includes("how css")) return "CSS (Cascading Style Sheets) describes how HTML content should look and lay out. The browser matches selectors to elements, resolves the cascade, and applies the resulting style rules.";
    if (lower.includes("selector") || lower.includes("#id") || lower.includes(".class") || lower.includes("universal") || lower.includes("descendant") || lower.includes("sibling")) return "A selector identifies which elements a CSS rule affects. Combine element, class, attribute, relationship, and state selectors carefully to keep styles predictable.";
    if (lower.includes("color") || lower.includes("transparent") || lower.includes("rgba") || lower.includes("hsl")) return "CSS colors can be expressed as names, hex values, RGB(A), or HSL(A). Choose foreground and background colors with enough contrast for readable content.";
    if (lower.includes("background") || lower.includes("gradient")) return "Background properties control a color or image behind an element. Position, repeat, size, and shorthand settings determine how that image is displayed.";
    if (lower.includes("text") || lower.includes("font") || lower.includes("letter") || lower.includes("line height") || lower.includes("white space")) return "Typography styles affect readability and hierarchy. Use a suitable font stack, readable sizes, comfortable line height, and restrained decoration.";
    if (lower.includes("unit") || ["px", "%", "em", "rem", "vh", "vw", "vmin", "vmax", "ch", "ex"].includes(lower)) return "CSS units express size and distance. Relative units such as rem, %, and viewport units can adapt to user settings and available screen space.";
    if (lower.includes("box model") || lower.includes("padding") || lower.includes("margin") || lower.includes("border") || lower.includes("width") || lower.includes("height") || lower.includes("sizing")) return "The CSS box model describes content, padding, border, and margin. box-sizing changes how the declared width and height include these layers.";
    if (lower.includes("display") || lower.includes("position") || lower.includes("overflow") || lower.includes("flex") || lower.includes("grid") || lower.includes("layout") || lower.includes("column")) return "CSS layout properties control how elements flow, align, and use available space. Choose normal flow, flexbox, or grid according to the relationship between the content.";
    if (lower.includes("pseudo") || lower.includes("hover") || lower.includes("focus") || lower.includes("active") || lower.includes("visited") || lower.includes("checked") || lower.includes("before") || lower.includes("after")) return "Pseudo-classes style an element in a state or position. Pseudo-elements style a specific part of an element or add generated decoration.";
    if (lower.includes("transition") || lower.includes("transform") || lower.includes("animation") || lower.includes("keyframe")) return "Motion properties can communicate interaction and state changes. Keep animations purposeful and respect the visitor's reduced-motion preference.";
    if (lower.includes("responsive") || lower.includes("media") || lower.includes("mobile") || lower.includes("breakpoint")) return "Responsive CSS adapts layout to viewport or container size. Flexible sizing and a mobile-first baseline often reduce the need for many breakpoints.";
    if (lower.includes("function") || lower.includes("calc") || lower.includes("clamp") || lower.includes("min()") || lower.includes("max()")) return "CSS functions calculate or compose values. Functions such as calc(), min(), max(), and clamp() support fluid dimensions without unnecessary breakpoints.";
    if (lower.includes("variable") || lower.includes("theme") || lower.includes("var()")) return "CSS custom properties store reusable values. Define them with a double hyphen and read them with var(), optionally providing a fallback value.";
    if (lower.includes("form") || lower.includes("input") || lower.includes("label") || lower.includes("textarea") || lower.includes("select") || lower.includes("checkbox") || lower.includes("radio")) return "Form styles should make labels and controls easy to read and operate. Keep focus indicators visible and provide clear validation states.";
    if (lower.includes("table") || lower.includes("list") || lower.includes("navbar") || lower.includes("navigation") || lower.includes("menu")) return "CSS can improve the presentation of structured data, lists, and navigation. Preserve useful semantics and ensure the layout still works at narrow widths.";
    if (lower.includes("card") || lower.includes("project") || lower.includes("portfolio") || lower.includes("dashboard")) return "A component combines layout, spacing, typography, color, and interaction states. Reusable CSS rules make related components consistent and easier to maintain.";
    if (lower.includes("shadow") || lower.includes("opacity") || lower.includes("glass") || lower.includes("neumorphism") || lower.includes("blur") || lower.includes("glow") || lower.includes("effect")) return "Visual effects such as shadows, transparency, and blur add depth. Use them sparingly so text remains readable and interface hierarchy stays clear.";
    if (lower.includes("accessib") || lower.includes("contrast") || lower.includes("reduced motion") || lower.includes("prefers-reduced")) return "Accessible CSS supports readable contrast, visible keyboard focus, comfortable text sizing, and reduced motion when requested by the user.";
    if (lower.includes("best practice") || lower.includes("clean css") || lower.includes("naming") || lower.includes("reusable") || lower.includes("duplicate") || lower.includes("organization") || lower.includes("important") || lower.includes("maintainable")) return "Maintainable CSS uses clear naming, reusable rules, design variables, and organized component styles while avoiding needless specificity and !important.";
    return `${topic} is part of ${moduleTitle}. This CSS concept controls how an element is selected, sized, positioned, or presented in the browser.`;
  };

  const makeComputerOrganizationExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (lower.includes("computer organization") || lower.includes("computer architecture") || lower.includes("functional unit") || lower.includes("basic computer system") || lower.includes("block diagram") || lower.includes("computer generation") || lower.includes("types of computer")) {
      return "              +------------------+\n              |       CPU        |\n              |  +----+  +-----+ |\n              |  | ALU|  |  CU | |\n              |  +----+  +-----+ |\n              |   Registers      |\n              +--------+---------+\n                       |\n         Address / Data / Control Bus\n          +------------+------------+\n          |                         |\n     +----+-----+             +-----+----+\n     |  Memory  |             |   I/O    |\n     +----------+             +----------+";
    }
    if (lower.includes("number system") || lower.includes("conversion") || lower.includes("binary addition") || lower.includes("binary subtraction") || lower.includes("complement") || lower.includes("signed") || lower.includes("unsigned") || lower.includes("integer representation") || lower.includes("floating point") || lower.includes("ieee")) {
      return "Decimal:  25\nBinary:   11001\nHex:      0x19\n\nTwo's complement (8-bit, -5):\n  00000101  -> invert -> 11111010\n  11111010  -> add 1 -> 11111011";
    }
    if (moduleLower.includes("computer arithmetic")) {
      return "8-bit signed addition\n  01111111  (+127)\n+ 00000001  (+1)\n----------\n  10000000  (-128 if interpreted as signed)\n\nThe mathematical result is outside the 8-bit\nsigned range: this addition overflows.";
    }
    if (lower.includes("boolean") || lower.includes("gate") || lower.includes("truth table") || lower.includes("simplification")) {
      return "A B | AND OR XOR NAND\n0 0 |  0   0   0    1\n0 1 |  0   1   1    1\n1 0 |  0   1   1    1\n1 1 |  1   1   0    0\n\nExample: F = (A AND B) OR NOT C";
    }
    if (lower.includes("adder") || lower.includes("subtractor") || lower.includes("multiplexer") || lower.includes("demultiplexer") || lower.includes("encoder") || lower.includes("decoder") || lower.includes("comparator") || lower.includes("circuit")) {
      return "Half adder\nInputs:  A=1, B=1\nSum:     A XOR B = 0\nCarry:   A AND B = 1\n\nFull adder adds A, B, and carry-in.";
    }
    if (lower.includes("cache") || lower.includes("mapping") || lower.includes("hit ratio") || lower.includes("cache hit") || lower.includes("cache miss")) {
      return "Cache access example\nAccesses: 100\nHits:      92\nMisses:     8\n\nHit ratio = hits / total accesses\n          = 92 / 100 = 0.92 (92%)";
    }
    if (lower.includes("addressing") || lower.includes("operand") || lower.includes("opcode") || lower.includes("instruction format")) {
      return "Instruction: LOAD R1, 12(R2)\nOpcode:      LOAD\nDestination: R1\nBase:        R2\nOffset:      12\n\nEffective address = contents(R2) + 12";
    }
    if (moduleLower.includes("addressing modes")) {
      return "Addressing mode examples\nImmediate:      MOV R1, #5\nRegister:       ADD R1, R2\nDirect:         LOAD R1, [1000]\nRegister indirect: LOAD R1, [R2]\n\nEach mode specifies how the operand is obtained.";
    }
    if (lower.includes("pipeline") || lower.includes("hazard") || lower.includes("speedup")) {
      return "5-stage instruction pipeline\n1. IF  - Fetch\n2. ID  - Decode\n3. EX  - Execute\n4. MEM - Memory access\n5. WB  - Write back\n\nIdeal speedup approaches the number of stages\nwhen the pipeline stays full.";
    }
    if (lower.includes("performance") || lower.includes("execution time") || lower.includes("clock") || lower.includes("cpi") || lower.includes("mips") || lower.includes("flops") || lower.includes("amdahl") || lower.includes("benchmark")) {
      return "CPU time = Instruction Count x CPI x Clock Cycle Time\n\nExample:\nInstruction count = 1,000,000\nCPI               = 2\nClock rate        = 1 GHz\nCPU time          = 1,000,000 x 2 / 1,000,000,000\n                  = 0.002 seconds";
    }
    if (lower.includes("memory capacity") || lower.includes("memory addressing") || lower.includes("memory")) {
      return "Addressable memory example\nAddress width: 16 bits\nLocations:     2^16 = 65,536\nBytes/location: 1\nCapacity:       65,536 bytes = 64 KiB";
    }
    if (lower.includes("register") || lower.includes("program counter") || lower.includes("instruction register") || lower.includes("stack pointer") || lower.includes("accumulator") || lower.includes("cpu") || lower.includes("central processing unit")) {
      return "Instruction cycle overview\nPC -> MAR -> Memory read -> MDR -> IR\n                         |\n                         v\n                 Decode and execute\n\nPC: next instruction address\nIR: current instruction";
    }
    if (lower.includes("interrupt") || lower.includes("dma") || lower.includes("i/o") || lower.includes("input") || lower.includes("output") || lower.includes("transfer")) {
      return "I/O transfer choices\nProgrammed I/O : CPU repeatedly checks device\nInterrupt I/O  : device notifies CPU when ready\nDMA            : controller transfers a block\n                 between device and memory";
    }
    if (lower.includes("bus") || lower.includes("arbitration")) {
      return "System bus\n  Address bus : where to access\n  Data bus    : what value moves\n  Control bus : what operation occurs\n\nA bus arbiter resolves competing requests.";
    }
    if (lower.includes("risc") || lower.includes("cisc") || lower.includes("architecture") || lower.includes("von neumann") || lower.includes("harvard") || lower.includes("processor") || lower.includes("multicore") || lower.includes("parallel") || lower.includes("gpu") || lower.includes("security")) {
      return `${moduleTitle}\n\nConcept: ${topic}\n\nCompare designs by their instruction model,\ndata paths, memory organization, performance,\nand intended workload.`;
    }
    return `${moduleTitle}\n\nTopic: ${topic}\n\nDefine the concept, identify the hardware\ncomponents involved, then trace how data\nmoves through the system.`;
  };

  const getComputerOrganizationExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (lower.includes("computer organization") || lower.includes("computer architecture") || lower.includes("functional unit") || lower.includes("basic computer system") || lower.includes("block diagram") || lower.includes("computer generation") || lower.includes("types of computer") || lower.includes("characteristics of computer")) return "Computer organization describes how hardware units such as the processor, memory, and I/O are connected and operate. Computer architecture describes the programmer-visible design, including the instruction set and data formats; organization explains how that design is implemented.";
    if (moduleLower.includes("computer arithmetic")) return "Computer arithmetic applies binary operations to fixed-width bit patterns. The ALU performs arithmetic and logic operations; signed representations and the chosen bit width determine how results and overflow are interpreted.";
    if (moduleLower.includes("cpu organization")) return "CPU organization describes the processor's registers and internal data paths. Registers such as the program counter, instruction register, and status register hold values needed while instructions are fetched and executed.";
    if (moduleLower.includes("instruction addressing")) return "An addressing mode defines how an instruction locates its operand. It may use a constant, a register, a memory address, or a calculated effective address; the selected mode affects instruction behavior and memory accesses.";
    if (lower.includes("number") || lower.includes("binary") || lower.includes("complement") || lower.includes("floating point") || lower.includes("ieee") || lower.includes("signed") || lower.includes("unsigned")) return "Computer hardware stores values as bit patterns. Number systems, signed representations, complements, and floating-point formats describe how those bits encode numbers and how arithmetic behaves.";
    if (lower.includes("boolean") || lower.includes("gate") || lower.includes("truth table") || lower.includes("logic")) return "Boolean algebra models digital signals as 0 and 1. Logic gates implement Boolean operations, and truth tables show the output for every possible input combination.";
    if (lower.includes("adder") || lower.includes("subtractor") || lower.includes("multiplexer") || lower.includes("demultiplexer") || lower.includes("encoder") || lower.includes("decoder") || lower.includes("comparator") || lower.includes("circuit")) return "Combinational circuits produce outputs from current inputs. Arithmetic and selection circuits such as adders, multiplexers, encoders, and decoders are built from logic gates.";
    if (lower.includes("flip-flop") || lower.includes("latch") || lower.includes("register") || lower.includes("counter") || lower.includes("sequential")) return "Sequential circuits retain state, so their outputs depend on both current inputs and stored values. Latches, flip-flops, registers, and counters are fundamental storage building blocks.";
    if (lower.includes("cache") || lower.includes("hit ratio") || lower.includes("mapping")) return "Cache memory keeps recently or frequently used data closer to the CPU. Mapping decides where memory blocks can go; hit ratio measures how often a requested item is found in the cache.";
    if (lower.includes("memory") || lower.includes("ram") || lower.includes("rom") || lower.includes("storage") || lower.includes("disk") || lower.includes("ssd") || lower.includes("flash")) return "Memory and storage differ in speed, capacity, cost, and persistence. The hierarchy places small, fast storage near the CPU and larger, slower storage farther away.";
    if (lower.includes("instruction") || lower.includes("opcode") || lower.includes("operand") || lower.includes("addressing") || lower.includes("fetch") || lower.includes("decode") || lower.includes("execute")) return "An instruction specifies an operation and its data. The CPU fetches it, decodes the opcode and operands, then executes it; addressing modes describe how an operand's value or location is found.";
    if (lower.includes("control unit") || lower.includes("microprogram") || lower.includes("microinstruction") || lower.includes("control signal")) return "The control unit coordinates CPU operations by issuing control signals. It can generate them with fixed logic (hardwired control) or by sequencing microinstructions stored in control memory.";
    if (lower.includes("interrupt") || lower.includes("dma") || lower.includes("i/o") || lower.includes("input") || lower.includes("output") || lower.includes("transfer")) return "I/O organization connects peripherals to the processor and memory. Programmed I/O, interrupts, and DMA provide different ways to coordinate transfers and share CPU work.";
    if (lower.includes("bus") || lower.includes("arbitration")) return "A bus is a shared communication path. Address, data, and control signals carry location, values, and operation details; arbitration coordinates multiple requesters.";
    if (lower.includes("pipeline") || lower.includes("hazard") || lower.includes("speedup")) return "Pipelining overlaps stages of multiple instructions to improve throughput. Structural, data, and control hazards can delay progress and require techniques such as forwarding, stalls, or prediction.";
    if (lower.includes("performance") || lower.includes("execution time") || lower.includes("clock") || lower.includes("cpi") || lower.includes("mips") || lower.includes("flops") || lower.includes("amdahl") || lower.includes("benchmark")) return "CPU performance depends on instruction count, cycles per instruction (CPI), and clock-cycle time. Benchmarks and carefully defined metrics help compare systems without relying on clock speed alone.";
    if (lower.includes("parallel") || lower.includes("multiprocessor") || lower.includes("multicore") || lower.includes("simd") || lower.includes("mimd") || lower.includes("multithreading")) return "Parallel systems execute multiple operations or instruction streams at once. Their speedup depends on available parallel work, communication costs, and coordination overhead.";
    if (lower.includes("risc") || lower.includes("cisc")) return "RISC and CISC describe different instruction-set design approaches. Compare instruction complexity, encoding, implementation, and compiler responsibilities rather than assuming one design is always faster.";
    if (lower.includes("security") || lower.includes("secure boot") || lower.includes("trusted") || lower.includes("side-channel") || lower.includes("privilege") || lower.includes("protection")) return "Hardware security uses processor and platform mechanisms to protect boot, memory, and execution. Privilege boundaries and isolation reduce risk, while side channels can leak information through observable timing or resource behavior.";
    if (lower.includes("microprocessor")) return "A microprocessor is a programmable processor implemented on an integrated circuit. Its instruction set, registers, ALU, and control logic work together to execute programs.";
    return `${topic} is part of ${moduleTitle}. Study the hardware components involved, the data or control flow between them, and how the concept affects a computer system's operation.`;
  };

  const makeCyberSecurityExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (lower.includes("cia triad") || ["confidentiality", "integrity", "availability"].includes(lower)) {
      return "Security objective | Defensive example\nConfidentiality  | Limit data access by role\nIntegrity        | Verify trusted changes\nAvailability      | Maintain tested recovery\n\nUse all three goals when assessing controls.";
    }
    if (lower.includes("malware") || lower.includes("ransomware") || lower.includes("virus") || lower.includes("worm") || lower.includes("trojan") || lower.includes("spyware") || lower.includes("rootkit") || lower.includes("keylogger") || lower.includes("botnet")) {
      return "Endpoint defense checklist\n1. Keep operating systems and apps patched\n2. Use reputable endpoint protection\n3. Restrict application privileges\n4. Maintain offline or immutable backups\n5. Isolate and report suspected infection";
    }
    if (lower.includes("phishing") || lower.includes("social engineering") || lower.includes("email spoofing") || lower.includes("email threat")) {
      return "Suspicious message? Pause and verify.\n- Check the sender using a trusted channel\n- Avoid unexpected links and attachments\n- Report it to the security team\n- Never share passwords or MFA codes";
    }
    if (lower.includes("injection") || lower.includes("xss") || lower.includes("csrf") || lower.includes("input validation") || lower.includes("secure cookies") || lower.includes("web security")) {
      return "Web application defense\n- Use parameterized database queries\n- Encode untrusted output for its context\n- Protect state-changing requests\n- Set secure cookie attributes\n- Apply least privilege and test safely";
    }
    if (lower.includes("cryptography") || lower.includes("encryption") || lower.includes("cipher") || lower.includes("hash") || lower.includes("salt") || lower.includes("digital signature") || lower.includes("certificate") || lower.includes("public key") || lower.includes("private key") || lower.includes("pki") || lower.includes("rsa") || lower.includes("aes") || lower.includes("sha")) {
      return "Protect data with established mechanisms\nData at rest  -> approved encryption\nData in transit -> authenticated TLS\nPasswords -> slow salted password hashing\nIntegrity and origin -> digital signatures\n\nProtect keys and follow current standards.";
    }
    if (lower.includes("authentication") || lower.includes("authorization") || lower.includes("password") || lower.includes("mfa") || lower.includes("2fa") || lower.includes("least privilege") || lower.includes("rbac") || lower.includes("biometric")) {
      return "Access-control review\n- Require MFA for sensitive accounts\n- Assign roles based on job needs\n- Remove unused accounts promptly\n- Review privileged access regularly\n- Never store plaintext passwords";
    }
    if (lower.includes("firewall") || lower.includes("ids") || lower.includes("ips") || lower.includes("network security") || lower.includes("network segmentation") || lower.includes("vpn") || lower.includes("wireless") || lower.includes("wi-fi") || lower.includes("protocol") || lower.includes("https") || lower.includes("tls") || lower.includes("ssh") || lower.includes("ipsec")) {
      return "Layered network defense\nInternet -> Firewall -> Segmented network\n                    |                |\n                 IDS/IPS       Protected systems\n\nUse secure protocols, monitor alerts, and\nreview rules and access regularly.";
    }
    if (lower.includes("reconnaissance") || lower.includes("information gathering") || lower.includes("osint") || lower.includes("scanning") || lower.includes("enumeration") || lower.includes("exploitation") || lower.includes("privilege escalation") || lower.includes("maintaining access") || lower.includes("penetration test") || lower.includes("ethical hacking")) {
      return "Authorized security assessment\n1. Obtain written permission\n2. Define assets, scope, and timing\n3. Use approved non-production targets\n4. Record evidence without exposing data\n5. Report findings and remediation\n6. Retest only with authorization";
    }
    if (lower.includes("incident") || lower.includes("containment") || lower.includes("eradication") || lower.includes("recovery") || lower.includes("forensic") || lower.includes("evidence") || lower.includes("chain of custody") || lower.includes("log analysis")) {
      return "Incident handling\nPrepare -> Detect -> Analyze -> Contain\n   -> Eradicate -> Recover -> Review\n\nPreserve evidence, record decisions, and\nfollow the organization's response plan.";
    }
    if (lower.includes("risk") || lower.includes("vulnerability") || lower.includes("threat") || lower.includes("mitigation") || lower.includes("security control") || lower.includes("policy")) {
      return "Risk = likelihood x impact\n\nAsset: customer records\nThreat: unauthorized disclosure\nControl: least privilege + encryption\nVerification: access review + audit logs";
    }
    if (lower.includes("tool") || ["nmap", "wireshark", "burp suite", "metasploit framework", "kali linux", "nessus", "openvas", "john the ripper", "owasp zap"].includes(lower)) {
      return `${topic} — learning focus\nPurpose: understand its security role\nUse: approved, isolated lab or authorized scope\nPractice: interpret findings and recommend\n          defensive fixes\nNever test systems without permission.`;
    }
    if (lower.includes("cloud") || lower.includes("mobile") || lower.includes("endpoint") || lower.includes("email") || lower.includes("best practice") || lower.includes("career") || lower.includes("certification")) {
      return `${moduleTitle}\n\nFocus: ${topic}\n\nIdentify the assets, likely risks, applicable\ncontrols, responsible owner, and a safe way\nto verify protection.`;
    }
    return `${moduleTitle}\n\nTopic: ${topic}\n\nLearn the security objective, common risks,\nprotective controls, and safe verification.\nPractice only in authorized environments.`;
  };

  const getCyberSecurityExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (lower.includes("ethical hacking") || lower.includes("hacker") || lower.includes("scope") || lower.includes("permission") || lower.includes("reconnaissance") || lower.includes("information gathering") || lower.includes("scanning") || lower.includes("enumeration") || lower.includes("exploitation") || lower.includes("maintaining access") || lower.includes("penetration testing") || lower.includes("privilege escalation")) return "Security testing is appropriate only with explicit authorization, a written scope, and safeguards for systems and data. Study these concepts to understand assessment workflows, interpret findings, and prioritize remediation—not to access systems without permission.";
    if (lower.includes("tool") || ["nmap", "wireshark", "burp suite", "metasploit framework", "kali linux", "nessus", "openvas", "john the ripper", "owasp zap"].includes(lower)) return `${topic} is a security tool used for specific analysis or testing tasks. Learn its purpose, limitations, and defensive value. Use it only in a lab or within an explicitly authorized scope, and focus on interpreting results and fixing the underlying issues.`;
    if (lower.includes("threat") || lower.includes("attack") || lower.includes("malware") || lower.includes("virus") || lower.includes("worm") || lower.includes("trojan") || lower.includes("ransomware") || lower.includes("spyware") || lower.includes("phishing") || lower.includes("spoofing") || lower.includes("sniffing") || lower.includes("hijacking") || lower.includes("zero-day") || lower.includes("insider")) return `${topic} describes a security risk or attack pattern. Understanding warning signs helps defenders reduce exposure through safe configuration, patching, access controls, monitoring, user awareness, and a tested response process.`;
    if (lower.includes("network") || lower.includes("firewall") || lower.includes("ids") || lower.includes("ips") || lower.includes("vpn") || lower.includes("wireless") || lower.includes("wi-fi") || lower.includes("protocol") || lower.includes("https") || lower.includes("tls") || lower.includes("ssh") || lower.includes("ipsec")) return "Network security protects systems and data as they communicate. Layered controls—secure protocols, segmentation, filtering, monitoring, and careful configuration—help limit exposure and detect suspicious activity.";
    if (lower.includes("cryptography") || lower.includes("encryption") || lower.includes("cipher") || lower.includes("hash") || lower.includes("salt") || lower.includes("digital signature") || lower.includes("certificate") || lower.includes("public key") || lower.includes("private key") || lower.includes("pki") || lower.includes("rsa") || lower.includes("aes") || lower.includes("sha")) return "Cryptography supports confidentiality, integrity, authentication, and non-repudiation. Select established, current algorithms and libraries; protect keys carefully, and avoid designing custom cryptographic systems.";
    if (lower.includes("authentication") || lower.includes("authorization") || lower.includes("password") || lower.includes("mfa") || lower.includes("2fa") || lower.includes("least privilege") || lower.includes("rbac") || lower.includes("biometric")) return "Identity and access controls determine who a user is and what that identity can do. Use strong authentication, multi-factor protection for sensitive access, least privilege, and regular access reviews.";
    if (lower.includes("incident") || lower.includes("containment") || lower.includes("eradication") || lower.includes("recovery") || lower.includes("forensic") || lower.includes("evidence") || lower.includes("chain of custody") || lower.includes("log analysis")) return "Incident response coordinates detection, analysis, containment, recovery, and lessons learned. Preserve relevant evidence, document actions, and follow the organization's approved plan and legal requirements.";
    if (lower.includes("risk") || lower.includes("vulnerability") || lower.includes("mitigation") || lower.includes("security control") || lower.includes("policy") || lower.includes("business continuity") || lower.includes("disaster recovery")) return "Risk management identifies assets, threats, and weaknesses, then evaluates likelihood and impact to select proportionate controls. Document decisions and verify that mitigations work.";
    if (lower.includes("cloud") || lower.includes("mobile") || lower.includes("endpoint") || lower.includes("email") || lower.includes("best practice") || lower.includes("career") || lower.includes("certification")) return `${topic} is part of ${moduleTitle}. Apply security fundamentals to this environment: protect data, limit access, keep systems maintained, monitor for issues, and follow the relevant organization's policies.`;
    if (moduleLower.includes("cyber security")) return "Cyber security protects systems, networks, applications, and data from unauthorized access, disruption, or misuse. Good practice combines people, processes, and technology with continuous risk review.";
    return `${topic} is part of ${moduleTitle}. Understand the security objective, likely risks, defensive controls, and a safe method for checking that protections are effective.`;
  };

  const makeAiExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (lower.includes("bfs") || lower.includes("breadth first")) {
      return "Graph: A -> B, C; B -> D; C -> E\nStart: A\nQueue trace:\n[A] -> [B, C] -> [C, D] -> [D, E]\nVisit order: A, B, C, D, E\n\nBFS explores neighbors level by level.";
    }
    if (lower.includes("dfs") || lower.includes("depth first")) {
      return "Graph: A -> B, C; B -> D; C -> E\nStart: A\nOne DFS visit order:\nA -> B -> D -> C -> E\n\nDFS explores one branch before backtracking.";
    }
    if (lower.includes("a*") || lower.includes("best first") || lower.includes("heuristic") || lower.includes("evaluation function")) {
      return "A* evaluation\nf(n) = g(n) + h(n)\ng(n): cost from start to node n\nh(n): estimated cost from n to goal\n\nA useful heuristic estimates remaining cost\nwithout overestimating when optimality is required.";
    }
    if (lower.includes("hill climbing") || lower.includes("simulated annealing") || lower.includes("optimization")) {
      return "Local search outline\n1. Start with a candidate solution\n2. Evaluate its objective / fitness\n3. Explore neighboring candidates\n4. Keep an improved candidate\n5. Stop at a limit or stopping condition\n\nLocal optima may differ from a global optimum.";
    }
    if (lower.includes("genetic") || lower.includes("chromosome") || lower.includes("crossover") || lower.includes("mutation") || lower.includes("fitness function") || moduleLower.includes("evolutionary")) {
      return "Evolutionary algorithm cycle\nPopulation -> Evaluate fitness -> Select\n     -> Crossover -> Mutate -> New population\n\nRepeat until a stopping condition is reached.\nValidate results against the original objective.";
    }
    if (lower.includes("proposition") || lower.includes("truth table") || lower.includes("predicate") || lower.includes("quantifier") || lower.includes("logical operator") || lower.includes("inference") || lower.includes("logic")) {
      return "Example rule-based inference\nRule: IF temperature is high\n      AND smoke is detected\n      THEN raise an alert\n\nFacts: temperature is high; smoke detected\nConclusion: raise an alert\n\nCheck rules and facts for consistency.";
    }
    if (lower.includes("agent") || lower.includes("sensor") || lower.includes("actuator") || lower.includes("environment") || lower.includes("intelligent system") || lower.includes("rationality")) {
      return "Agent loop\nEnvironment -> Sensors -> Agent\n     ^                     |\n     |                     v\n     +---- Actuators <- Action\n\nThe agent observes, chooses an action,\nand receives a changed observation.";
    }
    if (lower.includes("reinforcement") || lower.includes("q-learning") || lower.includes("reward") || lower.includes("policy") || lower.includes("value") || lower === "state" || lower === "action") {
      return "Reinforcement learning interaction\nState -> Choose action -> Environment\n  ^                         |\n  +---- Next state + reward -+\n\nThe agent improves a policy from experience;\nreward design strongly affects behavior.";
    }
    if (lower.includes("supervised") || lower.includes("classification") || lower.includes("regression") || lower.includes("linear regression") || lower.includes("logistic regression") || lower.includes("decision tree") || lower.includes("nearest neighbors") || lower.includes("naive bayes") || lower.includes("support vector") || lower.includes("model evaluation")) {
      return "Supervised learning workflow\nLabeled examples -> Train model -> Evaluate\n                         |             |\n                         v             v\n                    Predictions   Held-out data\n\nKeep test data separate from training data.";
    }
    if (lower.includes("unsupervised") || lower.includes("clustering") || lower.includes("k-means") || lower.includes("hierarchical") || lower.includes("association") || lower.includes("dimensionality") || lower.includes("pca")) {
      return "Unsupervised learning\nUnlabeled examples -> Discover structure\n\nExample: group customers by behavior\nwithout providing group labels in advance.\nEvaluate whether the discovered groups are\nuseful and avoid over-interpreting them.";
    }
    if (lower.includes("neural") || lower.includes("neuron") || lower.includes("perceptron") || lower.includes("activation") || lower.includes("backpropagation") || lower.includes("weight") || lower.includes("bias") || lower.includes("layer")) {
      return "Artificial neuron\ninputs x -> weighted sum (w . x + b)\n       -> activation function -> output\n\nTraining adjusts weights and biases to reduce\na defined loss on example data.";
    }
    if (lower.includes("deep learning") || lower.includes("cnn") || lower.includes("rnn") || lower.includes("lstm")) {
      return "Deep learning workflow\nInput -> Multiple learned layers -> Output\n\nCNNs are commonly used for spatial patterns.\nRNN/LSTM designs model sequences.\nChoose architecture and evaluation for the task.";
    }
    if (lower.includes("language") || lower.includes("nlp") || lower.includes("token") || lower.includes("stemming") || lower.includes("lemmatization") || lower.includes("sentiment") || lower.includes("chatbot") || lower.includes("translation") || lower.includes("speech")) {
      return "Text processing pipeline\nRaw text -> Normalize -> Tokenize -> Features\n        -> Model -> Evaluated output\n\nCheck language coverage, privacy, and error\nrates across different user groups.";
    }
    if (lower.includes("vision") || lower.includes("image") || lower.includes("object detection") || lower.includes("face recognition") || lower.includes("ocr")) {
      return "Computer vision pipeline\nImage -> Preprocess -> Vision model -> Result\n\nClassification: assign image labels\nDetection: locate and label objects\nEvaluate data quality, bias, and false results.";
    }
    if (lower.includes("generative") || lower.includes("generation") || lower.includes("large language") || lower.includes("llm") || lower.includes("prompt")) {
      return "Generative AI workflow\nPrompt + context -> Generative model -> Output\n\nReview outputs for accuracy, privacy, bias,\nand unsafe or unsupported claims. A fluent\nresponse is not proof that it is correct.";
    }
    if (lower.includes("planning") || lower.includes("initial state") || lower.includes("goal state") || lower.includes("state space") || lower.includes("action")) {
      return "Planning problem\nInitial state + Actions + Goal test\n                  |\n                  v\n             Action sequence\n\nA solution is a valid sequence that reaches\nthe goal under the problem's constraints.";
    }
    if (lower.includes("fuzzy") || lower.includes("membership") || lower.includes("linguistic variable")) {
      return "Fuzzy membership example\nTemperature = 28 C\nMembership in \"warm\": 0.7\nMembership in \"hot\":  0.3\n\nMembership values represent degree, not\nprobability; define the functions for the task.";
    }
    if (lower.includes("ethic") || lower.includes("bias") || lower.includes("fairness") || lower.includes("privacy") || lower.includes("transparency") || lower.includes("explainable") || lower.includes("safety") || lower.includes("responsible") || lower.includes("human vs ai") || lower.includes("challenge")) {
      return "Responsible AI review\n- Define intended use and affected people\n- Check data quality and representation\n- Measure errors across relevant groups\n- Protect private information\n- Explain limits and provide human review\n- Monitor after deployment";
    }
    if (lower.includes("application") || lower.includes("healthcare") || lower.includes("education") || lower.includes("banking") || lower.includes("agriculture") || lower.includes("transportation") || lower.includes("cyber security") || lower.includes("e-commerce") || lower.includes("entertainment") || lower.includes("smart home") || lower.includes("business")) {
      return `${moduleTitle}\n\nAI use case: ${topic}\n\nDefine the task, available data, and success\nmeasure. Validate accuracy, safety, privacy,\nand human oversight before deployment.`;
    }
    if (lower.includes("future") || lower.includes("autonomous") || lower.includes("assistant") || lower.includes("automation") || lower.includes("collaboration") || lower.includes("opportunit")) {
      return `${moduleTitle}\n\nTopic: ${topic}\n\nConsider potential benefits, limitations,\nrisks, affected stakeholders, and where human\njudgment and oversight remain important.`;
    }
    return `${moduleTitle}\n\nTopic: ${topic}\n\nIdentify the problem, inputs, method, and\nexpected output. Then evaluate accuracy,\nlimitations, and impacts in context.`;
  };

  const getAiExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (lower.includes("search") || lower.includes("bfs") || lower.includes("dfs") || lower.includes("heuristic") || lower.includes("hill climbing") || lower.includes("optimization")) return "Search and optimization explore possible states or candidate solutions to find a path or result. The choice of strategy affects completeness, memory use, and solution quality; heuristics provide estimates to guide exploration.";
    if (lower.includes("agent") || lower.includes("sensor") || lower.includes("actuator") || lower.includes("environment") || lower.includes("intelligent system") || lower.includes("rationality")) return "An intelligent agent observes an environment through sensors and takes actions that affect it. Its design depends on the available observations, possible actions, goals, and performance measure.";
    if (lower.includes("knowledge") || lower.includes("logic") || lower.includes("proposition") || lower.includes("predicate") || lower.includes("reasoning") || lower.includes("inference") || lower.includes("expert system") || lower.includes("chaining")) return "Knowledge representation and reasoning encode facts and relationships in a form a system can use. Rules and inference methods can derive conclusions, but their quality depends on accurate, consistent knowledge.";
    if (lower.includes("machine learning") || lower.includes("supervised") || lower.includes("unsupervised") || lower.includes("reinforcement") || lower.includes("classification") || lower.includes("regression") || lower.includes("clustering") || lower.includes("q-learning") || lower.includes("model evaluation")) return "Machine learning uses data or interaction to build a model that performs a task. Separate training, validation, and test data appropriately, choose metrics for the goal, and check for overfitting and biased outcomes.";
    if (lower.includes("neural") || lower.includes("neuron") || lower.includes("perceptron") || lower.includes("activation") || lower.includes("backpropagation") || lower.includes("deep learning") || lower.includes("cnn") || lower.includes("rnn") || lower.includes("lstm")) return "Neural networks learn patterns by adjusting parameters such as weights and biases. Deep learning uses multiple layers; its performance depends on data, architecture, training, and careful evaluation.";
    if (lower.includes("language") || lower.includes("nlp") || lower.includes("token") || lower.includes("stemming") || lower.includes("lemmatization") || lower.includes("sentiment") || lower.includes("chatbot") || lower.includes("translation") || lower.includes("speech")) return "Natural language processing enables systems to analyze or generate human language. Text normalization, tokenization, context, and evaluation all matter; language data can contain privacy risks and demographic bias.";
    if (lower.includes("vision") || lower.includes("image") || lower.includes("object detection") || lower.includes("face recognition") || lower.includes("ocr")) return "Computer vision extracts information from images or video. Tasks include classification, detection, and recognition; evaluate data coverage, false positives, privacy, and the consequences of errors.";
    if (lower.includes("generative") || lower.includes("generation") || lower.includes("large language") || lower.includes("llm") || lower.includes("prompt")) return "Generative AI models create new text, images, audio, or other content from learned patterns. Their outputs can be inaccurate or biased, so verify important claims and protect sensitive input data.";
    if (lower.includes("planning") || lower.includes("initial state") || lower.includes("goal state") || lower.includes("state space")) return "AI planning represents an initial state, available actions, and a goal. A planner searches for an action sequence that reaches the goal while respecting the problem's constraints.";
    if (lower.includes("fuzzy")) return "Fuzzy logic represents degrees of membership rather than only true-or-false categories. Membership functions and rules map imprecise inputs to outputs for a defined application.";
    if (lower.includes("ethic") || lower.includes("bias") || lower.includes("fairness") || lower.includes("privacy") || lower.includes("transparency") || lower.includes("explainable") || lower.includes("safety") || lower.includes("responsible") || lower.includes("human vs ai")) return "Responsible AI considers how a system affects people throughout its lifecycle. Assess fairness, privacy, transparency, reliability, safety, and human oversight in the context where it will be used.";
    if (lower.includes("application") || lower.includes("healthcare") || lower.includes("education") || lower.includes("banking") || lower.includes("agriculture") || lower.includes("transportation") || lower.includes("cyber security") || lower.includes("e-commerce") || lower.includes("entertainment") || lower.includes("smart home") || lower.includes("business")) return `${topic} is an application area within ${moduleTitle}. Define the problem and users, validate performance with relevant data, and account for privacy, safety, reliability, and human oversight.`;
    if (lower.includes("future") || lower.includes("autonomous") || lower.includes("assistant") || lower.includes("automation") || lower.includes("collaboration") || lower.includes("opportunit")) return `${topic} describes a possible direction for AI. Consider the capabilities required, practical limitations, affected stakeholders, and safeguards needed for responsible human-AI collaboration.`;
    if (moduleLower.includes("introduction to artificial intelligence")) return "Artificial intelligence studies systems that perform tasks associated with intelligent behavior, such as learning, reasoning, perception, language, and decision-making. AI methods vary widely; each should be evaluated against its purpose and limitations.";
    return `${topic} is part of ${moduleTitle}. Understand the problem it addresses, the information it uses, how its result is evaluated, and what limitations matter in practice.`;
  };

  const makeBootstrapExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (moduleLower.includes("introduction")) {
      return "<main class=\"container py-5\">\n  <div class=\"row align-items-center g-4\">\n    <section class=\"col-12 col-md-7\">\n      <h1 class=\"display-5\">Build responsive pages</h1>\n      <p class=\"lead\">Bootstrap combines a grid, utilities, and components.</p>\n      <a class=\"btn btn-primary\" href=\"#start\">Get started</a>\n    </section>\n    <aside class=\"col-12 col-md-5\">\n      <div class=\"card\"><div class=\"card-body\">A responsive card</div></div>\n    </aside>\n  </div>\n</main>";
    }
    if (moduleLower.includes("setup")) {
      return "<!-- Add Bootstrap CSS in <head> -->\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n<!-- Before </body>, for interactive components -->\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>";
    }
    if (moduleLower.includes("container")) {
      return "<div class=\"container py-4\">\n  <h1>Responsive container</h1>\n  <p class=\"mb-0\">Centered content with responsive max-width.</p>\n</div>\n\n<div class=\"container-fluid bg-light p-3\">\n  Full-width section\n</div>";
    }
    if (moduleLower.includes("grid")) {
      return "<div class=\"container\">\n  <div class=\"row g-3\">\n    <div class=\"col-12 col-md-6 col-lg-4\">Column 1</div>\n    <div class=\"col-12 col-md-6 col-lg-4\">Column 2</div>\n    <div class=\"col-12 col-lg-4\">Column 3</div>\n  </div>\n</div>\n\n<!-- 12-column responsive grid -->";
    }
    if (moduleLower.includes("typography")) {
      return "<h1 class=\"display-5\">Page heading</h1>\n<p class=\"lead\">A short introduction to the page.</p>\n<p class=\"text-center text-md-start\">\n  Alignment changes at the medium breakpoint.\n</p>";
    }
    if (moduleLower.includes("colors")) {
      return "<p class=\"text-primary\">Primary text color</p>\n<div class=\"bg-success text-white p-3\">\n  Success background\n</div>\n<div class=\"bg-dark bg-opacity-75 text-white p-3 mt-2\">\n  Background with opacity utility\n</div>";
    }
    if (moduleLower.includes("spacing")) {
      return "<section class=\"p-3 p-md-5 mb-4 bg-light\">\n  <h2 class=\"mb-3\">Comfortable spacing</h2>\n  <p class=\"w-75 mb-0\">Responsive padding and width utilities.</p>\n</section>";
    }
    if (moduleLower.includes("display")) {
      return "<div class=\"d-flex flex-column flex-md-row align-items-center justify-content-between gap-3\">\n  <span>Flexible layout</span>\n  <button class=\"btn btn-primary\">Continue</button>\n</div>";
    }
    if (moduleLower.includes("button")) {
      return "<button class=\"btn btn-primary\">Primary</button>\n<button class=\"btn btn-outline-secondary btn-lg\">Large outline</button>\n\n<div class=\"btn-group mt-3\" role=\"group\" aria-label=\"View options\">\n  <button class=\"btn btn-outline-primary\">List</button>\n  <button class=\"btn btn-outline-primary\">Grid</button>\n</div>";
    }
    if (moduleLower.includes("card")) {
      return "<article class=\"card\" style=\"max-width: 22rem;\">\n  <img src=\"photo.jpg\" class=\"card-img-top\" alt=\"Course preview\">\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Course title</h2>\n    <p class=\"card-text\">A short course description.</p>\n    <a href=\"#learn\" class=\"btn btn-primary\">Learn more</a>\n  </div>\n</article>";
    }
    if (moduleLower.includes("navbar")) {
      return "<nav class=\"navbar navbar-expand-lg bg-body-tertiary\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Learn Hub</a>\n    <button class=\"navbar-toggler\" type=\"button\"\n      data-bs-toggle=\"collapse\" data-bs-target=\"#mainNav\"\n      aria-controls=\"mainNav\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"mainNav\">\n      <ul class=\"navbar-nav ms-auto\">\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"#courses\">Courses</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- Include Bootstrap's JS bundle for the toggler. -->";
    }
    if (moduleLower.includes("form")) {
      return "<form>\n  <label for=\"email\" class=\"form-label\">Email</label>\n  <input id=\"email\" type=\"email\" class=\"form-control\" required>\n  <div class=\"form-check mt-3\">\n    <input id=\"updates\" class=\"form-check-input\" type=\"checkbox\">\n    <label class=\"form-check-label\" for=\"updates\">Send updates</label>\n  </div>\n  <button class=\"btn btn-primary mt-3\">Submit</button>\n</form>";
    }
    if (moduleLower.includes("tables")) {
      return "<div class=\"table-responsive\">\n  <table class=\"table table-striped table-hover\">\n    <thead><tr><th scope=\"col\">Course</th><th scope=\"col\">Level</th></tr></thead>\n    <tbody><tr><td>Bootstrap</td><td>Beginner</td></tr></tbody>\n  </table>\n</div>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\">Responsive components</li>\n</ul>";
    }
    if (moduleLower.includes("alerts")) {
      return "<div class=\"alert alert-success\" role=\"alert\">\n  Your changes have been saved.\n</div>\n<span class=\"badge text-bg-primary\">New</span>\n<button class=\"btn btn-primary position-relative\">\n  Inbox <span class=\"badge text-bg-danger\">3</span>\n</button>";
    }
    if (moduleLower.includes("components")) {
      if (lower.includes("modal")) return "<button class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#infoModal\">Open details</button>\n<div class=\"modal fade\" id=\"infoModal\" tabindex=\"-1\" aria-labelledby=\"infoTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\"><div class=\"modal-content\">\n    <div class=\"modal-header\"><h2 class=\"modal-title fs-5\" id=\"infoTitle\">Details</h2></div>\n    <div class=\"modal-body\">Modal content goes here.</div>\n  </div></div>\n</div>\n<!-- Requires Bootstrap JavaScript bundle. -->";
      if (lower.includes("carousel")) return "<div id=\"courseSlides\" class=\"carousel slide\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"slide-1.jpg\" class=\"d-block w-100\" alt=\"Course overview\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"slide-2.jpg\" class=\"d-block w-100\" alt=\"Example project\">\n    </div>\n  </div>\n</div>\n<!-- Add accessible controls and Bootstrap JS for interaction. -->";
      if (lower.includes("accordion")) return "<div class=\"accordion\" id=\"courseFaq\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" data-bs-toggle=\"collapse\"\n        data-bs-target=\"#answer1\" aria-expanded=\"true\">\n        What will I learn?\n      </button>\n    </h2>\n    <div id=\"answer1\" class=\"accordion-collapse collapse show\"\n      data-bs-parent=\"#courseFaq\">\n      <div class=\"accordion-body\">Responsive UI basics.</div>\n    </div>\n  </div>\n</div>";
      return "<div class=\"dropdown\">\n  <button class=\"btn btn-secondary dropdown-toggle\"\n    data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Choose a topic\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#grid\">Grid</a></li>\n    <li><a class=\"dropdown-item\" href=\"#forms\">Forms</a></li>\n  </ul>\n</div>\n<!-- Interactive dropdowns require Bootstrap JS. -->";
    }
    if (moduleLower.includes("responsive")) {
      return "<div class=\"d-none d-md-block\">\n  Visible from the medium breakpoint upward\n</div>\n<div class=\"d-block d-md-none\">\n  Compact layout for smaller screens\n</div>\n\n<!-- Breakpoint classes follow a mobile-first approach. -->";
    }
    if (moduleLower.includes("project")) {
      return "<main class=\"container py-5\">\n  <section class=\"row align-items-center g-4\">\n    <div class=\"col-12 col-md-6\">\n      <p class=\"text-primary fw-semibold\">My portfolio</p>\n      <h1 class=\"display-5\">Hello, I'm Alex.</h1>\n      <p class=\"lead\">I build useful digital experiences.</p>\n      <a class=\"btn btn-primary\" href=\"#projects\">View projects</a>\n    </div>\n    <div class=\"col-12 col-md-6\">\n      <div class=\"card\"><div class=\"card-body\">Featured project</div></div>\n    </div>\n  </section>\n</main>";
    }
    if (lower.includes("cdn") || lower.includes("installation") || lower.includes("basic structure")) {
      return "<!-- Bootstrap CSS in the document head -->\n<link rel=\"stylesheet\" href=\"bootstrap.min.css\">\n\n<main class=\"container py-4\">\n  <h1 class=\"h2\">Bootstrap page</h1>\n</main>";
    }
    if (lower.includes("breakpoint")) return "Bootstrap breakpoints (min-width)\nsm: 576px   md: 768px\nlg: 992px   xl: 1200px\nxxl: 1400px\n\nExample: col-12 col-md-6\nFull width by default, half width from md.";
    if (lower.includes("mobile first")) return "<div class=\"col-12 col-lg-8\">\n  Full width on small screens;\n  two-thirds width at the large breakpoint.\n</div>";
    if (lower.includes("opacity")) return "<div class=\"bg-primary bg-opacity-25 p-3\">\n  Subtle primary background\n</div>\n<p class=\"text-black-50\">Muted text</p>";
    if (lower.includes("heading")) return "<h1 class=\"display-4\">Display heading</h1>\n<h2 class=\"h4\">A heading styled as h4</h2>";
    if (lower.includes("text alignment")) return "<p class=\"text-start text-md-center\">\n  Start aligned by default, centered at md.\n</p>";
    if (lower.includes("text class")) return "<p class=\"lead\">Lead paragraph</p>\n<p class=\"fw-bold\">Bold text</p>\n<p class=\"text-muted\">Muted supporting text</p>";
    if (lower.includes("container-fluid")) return "<div class=\"container-fluid px-4\">\n  Full-width responsive content\n</div>";
    if (lower.includes("responsive container")) return "<div class=\"container-sm\">Small breakpoint container</div>\n<div class=\"container-lg\">Large breakpoint container</div>";
    if (lower.includes("container")) return "<div class=\"container py-3\">\n  Centered content with responsive max-width\n</div>";
    if (lower.includes("margin")) return "<section class=\"mt-4 mx-auto p-3\">\n  Top margin and centered horizontal margins\n</section>";
    if (lower.includes("padding")) return "<div class=\"p-2 p-md-4\">\n  Padding increases at the md breakpoint\n</div>";
    if (lower.includes("width") || lower.includes("height")) return "<div class=\"w-75 p-3 bg-light\">75% width</div>\n<div class=\"min-vh-100\">At least viewport height</div>";
    if (lower.includes("flex direction")) return "<div class=\"d-flex flex-column flex-md-row gap-2\">\n  <div class=\"p-2\">First</div>\n  <div class=\"p-2\">Second</div>\n</div>";
    if (lower.includes("alignment") || lower.includes("justify")) return "<div class=\"d-flex align-items-center justify-content-between\">\n  <span>Course</span><button class=\"btn btn-primary\">Open</button>\n</div>";
    if (lower.includes("display")) return "<div class=\"d-none d-lg-block\">\n  Only displayed on large screens\n</div>";
    if (lower.includes("button size")) return "<button class=\"btn btn-primary btn-sm\">Small</button>\n<button class=\"btn btn-primary btn-lg\">Large</button>";
    if (lower.includes("button type")) return "<button class=\"btn btn-primary\">Primary</button>\n<button class=\"btn btn-outline-secondary\">Outline</button>";
    if (lower.includes("card image")) return "<div class=\"card\">\n  <img src=\"course.jpg\" class=\"card-img-top\" alt=\"Course thumbnail\">\n  <div class=\"card-body\">Card content</div>\n</div>";
    if (lower.includes("card layout")) return "<div class=\"row row-cols-1 row-cols-md-3 g-3\">\n  <div class=\"col\"><article class=\"card h-100\"><div class=\"card-body\">Card 1</div></article></div>\n  <div class=\"col\"><article class=\"card h-100\"><div class=\"card-body\">Card 2</div></article></div>\n</div>";
    if (lower.includes("card")) return "<article class=\"card\">\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card title</h2>\n    <p class=\"card-text\">Supporting description.</p>\n  </div>\n</article>";
    if (lower.includes("navbar")) return "<nav class=\"navbar navbar-expand-lg bg-body-tertiary\">\n  <div class=\"container\"><a class=\"navbar-brand\" href=\"#\">Brand</a></div>\n</nav>";
    if (lower.includes("validation")) return "<form class=\"needs-validation\" novalidate>\n  <label class=\"form-label\" for=\"name\">Name</label>\n  <input id=\"name\" class=\"form-control\" required>\n  <div class=\"invalid-feedback\">Enter a name.</div>\n</form>";
    if (lower.includes("select") || lower.includes("checkbox")) return "<select class=\"form-select\" aria-label=\"Choose a course\">\n  <option selected>Choose a course</option><option>Bootstrap</option>\n</select>\n<div class=\"form-check mt-2\">\n  <input class=\"form-check-input\" type=\"checkbox\" id=\"agree\">\n  <label class=\"form-check-label\" for=\"agree\">I agree</label>\n</div>";
    if (lower.includes("input")) return "<label for=\"email\" class=\"form-label\">Email</label>\n<input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"name@example.com\">";
    if (lower.includes("responsive table")) return "<div class=\"table-responsive\">\n  <table class=\"table\"><thead><tr><th>Course</th></tr></thead>\n    <tbody><tr><td>Bootstrap</td></tr></tbody></table>\n</div>";
    if (lower.includes("list group")) return "<ul class=\"list-group\">\n  <li class=\"list-group-item active\">Current topic</li>\n  <li class=\"list-group-item\">Next topic</li>\n</ul>";
    if (lower.includes("table")) return "<table class=\"table table-striped\">\n  <thead><tr><th scope=\"col\">Name</th><th scope=\"col\">Level</th></tr></thead>\n  <tbody><tr><td>Bootstrap</td><td>Beginner</td></tr></tbody>\n</table>";
    if (lower.includes("badge") || lower.includes("notification")) return "<span class=\"badge text-bg-success\">Complete</span>\n<span class=\"badge rounded-pill text-bg-primary\">3 new</span>";
    if (lower.includes("alert")) return "<div class=\"alert alert-info\" role=\"status\">\n  Your profile was updated.\n</div>";
    if (lower.includes("responsive")) return "<div class=\"container\"><div class=\"row\">\n  <div class=\"col-12 col-md-6\">Responsive column</div>\n</div></div>";

    return `${moduleTitle}\n\n${topic}\n\nUse Bootstrap's documented responsive utilities\nand semantic HTML to build a consistent interface.`;
  };

  const getBootstrapExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();

    if (lower.includes("introduction") || lower.includes("what is bootstrap") || lower.includes("features") || lower.includes("advantages")) return "Bootstrap is a front-end toolkit with a responsive grid, utility classes, and reusable UI components. It helps build consistent interfaces quickly while still allowing projects to customize styles and behavior.";
    if (lower.includes("cdn") || lower.includes("installation") || lower.includes("basic structure") || moduleTitle.toLowerCase().includes("setup")) return "Bootstrap can be included through a trusted CDN or installed with a package manager. Add the stylesheet to the document head; include the JavaScript bundle when using interactive components such as the navbar toggler, modal, or dropdown.";
    if (lower.includes("container") || lower.includes("fluid")) return "Containers provide responsive horizontal padding and width constraints. The standard container changes its maximum width at breakpoints; container-fluid spans the full available width.";
    if (lower.includes("grid") || lower.includes("row") || lower.includes("column") || lower.includes("breakpoint")) return "Bootstrap's mobile-first grid uses containers, rows, and columns across 12 columns. Breakpoint prefixes such as md: and lg: apply layout changes at defined viewport widths.";
    if (lower.includes("typography") || lower.includes("heading") || lower.includes("text")) return "Typography utilities style headings, alignment, weight, and emphasis. Semantic heading levels should still reflect document structure even when a different visual size is needed.";
    if (lower.includes("color") || lower.includes("background") || lower.includes("opacity")) return "Bootstrap provides contextual text and background color utilities, including opacity variants. Use colors consistently and ensure the foreground/background combination remains readable.";
    if (lower.includes("spacing") || lower.includes("margin") || lower.includes("padding") || lower.includes("sizing") || lower.includes("width") || lower.includes("height")) return "Spacing and sizing utilities use a consistent scale and optional breakpoint prefixes. They are useful for common layout adjustments; use custom CSS when a design needs a value or behavior outside the utility system.";
    if (lower.includes("display") || lower.includes("flex") || lower.includes("alignment") || lower.includes("justify")) return "Display and flex utilities control visibility, direction, wrapping, and alignment. Bootstrap utilities can change responsively, so check the layout at narrow and wide viewport sizes.";
    if (lower.includes("button")) return "Button classes provide consistent interactive controls in contextual, outline, and size variants. Use a real button for actions and an anchor for navigation, with an accessible name.";
    if (lower.includes("card")) return "Cards group related content with optional images, body sections, titles, and actions. Grid utilities can arrange cards responsively while keeping content readable.";
    if (lower.includes("navbar")) return "Navbar components structure site navigation and can collapse at chosen breakpoints. The toggler relies on Bootstrap JavaScript; provide accessible labels and ensure navigation remains usable on small screens.";
    if (lower.includes("form") || lower.includes("input") || lower.includes("select") || lower.includes("checkbox") || lower.includes("validation")) return "Bootstrap form controls improve visual consistency but do not replace accessible labels, correct input types, server-side validation, or clear error messages.";
    if (lower.includes("table") || lower.includes("list")) return "Table and list-group styles organize structured content. Wrap wide tables in a responsive container and use proper header cells and semantic list markup.";
    if (lower.includes("alert") || lower.includes("badge") || lower.includes("notification")) return "Alerts communicate a status or message; badges show compact labels or counts. Use appropriate roles and text so that meaning does not depend on color alone.";
    if (lower.includes("modal") || lower.includes("carousel") || lower.includes("accordion") || lower.includes("dropdown") || moduleTitle.toLowerCase().includes("components")) return "Bootstrap's interactive components use markup conventions and the JavaScript bundle. Follow their accessibility requirements, including keyboard interaction, labels, and meaningful controls.";
    if (lower.includes("responsive") || lower.includes("mobile first")) return "Bootstrap is mobile-first: base styles target smaller viewports, and breakpoint classes progressively enhance larger layouts. Test real content at multiple widths rather than relying only on device names.";
    if (lower.includes("project") || lower.includes("login") || lower.includes("portfolio") || lower.includes("website")) return `${topic} is a practical way to combine Bootstrap layout, utilities, and components. Start with semantic HTML, build a mobile-first structure, and test accessibility and responsiveness as you refine it.`;

    return `${topic} is part of ${moduleTitle}. Use Bootstrap's responsive utilities and components appropriately, preserve semantic HTML, and verify the result at different viewport sizes.`;
  };

  const makeReactExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (moduleLower.includes("introduction")) {
      return "function Welcome({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\nfunction App() {\n  return <Welcome name=\"React learner\" />;\n}\n\n// React builds UI by composing components.";
    }
    if (moduleLower.includes("environment")) {
      return "# Create a React app with Vite\nnpm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev\n\n# Main files to explore:\n# src/main.jsx, src/App.jsx, package.json";
    }
    if (moduleLower.includes("jsx")) {
      return "function Welcome({ name }) {\n  const message = `Hello, ${name}!`;\n  return (\n    <section className=\"welcome\">\n      <h1>{message}</h1>\n      <p>JSX describes the UI.</p>\n    </section>\n  );\n}";
    }
    if (moduleLower.includes("props")) {
      return "function CourseCard({ title, level }) {\n  return (\n    <article className=\"course-card\">\n      <h2>{title}</h2>\n      <p>Level: {level}</p>\n    </article>\n  );\n}\n\n<CourseCard title=\"React\" level=\"Beginner\" />";
    }
    if (moduleLower.includes("state")) {
      return "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(value => value + 1)}>\n      Count: {count}\n    </button>\n  );\n}";
    }
    if (moduleLower.includes("event")) {
      return "function SaveButton() {\n  function handleClick() {\n    console.log('Save requested');\n  }\n  return <button onClick={handleClick}>Save</button>;\n}";
    }
    if (moduleLower.includes("conditional")) {
      return "function Greeting({ isSignedIn }) {\n  return (\n    <main>\n      {isSignedIn ? <h1>Welcome back</h1> : <a href=\"/login\">Sign in</a>}\n    </main>\n  );\n}";
    }
    if (moduleLower.includes("lists")) {
      return "const courses = [\n  { id: 1, name: 'React' },\n  { id: 2, name: 'JavaScript' },\n];\n\nfunction CourseList() {\n  return (\n    <ul>\n      {courses.map(course => (\n        <li key={course.id}>{course.name}</li>\n      ))}\n    </ul>\n  );\n}";
    }
    if (moduleLower.includes("forms")) {
      return "import { useState } from 'react';\n\nfunction NameForm() {\n  const [name, setName] = useState('');\n  function handleSubmit(event) {\n    event.preventDefault();\n    console.log(name);\n  }\n  return (\n    <form onSubmit={handleSubmit}>\n      <label htmlFor=\"name\">Name</label>\n      <input id=\"name\" value={name}\n        onChange={event => setName(event.target.value)} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}";
    }
    if (moduleLower.includes("hooks") && !moduleLower.includes("effect")) {
      return "import { useRef, useState } from 'react';\n\nfunction SearchBox() {\n  const [query, setQuery] = useState('');\n  const inputRef = useRef(null);\n  return (\n    <label>\n      Search\n      <input ref={inputRef} value={query}\n        onChange={event => setQuery(event.target.value)} />\n    </label>\n  );\n}";
    }
    if (moduleLower.includes("router")) {
      if (lower.includes("dynamic")) return "import { Routes, Route, useParams } from 'react-router-dom';\n\nfunction CoursePage() {\n  const { courseId } = useParams();\n  return <h1>Course: {courseId}</h1>;\n}\n\n<Routes>\n  <Route path=\"/courses/:courseId\" element={<CoursePage />} />\n</Routes>";
      return "import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav><Link to=\"/\">Home</Link> <Link to=\"/about\">About</Link></nav>\n      <Routes>\n        <Route path=\"/\" element={<h1>Home</h1>} />\n        <Route path=\"/about\" element={<h1>About</h1>} />\n      </Routes>\n    </BrowserRouter>\n  );\n}";
    }
    if (moduleLower.includes("api")) {
      return "import { useEffect, useState } from 'react';\n\nfunction Users() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState('');\n  useEffect(() => {\n    let ignore = false;\n    fetch('/api/users')\n      .then(response => {\n        if (!response.ok) throw new Error('Request failed');\n        return response.json();\n      })\n      .then(data => { if (!ignore) setUsers(data); })\n      .catch(() => { if (!ignore) setError('Could not load users.'); })\n      .finally(() => { if (!ignore) setLoading(false); });\n    return () => { ignore = true; };\n  }, []);\n  if (loading) return <p>Loading users…</p>;\n  if (error) return <p role=\"alert\">{error}</p>;\n  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>;\n}";
    }
    if (moduleLower.includes("effect")) {
      return "import { useEffect, useState } from 'react';\n\nfunction Clock() {\n  const [now, setNow] = useState(() => new Date());\n  useEffect(() => {\n    const timer = setInterval(() => setNow(new Date()), 1000);\n    return () => clearInterval(timer);\n  }, []);\n  return <time>{now.toLocaleTimeString()}</time>;\n}";
    }
    if (moduleLower.includes("context")) {
      return "import { createContext, useContext } from 'react';\n\nconst ThemeContext = createContext('light');\n\nfunction Toolbar() {\n  const theme = useContext(ThemeContext);\n  return <button className={`theme-${theme}`}>Current theme: {theme}</button>;\n}\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}";
    }
    if (moduleLower.includes("performance")) {
      return "import { memo, useMemo, useCallback } from 'react';\n\nconst Result = memo(function Result({ items, onSelect }) {\n  return items.map(item => (\n    <button key={item.id} onClick={() => onSelect(item)}>\n      {item.name}\n    </button>\n  ));\n});\n\n// Measure first; memoization is useful only when it avoids real work.";
    }
    if (moduleLower.includes("project")) {
      if (lower.includes("todo")) return "function TodoList({ todos, onToggle }) {\n  return (\n    <ul>\n      {todos.map(todo => (\n        <li key={todo.id}>\n          <label>\n            <input type=\"checkbox\" checked={todo.done}\n              onChange={() => onToggle(todo.id)} />\n            {todo.title}\n          </label>\n        </li>\n      ))}\n    </ul>\n  );\n}";
      if (lower.includes("weather")) return "function WeatherCard({ city, temperature, condition }) {\n  return (\n    <article aria-label={`Weather in ${city}`}>\n      <h2>{city}</h2>\n      <p>{temperature}°</p>\n      <p>{condition}</p>\n    </article>\n  );\n}";
      if (lower.includes("student")) return "function StudentList({ students }) {\n  return (\n    <table>\n      <thead><tr><th>Name</th><th>Course</th></tr></thead>\n      <tbody>\n        {students.map(student => (\n          <tr key={student.id}>\n            <td>{student.name}</td><td>{student.course}</td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  );\n}";
      return "function ProjectCard({ title, description, href }) {\n  return (\n    <article className=\"project-card\">\n      <h2>{title}</h2>\n      <p>{description}</p>\n      <a href={href}>View project</a>\n    </article>\n  );\n}";
    }
    if (lower.includes("vite") || lower.includes("npm") || lower.includes("node.js") || lower.includes("structure")) return "my-app/\n├── index.html\n├── package.json\n└── src/\n    ├── main.jsx   # React entry point\n    ├── App.jsx    # Root component\n    └── assets/";
    if (lower.includes("jsx") || lower.includes("expression")) return "const user = 'Mina';\nconst heading = <h1>Hello, {user}</h1>;\n\n// JSX expressions go inside curly braces.\n// Use className for CSS classes and close tags.";
    if (lower.includes("component")) return "function Welcome() {\n  return <h1>Welcome to React</h1>;\n}\n\nexport default Welcome;";
    if (lower.includes("prop")) return "function Badge({ label }) {\n  return <span className=\"badge\">{label}</span>;\n}\n\n<Badge label=\"New\" />";
    if (lower.includes("state") || lower.includes("usestate")) return "const [isOpen, setIsOpen] = useState(false);\n\n<button onClick={() => setIsOpen(open => !open)}>\n  {isOpen ? 'Close' : 'Open'}\n</button>";
    if (lower.includes("event") || lower.includes("click") || lower.includes("form event")) return "function handleClick(event) {\n  event.preventDefault();\n  console.log('Action handled');\n}\n\n<button onClick={handleClick}>Continue</button>";
    if (lower.includes("conditional") || lower.includes("ternary") || lower.includes("logical")) return "{isLoading ? <p>Loading…</p> : <Profile />}\n\n{hasMessage && <p>{message}</p>}";
    if (lower.includes("map()") || lower.includes("key") || lower.includes("list")) return "{items.map(item => (\n  <li key={item.id}>{item.label}</li>\n))}\n\n// Choose a stable unique key from the data.";
    if (lower.includes("useeffect") || lower.includes("api calls") || lower.includes("cleanup") || lower.includes("dependencies")) return "useEffect(() => {\n  const controller = new AbortController();\n  loadData({ signal: controller.signal });\n  return () => controller.abort();\n}, []);";
    if (lower.includes("router") || lower.includes("route") || lower.includes("link")) return "<Routes>\n  <Route path=\"/\" element={<Home />} />\n  <Route path=\"/courses/:id\" element={<Course />} />\n</Routes>";
    if (lower.includes("fetch") || lower.includes("json") || lower.includes("loading") || lower.includes("error")) return "const response = await fetch('/api/items');\nif (!response.ok) throw new Error('Request failed');\nconst items = await response.json();\n\n// Show loading and error states in the UI.";
    if (lower.includes("context") || lower.includes("provider") || lower.includes("usecontext")) return "const ThemeContext = createContext('light');\n\n<ThemeContext.Provider value=\"dark\">\n  <Toolbar />\n</ThemeContext.Provider>\n\nconst theme = useContext(ThemeContext);";
    if (lower.includes("memo") || lower.includes("callback") || lower.includes("performance")) return "const visibleItems = useMemo(\n  () => filterItems(items, query),\n  [items, query]\n);\n\n// Profile before optimizing; memoization has a cost.";
    if (lower.includes("project")) return `${moduleTitle}\n\nBuild with reusable components, controlled state,\naccessible forms, loading and error states, and\nresponsive styling.`;
    return `${moduleTitle}\n\n${topic}\n\nUse small components, clear data flow, and\naccessible semantic markup.`;
  };

  const getReactExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();

    if (lower.includes("introduction") || lower.includes("what is react") || lower.includes("features") || lower.includes("advantages") || lower.includes("vs javascript")) return "React is a JavaScript library for building user interfaces from reusable components. It describes UI as a function of data; JavaScript remains the language used to write components, handle logic, and update application state.";
    if (lower.includes("environment") || lower.includes("node.js") || lower.includes("npm") || lower.includes("vite") || lower.includes("project structure")) return "A React development setup commonly uses Node.js and npm, with Vite providing a dev server and build tool. The entry module mounts the root component, while source files contain the application's components and assets.";
    if (lower.includes("jsx") || lower.includes("expression")) return "JSX is a JavaScript syntax extension that describes UI elements. Use one parent element, close tags, use className for CSS classes, and place JavaScript expressions inside curly braces.";
    if (lower.includes("component") || lower.includes("functional")) return "A React component is a reusable unit of UI, commonly written as a JavaScript function that returns JSX. Keep components focused and compose smaller components to build larger screens.";
    if (lower.includes("prop")) return "Props pass read-only information from a parent component to a child. They let a component be reused with different data; a component should not mutate the props it receives.";
    if (lower.includes("state") || lower.includes("usestate")) return "State is data owned by a component that can change over time. useState returns the current value and a setter; use the setter to request a render, and use functional updates when the next value depends on the previous one.";
    if (lower.includes("event") || lower.includes("click") || lower.includes("form event")) return "React event handlers are passed as functions, for example onClick={handleClick}. Keep the handler reference rather than calling it during render, and use the event object to read form input or prevent a default submission.";
    if (lower.includes("conditional") || lower.includes("ternary") || lower.includes("logical")) return "Conditional rendering chooses UI based on values. Use if/else before return, a ternary for two alternatives, or && for optional content while avoiding accidental rendering of values such as zero.";
    if (lower.includes("list") || lower.includes("map()") || lower.includes("key")) return "Render collections by mapping data to elements. Give each sibling a stable, unique key so React can correctly track items when the list changes; avoid array indexes when items can be reordered.";
    if (lower.includes("form") || lower.includes("input handling") || lower.includes("controlled")) return "A controlled input gets its value from React state and updates that state through onChange. Handle submission explicitly, label controls accessibly, and validate user input at the appropriate layers.";
    if (lower.includes("hook") || lower.includes("usestate") || lower.includes("useref") || lower.includes("custom hook")) return "Hooks let function components use React features. Call hooks at the top level of components or custom hooks, not inside conditions or loops; custom hooks share stateful logic between components.";
    if (lower.includes("effect") || lower.includes("side effect") || lower.includes("api calls") || lower.includes("cleanup") || lower.includes("dependencies")) return "useEffect synchronizes a component with an external system after rendering. Specify all reactive dependencies and return cleanup for subscriptions, timers, or requests that should stop when dependencies change or the component unmounts.";
    if (lower.includes("router") || lower.includes("route") || lower.includes("link") || lower.includes("dynamic")) return "A client-side router maps URL paths to UI and enables navigation without a full page load. Define routes and links with the router library, and read route parameters for dynamic pages.";
    if (lower.includes("fetch") || lower.includes("json") || lower.includes("loading") || lower.includes("error")) return "Data fetching should represent loading, success, and error states. Check response status before parsing JSON, handle failures, and prevent stale requests from updating a component after it is no longer current.";
    if (lower.includes("context") || lower.includes("provider") || lower.includes("usecontext")) return "Context passes values through a component tree without threading props at every level. Create a context, provide a value above consumers, and read it with useContext; keep context focused to avoid unnecessary broad updates.";
    if (lower.includes("memo") || lower.includes("callback") || lower.includes("performance")) return "React performance tools can skip some repeated work, but memoization adds complexity and is not automatically beneficial. Profile a real bottleneck first, then consider memo, useMemo, or useCallback where stable values prevent meaningful re-renders or recalculation.";
    if (lower.includes("project")) return `${topic} is a practical project in ${moduleTitle}. Break the interface into components, manage state deliberately, handle errors and empty states, and test accessibility and responsive behavior.`;
    return `${topic} is part of ${moduleTitle}. Build understanding by tracing component inputs, rendered output, state changes, and the user interactions that cause them.`;
  };

  const makeNodeExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (moduleLower.includes("introduction")) {
      return "import { createServer } from 'node:http';\n\nconst server = createServer((request, response) => {\n  response.writeHead(200, { 'content-type': 'text/plain' });\n  response.end('JavaScript running on Node.js');\n});\n\nserver.listen(3000, '127.0.0.1');\n\n// Node.js provides runtime APIs for servers,\n// files, networking, and asynchronous I/O.";
    }
    if (moduleLower.includes("installation")) {
      return "# Check your installation\nnode --version\nnpm --version\n\n# Create a project folder and initialize npm\nmkdir node-learning\ncd node-learning\nnpm init -y\n\n# Run a JavaScript file\nnode app.js";
    }
    if (moduleLower.includes("modules")) {
      if (lower.includes("built-in")) return "import { readFile } from 'node:fs';\nimport { join } from 'node:path';\n\nconst filePath = join(process.cwd(), 'notes.txt');\nreadFile(filePath, 'utf8', (error, data) => {\n  if (error) throw error;\n  console.log(data);\n});";
      if (lower.includes("third")) return "// Install a dependency, then import its API\n// npm install express\nimport express from 'express';\n\nconst app = express();\nconsole.log(typeof app);";
      return "// math.js\nexport function add(a, b) {\n  return a + b;\n}\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(2, 3));";
    }
    if (moduleLower.includes("npm")) {
      return "{\n  \"name\": \"node-learning\",\n  \"type\": \"module\",\n  \"scripts\": { \"start\": \"node app.js\" },\n  \"dependencies\": {},\n  \"devDependencies\": {}\n}\n\n# Install a runtime dependency with:\n# npm install package-name";
    }
    if (moduleLower.includes("file system")) {
      if (lower.includes("read")) return "import { readFile } from 'node:fs/promises';\n\ntry {\n  const text = await readFile('notes.txt', 'utf8');\n  console.log(text);\n} catch (error) {\n  console.error('Could not read file:', error.message);\n}";
      if (lower.includes("write")) return "import { writeFile } from 'node:fs/promises';\n\nawait writeFile('notes.txt', 'Learning Node.js\\n', 'utf8');";
      return "import { rename, unlink } from 'node:fs/promises';\n\nawait rename('draft.txt', 'notes.txt');\nawait unlink('old-notes.txt');\n// Handle errors and verify paths before changing files.";
    }
    if (moduleLower.includes("path")) {
      return "import { dirname, extname, join, resolve } from 'node:path';\n\nconst filePath = join(process.cwd(), 'data', 'notes.json');\nconsole.log(resolve(filePath));\nconsole.log(dirname(filePath));\nconsole.log(extname(filePath));";
    }
    if (moduleLower.includes("events")) {
      return "import { EventEmitter } from 'node:events';\n\nconst bus = new EventEmitter();\nbus.on('user:created', user => {\n  console.log(`Created user ${user.id}`);\n});\nbus.emit('user:created', { id: 42 });";
    }
    if (moduleLower.includes("http module") || moduleLower.includes("web server")) {
      return "import { createServer } from 'node:http';\n\nconst server = createServer((request, response) => {\n  response.writeHead(200, { 'content-type': 'text/plain' });\n  response.end('Hello from Node.js');\n});\n\nserver.listen(3000, '127.0.0.1');\n// Keep development servers bound locally unless exposure is intended.";
    }
    if (moduleLower.includes("asynchronous")) {
      if (lower.includes("callback")) return "import { readFile } from 'node:fs';\n\nreadFile('notes.txt', 'utf8', (error, data) => {\n  if (error) {\n    console.error(error.message);\n    return;\n  }\n  console.log(data);\n});";
      if (lower.includes("promise")) return "import { readFile } from 'node:fs/promises';\n\nreadFile('notes.txt', 'utf8')\n  .then(text => console.log(text))\n  .catch(error => console.error(error.message));";
      return "import { readFile } from 'node:fs/promises';\n\nasync function loadNotes() {\n  try {\n    return await readFile('notes.txt', 'utf8');\n  } catch (error) {\n    console.error('Read failed:', error.message);\n    return '';\n  }\n}";
    }
    if (moduleLower.includes("express")) {
      return "import express from 'express';\n\nconst app = express();\napp.use(express.json());\napp.get('/health', (request, response) => {\n  response.json({ status: 'ok' });\n});\napp.listen(3000, '127.0.0.1');";
    }
    if (moduleLower.includes("routing")) {
      return "app.get('/api/students/:id', (request, response) => {\n  response.json({ studentId: request.params.id });\n});\n\napp.post('/api/students', (request, response) => {\n  // Validate request.body before creating data.\n  response.status(201).json({ created: true });\n});";
    }
    if (moduleLower.includes("api")) {
      return "app.get('/api/courses', async (request, response, next) => {\n  try {\n    const courses = await courseStore.list();\n    response.json({ data: courses });\n  } catch (error) {\n    next(error);\n  }\n});\n\n// Return suitable status codes and validate inputs.";
    }
    if (moduleLower.includes("database")) {
      return "async function createStudent(collection, input) {\n  const student = {\n    name: input.name.trim(),\n    course: input.course.trim()\n  };\n  if (!student.name || !student.course) {\n    throw new Error('Name and course are required');\n  }\n  return collection.insertOne(student);\n}\n\n// Keep credentials in environment-based configuration.";
    }
    if (moduleLower.includes("error handling")) {
      if (lower.includes("middleware")) return "app.use((error, request, response, next) => {\n  console.error(error);\n  if (response.headersSent) return next(error);\n  response.status(500).json({ error: 'Internal server error' });\n});";
      return "async function loadRecord(id) {\n  try {\n    return await store.findById(id);\n  } catch (error) {\n    console.error('Record lookup failed:', error);\n    throw error;\n  }\n}";
    }
    if (moduleLower.includes("authentication")) {
      if (lower.includes("hashing")) return "import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';\nimport { promisify } from 'node:util';\n\nconst scrypt = promisify(scryptCallback);\nasync function hashPassword(password) {\n  const salt = randomBytes(16);\n  const hash = await scrypt(password, salt, 64);\n  return `${salt.toString('hex')}:${Buffer.from(hash).toString('hex')}`;\n}\n// Prefer a vetted password-hashing library for production.";
      if (lower.includes("jwt")) return "JWT security checklist\n- Sign with a vetted library and strong secret/key\n- Verify signature, issuer, audience, and expiry\n- Use short lifetimes and plan revocation\n- Do not put secrets or sensitive data in claims";
      return "Authentication checklist\n- Hash passwords with a vetted password KDF\n- Keep signing secrets outside source control\n- Verify token issuer, audience, expiry, and signature\n- Apply authorization checks on every protected route\n- Use HTTPS and rate limits for login endpoints";
    }
    if (moduleLower.includes("project")) {
      return "Project API structure\nsrc/\n  app.js          # configure middleware\n  routes/\n    students.js   # resource endpoints\n  services/\n    students.js   # business logic\n  data/\n    database.js   # database connection\n\nValidate inputs, handle errors, and protect secrets.";
    }
    if (lower.includes("package.json")) return "{\n  \"name\": \"node-learning\",\n  \"type\": \"module\",\n  \"scripts\": { \"start\": \"node app.js\" }\n}";
    if (lower.includes("dependencies")) return "# Add a production dependency\nnpm install express\n\n# Add a development-only dependency\nnpm install --save-dev nodemon\n\n# Commit package.json and the lockfile.";
    if (lower.includes("get") || lower.includes("post") || lower.includes("put") || lower.includes("delete")) return "app.get('/api/items', listItems);\napp.post('/api/items', createItem);\napp.put('/api/items/:id', replaceItem);\napp.delete('/api/items/:id', deleteItem);\n\n// Validate inputs and check permissions in each handler.";
    if (lower.includes("jwt")) return "JWT security checklist\n- Sign with a vetted library and strong secret/key\n- Validate signature, issuer, audience, and expiry\n- Use short lifetimes and plan revocation\n- Do not put secrets or sensitive data in claims";
    if (lower.includes("login") || lower.includes("registration")) return "Authentication flow\n1. Validate submitted fields\n2. Look up account safely\n3. Verify password hash\n4. Create a short-lived session/token\n5. Apply rate limits and generic error messages\n\nNever store or log plaintext passwords.";
    if (lower.includes("route parameter")) return "app.get('/api/items/:itemId', (request, response) => {\n  const { itemId } = request.params;\n  response.json({ itemId });\n});";
    if (lower.includes("routing")) return "app.get('/health', (request, response) => {\n  response.send('OK');\n});";
    return `${moduleTitle}\n\nTopic: ${topic}\n\nUse Node.js APIs with asynchronous error handling,\nvalidated inputs, and least-privilege access.`;
  };

  const getNodeExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();

    if (lower.includes("introduction") || lower.includes("what is node.js") || lower.includes("features") || lower.includes("advantages") || lower.includes("browser javascript")) return "Node.js is a JavaScript runtime built on the V8 engine that runs JavaScript outside the browser. It provides server-side APIs and an event-driven, non-blocking I/O model; browser JavaScript instead runs in a page environment with browser-specific APIs.";
    if (lower.includes("installation") || lower.includes("node.js installation") || lower.includes("npm") || lower.includes("project setup")) return "Install a current supported Node.js release, which includes npm, then verify both commands in a terminal. Initialize a project with npm so its scripts, dependencies, and metadata are recorded in package.json and a lockfile.";
    if (lower.includes("module") || lower.includes("built-in") || lower.includes("custom") || lower.includes("third-party")) return "Node.js modules organize code and expose reusable APIs. Built-in modules use the node: prefix, local modules belong to the project, and third-party modules should be installed from trusted packages with dependencies reviewed and locked.";
    if (lower.includes("file") || lower.includes("reading") || lower.includes("writing") || lower.includes("deleting")) return "The node:fs APIs read and change files. Promise-based methods work naturally with async/await; handle filesystem errors, use deliberate paths and encodings, and avoid blocking synchronous operations in request handlers.";
    if (lower.includes("path") || lower.includes("directory") || lower.includes("file location")) return "The node:path module builds and inspects file paths in a platform-aware way. Resolve paths from known application directories rather than assuming a working directory, and validate untrusted path segments before accessing files.";
    if (lower.includes("event") || lower.includes("eventemitter")) return "EventEmitter provides a publish/subscribe pattern: listeners register for named events and emitters notify them. Register and remove listeners carefully to avoid leaks, and handle error events where relevant.";
    if (lower.includes("http") || lower.includes("request") || lower.includes("response") || lower.includes("server") || lower.includes("routing")) return "Node's HTTP APIs can accept requests and send responses. A server should validate methods, paths, headers, and request data, return appropriate status codes, and avoid exposing internal error details.";
    if (lower.includes("synchronous") || lower.includes("asynchronous") || lower.includes("callback") || lower.includes("promise") || lower.includes("async") || lower.includes("await")) return "Asynchronous programming lets Node.js handle I/O without blocking the event loop. Callbacks, promises, and async/await express asynchronous work; propagate errors and avoid long CPU-bound tasks on the main event loop.";
    if (lower.includes("express") || lower.includes("middleware") || lower.includes("route")) return "Express is a web framework for Node.js. Routes handle HTTP methods and paths; middleware can parse requests, authenticate, log, or handle errors. Order middleware deliberately and validate all untrusted input.";
    if (lower.includes("api") || lower.includes("rest") || lower.includes("json") || lower.includes("request") || lower.includes("response")) return "A REST-style API exposes resources through HTTP methods and status codes, often exchanging JSON. Validate and authorize each request, return predictable response shapes, and handle errors without leaking sensitive details.";
    if (lower.includes("database") || lower.includes("mongodb") || lower.includes("crud") || lower.includes("connecting")) return "A Node.js application can use a database driver or an object data mapper to perform CRUD operations. Manage connections safely, validate data, enforce access controls, and keep database credentials out of source code.";
    if (lower.includes("error") || lower.includes("try/catch") || lower.includes("server error")) return "Handle expected failures explicitly and pass unexpected request errors to a centralized error handler. Log useful diagnostic context on the server while returning safe, non-sensitive messages to clients.";
    if (lower.includes("authentication") || lower.includes("login") || lower.includes("password") || lower.includes("jwt") || lower.includes("security")) return "Authentication verifies identity; authorization controls access. Hash passwords with a vetted password-hashing algorithm, protect sessions or tokens, validate permissions on every request, and use TLS, rate limits, and secure secret management.";
    if (lower.includes("project") || lower.includes("blog") || lower.includes("student") || lower.includes("login system")) return `${topic} is a practical project in ${moduleTitle}. Separate routes, business logic, and data access; validate inputs, handle errors, protect credentials, and test normal and failure paths.`;
    return `${topic} is part of ${moduleTitle}. Learn which Node.js API or server concept applies, how asynchronous errors are handled, and what input validation and security controls are needed.`;
  };

  const makeMongoExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (moduleLower.includes("introduction")) {
      return "Document example\n{\n  _id: ObjectId(\"...\"),\n  name: \"Asha\",\n  course: \"Computer Science\",\n  active: true\n}\n\n// A MongoDB document stores related fields\n// together in a flexible BSON structure.";
    }
    if (moduleLower.includes("nosql")) {
      return "Relational model                 Document model\nStudents table                   students collection\n+----+------+--------+           {\n| id | name | course |             _id: ObjectId(...),\n+----+------+--------+             name: \"Asha\",\n                                   course: \"CS\"\n                                 }\n\nChoose a data model based on query patterns.";
    }
    if (moduleLower.includes("installation")) {
      return "Local development options\n1. Install MongoDB Community Server\n2. Use MongoDB Compass to inspect data\n3. Or create an Atlas cluster\n4. Keep the connection URI in an environment variable\n\nMONGODB_URI=mongodb://127.0.0.1:27017/learnhub";
    }
    if (moduleLower.includes("architecture")) {
      return "MongoDB hierarchy\nInstance\n  └── Database\n       └── Collection\n            └── Document\n                 └── Field\n\nA collection stores documents; each document\nhas a unique _id field.";
    }
    if (moduleLower.includes("documents & bson")) {
      return "BSON document (shell-style example)\n{\n  name: \"Asha\",\n  age: 21,\n  active: true,\n  skills: [\"JavaScript\", \"MongoDB\"],\n  profile: { city: \"Pune\" }\n}\n\nBSON supports types such as ObjectId and Date.";
    }
    if (moduleLower.includes("crud operations")) {
      return "CRUD summary\nCreate:  insertOne({ name: \"Asha\" })\nRead:    find({ active: true })\nUpdate:  updateOne({ name: \"Asha\" },\n                    { $set: { active: false } })\nDelete:  deleteOne({ name: \"Asha\" })";
    }
    if (moduleLower.includes("database & collection")) {
      return "In mongosh\nuse learnhub\n\n// Collections can also be created on first insert\ndb.createCollection(\"students\")\nshow collections\n\n// Destructive: verify the target first\ndb.students.drop()\ndb.dropDatabase()";
    }
    if (moduleLower.includes("insert")) {
      if (lower.includes("insertmany")) return "db.students.insertMany([\n  { name: \"Asha\", course: \"CS\", active: true },\n  { name: \"Ravi\", course: \"IT\", active: true }\n])";
      return "db.students.insertOne({\n  name: \"Asha\",\n  course: \"Computer Science\",\n  active: true,\n  createdAt: new Date()\n})";
    }
    if (moduleLower.includes("query")) {
      if (lower.includes("comparison")) return "db.students.find({\n  score: { $gte: 70, $lt: 90 },\n  active: true\n})";
      if (lower.includes("condition")) return "db.students.find({\n  course: \"Computer Science\",\n  active: true\n}, { name: 1, course: 1, _id: 0 })";
      return "db.students.find({ active: true })\n  .sort({ name: 1 })\n  .limit(10)";
    }
    if (moduleLower.includes("update")) {
      if (lower.includes("updatemany")) return "db.students.updateMany(\n  { active: false },\n  { $set: { archived: true } }\n)";
      if (lower.includes("operator")) return "db.students.updateOne(\n  { _id: studentId },\n  { $set: { course: \"IT\" },\n    $currentDate: { updatedAt: true } }\n)";
      return "db.students.updateOne(\n  { _id: studentId },\n  { $set: { active: false } }\n)";
    }
    if (moduleLower.includes("delete")) {
      if (lower.includes("deletemany")) return "db.students.deleteMany({\n  archived: true,\n  active: false\n})\n\n// Review the filter with find() before deletion.";
      return "db.students.deleteOne({\n  _id: studentId\n})\n\n// Use a selective filter and verify the target.";
    }
    if (moduleLower.includes("operators")) {
      if (lower.includes("logical")) return "db.students.find({\n  $and: [\n    { active: true },\n    { $or: [\n      { score: { $gte: 80 } },\n      { honors: true }\n    ] }\n  ]\n})";
      if (lower.includes("array")) return "db.students.find({\n  skills: { $in: [\"MongoDB\", \"Node.js\"] }\n})\n\ndb.students.updateOne(\n  { _id: studentId },\n  { $addToSet: { skills: \"React\" } }\n)";
      return "db.products.find({\n  price: { $gte: 10, $lte: 50 },\n  stock: { $gt: 0 }\n})";
    }
    if (moduleLower.includes("indexes")) {
      return "db.students.createIndex({ email: 1 }, { unique: true })\n\n// Inspect query plans and index usage\ndb.students.find({ email: \"a@example.com\" }).explain(\"executionStats\")\n\n// Indexes speed reads but consume storage\n// and add work to writes.";
    }
    if (moduleLower.includes("aggregation")) {
      return "db.orders.aggregate([\n  { $match: { status: \"paid\" } },\n  { $group: {\n      _id: \"$customerId\",\n      total: { $sum: \"$amount\" }\n  } },\n  { $sort: { total: -1 } }\n])";
    }
    if (moduleLower.includes("relationships")) {
      if (lower.includes("reference") || lower.includes("one-to")) return "Student document\n{ _id: 12, name: \"Asha\" }\n\nEnrollment document\n{ studentId: 12, course: \"CS101\" }\n\nReferences suit shared or independently\nchanging related data.";
      return "Embedded profile document\n{\n  name: \"Asha\",\n  address: {\n    city: \"Pune\",\n    country: \"India\"\n  }\n}\n\nEmbed bounded data read together; reference\nlarge or independently managed data.";
    }
    if (moduleLower.includes("applications")) {
      return "Node.js driver pattern\nconst client = new MongoClient(uri);\nawait client.connect();\nconst db = client.db(\"learnhub\");\nconst students = db.collection(\"students\");\nconst result = await students.findOne({ active: true });\n\n// Store URI securely and close the client\n// when the application shuts down.";
    }
    if (moduleLower.includes("projects")) {
      if (lower.includes("product")) return "Product document\n{\n  _id: ObjectId(\"...\"),\n  name: \"Wireless Keyboard\",\n  sku: \"KB-204\",\n  price: 49.99,\n  stock: 35,\n  category: \"accessories\"\n}\n\n// Add a unique index for sku and validate\n// price and stock before writing.";
      if (lower.includes("user")) return "User document\n{\n  _id: ObjectId(\"...\"),\n  email: \"asha@example.com\",\n  displayName: \"Asha\",\n  roles: [\"learner\"],\n  createdAt: ISODate(\"...\")\n}\n\n// Enforce unique email and never store\n// plaintext passwords.";
      if (lower.includes("student")) return "Student document\n{\n  _id: ObjectId(\"...\"),\n  name: \"Asha\",\n  email: \"asha@example.com\",\n  course: \"Computer Science\",\n  createdAt: ISODate(\"...\")\n}\n\n// Validate fields and add indexes for common lookups.";
      return "Student management collection\n{\n  _id: ObjectId(\"...\"),\n  name: \"Asha\",\n  email: \"asha@example.com\",\n  course: \"Computer Science\",\n  createdAt: ISODate(\"...\")\n}\n\nUseful operations: validate -> insert -> query\n-> update -> handle not-found and errors.";
    }
    if (lower.includes("json vs bson")) return "JSON text: { \"score\": 95 }\nBSON:     a binary encoded document\n\nBSON adds types such as ObjectId, Date, and\nbinary data used by MongoDB.";
    if (lower.includes("datatype")) return "Common BSON types\nString  \"Asha\"\nNumber  21\nBoolean true\nDate    new Date()\nArray   [\"Node.js\", \"MongoDB\"]\nObject  { city: \"Pune\" }\nObjectId(\"...\")";
    if (lower.includes("aggregation pipeline") || lower === "$match" || lower === "$group" || lower === "$sort") return "db.orders.aggregate([\n  { $match: { status: \"paid\" } },\n  { $group: { _id: \"$category\", total: { $sum: \"$amount\" } } },\n  { $sort: { total: -1 } }\n])";
    if (lower.includes("index")) return "db.products.createIndex({ sku: 1 }, { unique: true })\n\n// Create indexes that support frequent queries.\n// Check query plans and write overhead.";
    if (lower.includes("create database")) return "use learnhub\ndb.createCollection(\"students\")\n\n// MongoDB creates a database when data is\n// first stored in it.";
    if (lower.includes("drop")) return "db.students.find({ archived: true })\n\n// Review the matching records before removal.\ndb.students.deleteMany({ archived: true })";
    if (lower.includes("update")) return "db.students.updateOne(\n  { _id: studentId },\n  { $set: { course: \"Computer Science\" } }\n)";
    if (lower.includes("delete")) return "db.students.deleteOne({ _id: studentId })\n\n// Confirm the filter before destructive writes.";
    if (lower.includes("read") || lower.includes("find")) return "db.students.find({ active: true })\n  .sort({ name: 1 })\n  .limit(20)";
    if (lower.includes("create") || lower.includes("insert")) return "db.students.insertOne({\n  name: \"Asha\",\n  active: true\n})";

    return `${moduleTitle}\n\nTopic: ${topic}\n\nUse a selective filter, validate inputs, and\nreview the operation before modifying data.`;
  };

  const getMongoExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (lower.includes("introduction") || lower.includes("what is mongodb") || lower.includes("features") || lower.includes("advantages") || lower.includes("vs sql")) return "MongoDB is a document database that stores records as BSON documents in collections. Its flexible document model can fit evolving application data; schema validation, indexes, and thoughtful data modeling help keep applications reliable.";
    if (lower.includes("nosql") || lower.includes("types of nosql") || lower.includes("benefits")) return "NoSQL databases include document, key-value, wide-column, and graph models. They offer different ways to represent data and scale workloads; choose based on access patterns, consistency needs, relationships, and operational requirements.";
    if (lower.includes("installation") || lower.includes("compass") || lower.includes("atlas") || lower.includes("setup")) return "MongoDB can run locally or as a managed Atlas cluster; Compass provides a graphical interface for inspecting and querying data. Protect connection strings, configure network access deliberately, and use least-privilege database credentials.";
    if (lower.includes("architecture") || lower.includes("database") || lower.includes("collection") || lower.includes("document") || lower.includes("field")) return "MongoDB organizes data into databases, collections, and documents. Documents contain fields and values, and each document has a unique _id; collections can contain documents with different shapes unless validation rules are applied.";
    if (lower.includes("bson") || lower.includes("json") || lower.includes("document structure") || lower.includes("data types")) return "MongoDB stores documents using BSON, a binary representation related to JSON with additional data types. Design documents around application queries, use appropriate types, and consider document-size and schema-validation requirements.";
    if (lower.includes("crud") || lower.includes("insert") || lower.includes("create") || lower.includes("find") || lower.includes("query") || lower.includes("update") || lower.includes("delete") || lower.includes("operator")) return "CRUD operations create, read, update, and delete documents. Use precise filters, validate input, understand update operators, and check matched or deleted counts; especially review filters before destructive operations.";
    if (lower.includes("index")) return "Indexes let MongoDB find matching documents without scanning every document. They improve supported reads but use memory and storage and add write cost, so create indexes for measured query patterns and inspect query plans.";
    if (lower.includes("aggregation") || lower.includes("$match") || lower.includes("$group") || lower.includes("$sort")) return "An aggregation pipeline passes documents through stages that filter, group, reshape, or sort results. Put selective filters early where appropriate, consider resource limits, and verify the output for representative data.";
    if (lower.includes("relationship") || lower.includes("embedded") || lower.includes("reference") || lower.includes("one-to")) return "MongoDB relationships can be represented by embedding related data or referencing documents. Embedding can make common reads efficient; references help manage large, shared, or independently updated data. Model based on query and update patterns.";
    if (lower.includes("application") || lower.includes("node.js") || lower.includes("connecting") || lower.includes("crud with")) return "Applications connect through a MongoDB driver or ODM. Reuse managed connections, keep URIs and credentials outside source code, validate application inputs, handle connection errors, and apply least-privilege database access.";
    if (lower.includes("project") || lower.includes("student") || lower.includes("user management") || lower.includes("product management")) return `${topic} is a practical project in ${moduleTitle}. Plan document shapes from the application's query patterns, add validation and suitable indexes, and test CRUD behavior including invalid and missing records.`;
    if (moduleLower.includes("database & collection")) return "Database and collection management creates and removes storage namespaces. MongoDB may create them implicitly on first write; dropping databases or collections is destructive, so verify the target and backup requirements first.";

    return `${topic} is part of ${moduleTitle}. Understand the document model, choose appropriate queries and operators, and consider validation, indexes, access control, and failure handling.`;
  };

  const makeLinuxExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();
    if (moduleLower.includes("introduction")) return "uname -a\nwhoami\npwd";
    if (moduleLower.includes("distributions")) return "cat /etc/os-release\nuname -a";
    if (moduleLower.includes("installation")) return "uname -a\npwd\nls ~";
    if (moduleLower.includes("file system")) return "pwd\nls /\nls /home\nls /etc";
    if (moduleLower.includes("basic linux")) {
      if (lower.includes("pwd")) return "pwd";
      if (lower.includes("ls")) return "ls -la";
      if (lower.includes("cd")) return "pwd\ncd /tmp\npwd\ncd ~";
      return "clear";
    }
    if (moduleLower.includes("file & directory")) {
      if (lower.includes("mkdir")) return "mkdir practice\nls";
      if (lower.includes("touch")) return "touch practice.txt\nls";
      if (lower.includes("cp")) return "cp README.txt README-copy.txt\nls";
      if (lower.includes("mv")) return "mv README.txt project-notes.txt\nls";
      return "touch temporary.txt\nrm temporary.txt\nls";
    }
    if (moduleLower.includes("viewing")) {
      if (lower.includes("head")) return "head notes.txt\ntail notes.txt";
      if (lower.includes("nano")) return "# Nano is an interactive editor; this lab does not launch applications.\ncat notes.txt";
      return "cat README.txt\nless notes.txt";
    }
    if (moduleLower.includes("permissions")) return "ls -l README.txt\nchmod 644 README.txt\nchown student:student README.txt";
    if (moduleLower.includes("users")) {
      if (lower.includes("sudo")) return "sudo apt update\n# Privileged actions are deliberately not performed.";
      return "whoami\nid\ngroups";
    }
    if (moduleLower.includes("process")) {
      if (lower.includes("kill")) return "ps\nkill 412\nps";
      return "ps\ntop";
    }
    if (moduleLower.includes("package")) return "apt update\napt install tree\napt remove tree";
    if (moduleLower.includes("networking")) {
      if (lower.includes("ssh")) return "ssh student@example.invalid\n# No network connection will be made.";
      if (lower.includes("ping")) return "ping example.invalid";
      return "ip address show\nping example.invalid";
    }
    if (moduleLower.includes("shell & bash")) return "echo \"Hello from the virtual Linux lab\"\nwhoami\npwd\nbash --version";
    if (moduleLower.includes("scripting")) return "# Bash syntax example (displayed as lesson text, not executed):\n#!/usr/bin/env bash\nfor item in one two three; do\n  echo \"$item\"\ndone";
    if (moduleLower.includes("environment")) {
      if (lower.includes("disk")) return "df -h\nfree -h";
      if (lower.includes("service")) return "systemctl status learning-demo";
      return "env\nuname -a\n";
    }
    if (moduleLower.includes("security")) return "whoami\nid\nls -l README.txt\n# Use least privilege and keep systems updated.";
    if (moduleLower.includes("projects")) {
      if (lower.includes("script")) return "mkdir scripts\ntouch scripts/hello.sh\ncat scripts/hello.sh";
      if (lower.includes("server")) return "uname -a\nwhoami\nsystemctl status learning-demo";
      if (lower.includes("network")) return "ip address show\nping example.invalid";
      return "mkdir project\ncd project\ntouch README.txt\nls";
    }
    return `# ${topic}\npwd\nls`;
  };

  const getLinuxExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    if (lower.includes("introduction") || lower.includes("what is linux") || lower.includes("features") || lower.includes("advantages") || lower.includes("linux vs windows")) return "Linux is a family of open-source operating systems built around the Linux kernel. It is widely used on servers, desktops, embedded devices, and cloud systems. Compared with Windows, Linux distributions offer different desktop environments, package managers, and administration workflows.";
    if (lower.includes("distribution") || ["ubuntu", "debian", "fedora", "kali linux"].includes(lower)) return "A Linux distribution combines the kernel with system tools, package management, and often a desktop environment. Ubuntu and Debian are general-purpose choices, Fedora emphasizes current upstream technologies, and Kali is designed for authorized security testing rather than general-purpose beginner use.";
    if (lower.includes("installation") || lower.includes("virtual machine") || lower.includes("wsl") || lower.includes("setup")) return "Linux can be explored on dedicated hardware, in a virtual machine, or through Windows Subsystem for Linux (WSL). Back up important data, obtain images from trusted sources, and understand the isolation and resource settings before installing an operating system.";
    if (lower.includes("file system") || lower.includes("root directory") || lower.includes("home directory") || lower.includes("structure")) return "Linux organizes files in one directory tree starting at /. The home directory stores user-specific files, while directories such as /etc contain configuration and /var commonly stores changing data and logs. Treat system paths carefully.";
    if (lower.includes("command") || ["pwd", "ls", "cd", "clear"].includes(lower.replaceAll("`", ""))) return "The shell reads a command name and its arguments. pwd reports the current directory, ls lists entries, cd changes the shell's working directory, and clear clears the visible terminal. Options may change output, so check a command's documentation before using it on a real system.";
    if (lower.includes("directory commands") || ["mkdir", "touch", "cp", "mv", "rm"].some((command) => lower.includes(command))) return "mkdir creates directories, touch creates or updates files, cp copies, mv moves or renames, and rm removes paths. These operations can be destructive on a real system: verify the path and arguments before running them.";
    if (lower.includes("viewing") || lower.includes("editing") || ["cat", "less", "head", "tail", "nano"].some((command) => lower.includes(command))) return "cat prints file contents, less allows paged reading, and head or tail shows the beginning or end of a file. Nano is a terminal text editor. Inspect files before editing and avoid exposing secrets from configuration files or logs.";
    if (lower.includes("permission") || lower.includes("chmod") || lower.includes("chown") || lower.includes("read, write")) return "Linux permissions define read, write, and execute access for an owner, group, and others. chmod changes permission bits and chown changes ownership. Apply least privilege; broad permissions can expose data or enable unwanted changes.";
    if (lower.includes("user") || lower.includes("group") || lower.includes("sudo")) return "Users and groups organize identity and access. sudo can run approved commands with elevated privileges, so inspect what a command will do and grant only required access. This course terminal intentionally does not perform privileged operations.";
    if (lower.includes("process") || ["ps", "top", "kill"].some((command) => lower.includes(command))) return "Processes are running program instances. ps lists selected processes, top provides a live resource view, and kill sends a signal to a process ID. Verify the target process before signaling it; the practice terminal uses sample process IDs only.";
    if (lower.includes("package") || lower.includes("apt") || lower.includes("installing packages") || lower.includes("removing packages")) return "APT manages software packages on Debian-based systems. Refresh package metadata before installing updates, review package names and prompts, and remove only software you intend to uninstall. Practice commands here change only the in-memory sample state.";
    if (lower.includes("network") || lower.includes("ip address") || lower.includes("ping") || lower.includes("ssh")) return "ip displays or configures network interfaces, ping tests reachability, and SSH provides encrypted remote access. Verify host identity and authorization before connecting. The practice terminal simulates results and makes no network requests.";
    if (lower.includes("shell") || lower.includes("bash") || lower.includes("variable")) return "A shell interprets interactive commands; Bash is a widely used shell that also supports scripting. Variables and expansions can affect command arguments, so quote untrusted values and understand shell syntax before running commands.";
    if (lower.includes("script") || lower.includes("condition") || lower.includes("loop") || lower.includes("function")) return "Bash scripts automate sequences of commands using variables, conditions, loops, and functions. Use clear quoting, validate inputs, handle errors, and test scripts with harmless sample data. Script text in this terminal is instructional and is never executed.";
    if (lower.includes("environment") || lower.includes("disk") || lower.includes("system information") || lower.includes("service")) return "Environment variables configure processes, disk tools report storage use, and system information commands describe the host. Service managers control background services; inspect service status and logs before making operational changes.";
    if (lower.includes("security") || lower.includes("firewall") || lower.includes("security practices")) return "Linux security includes timely updates, least-privilege accounts, restrictive file permissions, careful firewall rules, and monitoring. Make changes only on systems you administer and validate that required services remain available.";
    if (lower.includes("project") || lower.includes("file management") || lower.includes("server setup") || lower.includes("basic networking")) return `${topic} is a practical exercise in ${moduleTitle}. Plan the steps, inspect paths and permissions, verify each result, and avoid running administrative or network-changing commands on systems without authorization.`;
    return `${topic} is part of ${moduleTitle}. Practice the concept in the isolated virtual terminal, understand command arguments, and check the effect before using similar commands on a real Linux system.`;
  };

  const makeGitExampleLegacy = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (moduleLower.includes("introduction")) return "git init\ngit status\ngit add README.md\ngit commit -m \"Start project\"";
    if (moduleLower.includes("installation")) {
      return "git --version\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"\ngit config --list";
    }
    if (moduleLower.includes("repository")) return "git init\ngit status\n\n# A remote repository can be added later:\ngit remote add origin https://example.com/user/project.git";
    if (moduleLower.includes("basic git")) {
      if (lower.includes("init")) return "git init\ngit status";
      if (lower.includes("status")) return "git status";
      if (lower.includes("add")) return "git add README.md\ngit status";
      return "git add README.md\ngit commit -m \"Add project README\"\ngit log --oneline";
    }
    if (moduleLower.includes("workflow")) return "git status\ngit add index.html\ngit status\ngit commit -m \"Add home page\"\ngit status";
    if (moduleLower.includes("branches")) {
      if (lower.includes("creating")) return "git init\ngit branch feature/header\ngit branch";
      if (lower.includes("switching")) return "git init\ngit branch feature/header\ngit switch feature/header";
      return "git init\ngit branch feature/header\ngit switch main\ngit merge feature/header";
    }
    if (moduleLower.includes("merge")) return "git init\ngit branch feature/header\ngit switch main\ngit merge feature/header\n\n# If there is a conflict:\n# edit the file, review it, then\ngit add README.md\ngit commit -m \"Resolve merge conflict\"";
    if (moduleLower.includes("github repository")) {
      if (lower.includes("clone")) return "git clone https://github.com/USER/REPOSITORY.git\ngit status\n\n# Replace the example URL with your repository.";
      return "# Create an empty repository on GitHub.\n# Then connect and push your local project:\ngit remote add origin https://github.com/USER/REPOSITORY.git\ngit push -u origin main";
    }
    if (moduleLower.includes("remote")) {
      if (lower.includes("remote"))       return "git init\ngit remote -v\ngit remote add origin https://github.com/USER/REPOSITORY.git\ngit remote -v";
      if (lower.includes("push")) return "git init\ngit remote add origin https://example.com/user/project.git\ngit push -u origin main";
      if (lower.includes("pull")) return "git init\ngit remote add origin https://example.com/user/project.git\ngit pull origin main";
      return "git init\ngit remote add origin https://example.com/user/project.git\ngit fetch origin\ngit status\n\n# Fetch downloads remote refs; it does not\n# automatically merge them into your branch.";
    }
    if (moduleLower.includes("collaboration")) {
      return "# Collaboration flow (simulator only)\ngit init\ngit remote add origin https://example.com/user/project.git\ngit branch feature/profile\ngit switch feature/profile\ngit add README.md\ngit commit -m \"Add profile feature\"\ngit push -u origin feature/profile\n\n# Open a Pull Request on GitHub for review.";
    }
    if (moduleLower.includes("issues")) return "# GitHub web workflow\n1. Create an Issue with a clear title\n2. Add steps, expected behavior, and labels\n3. Track work in a Project board\n4. Link the issue from a Pull Request";
    if (moduleLower.includes("history")) {
      if (lower.includes("diff")) return "git diff\ngit diff --staged";
      if (lower.includes("viewing")) return "git log --oneline --decorate";
      return "git log --oneline --graph --decorate";
    }
    if (moduleLower.includes("undo")) {
      if (lower.includes("restore")) return "git restore README.md\n\n# Discarding unstaged changes is destructive;\n# inspect git diff before using this command.";
      if (lower.includes("reset")) return "git reset --soft HEAD~1\n\n# Reset changes refs/staging depending on mode.\n# Understand the effect before using it.";
      return "git revert HEAD\n\n# Revert creates a new commit that undoes\n# an earlier commit without rewriting history.";
    }
    if (moduleLower.includes("tags")) {
      if (lower.includes("github")) return "# Create a version tag, then publish it\ngit tag -a v1.0.0 -m \"Release 1.0.0\"\ngit push origin v1.0.0\n\n# Create a GitHub Release from the tag.";
      return "git tag -a v1.0.0 -m \"Release 1.0.0\"\ngit tag\n\n# Tags label a specific commit.";
    }
    if (moduleLower.includes("gitignore")) return "# .gitignore\nnode_modules/\n.env\n.DS_Store\n*.log\n\n# Ignore rules do not untrack files already committed.";
    if (moduleLower.includes("pages")) return "# GitHub Pages\n1. Push the site to a GitHub repository\n2. Open Settings > Pages\n3. Select a deployment source/branch\n4. Wait for the published site URL";
    if (moduleLower.includes("projects")) return "git init\ngit add README.md\ngit commit -m \"Add project files\"\ngit remote add origin https://example.com/user/project.git\ngit push -u origin main\n\n# Replace the example remote with your own.";
    if (lower.includes("configuration") || lower.includes("username") || lower.includes("email")) return "git config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"\ngit config --list";
    if (lower.includes("commit")) return "git add README.md\ngit commit -m \"Describe the change\"";
    if (lower.includes("stage")) return "git add README.md\ngit status";
    if (lower.includes("clone")) return "git clone https://github.com/USER/REPOSITORY.git";
    if (lower.includes("push")) return "git init\ngit remote add origin https://example.com/user/project.git\ngit push -u origin main";
    if (lower.includes("pull")) return "git init\ngit remote add origin https://example.com/user/project.git\ngit pull origin main";
    if (lower.includes("fetch")) return "git init\ngit remote add origin https://example.com/user/project.git\ngit fetch origin";
    if (lower.includes("branch")) return "git init\ngit branch feature/update\ngit switch feature/update";
    if (lower.includes("merge")) return "git init\ngit branch feature/update\ngit switch main\ngit merge feature/update";
    if (lower.includes("log")) return "git log --oneline --graph";
    if (lower.includes("diff")) return "git diff\ngit diff --staged";
    if (lower.includes("ignore")) return "# .gitignore\n.env\nnode_modules/\n*.log";
    if (lower.includes("pull request") || lower.includes("review")) return "git switch -c feature/update\ngit add .\ngit commit -m \"Update feature\"\ngit push -u origin feature/update\n\nThen open a Pull Request on GitHub.";
    return `${moduleTitle}\n\n# ${topic}\ngit status\n\n# Review the output before staging,\n# committing, or sharing changes.`;
  };

  const getGitExplanationLegacy = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();

    if (lower.includes("introduction") || lower.includes("what is git") || lower.includes("what is github") || lower.includes("git vs github")) return "Git is a distributed version control system that records changes to files and supports branches and collaboration. GitHub is a hosting and collaboration platform for Git repositories, with pull requests, issues, code review, and project tools.";
    if (lower.includes("installation") || lower.includes("configuration") || lower.includes("username") || lower.includes("email")) return "Install Git for your operating system, then configure the author name and email recorded in commits. Global configuration applies across repositories; repository-local settings can override it.";
    if (lower.includes("repository") || lower.includes("local") || lower.includes("remote")) return "A Git repository stores project history and metadata. A local repository lives on your computer; a remote is another copy, often hosted on GitHub, used to share and synchronize work.";
    if (lower.includes("command") || lower.includes("git init") || lower.includes("git status") || lower.includes("git add") || lower.includes("git commit")) return "Git commands inspect or change repository state. A common cycle is to check status, stage specific changes, review the staged diff, then create a commit with a clear message.";
    if (lower.includes("workflow") || lower.includes("staging") || lower.includes("working directory") || lower.includes("commit process")) return "Git separates the working directory, staging area, and repository history. Staging lets you choose exactly which changes belong in the next commit.";
    if (lower.includes("branch") || lower.includes("switching") || lower.includes("creating")) return "A branch is a movable name for a line of development. Create a branch for focused work, switch to it, commit changes, then merge or open a pull request to integrate the work.";
    if (lower.includes("merge") || lower.includes("conflict") || lower.includes("resolution")) return "A merge combines histories. A conflict occurs when Git cannot automatically reconcile changes; inspect the marked file, edit the intended result, remove conflict markers, test it, stage the resolution, and complete the merge.";
    if (lower.includes("github repository") || lower.includes("create repository") || lower.includes("clone")) return "A GitHub repository hosts project files and their Git history. Clone downloads a remote repository; when creating a remote for existing local work, connect it with git remote and push the intended branch.";
    if (lower.includes("push") || lower.includes("pull") || lower.includes("fetch") || lower.includes("git remote")) return "Remotes name other repository copies. Fetch downloads remote references without merging; pull fetches and integrates changes; push publishes local commits. Review branch and remote names before synchronizing.";
    if (lower.includes("collaborator") || lower.includes("fork") || lower.includes("pull request") || lower.includes("code review")) return "GitHub collaboration commonly uses branches or forks and pull requests. A pull request proposes changes for discussion and review before integration; permissions determine who can access or merge the work.";
    if (lower.includes("issue") || lower.includes("project")) return "GitHub Issues track tasks, bugs, and discussions. Projects organize work across issues and pull requests using views such as boards or tables; clear descriptions and ownership help teams coordinate.";
    if (lower.includes("history") || lower.includes("log") || lower.includes("commit") || lower.includes("diff")) return "Git history records commits, while git log displays them and git diff compares changes between working, staged, and committed states. Review diffs before committing or sharing work.";
    if (lower.includes("restore") || lower.includes("reset") || lower.includes("revert") || lower.includes("undo")) return "Undo commands affect different parts of Git state. Restore discards or unstages file changes, reset moves a branch/staging state, and revert creates a new commit that reverses an earlier one. Inspect status and history first; shared history is safest to undo with revert.";
    if (lower.includes("tag") || lower.includes("version") || lower.includes("release")) return "Tags label specific commits, often to mark versions. GitHub Releases attach notes and downloadable assets to a tag; publish only after validating the intended commit and version.";
    if (lower.includes("gitignore") || lower.includes("ignoring")) return ".gitignore lists untracked paths Git should ignore, such as build output or local environment files. It does not remove files already tracked; never commit credentials, and rotate any secret that was exposed.";
    if (lower.includes("pages") || lower.includes("deploying") || lower.includes("live website")) return "GitHub Pages can publish static sites from a repository source or deployment workflow. Configure the source in repository settings and verify the published URL; do not place secrets in a public site.";
    if (lower.includes("project") || lower.includes("upload") || lower.includes("team") || lower.includes("website")) return `${topic} is a practical exercise in ${moduleTitle}. Review the repository state, make focused commits, collaborate through a branch or pull request, and verify the result before publishing.`;
    return `${topic} is part of ${moduleTitle}. Use Git to track intentional changes, inspect repository state, and collaborate with clear, reviewable commits.`;
  };

  const makeGitExample = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    const moduleLower = moduleTitle.toLowerCase();

    if (moduleLower.includes("introduction")) return "git init\ngit status\ngit add README.md\ngit commit -m \"Start project\"";
    if (moduleLower.includes("installation")) return "git --version\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"\ngit config --list";
    if (moduleLower.includes("repository")) return "git init\ngit status\n\n# Connect a remote later:\ngit remote add origin https://example.com/user/project.git";
    if (moduleLower.includes("basic git")) {
      if (lower.includes("init")) return "git init\ngit status";
      if (lower.includes("status")) return "git init\ngit status";
      if (lower.includes("add")) return "git init\ngit add README.md\ngit status";
      return "git init\ngit add README.md\ngit commit -m \"Add project README\"\ngit log --oneline";
    }
    if (moduleLower.includes("workflow")) return "git init\ngit status\ngit add README.md\ngit status\ngit commit -m \"Add project notes\"\ngit status";
    if (moduleLower.includes("branches")) {
      if (lower.includes("creating")) return "git init\ngit branch feature/header\ngit branch";
      if (lower.includes("switching")) return "git init\ngit branch feature/header\ngit switch feature/header";
      return "git init\ngit branch feature/header\ngit switch main\ngit merge feature/header";
    }
    if (moduleLower.includes("merge")) return "git init\ngit branch feature/header\ngit switch main\ngit merge feature/header\n\n# In a real conflict, edit and review the file,\n# then stage the resolved file and commit.";
    if (moduleLower.includes("github repository")) {
      if (lower.includes("clone")) return "git clone https://github.com/USER/REPOSITORY.git\ngit status\n\n# Replace the example URL with a repository you can access.";
      return "git init\ngit remote add origin https://example.com/user/project.git\ngit push -u origin main\n\n# Create the remote repository on GitHub first.";
    }
    if (moduleLower.includes("remote")) {
      if (lower.includes("remote")) return "git init\ngit remote -v\ngit remote add origin https://example.com/user/project.git\ngit remote -v";
      if (lower.includes("push")) return "git init\ngit remote add origin https://example.com/user/project.git\ngit push -u origin main";
      if (lower.includes("pull")) return "git init\ngit remote add origin https://example.com/user/project.git\ngit pull origin main";
      return "git init\ngit remote add origin https://example.com/user/project.git\ngit fetch origin\ngit status";
    }
    if (moduleLower.includes("collaboration")) return "git init\ngit remote add origin https://example.com/user/project.git\ngit branch feature/profile\ngit switch feature/profile\ngit add README.md\ngit commit -m \"Add profile feature\"\ngit push -u origin feature/profile\n\n# Open a Pull Request on GitHub for review.";
    if (moduleLower.includes("issues")) return "# GitHub web workflow\n1. Create an Issue with a clear title\n2. Add steps, expected behavior, and labels\n3. Track work in a Project board\n4. Link the issue from a Pull Request";
    if (moduleLower.includes("history")) {
      if (lower.includes("diff")) return "git init\ngit diff\ngit diff --staged";
      if (lower.includes("viewing")) return "git init\ngit add README.md\ngit commit -m \"Add README\"\ngit log --oneline";
      return "git init\ngit add README.md\ngit commit -m \"Add README\"\ngit log --oneline --graph";
    }
    if (moduleLower.includes("undo")) {
      if (lower.includes("restore")) return "git init\ngit restore README.md";
      if (lower.includes("reset")) return "git init\ngit reset --soft HEAD~1";
      return "git init\ngit add README.md\ngit commit -m \"Add README\"\ngit revert HEAD";
    }
    if (moduleLower.includes("tags")) {
      if (lower.includes("github")) return "git init\ngit tag -a v1.0.0 -m \"Release 1.0.0\"\ngit push origin v1.0.0\n\n# Publish release notes from this tag on GitHub.";
      return "git init\ngit tag -a v1.0.0 -m \"Release 1.0.0\"\ngit tag";
    }
    if (moduleLower.includes("gitignore")) return "# .gitignore\nnode_modules/\n.env\n.DS_Store\n*.log\n\n# Ignored files already tracked need separate handling.";
    if (moduleLower.includes("pages")) return "# GitHub Pages workflow\n1. Push a static site to GitHub\n2. Open repository Settings > Pages\n3. Choose a branch or deployment workflow\n4. Check the published website URL";
    if (moduleLower.includes("projects")) return "git init\ngit add README.md\ngit commit -m \"Add project files\"\ngit remote add origin https://example.com/user/project.git\ngit push -u origin main";
    if (lower.includes("configuration") || lower.includes("username") || lower.includes("email")) return "git config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"\ngit config --list";
    if (lower.includes("git init")) return "git init\ngit status";
    if (lower.includes("git status")) return "git init\ngit status";
    if (lower.includes("git add")) return "git init\ngit add README.md\ngit status";
    if (lower.includes("git commit")) return "git init\ngit add README.md\ngit commit -m \"Describe the change\"";
    return `${moduleTitle}\n\n# ${topic}\ngit init\ngit status\n\n# Review status and diffs before committing.`;
  };

  const getGitExplanation = (topic, moduleTitle) => {
    const lower = topic.toLowerCase();
    if (lower.includes("introduction") || lower.includes("what is git") || lower.includes("what is github") || lower.includes("git vs github")) return "Git is a distributed version control system that records project changes and supports branches. GitHub hosts Git repositories and adds collaboration tools such as pull requests, code review, issues, and project boards.";
    if (lower.includes("installation") || lower.includes("configuration") || lower.includes("username") || lower.includes("email")) return "Install Git for your operating system, then configure the author name and email recorded in commits. Global configuration applies across repositories; repository-local settings can override it.";
    if (lower.includes("repository") || lower.includes("local") || lower.includes("remote")) return "A Git repository stores project files and their history. A local repository is on your computer; a remote is another copy, often hosted on GitHub, used to share and synchronize changes.";
    if (lower.includes("command") || lower.includes("git init") || lower.includes("git status") || lower.includes("git add") || lower.includes("git commit")) return "Git commands inspect or change repository state. A common cycle is checking status, staging specific changes, reviewing the staged diff, and creating a commit with a clear message.";
    if (lower.includes("workflow") || lower.includes("staging") || lower.includes("working directory") || lower.includes("commit process")) return "Git separates the working directory, staging area, and repository history. Staging lets you select exactly which changes belong in the next commit.";
    if (lower.includes("branch") || lower.includes("switching") || lower.includes("creating")) return "A branch is a movable name for a line of development. Create one for focused work, commit changes there, then merge or open a pull request to integrate the work.";
    if (lower.includes("merge") || lower.includes("conflict") || lower.includes("resolution")) return "A merge combines histories. For conflicts, inspect the marked file, edit the intended result, remove conflict markers, test it, stage the resolution, and complete the merge.";
    if (lower.includes("github repository") || lower.includes("create repository") || lower.includes("clone")) return "A GitHub repository hosts project files and Git history. Clone downloads a remote repository; for existing local work, add the remote URL and push the intended branch.";
    if (lower.includes("push") || lower.includes("pull") || lower.includes("fetch") || lower.includes("git remote")) return "Remotes name other repository copies. Fetch downloads remote references without merging; pull fetches and integrates changes; push publishes local commits. Review branch and remote names before synchronizing.";
    if (lower.includes("collaborator") || lower.includes("fork") || lower.includes("pull request") || lower.includes("code review")) return "GitHub collaboration often uses branches or forks and pull requests. A pull request proposes changes for discussion and review before integration; repository permissions control access and merges.";
    if (lower.includes("issue") || lower.includes("project")) return "GitHub Issues track tasks, bugs, and discussions. Projects organize issues and pull requests using views such as boards or tables; clear descriptions and ownership help teams coordinate.";
    if (lower.includes("history") || lower.includes("log") || lower.includes("commit") || lower.includes("diff")) return "Git history records commits, while git log displays them and git diff compares working, staged, and committed changes. Review diffs before committing or sharing work.";
    if (lower.includes("restore") || lower.includes("reset") || lower.includes("revert") || lower.includes("undo")) return "Undo commands affect different Git state. Restore changes files or unstages them, reset moves a branch or staging state, and revert creates a new commit that reverses an earlier one. Inspect status first; shared history is generally safest to undo with revert.";
    if (lower.includes("tag") || lower.includes("version") || lower.includes("release")) return "Tags label specific commits, often to mark versions. GitHub Releases attach notes and assets to a tag; validate the intended commit before publishing a release.";
    if (lower.includes("gitignore") || lower.includes("ignoring")) return ".gitignore lists untracked paths Git should ignore, such as build output or local environment files. It does not untrack files already committed; never commit credentials, and rotate secrets that were exposed.";
    if (lower.includes("pages") || lower.includes("deploying") || lower.includes("live website")) return "GitHub Pages can publish static sites from a repository source or deployment workflow. Configure the source in repository settings, then verify the published URL; do not put secrets in a public site.";
    return `${topic} is part of ${moduleTitle}. Use Git to track intentional changes, inspect repository state, and collaborate with clear, reviewable commits.`;
  };

  const renderLessonContent = (title, explanation, example, challenge, takeaways) => {
    const content = document.querySelector("#topic-content");
    content.replaceChildren();

    const intro = document.createElement("p");
    intro.textContent = explanation;
    content.appendChild(intro);

    const exampleTitle = document.createElement("h3");
    exampleTitle.textContent = "Example";
    content.appendChild(exampleTitle);

    const codeBlock = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = example;
    codeBlock.appendChild(code);
    content.appendChild(codeBlock);

    const keyTitle = document.createElement("h3");
    keyTitle.textContent = "Key points";
    content.appendChild(keyTitle);

    const list = document.createElement("ul");
    takeaways.forEach((item) => {
      const point = document.createElement("li");
      point.textContent = item;
      list.appendChild(point);
    });
    content.appendChild(list);

    const exercise = document.createElement("p");
    exercise.className = "lesson-callout";
    exercise.textContent = `Try it: ${challenge}`;
    content.appendChild(exercise);

    document.querySelector("#page-title").textContent = title;
    document.querySelector("#topic-title").textContent = title;
  };

  const setEditorExample = (example) => {
    if (!editor || !preview) return;
    editor.value = example;
    if (course.subject === "Git & GitHub") {
      renderGitSimulator("");
      return;
    }
    if (course.subject === "Linux") {
      renderLinuxTerminal("");
      return;
    }
    renderPreview();
  };

  const renderGroupedTopic = (moduleIndex, topicIndex) => {
    activeModule = moduleIndex;
    activeTopic = topicIndex;
    const module = course.modules[moduleIndex];
    const topic = module.topics[topicIndex];
    const isHtml = course.subject === "HTML";
    const isComputerOrganization = course.subject === "Computer Organization";
    const isCyberSecurity = course.subject === "Cyber Security";
    const isAi = course.subject === "Artificial Intelligence";
    const isBootstrap = course.subject === "Bootstrap";
    const isReact = course.subject === "React JS";
    const isNode = course.subject === "Node JS";
    const isMongo = course.subject === "MongoDB";
    const isGit = course.subject === "Git & GitHub";
    const isLinux = course.subject === "Linux";
    const example = isHtml
      ? makeHtmlExample(topic, module.title)
      : isComputerOrganization
        ? makeComputerOrganizationExample(topic, module.title)
        : isCyberSecurity
          ? makeCyberSecurityExample(topic, module.title)
          : isAi
            ? makeAiExample(topic, module.title)
            : isBootstrap
              ? makeBootstrapExample(topic, module.title)
              : isReact
                ? makeReactExample(topic, module.title)
                : isNode
                  ? makeNodeExample(topic, module.title)
                  : isMongo
                    ? makeMongoExample(topic, module.title)
                    : isGit
                      ? makeGitExample(topic, module.title)
                      : isLinux
                        ? makeLinuxExample(topic, module.title)
                        : makeCssExample(topic, module.title);
    const explanation = isHtml
      ? getHtmlExplanation(topic, module.title)
      : isComputerOrganization
        ? getComputerOrganizationExplanation(topic, module.title)
        : isCyberSecurity
          ? getCyberSecurityExplanation(topic, module.title)
          : isAi
            ? getAiExplanation(topic, module.title)
            : isBootstrap
              ? getBootstrapExplanation(topic, module.title)
              : isReact
                ? getReactExplanation(topic, module.title)
                : isNode
                  ? getNodeExplanation(topic, module.title)
                  : isMongo
                    ? getMongoExplanation(topic, module.title)
                    : isGit
                      ? getGitExplanation(topic, module.title)
                      : isLinux
                        ? getLinuxExplanation(topic, module.title)
                        : getCssExplanation(topic, module.title);

    document.querySelector("#topic-description").textContent = `${module.title}: ${topic}`;
    const practiceLabel = isHtml ? "markup" : isComputerOrganization ? "model" : isCyberSecurity ? "defensive notes" : isAi ? "AI notes" : isBootstrap ? "Bootstrap layout" : isReact ? "React component" : isNode ? "Node.js example" : isMongo ? "MongoDB operation" : isGit ? "Git command sequence" : isLinux ? "Linux command sequence" : "style";
    const challenge = isCyberSecurity
      ? `For an authorized environment, describe how to reduce risk from ${topic} and how to verify the protection.`
      : isAi
        ? `Describe how ${topic} could be evaluated responsibly, including relevant data, limitations, and possible impacts.`
      : isBootstrap
        ? `Use ${topic} to improve a responsive Bootstrap page while keeping its markup accessible.`
      : isReact
        ? `Create a small React example that demonstrates ${topic}, then explain its data flow and expected UI.`
      : isNode
        ? `Describe how to implement ${topic} with appropriate error handling, input validation, and security.`
      : isMongo
        ? `Write a MongoDB example for ${topic}; explain the filter, expected result, and any data-safety considerations.`
      : isGit
        ? `Try the ${topic} command sequence in the safe simulator. Explain how the repository state changes.`
      : isLinux
        ? `Try the ${topic} command example in the virtual terminal. Describe the sample result and what a real Linux command would change.`
      : `Edit the example, then preview your ${topic} ${practiceLabel}.`;
    renderLessonContent(topic, explanation, example, challenge, [
      `${topic} belongs to the ${module.title} module.`,
      isHtml
        ? "Use valid, readable markup and choose elements by their purpose."
        : isComputerOrganization
          ? "Trace the data flow and state any assumptions, such as bit width or clock rate."
          : isCyberSecurity
            ? "Only assess systems when you have explicit authorization and a clearly defined scope."
            : isAi
              ? "Check assumptions, data quality, and whether the method fits the problem."
            : isBootstrap
              ? "Choose semantic elements and Bootstrap utilities that suit the content."
            : isReact
              ? "Keep components focused and data flow clear; follow React's hook and rendering rules."
            : isNode
              ? "Use asynchronous APIs for I/O, validate untrusted data, and handle failures explicitly."
            : isMongo
              ? "Use deliberate filters, validate data, and consider indexes for common queries."
            : isGit
              ? "Check git status and review diffs before staging or committing."
            : isLinux
              ? "The terminal uses only sample state; it never changes real files, users, packages, processes, or network settings."
            : "Keep selectors focused and declarations easy to reuse.",
      isHtml
        ? "Check the preview and test the result with keyboard navigation where relevant."
        : isComputerOrganization
          ? "Verify each step with a truth table, calculation, or architecture diagram as appropriate."
          : isCyberSecurity
            ? "Prefer prevention, detection, safe validation, and documented remediation."
            : isAi
              ? "Evaluate errors and impacts; use human review where decisions affect people."
            : isBootstrap
              ? "Check keyboard access, contrast, and the layout at narrow and wide widths."
            : isReact
              ? "Test loading, empty, and error states and preserve accessible interaction."
            : isNode
              ? "Keep secrets out of source control and apply authorization at protected routes."
            : isMongo
              ? "Protect credentials, apply least privilege, and review destructive operations."
            : isGit
              ? "This page's simulator is isolated; commands do not affect your local files or network."
            : isLinux
              ? "Review command arguments carefully; privileged, destructive, and network operations are not run."
            : "Check the preview at different screen sizes and preserve readable contrast."
    ]);

    document.querySelectorAll(".subject-topic").forEach((button, index) => {
      const isActive = index === moduleIndex;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-current", isActive ? "step" : "false");
      const expanded = index === moduleIndex;
      button.setAttribute("aria-expanded", String(expanded));
      document.querySelector(`#html-module-${index}`).hidden = !expanded;
    });
    document.querySelectorAll(".subject-subtopic").forEach((button) => {
      const isActive = Number(button.dataset.module) === moduleIndex && Number(button.dataset.topic) === topicIndex;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-current", isActive ? "true" : "false");
    });

    const currentPosition = allHtmlTopics.findIndex((item) => item.moduleIndex === moduleIndex && item.topicIndex === topicIndex);
    document.querySelector("#progress-fill").style.width = `${((currentPosition + 1) / allHtmlTopics.length) * 100}%`;
    document.querySelector("#progress-text").textContent = `Lesson ${currentPosition + 1} of ${allHtmlTopics.length}`;
    document.querySelector("#progress-note").textContent = module.title;
    document.querySelector("#prev-topic-btn").disabled = currentPosition === 0;
    document.querySelector("#next-topic-btn").disabled = currentPosition === allHtmlTopics.length - 1;
    setEditorExample(example);
  };

  const renderHtmlModules = () => {
    course.modules.forEach((module, moduleIndex) => {
      const group = document.createElement("div");
      group.className = "subject-module-group";

      const moduleButton = document.createElement("button");
      moduleButton.type = "button";
      moduleButton.className = "subject-topic subject-module";
      moduleButton.setAttribute("aria-expanded", "false");
      moduleButton.setAttribute("aria-controls", `html-module-${moduleIndex}`);
      moduleButton.innerHTML = `<span class="module-index">${String(moduleIndex + 1).padStart(2, "0")}</span><span class="module-title">${module.title}</span><i class="fa-solid fa-chevron-down module-chevron" aria-hidden="true"></i>`;

      const subtopicList = document.createElement("div");
      subtopicList.className = "subject-subtopics";
      subtopicList.id = `html-module-${moduleIndex}`;
      subtopicList.hidden = moduleIndex !== 0;
      moduleButton.setAttribute("aria-expanded", String(moduleIndex === 0));

      module.topics.forEach((topic, topicIndex) => {
        const topicButton = document.createElement("button");
        topicButton.type = "button";
        topicButton.className = "subject-subtopic";
        topicButton.dataset.module = moduleIndex;
        topicButton.dataset.topic = topicIndex;
        topicButton.textContent = topic;
        topicButton.addEventListener("click", () => renderGroupedTopic(moduleIndex, topicIndex));
        subtopicList.appendChild(topicButton);
      });

      moduleButton.addEventListener("click", () => {
        const expanded = moduleButton.getAttribute("aria-expanded") !== "true";
        moduleButton.setAttribute("aria-expanded", String(expanded));
        subtopicList.hidden = !expanded;
      });

      group.append(moduleButton, subtopicList);
      topicList.appendChild(group);
    });

    document.querySelector("#lesson-count").textContent = allHtmlTopics.length;
    document.querySelector(".hero-stats strong").textContent = course.modules.length;
    document.querySelector("#module-count").textContent = `${course.modules.length} modules`;
  };

  const renderFlatModules = () => {
    course.modules.forEach((module, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "subject-topic";
      button.textContent = `${String(index + 1).padStart(2, "0")}  ${module.title}`;
      button.addEventListener("click", () => renderFlatModule(index));
      topicList.appendChild(button);
    });
    document.querySelector("#lesson-count").textContent = course.modules.reduce((count, module) => count + module.takeaways.length, 0);
    document.querySelector(".hero-stats strong").textContent = course.modules.length;
    document.querySelector("#module-count").textContent = `${course.modules.length} topics`;
  };

  const renderFlatModule = (index) => {
    activeModule = index;
    const module = course.modules[index];
    document.querySelector("#topic-description").textContent = module.description;
    renderLessonContent(module.title, module.explanation, module.example, module.challenge, module.takeaways);
    document.querySelectorAll(".subject-topic").forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
      button.setAttribute("aria-current", buttonIndex === index ? "step" : "false");
    });
    document.querySelector("#progress-fill").style.width = `${((index + 1) / course.modules.length) * 100}%`;
    document.querySelector("#progress-text").textContent = `Topic ${index + 1} of ${course.modules.length}`;
    document.querySelector("#progress-note").textContent = module.title;
    document.querySelector("#prev-topic-btn").disabled = index === 0;
    document.querySelector("#next-topic-btn").disabled = index === course.modules.length - 1;
    setEditorExample(module.example);
  };

  if (isGroupedCourse) {
    renderHtmlModules();
    document.querySelector("#prev-topic-btn").addEventListener("click", () => {
      const position = allHtmlTopics.findIndex((item) => item.moduleIndex === activeModule && item.topicIndex === activeTopic);
      const previous = allHtmlTopics[Math.max(0, position - 1)];
      if (previous) {
        document.querySelector(`#html-module-${previous.moduleIndex}`).hidden = false;
        document.querySelector(`[aria-controls="html-module-${previous.moduleIndex}"]`).setAttribute("aria-expanded", "true");
        renderGroupedTopic(previous.moduleIndex, previous.topicIndex);
      }
    });
    document.querySelector("#next-topic-btn").addEventListener("click", () => {
      const position = allHtmlTopics.findIndex((item) => item.moduleIndex === activeModule && item.topicIndex === activeTopic);
      const next = allHtmlTopics[Math.min(allHtmlTopics.length - 1, position + 1)];
      if (next) {
        document.querySelector(`#html-module-${next.moduleIndex}`).hidden = false;
        document.querySelector(`[aria-controls="html-module-${next.moduleIndex}"]`).setAttribute("aria-expanded", "true");
        renderGroupedTopic(next.moduleIndex, next.topicIndex);
      }
    });
    renderGroupedTopic(0, 0);
  } else {
    renderFlatModules();
    document.querySelector("#prev-topic-btn").addEventListener("click", () => renderFlatModule(Math.max(0, activeModule - 1)));
    document.querySelector("#next-topic-btn").addEventListener("click", () => renderFlatModule(Math.min(course.modules.length - 1, activeModule + 1)));
    renderFlatModule(0);
  }

  if (editor && preview) {
    document.querySelector("#run-code-btn").addEventListener("click", renderPreview);
    document.querySelector("#reset-code-btn").addEventListener("click", () => {
      if (isGroupedCourse) renderGroupedTopic(activeModule, activeTopic);
      else renderFlatModule(activeModule);
      setStatus("Example code restored.");
    });
    document.querySelector("#copy-code-btn").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(editor.value);
        setStatus(`${course.subject} code copied.`);
      } catch (error) {
        console.error("Unable to copy course code:", error);
        setStatus("Clipboard access is unavailable. Select the code and copy it manually.");
      }
    });

    editor.addEventListener("input", () => setStatus("Code changed. Select Preview to apply your edits."));
  }

  const updateThemeIcon = () => {
    const isLight = document.body.classList.contains("light-theme");
    const icon = themeToggle.querySelector("i");
    if (icon) icon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
  };

  if (localStorage.getItem("theme") === "light") document.body.classList.add("light-theme");
  updateThemeIcon();
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
    updateThemeIcon();
  });

  menuToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  const closeAuthModal = () => {
    authModal.classList.remove("open");
    authModal.setAttribute("aria-hidden", "true");
  };

  document.querySelector("#auth-btn").addEventListener("click", () => {
    authModal.classList.add("open");
    authModal.setAttribute("aria-hidden", "false");
    document.querySelector("#auth-email").focus();
  });
  document.querySelector("#auth-close").addEventListener("click", closeAuthModal);
  authModal.addEventListener("click", (event) => {
    if (event.target === authModal) closeAuthModal();
  });
  document.querySelector("#auth-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#auth-email").value;
    closeAuthModal();
    event.currentTarget.reset();
    document.querySelector("#auth-btn").textContent = email;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && authModal.classList.contains("open")) closeAuthModal();
  });
})();
