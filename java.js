const $ = (selector) => document.querySelector(selector);
const topicList = $('#topic-list');
const themeToggle = $('#theme-toggle');
const sections = [
  ['Introduction & Setup', 'Introduction to Java|Features of Java|Applications of Java|Java Versions|JDK, JRE and JVM|JVM Architecture|Java Installation & Setup|Setting JAVA_HOME and PATH|IDE Setup|First Java Program|Compilation and Execution|Java Program Structure|Comments in Java'],
  ['Basic Syntax', 'Basic Syntax|Keywords|Identifiers|Variables|Constants|Data Types|Primitive Data Types|Non-Primitive Data Types|Literals|Type Casting|Type Conversion|Wrapper Classes|Autoboxing|Unboxing'],
  ['Input & Output', 'Output with print()|Output with println()|Output Formatting|Escape Sequences|Scanner Class|Taking Integer Input|Taking Floating Input|Taking String Input|BufferedReader|Command-Line Arguments'],
  ['Operators', 'Operators Introduction|Arithmetic Operators|Relational Operators|Logical Operators|Assignment Operators|Unary Operators|Increment and Decrement|Bitwise Operators|Shift Operators|Ternary Operator|instanceof Operator|Operator Precedence'],
  ['Decision Making', 'if Statement|if-else Statement|Nested if|else-if Statement|switch Statement|Nested switch|Switch Expression|Switch with String'],
  ['Loops', 'for Loop|while Loop|do-while Loop|Nested Loops|Enhanced for Loop|break Statement|continue Statement|Labeled break|Labeled continue'],
  ['Methods', 'Methods|Method Declaration|Method Calling|Method Parameters|Return Values|Method Overloading|Static Methods|Instance Methods|Passing Arguments|Passing Objects to Methods|Variable Arguments (Varargs)|Recursion|Command-Line Arguments'],
  ['Arrays', 'Introduction to Arrays|Array Declaration|Array Initialization|1D Array|Array Traversal|Array Input and Output|Array Searching|Array Sorting|2D Array|Multidimensional Array|Jagged Array|Array of Objects|Arrays Class|Final Arrays'],
  ['Strings', 'String Introduction|Creating Strings|String Class|String Methods|String Concatenation|String Comparison|equals() vs ==|String Immutability|String Pool|StringBuffer|StringBuilder|String vs StringBuffer vs StringBuilder'],
  ['Classes & Objects', 'Classes|Objects|Class Members|Instance Variables|Instance Methods|Constructors|Default Constructor|Parameterized Constructor|Constructor Overloading|Copy Constructor Concept|this Keyword|static Keyword|final Keyword'],
  ['Encapsulation & Access Control', 'Encapsulation|Access Modifiers|public|private|protected|Default Access|Getters and Setters'],
  ['Inheritance', 'Inheritance|extends Keyword|Single Inheritance|Multilevel Inheritance|Hierarchical Inheritance|Multiple Inheritance using Interfaces|Hybrid Inheritance using Interfaces|super Keyword|Constructor in Inheritance|Method Overriding'],
  ['Polymorphism', 'Polymorphism|Compile-Time Polymorphism|Runtime Polymorphism|Method Overloading|Method Overriding|Dynamic Method Dispatch|Upcasting|Downcasting|instanceof with Polymorphism'],
  ['Abstraction', 'Abstraction|Abstract Class|Abstract Method|Abstract Class Constructors|Abstract Class with Concrete Methods|Interface|Implementing Interface|Multiple Interfaces|Interface Inheritance|Class vs Interface|Functional Interface|Marker Interface|Nested Interface|Default Interface Methods|Static Interface Methods'],
  ['Packages', 'Packages|Built-in Packages|Creating Packages|Import Statement|User-Defined Packages|Static Import|Package Access Control'],
  ['Exception Handling', 'Exception Handling|Errors vs Exceptions|Exception Hierarchy|try Block|catch Block|finally Block|throw Keyword|throws Keyword|Multiple catch|Nested try-catch|Custom Exceptions|Checked Exceptions|Unchecked Exceptions|Chained Exceptions|NullPointerException|Final, Finally and Finalize|Exception Handling with Method Overriding|Try-with-Resources'],
  ['Generics', 'Generics Introduction|Generic Classes|Generic Methods|Generic Interfaces|Multiple Type Parameters|Bounded Type Parameters|Wildcards|Type Erasure'],
  ['Collections Framework', 'Collections Framework|Collection Hierarchy|Collection Interface|Collections Class|List Interface|ArrayList|LinkedList|Vector|Stack|Set Interface|HashSet|LinkedHashSet|TreeSet|Queue Interface|PriorityQueue|Deque Interface|ArrayDeque|Map Interface|HashMap|LinkedHashMap|TreeMap|Hashtable|Iterator|ListIterator|Comparable Interface|Comparator Interface'],
  ['Java 8+ Features', 'Lambda Expressions|Functional Interfaces|Predicate|Consumer|Supplier|Function|Method References|Stream API|Stream Creation|filter()|map()|reduce()|forEach()|sorted()|distinct()|limit()|collect()|Collectors|Optional'],
  ['Date & Time', 'Date and Time API|LocalDate|LocalTime|LocalDateTime|ZonedDateTime|Duration|Period|DateTimeFormatter'],
  ['Regular Expressions', 'Regular Expressions|Pattern Class|Matcher Class|Character Classes|Quantifiers|Regex Searching|Regex Validation'],
  ['File Handling', 'Java I/O Introduction|File Class|FileReader|FileWriter|Reader Class|Writer Class|BufferedReader|BufferedWriter|FileInputStream|FileOutputStream|Serialization|Deserialization|File Permissions|FileDescriptor|NIO Introduction|Path and Files'],
  ['Multithreading', 'Threads Introduction|Thread Life Cycle|Main Thread|Creating Threads|Thread Class|Runnable Interface|Thread Methods|start() vs run()|Thread Priority|sleep()|join()|Daemon Threads|Synchronization|Thread Safety|synchronized Keyword|Locks|ReentrantLock|Deadlock|Thread Pools|Executor Framework|Concurrent Collections'],
  ['Memory Management', 'Java Memory Management|Stack Memory|Heap Memory|JVM Memory Areas|Object Storage in Memory|Garbage Collection|Types of Garbage Collectors|Memory Leaks'],
  ['Inner Classes', 'Inner Classes|Member Inner Class|Static Nested Class|Local Inner Class|Anonymous Inner Class'],
  ['Enum & Annotations', 'Enum|Enum Methods|Enum Constructors|Annotations|Built-in Annotations|Custom Annotations'],
  ['Networking', 'Java Networking|InetAddress|URL Class|URLConnection|Socket Programming|ServerSocket|TCP Client-Server|UDP Networking'],
  ['JDBC', 'JDBC Introduction|JDBC Architecture|JDBC Drivers|Database Connection|Connection Object|Statement|PreparedStatement|CallableStatement|ResultSet|Insert Data|Update Data|Delete Data|Select Data|Transactions|Batch Processing|Metadata|Connection Pooling'],
  ['Advanced Java', 'Object Class|equals() Method|hashCode() Method|toString() Method|clone() Method|Object Cloning|Reflection API|Modules|Records|Sealed Classes|Pattern Matching|Switch Expressions|Virtual Threads|CompletableFuture'],
  ['Java Practice & Projects', 'Basic Java Programs|Number Programs|Pattern Programs|Array Programs|String Programs|OOP Programs|Exception Handling Programs|Collection Programs|File Handling Programs|Multithreading Programs|JDBC Programs|Number Guessing Game|Tic-Tac-Toe|Banking Application|Employee Management System|Chat Application|Text Editor|Mini Java Projects']
].map(([title, lessons]) => ({ title, lessons: lessons.split('|') }));

