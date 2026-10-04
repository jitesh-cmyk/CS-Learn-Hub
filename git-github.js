window.subjectCourse = {
  subject: "Git & GitHub",
  modules: [
    ["Introduction to Git & GitHub", "What is Git|What is GitHub|Git vs GitHub"],
    ["Git Installation & Setup", "Installing Git|Git Configuration|Username & Email"],
    ["Git Repository", "Repository Concept|Local Repository|Remote Repository"],
    ["Basic Git Commands", "git init|git status|git add|git commit"],
    ["Git Workflow", "Working Directory|Staging Area|Repository|Commit Process"],
    ["Git Branches", "Creating Branches|Switching Branches|Merging Branches"],
    ["Git Merge & Conflicts", "Merge|Merge Conflicts|Conflict Resolution"],
    ["GitHub Repository", "Create Repository|Clone Repository|Repository Settings"],
    ["Remote Repositories", "git remote|git push|git pull|git fetch"],
    ["GitHub Collaboration", "Collaborators|Fork|Pull Request|Code Review"],
    ["GitHub Issues & Projects", "Creating Issues|Issue Tracking|GitHub Projects"],
    ["Git History", "git log|Viewing Commits|git diff"],
    ["Undo Changes", "git restore|git reset|Reverting Commits"],
    ["Git Tags & Releases", "Creating Tags|Versioning|GitHub Releases"],
    [".gitignore", "Purpose of .gitignore|Ignoring Files & Folders|Common Examples"],
    ["GitHub Pages", "Deploying Website|Repository Configuration|Live Website Link"],
    ["Practical Git & GitHub Projects", "Upload a Project|Team Collaboration|Deploy a Website"]
  ].map(([title, topics]) => ({
    title,
    topics: topics.split("|").map((topic) => topic.trim())
  }))
};
