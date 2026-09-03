const $ = (selector) => document.querySelector(selector);
const topicList = $('#topic-list');
const themeToggle = $('#theme-toggle');
const sections = [
['JavaScript Introduction & Setup','Introduction to JavaScript|History of JavaScript|Features of JavaScript|JavaScript Applications|JavaScript vs Java|JavaScript Versions|JavaScript Engine|How JavaScript Works|JavaScript Installation & Setup|Running JavaScript in Browser|Running JavaScript with Node.js|First JavaScript Program|Adding JavaScript to HTML|Internal JavaScript|External JavaScript|Comments in JavaScript'],
['JavaScript Basics','Basic Syntax|Keywords|Identifiers|Variables|var|let|const|Constants|Data Types|Primitive Data Types|Non-Primitive Data Types|typeof Operator|Type Conversion|Type Coercion|Literals|Strict Mode'],
['Output & Input','console.log()|console.error()|console.warn()|alert()|confirm()|prompt()|document.write()|Template Literals|String Interpolation'],
['Operators','Operators Introduction|Arithmetic Operators|Assignment Operators|Comparison Operators|Relational Operators|Equality Operators|Strict Equality|Logical Operators|Unary Operators|Increment Operator|Decrement Operator|Bitwise Operators|Shift Operators|Ternary Operator|Nullish Coalescing Operator|Optional Chaining Operator|Spread Operator|Rest Operator|typeof Operator|delete Operator|in Operator|instanceof Operator|Operator Precedence'],
['Conditional Statements','if Statement|if-else Statement|Nested if|else-if Statement|switch Statement|Nested switch|Conditional Expressions'],
['Loops','for Loop|while Loop|do-while Loop|Nested Loops|for...in Loop|for...of Loop|break Statement|continue Statement|Labeled Statements|Infinite Loops'],
['Functions','Functions|Function Declaration|Function Expression|Function Calling|Function Parameters|Function Arguments|Return Values|Default Parameters|Rest Parameters|Anonymous Functions|Arrow Functions|Immediately Invoked Function Expression (IIFE)|Callback Functions|Higher-Order Functions|Recursive Functions|Nested Functions|Pure Functions|First-Class Functions'],
['Scope & Execution','Global Scope|Local Scope|Block Scope|Function Scope|Lexical Scope|Scope Chain|Hoisting|Temporal Dead Zone|Execution Context|Call Stack|Strict Mode'],
['Strings','String Introduction|Creating Strings|String Properties|String Methods|String Length|Accessing Characters|String Concatenation|String Comparison|String Searching|String Slicing|substring()|substr()|slice()|toUpperCase()|toLowerCase()|trim()|replace()|replaceAll()|split()|includes()|startsWith()|endsWith()|charAt()|charCodeAt()|String Immutability|Template Strings'],
['Numbers & Math','Number Data Type|Number Methods|parseInt()|parseFloat()|isNaN()|isFinite()|Number.isInteger()|Number Properties|Math Object|Math.round()|Math.floor()|Math.ceil()|Math.trunc()|Math.random()|Math.max()|Math.min()|Math.pow()|Math.sqrt()|Math.abs()|BigInt'],
['Arrays','Introduction to Arrays|Creating Arrays|Array Indexing|Array Length|Array Traversal|Adding Array Elements|Removing Array Elements|push()|pop()|shift()|unshift()|slice()|splice()|concat()|join()|reverse()|sort()|includes()|indexOf()|lastIndexOf()|find()|findIndex()|filter()|map()|reduce()|reduceRight()|forEach()|some()|every()|flat()|flatMap()|Array Destructuring|Spread with Arrays|Rest with Arrays|Multidimensional Arrays|Array of Objects'],
['Objects','Introduction to Objects|Creating Objects|Object Properties|Object Methods|Accessing Object Properties|Adding Object Properties|Updating Object Properties|Deleting Object Properties|Nested Objects|Object Destructuring|Object.keys()|Object.values()|Object.entries()|Object.assign()|Object.freeze()|Object.seal()|Object.create()|Object Comparison|Shallow Copy|Deep Copy|Spread with Objects|Computed Properties'],
['Date & Time','Date Object|Creating Dates|Getting Date Values|Setting Date Values|Date Formatting|Date Methods|getDate()|getMonth()|getFullYear()|getDay()|getHours()|getMinutes()|getSeconds()|Date Comparison|Timestamps|International Date Formatting'],
['Regular Expressions','Regular Expressions Introduction|Creating Regular Expressions|RegExp Object|test()|exec()|Character Classes|Quantifiers|Anchors|Groups|Flags|Pattern Matching|Form Validation with Regex'],
['DOM','Introduction to DOM|DOM Tree|Document Object|Selecting Elements|getElementById()|getElementsByClassName()|getElementsByTagName()|querySelector()|querySelectorAll()|Changing HTML|Changing Text|Changing CSS|Changing Attributes|Creating Elements|Removing Elements|Appending Elements|Replacing Elements|DOM Traversal|Parent Elements|Child Elements|Sibling Elements'],
['Events','Introduction to Events|Event Handlers|onclick Event|onchange Event|onsubmit Event|onload Event|onmouseover Event|onmouseout Event|Keyboard Events|Mouse Events|Form Events|addEventListener()|removeEventListener()|Event Object|Event Bubbling|Event Capturing|Event Delegation|preventDefault()|stopPropagation()'],
['Forms & Validation','HTML Forms with JavaScript|Reading Form Values|Form Validation|Required Field Validation|Email Validation|Password Validation|Number Validation|Custom Validation|Form Submit Handling|FormData Object'],
['ES6+ Features','ES6 Introduction|let and const|Arrow Functions|Template Literals|Default Parameters|Destructuring|Spread Operator|Rest Operator|Enhanced Object Literals|for...of|Classes|Modules|Promises|Symbols|Iterators|Generators'],
['Object-Oriented JavaScript','OOP Introduction|Classes|Objects|Constructor|Methods|Static Methods|Getters|Setters|Encapsulation|Abstraction|Inheritance|extends Keyword|super Keyword|Method Overriding|Polymorphism|Prototype|Prototype Chain|Constructor Functions|Prototypal Inheritance'],
['Asynchronous JavaScript','Synchronous vs Asynchronous|Blocking vs Non-Blocking|Callback Functions|Callback Hell|setTimeout()|setInterval()|clearTimeout()|clearInterval()|Promises|Promise States|Promise Methods|then()|catch()|finally()|Promise Chaining|async Keyword|await Keyword|Async/Await|Error Handling with Async/Await'],
['Error Handling','Errors in JavaScript|Syntax Errors|Runtime Errors|Logical Errors|try Statement|catch Statement|finally Statement|throw Statement|Custom Errors|Error Object|Error Types'],
['JSON','JSON Introduction|JSON Syntax|JSON Objects|JSON Arrays|JSON.parse()|JSON.stringify()|JSON Data Types|JSON with JavaScript|JSON with APIs'],
['Web Storage & Browser APIs','localStorage|sessionStorage|Cookies|Browser Storage|Window Object|Navigator Object|Location Object|History Object|Screen Object|Clipboard API|Geolocation API|Notification API'],
['Fetch API & AJAX','AJAX Introduction|XMLHttpRequest|Fetch API|GET Request|POST Request|PUT Request|PATCH Request|DELETE Request|Request Headers|Response Handling|HTTP Status Codes|API Integration|REST API with JavaScript'],
['Modules','JavaScript Modules|export|import|Default Export|Named Export|Dynamic Import|Module Bundling Concept'],
['Advanced JavaScript','Closures|Currying|Memoization|Debouncing|Throttling|Callbacks vs Promises|Event Loop|Microtasks|Macrotasks|Microtask Queue|Promise Queue|Garbage Collection|Memory Management|WeakMap|WeakSet|Map|Set|Symbol|Proxy|Reflect'],
['Iterators & Generators','Iterable Objects|Iterator Protocol|Symbol.iterator|Custom Iterators|Generator Functions|yield Keyword|Generator Methods'],
['Node.js Basics','Introduction to Node.js|Installing Node.js|Node.js REPL|Node.js Modules|CommonJS Modules|npm|package.json|Installing Packages|Updating Packages|File System Module|Path Module|OS Module|Events Module|HTTP Module|URL Module|Environment Variables'],
['Express.js Basics','Introduction to Express.js|Express Installation|Creating Express Server|Routing|Route Parameters|Query Parameters|Middleware|Request Object|Response Object|REST API with Express|Error Handling in Express|Express + Database'],
['JavaScript Security & Best Practices','JavaScript Security Basics|XSS Introduction|Input Sanitization|Secure API Requests|CORS Basics|Authentication Concept|Authorization Concept|Environment Variables|Avoiding Sensitive Data in Frontend|Strict Mode|Clean Code|JavaScript Best Practices'],
['JavaScript Practice','Basic JavaScript Programs|Number Programs|Pattern Programs|String Programs|Array Programs|Object Programs|DOM Practice|Event Handling Practice|Form Validation Projects|API Practice|Async JavaScript Practice|OOP Practice'],
['JavaScript Projects','Calculator|Digital Clock|To-Do List|Quiz App|Stopwatch|Weather App|Notes App|Expense Tracker|Password Generator|Image Slider|Form Validation App|Random Quote Generator|Movie Search App|Chat Application|E-Commerce Frontend|Portfolio Website|REST API Project|Full-Stack JavaScript Project']
].map(([title, lessons]) => ({ title, lessons: lessons.split('|') }));
const allLessons = sections.flatMap((section) => section.lessons);
let activeSection = 0;
let activeLesson = 0;
const getJavaScriptProfile = (lesson) => { const name = lesson.toLowerCase(); if (name.includes('variable') || ['var', 'let', 'const'].includes(name)) return ['stores a value under a name so it can be reused', 'const score = 90;', 'score contains the number 90.']; if (name.includes('loop') || name.includes('break') || name.includes('continue')) return ['repeats code while processing a condition or collection', 'for (const item of items) { console.log(item); }', 'Each item is visited once.']; if (name.includes('array')) return ['stores an ordered, zero-indexed collection of values', 'const colors = ["red", "blue"];', 'colors[0] is "red".']; if (name.includes('function') || name.includes('callback')) return ['packages reusable behavior that can receive input and return a result', 'const add = (a, b) => a + b;', 'add(2, 3) returns 5.']; if (name.includes('dom') || name.includes('element') || name.includes('event')) return ['connects JavaScript logic to HTML elements and user actions', 'document.querySelector("button").addEventListener("click", () => console.log("Clicked"));', 'The message appears when the button is clicked.']; if (name.includes('promise') || name.includes('async') || name.includes('await') || name.includes('fetch')) return ['handles work that finishes later, such as a network request', 'const response = await fetch("/api/data");', 'The next line runs after the response arrives.']; return [`explains the JavaScript idea named ${lesson}`, `console.log("${lesson}");`, `The console demonstrates ${lesson}.`]; };
const buildLessonTheory = (lesson, section, code) => {
  const [explanation, syntax, result] = getJavaScriptProfile(lesson);
  return `<p><strong>What is ${lesson}?</strong></p><p>In the ${section.title} module, <strong>${lesson}</strong> ${explanation}. Understanding this helps you write interactive browser and Node.js programs.</p><p><strong>Syntax:</strong> ${syntax}</p><p><strong>Expected result:</strong> ${result}</p><div class="lesson-example"><h4>Example</h4><pre>${code}</pre></div><h4 class="lesson-reference-title">Remember</h4><ul><li>JavaScript is case-sensitive and values have runtime types.</li><li>Use the console to inspect values and errors.</li><li>Change one input, predict the output, then run it.</li></ul><h4 class="lesson-reference-title">Topic Reference</h4><table class="lesson-table"><thead><tr><th>Item</th><th>Lesson-specific detail</th></tr></thead><tbody><tr><td>Concept</td><td>${lesson}</td></tr><tr><td>Syntax</td><td>${syntax}</td></tr><tr><td>Result</td><td>${result}</td></tr><tr><td>Practice</td><td>Modify the example and compare the new output.</td></tr></tbody></table>`;
};
const codeFor = (lesson) => {
  const name = lesson.toLowerCase();
  if (name.includes('loop') || name.includes('for...')) return 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}';
  if (name.includes('array')) return 'const numbers = [3, 1, 2];\nconst sorted = numbers.sort((a, b) => a - b);\nconsole.log(sorted);';
  if (name.includes('string') || name.includes('substring') || name.includes('slice')) return 'const message = "Hello JavaScript";\nconsole.log(message.toUpperCase());';
  if (name.includes('dom') || name.includes('element') || name.includes('queryselector')) return 'const heading = document.querySelector("h1");\nif (heading) heading.textContent = "JavaScript is running";';
  if (name.includes('promise') || name.includes('async') || name.includes('await')) return 'Promise.resolve("Done")\n  .then((message) => console.log(message))\n  .catch((error) => console.error(error));';
  if (name.includes('object') || name.includes('class') || name.includes('constructor')) return 'const student = { name: "Asha", course: "JavaScript" };\nconsole.log(student.name);';
  return `console.log("${lesson}");`;
};

