window.subjectCourse = {
  subject: "React JS",
  modules: [
    ["Introduction to React JS", "What is React|Features & Advantages|React vs JavaScript"],
    ["React Environment Setup", "Node.js & npm|Vite|Project Structure"],
    ["JSX", "JSX Syntax|Expressions|JSX Rules"],
    ["Components", "Functional Components|Component Structure|Reusable Components"],
    ["Props", "Passing Props|Props with Components|Props vs State"],
    ["State", "What is State|useState|Updating State"],
    ["Event Handling", "Click Events|Form Events|Event Functions"],
    ["Conditional Rendering", "if/else|Ternary Operator|Logical Operators"],
    ["Lists & Keys", "Rendering Lists|map()|Keys"],
    ["Forms in React", "Input Handling|Controlled Components|Form Submission"],
    ["React Hooks", "useState|useEffect|useRef|Custom Hooks"],
    ["useEffect & Side Effects", "API Calls|Dependencies|Cleanup"],
    ["React Router", "Routing|Routes & Links|Dynamic Routes"],
    ["API & Data Fetching", "Fetch API|JSON Data|Loading & Error Handling"],
    ["Context API", "Context Creation|Provider|useContext"],
    ["React Performance", "memo|useMemo|useCallback"],
    ["Practical React Projects", "Todo App|Weather App|Portfolio Website|Student Management App"]
  ].map(([title, topics]) => ({
    title,
    topics: topics.split("|").map((topic) => topic.trim())
  }))
};
