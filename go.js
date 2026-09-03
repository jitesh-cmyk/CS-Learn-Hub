const topicList = document.getElementById('topic-list');
const topicTitle = document.getElementById('topic-title');
const topicDescription = document.getElementById('topic-description');
const topicTheory = document.getElementById('topic-theory');
const topicPractice = document.getElementById('topic-practice');
const codeEditor = document.getElementById('code-editor');
const codeOutput = document.getElementById('code-output');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const progressNote = document.getElementById('progress-note');
const prevButton = document.getElementById('prev-topic-btn');
const nextButton = document.getElementById('next-topic-btn');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const authButton = document.getElementById('auth-btn');
const authModal = document.getElementById('auth-modal');
const authClose = document.getElementById('auth-close');
const authForm = document.getElementById('auth-form');
const authEmail = document.getElementById('auth-email');
const authStatus = document.querySelector('.auth-help');

const syllabus = [
['Basics',['Introduction to Go','History of Go','Features of Go','Installation & Setup','Go Workspace','First Go Program','Go Program Structure','Comments','Keywords','Identifiers']],
['Variables & Data Types',['Variables','Constants','Data Types','Type Inference','Type Conversion','Zero Values','Scope of Variables']],
['Operators & Expressions',['Arithmetic Operators','Relational Operators','Logical Operators','Assignment Operators','Bitwise Operators','Increment & Decrement','Expressions']],
['Input & Output',['fmt Package','User Input','Formatted Output','String Formatting']],
['Decision Making',['if Statement','if-else','else-if','Nested if','switch Statement','Type Switch']],
['Loops',['for Loop','Nested Loops','range','break','continue']],
['Functions',['Functions','Function Parameters','Return Values','Multiple Return Values','Named Return Values','Variadic Functions','Anonymous Functions','Closures','Recursion','defer']],
['Strings',['Strings','String Indexing','String Slicing','String Functions','strings Package','Unicode & UTF-8']],
['Arrays & Slices',['Arrays','Multidimensional Arrays','Slices','Creating Slices','append()','copy()','Slice Capacity & Length']],
['Maps',['Maps','Creating Maps','Adding & Updating Values','Deleting Map Elements','Checking Map Keys','Iterating Maps']],
['Pointers',['Introduction to Pointers','Pointer Variables','Address Operator','Dereferencing','Pointers with Functions','Pointers with Structures']],
['Structures',['Structures','Creating Structs','Struct Fields','Nested Structures','Anonymous Structures','Struct Methods']],
['Methods & Interfaces',['Methods','Pointer Receivers','Value Receivers','Interfaces','Empty Interface','Type Assertions','Type Switch']],
['Packages & Modules',['Packages','Creating Custom Packages','Importing Packages','Exported & Unexported Names','Go Modules','go.mod','go.sum','Package Management']],
['Error Handling',['Errors in Go','error Type','errors.New()','fmt.Errorf()','Custom Errors','Error Wrapping','Panic','recover']],
['File Handling',['File Handling','Creating Files','Reading Files','Writing Files','Appending Files','Closing Files','bufio Package','os Package']],
['JSON & Data',['JSON','Encoding JSON','Decoding JSON','Struct Tags','Working with CSV','XML Basics']],
['Concurrency ⭐',['Concurrency in Go','Goroutines','Channels','Buffered Channels','Unbuffered Channels','Channel Direction','select Statement','sync Package','WaitGroup','Mutex','Race Conditions']],
['Networking',['Networking Basics','TCP Programming','UDP Programming','net Package','HTTP Client','HTTP Server','WebSocket Basics']],
['Web Development',['Web Development with Go','net/http','Routing','HTTP Methods','Request & Response','Middleware','Templates','Sessions & Cookies','REST API','REST API Authentication']],
['Database',['Database Concepts','SQL with Go','SQLite','MySQL','PostgreSQL','database/sql','CRUD Operations','Transactions','ORM Basics']],
['Testing',['Testing in Go','Unit Testing','testing Package','Test Functions','Table-Driven Tests','Benchmarks','Example Tests']],
['Advanced Go',['Reflection','Generics','Type Parameters','Context Package','Memory Management','Garbage Collection','Profiling','Performance Optimization','Go Compiler','Cross Compilation']],
['Tools & Best Practices',['go run','go build','go install','go test','go fmt','go vet','Go Documentation','Code Organization','Naming Conventions','Error Handling Best Practices','Clean Code in Go']],
['Projects',['CLI Calculator','Number Guessing Game','File Manager','Contact Management System','URL Shortener','REST API','Authentication System','CRUD Application','Chat Application','Blog API','E-Commerce Backend','Final Go Backend Project']]
];

