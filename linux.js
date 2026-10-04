window.subjectCourse = {
  subject: "Linux",
  modules: [
    ["Introduction to Linux", "What is Linux|Features & Advantages|Linux vs Windows"],
    ["Linux Distributions", "Ubuntu|Debian|Fedora|Kali Linux"],
    ["Linux Installation & Setup", "Installation Methods|Virtual Machine|WSL"],
    ["Linux File System", "Root Directory|Home Directory|File System Structure"],
    ["Basic Linux Commands", "`pwd`|`ls`|`cd`|`clear`"],
    ["File & Directory Commands", "`mkdir`|`touch`|`cp`|`mv`|`rm`"],
    ["Viewing & Editing Files", "`cat`|`less`|`head` & `tail`|Nano Editor"],
    ["File Permissions", "Read, Write, Execute|`chmod`|`chown`"],
    ["Users & Groups", "User Management|Groups|`sudo`"],
    ["Process Management", "Processes|`ps`|`top`|`kill`"],
    ["Package Management", "APT|Installing Packages|Updating & Removing Packages"],
    ["Linux Networking", "IP Address|`ping`|`ip`|SSH"],
    ["Shell & Bash", "Shell|Bash|Variables|Basic Shell Commands"],
    ["Shell Scripting", "Script Creation|Conditions|Loops|Functions"],
    ["Environment & System Management", "Environment Variables|Disk Usage|System Information|Services"],
    ["Linux Security", "User Permissions|Firewall Basics|Security Practices"],
    ["Practical Linux Projects", "File Management|Bash Script|Linux Server Setup|Basic Networking"]
  ].map(([title, topics]) => ({
    title,
    topics: topics.split("|").map((topic) => topic.trim())
  }))
};