const allLessons = sections.flatMap((section) => section.lessons);
let activeSection = 0;
let activeLesson = 0;
const getJavaProfile = (lesson) => {
  const name = lesson.toLowerCase();
  if (name.includes('scanner') || name.includes('input')) return ['reads user input from the keyboard', 'Scanner scanner = new Scanner(System.in);\nint value = scanner.nextInt();', 'The entered value is stored in value.'];
  if (name.includes('print') || name.includes('output') || name.includes('cout')) return ['sends text or values to the console', 'System.out.println("Hello Java");', 'Hello Java appears on a new line.'];
  if (name.includes('loop') || name.includes('break') || name.includes('continue')) return ['repeats statements while a condition or collection is being processed', 'for (int i = 1; i <= 3; i++) { }', 'The loop processes 1, 2, and 3.'];
  if (name.includes('array')) return ['stores a fixed number of values of the same type using zero-based indexes', 'int[] values = {10, 20, 30};', 'values[0] is 10.'];
  if (name.includes('method') || name.includes('function') || name.includes('recursion')) return ['groups reusable instructions so the same logic can be called many times', 'static int add(int a, int b) { return a + b; }', 'Calling add(2, 3) returns 5.'];
  if (name.includes('exception') || name.includes('try') || name.includes('catch')) return ['handles an unexpected runtime problem without stopping the whole application', 'try { int x = 10 / 0; } catch (ArithmeticException e) { }', 'The exception is caught and the program can continue.'];
  if (name.includes('class') || name.includes('object') || name.includes('constructor')) return ['models an object with state and behavior', 'Student student = new Student();', 'A Student object is created in memory.'];
  if (name.includes('inheritance') || name.includes('extends') || name.includes('override')) return ['allows a child class to reuse or specialize a parent class', 'class Dog extends Animal { }', 'Dog receives accessible behavior from Animal.'];
  return [`explains the Java idea named ${lesson}`, `// Use ${lesson} in a small Java program`, `The program demonstrates ${lesson}.`];
};
const buildLessonTheory = (lesson, section, code) => {
  const [explanation, syntax, result] = getJavaProfile(lesson);
  return `<p><strong>What is ${lesson}?</strong></p><p>In the ${section.title} module, <strong>${lesson}</strong> ${explanation}. This is useful when building real Java applications because it keeps one responsibility clear and reusable.</p><p><strong>Syntax:</strong> ${syntax}</p><p><strong>Expected result:</strong> ${result}</p><div class="lesson-example"><h4>Example</h4><pre>${code}</pre></div><h4 class="lesson-reference-title">Remember</h4><ul><li>Java is case-sensitive and statements usually end with a semicolon.</li><li>Use meaningful names and compile after each small change.</li><li>Test both the normal case and an edge case.</li></ul><h4 class="lesson-reference-title">Topic Reference</h4><table class="lesson-table"><thead><tr><th>Item</th><th>Lesson-specific detail</th></tr></thead><tbody><tr><td>Concept</td><td>${lesson}</td></tr><tr><td>Syntax</td><td>${syntax}</td></tr><tr><td>Result</td><td>${result}</td></tr><tr><td>Practice</td><td>Change the example and predict the new result before running it.</td></tr></tbody></table>`;
};