const topics = syllabus.flatMap(([section, items]) => items.map((name, index) => ({ section, name, number: index + 1 })));
let activeIndex = 0;
let expandedSection = null;
const completed = new Set(JSON.parse(localStorage.getItem('goCompletedTopics') || '[]'));

const esc = value => value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const sectionGuidance = {
  'Basics': 'Go is a statically typed, compiled language designed for readable software and fast builds. Programs start in package main and execution begins in func main().',
  'Variables & Data Types': 'Go variables have explicit types, useful zero values, and block scope. Use := for short declarations and const for values that must not change.',
  'Operators & Expressions': 'Go keeps expressions predictable with familiar arithmetic, comparison, logical, assignment, and bitwise operators. There is no implicit truthiness or pointer arithmetic.',
  'Input & Output': 'The fmt package provides printing and scanning helpers. Always check returned values when reading input, because malformed input is a normal runtime case.',
  'Decision Making': 'Go uses if and switch for decisions. Conditions do not require parentheses, and switch cases do not fall through unless fallthrough is written explicitly.',
  'Loops': 'Go has one loop keyword, for. It supports classic counters, condition-only loops, and range iteration over strings, arrays, slices, maps, and channels.',
  'Functions': 'Functions are first-class values and may return multiple results. Parameters and return values make data flow explicit, while defer schedules cleanup.',
  'Strings': 'A Go string is immutable UTF-8 data. Indexing reads bytes, while ranging over a string decodes Unicode code points safely.',
  'Arrays & Slices': 'Arrays have a fixed length, while slices are descriptors over an array. append can allocate a new backing array, so keep the returned slice.',
  'Maps': 'Maps store key-value pairs and return a value plus an optional boolean when checking a key. Map iteration order is intentionally not guaranteed.',
  'Pointers': 'Pointers hold addresses and let functions update shared data. Go has pointers without pointer arithmetic, making ownership easier to reason about.',
  'Structures': 'Structs combine named fields into a new type. Composite literals, embedded fields, and methods let structs model clear domain data.',
  'Methods & Interfaces': 'Methods attach behavior to named types. Interfaces describe behavior rather than concrete data, enabling small and testable abstractions.',
  'Packages & Modules': 'Packages organize Go code and modules describe its dependency graph. Exported identifiers begin with an uppercase letter.',
  'Error Handling': 'Errors are ordinary values implementing the error interface. Return them to callers, wrap useful context, and reserve panic for unrecoverable programmer errors.',
  'File Handling': 'The os and bufio packages provide file access and buffered reading or writing. Close resources with defer after a successful open.',
  'JSON & Data': 'The encoding/json package maps JSON to structs, maps, and slices. Struct tags control field names and decoding behavior.',
  'Concurrency ⭐': 'Goroutines run functions concurrently and channels coordinate communication. Synchronization tools such as WaitGroup and Mutex protect shared work.',
  'Networking': 'The net package provides TCP and UDP primitives, while net/http builds clients and servers on top of reliable request and response types.',
  'Web Development': 'net/http supplies handlers, servers, clients, middleware patterns, templates, cookies, and the building blocks for REST APIs.',
  'Database': 'database/sql separates SQL execution from the database driver. Use parameterized queries, scan rows carefully, and commit transactions deliberately.',
  'Testing': 'Go testing is built into the toolchain. Test functions, table-driven cases, benchmarks, and examples keep behavior executable and documented.',
  'Advanced Go': 'Advanced Go features such as generics, reflection, context, and profiling solve specific design or performance problems; use the simplest tool that fits.',
  'Tools & Best Practices': 'The go command formats, tests, builds, documents, and vets projects consistently. Idiomatic naming and small packages keep code maintainable.',
  'Projects': 'Projects combine language fundamentals with packages, persistence, networking, validation, and tests. Start with a small working slice before adding features.'
};
const topicExample = topic => `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Learning ${topic.name.replaceAll('"','')}")\n}`;
const topicTheoryText = topic => `<p><strong>What is ${esc(topic.name)}?</strong></p><p>${esc(topic.name)} is a Go concept from the ${esc(topic.section.replace(' ⭐',''))} section. ${sectionGuidance[topic.section]}</p><p>Use this feature with clear names, explicit types, and small functions. When an operation can fail, return its error and let the caller decide how to respond.</p><div class="lesson-example"><h4>Example</h4><pre>${esc(topicExample(topic))}</pre></div><h4 class="lesson-reference-title">Key Points</h4><ul><li>Understand the syntax before adding extra abstraction.</li><li>Compile and format the example with <code>go fmt</code>.</li><li>Test a normal case and an edge case.</li></ul><h4 class="lesson-reference-title">Quick Reference</h4><table class="lesson-table"><thead><tr><th>Concept</th><th>Use</th></tr></thead><tbody><tr><td>${esc(topic.name)}</td><td>Core Go concept in this lesson</td></tr><tr><td>Practice</td><td>Modify the example and observe the output</td></tr></tbody></table>`;
const topicPracticeText = topic => `<p>Practice <strong>${esc(topic.name)}</strong> in Go.</p><ol><li>Write a minimal example using this concept.</li><li>Test normal input and one edge case.</li><li>Run <code>go fmt</code>, then explain the result.</li></ol>`;
const starterCode = topic => `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Go lesson: ${topic.name.replaceAll('"','')}" )\n    // Add your practice solution here.\n}`;

