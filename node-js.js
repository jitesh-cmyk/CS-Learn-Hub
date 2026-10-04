window.subjectCourse = {
  subject: "Node JS",
  modules: [
    ["Introduction to Node.js", "What is Node.js|Features & Advantages|Node.js vs Browser JavaScript"],
    ["Node.js Installation & Setup", "Node.js Installation|npm|Project Setup"],
    ["Node.js Modules", "Built-in Modules|Custom Modules|Third-Party Modules"],
    ["npm (Node Package Manager)", "package.json|Installing Packages|Dependencies"],
    ["File System Module", "Reading Files|Writing Files|Updating & Deleting Files"],
    ["Path Module", "File & Directory Paths|Path Methods|Working with File Locations"],
    ["Events in Node.js", "EventEmitter|Creating Events|Handling Events"],
    ["HTTP Module", "Creating HTTP Server|Request & Response|HTTP Methods"],
    ["Node.js Web Server", "Server Creation|Routing Basics|Sending Responses"],
    ["Asynchronous Programming", "Synchronous vs Asynchronous|Callbacks|Promises|Async/Await"],
    ["Express.js", "Introduction to Express|Express Server|Routes & Middleware"],
    ["Routing & Middleware", "GET, POST, PUT, DELETE|Route Parameters|Middleware Functions"],
    ["Working with APIs", "REST API|JSON Data|API Requests & Responses"],
    ["Database Connectivity", "MongoDB with Node.js|Connecting Database|CRUD Operations"],
    ["Error Handling", "Try/Catch|Error Middleware|Handling Server Errors"],
    ["Authentication & Security", "Login & Registration|Password Hashing|JWT Authentication|Basic Security Practices"],
    ["Practical Node.js Projects", "REST API|Login System|Blog Backend|Student Management API"]
  ].map(([title, topics]) => ({
    title,
    topics: topics.split("|").map((topic) => topic.trim())
  }))
};