const codeFor = (lesson) => {
  const name = lesson.toLowerCase();
  if (name.includes('loop') || name.includes('for')) return 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(i);\n        }\n    }\n}';
  if (name.includes('array')) return 'import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] numbers = {3, 1, 2};\n        Arrays.sort(numbers);\n        System.out.println(Arrays.toString(numbers));\n    }\n}';
  if (name.includes('string')) return 'public class Main {\n    public static void main(String[] args) {\n        String message = "Hello Java";\n        System.out.println(message.toUpperCase());\n    }\n}';
  if (name.includes('exception') || name.includes('try') || name.includes('catch')) return 'public class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n            System.out.println(result);\n        } catch (ArithmeticException error) {\n            System.out.println("Cannot divide by zero");\n        }\n    }\n}';
  if (name.includes('class') || name.includes('object') || name.includes('constructor')) return 'class Student {\n    String name = "Asha";\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student student = new Student();\n        System.out.println(student.name);\n    }\n}';
  return `public class Main {\n    public static void main(String[] args) {\n        System.out.println("${lesson}");\n    }\n}`;
};

function renderTopics() {
  topicList.innerHTML = '';
  sections.forEach((section, sectionIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'java-topic';
    button.dataset.section = sectionIndex;
    button.innerHTML = `<span>${sectionIndex + 1}. ${section.title}</span><i class="fa-solid fa-chevron-right topic-arrow" aria-hidden="true"></i>`;

    const lessons = document.createElement('div');
    lessons.className = 'java-subtopics';
    lessons.id = `section-${sectionIndex}`;
    section.lessons.forEach((lesson, lessonIndex) => {
      const lessonButton = document.createElement('button');
      lessonButton.type = 'button';
      lessonButton.className = 'java-subtopic';
      lessonButton.textContent = `${lessonIndex + 1}. ${lesson}`;
      lessonButton.addEventListener('click', () => loadLesson(sectionIndex, lessonIndex));
      lessons.appendChild(lessonButton);
    });

    button.addEventListener('click', () => {
      const isOpen = lessons.classList.toggle('open');
      button.classList.toggle('expanded', isOpen);
      if (isOpen) loadLesson(sectionIndex, 0);
    });
    topicList.append(button, lessons);
  });
  $('#lesson-count').textContent = allLessons.length;
}