function renderTopics() {
  sections.forEach((section, sectionIndex) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'js-topic'; button.dataset.section = sectionIndex;
    button.innerHTML = `<span>${sectionIndex + 1}. ${section.title}</span><i class="fa-solid fa-chevron-right topic-arrow" aria-hidden="true"></i>`;
    const lessons = document.createElement('div'); lessons.className = 'js-subtopics'; lessons.id = `js-section-${sectionIndex}`;
    section.lessons.forEach((lesson, lessonIndex) => {
      const lessonButton = document.createElement('button'); lessonButton.type = 'button'; lessonButton.className = 'js-subtopic'; lessonButton.textContent = `${lessonIndex + 1}. ${lesson}`;
      lessonButton.addEventListener('click', () => loadLesson(sectionIndex, lessonIndex)); lessons.appendChild(lessonButton);
    });
    button.addEventListener('click', () => { const open = lessons.classList.toggle('open'); button.classList.toggle('expanded', open); if (open) loadLesson(sectionIndex, 0); });
    topicList.append(button, lessons);
  });
  $('#lesson-count').textContent = allLessons.length;
}
function loadLesson(sectionIndex, lessonIndex) {
  activeSection = sectionIndex; activeLesson = lessonIndex;
  const section = sections[sectionIndex]; const lesson = section.lessons[lessonIndex];
  const sectionButton = topicList.querySelector(`[data-section="${sectionIndex}"]`); const container = $(`#js-section-${sectionIndex}`);
  container.classList.add('open'); sectionButton.classList.add('expanded', 'active');
  topicList.querySelectorAll('.js-topic').forEach((item, index) => item.classList.toggle('active', index === sectionIndex));
  container.querySelectorAll('.js-subtopic').forEach((item, index) => item.classList.toggle('active', index === lessonIndex));
  $('#page-title').textContent = `${sectionIndex + 1}. ${section.title}`; $('#topic-title').textContent = lesson;
  $('#topic-description').textContent = `Learn ${lesson} in the ${section.title} module.`;
  $('#topic-theory').innerHTML = buildLessonTheory(lesson, section, codeFor(lesson));
  $('#topic-practice').innerHTML = `<ol class="js-lesson-list">${section.lessons.map((item) => `<li>${item}</li>`).join('')}</ol>`;
  $('#code-editor').value = codeFor(lesson); $('#code-output').textContent = 'Ready to execute JavaScript code. Click Run Code.';
  $('#progress-fill').style.width = `${((sectionIndex + 1) / sections.length) * 100}%`; $('#progress-text').textContent = `${sectionIndex + 1} of ${sections.length} modules completed`; $('#progress-note').textContent = `${section.title}: ${lesson}`;
  updateNavigation();
}
function updateNavigation() { $('#prev-topic-btn').disabled = activeSection === 0; $('#next-topic-btn').disabled = activeSection === sections.length - 1; }
function updateThemeIcon() { const icon = themeToggle?.querySelector('i'); const light = document.body.classList.contains('light-theme'); if (icon) icon.className = light ? 'fa-solid fa-moon' : 'fa-solid fa-sun'; themeToggle?.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode'); }
if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-theme'); updateThemeIcon();
themeToggle?.addEventListener('click', () => { document.body.classList.toggle('light-theme'); localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark'); updateThemeIcon(); });
const menuToggle = document.querySelector('.menu-toggle'); const navMenu = document.querySelector('.nav-menu'); menuToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); });
$('#prev-topic-btn').addEventListener('click', () => loadLesson(Math.max(0, activeSection - 1), 0)); $('#next-topic-btn').addEventListener('click', () => loadLesson(Math.min(sections.length - 1, activeSection + 1), 0));
$('#reset-code-btn').addEventListener('click', () => { $('#code-editor').value = codeFor(sections[activeSection].lessons[activeLesson]); $('#code-output').textContent = 'Ready to execute JavaScript code. Click Run Code.'; });
$('#copy-code-btn').addEventListener('click', async () => { await navigator.clipboard?.writeText($('#code-editor').value); $('#code-output').textContent = 'Code copied to clipboard.'; });
$('#run-code-btn').addEventListener('click', async () => { const source = $('#code-editor').value.trim(); const output = $('#code-output'); if (!source) { output.textContent = 'Please write some JavaScript code first!'; return; } output.textContent = 'Executing...'; try { const response = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ language_id: 63, source_code: source, stdin: '' }) }); if (!response.ok) throw new Error('Execution service unavailable'); const result = await response.json(); output.textContent = [result.stdout, result.stderr, result.compile_output, result.message].filter(Boolean).join('\n').trim() || 'Program finished with no output.'; } catch (error) { output.textContent = 'Unable to run code. Check your internet connection and try again.'; } });
const authModal = $('#auth-modal'); $('#auth-btn')?.addEventListener('click', () => { authModal.classList.add('open'); authModal.setAttribute('aria-hidden', 'false'); }); $('#auth-close')?.addEventListener('click', () => { authModal.classList.remove('open'); authModal.setAttribute('aria-hidden', 'true'); }); $('#auth-form')?.addEventListener('submit', (event) => { event.preventDefault(); alert(`Welcome ${$('#auth-email').value}!`); authModal.classList.remove('open'); event.target.reset(); }); authModal?.addEventListener('click', (event) => { if (event.target === authModal) authModal.classList.remove('open'); });
renderTopics(); updateNavigation();