function renderTopicList() {
  let globalIndex = 0;
  topicList.innerHTML = syllabus.map(([section, items], sectionIndex) => {
    const firstIndex = globalIndex;
    const isActiveSection = topics[activeIndex]?.section === section;
    const isExpanded = expandedSection === section;
    const sectionButton = `<button class="go-topic${isActiveSection ? ' active' : ''}${isExpanded ? ' expanded' : ''}" type="button" data-section="${sectionIndex}" aria-expanded="${isExpanded}"><span>${sectionIndex + 1}. ${esc(section)}</span><i class="fa-solid fa-chevron-right topic-arrow" aria-hidden="true"></i></button>`;
    const lessonButtons = items.map((item, lessonIndex) => {
      const index = globalIndex++;
      return `<button class="go-subtopic${index === activeIndex ? ' active' : ''}" type="button" data-index="${index}">${lessonIndex + 1}. ${esc(item)}${completed.has(index) ? ' ✓' : ''}</button>`;
    }).join('');
    return `${sectionButton}<div class="go-subtopics${isExpanded ? ' open' : ''}" id="go-section-${sectionIndex}">${lessonButtons}</div>`;
  }).join('');

  topicList.querySelectorAll('.go-topic').forEach(button => button.addEventListener('click', () => {
    const sectionIndex = Number(button.dataset.section);
    const firstLessonIndex = syllabus.slice(0, sectionIndex).reduce((total, section) => total + section[1].length, 0);
    const lessons = document.getElementById(`go-section-${sectionIndex}`);
    const isOpen = lessons.classList.toggle('open');
    expandedSection = isOpen ? syllabus[sectionIndex][0] : null;
    button.classList.toggle('expanded', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) selectTopic(firstLessonIndex);
  }));
  topicList.querySelectorAll('.go-subtopic').forEach(button => button.addEventListener('click', () => selectTopic(Number(button.dataset.index))));
}