function loadLesson(sectionIndex, lessonIndex) {
  activeSection = sectionIndex;
  activeLesson = lessonIndex;
  const section = sections[sectionIndex];
  const lesson = section.lessons[lessonIndex];
  const sectionButton = topicList.querySelector(`[data-section="${sectionIndex}"]`);
  const lessonButtons = topicList.querySelectorAll(`#section-${sectionIndex} .java-subtopic`);
  const lessonsContainer = $(`#section-${sectionIndex}`);

  lessonsContainer.classList.add('open');
  sectionButton.classList.add('expanded', 'active');
  lessonButtons.forEach((button, index) => button.classList.toggle('active', index === lessonIndex));
  topicList.querySelectorAll('.java-topic').forEach((button, index) => button.classList.toggle('active', index === sectionIndex));

  $('#page-title').textContent = `${sectionIndex + 1}. ${section.title}`;
  $('#topic-title').textContent = lesson;
  $('#topic-description').textContent = `Learn ${lesson} as part of the ${section.title} module.`;
  $('#topic-theory').innerHTML = buildLessonTheory(lesson, section, codeFor(lesson));
  $('#topic-practice').innerHTML = `<ol class="java-lesson-list">${section.lessons.map((item) => `<li>${item}</li>`).join('')}</ol>`;
  $('#code-editor').value = codeFor(lesson);
  $('#code-output').textContent = 'Ready to execute Java code. Click Run Code.';
  $('#progress-fill').style.width = `${((sectionIndex + 1) / sections.length) * 100}%`;
  $('#progress-text').textContent = `${sectionIndex + 1} of ${sections.length} modules completed`;
  $('#progress-note').textContent = `${section.title}: ${lesson}`;
  updateNavigation();
}

function updateNavigation() {
  $('#prev-topic-btn').disabled = activeSection === 0;
  $('#next-topic-btn').disabled = activeSection === sections.length - 1;
}

function initializeTheme() {
  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-theme');
  updateThemeIcon();
}
function updateThemeIcon() {
  const icon = themeToggle?.querySelector('i');
  const isLight = document.body.classList.contains('light-theme');
  if (icon) icon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  themeToggle?.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
}
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  updateThemeIcon();
});

$('#menu-toggle')?.addEventListener('click', () => $('#nav-menu')?.classList.toggle('open'));
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle?.addEventListener('click', () => navMenu?.classList.toggle('open'));
$('#prev-topic-btn').addEventListener('click', () => loadLesson(Math.max(0, activeSection - 1), 0));
$('#next-topic-btn').addEventListener('click', () => loadLesson(Math.min(sections.length - 1, activeSection + 1), 0));
$('#reset-code-btn').addEventListener('click', () => { $('#code-editor').value = codeFor(sections[activeSection].lessons[activeLesson]); $('#code-output').textContent = 'Ready to execute Java code. Click Run Code.'; });
$('#copy-code-btn').addEventListener('click', async () => { await navigator.clipboard?.writeText($('#code-editor').value); $('#code-output').textContent = 'Code copied to clipboard.'; });
$('#run-code-btn').addEventListener('click', async () => {
  const codeOutput = $('#code-output');
  const code = $('#code-editor').value;
  if (!code.trim()) {
    codeOutput.textContent = 'Please write some Java code first!';
    return;
  }

  codeOutput.textContent = 'Compiling and executing...';
  try {
    const response = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language_id: 62, source_code: code, stdin: '' })
    });
    if (!response.ok) throw new Error(`Execution service returned status ${response.status}`);
    const result = await response.json();
    const output = [result.stdout, result.stderr, result.compile_output, result.message].filter(Boolean).join('\n').trim();
    codeOutput.textContent = output || 'Program finished with no output.';
  } catch (error) {
    codeOutput.textContent = 'Unable to run code. Check your internet connection and try again.';
  }
});

const authModal = $('#auth-modal');
$('#auth-btn')?.addEventListener('click', () => { authModal.classList.add('open'); authModal.setAttribute('aria-hidden', 'false'); });
$('#auth-close')?.addEventListener('click', () => { authModal.classList.remove('open'); authModal.setAttribute('aria-hidden', 'true'); });
$('#auth-form')?.addEventListener('submit', (event) => { event.preventDefault(); alert(`Welcome ${$('#auth-email').value}!`); authModal.classList.remove('open'); event.target.reset(); });
authModal?.addEventListener('click', (event) => { if (event.target === authModal) authModal.classList.remove('open'); });

renderTopics();
initializeTheme();
updateNavigation();