function updateProgress() {
  const count = completed.size;
  const percent = topics.length ? count / topics.length * 100 : 0;
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${count} of ${topics.length} completed`;
  progressNote.textContent = count === topics.length ? 'Go course complete!' : 'Select a lesson to continue';
}

function selectTopic(index) {
  activeIndex = Math.max(0, Math.min(index, topics.length - 1));
  const topic = topics[activeIndex];
  topicTitle.textContent = `${activeIndex + 1}. ${topic.name}`;
  topicDescription.textContent = `${topic.section.replace(' ⭐','')} · Lesson ${topic.number}`;
  topicTheory.innerHTML = topicTheoryText(topic);
  topicPractice.innerHTML = topicPracticeText(topic);
  codeEditor.value = starterCode(topic);
  codeOutput.textContent = 'Ready to execute Go code. Click Run Code.';
  completed.add(activeIndex);
  localStorage.setItem('goCompletedTopics', JSON.stringify([...completed]));
  renderTopicList();
  updateProgress();
  prevButton.disabled = activeIndex === 0;
  nextButton.disabled = activeIndex === topics.length - 1;
}

prevButton.addEventListener('click', () => selectTopic(activeIndex - 1));
nextButton.addEventListener('click', () => selectTopic(activeIndex + 1));
document.getElementById('hero-lesson-count').textContent = topics.length;
document.getElementById('lesson-count').textContent = `${topics.length} lessons`;
document.getElementById('reset-code-btn').addEventListener('click', () => { codeEditor.value = starterCode(topics[activeIndex]); codeOutput.textContent = 'Editor reset.'; });
document.getElementById('copy-code-btn').addEventListener('click', async () => { await navigator.clipboard.writeText(codeEditor.value); codeOutput.textContent = 'Code copied to clipboard.'; });
document.getElementById('run-code-btn').addEventListener('click', () => { codeOutput.textContent = `Go code is ready.\n\nThis browser editor does not compile Go locally. Run it with:\ngo run main.go\n\nLesson: ${topics[activeIndex].name}`; });

menuToggle?.addEventListener('click', () => { const open = navMenu.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); });
const updateTheme = () => { const light = document.body.classList.contains('light-theme'); themeToggle.querySelector('i').className = light ? 'fa-solid fa-moon' : 'fa-solid fa-sun'; themeToggle.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode'); };
if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-theme');
updateTheme(); themeToggle?.addEventListener('click', () => { document.body.classList.toggle('light-theme'); localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark'); updateTheme(); });
const closeAuth = () => { authModal.classList.remove('open'); authModal.setAttribute('aria-hidden','true'); };
authButton?.addEventListener('click', () => { if (localStorage.getItem('csLearnUser')) { localStorage.removeItem('csLearnUser'); localStorage.removeItem('csLearnToken'); authButton.textContent = 'Sign In'; authStatus.textContent = 'You have been signed out.'; } else { authModal.classList.add('open'); authModal.setAttribute('aria-hidden','false'); authEmail.focus(); } });
authClose?.addEventListener('click', closeAuth); authModal?.addEventListener('click', event => { if (event.target === authModal) closeAuth(); });
authForm?.addEventListener('submit', event => { event.preventDefault(); localStorage.setItem('csLearnUser', authEmail.value.trim()); authButton.textContent = 'Sign Out'; authStatus.textContent = `Signed in as ${authEmail.value.trim()}.`; closeAuth(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && authModal?.classList.contains('open')) closeAuth(); });
if (localStorage.getItem('csLearnUser')) authButton.textContent = 'Sign Out';
renderTopicList(); updateProgress(); selectTopic(0);
