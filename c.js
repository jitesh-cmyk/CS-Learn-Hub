const topicListContainer = document.getElementById('topic-list');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const authButton = document.getElementById('auth-btn');
const authModal = document.getElementById('auth-modal');
const authClose = document.getElementById('auth-close');
const authForm = document.getElementById('auth-form');
const authEmail = document.getElementById('auth-email');
const authPassword = document.getElementById('auth-password');
const authStatus = document.querySelector('.auth-help');
const codeEditor = document.getElementById('code-editor');
const codeOutput = document.getElementById('code-output');
const resetCodeBtn = document.getElementById('reset-code-btn');
const runCodeBtn = document.getElementById('run-code-btn');
const topicTitle = document.getElementById('topic-title');
const topicDescription = document.getElementById('topic-description');
const topicTheory = document.getElementById('topic-theory');
const topicPractice = document.getElementById('topic-practice');
const pageTitle = document.getElementById('page-title');
const copyCodeBtn = document.getElementById('copy-code-btn');
const lessonCountLabel = document.querySelector('.sidebar-head span');
const progressFill = document.querySelector('.progress-fill');
const progressText = document.querySelector('.progress-text');
let topicButtons = [];
let activeTopicKey = 'introduction';

const topics = [
 {
  key: 'introduction',
  title: 'Introduction to C',

  description: 'C is a powerful general-purpose programming language developed for system programming. It is widely used for operating systems, embedded systems, compilers, and performance-oriented applications.',

  theory: [
    `
    <h3>1. What is C?</h3>

    <p>
      <strong>C</strong> is a general-purpose programming language
      developed by <strong>Dennis Ritchie</strong> at Bell Labs in
      the early 1970s. It is one of the most important programming
      languages for understanding how software works close to the
      computer hardware.
    </p>

    <p>
      C provides features such as variables, functions, arrays,
      pointers, structures, and direct memory manipulation.
    </p>


    <h3>2. Why Learn C?</h3>

    <ul>
      <li>It builds strong programming fundamentals.</li>
      <li>It helps understand memory and computer hardware.</li>
      <li>It is widely used in system programming.</li>
      <li>It provides the foundation for learning C++, Java, and other languages.</li>
      <li>It is useful for embedded and performance-critical applications.</li>
      <li>It teaches important concepts such as pointers and memory management.</li>
    </ul>


    <h3>3. Features of C</h3>

    <div class="c-feature-grid">

      <div class="c-feature-card">
        <span>⚡</span>
        <strong>Fast</strong>
        <p>C programs can execute very efficiently.</p>
      </div>

      <div class="c-feature-card">
        <span>🔧</span>
        <strong>Low-Level Access</strong>
        <p>C provides access to memory through pointers.</p>
      </div>

      <div class="c-feature-card">
        <span>📦</span>
        <strong>Portable</strong>
        <p>C programs can be compiled on different platforms.</p>
      </div>

      <div class="c-feature-card">
        <span>🧩</span>
        <strong>Structured</strong>
        <p>Programs can be organized using functions and blocks.</p>
      </div>

      <div class="c-feature-card">
        <span>💾</span>
        <strong>Memory Control</strong>
        <p>C provides powerful memory management features.</p>
      </div>

      <div class="c-feature-card">
        <span>🔌</span>
        <strong>System Programming</strong>
        <p>C is widely used for operating systems and embedded systems.</p>
      </div>

    </div>


    <h3>4. Applications of C</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Area</th>
          <th>Use of C</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Operating Systems</td>
          <td>Used to develop system-level software.</td>
        </tr>

        <tr>
          <td>Embedded Systems</td>
          <td>Used in microcontrollers and hardware-based systems.</td>
        </tr>

        <tr>
          <td>Compilers</td>
          <td>Used to develop language compilers and system tools.</td>
        </tr>

        <tr>
          <td>Databases</td>
          <td>Used in performance-critical database components.</td>
        </tr>

        <tr>
          <td>Networking</td>
          <td>Used for network software and communication systems.</td>
        </tr>

        <tr>
          <td>Game Development</td>
          <td>Used where high performance and low-level control are important.</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Basic Structure of a C Program</h3>

    <p>
      A basic C program generally contains header files, the
      <strong>main()</strong> function, statements, and a return statement.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Hello, C!");

    return 0;
}</code></pre>


    <h3>6. Understanding the Program</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Part</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>#include &lt;stdio.h&gt;</td>
          <td>Includes the standard input/output header.</td>
        </tr>

        <tr>
          <td>int main()</td>
          <td>Defines the main function where program execution begins.</td>
        </tr>

        <tr>
          <td>printf()</td>
          <td>Displays output on the screen.</td>
        </tr>

        <tr>
          <td>return 0;</td>
          <td>Indicates successful completion of the program.</td>
        </tr>

        <tr>
          <td>;</td>
          <td>Terminates a C statement.</td>
        </tr>
      </tbody>
    </table>


    <h3>7. C Program Execution</h3>

    <div class="c-execution-flow">

      <div class="c-flow-box">
        📝
        <strong>Source Code</strong>
        <span>.c file</span>
      </div>

      <div class="c-flow-arrow">→</div>

      <div class="c-flow-box">
        ⚙️
        <strong>Preprocessor</strong>
        <span>Processes directives</span>
      </div>

      <div class="c-flow-arrow">→</div>

      <div class="c-flow-box">
        🔨
        <strong>Compiler</strong>
        <span>Creates object code</span>
      </div>

      <div class="c-flow-arrow">→</div>

      <div class="c-flow-box">
        🔗
        <strong>Linker</strong>
        <span>Links libraries</span>
      </div>

      <div class="c-flow-arrow">→</div>

      <div class="c-flow-box">
        🚀
        <strong>Executable</strong>
        <span>Runs the program</span>
      </div>

    </div>


    <h3>8. First C Program</h3>

    <p>
      The following program prints a welcome message on the screen.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Welcome to C programming!\\n");

    return 0;
}</code></pre>


    <h3>Output</h3>

    <pre><code>Welcome to C programming!</code></pre>


    <h3>9. Important C Concepts</h3>

    <div class="c-concept-grid">

      <div>📌 Variables</div>
      <div>📌 Data Types</div>
      <div>📌 Operators</div>
      <div>📌 Conditions</div>
      <div>📌 Loops</div>
      <div>📌 Functions</div>
      <div>📌 Arrays</div>
      <div>📌 Strings</div>
      <div>📌 Pointers</div>
      <div>📌 Structures</div>
      <div>📌 File Handling</div>
      <div>📌 Dynamic Memory</div>

    </div>


    <h3>10. C Learning Roadmap</h3>

    <div class="c-roadmap">

      <div class="c-roadmap-item">
        <span>01</span>
        <strong>Basics</strong>
        <p>Syntax, Variables, Data Types</p>
      </div>

      <div class="c-roadmap-item">
        <span>02</span>
        <strong>Control Flow</strong>
        <p>Conditions and Loops</p>
      </div>

      <div class="c-roadmap-item">
        <span>03</span>
        <strong>Functions</strong>
        <p>Functions and Recursion</p>
      </div>

      <div class="c-roadmap-item">
        <span>04</span>
        <strong>Data Structures</strong>
        <p>Arrays, Strings, Structures</p>
      </div>

      <div class="c-roadmap-item">
        <span>05</span>
        <strong>Pointers</strong>
        <p>Memory and Pointer Concepts</p>
      </div>

      <div class="c-roadmap-item">
        <span>06</span>
        <strong>Advanced C</strong>
        <p>Files, Memory and Projects</p>
      </div>

    </div>


    <h3>11. Important Points</h3>

    <ul>
      <li>C is a general-purpose programming language.</li>
      <li>C was developed by Dennis Ritchie.</li>
      <li>Program execution begins from the main() function.</li>
      <li>Header files provide declarations for library functions.</li>
      <li>printf() is commonly used to display output.</li>
      <li>Every normal C statement ends with a semicolon.</li>
      <li>C gives programmers significant control over memory.</li>
    </ul>
    `
  ],

  practice: [
    'Write and run your first C program.',
    'Print your name, college name, and course using printf().',
    'Create a program that prints multiple lines of text.',
    'Modify the welcome message and run the program again.',
    'Identify the header file, main() function, printf(), and return statement in a C program.',
    'Draw the basic execution flow of a C program.',
    'Write a simple C program that displays your introduction.'
  ],

  code: `#include <stdio.h>

int main() {

    printf("Welcome to C Programming!\\n");
    printf("Learning C step by step.\\n");
    printf("Let's start programming!\\n");

    return 0;
}`
},
 {
  key: 'history-of-c',
  title: 'History of C',

  description: 'C is one of the most influential programming languages in computer science. It was developed at Bell Labs and became an important foundation for operating systems, compilers, embedded systems, and many modern programming languages.',

  theory: [
    `
    <h3>1. Origin of C</h3>

    <p>
      The C programming language was developed at
      <strong>Bell Telephone Laboratories (Bell Labs)</strong>
      in the early 1970s. It was created by
      <strong>Dennis Ritchie</strong> as a general-purpose programming
      language suitable for system programming.
    </p>

    <p>
      C evolved from earlier programming languages such as
      <strong>BCPL</strong> and <strong>B</strong>. These languages
      influenced the design and development of C.
    </p>


    <h3>2. C Language Timeline</h3>

    <div class="c-history-timeline">

      <div class="c-history-item">
        <div class="c-history-year">1960s</div>
        <div class="c-history-content">
          <strong>BCPL</strong>
          <p>
            Martin Richards developed BCPL, which later influenced
            the development of B and C.
          </p>
        </div>
      </div>

      <div class="c-history-line"></div>

      <div class="c-history-item">
        <div class="c-history-year">1969</div>
        <div class="c-history-content">
          <strong>B Language</strong>
          <p>
            Ken Thompson developed the B programming language at
            Bell Labs.
          </p>
        </div>
      </div>

      <div class="c-history-line"></div>

      <div class="c-history-item">
        <div class="c-history-year">1972</div>
        <div class="c-history-content">
          <strong>C Language</strong>
          <p>
            Dennis Ritchie developed C at Bell Labs.
          </p>
        </div>
      </div>

      <div class="c-history-line"></div>

      <div class="c-history-item">
        <div class="c-history-year">1970s</div>
        <div class="c-history-content">
          <strong>UNIX Development</strong>
          <p>
            C became closely associated with the development and
            portability of the UNIX operating system.
          </p>
        </div>
      </div>

      <div class="c-history-line"></div>

      <div class="c-history-item">
        <div class="c-history-year">1978</div>
        <div class="c-history-content">
          <strong>The C Programming Language</strong>
          <p>
            Brian Kernighan and Dennis Ritchie published the famous
            book commonly known as K&R C.
          </p>
        </div>
      </div>

      <div class="c-history-line"></div>

      <div class="c-history-item">
        <div class="c-history-year">1989</div>
        <div class="c-history-content">
          <strong>ANSI C</strong>
          <p>
            The American National Standards Institute standardized
            C, commonly referred to as ANSI C or C89.
          </p>
        </div>
      </div>

      <div class="c-history-line"></div>

      <div class="c-history-item">
        <div class="c-history-year">1990</div>
        <div class="c-history-content">
          <strong>ISO C</strong>
          <p>
            C was standardized internationally as ISO/IEC 9899:1990,
            commonly known as C90.
          </p>
        </div>
      </div>

      <div class="c-history-line"></div>

      <div class="c-history-item">
        <div class="c-history-year">1999</div>
        <div class="c-history-content">
          <strong>C99</strong>
          <p>
            The C99 standard introduced several improvements,
            including new language features and library additions.
          </p>
        </div>
      </div>

      <div class="c-history-line"></div>

      <div class="c-history-item">
        <div class="c-history-year">2011</div>
        <div class="c-history-content">
          <strong>C11</strong>
          <p>
            C11 introduced features related to concurrency,
            improved portability, and additional language support.
          </p>
        </div>
      </div>

      <div class="c-history-line"></div>

      <div class="c-history-item">
        <div class="c-history-year">2018</div>
        <div class="c-history-content">
          <strong>C17</strong>
          <p>
            C17 mainly provided corrections and clarifications
            to the C11 standard.
          </p>
        </div>
      </div>

      <div class="c-history-line"></div>

      <div class="c-history-item">
        <div class="c-history-year">2024</div>
        <div class="c-history-content">
          <strong>C23</strong>
          <p>
            C23 introduced further language improvements and
            standard-library changes as part of the continuing
            evolution of the C standard.
          </p>
        </div>
      </div>

    </div>


    <h3>3. Important People in the History of C</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Person</th>
          <th>Contribution</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Martin Richards</td>
          <td>Developed BCPL, which influenced later languages.</td>
        </tr>

        <tr>
          <td>Ken Thompson</td>
          <td>Developed the B programming language at Bell Labs.</td>
        </tr>

        <tr>
          <td>Dennis Ritchie</td>
          <td>Developed the C programming language.</td>
        </tr>

        <tr>
          <td>Brian Kernighan</td>
          <td>Co-authored the influential book "The C Programming Language".</td>
        </tr>
      </tbody>
    </table>


    <h3>4. Evolution of C</h3>

    <div class="c-evolution-flow">

      <div class="c-language-box">
        <strong>BCPL</strong>
        <span>1960s</span>
      </div>

      <div class="c-evolution-arrow">→</div>

      <div class="c-language-box">
        <strong>B</strong>
        <span>1969</span>
      </div>

      <div class="c-evolution-arrow">→</div>

      <div class="c-language-box">
        <strong>C</strong>
        <span>1972</span>
      </div>

      <div class="c-evolution-arrow">→</div>

      <div class="c-language-box">
        <strong>C89 / C90</strong>
        <span>1989–1990</span>
      </div>

      <div class="c-evolution-arrow">→</div>

      <div class="c-language-box">
        <strong>C99</strong>
        <span>1999</span>
      </div>

      <div class="c-evolution-arrow">→</div>

      <div class="c-language-box">
        <strong>C11</strong>
        <span>2011</span>
      </div>

      <div class="c-evolution-arrow">→</div>

      <div class="c-language-box">
        <strong>C17</strong>
        <span>2018</span>
      </div>

      <div class="c-evolution-arrow">→</div>

      <div class="c-language-box">
        <strong>C23</strong>
        <span>2024</span>
      </div>

    </div>


    <h3>5. C and UNIX</h3>

    <p>
      C played a major role in making the UNIX operating system
      portable across different computer systems. The combination
      of UNIX and C had a major influence on the development of
      modern system software.
    </p>

    <div class="c-unix-diagram">

      <div class="c-unix-box">
        🖥️
        <strong>UNIX</strong>
        <span>Operating System</span>
      </div>

      <div class="c-unix-arrow">↔</div>

      <div class="c-unix-box">
        💻
        <strong>C</strong>
        <span>Programming Language</span>
      </div>

      <div class="c-unix-arrow">→</div>

      <div class="c-unix-box">
        🌍
        <strong>Portability</strong>
        <span>Different Systems</span>
      </div>

    </div>


    <h3>6. C Standards</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Standard</th>
          <th>Year</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>K&R C</td>
          <td>1978</td>
          <td>Described C in the first major C programming book.</td>
        </tr>

        <tr>
          <td>C89</td>
          <td>1989</td>
          <td>First ANSI standard for C.</td>
        </tr>

        <tr>
          <td>C90</td>
          <td>1990</td>
          <td>International ISO standard based on the ANSI specification.</td>
        </tr>

        <tr>
          <td>C99</td>
          <td>1999</td>
          <td>Added several language and library improvements.</td>
        </tr>

        <tr>
          <td>C11</td>
          <td>2011</td>
          <td>Added new language features and concurrency support.</td>
        </tr>

        <tr>
          <td>C17</td>
          <td>2018</td>
          <td>Primarily corrections and clarifications to C11.</td>
        </tr>

        <tr>
          <td>C23</td>
          <td>2024</td>
          <td>Introduced further language and library improvements.</td>
        </tr>
      </tbody>
    </table>


    <h3>7. Influence of C</h3>

    <p>
      C has had a major influence on programming languages and
      software development. Many later languages adopted concepts
      and syntax that are similar to C.
    </p>

    <div class="c-influence-grid">

      <div>
        <span>➕</span>
        <strong>C++</strong>
        <p>Built upon many concepts and syntax from C.</p>
      </div>

      <div>
        <span>☕</span>
        <strong>Java</strong>
        <p>Uses a C-like syntax for many language constructs.</p>
      </div>

      <div>
        <span>🦀</span>
        <strong>Rust</strong>
        <p>Provides low-level programming capabilities with modern safety features.</p>
      </div>

      <div>
        <span>🐍</span>
        <strong>Python</strong>
        <p>Its reference implementation CPython is largely written in C.</p>
      </div>

    </div>


    <h3>8. Why C is Still Important</h3>

    <ul>
      <li>C provides direct control over memory and hardware.</li>
      <li>C is widely used in embedded systems.</li>
      <li>C is important for operating-system development.</li>
      <li>C helps students understand pointers and memory management.</li>
      <li>C is useful for learning how compilers and programs interact with hardware.</li>
      <li>C remains important in performance-critical software.</li>
    </ul>


    <h3>9. Quick History Summary</h3>

    <div class="c-history-summary">

      <div>
        <strong>1960s</strong>
        <span>BCPL</span>
      </div>

      <div>
        <strong>1969</strong>
        <span>B Language</span>
      </div>

      <div>
        <strong>1972</strong>
        <span>C Developed</span>
      </div>

      <div>
        <strong>1978</strong>
        <span>K&R C</span>
      </div>

      <div>
        <strong>1989</strong>
        <span>C89</span>
      </div>

      <div>
        <strong>1999</strong>
        <span>C99</span>
      </div>

      <div>
        <strong>2011</strong>
        <span>C11</span>
      </div>

      <div>
        <strong>2018</strong>
        <span>C17</span>
      </div>

      <div>
        <strong>2024</strong>
        <span>C23</span>
      </div>

    </div>


    <h3>10. Important Points</h3>

    <ul>
      <li>C was developed at Bell Labs.</li>
      <li>Dennis Ritchie is credited with developing C.</li>
      <li>C was influenced by BCPL and B.</li>
      <li>C became closely associated with UNIX.</li>
      <li>The first major book on C was written by Brian Kernighan and Dennis Ritchie.</li>
      <li>C was standardized by ANSI and later ISO.</li>
      <li>C continues to evolve through international standards.</li>
    </ul>
    `
  ],

  practice: [
    'Learn the history and origin of the C programming language.',
    'Create a timeline showing the major milestones in C history.',
    'Identify the contributions of Martin Richards, Ken Thompson, Dennis Ritchie, and Brian Kernighan.',
    'Explain the relationship between BCPL, B, and C.',
    'Compare C89, C99, C11, C17, and C23.',
    'Explain the importance of C in the development of UNIX.',
    'Write a short note on why C is still important today.'
  ],

  code: `#include <stdio.h>

int main() {

    printf("History of C Programming\\\\n");
    printf("------------------------\\\\n");
    printf("BCPL  -> B -> C\\\\n");
    printf("C was developed by Dennis Ritchie.\\\\n");
    printf("C was developed at Bell Labs.\\\\n");

    return 0;
}`
},
  {
  key: 'features',
  title: 'Features of C',

  description: 'C is a powerful, efficient, structured, portable, and flexible programming language. Its combination of high-level programming features and low-level memory access makes it useful for system programming and performance-critical applications.',

  theory: [
    `
    <h3>1. What are the Features of C?</h3>

    <p>
      The <strong>features of C</strong> are the characteristics that
      make C an important and widely used programming language.
      C provides a combination of simplicity, speed, portability,
      structured programming, and low-level memory access.
    </p>


    <h3>2. Major Features of C</h3>

    <div class="c-feature-main-grid">

      <div class="c-main-feature-card">
        <span>⚡</span>
        <strong>Fast and Efficient</strong>
        <p>
          C programs are compiled into machine code and can execute
          efficiently with relatively low overhead.
        </p>
      </div>

      <div class="c-main-feature-card">
        <span>🧩</span>
        <strong>Structured Programming</strong>
        <p>
          Large programs can be divided into smaller functions and
          logical blocks.
        </p>
      </div>

      <div class="c-main-feature-card">
        <span>💾</span>
        <strong>Low-Level Memory Access</strong>
        <p>
          Pointers allow programmers to work directly with memory
          addresses.
        </p>
      </div>

      <div class="c-main-feature-card">
        <span>🌍</span>
        <strong>Portable</strong>
        <p>
          Standard C programs can be adapted and compiled on many
          different platforms.
        </p>
      </div>

      <div class="c-main-feature-card">
        <span>📦</span>
        <strong>Modular</strong>
        <p>
          Functions and header files help organize programs into
          reusable components.
        </p>
      </div>

      <div class="c-main-feature-card">
        <span>🔧</span>
        <strong>Extensible</strong>
        <p>
          C programs can use libraries and can be extended with
          user-defined functions.
        </p>
      </div>

      <div class="c-main-feature-card">
        <span>🎯</span>
        <strong>Middle-Level Language</strong>
        <p>
          C provides both high-level programming constructs and
          low-level memory operations.
        </p>
      </div>

      <div class="c-main-feature-card">
        <span>🖥️</span>
        <strong>System Programming</strong>
        <p>
          C is suitable for operating systems, drivers, embedded
          systems, and other system software.
        </p>
      </div>

      <div class="c-main-feature-card">
        <span>🔀</span>
        <strong>Rich Operators</strong>
        <p>
          C provides arithmetic, relational, logical, bitwise,
          assignment, and other operators.
        </p>
      </div>

    </div>


    <h3>3. Simple and Small Language</h3>

    <p>
      C has a relatively small set of core language features.
      Its syntax is concise, which makes it suitable for learning
      fundamental programming concepts.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a = 10;
    int b = 20;

    printf("Sum = %d", a + b);

    return 0;
}</code></pre>


    <h3>4. Fast and Efficient</h3>

    <p>
      C is a compiled language. A compiler translates C source code
      into machine code, allowing the resulting program to execute
      efficiently.
    </p>

    <div class="c-speed-diagram">

      <div class="c-speed-box">
        📝
        <strong>C Source Code</strong>
      </div>

      <div class="c-speed-arrow">→</div>

      <div class="c-speed-box">
        ⚙️
        <strong>Compiler</strong>
      </div>

      <div class="c-speed-arrow">→</div>

      <div class="c-speed-box">
        💻
        <strong>Machine Code</strong>
      </div>

      <div class="c-speed-arrow">→</div>

      <div class="c-speed-box">
        ⚡
        <strong>Execution</strong>
      </div>

    </div>


    <h3>5. Structured Programming</h3>

    <p>
      C supports structured programming. A complex program can be
      divided into functions, loops, conditions, and logical blocks.
      This makes programs easier to understand and maintain.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void greet() {

    printf("Hello from C!");

}

int main() {

    greet();

    return 0;
}</code></pre>


    <h3>6. Portable Language</h3>

    <p>
      C is considered portable because standard C source code can
      often be compiled on different operating systems and hardware
      platforms with little or no modification.
    </p>

    <div class="c-portability-flow">

      <div class="c-platform-box">
        📝
        <strong>Same C Code</strong>
      </div>

      <div class="c-platform-arrow">→</div>

      <div class="c-platform-box">
        🪟
        <strong>Windows</strong>
      </div>

      <div class="c-platform-arrow">→</div>

      <div class="c-platform-box">
        🐧
        <strong>Linux</strong>
      </div>

      <div class="c-platform-arrow">→</div>

      <div class="c-platform-box">
        🍎
        <strong>macOS</strong>
      </div>

      <div class="c-platform-arrow">→</div>

      <div class="c-platform-box">
        🔌
        <strong>Embedded Systems</strong>
      </div>

    </div>


    <h3>7. Low-Level Memory Access</h3>

    <p>
      One of the most important features of C is its support for
      pointers. Pointers can store memory addresses and allow
      programmers to work directly with memory.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int number = 10;

    int *ptr = &number;

    printf("Value = %d\\n", number);
    printf("Value using pointer = %d", *ptr);

    return 0;
}</code></pre>


    <h3>8. Rich Set of Operators</h3>

    <p>
      C provides many operators that allow programmers to perform
      calculations, comparisons, logical operations, assignments,
      and bit-level operations.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator Type</th>
          <th>Examples</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arithmetic</td>
          <td>+, -, *, /, %</td>
          <td>Perform mathematical operations.</td>
        </tr>

        <tr>
          <td>Relational</td>
          <td>==, !=, &lt;, &gt;, &lt;=, &gt;=</td>
          <td>Compare values.</td>
        </tr>

        <tr>
          <td>Logical</td>
          <td>&amp;&amp;, ||, !</td>
          <td>Perform logical operations.</td>
        </tr>

        <tr>
          <td>Assignment</td>
          <td>=, +=, -=, *=</td>
          <td>Assign or update values.</td>
        </tr>

        <tr>
          <td>Bitwise</td>
          <td>&amp;, |, ^, &lt;&lt;, &gt;&gt;</td>
          <td>Perform operations on individual bits.</td>
        </tr>
      </tbody>
    </table>


    <h3>9. Modular Programming</h3>

    <p>
      C allows programs to be divided into smaller reusable functions.
      This makes large programs easier to develop and maintain.
    </p>

    <div class="c-module-diagram">

      <div class="c-module-box">
        <strong>main()</strong>
        <span>Main Program</span>
      </div>

      <div class="c-module-arrow">↓</div>

      <div class="c-module-row">

        <div class="c-module-box">
          <strong>input()</strong>
          <span>Input Module</span>
        </div>

        <div class="c-module-box">
          <strong>calculate()</strong>
          <span>Logic Module</span>
        </div>

        <div class="c-module-box">
          <strong>display()</strong>
          <span>Output Module</span>
        </div>

      </div>

    </div>


    <h3>10. Dynamic Memory Management</h3>

    <p>
      C provides functions such as <strong>malloc()</strong>,
      <strong>calloc()</strong>, <strong>realloc()</strong>, and
      <strong>free()</strong> for dynamic memory management.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {

    int *ptr;

    ptr = malloc(
        5 * sizeof(int)
    );

    if (ptr == NULL) {

        printf("Memory allocation failed.");

        return 1;
    }

    printf("Memory allocated successfully.");

    free(ptr);

    return 0;
}</code></pre>


    <h3>11. Extensive Library Support</h3>

    <p>
      C provides a standard library containing useful functions for
      input/output, strings, mathematics, memory management, and
      other common tasks.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Header File</th>
          <th>Common Use</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>stdio.h</td>
          <td>Input and output operations.</td>
        </tr>

        <tr>
          <td>stdlib.h</td>
          <td>Memory allocation and general utilities.</td>
        </tr>

        <tr>
          <td>string.h</td>
          <td>String manipulation.</td>
        </tr>

        <tr>
          <td>math.h</td>
          <td>Mathematical functions.</td>
        </tr>

        <tr>
          <td>ctype.h</td>
          <td>Character classification and conversion.</td>
        </tr>

        <tr>
          <td>time.h</td>
          <td>Date and time operations.</td>
        </tr>
      </tbody>
    </table>


    <h3>12. Recursion Support</h3>

    <p>
      C functions can call themselves. This technique is called
      <strong>recursion</strong> and is useful for solving certain
      problems such as factorial and tree traversal.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int factorial(int n) {

    if (n &lt;= 1)
        return 1;

    return n * factorial(n - 1);
}

int main() {

    printf(
        "Factorial = %d",
        factorial(5)
    );

    return 0;
}</code></pre>


    <h3>13. Extensible</h3>

    <p>
      C programs can be extended by creating user-defined functions,
      custom header files, and reusable modules.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int square(int number) {

    return number * number;

}

int main() {

    printf(
        "Square = %d",
        square(5)
    );

    return 0;
}</code></pre>


    <h3>14. Middle-Level Language</h3>

    <p>
      C is often described as a middle-level language because it
      combines high-level programming features with low-level
      capabilities such as direct memory access and bit manipulation.
    </p>

    <div class="c-middle-level">

      <div class="c-level-box">
        🧑‍💻
        <strong>High-Level Features</strong>
        <span>Functions, Loops, Conditions</span>
      </div>

      <div class="c-middle-arrow">↔</div>

      <div class="c-level-box">
        ⚙️
        <strong>C Language</strong>
        <span>Flexible Programming</span>
      </div>

      <div class="c-middle-arrow">↔</div>

      <div class="c-level-box">
        💾
        <strong>Low-Level Features</strong>
        <span>Pointers, Memory, Bits</span>
      </div>

    </div>


    <h3>15. Comparison of Important Features</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Benefit</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Fast</td>
          <td>Suitable for performance-sensitive applications.</td>
        </tr>

        <tr>
          <td>Portable</td>
          <td>Can be compiled on many platforms.</td>
        </tr>

        <tr>
          <td>Structured</td>
          <td>Makes programs easier to organize.</td>
        </tr>

        <tr>
          <td>Pointers</td>
          <td>Provides memory-level control.</td>
        </tr>

        <tr>
          <td>Modular</td>
          <td>Supports reusable functions and components.</td>
        </tr>

        <tr>
          <td>Rich Operators</td>
          <td>Supports many types of operations.</td>
        </tr>

        <tr>
          <td>Libraries</td>
          <td>Provides reusable standard functions.</td>
        </tr>

        <tr>
          <td>Dynamic Memory</td>
          <td>Allows memory to be allocated during program execution.</td>
        </tr>
      </tbody>
    </table>


    <h3>16. Where These Features Are Used</h3>

    <div class="c-usage-grid">

      <div>
        <span>🖥️</span>
        <strong>Operating Systems</strong>
      </div>

      <div>
        <span>🔌</span>
        <strong>Embedded Systems</strong>
      </div>

      <div>
        <span>🌐</span>
        <strong>Networking</strong>
      </div>

      <div>
        <span>⚙️</span>
        <strong>System Software</strong>
      </div>

      <div>
        <span>🎮</span>
        <strong>Game Engines</strong>
      </div>

      <div>
        <span>🔨</span>
        <strong>Compilers</strong>
      </div>

      <div>
        <span>🗄️</span>
        <strong>Databases</strong>
      </div>

      <div>
        <span>🤖</span>
        <strong>Hardware Control</strong>
      </div>

    </div>


    <h3>17. Important Points</h3>

    <ul>
      <li>C is fast and efficient.</li>
      <li>C supports structured and modular programming.</li>
      <li>C provides direct memory access through pointers.</li>
      <li>C supports dynamic memory allocation.</li>
      <li>C provides a rich set of operators.</li>
      <li>C has a useful standard library.</li>
      <li>C is portable across many platforms.</li>
      <li>C is suitable for system and embedded programming.</li>
      <li>C combines high-level and low-level programming capabilities.</li>
    </ul>
    `
  ],

  practice: [
    'List the major features of the C programming language.',
    'Explain why C is considered fast and efficient.',
    'Explain structured and modular programming in C.',
    'Write a program using a user-defined function.',
    'Write a simple program demonstrating pointers.',
    'Create a program using dynamic memory allocation.',
    'Identify five standard C header files and their uses.',
    'Explain why C is considered a middle-level language.',
    'Write a program demonstrating recursion.',
    'Explain how C portability is useful.'
  ],

  code: `#include <stdio.h>

int square(int number) {

    return number * number;
}

int main() {

    int number = 5;

    int *ptr = &number;

    printf("Number = %d\\\\n", number);

    printf(
        "Square = %d\\\\n",
        square(number)
    );

    printf(
        "Value using pointer = %d\\\\n",
        *ptr
    );

    return 0;
}`
},
  {
  key: 'structure',
  title: 'Structures',

  description: 'A structure in C is a user-defined data type that allows related variables of different data types to be grouped together under a single name.',

  theory: [
    `
    <h3>1. What is a Structure?</h3>

    <p>
      A <strong>structure</strong> is a user-defined data type in C
      that allows us to combine variables of different data types
      into a single unit.
    </p>

    <p>
      For example, information about a student may contain a name,
      roll number, age, and marks. These values have different data
      types, but they can be grouped together using a structure.
    </p>


    <h3>2. Why Use Structures?</h3>

    <ul>
      <li>Structures group related data together.</li>
      <li>They can contain members of different data types.</li>
      <li>They make complex data easier to organize.</li>
      <li>They are useful for representing real-world entities.</li>
      <li>Structures can be used with arrays, pointers, and functions.</li>
      <li>They are useful for creating records such as students, employees, and products.</li>
    </ul>


    <h3>3. Structure Example</h3>

    <div class="c-structure-diagram">

      <div class="c-structure-title">
        👨‍🎓 Student
      </div>

      <div class="c-structure-members">

        <div>
          <strong>name</strong>
          <span>char[]</span>
        </div>

        <div>
          <strong>rollNo</strong>
          <span>int</span>
        </div>

        <div>
          <strong>marks</strong>
          <span>float</span>
        </div>

        <div>
          <strong>grade</strong>
          <span>char</span>
        </div>

      </div>

    </div>


    <h3>4. Structure Syntax</h3>

    <p>
      A structure is declared using the <strong>struct</strong>
      keyword.
    </p>

    <pre><code>struct Student {

    char name[50];
    int rollNo;
    float marks;

};</code></pre>

    <p>
      Here, <strong>Student</strong> is the structure name and
      <strong>name</strong>, <strong>rollNo</strong>, and
      <strong>marks</strong> are its members.
    </p>


    <h3>5. Declaring Structure Variables</h3>

    <p>
      After defining a structure, we can create variables of that
      structure type.
    </p>

    <pre><code>struct Student {

    char name[50];
    int rollNo;
    float marks;

};

int main() {

    struct Student student1;

    return 0;
}</code></pre>


    <h3>6. Accessing Structure Members</h3>

    <p>
      The <strong>dot (.) operator</strong> is used to access the
      members of a structure variable.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

struct Student {

    char name[50];
    int rollNo;
    float marks;

};

int main() {

    struct Student student1;

    student1.rollNo = 101;
    student1.marks = 85.5;

    printf("Roll No: %d\\n", student1.rollNo);
    printf("Marks: %.2f", student1.marks);

    return 0;
}</code></pre>


    <h3>7. Initializing a Structure</h3>

    <p>
      Structure members can be initialized when the structure
      variable is declared.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

struct Student {

    char name[50];
    int rollNo;
    float marks;

};

int main() {

    struct Student student1 = {
        "Rahul",
        101,
        88.5
    };

    printf("Name: %s\\n", student1.name);
    printf("Roll No: %d\\n", student1.rollNo);
    printf("Marks: %.2f", student1.marks);

    return 0;
}</code></pre>


    <h3>8. Structure with Different Data Types</h3>

    <p>
      One of the main advantages of structures is that members can
      have different data types.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Member</th>
          <th>Data Type</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>name</td>
          <td>char[]</td>
          <td>"Rahul"</td>
        </tr>

        <tr>
          <td>rollNo</td>
          <td>int</td>
          <td>101</td>
        </tr>

        <tr>
          <td>marks</td>
          <td>float</td>
          <td>88.5</td>
        </tr>

        <tr>
          <td>passed</td>
          <td>int</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>


    <h3>9. Array of Structures</h3>

    <p>
      We can create an array of structures when we need to store
      information about multiple records of the same type.
    </p>

    <div class="c-structure-array">

      <div class="c-array-record">
        <strong>Student 1</strong>
        <span>Roll: 101</span>
        <span>Marks: 85</span>
      </div>

      <div class="c-array-record">
        <strong>Student 2</strong>
        <span>Roll: 102</span>
        <span>Marks: 91</span>
      </div>

      <div class="c-array-record">
        <strong>Student 3</strong>
        <span>Roll: 103</span>
        <span>Marks: 78</span>
      </div>

    </div>

    <pre><code>#include &lt;stdio.h&gt;

struct Student {

    int rollNo;
    float marks;

};

int main() {

    struct Student students[3] = {
        {101, 85.5},
        {102, 91.0},
        {103, 78.5}
    };

    for (int i = 0; i &lt; 3; i++) {

        printf(
            "Roll: %d, Marks: %.2f\\n",
            students[i].rollNo,
            students[i].marks
        );
    }

    return 0;
}</code></pre>


    <h3>10. Nested Structures</h3>

    <p>
      A structure can contain another structure as one of its
      members. This is called a <strong>nested structure</strong>.
    </p>

    <pre><code>struct Date {

    int day;
    int month;
    int year;

};

struct Student {

    char name[50];
    int rollNo;

    struct Date birthDate;

};</code></pre>

    <p>
      In this example, <strong>Date</strong> is used as a member
      inside the <strong>Student</strong> structure.
    </p>


    <h3>11. Pointer to Structure</h3>

    <p>
      A pointer can store the address of a structure variable.
      The <strong>arrow (-&gt;)</strong> operator is commonly used
      to access structure members through a pointer.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

struct Student {

    int rollNo;
    float marks;

};

int main() {

    struct Student student = {101, 90.5};

    struct Student *ptr = &student;

    printf("Roll No: %d\\n", ptr-&gt;rollNo);
    printf("Marks: %.2f", ptr-&gt;marks);

    return 0;
}</code></pre>


    <h3>12. Structure and Functions</h3>

    <p>
      Structures can be passed to functions as arguments. A function
      can receive a structure variable and work with its members.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

struct Student {

    int rollNo;
    float marks;

};

void display(struct Student s) {

    printf("Roll No: %d\\n", s.rollNo);
    printf("Marks: %.2f", s.marks);

}

int main() {

    struct Student student = {101, 87.5};

    display(student);

    return 0;
}</code></pre>


    <h3>13. Structure Pointer and Function</h3>

    <p>
      A pointer to a structure can also be passed to a function.
      This can be useful when working with larger structures because
      the function can work with the original structure.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

struct Student {

    int rollNo;
    float marks;

};

void display(struct Student *s) {

    printf("Roll No: %d\\n", s-&gt;rollNo);
    printf("Marks: %.2f", s-&gt;marks);

}

int main() {

    struct Student student = {101, 92.5};

    display(&student);

    return 0;
}</code></pre>


    <h3>14. typedef with Structure</h3>

    <p>
      The <strong>typedef</strong> keyword can be used to create a
      shorter name for a structure type.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

typedef struct {

    int rollNo;
    float marks;

} Student;

int main() {

    Student student1;

    student1.rollNo = 101;
    student1.marks = 89.5;

    printf(
        "Roll: %d, Marks: %.2f",
        student1.rollNo,
        student1.marks
    );

    return 0;
}</code></pre>


    <h3>15. Structure vs Array</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Structure</th>
          <th>Array</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Can store different data types.</td>
          <td>Normally stores elements of the same data type.</td>
        </tr>

        <tr>
          <td>Members can have different names.</td>
          <td>Elements are accessed using indexes.</td>
        </tr>

        <tr>
          <td>Useful for representing records.</td>
          <td>Useful for storing collections of similar values.</td>
        </tr>

        <tr>
          <td>Members are accessed using . or -&gt;.</td>
          <td>Elements are accessed using [index].</td>
        </tr>
      </tbody>
    </table>


    <h3>16. Real-World Example</h3>

    <p>
      Structures are useful for representing real-world objects.
      For example, an employee record may contain an ID, name,
      department, and salary.
    </p>

    <div class="c-real-structure">

      <div class="c-real-title">
        👨‍💼 Employee Record
      </div>

      <div class="c-real-members">

        <div>
          <strong>Employee ID</strong>
          <span>int</span>
        </div>

        <div>
          <strong>Name</strong>
          <span>char[]</span>
        </div>

        <div>
          <strong>Department</strong>
          <span>char[]</span>
        </div>

        <div>
          <strong>Salary</strong>
          <span>float</span>
        </div>

      </div>

    </div>


    <h3>17. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

struct Student {

    char name[50];
    int rollNo;
    float marks;

};

int main() {

    struct Student student = {
        "Rahul",
        101,
        91.5
    };

    printf("Student Information\\n");
    printf("--------------------\\n");

    printf("Name: %s\\n", student.name);
    printf("Roll No: %d\\n", student.rollNo);
    printf("Marks: %.2f\\n", student.marks);

    return 0;
}</code></pre>


    <h3>18. Important Points</h3>

    <ul>
      <li>A structure is a user-defined data type.</li>
      <li>The struct keyword is used to define a structure.</li>
      <li>A structure can contain members of different data types.</li>
      <li>The dot (.) operator accesses members of a structure variable.</li>
      <li>The arrow (-&gt;) operator accesses members through a structure pointer.</li>
      <li>An array of structures can store multiple records.</li>
      <li>Structures can contain other structures.</li>
      <li>Structures can be passed to functions.</li>
      <li>typedef can provide a shorter name for a structure type.</li>
    </ul>
    `
  ],

  practice: [
    'Create a structure named Student containing name, roll number, and marks.',
    'Initialize a structure variable and display all its members.',
    'Create an array of structures to store information about five students.',
    'Create a structure named Employee containing ID, name, department, and salary.',
    'Write a program using a nested structure.',
    'Create a pointer to a structure and access its members using the arrow operator.',
    'Pass a structure variable to a function and display its values.',
    'Use typedef to create a shorter name for a structure.',
    'Create a student record program using structures.',
    'Compare structures and arrays.'
  ],

  code: `#include <stdio.h>

struct Student {

    char name[50];
    int rollNo;
    float marks;

};

int main() {

    struct Student student = {
        "Rahul",
        101,
        91.5
    };

    struct Student *ptr = &student;

    printf("Student Information\\\\n");
    printf("--------------------\\\\n");

    printf("Name: %s\\\\n", ptr->name);
    printf("Roll No: %d\\\\n", ptr->rollNo);
    printf("Marks: %.2f\\\\n", ptr->marks);

    return 0;
}`
},
  {
  key: 'tokens',
  title: 'Tokens in C',

  description: 'Tokens are the smallest individual units of a C program that are meaningful to the compiler. Every C program is made up of different types of tokens such as keywords, identifiers, constants, strings, operators, and special symbols.',

  theory: [
    `
    <h3>1. What are Tokens?</h3>

    <p>
      A <strong>token</strong> is the smallest meaningful unit of a
      C program. When a C program is compiled, the compiler breaks
      the source code into individual tokens.
    </p>

    <p>
      For example, consider the statement:
    </p>

    <pre><code>int age = 20;</code></pre>

    <p>
      This statement contains several tokens:
      <strong>int</strong>, <strong>age</strong>, <strong>=</strong>,
      <strong>20</strong>, and <strong>;</strong>.
    </p>


    <h3>2. Types of Tokens in C</h3>

    <div class="c-token-diagram">

      <div class="c-token-center">
        🔤
        <strong>C Tokens</strong>
      </div>

      <div class="c-token-branches">

        <div class="c-token-card">
          🔑
          <strong>Keywords</strong>
          <span>int, if, return</span>
        </div>

        <div class="c-token-card">
          🏷️
          <strong>Identifiers</strong>
          <span>age, total, main</span>
        </div>

        <div class="c-token-card">
          🔢
          <strong>Constants</strong>
          <span>10, 3.14, 'A'</span>
        </div>

        <div class="c-token-card">
          📝
          <strong>Strings</strong>
          <span>"Hello"</span>
        </div>

        <div class="c-token-card">
          ➕
          <strong>Operators</strong>
          <span>+, -, =, ==</span>
        </div>

        <div class="c-token-card">
          🔣
          <strong>Special Symbols</strong>
          <span>;, (), {}, []</span>
        </div>

      </div>

    </div>


    <h3>3. Keywords</h3>

    <p>
      <strong>Keywords</strong> are reserved words in C that have
      predefined meanings. They cannot normally be used as names
      for variables, functions, or other user-defined identifiers.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Keyword</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>int</td>
          <td>Defines an integer data type.</td>
          <td>int age;</td>
        </tr>

        <tr>
          <td>float</td>
          <td>Defines a floating-point data type.</td>
          <td>float price;</td>
        </tr>

        <tr>
          <td>char</td>
          <td>Defines a character data type.</td>
          <td>char grade;</td>
        </tr>

        <tr>
          <td>if</td>
          <td>Used for conditional execution.</td>
          <td>if (age &gt; 18)</td>
        </tr>

        <tr>
          <td>else</td>
          <td>Provides an alternative branch.</td>
          <td>else</td>
        </tr>

        <tr>
          <td>for</td>
          <td>Creates a loop.</td>
          <td>for (int i = 0; i &lt; 5; i++)</td>
        </tr>

        <tr>
          <td>return</td>
          <td>Returns a value from a function.</td>
          <td>return 0;</td>
        </tr>

        <tr>
          <td>void</td>
          <td>Represents no value or return type.</td>
          <td>void display()</td>
        </tr>
      </tbody>
    </table>


    <h3>4. Identifiers</h3>

    <p>
      <strong>Identifiers</strong> are names given by programmers
      to variables, functions, arrays, structures, and other
      user-defined elements.
    </p>

    <pre><code>int age;
float salary;

void display() {
    printf("Hello");
}</code></pre>

    <p>
      Here <strong>age</strong>, <strong>salary</strong>, and
      <strong>display</strong> are identifiers.
    </p>


    <h3>5. Rules for Identifiers</h3>

    <ul>
      <li>An identifier can contain letters, digits, and underscores.</li>
      <li>An identifier cannot start with a digit.</li>
      <li>Spaces are not allowed in identifiers.</li>
      <li>Special characters are generally not allowed except underscore.</li>
      <li>Keywords cannot be used as identifiers.</li>
      <li>C identifiers are case-sensitive.</li>
    </ul>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Identifier</th>
          <th>Valid?</th>
          <th>Reason</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>studentName</td>
          <td>✓ Valid</td>
          <td>Contains letters only.</td>
        </tr>

        <tr>
          <td>student_1</td>
          <td>✓ Valid</td>
          <td>Letters, digit, and underscore are allowed.</td>
        </tr>

        <tr>
          <td>_total</td>
          <td>✓ Valid</td>
          <td>Can begin with an underscore.</td>
        </tr>

        <tr>
          <td>2number</td>
          <td>✗ Invalid</td>
          <td>Cannot start with a digit.</td>
        </tr>

        <tr>
          <td>student name</td>
          <td>✗ Invalid</td>
          <td>Spaces are not allowed.</td>
        </tr>

        <tr>
          <td>int</td>
          <td>✗ Invalid</td>
          <td>It is a keyword.</td>
        </tr>
      </tbody>
    </table>


    <h3>6. Constants</h3>

    <p>
      <strong>Constants</strong> are fixed values that do not change
      during program execution.
    </p>

    <pre><code>int age = 20;

float pi = 3.14;

char grade = 'A';</code></pre>

    <p>
      Here <strong>20</strong>, <strong>3.14</strong>, and
      <strong>'A'</strong> are constants.
    </p>


    <h3>7. Types of Constants</h3>

    <div class="c-token-type-grid">

      <div>
        🔢
        <strong>Integer</strong>
        <span>10, 25, -5</span>
      </div>

      <div>
        🔢
        <strong>Floating</strong>
        <span>3.14, 2.5</span>
      </div>

      <div>
        🔤
        <strong>Character</strong>
        <span>'A', 'b', '7'</span>
      </div>

      <div>
        📝
        <strong>String</strong>
        <span>"Hello"</span>
      </div>

    </div>


    <h3>8. String Literals</h3>

    <p>
      A <strong>string literal</strong> is a sequence of characters
      enclosed within double quotation marks.
    </p>

    <pre><code>printf("Hello World");</code></pre>

    <p>
      In this example, <strong>"Hello World"</strong> is a string
      literal.
    </p>

    <p>
      Strings in C are represented as arrays of characters and are
      terminated by a null character <strong>\\0</strong>.
    </p>


    <h3>9. Operators</h3>

    <p>
      <strong>Operators</strong> are symbols used to perform
      operations on values and variables.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator Type</th>
          <th>Operators</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arithmetic</td>
          <td>+, -, *, /, %</td>
          <td>a + b</td>
        </tr>

        <tr>
          <td>Relational</td>
          <td>==, !=, &lt;, &gt;, &lt;=, &gt;=</td>
          <td>a &gt; b</td>
        </tr>

        <tr>
          <td>Logical</td>
          <td>&amp;&amp;, ||, !</td>
          <td>a &gt; 0 &amp;&amp; b &gt; 0</td>
        </tr>

        <tr>
          <td>Assignment</td>
          <td>=, +=, -=, *=, /=</td>
          <td>a += 5</td>
        </tr>

        <tr>
          <td>Increment/Decrement</td>
          <td>++, --</td>
          <td>i++</td>
        </tr>

        <tr>
          <td>Bitwise</td>
          <td>&amp;, |, ^, &lt;&lt;, &gt;&gt;</td>
          <td>a &amp; b</td>
        </tr>
      </tbody>
    </table>


    <h3>10. Special Symbols</h3>

    <p>
      C uses various special symbols to define the structure and
      syntax of a program.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>;</td>
          <td>Semicolon</td>
          <td>Terminates a statement.</td>
        </tr>

        <tr>
          <td>()</td>
          <td>Parentheses</td>
          <td>Used in functions and expressions.</td>
        </tr>

        <tr>
          <td>{}</td>
          <td>Braces</td>
          <td>Define a block of code.</td>
        </tr>

        <tr>
          <td>[]</td>
          <td>Brackets</td>
          <td>Used with arrays.</td>
        </tr>

        <tr>
          <td>,</td>
          <td>Comma</td>
          <td>Separates items.</td>
        </tr>

        <tr>
          <td>#</td>
          <td>Hash</td>
          <td>Used in preprocessor directives.</td>
        </tr>

        <tr>
          <td>*</td>
          <td>Asterisk</td>
          <td>Used for multiplication and pointers.</td>
        </tr>

        <tr>
          <td>&amp;</td>
          <td>Ampersand</td>
          <td>Used for address-of operation and bitwise AND.</td>
        </tr>
      </tbody>
    </table>


    <h3>11. Tokenization Example</h3>

    <p>
      Consider the following statement:
    </p>

    <pre><code>int total = price + 10;</code></pre>

    <div class="c-token-breakdown">

      <div>
        <strong>int</strong>
        <span>Keyword</span>
      </div>

      <div>
        <strong>total</strong>
        <span>Identifier</span>
      </div>

      <div>
        <strong>=</strong>
        <span>Operator</span>
      </div>

      <div>
        <strong>price</strong>
        <span>Identifier</span>
      </div>

      <div>
        <strong>+</strong>
        <span>Operator</span>
      </div>

      <div>
        <strong>10</strong>
        <span>Constant</span>
      </div>

      <div>
        <strong>;</strong>
        <span>Special Symbol</span>
      </div>

    </div>


    <h3>12. Complete Token Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age = 20;

    if (age &gt;= 18) {

        printf("Adult");

    } else {

        printf("Minor");
    }

    return 0;
}</code></pre>

    <p>
      This program contains keywords, identifiers, constants,
      operators, strings, and special symbols.
    </p>


    <h3>13. Tokens in a C Program</h3>

    <div class="c-token-flow">

      <div class="c-flow-box">
        📄
        <strong>Source Code</strong>
      </div>

      <div class="c-flow-arrow">→</div>

      <div class="c-flow-box">
        🔍
        <strong>Tokenization</strong>
      </div>

      <div class="c-flow-arrow">→</div>

      <div class="c-flow-box">
        🔤
        <strong>Tokens</strong>
      </div>

      <div class="c-flow-arrow">→</div>

      <div class="c-flow-box">
        ⚙️
        <strong>Compiler</strong>
      </div>

    </div>


    <h3>14. Quick Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Token Type</th>
          <th>Examples</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Keywords</td>
          <td>int, if, else, return</td>
        </tr>

        <tr>
          <td>Identifiers</td>
          <td>age, total, main</td>
        </tr>

        <tr>
          <td>Constants</td>
          <td>10, 3.14, 'A'</td>
        </tr>

        <tr>
          <td>String Literals</td>
          <td>"Hello World"</td>
        </tr>

        <tr>
          <td>Operators</td>
          <td>+, -, =, ==, &amp;&amp;</td>
        </tr>

        <tr>
          <td>Special Symbols</td>
          <td>;, (), {}, [], ,</td>
        </tr>
      </tbody>
    </table>


    <h3>15. Important Points</h3>

    <ul>
      <li>Tokens are the smallest meaningful units of a C program.</li>
      <li>Keywords have predefined meanings.</li>
      <li>Identifiers are names created by the programmer.</li>
      <li>Constants represent fixed values.</li>
      <li>String literals are enclosed in double quotation marks.</li>
      <li>Operators perform operations on operands.</li>
      <li>Special symbols help define the syntax of a C program.</li>
      <li>The compiler analyzes tokens during compilation.</li>
    </ul>
    `
  ],

  practice: [
    'Define tokens in C.',
    'List the different types of tokens in C.',
    'Identify keywords and identifiers in a C program.',
    'Write five examples of valid identifiers.',
    'Write five examples of invalid identifiers and explain why they are invalid.',
    'Identify constants and operators from a given C statement.',
    'Explain the difference between a character constant and a string literal.',
    'Identify all tokens in the statement: int sum = a + 10;',
    'Write a small C program and identify its different types of tokens.',
    'Explain the role of special symbols in C.'
  ],

  code: `#include <stdio.h>

int main() {

    int age = 20;
    float marks = 85.5;

    if (age >= 18) {

        printf("Adult\\\\n");
        printf("Marks = %.2f\\\\n", marks);

    } else {

        printf("Minor\\\\n");
    }

    return 0;
}`
},
  {
  key: 'keywords',
  title: 'Keywords in C',

  description: 'Keywords are reserved words in the C programming language that have predefined meanings to the compiler. They are used to define data types, control program flow, declare variables, define functions, and perform other language operations.',

  theory: [
    `
    <h3>1. What are Keywords?</h3>

    <p>
      <strong>Keywords</strong> are reserved words in C that have
      special meanings defined by the language. The compiler
      recognizes these words and uses them according to their
      predefined purpose.
    </p>

    <p>
      For example, <strong>int</strong> is a keyword used to declare
      an integer variable, while <strong>return</strong> is used to
      return a value from a function.
    </p>

    <pre><code>int age = 20;

return 0;</code></pre>

    <p>
      Here <strong>int</strong> and <strong>return</strong> are
      keywords.
    </p>


    <h3>2. Important Rule</h3>

    <div class="c-keyword-rule">
      <div class="c-keyword-rule-icon">🚫</div>

      <div>
        <strong>Keywords cannot be used as normal identifiers.</strong>

        <p>
          You cannot use keywords as variable names, function names,
          or other user-defined names.
        </p>
      </div>
    </div>

    <pre><code>int int = 10;     // Invalid

int return = 5;   // Invalid</code></pre>


    <h3>3. Categories of C Keywords</h3>

    <div class="c-keyword-category-grid">

      <div class="c-keyword-category-card">
        <span>📦</span>
        <strong>Data Types</strong>
        <p>int, char, float, double, void</p>
      </div>

      <div class="c-keyword-category-card">
        <span>🔀</span>
        <strong>Control Flow</strong>
        <p>if, else, switch, case, for, while</p>
      </div>

      <div class="c-keyword-category-card">
        <span>🔁</span>
        <strong>Loop Control</strong>
        <p>for, while, do, break, continue</p>
      </div>

      <div class="c-keyword-category-card">
        <span>📋</span>
        <strong>Storage Classes</strong>
        <p>auto, static, extern, register</p>
      </div>

      <div class="c-keyword-category-card">
        <span>🎯</span>
        <strong>Type Qualifiers</strong>
        <p>const, volatile, restrict</p>
      </div>

      <div class="c-keyword-category-card">
        <span>⚙️</span>
        <strong>Functions & Return</strong>
        <p>return, inline</p>
      </div>

      <div class="c-keyword-category-card">
        <span>🧱</span>
        <strong>User Types</strong>
        <p>struct, union, enum, typedef</p>
      </div>

      <div class="c-keyword-category-card">
        <span>🔧</span>
        <strong>Other Keywords</strong>
        <p>sizeof, goto, _Bool</p>
      </div>

    </div>


    <h3>4. Common C Keywords</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Keyword</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>int</td>
          <td>Declares an integer data type.</td>
          <td>int age;</td>
        </tr>

        <tr>
          <td>char</td>
          <td>Declares a character data type.</td>
          <td>char grade;</td>
        </tr>

        <tr>
          <td>float</td>
          <td>Declares a floating-point data type.</td>
          <td>float price;</td>
        </tr>

        <tr>
          <td>double</td>
          <td>Declares a double-precision floating-point type.</td>
          <td>double value;</td>
        </tr>

        <tr>
          <td>void</td>
          <td>Represents no value or type.</td>
          <td>void display();</td>
        </tr>

        <tr>
          <td>if</td>
          <td>Executes code when a condition is true.</td>
          <td>if (age &gt; 18)</td>
        </tr>

        <tr>
          <td>else</td>
          <td>Executes an alternative block.</td>
          <td>else</td>
        </tr>

        <tr>
          <td>switch</td>
          <td>Used for multi-way selection.</td>
          <td>switch(choice)</td>
        </tr>

        <tr>
          <td>case</td>
          <td>Defines a case inside switch.</td>
          <td>case 1:</td>
        </tr>

        <tr>
          <td>default</td>
          <td>Defines the default switch case.</td>
          <td>default:</td>
        </tr>

        <tr>
          <td>for</td>
          <td>Creates a for loop.</td>
          <td>for(i = 0; i &lt; 5; i++)</td>
        </tr>

        <tr>
          <td>while</td>
          <td>Creates a while loop.</td>
          <td>while(i &lt; 5)</td>
        </tr>

        <tr>
          <td>do</td>
          <td>Starts a do-while loop.</td>
          <td>do { }</td>
        </tr>

        <tr>
          <td>break</td>
          <td>Terminates a loop or switch.</td>
          <td>break;</td>
        </tr>

        <tr>
          <td>continue</td>
          <td>Skips the current loop iteration.</td>
          <td>continue;</td>
        </tr>

        <tr>
          <td>return</td>
          <td>Returns a value from a function.</td>
          <td>return 0;</td>
        </tr>

        <tr>
          <td>struct</td>
          <td>Defines a structure.</td>
          <td>struct Student</td>
        </tr>

        <tr>
          <td>union</td>
          <td>Defines a union.</td>
          <td>union Data</td>
        </tr>

        <tr>
          <td>enum</td>
          <td>Defines an enumeration.</td>
          <td>enum Day</td>
        </tr>

        <tr>
          <td>typedef</td>
          <td>Creates an alternative name for a type.</td>
          <td>typedef int Number;</td>
        </tr>

        <tr>
          <td>sizeof</td>
          <td>Returns the size of a type or object.</td>
          <td>sizeof(int)</td>
        </tr>

      </tbody>
    </table>


    <h3>5. Data Type Keywords</h3>

    <p>
      These keywords are used to specify the type of data that a
      variable can store.
    </p>

    <div class="c-keyword-data-grid">

      <div>
        <strong>int</strong>
        <span>Integer values</span>
      </div>

      <div>
        <strong>char</strong>
        <span>Character values</span>
      </div>

      <div>
        <strong>float</strong>
        <span>Decimal values</span>
      </div>

      <div>
        <strong>double</strong>
        <span>Higher precision decimal</span>
      </div>

      <div>
        <strong>void</strong>
        <span>No value</span>
      </div>

    </div>

    <pre><code>int age = 20;

char grade = 'A';

float marks = 85.5;

double price = 1250.75;</code></pre>


    <h3>6. Conditional Keywords</h3>

    <p>
      Conditional keywords are used to make decisions in a program.
    </p>

    <pre><code>int age = 20;

if (age >= 18) {

    printf("Adult");

} else {

    printf("Minor");
}</code></pre>

    <p>
      In this program, <strong>if</strong> and <strong>else</strong>
      are keywords.
    </p>


    <h3>7. Switch Keywords</h3>

    <p>
      The <strong>switch</strong>, <strong>case</strong>, and
      <strong>default</strong> keywords are used to implement
      multi-way selection.
    </p>

    <pre><code>int choice = 2;

switch (choice) {

    case 1:
        printf("One");
        break;

    case 2:
        printf("Two");
        break;

    default:
        printf("Invalid choice");
}</code></pre>


    <h3>8. Loop Keywords</h3>

    <p>
      C provides keywords such as <strong>for</strong>,
      <strong>while</strong>, and <strong>do</strong> for creating
      loops.
    </p>

    <div class="c-keyword-loop-diagram">

      <div class="c-loop-box">
        🔄
        <strong>for</strong>
        <span>Known/repeated iterations</span>
      </div>

      <div class="c-loop-box">
        🔄
        <strong>while</strong>
        <span>Condition-based loop</span>
      </div>

      <div class="c-loop-box">
        🔄
        <strong>do</strong>
        <span>Runs at least once</span>
      </div>

    </div>

    <pre><code>for (int i = 1; i <= 5; i++) {

    printf("%d\\n", i);

}</code></pre>


    <h3>9. break and continue</h3>

    <p>
      The <strong>break</strong> keyword terminates a loop or switch,
      while <strong>continue</strong> skips the remaining statements
      of the current loop iteration.
    </p>

    <pre><code>for (int i = 1; i <= 5; i++) {

    if (i == 3) {
        continue;
    }

    printf("%d\\n", i);
}</code></pre>


    <h3>10. Storage Class Keywords</h3>

    <p>
      Storage class keywords specify properties such as scope,
      lifetime, and storage behavior of variables.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Keyword</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>auto</td>
          <td>Default storage class for local variables.</td>
        </tr>

        <tr>
          <td>static</td>
          <td>Preserves a variable's value between function calls.</td>
        </tr>

        <tr>
          <td>extern</td>
          <td>Declares a variable or function defined elsewhere.</td>
        </tr>

        <tr>
          <td>register</td>
          <td>Suggests that a variable may be stored in a CPU register.</td>
        </tr>
      </tbody>
    </table>


    <h3>11. const Keyword</h3>

    <p>
      The <strong>const</strong> keyword indicates that an object
      should not be modified through that declaration.
    </p>

    <pre><code>const int MAX = 100;

printf("%d", MAX);</code></pre>

    <p>
      Attempting to modify a const object through a compatible
      declaration is not allowed.
    </p>


    <h3>12. Structure Related Keywords</h3>

    <p>
      C provides keywords for creating user-defined data types.
    </p>

    <pre><code>struct Student {

    int rollNo;
    float marks;

};

union Data {

    int number;
    float value;

};

enum Day {

    MONDAY,
    TUESDAY,
    WEDNESDAY

};</code></pre>

    <p>
      Here <strong>struct</strong>, <strong>union</strong>, and
      <strong>enum</strong> are keywords.
    </p>


    <h3>13. typedef Keyword</h3>

    <p>
      The <strong>typedef</strong> keyword creates an alternative
      name for an existing data type.
    </p>

    <pre><code>typedef int Number;

Number age = 20;

printf("%d", age);</code></pre>


    <h3>14. sizeof Keyword</h3>

    <p>
      The <strong>sizeof</strong> operator is used to determine the
      size in bytes of a type or object.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf(
        "Size of int = %zu bytes",
        sizeof(int)
    );

    return 0;
}</code></pre>


    <h3>15. return Keyword</h3>

    <p>
      The <strong>return</strong> keyword is used to terminate a
      function and optionally send a value back to the calling code.
    </p>

    <pre><code>int add(int a, int b) {

    return a + b;
}</code></pre>


    <h3>16. Keyword vs Identifier</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Keyword</th>
          <th>Identifier</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Reserved by the C language.</td>
          <td>Defined by the programmer.</td>
        </tr>

        <tr>
          <td>Has a predefined meaning.</td>
          <td>Represents a user-defined name.</td>
        </tr>

        <tr>
          <td>Cannot normally be used as an identifier.</td>
          <td>Can be used for variables, functions, etc.</td>
        </tr>

        <tr>
          <td>Examples: int, if, return.</td>
          <td>Examples: age, total, student.</td>
        </tr>
      </tbody>
    </table>


    <h3>17. Keyword Identification Example</h3>

    <pre><code>int main() {

    int age = 20;

    if (age >= 18) {

        return 0;

    }

}</code></pre>

    <div class="c-keyword-identification">

      <div>
        <strong>int</strong>
        <span>Keyword</span>
      </div>

      <div>
        <strong>main</strong>
        <span>Identifier</span>
      </div>

      <div>
        <strong>if</strong>
        <span>Keyword</span>
      </div>

      <div>
        <strong>age</strong>
        <span>Identifier</span>
      </div>

      <div>
        <strong>20</strong>
        <span>Constant</span>
      </div>

      <div>
        <strong>return</strong>
        <span>Keyword</span>
      </div>

    </div>


    <h3>18. Important Points</h3>

    <ul>
      <li>Keywords are reserved words in C.</li>
      <li>Each keyword has a predefined meaning.</li>
      <li>Keywords cannot normally be used as variable or function names.</li>
      <li>Keywords are part of the C language syntax.</li>
      <li>int, char, float, and double are data type keywords.</li>
      <li>if, else, switch, and case are control-flow keywords.</li>
      <li>for, while, and do are loop-related keywords.</li>
      <li>struct, union, enum, and typedef are used for type definitions.</li>
      <li>const is used to indicate an object should not be modified through that declaration.</li>
      <li>return is used to return from a function.</li>
    </ul>
    `
  ],

  practice: [
    'Define keywords in C.',
    'Explain why keywords cannot be used as identifiers.',
    'List common C keywords and their purposes.',
    'Write a program using int, if, else, and return.',
    'Write a program using switch, case, break, and default.',
    'Write a program using for, while, and do-while loops.',
    'Explain the difference between keywords and identifiers.',
    'Create a structure using the struct keyword.',
    'Use typedef to create an alternative name for a data type.',
    'Use sizeof to find the size of different data types.'
  ],

  code: `#include <stdio.h>

int main() {

    int age = 20;

    if (age >= 18) {

        printf("Adult\\\\n");

    } else {

        printf("Minor\\\\n");
    }

    for (int i = 1; i <= 3; i++) {

        printf("Count = %d\\\\n", i);
    }

    return 0;
}`
},
  {
  key: 'identifiers',
  title: 'Identifiers in C',

  description: 'Identifiers are names given by programmers to variables, functions, arrays, structures, and other user-defined elements in a C program. They help identify and access different program components.',

  theory: [
    `
    <h3>1. What are Identifiers?</h3>

    <p>
      An <strong>identifier</strong> is a name used to identify
      variables, functions, arrays, structures, and other
      user-defined elements in a C program.
    </p>

    <p>
      For example:
    </p>

    <pre><code>int age = 20;
float salary = 25000.50;</code></pre>

    <p>
      Here <strong>age</strong> and <strong>salary</strong> are
      identifiers.
    </p>


    <h3>2. Why are Identifiers Used?</h3>

    <ul>
      <li>They give names to variables.</li>
      <li>They identify functions.</li>
      <li>They are used to name arrays.</li>
      <li>They are used with structures, unions, and enums.</li>
      <li>They make programs easier to understand and maintain.</li>
    </ul>


    <h3>3. Identifier Structure</h3>

    <div class="c-identifier-diagram">

      <div class="c-identifier-main">
        <strong>studentMarks</strong>
        <span>Valid Identifier</span>
      </div>

      <div class="c-identifier-parts">

        <div>
          <strong>student</strong>
          <span>Letters</span>
        </div>

        <div class="c-identifier-plus">+</div>

        <div>
          <strong>Marks</strong>
          <span>Letters</span>
        </div>

      </div>

    </div>


    <h3>4. Rules for Naming Identifiers</h3>

    <p>
      C follows specific rules when creating identifiers.
    </p>

    <ol>
      <li>An identifier can contain letters, digits, and underscores.</li>
      <li>An identifier cannot start with a digit.</li>
      <li>Spaces are not allowed in identifiers.</li>
      <li>Special characters such as @, #, $, and % are not allowed.</li>
      <li>A C keyword cannot be used as an identifier.</li>
      <li>Identifiers are case-sensitive.</li>
      <li>Identifiers should be meaningful and descriptive.</li>
    </ol>


    <h3>5. Valid Identifiers</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Identifier</th>
          <th>Status</th>
          <th>Reason</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>age</td>
          <td>✓ Valid</td>
          <td>Contains letters.</td>
        </tr>

        <tr>
          <td>student1</td>
          <td>✓ Valid</td>
          <td>Letters and digits are allowed.</td>
        </tr>

        <tr>
          <td>student_name</td>
          <td>✓ Valid</td>
          <td>Underscore is allowed.</td>
        </tr>

        <tr>
          <td>_total</td>
          <td>✓ Valid</td>
          <td>Can begin with an underscore.</td>
        </tr>

        <tr>
          <td>marks2026</td>
          <td>✓ Valid</td>
          <td>Contains letters and digits.</td>
        </tr>

        <tr>
          <td>employee_salary</td>
          <td>✓ Valid</td>
          <td>Uses letters and underscore.</td>
        </tr>

      </tbody>
    </table>


    <h3>6. Invalid Identifiers</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Identifier</th>
          <th>Status</th>
          <th>Reason</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>2student</td>
          <td>✗ Invalid</td>
          <td>Cannot start with a digit.</td>
        </tr>

        <tr>
          <td>student name</td>
          <td>✗ Invalid</td>
          <td>Spaces are not allowed.</td>
        </tr>

        <tr>
          <td>student-name</td>
          <td>✗ Invalid</td>
          <td>Hyphen is not allowed.</td>
        </tr>

        <tr>
          <td>student@name</td>
          <td>✗ Invalid</td>
          <td>@ is not allowed.</td>
        </tr>

        <tr>
          <td>float</td>
          <td>✗ Invalid</td>
          <td>float is a C keyword.</td>
        </tr>

        <tr>
          <td>total$</td>
          <td>✗ Invalid</td>
          <td>$ is not a standard C identifier character.</td>
        </tr>

      </tbody>
    </table>


    <h3>7. Identifier Character Rules</h3>

    <div class="c-identifier-rules">

      <div class="c-id-rule valid">
        <span>✓</span>
        <strong>A-Z</strong>
        <p>Uppercase letters allowed.</p>
      </div>

      <div class="c-id-rule valid">
        <span>✓</span>
        <strong>a-z</strong>
        <p>Lowercase letters allowed.</p>
      </div>

      <div class="c-id-rule valid">
        <span>✓</span>
        <strong>0-9</strong>
        <p>Digits allowed, but not as the first character.</p>
      </div>

      <div class="c-id-rule valid">
        <span>✓</span>
        <strong>_</strong>
        <p>Underscore is allowed.</p>
      </div>

      <div class="c-id-rule invalid">
        <span>✗</span>
        <strong>Space</strong>
        <p>Spaces are not allowed.</p>
      </div>

      <div class="c-id-rule invalid">
        <span>✗</span>
        <strong>@ # $ %</strong>
        <p>These special characters are not allowed.</p>
      </div>

    </div>


    <h3>8. Identifier Cannot Start with a Digit</h3>

    <p>
      An identifier may contain digits, but the first character
      cannot be a digit.
    </p>

    <pre><code>int student1 = 10;   // Valid

int 1student = 10;   // Invalid</code></pre>


    <h3>9. Underscore in Identifiers</h3>

    <p>
      The underscore character is allowed in identifiers and is
      commonly used to separate words.
    </p>

    <pre><code>int student_age;

float total_marks;

int employee_id;</code></pre>


    <h3>10. Identifiers are Case-Sensitive</h3>

    <p>
      C is a case-sensitive language. Therefore, identifiers with
      different uppercase and lowercase letters are treated as
      different names.
    </p>

    <pre><code>int age = 20;

int Age = 25;

int AGE = 30;</code></pre>

    <p>
      Here <strong>age</strong>, <strong>Age</strong>, and
      <strong>AGE</strong> are three different identifiers.
    </p>

    <div class="c-case-sensitive">

      <div>
        <strong>age</strong>
        <span>20</span>
      </div>

      <div>
        <strong>Age</strong>
        <span>25</span>
      </div>

      <div>
        <strong>AGE</strong>
        <span>30</span>
      </div>

    </div>


    <h3>11. Keywords Cannot be Identifiers</h3>

    <p>
      Reserved keywords of C cannot be used as identifiers.
    </p>

    <pre><code>int int = 10;       // Invalid

int return = 20;    // Invalid

int while = 30;     // Invalid</code></pre>

    <p>
      Instead, use meaningful names:
    </p>

    <pre><code>int number = 10;

int result = 20;

int count = 30;</code></pre>


    <h3>12. Identifiers for Variables</h3>

    <p>
      Variables are commonly given meaningful identifiers so that
      their purpose is clear.
    </p>

    <pre><code>int age;

float marks;

char grade;

double salary;</code></pre>


    <h3>13. Identifiers for Functions</h3>

    <p>
      Functions also use identifiers as their names.
    </p>

    <pre><code>void display();

int calculateSum(int a, int b);

float calculateAverage();</code></pre>

    <p>
      Here <strong>display</strong>, <strong>calculateSum</strong>,
      and <strong>calculateAverage</strong> are function identifiers.
    </p>


    <h3>14. Identifiers for Arrays</h3>

    <p>
      Arrays are also given identifiers.
    </p>

    <pre><code>int marks[5];

float prices[10];

char names[20];</code></pre>


    <h3>15. Identifiers with Structures</h3>

    <p>
      Structure names and structure variables can also use
      identifiers.
    </p>

    <pre><code>struct Student {

    int rollNo;
    float marks;

};

struct Student student1;</code></pre>

    <p>
      Here <strong>Student</strong> and <strong>student1</strong>
      are identifiers.
    </p>


    <h3>16. Meaningful Identifiers</h3>

    <p>
      It is good programming practice to use meaningful identifiers.
      This makes the program easier to read and understand.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Less Meaningful</th>
          <th>Better</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>x</td>
          <td>studentAge</td>
        </tr>

        <tr>
          <td>a</td>
          <td>totalMarks</td>
        </tr>

        <tr>
          <td>p</td>
          <td>productPrice</td>
        </tr>

        <tr>
          <td>n</td>
          <td>numberOfStudents</td>
        </tr>

      </tbody>
    </table>


    <h3>17. Naming Styles</h3>

    <p>
      Programmers commonly use different naming styles for
      multi-word identifiers.
    </p>

    <div class="c-naming-styles">

      <div>
        <strong>camelCase</strong>
        <span>studentName</span>
      </div>

      <div>
        <strong>snake_case</strong>
        <span>student_name</span>
      </div>

      <div>
        <strong>PascalCase</strong>
        <span>StudentName</span>
      </div>

    </div>

    <p>
      Choose a consistent naming style and follow it throughout
      your project.
    </p>


    <h3>18. Identifier vs Keyword</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Identifier</th>
          <th>Keyword</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Created by the programmer.</td>
          <td>Reserved by the C language.</td>
        </tr>

        <tr>
          <td>Used to name program elements.</td>
          <td>Used for predefined language operations.</td>
        </tr>

        <tr>
          <td>Can be chosen by the programmer.</td>
          <td>Cannot normally be changed.</td>
        </tr>

        <tr>
          <td>Examples: age, total, marks.</td>
          <td>Examples: int, if, return.</td>
        </tr>

      </tbody>
    </table>


    <h3>19. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int calculateSum(int firstNumber, int secondNumber) {

    int total = firstNumber + secondNumber;

    return total;
}

int main() {

    int studentAge = 20;

    int firstNumber = 10;
    int secondNumber = 20;

    int result = calculateSum(
        firstNumber,
        secondNumber
    );

    printf("Age: %d\\n", studentAge);
    printf("Sum: %d", result);

    return 0;
}</code></pre>

    <p>
      In this program, names such as
      <strong>calculateSum</strong>, <strong>firstNumber</strong>,
      <strong>secondNumber</strong>, <strong>total</strong>,
      <strong>studentAge</strong>, and <strong>result</strong>
      are identifiers.
    </p>


    <h3>20. Important Points</h3>

    <ul>
      <li>Identifiers are names given to program elements.</li>
      <li>They can contain letters, digits, and underscores.</li>
      <li>An identifier cannot start with a digit.</li>
      <li>Spaces and most special characters are not allowed.</li>
      <li>Keywords cannot be used as identifiers.</li>
      <li>C identifiers are case-sensitive.</li>
      <li>Meaningful identifiers make programs easier to understand.</li>
      <li>Identifiers can be used for variables, functions, arrays, and structures.</li>
    </ul>
    `
  ],

  practice: [
    'Define identifiers in C.',
    'Write the rules for naming identifiers.',
    'Write five valid identifiers.',
    'Write five invalid identifiers and explain why they are invalid.',
    'Explain why an identifier cannot start with a digit.',
    'Explain why C identifiers are case-sensitive.',
    'Create meaningful identifiers for student name, age, marks, and roll number.',
    'Write a program using identifiers for variables and functions.',
    'Explain the difference between a keyword and an identifier.',
    'Identify all identifiers in a given C program.'
  ],

  code: `#include <stdio.h>

int calculateSum(int firstNumber, int secondNumber) {

    int total = firstNumber + secondNumber;

    return total;
}

int main() {

    int studentAge = 20;

    int firstNumber = 10;
    int secondNumber = 20;

    int result = calculateSum(
        firstNumber,
        secondNumber
    );

    printf("Student Age: %d\\\\n", studentAge);
    printf("Sum: %d\\\\n", result);

    return 0;
}`
},
  {
  key: 'variables',
  title: 'Variables in C',

  description: 'A variable is a named memory location used to store data in a C program. The value stored in a variable can be changed during program execution.',

  theory: [
    `
    <h3>1. What is a Variable?</h3>

    <p>
      A <strong>variable</strong> is a named memory location used
      to store a value. The value of a variable can be changed
      during the execution of a program.
    </p>

    <pre><code>int age = 20;</code></pre>

    <p>
      Here, <strong>age</strong> is the variable and
      <strong>20</strong> is the value stored in it.
    </p>


    <h3>2. Variable Concept</h3>

    <div class="c-variable-diagram">

      <div class="c-variable-name">
        <strong>age</strong>
        <span>Variable Name</span>
      </div>

      <div class="c-variable-arrow">→</div>

      <div class="c-variable-memory">
        <strong>20</strong>
        <span>Stored Value</span>
      </div>

      <div class="c-variable-arrow">→</div>

      <div class="c-variable-type">
        <strong>int</strong>
        <span>Data Type</span>
      </div>

    </div>


    <h3>3. Why are Variables Used?</h3>

    <ul>
      <li>To store data in memory.</li>
      <li>To perform calculations.</li>
      <li>To store user input.</li>
      <li>To temporarily store results.</li>
      <li>To make programs dynamic and flexible.</li>
      <li>To reuse stored values at different places in a program.</li>
    </ul>


    <h3>4. Variable Declaration</h3>

    <p>
      Before using a variable, it can be declared by specifying
      its data type and name.
    </p>

    <pre><code>int age;
float marks;
char grade;
double salary;</code></pre>

    <p>
      The general syntax is:
    </p>

    <pre><code>data_type variable_name;</code></pre>


    <h3>5. Variable Initialization</h3>

    <p>
      Assigning an initial value to a variable at the time of
      declaration is called <strong>initialization</strong>.
    </p>

    <pre><code>int age = 20;

float marks = 85.5;

char grade = 'A';

double salary = 25000.75;</code></pre>


    <h3>6. Declaration and Initialization Together</h3>

    <p>
      A variable can be declared and initialized in the same
      statement.
    </p>

    <pre><code>int number = 100;</code></pre>

    <div class="c-variable-breakdown">

      <div>
        <strong>int</strong>
        <span>Data Type</span>
      </div>

      <div>
        <strong>number</strong>
        <span>Variable Name</span>
      </div>

      <div>
        <strong>=</strong>
        <span>Assignment</span>
      </div>

      <div>
        <strong>100</strong>
        <span>Initial Value</span>
      </div>

    </div>


    <h3>7. Changing the Value of a Variable</h3>

    <p>
      The value stored in a variable can be changed during program
      execution.
    </p>

    <pre><code>int age = 20;

printf("%d\\n", age);

age = 25;

printf("%d", age);</code></pre>

    <p>
      The value of <strong>age</strong> changes from
      <strong>20</strong> to <strong>25</strong>.
    </p>


    <h3>8. Multiple Variables</h3>

    <p>
      Multiple variables of the same data type can be declared
      in one statement.
    </p>

    <pre><code>int a, b, c;</code></pre>

    <p>
      They can also be initialized together:
    </p>

    <pre><code>int a = 10, b = 20, c = 30;</code></pre>


    <h3>9. Variables with Different Data Types</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Variable</th>
          <th>Example Value</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>int</td>
          <td>age</td>
          <td>20</td>
        </tr>

        <tr>
          <td>float</td>
          <td>price</td>
          <td>99.50</td>
        </tr>

        <tr>
          <td>double</td>
          <td>salary</td>
          <td>25000.75</td>
        </tr>

        <tr>
          <td>char</td>
          <td>grade</td>
          <td>'A'</td>
        </tr>

      </tbody>
    </table>


    <h3>10. Rules for Naming Variables</h3>

    <ul>
      <li>A variable name can contain letters, digits, and underscores.</li>
      <li>A variable name cannot start with a digit.</li>
      <li>Spaces are not allowed.</li>
      <li>Special characters such as @, #, $, and % are not allowed.</li>
      <li>C keywords cannot be used as variable names.</li>
      <li>Variable names are case-sensitive.</li>
      <li>Meaningful names should be preferred.</li>
    </ul>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Variable</th>
          <th>Status</th>
          <th>Reason</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>age</td>
          <td>✓ Valid</td>
          <td>Valid identifier.</td>
        </tr>

        <tr>
          <td>student_age</td>
          <td>✓ Valid</td>
          <td>Underscore is allowed.</td>
        </tr>

        <tr>
          <td>marks1</td>
          <td>✓ Valid</td>
          <td>Digits are allowed after the first character.</td>
        </tr>

        <tr>
          <td>1age</td>
          <td>✗ Invalid</td>
          <td>Cannot start with a digit.</td>
        </tr>

        <tr>
          <td>student age</td>
          <td>✗ Invalid</td>
          <td>Spaces are not allowed.</td>
        </tr>

        <tr>
          <td>float</td>
          <td>✗ Invalid</td>
          <td>It is a keyword.</td>
        </tr>

      </tbody>
    </table>


    <h3>11. Local Variables</h3>

    <p>
      A variable declared inside a function or block is called a
      <strong>local variable</strong>. It is generally accessible
      only within that function or block.
    </p>

    <pre><code>int main() {

    int age = 20;

    printf("%d", age);

    return 0;
}</code></pre>


    <h3>12. Global Variables</h3>

    <p>
      A variable declared outside all functions is called a
      <strong>global variable</strong>. It can be accessed by
      functions in the same source file according to its linkage
      and declaration.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int count = 10;

int main() {

    printf("%d", count);

    return 0;
}</code></pre>


    <h3>13. Local vs Global Variables</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Local Variable</th>
          <th>Global Variable</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Declared inside a function or block.</td>
          <td>Declared outside all functions.</td>
        </tr>

        <tr>
          <td>Normally has block scope.</td>
          <td>Can have file scope.</td>
        </tr>

        <tr>
          <td>Used for local operations.</td>
          <td>Can be shared across functions in the file.</td>
        </tr>

        <tr>
          <td>Usually exists during execution of its block.</td>
          <td>Typically exists for the entire program execution.</td>
        </tr>

      </tbody>
    </table>


    <h3>14. Variable Scope</h3>

    <p>
      <strong>Scope</strong> refers to the region of a program where
      a variable can be accessed by its name.
    </p>

    <div class="c-variable-scope">

      <div class="c-scope-global">
        <strong>Global Variable</strong>
        <span>Available according to its scope/linkage</span>

        <div class="c-scope-local">
          <strong>Local Variable</strong>
          <span>Available inside its block</span>
        </div>

      </div>

    </div>


    <h3>15. Variable Lifetime</h3>

    <p>
      The <strong>lifetime</strong> of a variable is the period
      during which the variable exists in memory.
    </p>

    <p>
      The lifetime depends on how and where the variable is declared,
      including its storage duration.
    </p>


    <h3>16. Assignment to Variables</h3>

    <p>
      The assignment operator <strong>=</strong> is used to assign
      a value to a variable.
    </p>

    <pre><code>int number;

number = 50;

number = 100;</code></pre>

    <p>
      The latest assignment changes the value of
      <strong>number</strong> to 100.
    </p>


    <h3>17. Variables in Calculations</h3>

    <p>
      Variables can be used in arithmetic expressions.
    </p>

    <pre><code>int a = 10;
int b = 20;

int sum = a + b;

printf("Sum = %d", sum);</code></pre>


    <h3>18. User Input in Variables</h3>

    <p>
      Variables are commonly used to store values entered by the
      user using <strong>scanf()</strong>.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age;

    printf("Enter your age: ");

    scanf("%d", &amp;age);

    printf("Your age is %d", age);

    return 0;
}</code></pre>

    <p>
      Here, the entered value is stored in the variable
      <strong>age</strong>.
    </p>


    <h3>19. const and Variables</h3>

    <p>
      A variable declared with <strong>const</strong> cannot be
      modified through that declaration after initialization.
    </p>

    <pre><code>const int MAX_AGE = 100;</code></pre>

    <p>
      The identifier <strong>MAX_AGE</strong> is commonly written
      in uppercase as a naming convention for constants.
    </p>


    <h3>20. Variable vs Constant</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Variable</th>
          <th>Constant</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Its value can normally be changed.</td>
          <td>Its value is intended to remain fixed.</td>
        </tr>

        <tr>
          <td>Example: int age = 20;</td>
          <td>Example: const int MAX = 100;</td>
        </tr>

        <tr>
          <td>Used for changing data.</td>
          <td>Used for values that should not be modified through that declaration.</td>
        </tr>

      </tbody>
    </table>


    <h3>21. Meaningful Variable Names</h3>

    <p>
      Good variable names make a program easier to read.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Less Meaningful</th>
          <th>Better</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>x</td>
          <td>studentAge</td>
        </tr>

        <tr>
          <td>m</td>
          <td>totalMarks</td>
        </tr>

        <tr>
          <td>p</td>
          <td>productPrice</td>
        </tr>

        <tr>
          <td>n</td>
          <td>numberOfStudents</td>
        </tr>

      </tbody>
    </table>


    <h3>22. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char studentName[50] = "Rahul";
    int studentAge = 20;
    float studentMarks = 87.5;

    printf("Student Information\\n");
    printf("--------------------\\n");

    printf("Name: %s\\n", studentName);
    printf("Age: %d\\n", studentAge);
    printf("Marks: %.2f\\n", studentMarks);

    return 0;
}</code></pre>


    <h3>23. Important Points</h3>

    <ul>
      <li>A variable is a named memory location used to store data.</li>
      <li>Every variable has a data type and a name.</li>
      <li>A variable can be declared and initialized.</li>
      <li>The value of a normal variable can be changed during execution.</li>
      <li>Variables can be local or global.</li>
      <li>Variable names follow the rules of C identifiers.</li>
      <li>C variable names are case-sensitive.</li>
      <li>Meaningful variable names improve code readability.</li>
      <li>Variables can store user input and calculation results.</li>
    </ul>
    `
  ],

  practice: [
    'Define a variable in C.',
    'Explain the difference between declaration and initialization.',
    'Declare variables of int, float, char, and double types.',
    'Write a program to initialize and display different variables.',
    'Write a program to change the value of a variable.',
    'Explain local and global variables.',
    'Write a program that takes age as input and displays it.',
    'Write a program to calculate the sum of two variables.',
    'List five valid and five invalid variable names.',
    'Explain the difference between a variable and a constant.'
  ],

  code: `#include <stdio.h>

int main() {

    char studentName[50] = "Rahul";
    int studentAge = 20;
    float studentMarks = 87.5;

    printf("Student Information\\\\n");
    printf("--------------------\\\\n");

    printf("Name: %s\\\\n", studentName);
    printf("Age: %d\\\\n", studentAge);
    printf("Marks: %.2f\\\\n", studentMarks);

    return 0;
}`
},
  {
  key: 'constants',
  title: 'Constants in C',

  description: 'Constants are fixed values in a C program that do not change during program execution. They can be numeric, character, string, or symbolic constants.',

  theory: [
    `
    <h3>1. What is a Constant?</h3>

    <p>
      A <strong>constant</strong> is a fixed value that does not
      change during the execution of a program.
    </p>

    <pre><code>const int MAX_AGE = 100;</code></pre>

    <p>
      Here, <strong>MAX_AGE</strong> represents a value that should
      not be modified through that const declaration.
    </p>


    <h3>2. Constant Concept</h3>

    <div class="c-constant-diagram">

      <div class="c-constant-box">
        <strong>MAX_AGE</strong>
        <span>Constant Name</span>
      </div>

      <div class="c-constant-lock">🔒</div>

      <div class="c-constant-box">
        <strong>100</strong>
        <span>Fixed Value</span>
      </div>

      <div class="c-constant-lock">🚫</div>

      <div class="c-constant-box">
        <strong>Cannot Modify</strong>
        <span>Through const declaration</span>
      </div>

    </div>


    <h3>3. Why are Constants Used?</h3>

    <ul>
      <li>To represent fixed values.</li>
      <li>To prevent accidental modification.</li>
      <li>To improve program readability.</li>
      <li>To make programs easier to maintain.</li>
      <li>To give meaningful names to fixed values.</li>
    </ul>


    <h3>4. Types of Constants in C</h3>

    <div class="c-constant-type-grid">

      <div>
        <span>🔢</span>
        <strong>Integer Constants</strong>
        <p>10, 25, -50</p>
      </div>

      <div>
        <span>🔣</span>
        <strong>Floating Constants</strong>
        <p>3.14, 10.5</p>
      </div>

      <div>
        <span>🔤</span>
        <strong>Character Constants</strong>
        <p>'A', 'z', '5'</p>
      </div>

      <div>
        <span>📝</span>
        <strong>String Literals</strong>
        <p>"Hello", "C"</p>
      </div>

      <div>
        <span>🏷️</span>
        <strong>Symbolic Constants</strong>
        <p>#define PI 3.14</p>
      </div>

    </div>


    <h3>5. Integer Constants</h3>

    <p>
      Integer constants are whole-number values without a decimal
      point.
    </p>

    <pre><code>10
25
100
-50
0</code></pre>

    <p>
      Example:
    </p>

    <pre><code>int age = 20;</code></pre>


    <h3>6. Floating-Point Constants</h3>

    <p>
      Floating-point constants contain a decimal point or can be
      written using scientific notation.
    </p>

    <pre><code>3.14
10.5
-25.75
1.5e3</code></pre>

    <p>
      Example:
    </p>

    <pre><code>float pi = 3.14;</code></pre>


    <h3>7. Character Constants</h3>

    <p>
      A character constant represents a single character and is
      written inside single quotes.
    </p>

    <pre><code>'A'
'B'
'z'
'5'
'@'</code></pre>

    <p>
      Example:
    </p>

    <pre><code>char grade = 'A';</code></pre>


    <h3>8. String Literals</h3>

    <p>
      A string literal is a sequence of characters enclosed in
      double quotes.
    </p>

    <pre><code>"Hello"
"Welcome to C"
"CS Learn Hub"</code></pre>

    <p>
      Example:
    </p>

    <pre><code>char message[] = "Hello";</code></pre>


    <h3>9. const Keyword</h3>

    <p>
      The <strong>const</strong> keyword is used to declare an object
      whose value should not be modified through that declaration.
    </p>

    <pre><code>const int MAX_AGE = 100;

printf("%d", MAX_AGE);</code></pre>

    <p>
      An attempt to modify the const object through that declaration
      is not allowed.
    </p>

    <pre><code>const int MAX_AGE = 100;

MAX_AGE = 200;   // Invalid</code></pre>


    <h3>10. #define Symbolic Constants</h3>

    <p>
      The preprocessor directive <strong>#define</strong> can be
      used to create a symbolic constant.
    </p>

    <pre><code>#define PI 3.14159

int main() {

    printf("%f", PI);

    return 0;
}</code></pre>

    <p>
      Here <strong>PI</strong> is a macro defined by the preprocessor.
      It is not a variable.
    </p>


    <h3>11. const vs #define</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>const</th>
          <th>#define</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Uses a C declaration.</td>
          <td>Uses a preprocessor directive.</td>
        </tr>

        <tr>
          <td>Has a data type.</td>
          <td>Macro replacement has no C data type of its own.</td>
        </tr>

        <tr>
          <td>Example: const int MAX = 100;</td>
          <td>Example: #define MAX 100</td>
        </tr>

        <tr>
          <td>Follows normal C declaration rules.</td>
          <td>Processed by the preprocessor before compilation.</td>
        </tr>

      </tbody>
    </table>


    <h3>12. Naming Constants</h3>

    <p>
      Constants are often written using uppercase letters with
      underscores between words. This is a naming convention, not
      a language requirement.
    </p>

    <pre><code>const int MAX_SIZE = 100;
const float PI_VALUE = 3.14;
const int DAYS_IN_WEEK = 7;</code></pre>


    <h3>13. Constant Rules</h3>

    <div class="c-constant-rules">

      <div>
        <span>✓</span>
        <strong>Fixed Value</strong>
        <p>Represents a value intended to remain unchanged.</p>
      </div>

      <div>
        <span>✓</span>
        <strong>Meaningful Name</strong>
        <p>Use descriptive names for readability.</p>
      </div>

      <div>
        <span>✓</span>
        <strong>Uppercase Convention</strong>
        <p>Common style for symbolic constants.</p>
      </div>

      <div>
        <span>✗</span>
        <strong>No Modification</strong>
        <p>A const object cannot be modified through that declaration.</p>
      </div>

    </div>


    <h3>14. Constants in Calculations</h3>

    <p>
      Constants can be used in mathematical calculations.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

#define PI 3.14159

int main() {

    float radius = 5.0;

    float area = PI * radius * radius;

    printf("Area = %.2f", area);

    return 0;
}</code></pre>


    <h3>15. Character Escape Sequences</h3>

    <p>
      C also provides escape sequences that represent special
      characters inside character and string literals.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Escape Sequence</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>\\n</td>
          <td>New line</td>
        </tr>

        <tr>
          <td>\\t</td>
          <td>Horizontal tab</td>
        </tr>

        <tr>
          <td>\\\\</td>
          <td>Backslash</td>
        </tr>

        <tr>
          <td>\\'</td>
          <td>Single quote</td>
        </tr>

        <tr>
          <td>\\&quot;</td>
          <td>Double quote</td>
        </tr>

      </tbody>
    </table>


    <h3>16. Constant Expressions</h3>

    <p>
      A constant expression is an expression whose value can be
      determined from constants and permitted operators.
    </p>

    <pre><code>#define WIDTH 10
#define HEIGHT 20

int area = WIDTH * HEIGHT;</code></pre>


    <h3>17. Literal vs Named Constant</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Literal</th>
          <th>Named Constant</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>100</td>
          <td>MAX_SIZE</td>
        </tr>

        <tr>
          <td>3.14</td>
          <td>PI</td>
        </tr>

        <tr>
          <td>'A'</td>
          <td>FIRST_GRADE</td>
        </tr>

      </tbody>
    </table>


    <h3>18. Variable vs Constant</h3>

    <div class="c-variable-constant-compare">

      <div class="c-compare-card">
        <span>📦</span>
        <strong>Variable</strong>
        <p>Value can normally change.</p>

        <pre><code>int age = 20;
age = 25;</code></pre>
      </div>

      <div class="c-compare-arrow">VS</div>

      <div class="c-compare-card">
        <span>🔒</span>
        <strong>Constant</strong>
        <p>Value is intended to remain fixed.</p>

        <pre><code>const int MAX = 100;</code></pre>
      </div>

    </div>


    <h3>19. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

#define PI 3.14159
#define DAYS_IN_WEEK 7

int main() {

    const int MAX_AGE = 100;

    float radius = 5.0;

    float area = PI * radius * radius;

    printf("Maximum Age: %d\\n", MAX_AGE);
    printf("Days in Week: %d\\n", DAYS_IN_WEEK);
    printf("Circle Area: %.2f\\n", area);

    return 0;
}</code></pre>


    <h3>20. Important Points</h3>

    <ul>
      <li>A constant represents a fixed value.</li>
      <li>Common constants include integer, floating-point, character, and string literals.</li>
      <li>The const keyword can be used to declare an object that should not be modified through that declaration.</li>
      <li>#define creates a preprocessor macro.</li>
      <li>Constants improve readability and maintainability.</li>
      <li>Uppercase names with underscores are commonly used as a naming convention for constants.</li>
      <li>A normal variable can usually be assigned a new value during execution.</li>
      <li>A const object cannot be modified through its const declaration.</li>
    </ul>
    `
  ],

  practice: [
    'Define a constant in C.',
    'Explain the different types of constants in C.',
    'Write examples of integer and floating-point constants.',
    'Write examples of character and string literals.',
    'Declare a constant using the const keyword.',
    'Create a symbolic constant using #define.',
    'Explain the difference between const and #define.',
    'Write a program to calculate the area of a circle using PI.',
    'Explain the difference between a variable and a constant.',
    'Write a program using multiple named constants.'
  ],

  code: `#include <stdio.h>

#define PI 3.14159
#define DAYS_IN_WEEK 7

int main() {

    const int MAX_AGE = 100;

    float radius = 5.0;
    float area = PI * radius * radius;

    printf("Maximum Age: %d\\\\n", MAX_AGE);
    printf("Days in Week: %d\\\\n", DAYS_IN_WEEK);
    printf("Circle Area: %.2f\\\\n", area);

    return 0;
}`
},
  {
  key: 'data-types',
  title: 'Data Types in C',

  description: 'Data types specify what kind of value a variable can store and help the compiler determine how that value should be represented and processed.',

  theory: [
    `
    <h3>1. What are Data Types?</h3>

    <p>
      A <strong>data type</strong> specifies the type of value that
      a variable can store. It also helps the compiler determine
      how the value is represented and what operations are allowed.
    </p>

    <pre><code>int age = 20;
float marks = 85.5;
char grade = 'A';</code></pre>

    <p>
      Here <strong>int</strong>, <strong>float</strong>, and
      <strong>char</strong> are data types.
    </p>


    <h3>2. Why are Data Types Important?</h3>

    <ul>
      <li>They specify the kind of data a variable stores.</li>
      <li>They help the compiler determine the representation of data.</li>
      <li>They determine which operations can be performed on values.</li>
      <li>They improve type checking in a program.</li>
      <li>They help organize data properly.</li>
    </ul>


    <h3>3. Classification of Data Types</h3>

    <div class="c-data-type-diagram">

      <div class="c-data-root">
        <strong>C DATA TYPES</strong>
      </div>

      <div class="c-data-branches">

        <div class="c-data-branch">
          <span>🔹</span>
          <strong>Basic</strong>
          <p>char, int, float, double</p>
        </div>

        <div class="c-data-branch">
          <span>🧩</span>
          <strong>Derived</strong>
          <p>Array, Pointer, Function</p>
        </div>

        <div class="c-data-branch">
          <span>👤</span>
          <strong>User-Defined</strong>
          <p>struct, union, enum, typedef</p>
        </div>

        <div class="c-data-branch">
          <span>⭕</span>
          <strong>Void</strong>
          <p>No value / no return type</p>
        </div>

      </div>

    </div>


    <h3>4. Basic Data Types</h3>

    <p>
      Basic data types are the fundamental types provided by C.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Common Use</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>char</td>
          <td>Character</td>
          <td>'A'</td>
        </tr>

        <tr>
          <td>int</td>
          <td>Integer</td>
          <td>100</td>
        </tr>

        <tr>
          <td>float</td>
          <td>Single-precision floating point</td>
          <td>3.14f</td>
        </tr>

        <tr>
          <td>double</td>
          <td>Double-precision floating point</td>
          <td>3.14159</td>
        </tr>

        <tr>
          <td>void</td>
          <td>No value / no type</td>
          <td>void display()</td>
        </tr>

      </tbody>
    </table>


    <h3>5. Integer Data Type - int</h3>

    <p>
      The <strong>int</strong> type is used to store integer values,
      such as positive numbers, negative numbers, and zero.
    </p>

    <pre><code>int age = 20;
int temperature = -5;
int count = 0;</code></pre>

    <div class="c-data-highlight">
      <strong>int</strong>
      <span>Used for whole-number values.</span>
    </div>


    <h3>6. Character Data Type - char</h3>

    <p>
      The <strong>char</strong> type is used to store a single
      character. Character constants are written using single
      quotes.
    </p>

    <pre><code>char grade = 'A';
char section = 'B';
char symbol = '@';</code></pre>

    <p>
      A char object stores a character value according to the
      execution character set.
    </p>


    <h3>7. Floating-Point Data Type - float</h3>

    <p>
      The <strong>float</strong> type is used for single-precision
      floating-point values.
    </p>

    <pre><code>float price = 99.50f;
float marks = 85.75f;</code></pre>

    <p>
      The suffix <strong>f</strong> can be used to make a floating
      literal have type float.
    </p>


    <h3>8. Double Data Type</h3>

    <p>
      The <strong>double</strong> type provides double-precision
      floating-point representation.
    </p>

    <pre><code>double pi = 3.141592653589793;
double salary = 25000.75;</code></pre>


    <h3>9. void Data Type</h3>

    <p>
      The <strong>void</strong> type represents the absence of a
      value or type in certain contexts. It is commonly used for
      functions that do not return a value.
    </p>

    <pre><code>void display() {

    printf("Hello C");

}</code></pre>


    <h3>10. Type Modifiers</h3>

    <p>
      C provides type specifiers such as
      <strong>short</strong>, <strong>long</strong>,
      <strong>signed</strong>, and <strong>unsigned</strong> to
      modify certain integer types.
    </p>

    <div class="c-modifier-grid">

      <div>
        <strong>short</strong>
        <span>Requests a shorter integer type.</span>
      </div>

      <div>
        <strong>long</strong>
        <span>Requests a longer integer type.</span>
      </div>

      <div>
        <strong>signed</strong>
        <span>Allows negative and non-negative values.</span>
      </div>

      <div>
        <strong>unsigned</strong>
        <span>Represents non-negative integer values.</span>
      </div>

    </div>


    <h3>11. signed and unsigned</h3>

    <p>
      The <strong>signed</strong> and <strong>unsigned</strong>
      specifiers are commonly used with integer types.
    </p>

    <pre><code>signed int temperature = -10;

unsigned int count = 100;</code></pre>

    <p>
      An unsigned integer type represents only non-negative values.
    </p>


    <h3>12. short and long</h3>

    <pre><code>short int smallNumber = 100;

long int largeNumber = 100000L;</code></pre>

    <p>
      The exact size of integer types is implementation-dependent.
      Use <strong>sizeof</strong> to determine the size on a
      particular system.
    </p>


    <h3>13. Common Data Type Size Overview</h3>

    <p>
      The size of a C data type is implementation-dependent. The
      following are common examples on modern systems, but your
      compiler/platform may use different sizes.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Common Size</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>char</td>
          <td>1 byte</td>
          <td>'A'</td>
        </tr>

        <tr>
          <td>short</td>
          <td>Often 2 bytes</td>
          <td>100</td>
        </tr>

        <tr>
          <td>int</td>
          <td>Often 4 bytes</td>
          <td>1000</td>
        </tr>

        <tr>
          <td>long</td>
          <td>Platform-dependent</td>
          <td>100000L</td>
        </tr>

        <tr>
          <td>float</td>
          <td>Often 4 bytes</td>
          <td>3.14f</td>
        </tr>

        <tr>
          <td>double</td>
          <td>Often 8 bytes</td>
          <td>3.14159</td>
        </tr>

      </tbody>
    </table>


    <h3>14. sizeof Operator</h3>

    <p>
      The <strong>sizeof</strong> operator returns the size in bytes
      of a type or object.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("char: %zu bytes\\n", sizeof(char));
    printf("int: %zu bytes\\n", sizeof(int));
    printf("float: %zu bytes\\n", sizeof(float));
    printf("double: %zu bytes\\n", sizeof(double));

    return 0;
}</code></pre>


    <h3>15. Derived Data Types</h3>

    <p>
      Derived types are formed from other types. Common examples
      include arrays, pointers, and function types.
    </p>

    <div class="c-derived-grid">

      <div>
        <span>📦</span>
        <strong>Array</strong>
        <p>Stores multiple elements of the same type.</p>
      </div>

      <div>
        <span>👉</span>
        <strong>Pointer</strong>
        <p>Stores an address of an object or function.</p>
      </div>

      <div>
        <span>⚙️</span>
        <strong>Function</strong>
        <p>Represents a function type and its return/parameter types.</p>
      </div>

    </div>


    <h3>16. Array Data Type</h3>

    <p>
      An array stores multiple elements of the same type in
      contiguous storage.
    </p>

    <pre><code>int marks[5] = {
    80, 75, 90, 85, 95
};</code></pre>

    <p>
      Here <strong>marks</strong> is an array of five integers.
    </p>


    <h3>17. Pointer Data Type</h3>

    <p>
      A pointer is an object that stores the address of another
      object or function.
    </p>

    <pre><code>int number = 10;

int *ptr = &amp;number;

printf("%d", *ptr);</code></pre>

    <p>
      Here <strong>ptr</strong> stores the address of
      <strong>number</strong>.
    </p>


    <h3>18. User-Defined Data Types</h3>

    <p>
      C allows programmers to create their own types using
      structures, unions, enumerations, and typedef declarations.
    </p>

    <div class="c-user-type-grid">

      <div>
        <strong>struct</strong>
        <p>Groups related members.</p>
      </div>

      <div>
        <strong>union</strong>
        <p>Members share the same storage.</p>
      </div>

      <div>
        <strong>enum</strong>
        <p>Defines named integer constants.</p>
      </div>

      <div>
        <strong>typedef</strong>
        <p>Creates an alias for an existing type.</p>
      </div>

    </div>


    <h3>19. Structure</h3>

    <pre><code>struct Student {

    int rollNo;
    float marks;

};

struct Student student1;</code></pre>


    <h3>20. Union</h3>

    <p>
      In a union, all members share the same memory location, so
      only one member's stored value is meaningfully used at a time.
    </p>

    <pre><code>union Data {

    int number;
    float value;

};

union Data data;</code></pre>


    <h3>21. Enumeration</h3>

    <p>
      An enumeration defines named integer constants.
    </p>

    <pre><code>enum Day {

    MONDAY,
    TUESDAY,
    WEDNESDAY

};

enum Day today = TUESDAY;</code></pre>


    <h3>22. typedef</h3>

    <p>
      The <strong>typedef</strong> keyword creates an alias for an
      existing type.
    </p>

    <pre><code>typedef unsigned int uint;

uint count = 100;</code></pre>


    <h3>23. Format Specifiers</h3>

    <p>
      Format specifiers are used with functions such as
      <strong>printf()</strong> and <strong>scanf()</strong> to
      represent values of particular types.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Common printf Specifier</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>int</td>
          <td>%d</td>
          <td>printf("%d", age);</td>
        </tr>

        <tr>
          <td>unsigned int</td>
          <td>%u</td>
          <td>printf("%u", count);</td>
        </tr>

        <tr>
          <td>float</td>
          <td>%f</td>
          <td>printf("%f", marks);</td>
        </tr>

        <tr>
          <td>double</td>
          <td>%f</td>
          <td>printf("%f", value);</td>
        </tr>

        <tr>
          <td>char</td>
          <td>%c</td>
          <td>printf("%c", grade);</td>
        </tr>

        <tr>
          <td>string</td>
          <td>%s</td>
          <td>printf("%s", name);</td>
        </tr>

      </tbody>
    </table>


    <h3>24. Choosing the Right Data Type</h3>

    <div class="c-type-choice">

      <div>
        <span>🔢</span>
        <strong>Whole Number</strong>
        <p>Use int or another suitable integer type.</p>
      </div>

      <div>
        <span>🔤</span>
        <strong>Single Character</strong>
        <p>Use char.</p>
      </div>

      <div>
        <span>📐</span>
        <strong>Decimal Value</strong>
        <p>Use float or double.</p>
      </div>

      <div>
        <span>📝</span>
        <strong>Text</strong>
        <p>Use a character array.</p>
      </div>

    </div>


    <h3>25. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age = 20;
    float marks = 87.5f;
    double salary = 25000.75;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Marks: %.2f\\n", marks);
    printf("Salary: %.2f\\n", salary);
    printf("Grade: %c\\n", grade);

    printf("\\nData Type Sizes:\\n");
    printf("int: %zu bytes\\n", sizeof(int));
    printf("float: %zu bytes\\n", sizeof(float));
    printf("double: %zu bytes\\n", sizeof(double));
    printf("char: %zu byte\\n", sizeof(char));

    return 0;
}</code></pre>


    <h3>26. Important Points</h3>

    <ul>
      <li>Data types specify the kind of value a variable can store.</li>
      <li>Common basic types include char, int, float, and double.</li>
      <li>void represents the absence of a value or type in certain contexts.</li>
      <li>short, long, signed, and unsigned can modify certain integer types.</li>
      <li>Arrays, pointers, and functions are derived types.</li>
      <li>struct, union, enum, and typedef are used to define or name types.</li>
      <li>The size of a type is implementation-dependent.</li>
      <li>sizeof can be used to determine the size on a particular system.</li>
      <li>Format specifiers are used with formatted input/output functions.</li>
    </ul>
    `
  ],

  practice: [
    'Define data types in C.',
    'Explain the classification of C data types.',
    'Explain int, char, float, double, and void with examples.',
    'Explain signed, unsigned, short, and long.',
    'Write a program to display the size of different data types using sizeof.',
    'Explain arrays, pointers, and functions as derived types.',
    'Create a structure using struct.',
    'Create an enumeration using enum.',
    'Create a type alias using typedef.',
    'Write a program using int, float, double, and char variables.'
  ],

  code: `#include <stdio.h>

int main() {

    int age = 20;
    float marks = 87.5f;
    double salary = 25000.75;
    char grade = 'A';

    printf("Age: %d\\\\n", age);
    printf("Marks: %.2f\\\\n", marks);
    printf("Salary: %.2f\\\\n", salary);
    printf("Grade: %c\\\\n", grade);

    printf("\\\\nData Type Sizes:\\\\n");
    printf("int: %zu bytes\\\\n", sizeof(int));
    printf("float: %zu bytes\\\\n", sizeof(float));
    printf("double: %zu bytes\\\\n", sizeof(double));
    printf("char: %zu byte\\\\n", sizeof(char));

    return 0;
}`
},
  {
  key: 'type-modifiers',
  title: 'Type Modifiers in C',

  description: 'Type modifiers are keywords used to modify the properties of certain basic data types, especially integer and floating-point types. Common modifiers include signed, unsigned, short, and long.',

  theory: [
    `
    <h3>1. What are Type Modifiers?</h3>

    <p>
      <strong>Type modifiers</strong> are keywords that modify the
      properties of certain data types in C. They are mainly used
      with integer types and floating-point types.
    </p>

    <p>
      The main type modifiers in C are:
    </p>

    <div class="c-modifier-main-grid">

      <div>
        <strong>signed</strong>
        <span>Allows negative and non-negative values.</span>
      </div>

      <div>
        <strong>unsigned</strong>
        <span>Represents non-negative integer values.</span>
      </div>

      <div>
        <strong>short</strong>
        <span>Specifies a short integer type.</span>
      </div>

      <div>
        <strong>long</strong>
        <span>Specifies a long integer or floating type.</span>
      </div>

    </div>


    <h3>2. Why are Type Modifiers Used?</h3>

    <ul>
      <li>To control the range of integer values.</li>
      <li>To choose suitable integer types for a program.</li>
      <li>To represent only non-negative integer values using unsigned types.</li>
      <li>To use extended integer types such as long long.</li>
      <li>To specify long double for extended floating-point precision.</li>
    </ul>


    <h3>3. Type Modifier Concept</h3>

    <div class="c-modifier-flow">

      <div class="c-modifier-type-box">
        <strong>int</strong>
        <span>Base Type</span>
      </div>

      <div class="c-modifier-arrow">+</div>

      <div class="c-modifier-type-box">
        <strong>Modifier</strong>
        <span>signed / unsigned / short / long</span>
      </div>

      <div class="c-modifier-arrow">=</div>

      <div class="c-modifier-result-box">
        <strong>Modified Type</strong>
        <span>unsigned int / long int / short int</span>
      </div>

    </div>


    <h3>4. signed Modifier</h3>

    <p>
      The <strong>signed</strong> modifier is used with integer types
      when both negative and non-negative values are required.
    </p>

    <pre><code>signed int temperature = -10;
signed int number = 50;</code></pre>

    <p>
      For integer types, <strong>signed</strong> is generally the
      default when neither signed nor unsigned is specified.
    </p>

    <pre><code>int age = 20;

/* Equivalent in this context */
signed int age = 20;</code></pre>


    <h3>5. unsigned Modifier</h3>

    <p>
      The <strong>unsigned</strong> modifier is used with integer
      types when only non-negative values are required.
    </p>

    <pre><code>unsigned int count = 100;
unsigned int students = 500;</code></pre>

    <p>
      Since unsigned integer types do not represent negative values,
      they can use their available representation for non-negative
      values.
    </p>


    <h3>6. signed vs unsigned</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>signed</th>
          <th>unsigned</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Can represent negative values.</td>
          <td>Represents non-negative values.</td>
        </tr>

        <tr>
          <td>Example: signed int temperature = -5;</td>
          <td>Example: unsigned int count = 100;</td>
        </tr>

        <tr>
          <td>Suitable for values that may be negative.</td>
          <td>Suitable for counts and other non-negative values.</td>
        </tr>

      </tbody>
    </table>


    <h3>7. short Modifier</h3>

    <p>
      The <strong>short</strong> modifier specifies a short integer
      type. Its minimum range is defined by the C standard, while
      the exact size is implementation-dependent.
    </p>

    <pre><code>short int number = 1000;</code></pre>

    <p>
      The keyword <strong>int</strong> may be omitted:
    </p>

    <pre><code>short number = 1000;</code></pre>


    <h3>8. long Modifier</h3>

    <p>
      The <strong>long</strong> modifier specifies a long integer
      type. It can also be used with double to create
      <strong>long double</strong>.
    </p>

    <pre><code>long int population = 1000000L;

long double value = 3.141592653589793238L;</code></pre>

    <p>
      The <strong>int</strong> keyword can be omitted in a long
      integer declaration.
    </p>

    <pre><code>long population = 1000000L;</code></pre>


    <h3>9. long long Modifier</h3>

    <p>
      The <strong>long long</strong> type provides an integer type
      capable of representing a range at least as wide as long.
    </p>

    <pre><code>long long population = 9000000000LL;</code></pre>

    <p>
      It is useful when an <strong>int</strong> does not provide
      enough range for the required values.
    </p>


    <h3>10. long double</h3>

    <p>
      The <strong>long double</strong> type provides extended
      floating-point precision where supported by the implementation.
    </p>

    <pre><code>long double pi = 3.141592653589793238L;</code></pre>

    <p>
      The exact precision and size of long double depend on the
      compiler and platform.
    </p>


    <h3>11. Common Combinations</h3>

    <div class="c-modifier-combination-grid">

      <div>
        <strong>short int</strong>
        <span>Short integer type</span>
      </div>

      <div>
        <strong>unsigned int</strong>
        <span>Non-negative integer type</span>
      </div>

      <div>
        <strong>long int</strong>
        <span>Long integer type</span>
      </div>

      <div>
        <strong>long long int</strong>
        <span>Extended integer type</span>
      </div>

      <div>
        <strong>unsigned long</strong>
        <span>Non-negative long integer</span>
      </div>

      <div>
        <strong>unsigned long long</strong>
        <span>Non-negative extended integer</span>
      </div>

      <div>
        <strong>long double</strong>
        <span>Extended floating-point type</span>
      </div>

    </div>


    <h3>12. Type Modifier Combinations</h3>

    <pre><code>short int a;
unsigned int b;
long int c;
long long int d;

unsigned long int e;
unsigned long long int f;

long double g;</code></pre>


    <h3>13. Typical Integer Size Overview</h3>

    <p>
      Exact sizes are implementation-dependent. The following
      values are common on modern systems.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Common Size</th>
          <th>Typical Use</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>short int</td>
          <td>Often 2 bytes</td>
          <td>Smaller integer values</td>
        </tr>

        <tr>
          <td>int</td>
          <td>Often 4 bytes</td>
          <td>General integer values</td>
        </tr>

        <tr>
          <td>long int</td>
          <td>Platform-dependent</td>
          <td>Larger integer values</td>
        </tr>

        <tr>
          <td>long long int</td>
          <td>Often 8 bytes</td>
          <td>Very large integer values</td>
        </tr>

      </tbody>
    </table>


    <h3>14. unsigned Integer Range</h3>

    <p>
      An unsigned integer type represents only non-negative values.
      For a type with N value bits, the range is:
    </p>

    <div class="c-range-box">

      <strong>0 to 2<sup>N</sup> − 1</strong>

      <span>
        N = number of value bits
      </span>

    </div>

    <p>
      For example, if an unsigned integer type has 32 value bits,
      its range is:
    </p>

    <pre><code>0 to 4,294,967,295</code></pre>


    <h3>15. Signed Integer Range</h3>

    <p>
      For a common two's-complement signed integer representation
      with N value bits, the range is:
    </p>

    <div class="c-range-box">

      <strong>
        −2<sup>N−1</sup> to 2<sup>N−1</sup> − 1
      </strong>

    </div>

    <p>
      The exact representation and range should be determined from
      the implementation and the type's limits.
    </p>


    <h3>16. Using sizeof()</h3>

    <p>
      The <strong>sizeof</strong> operator can be used to find the
      size of a type on your system.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("short: %zu bytes\\n", sizeof(short));
    printf("int: %zu bytes\\n", sizeof(int));
    printf("long: %zu bytes\\n", sizeof(long));
    printf("long long: %zu bytes\\n", sizeof(long long));
    printf("long double: %zu bytes\\n", sizeof(long double));

    return 0;
}</code></pre>


    <h3>17. Format Specifiers</h3>

    <p>
      Different modified types use different format specifiers with
      formatted input/output functions.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>printf()</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>short</td>
          <td>%hd</td>
          <td>printf("%hd", value);</td>
        </tr>

        <tr>
          <td>unsigned int</td>
          <td>%u</td>
          <td>printf("%u", value);</td>
        </tr>

        <tr>
          <td>long</td>
          <td>%ld</td>
          <td>printf("%ld", value);</td>
        </tr>

        <tr>
          <td>unsigned long</td>
          <td>%lu</td>
          <td>printf("%lu", value);</td>
        </tr>

        <tr>
          <td>long long</td>
          <td>%lld</td>
          <td>printf("%lld", value);</td>
        </tr>

        <tr>
          <td>unsigned long long</td>
          <td>%llu</td>
          <td>printf("%llu", value);</td>
        </tr>

        <tr>
          <td>long double</td>
          <td>%Lf</td>
          <td>printf("%Lf", value);</td>
        </tr>

      </tbody>
    </table>


    <h3>18. Type Modifiers and Memory</h3>

    <div class="c-memory-flow">

      <div class="c-memory-card">
        <strong>short</strong>
        <span>Often smaller integer storage</span>
      </div>

      <div class="c-memory-card">
        <strong>int</strong>
        <span>General-purpose integer</span>
      </div>

      <div class="c-memory-card">
        <strong>long</strong>
        <span>At least as wide as int</span>
      </div>

      <div class="c-memory-card">
        <strong>long long</strong>
        <span>At least as wide as long</span>
      </div>

    </div>


    <h3>19. Example with signed and unsigned</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    signed int temperature = -10;
    unsigned int students = 500;

    printf("Temperature: %d\\n", temperature);
    printf("Students: %u\\n", students);

    return 0;
}</code></pre>


    <h3>20. Example with short and long</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    short int smallNumber = 1000;
    long int largeNumber = 1000000L;
    long long int veryLargeNumber = 9000000000LL;

    printf("Short: %hd\\n", smallNumber);
    printf("Long: %ld\\n", largeNumber);
    printf("Long Long: %lld\\n", veryLargeNumber);

    return 0;
}</code></pre>


    <h3>21. Example with long double</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    long double value =
        3.141592653589793238L;

    printf("Value: %.18Lf\\n", value);

    return 0;
}</code></pre>


    <h3>22. Choosing the Appropriate Modifier</h3>

    <div class="c-modifier-choice">

      <div>
        <span>➖</span>
        <strong>Negative Values Needed?</strong>
        <p>Use a signed integer type.</p>
      </div>

      <div>
        <span>➕</span>
        <strong>Only Non-Negative?</strong>
        <p>Consider an unsigned integer type.</p>
      </div>

      <div>
        <span>📦</span>
        <strong>Smaller Range?</strong>
        <p>Consider short where appropriate.</p>
      </div>

      <div>
        <span>📈</span>
        <strong>Larger Range?</strong>
        <p>Consider long or long long.</p>
      </div>

    </div>


    <h3>23. Important Difference</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Modifier</th>
          <th>Main Purpose</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>signed</td>
          <td>Allows negative and non-negative integer values.</td>
        </tr>

        <tr>
          <td>unsigned</td>
          <td>Represents non-negative integer values.</td>
        </tr>

        <tr>
          <td>short</td>
          <td>Specifies a short integer type.</td>
        </tr>

        <tr>
          <td>long</td>
          <td>Specifies a long integer or long double type.</td>
        </tr>

      </tbody>
    </table>


    <h3>24. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    signed int temperature = -15;

    unsigned int students = 500;

    short int roomNumber = 120;

    long int population = 1000000L;

    long long int worldPopulation =
        8000000000LL;

    long double pi =
        3.141592653589793238L;

    printf("Temperature: %d\\n", temperature);
    printf("Students: %u\\n", students);
    printf("Room Number: %hd\\n", roomNumber);
    printf("Population: %ld\\n", population);
    printf("World Population: %lld\\n", worldPopulation);
    printf("PI: %.18Lf\\n", pi);

    return 0;
}</code></pre>


    <h3>25. Important Points</h3>

    <ul>
      <li>Type modifiers modify certain C data types.</li>
      <li>The main modifiers are signed, unsigned, short, and long.</li>
      <li>signed integer types can represent negative values.</li>
      <li>unsigned integer types represent non-negative values.</li>
      <li>short specifies a short integer type.</li>
      <li>long specifies a long integer type or can modify double to form long double.</li>
      <li>long long provides an extended integer type.</li>
      <li>The exact size of types is implementation-dependent.</li>
      <li>sizeof() can be used to check type size on a particular system.</li>
      <li>Format specifiers must match the type expected by formatted I/O functions.</li>
    </ul>
    `
  ],

  practice: [
    'What are type modifiers in C?',
    'Explain signed and unsigned with examples.',
    'Explain short and long with examples.',
    'What is long long and when is it useful?',
    'Explain long double.',
    'Write a program to display the size of short, int, long, and long long.',
    'Write a program using signed and unsigned integers.',
    'Write a program using short, long, and long long.',
    'Explain the difference between signed and unsigned integer types.',
    'Explain why the exact size of C data types is implementation-dependent.'
  ],

  code: `#include <stdio.h>

int main() {

    signed int temperature = -15;
    unsigned int students = 500;
    short int roomNumber = 120;
    long int population = 1000000L;
    long long int worldPopulation = 8000000000LL;
    long double pi = 3.141592653589793238L;

    printf("Temperature: %d\\\\n", temperature);
    printf("Students: %u\\\\n", students);
    printf("Room Number: %hd\\\\n", roomNumber);
    printf("Population: %ld\\\\n", population);
    printf("World Population: %lld\\\\n", worldPopulation);
    printf("PI: %.18Lf\\\\n", pi);

    return 0;
}`
},
 {
  key: 'operators',
  title: 'Operators in C',

  description: 'Operators are symbols used to perform operations on values and variables. C provides arithmetic, relational, logical, assignment, bitwise, conditional, and other operators.',

  theory: [
    `
    <h3>1. What are Operators?</h3>

    <p>
      An <strong>operator</strong> is a symbol that tells the compiler
      to perform a specific operation on one or more operands.
    </p>

    <pre><code>int sum = a + b;</code></pre>

    <p>
      Here <strong>+</strong> is the operator and
      <strong>a</strong> and <strong>b</strong> are operands.
    </p>


    <h3>2. Classification of Operators</h3>

    <div class="c-operator-diagram">

      <div class="c-operator-root">
        <strong>C OPERATORS</strong>
      </div>

      <div class="c-operator-grid">

        <div>
          <span>➕</span>
          <strong>Arithmetic</strong>
          <p>+, -, *, /, %</p>
        </div>

        <div>
          <span>🔍</span>
          <strong>Relational</strong>
          <p>==, !=, &gt;, &lt;, &gt;=, &lt;=</p>
        </div>

        <div>
          <span>🧠</span>
          <strong>Logical</strong>
          <p>&amp;&amp;, ||, !</p>
        </div>

        <div>
          <span>📝</span>
          <strong>Assignment</strong>
          <p>=, +=, -=, *=, /=</p>
        </div>

        <div>
          <span>⬆️</span>
          <strong>Increment / Decrement</strong>
          <p>++, --</p>
        </div>

        <div>
          <span>⚙️</span>
          <strong>Bitwise</strong>
          <p>&amp;, |, ^, ~, &lt;&lt;, &gt;&gt;</p>
        </div>

        <div>
          <span>❓</span>
          <strong>Conditional</strong>
          <p>? :</p>
        </div>

        <div>
          <span>🔧</span>
          <strong>Special</strong>
          <p>sizeof, &, *, comma, . , -&gt;</p>
        </div>

      </div>

    </div>


    <h3>3. Arithmetic Operators</h3>

    <p>
      Arithmetic operators are used to perform mathematical
      calculations.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Name</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>+</td>
          <td>Addition</td>
          <td>a + b</td>
        </tr>

        <tr>
          <td>-</td>
          <td>Subtraction</td>
          <td>a - b</td>
        </tr>

        <tr>
          <td>*</td>
          <td>Multiplication</td>
          <td>a * b</td>
        </tr>

        <tr>
          <td>/</td>
          <td>Division</td>
          <td>a / b</td>
        </tr>

        <tr>
          <td>%</td>
          <td>Remainder</td>
          <td>a % b</td>
        </tr>

      </tbody>
    </table>


    <h3>4. Addition Operator (+)</h3>

    <pre><code>int a = 10;
int b = 5;

int result = a + b;

printf("%d", result);</code></pre>

    <p>
      Output:
    </p>

    <pre><code>15</code></pre>


    <h3>5. Subtraction Operator (-)</h3>

    <pre><code>int a = 10;
int b = 5;

int result = a - b;

printf("%d", result);</code></pre>

    <p>
      Output:
    </p>

    <pre><code>5</code></pre>


    <h3>6. Multiplication Operator (*)</h3>

    <pre><code>int a = 10;
int b = 5;

int result = a * b;

printf("%d", result);</code></pre>

    <p>
      Output:
    </p>

    <pre><code>50</code></pre>


    <h3>7. Division Operator (/)</h3>

    <pre><code>int a = 10;
int b = 2;

int result = a / b;

printf("%d", result);</code></pre>

    <p>
      When both operands are integers, integer division is performed.
    </p>

    <pre><code>printf("%d", 7 / 2);</code></pre>

    <p>
      Output:
    </p>

    <pre><code>3</code></pre>


    <h3>8. Modulus Operator (%)</h3>

    <p>
      The modulus operator returns the remainder of integer division.
    </p>

    <pre><code>int result = 17 % 5;

printf("%d", result);</code></pre>

    <p>
      Output:
    </p>

    <pre><code>2</code></pre>


    <h3>9. Relational Operators</h3>

    <p>
      Relational operators compare two values. In C, a comparison
      evaluates to <strong>0</strong> when false and
      <strong>1</strong> when true.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>==</td>
          <td>Equal to</td>
        </tr>

        <tr>
          <td>!=</td>
          <td>Not equal to</td>
        </tr>

        <tr>
          <td>&gt;</td>
          <td>Greater than</td>
        </tr>

        <tr>
          <td>&lt;</td>
          <td>Less than</td>
        </tr>

        <tr>
          <td>&gt;=</td>
          <td>Greater than or equal to</td>
        </tr>

        <tr>
          <td>&lt;=</td>
          <td>Less than or equal to</td>
        </tr>

      </tbody>
    </table>


    <h3>10. Relational Operator Example</h3>

    <pre><code>int a = 10;
int b = 20;

printf("%d\\n", a &lt; b);
printf("%d\\n", a == b);
printf("%d\\n", a != b);</code></pre>

    <p>
      Output:
    </p>

    <pre><code>1
0
1</code></pre>


    <h3>11. Logical Operators</h3>

    <p>
      Logical operators are used to combine or negate conditions.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Name</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>&amp;&amp;</td>
          <td>Logical AND</td>
          <td>True when both operands are true.</td>
        </tr>

        <tr>
          <td>||</td>
          <td>Logical OR</td>
          <td>True when at least one operand is true.</td>
        </tr>

        <tr>
          <td>!</td>
          <td>Logical NOT</td>
          <td>Reverses the truth value.</td>
        </tr>

      </tbody>
    </table>


    <h3>12. Logical AND (&&)</h3>

    <pre><code>int age = 20;

if (age &gt;= 18 &amp;&amp; age &lt;= 60) {
    printf("Eligible");
}</code></pre>

    <p>
      Both conditions must be true for the complete expression
      to evaluate as true.
    </p>


    <h3>13. Logical OR (||)</h3>

    <pre><code>int day = 7;

if (day == 6 || day == 7) {
    printf("Weekend");
}</code></pre>

    <p>
      The condition is true when at least one condition is true.
    </p>


    <h3>14. Logical NOT (!)</h3>

    <pre><code>int value = 0;

if (!value) {
    printf("Value is false");
}</code></pre>

    <p>
      The logical NOT operator reverses the truth value of its
      operand.
    </p>


    <h3>15. Assignment Operators</h3>

    <p>
      Assignment operators are used to assign values to variables.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Example</th>
          <th>Equivalent</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>=</td>
          <td>a = 10</td>
          <td>Assign 10 to a</td>
        </tr>

        <tr>
          <td>+=</td>
          <td>a += 5</td>
          <td>a = a + 5</td>
        </tr>

        <tr>
          <td>-=</td>
          <td>a -= 5</td>
          <td>a = a - 5</td>
        </tr>

        <tr>
          <td>*=</td>
          <td>a *= 5</td>
          <td>a = a * 5</td>
        </tr>

        <tr>
          <td>/=</td>
          <td>a /= 5</td>
          <td>a = a / 5</td>
        </tr>

        <tr>
          <td>%=</td>
          <td>a %= 5</td>
          <td>a = a % 5</td>
        </tr>

      </tbody>
    </table>


    <h3>16. Increment Operator (++)</h3>

    <p>
      The increment operator increases the value of an object by one.
    </p>

    <pre><code>int count = 5;

count++;

printf("%d", count);</code></pre>

    <p>
      Output:
    </p>

    <pre><code>6</code></pre>


    <h3>17. Decrement Operator (--)</h3>

    <p>
      The decrement operator decreases the value of an object by one.
    </p>

    <pre><code>int count = 5;

count--;

printf("%d", count);</code></pre>

    <p>
      Output:
    </p>

    <pre><code>4</code></pre>


    <h3>18. Prefix and Postfix</h3>

    <p>
      Increment and decrement operators can be used in prefix or
      postfix form.
    </p>

    <pre><code>int a = 5;

int x = ++a;

printf("a = %d\\n", a);
printf("x = %d\\n", x);</code></pre>

    <p>
      Prefix increment changes the value first and then produces
      the resulting value.
    </p>

    <pre><code>int b = 5;

int y = b++;

printf("b = %d\\n", b);
printf("y = %d\\n", y);</code></pre>

    <p>
      Postfix increment produces the old value first and then
      increments the object.
    </p>


    <h3>19. Bitwise Operators</h3>

    <p>
      Bitwise operators work on the individual bits of integer
      operands.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>&amp;</td>
          <td>Bitwise AND</td>
        </tr>

        <tr>
          <td>|</td>
          <td>Bitwise OR</td>
        </tr>

        <tr>
          <td>^</td>
          <td>Bitwise XOR</td>
        </tr>

        <tr>
          <td>~</td>
          <td>Bitwise NOT</td>
        </tr>

        <tr>
          <td>&lt;&lt;</td>
          <td>Left Shift</td>
        </tr>

        <tr>
          <td>&gt;&gt;</td>
          <td>Right Shift</td>
        </tr>

      </tbody>
    </table>


    <h3>20. Bitwise AND (&)</h3>

    <pre><code>int a = 5;
int b = 3;

int result = a &amp; b;

printf("%d", result);</code></pre>

    <p>
      Binary representation:
    </p>

    <pre><code>5 = 101
3 = 011
---------
    001 = 1</code></pre>


    <h3>21. Bitwise OR (|)</h3>

    <pre><code>int a = 5;
int b = 3;

int result = a | b;

printf("%d", result);</code></pre>

    <p>
      Binary representation:
    </p>

    <pre><code>5 = 101
3 = 011
---------
    111 = 7</code></pre>


    <h3>22. Bitwise XOR (^)</h3>

    <pre><code>int a = 5;
int b = 3;

int result = a ^ b;

printf("%d", result);</code></pre>

    <p>
      XOR produces 1 when the corresponding bits are different.
    </p>


    <h3>23. Bitwise NOT (~)</h3>

    <pre><code>int a = 5;

int result = ~a;

printf("%d", result);</code></pre>

    <p>
      The result of bitwise NOT depends on the representation of
      the signed integer type. For portable bit-level work,
      unsigned integer types are generally easier to reason about.
    </p>


    <h3>24. Left Shift (&lt;&lt;)</h3>

    <pre><code>unsigned int a = 5;

unsigned int result = a &lt;&lt; 1;

printf("%u", result);</code></pre>

    <p>
      Left shift moves the bits toward the left and fills the
      vacated low-order bits with zero.
    </p>


    <h3>25. Right Shift (&gt;&gt;)</h3>

    <pre><code>unsigned int a = 20;

unsigned int result = a &gt;&gt; 2;

printf("%u", result);</code></pre>

    <p>
      Right shift moves the bits toward the right. For unsigned
      integers, zero bits are shifted in from the left.
    </p>


    <h3>26. Conditional Operator (? :)</h3>

    <p>
      The conditional operator is a compact way to choose between
      two expressions.
    </p>

    <pre><code>int age = 20;

char *result =
    (age &gt;= 18) ? "Adult" : "Minor";

printf("%s", result);</code></pre>

    <p>
      Syntax:
    </p>

    <pre><code>condition ? expression1 : expression2;</code></pre>


    <h3>27. sizeof Operator</h3>

    <p>
      The <strong>sizeof</strong> operator returns the size in bytes
      of a type or object.
    </p>

    <pre><code>int number = 10;

printf("%zu", sizeof(number));</code></pre>


    <h3>28. Address-of Operator (&)</h3>

    <p>
      The unary <strong>&amp;</strong> operator obtains the address
      of an object.
    </p>

    <pre><code>int number = 10;

printf("%p", (void *)&amp;number);</code></pre>


    <h3>29. Indirection Operator (*)</h3>

    <p>
      The unary <strong>*</strong> operator is used to access the
      value stored at the address held by a pointer.
    </p>

    <pre><code>int number = 10;

int *ptr = &amp;number;

printf("%d", *ptr);</code></pre>


    <h3>30. Member Access Operators</h3>

    <p>
      The dot operator <strong>.</strong> accesses a member of a
      structure or union object. The arrow operator
      <strong>-&gt;</strong> accesses a member through a pointer to
      a structure or union.
    </p>

    <pre><code>struct Student {
    int age;
};

struct Student s = {20};

struct Student *ptr = &amp;s;

printf("%d\\n", s.age);
printf("%d\\n", ptr-&gt;age);</code></pre>


    <h3>31. Comma Operator</h3>

    <p>
      The comma operator evaluates its left operand and then its
      right operand, with the value of the complete expression
      being the value of the right operand.
    </p>

    <pre><code>int a, b;

a = 10, b = 20;

printf("%d %d", a, b);</code></pre>


    <h3>32. Unary Operators</h3>

    <p>
      Unary operators operate on a single operand.
    </p>

    <div class="c-operator-mini-grid">

      <div>
        <strong>++</strong>
        <span>Increment</span>
      </div>

      <div>
        <strong>--</strong>
        <span>Decrement</span>
      </div>

      <div>
        <strong>!</strong>
        <span>Logical NOT</span>
      </div>

      <div>
        <strong>~</strong>
        <span>Bitwise NOT</span>
      </div>

      <div>
        <strong>&amp;</strong>
        <span>Address-of</span>
      </div>

      <div>
        <strong>*</strong>
        <span>Indirection</span>
      </div>

    </div>


    <h3>33. Binary Operators</h3>

    <p>
      Binary operators operate on two operands.
    </p>

    <pre><code>int result = a + b;</code></pre>

    <p>
      Here <strong>a</strong> and <strong>b</strong> are two operands
      and <strong>+</strong> is a binary operator.
    </p>


    <h3>34. Ternary Operator</h3>

    <p>
      The conditional operator <strong>? :</strong> is the main
      ternary operator in C because it uses three operands.
    </p>

    <pre><code>int a = 10;
int b = 20;

int max = (a &gt; b) ? a : b;

printf("%d", max);</code></pre>


    <h3>35. Operator Precedence</h3>

    <p>
      Operator precedence determines which operators are grouped
      first when an expression contains multiple operators.
    </p>

    <pre><code>int result = 10 + 5 * 2;</code></pre>

    <p>
      Multiplication has higher precedence than addition, so the
      expression is grouped as:
    </p>

    <pre><code>10 + (5 * 2)</code></pre>

    <p>
      Result:
    </p>

    <pre><code>20</code></pre>


    <h3>36. Parentheses and Precedence</h3>

    <p>
      Parentheses can be used to explicitly control grouping and
      make expressions easier to understand.
    </p>

    <pre><code>int result = (10 + 5) * 2;

printf("%d", result);</code></pre>

    <p>
      Result:
    </p>

    <pre><code>30</code></pre>


    <h3>37. Common Precedence Order</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Priority</th>
          <th>Operators</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>High</td>
          <td>()  []  .  -&gt;</td>
        </tr>

        <tr>
          <td></td>
          <td>++  --  !  ~  *  &amp;</td>
        </tr>

        <tr>
          <td></td>
          <td>*  /  %</td>
        </tr>

        <tr>
          <td></td>
          <td>+  -</td>
        </tr>

        <tr>
          <td></td>
          <td>&lt;&lt;  &gt;&gt;</td>
        </tr>

        <tr>
          <td></td>
          <td>&lt;  &lt;=  &gt;  &gt;=</td>
        </tr>

        <tr>
          <td></td>
          <td>==  !=</td>
        </tr>

        <tr>
          <td></td>
          <td>&amp;</td>
        </tr>

        <tr>
          <td></td>
          <td>^</td>
        </tr>

        <tr>
          <td></td>
          <td>|</td>
        </tr>

        <tr>
          <td></td>
          <td>&amp;&amp;</td>
        </tr>

        <tr>
          <td></td>
          <td>||</td>
        </tr>

        <tr>
          <td></td>
          <td>?:</td>
        </tr>

        <tr>
          <td></td>
          <td>=, +=, -=, *=, /=, %=, ...</td>
        </tr>

        <tr>
          <td>Low</td>
          <td>,</td>
        </tr>

      </tbody>
    </table>


    <h3>38. Short-Circuit Evaluation</h3>

    <p>
      The logical AND and OR operators can stop evaluating the
      remaining expression when its result is already known.
    </p>

    <pre><code>if (ptr != NULL &amp;&amp; *ptr &gt; 10) {
    printf("Valid");
}</code></pre>

    <p>
      With <strong>&amp;&amp;</strong>, if the first condition is false,
      the second condition is not evaluated.
    </p>

    <pre><code>if (x &gt; 0 || y &gt; 0) {
    printf("At least one is positive");
}</code></pre>

    <p>
      With <strong>||</strong>, if the first condition is true,
      the second condition is not evaluated.
    </p>


    <h3>39. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a = 20;
    int b = 10;

    printf("Addition: %d\\n", a + b);
    printf("Subtraction: %d\\n", a - b);
    printf("Multiplication: %d\\n", a * b);
    printf("Division: %d\\n", a / b);
    printf("Remainder: %d\\n", a % b);

    printf("a &gt; b: %d\\n", a &gt; b);
    printf("a == b: %d\\n", a == b);

    printf("Logical AND: %d\\n",
           (a &gt; 0 &amp;&amp; b &gt; 0));

    printf("Logical OR: %d\\n",
           (a &lt; 0 || b &gt; 0));

    a += 5;

    printf("After += 5: %d\\n", a);

    a++;

    printf("After ++: %d\\n", a);

    printf("Conditional: %s\\n",
           (a &gt; b) ? "a is greater" : "b is greater");

    return 0;
}</code></pre>


    <h3>40. Important Points</h3>

    <ul>
      <li>Operators perform operations on operands.</li>
      <li>Arithmetic operators perform mathematical calculations.</li>
      <li>Relational operators compare values.</li>
      <li>Logical operators combine or negate conditions.</li>
      <li>Assignment operators assign or update values.</li>
      <li>Increment and decrement operators change a value by one.</li>
      <li>Bitwise operators work on the bits of integer operands.</li>
      <li>The conditional operator provides a compact conditional expression.</li>
      <li>sizeof gives the size of a type or object in bytes.</li>
      <li>Operator precedence determines how expressions are grouped.</li>
      <li>Parentheses should be used when they make the intended grouping clearer.</li>
      <li>&amp;&amp; and || use short-circuit evaluation.</li>
    </ul>
    `
  ],

  practice: [
    'What are operators in C?',
    'Explain arithmetic operators with examples.',
    'Explain relational operators with examples.',
    'Explain logical AND, OR, and NOT operators.',
    'Explain assignment and compound assignment operators.',
    'Explain increment and decrement operators.',
    'Differentiate between prefix and postfix increment.',
    'Explain bitwise operators with examples.',
    'Explain the conditional operator.',
    'Explain sizeof, address-of, and indirection operators.',
    'Explain operator precedence and associativity.',
    'Write a program demonstrating different types of operators.'
  ],

  code: `#include <stdio.h>

int main() {

    int a = 20;
    int b = 10;

    printf("Addition: %d\\\\n", a + b);
    printf("Subtraction: %d\\\\n", a - b);
    printf("Multiplication: %d\\\\n", a * b);
    printf("Division: %d\\\\n", a / b);
    printf("Remainder: %d\\\\n", a % b);

    printf("a > b: %d\\\\n", a > b);
    printf("a == b: %d\\\\n", a == b);

    printf("Logical AND: %d\\\\n",
           (a > 0 && b > 0));

    a += 5;

    printf("After += 5: %d\\\\n", a);

    a++;

    printf("After ++: %d\\\\n", a);

    printf("Maximum: %d\\\\n",
           (a > b) ? a : b);

    return 0;
}`
} ,
   {
  key: 'expressions',
  title: 'Expressions in C',

  description: 'An expression in C is a combination of constants, variables, operators, and function calls that produces a value.',

  theory: [
    `
    <h3>1. What is an Expression?</h3>

    <p>
      An <strong>expression</strong> is a combination of one or more
      operands and operators that is evaluated to produce a value.
    </p>

    <pre><code>a + b</code></pre>

    <p>
      Here <strong>a</strong> and <strong>b</strong> are operands and
      <strong>+</strong> is the operator.
    </p>

    <p>
      Another example:
    </p>

    <pre><code>int result = a + b * 2;</code></pre>

    <p>
      The part <strong>a + b * 2</strong> is an expression whose
      evaluated value is assigned to <strong>result</strong>.
    </p>


    <h3>2. Basic Structure of an Expression</h3>

    <div class="c-expression-flow">

      <div class="c-expression-box">
        <strong>Operand</strong>
        <span>Variable / Constant</span>
      </div>

      <div class="c-expression-operator">+</div>

      <div class="c-expression-box">
        <strong>Operand</strong>
        <span>Variable / Constant</span>
      </div>

      <div class="c-expression-operator">=</div>

      <div class="c-expression-result">
        <strong>Value</strong>
        <span>Result of expression</span>
      </div>

    </div>

    <pre><code>int result = a + b;</code></pre>


    <h3>3. Components of an Expression</h3>

    <p>
      An expression may contain variables, constants, operators,
      function calls, and other expressions.
    </p>

    <div class="c-expression-component-grid">

      <div>
        <strong>Variables</strong>
        <span>a, b, total</span>
      </div>

      <div>
        <strong>Constants</strong>
        <span>10, 20, 3.14</span>
      </div>

      <div>
        <strong>Operators</strong>
        <span>+, -, *, /</span>
      </div>

      <div>
        <strong>Function Calls</strong>
        <span>sqrt(x), printf(...)</span>
      </div>

    </div>


    <h3>4. Simple Expression</h3>

    <p>
      A simple expression can contain a single variable or constant.
    </p>

    <pre><code>int x = 10;

x</code></pre>

    <p>
      Here <strong>x</strong> itself is an expression whose value is
      10.
    </p>


    <h3>5. Arithmetic Expression</h3>

    <p>
      Arithmetic expressions use arithmetic operators to perform
      mathematical calculations.
    </p>

    <pre><code>int a = 10;
int b = 5;

int result = a + b;</code></pre>

    <p>
      Other examples:
    </p>

    <pre><code>a - b
a * b
a / b
a % b</code></pre>


    <h3>6. Arithmetic Expression Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a = 20;
    int b = 5;

    int addition = a + b;
    int subtraction = a - b;
    int multiplication = a * b;
    int division = a / b;
    int remainder = a % b;

    printf("Addition: %d\\n", addition);
    printf("Subtraction: %d\\n", subtraction);
    printf("Multiplication: %d\\n", multiplication);
    printf("Division: %d\\n", division);
    printf("Remainder: %d\\n", remainder);

    return 0;
}</code></pre>


    <h3>7. Relational Expression</h3>

    <p>
      A relational expression compares two values.
      In C, the result is <strong>1</strong> when the comparison is
      true and <strong>0</strong> when it is false.
    </p>

    <pre><code>int a = 10;
int b = 20;

a &lt; b</code></pre>

    <p>
      Result:
    </p>

    <pre><code>1</code></pre>


    <h3>8. Examples of Relational Expressions</h3>

    <pre><code>a == b
a != b
a &gt; b
a &lt; b
a &gt;= b
a &lt;= b</code></pre>


    <h3>9. Logical Expression</h3>

    <p>
      Logical expressions combine or negate conditions using
      logical operators.
    </p>

    <pre><code>age &gt;= 18 &amp;&amp; age &lt;= 60</code></pre>

    <p>
      Logical expressions evaluate to zero or one.
    </p>


    <h3>10. Logical Expression Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age = 25;

    int result =
        (age &gt;= 18 &amp;&amp; age &lt;= 60);

    printf("%d", result);

    return 0;
}</code></pre>


    <h3>11. Assignment Expression</h3>

    <p>
      Assignment itself is an expression in C. It stores a value in
      an object and the assignment expression has the value that was
      assigned.
    </p>

    <pre><code>int a;

a = 10;</code></pre>

    <p>
      Compound assignment expressions are also commonly used.
    </p>

    <pre><code>a += 5;
a -= 2;
a *= 3;
a /= 2;</code></pre>


    <h3>12. Multiple Assignment</h3>

    <p>
      Since assignment is an expression, assignments can be chained.
    </p>

    <pre><code>int a, b, c;

a = b = c = 10;</code></pre>

    <p>
      The value 10 is assigned to <strong>c</strong>, then
      <strong>b</strong>, and finally <strong>a</strong>.
    </p>


    <h3>13. Increment Expression</h3>

    <p>
      Increment expressions increase the value of an object by one.
    </p>

    <pre><code>int count = 5;

count++;</code></pre>

    <p>
      Prefix and postfix forms are both available:
    </p>

    <pre><code>++count
count++</code></pre>


    <h3>14. Decrement Expression</h3>

    <pre><code>int count = 5;

count--;</code></pre>

    <p>
      Prefix and postfix forms:
    </p>

    <pre><code>--count
count--</code></pre>


    <h3>15. Conditional Expression</h3>

    <p>
      The conditional operator <strong>? :</strong> creates a
      conditional expression.
    </p>

    <pre><code>int a = 10;
int b = 20;

int max = (a &gt; b) ? a : b;</code></pre>

    <p>
      If the condition is true, the first expression is selected;
      otherwise the second expression is selected.
    </p>


    <h3>16. Conditional Expression Flow</h3>

    <div class="c-condition-flow">

      <div class="c-condition-start">
        <strong>Condition</strong>
        <span>a &gt; b</span>
      </div>

      <div class="c-condition-arrow">↓</div>

      <div class="c-condition-branches">

        <div class="c-condition-true">
          <strong>TRUE</strong>
          <span>Return a</span>
        </div>

        <div class="c-condition-false">
          <strong>FALSE</strong>
          <span>Return b</span>
        </div>

      </div>

      <div class="c-condition-arrow">↓</div>

      <div class="c-condition-result">
        <strong>Result</strong>
        <span>Maximum value</span>
      </div>

    </div>


    <h3>17. Unary Expression</h3>

    <p>
      A unary expression contains one operand.
    </p>

    <pre><code>++a
--a
!a
~a
-a
+a
&amp;a
*a</code></pre>

    <p>
      Examples:
    </p>

    <pre><code>int a = 10;

-a
+a
!a</code></pre>


    <h3>18. Binary Expression</h3>

    <p>
      A binary expression contains two operands.
    </p>

    <pre><code>a + b
a - b
a * b
a &gt; b
a == b
a &amp;&amp; b</code></pre>


    <h3>19. Ternary Expression</h3>

    <p>
      A ternary expression uses three operands and is created using
      the conditional operator.
    </p>

    <pre><code>condition ? expression1 : expression2</code></pre>

    <p>
      Example:
    </p>

    <pre><code>int result = (10 &gt; 5) ? 10 : 5;</code></pre>


    <h3>20. Bitwise Expression</h3>

    <p>
      Bitwise expressions perform operations on individual bits of
      integer operands.
    </p>

    <pre><code>int a = 5;
int b = 3;

int andResult = a &amp; b;
int orResult = a | b;
int xorResult = a ^ b;</code></pre>


    <h3>21. Pointer Expression</h3>

    <p>
      Pointer expressions use operators such as
      <strong>&amp;</strong> and <strong>*</strong>.
    </p>

    <pre><code>int number = 10;

int *ptr = &amp;number;

printf("%d", *ptr);</code></pre>

    <p>
      Here <strong>&amp;number</strong> obtains the address and
      <strong>*ptr</strong> accesses the value stored at that address.
    </p>


    <h3>22. Function Call Expression</h3>

    <p>
      A function call can form an expression when the function
      returns a value.
    </p>

    <pre><code>#include &lt;math.h&gt;

double result = sqrt(25.0);</code></pre>

    <p>
      Here <strong>sqrt(25.0)</strong> is a function call expression
      that produces a value.
    </p>


    <h3>23. Cast Expression</h3>

    <p>
      A cast expression explicitly converts an expression to another
      type.
    </p>

    <pre><code>int a = 5;
int b = 2;

double result = (double)a / b;

printf("%f", result);</code></pre>

    <p>
      The cast <strong>(double)a</strong> converts the value of
      <strong>a</strong> to double before division.
    </p>


    <h3>24. Integer Expression</h3>

    <p>
      An expression involving integer operands can produce an
      integer result.
    </p>

    <pre><code>int a = 10;
int b = 3;

int result = a / b;</code></pre>

    <p>
      Output:
    </p>

    <pre><code>3</code></pre>

    <p>
      Because both operands are integers, integer division is used.
    </p>


    <h3>25. Floating-Point Expression</h3>

    <pre><code>double a = 10.0;
double b = 3.0;

double result = a / b;

printf("%f", result);</code></pre>

    <p>
      This produces a floating-point result.
    </p>


    <h3>26. Mixed-Type Expression</h3>

    <p>
      When an expression contains operands of different arithmetic
      types, C performs the required conversions according to its
      type conversion rules.
    </p>

    <pre><code>int a = 10;
double b = 3.5;

double result = a + b;</code></pre>

    <p>
      The integer value is converted to a compatible floating type
      for the operation.
    </p>


    <h3>27. Expression Evaluation</h3>

    <p>
      When C evaluates an expression, it determines the values of
      its operands and applies the operators according to the
      language rules.
    </p>

    <pre><code>int result = 10 + 5 * 2;</code></pre>

    <p>
      Multiplication has higher precedence than addition:
    </p>

    <pre><code>10 + (5 * 2)

= 10 + 10

= 20</code></pre>


    <h3>28. Parentheses in Expressions</h3>

    <p>
      Parentheses can explicitly specify the intended grouping of
      an expression.
    </p>

    <pre><code>int result1 = 10 + 5 * 2;

int result2 = (10 + 5) * 2;</code></pre>

    <p>
      Results:
    </p>

    <pre><code>result1 = 20
result2 = 30</code></pre>


    <h3>29. Operator Precedence</h3>

    <p>
      Operator precedence determines which operators bind more
      strongly in an expression.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Higher Priority</th>
          <th>Operators</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>1</td>
          <td>() [] . -&gt;</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Unary operators</td>
        </tr>

        <tr>
          <td>3</td>
          <td>* / %</td>
        </tr>

        <tr>
          <td>4</td>
          <td>+ -</td>
        </tr>

        <tr>
          <td>5</td>
          <td>&lt;&lt; &gt;&gt;</td>
        </tr>

        <tr>
          <td>6</td>
          <td>Relational operators</td>
        </tr>

        <tr>
          <td>7</td>
          <td>Equality operators</td>
        </tr>

        <tr>
          <td>8</td>
          <td>&amp;&amp;</td>
        </tr>

        <tr>
          <td>9</td>
          <td>||</td>
        </tr>

        <tr>
          <td>10</td>
          <td>?:</td>
        </tr>

        <tr>
          <td>11</td>
          <td>Assignment operators</td>
        </tr>

        <tr>
          <td>Lowest</td>
          <td>Comma operator</td>
        </tr>

      </tbody>
    </table>


    <h3>30. Associativity</h3>

    <p>
      When operators have the same precedence, their
      <strong>associativity</strong> determines how they are grouped.
    </p>

    <p>
      Many binary arithmetic operators associate from left to right.
    </p>

    <pre><code>20 / 5 * 2</code></pre>

    <p>
      This is grouped as:
    </p>

    <pre><code>(20 / 5) * 2</code></pre>

    <p>
      Assignment operators generally associate from right to left.
    </p>

    <pre><code>a = b = c = 10;</code></pre>


    <h3>31. Constant Expression</h3>

    <p>
      A constant expression is an expression whose value can be
      determined from constants and permitted operations at compile
      time.
    </p>

    <pre><code>#define SIZE (10 + 5)</code></pre>

    <p>
      Here the expression <strong>10 + 5</strong> contains only
      constants and operators.
    </p>


    <h3>32. Expressions in if Statement</h3>

    <p>
      Expressions are commonly used as conditions in control
      statements.
    </p>

    <pre><code>int marks = 75;

if (marks &gt;= 40) {
    printf("Pass");
}</code></pre>

    <p>
      The expression <strong>marks &gt;= 40</strong> determines
      whether the condition is true or false.
    </p>


    <h3>33. Expressions in for Loop</h3>

    <p>
      The <strong>for</strong> statement contains expressions for
      initialization, controlling the loop, and updating the loop
      variable.
    </p>

    <pre><code>for (int i = 0; i &lt; 5; i++) {
    printf("%d\\n", i);
}</code></pre>


    <h3>34. Expressions in Assignment</h3>

    <pre><code>int a = 10;
int b = 20;

int sum = a + b;</code></pre>

    <p>
      Here <strong>a + b</strong> is evaluated and its value is
      assigned to <strong>sum</strong>.
    </p>


    <h3>35. Complex Expression</h3>

    <pre><code>int a = 10;
int b = 5;
int c = 2;

int result = (a + b) * c - 4;</code></pre>

    <p>
      The parentheses make the intended order clear:
    </p>

    <pre><code>(10 + 5) * 2 - 4

15 * 2 - 4

30 - 4

26</code></pre>


    <h3>36. Expression Tree Concept</h3>

    <div class="c-expression-tree">

      <div class="c-tree-root">
        <strong>+</strong>
      </div>

      <div class="c-tree-branches">

        <div>
          <strong>*</strong>
          <span>a × b</span>
        </div>

        <div>
          <strong>c</strong>
          <span>Operand</span>
        </div>

      </div>

      <p>
        Example: <strong>a * b + c</strong>
      </p>

    </div>


    <h3>37. Expression vs Statement</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Expression</th>
          <th>Statement</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Produces a value.</td>
          <td>Performs an action.</td>
        </tr>

        <tr>
          <td>a + b</td>
          <td>int c = a + b;</td>
        </tr>

        <tr>
          <td>a &gt; b</td>
          <td>if (a &gt; b) { ... }</td>
        </tr>

        <tr>
          <td>Function call returning a value</td>
          <td>Complete instruction ending with ;</td>
        </tr>

      </tbody>
    </table>


    <h3>38. Common Expression Examples</h3>

    <div class="c-expression-example-grid">

      <div>
        <strong>Arithmetic</strong>
        <code>a + b * c</code>
      </div>

      <div>
        <strong>Relational</strong>
        <code>a &gt; b</code>
      </div>

      <div>
        <strong>Logical</strong>
        <code>a &gt; 0 &amp;&amp; b &gt; 0</code>
      </div>

      <div>
        <strong>Assignment</strong>
        <code>a += 10</code>
      </div>

      <div>
        <strong>Conditional</strong>
        <code>a &gt; b ? a : b</code>
      </div>

      <div>
        <strong>Bitwise</strong>
        <code>a &amp; b</code>
      </div>

    </div>


    <h3>39. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a = 20;
    int b = 10;

    int arithmetic =
        a + b * 2;

    int comparison =
        a &gt; b;

    int logical =
        (a &gt; 0 &amp;&amp; b &gt; 0);

    int assignment = a;
    assignment += b;

    int maximum =
        (a &gt; b) ? a : b;

    double division =
        (double)a / b;

    printf("Arithmetic: %d\\n", arithmetic);
    printf("Comparison: %d\\n", comparison);
    printf("Logical: %d\\n", logical);
    printf("Assignment: %d\\n", assignment);
    printf("Maximum: %d\\n", maximum);
    printf("Division: %.2f\\n", division);

    return 0;
}</code></pre>


    <h3>40. Important Points</h3>

    <ul>
      <li>An expression is evaluated to produce a value.</li>
      <li>Expressions can contain variables, constants, operators, and function calls.</li>
      <li>Arithmetic expressions perform calculations.</li>
      <li>Relational expressions compare values.</li>
      <li>Logical expressions combine conditions.</li>
      <li>Assignment expressions assign values.</li>
      <li>Conditional expressions use the ? : operator.</li>
      <li>Unary expressions contain one operand.</li>
      <li>Binary expressions contain two operands.</li>
      <li>The conditional operator forms a ternary expression.</li>
      <li>Type conversions can occur during expression evaluation.</li>
      <li>Operator precedence determines how operators are grouped.</li>
      <li>Associativity determines grouping when operators have equal precedence.</li>
      <li>Parentheses can make the intended evaluation order explicit.</li>
    </ul>
    `
  ],

  practice: [
    'What is an expression in C?',
    'Explain the components of an expression.',
    'What is an arithmetic expression? Give examples.',
    'Explain relational and logical expressions.',
    'What is an assignment expression?',
    'Explain unary, binary, and ternary expressions.',
    'What is a conditional expression?',
    'Explain operator precedence and associativity.',
    'Explain type conversion in expressions.',
    'Differentiate between an expression and a statement.',
    'Write a program demonstrating different types of expressions.',
    'Evaluate the expression: (10 + 5) * 2 - 4.'
  ],

  code: `#include <stdio.h>

int main() {

    int a = 20;
    int b = 10;

    int arithmetic = a + b * 2;

    int comparison = a > b;

    int logical =
        (a > 0 && b > 0);

    int assignment = a;
    assignment += b;

    int maximum =
        (a > b) ? a : b;

    double division =
        (double)a / b;

    printf("Arithmetic: %d\\\\n", arithmetic);
    printf("Comparison: %d\\\\n", comparison);
    printf("Logical: %d\\\\n", logical);
    printf("Assignment: %d\\\\n", assignment);
    printf("Maximum: %d\\\\n", maximum);
    printf("Division: %.2f\\\\n", division);

    return 0;
}`
},
 {
  key: 'input-output',
  title: 'Input and Output in C',

  description: 'Input and output operations allow a C program to receive data from the user and display results on the screen. C commonly uses functions such as printf(), scanf(), getchar(), putchar(), fgets(), and puts().',

  theory: [
    `
    <h3>1. What is Input and Output?</h3>

    <p>
      <strong>Input</strong> means receiving data from the user or
      another source, while <strong>output</strong> means displaying
      or sending data produced by a program.
    </p>

    <div class="c-io-flow">

      <div class="c-io-box">
        <strong>INPUT</strong>
        <span>User enters data</span>
      </div>

      <div class="c-io-arrow">→</div>

      <div class="c-io-box c-io-program">
        <strong>C PROGRAM</strong>
        <span>Processes the data</span>
      </div>

      <div class="c-io-arrow">→</div>

      <div class="c-io-box">
        <strong>OUTPUT</strong>
        <span>Result is displayed</span>
      </div>

    </div>


    <h3>2. Standard Input and Output</h3>

    <p>
      C provides standard streams for performing common input and
      output operations.
    </p>

    <div class="c-io-stream-grid">

      <div>
        <strong>stdin</strong>
        <span>Standard Input</span>
        <small>Usually the keyboard</small>
      </div>

      <div>
        <strong>stdout</strong>
        <span>Standard Output</span>
        <small>Usually the terminal</small>
      </div>

      <div>
        <strong>stderr</strong>
        <span>Standard Error</span>
        <small>Used for diagnostic messages</small>
      </div>

    </div>


    <h3>3. stdio.h Header File</h3>

    <p>
      Most basic console input and output functions are declared in
      the <strong>&lt;stdio.h&gt;</strong> header file.
    </p>

    <pre><code>#include &lt;stdio.h&gt;</code></pre>

    <p>
      Common functions include:
    </p>

    <ul>
      <li>printf()</li>
      <li>scanf()</li>
      <li>getchar()</li>
      <li>putchar()</li>
      <li>fgets()</li>
      <li>puts()</li>
    </ul>


    <h3>4. Output using printf()</h3>

    <p>
      The <strong>printf()</strong> function is used to display
      formatted output on the standard output stream.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Welcome to C Programming!");

    return 0;
}</code></pre>

    <p>
      Output:
    </p>

    <pre><code>Welcome to C Programming!</code></pre>


    <h3>5. Printing Multiple Values</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age = 20;
    float marks = 85.5f;

    printf("Age: %d\\n", age);
    printf("Marks: %.2f\\n", marks);

    return 0;
}</code></pre>


    <h3>6. Format Specifiers</h3>

    <p>
      Format specifiers tell formatted input/output functions what
      type of data is being processed.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Specifier</th>
          <th>Data Type</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>%d</td>
          <td>int</td>
          <td>printf("%d", age);</td>
        </tr>

        <tr>
          <td>%u</td>
          <td>unsigned int</td>
          <td>printf("%u", count);</td>
        </tr>

        <tr>
          <td>%f</td>
          <td>float</td>
          <td>printf("%f", price);</td>
        </tr>

        <tr>
          <td>%lf</td>
          <td>double in scanf()</td>
          <td>scanf("%lf", &value);</td>
        </tr>

        <tr>
          <td>%c</td>
          <td>char</td>
          <td>printf("%c", grade);</td>
        </tr>

        <tr>
          <td>%s</td>
          <td>String</td>
          <td>printf("%s", name);</td>
        </tr>

        <tr>
          <td>%ld</td>
          <td>long</td>
          <td>printf("%ld", value);</td>
        </tr>

        <tr>
          <td>%lld</td>
          <td>long long</td>
          <td>printf("%lld", value);</td>
        </tr>

        <tr>
          <td>%p</td>
          <td>Pointer address</td>
          <td>printf("%p", (void *)ptr);</td>
        </tr>

      </tbody>
    </table>


    <h3>7. Integer Output</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int number = 100;

    printf("Number = %d", number);

    return 0;
}</code></pre>


    <h3>8. Floating-Point Output</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    float price = 99.50f;
    double pi = 3.1415926535;

    printf("Price = %.2f\\n", price);
    printf("PI = %.10f\\n", pi);

    return 0;
}</code></pre>

    <p>
      The number after the dot specifies the number of digits
      displayed after the decimal point.
    </p>


    <h3>9. Character Output</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char grade = 'A';

    printf("Grade = %c", grade);

    return 0;
}</code></pre>


    <h3>10. String Output</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char name[] = "Jitesh";

    printf("Name = %s", name);

    return 0;
}</code></pre>


    <h3>11. New Line and Escape Sequences</h3>

    <p>
      Escape sequences are special character combinations used to
      represent formatting or special characters.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Escape Sequence</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>\\n</td>
          <td>New line</td>
        </tr>

        <tr>
          <td>\\t</td>
          <td>Horizontal tab</td>
        </tr>

        <tr>
          <td>\\r</td>
          <td>Carriage return</td>
        </tr>

        <tr>
          <td>\\\\</td>
          <td>Backslash</td>
        </tr>

        <tr>
          <td>\\'</td>
          <td>Single quote</td>
        </tr>

        <tr>
          <td>\\"</td>
          <td>Double quote</td>
        </tr>

        <tr>
          <td>\\0</td>
          <td>Null character</td>
        </tr>

      </tbody>
    </table>


    <h3>12. Using \\n</h3>

    <pre><code>printf("Hello\\n");
printf("World");</code></pre>

    <p>
      Output:
    </p>

    <pre><code>Hello
World</code></pre>


    <h3>13. Using \\t</h3>

    <pre><code>printf("Name\\tAge\\n");
printf("Jitesh\\t20");</code></pre>

    <p>
      The <strong>\\t</strong> escape sequence inserts a horizontal
      tab.
    </p>


    <h3>14. Input using scanf()</h3>

    <p>
      The <strong>scanf()</strong> function is commonly used to read
      formatted input from the standard input stream.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age;

    printf("Enter your age: ");
    scanf("%d", &amp;age);

    printf("Age = %d", age);

    return 0;
}</code></pre>


    <h3>15. Why &amp; is Used with scanf()</h3>

    <p>
      For ordinary scalar variables, scanf() needs the address where
      the input value should be stored.
    </p>

    <pre><code>int age;

scanf("%d", &amp;age);</code></pre>

    <p>
      Here <strong>&amp;age</strong> gives the address of the
      variable <strong>age</strong>.
    </p>

    <p>
      For a character array used as a string, the array name already
      provides a pointer to its first element, so an additional
      <strong>&amp;</strong> is not used.
    </p>


    <h3>16. Reading Multiple Values</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a, b;

    printf("Enter two numbers: ");

    scanf("%d %d", &amp;a, &amp;b);

    printf("Sum = %d", a + b);

    return 0;
}</code></pre>


    <h3>17. Reading Float</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    float price;

    printf("Enter price: ");
    scanf("%f", &amp;price);

    printf("Price = %.2f", price);

    return 0;
}</code></pre>


    <h3>18. Reading Double</h3>

    <p>
      For scanf(), a <strong>double</strong> is read using
      <strong>%lf</strong>.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    double value;

    printf("Enter a value: ");
    scanf("%lf", &amp;value);

    printf("Value = %f", value);

    return 0;
}</code></pre>


    <h3>19. Reading Character using scanf()</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char grade;

    printf("Enter grade: ");
    scanf(" %c", &amp;grade);

    printf("Grade = %c", grade);

    return 0;
}</code></pre>

    <p>
      The space before <strong>%c</strong> tells scanf() to skip
      leading whitespace characters.
    </p>


    <h3>20. Reading String using scanf()</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char name[50];

    printf("Enter your name: ");
    scanf("%49s", name);

    printf("Name = %s", name);

    return 0;
}</code></pre>

    <p>
      <strong>%49s</strong> limits the number of characters read so
      that space remains for the terminating null character.
    </p>

    <p>
      However, scanf("%s", ...) stops at whitespace, so it is not
      suitable for reading a full line containing spaces.
    </p>


    <h3>21. Reading a Full Line using fgets()</h3>

    <p>
      The <strong>fgets()</strong> function is commonly used to read
      a line of text safely into a character array.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char name[100];

    printf("Enter your full name: ");

    if (fgets(name, sizeof name, stdin) != NULL) {
        printf("Name = %s", name);
    }

    return 0;
}</code></pre>

    <p>
      Unlike scanf("%s"), fgets() can read spaces until a newline
      or the specified size limit is reached.
    </p>


    <h3>22. Removing the Newline from fgets()</h3>

    <p>
      When fgets() reads a line, the newline may also be stored in
      the array if there is enough space. It can be removed if
      required.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char name[100];

    printf("Enter your name: ");

    if (fgets(name, sizeof name, stdin) != NULL) {

        name[strcspn(name, "\\n")] = '\\0';

        printf("Hello, %s!", name);
    }

    return 0;
}</code></pre>


    <h3>23. getchar()</h3>

    <p>
      The <strong>getchar()</strong> function reads one character
      from the standard input stream.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int ch;

    printf("Enter a character: ");

    ch = getchar();

    printf("You entered: %c", ch);

    return 0;
}</code></pre>


    <h3>24. putchar()</h3>

    <p>
      The <strong>putchar()</strong> function writes one character
      to the standard output stream.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char ch = 'A';

    putchar(ch);

    return 0;
}</code></pre>


    <h3>25. puts()</h3>

    <p>
      The <strong>puts()</strong> function writes a string followed
      by a newline to the standard output.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char message[] = "Welcome to C";

    puts(message);

    return 0;
}</code></pre>


    <h3>26. Character I/O vs Formatted I/O</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>printf()</td>
          <td>Formatted output</td>
        </tr>

        <tr>
          <td>scanf()</td>
          <td>Formatted input</td>
        </tr>

        <tr>
          <td>getchar()</td>
          <td>Read one character</td>
        </tr>

        <tr>
          <td>putchar()</td>
          <td>Write one character</td>
        </tr>

        <tr>
          <td>fgets()</td>
          <td>Read a line of text</td>
        </tr>

        <tr>
          <td>puts()</td>
          <td>Write a string with a newline</td>
        </tr>

      </tbody>
    </table>


    <h3>27. Input Buffer</h3>

    <p>
      Input entered through the terminal is typically handled through
      a stream. Functions such as scanf() may leave characters such
      as a newline in the input stream when they do not consume them.
    </p>

    <div class="c-input-buffer">

      <div class="c-buffer-user">
        <strong>KEYBOARD</strong>
        <span>10 + Enter</span>
      </div>

      <div class="c-buffer-arrow">→</div>

      <div class="c-buffer-memory">
        <strong>INPUT STREAM</strong>
        <span>'1' '0' '\\n'</span>
      </div>

      <div class="c-buffer-arrow">→</div>

      <div class="c-buffer-program">
        <strong>PROGRAM</strong>
        <span>Reads required data</span>
      </div>

    </div>


    <h3>28. scanf() and Newline Issue</h3>

    <p>
      Mixing scanf() with fgets() requires care because scanf() may
      leave a newline in the input stream.
    </p>

    <p>
      For example:
    </p>

    <pre><code>int age;
char name[100];

scanf("%d", &amp;age);
fgets(name, sizeof name, stdin);</code></pre>

    <p>
      The fgets() call may immediately read the leftover newline.
      A better approach is often to read the complete line with
      fgets() and then convert or parse the input.
    </p>


    <h3>29. Formatted Output Width</h3>

    <p>
      printf() supports field width for formatting output.
    </p>

    <pre><code>printf("%10d\\n", 123);</code></pre>

    <p>
      The value is printed in a field that is at least 10 characters
      wide.
    </p>


    <h3>30. Left Alignment</h3>

    <pre><code>printf("%-10dEND\\n", 123);</code></pre>

    <p>
      The minus sign causes the value to be left-aligned within the
      specified field width.
    </p>


    <h3>31. Precision in Floating Output</h3>

    <pre><code>double pi = 3.141592653589793;

printf("%.2f\\n", pi);
printf("%.5f\\n", pi);</code></pre>

    <p>
      Output:
    </p>

    <pre><code>3.14
3.14159</code></pre>


    <h3>32. Printing a Percentage Sign</h3>

    <p>
      To print a literal percentage sign using printf(), use
      <strong>%%</strong>.
    </p>

    <pre><code>printf("Progress: 80%%");</code></pre>

    <p>
      Output:
    </p>

    <pre><code>Progress: 80%</code></pre>


    <h3>33. Printing Pointer Addresses</h3>

    <p>
      The <strong>%p</strong> conversion specification is used for
      pointer values. The argument is commonly converted to
      <strong>void *</strong> when passed to printf().
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int number = 10;

    printf("Address = %p", (void *)&amp;number);

    return 0;
}</code></pre>


    <h3>34. Return Value of scanf()</h3>

    <p>
      scanf() returns the number of input items successfully matched
      and assigned.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age;

    printf("Enter age: ");

    if (scanf("%d", &amp;age) == 1) {
        printf("Valid input: %d", age);
    } else {
        printf("Invalid input");
    }

    return 0;
}</code></pre>


    <h3>35. Checking scanf() Input</h3>

    <p>
      Always checking the return value of scanf() can help detect
      invalid input.
    </p>

    <pre><code>int number;

if (scanf("%d", &amp;number) != 1) {
    printf("Invalid input");
}</code></pre>


    <h3>36. Output using stderr</h3>

    <p>
      The standard error stream can be used for diagnostic messages.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    fprintf(stderr, "An error occurred!\\n");

    return 0;
}</code></pre>


    <h3>37. Input-Output Flow</h3>

    <div class="c-io-process">

      <div class="c-io-process-step">
        <strong>1</strong>
        <span>User Input</span>
      </div>

      <div class="c-process-arrow">→</div>

      <div class="c-io-process-step">
        <strong>2</strong>
        <span>Read Data</span>
      </div>

      <div class="c-process-arrow">→</div>

      <div class="c-io-process-step">
        <strong>3</strong>
        <span>Process</span>
      </div>

      <div class="c-process-arrow">→</div>

      <div class="c-io-process-step">
        <strong>4</strong>
        <span>Display Output</span>
      </div>

    </div>


    <h3>38. Complete Input-Output Program</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age;
    float marks;
    char grade;
    char name[100];

    printf("Enter your name: ");

    if (fgets(name, sizeof name, stdin) == NULL) {
        return 1;
    }

    printf("Enter your age: ");
    if (scanf("%d", &amp;age) != 1) {
        printf("Invalid age input.\\n");
        return 1;
    }

    printf("Enter your marks: ");
    if (scanf("%f", &amp;marks) != 1) {
        printf("Invalid marks input.\\n");
        return 1;
    }

    printf("Enter your grade: ");
    if (scanf(" %c", &amp;grade) != 1) {
        printf("Invalid grade input.\\n");
        return 1;
    }

    printf("\\n--- Student Details ---\\n");
    printf("Name: %s", name);
    printf("Age: %d\\n", age);
    printf("Marks: %.2f\\n", marks);
    printf("Grade: %c\\n", grade);

    return 0;
}</code></pre>


    <h3>39. Common Mistakes</h3>

    <div class="c-io-mistakes">

      <div>
        <strong>❌ Wrong</strong>
        <code>scanf("%d", age);</code>
        <span>Missing address operator for a normal int variable.</span>
      </div>

      <div>
        <strong>❌ Wrong</strong>
        <code>scanf("%f", &amp;value);</code>
        <span>Wrong if value is declared as double.</span>
      </div>

      <div>
        <strong>❌ Risky</strong>
        <code>scanf("%s", name);</code>
        <span>No field width can allow input beyond the array.</span>
      </div>

      <div>
        <strong>⚠️ Careful</strong>
        <code>scanf("%d", &amp;age); fgets(...);</code>
        <span>Leftover newline may affect the following fgets().</span>
      </div>

    </div>


    <h3>40. Important Points</h3>

    <ul>
      <li>Input means receiving data and output means displaying or sending data.</li>
      <li>Basic console I/O functions are declared in &lt;stdio.h&gt;.</li>
      <li>printf() is used for formatted output.</li>
      <li>scanf() is used for formatted input.</li>
      <li>getchar() reads one character.</li>
      <li>putchar() writes one character.</li>
      <li>fgets() is useful for reading a complete line of text.</li>
      <li>puts() writes a string followed by a newline.</li>
      <li>Format specifiers must match the expected data type.</li>
      <li>scanf() returns the number of successfully assigned input items.</li>
      <li>Checking input function return values helps handle invalid input.</li>
      <li>When using scanf() with ordinary variables, provide their addresses.</li>
      <li>Be careful when mixing scanf() and fgets() because of leftover newline characters.</li>
      <li>stderr can be used for diagnostic and error messages.</li>
    </ul>
    `
  ],

  practice: [
    'What is input and output in C?',
    'What is the purpose of the stdio.h header file?',
    'Explain printf() with an example.',
    'Explain scanf() with an example.',
    'Why is the address operator (&) used with scanf()?',
    'Explain common format specifiers in C.',
    'What are escape sequences? Give examples.',
    'Explain getchar() and putchar().',
    'Explain fgets() and puts().',
    'What is the difference between scanf("%s") and fgets()?',
    'What is an input stream?',
    'Why can mixing scanf() and fgets() cause problems?',
    'What does scanf() return?',
    'Write a C program to take student details and display them.',
    'Write a C program to input two numbers and calculate their sum, difference, product, and division.'
  ],

  code: `#include <stdio.h>

int main() {

    int a, b;

    printf("Enter first number: ");

    if (scanf("%d", &a) != 1) {
        printf("Invalid input.\\\\n");
        return 1;
    }

    printf("Enter second number: ");

    if (scanf("%d", &b) != 1) {
        printf("Invalid input.\\\\n");
        return 1;
    }

    printf("\\\\n--- Result ---\\\\n");
    printf("Addition: %d\\\\n", a + b);
    printf("Subtraction: %d\\\\n", a - b);
    printf("Multiplication: %d\\\\n", a * b);

    if (b != 0) {
        printf("Division: %.2f\\\\n",
               (double)a / b);
    } else {
        printf("Division: Cannot divide by zero.\\\\n");
    }

    return 0;
}`
},
  {
  key: 'escape-sequences',
  title: 'Escape Sequences in C',

  description: 'Escape sequences are special character combinations beginning with a backslash that are used to represent special characters and formatting inside character and string literals.',

  theory: [
    `
    <h3>1. What are Escape Sequences?</h3>

    <p>
      An <strong>escape sequence</strong> is a special sequence of
      characters that begins with a backslash (<strong>\\\\</strong>).
      It is used to represent characters that are difficult or
      impossible to type directly inside a character or string literal.
    </p>

    <pre><code>\\\\n</code></pre>

    <p>
      Here <strong>\\\\</strong> is the escape character and
      <strong>n</strong> represents a new-line character.
    </p>

    <div class="c-escape-flow">

      <div class="c-escape-box">
        <strong>\\\\</strong>
        <span>Backslash</span>
      </div>

      <div class="c-escape-plus">+</div>

      <div class="c-escape-box">
        <strong>n</strong>
        <span>Character</span>
      </div>

      <div class="c-escape-arrow">→</div>

      <div class="c-escape-result">
        <strong>New Line</strong>
        <span>Moves cursor to next line</span>
      </div>

    </div>


    <h3>2. Why are Escape Sequences Used?</h3>

    <p>
      Escape sequences are useful when a program needs to include
      special formatting or characters inside a string or character
      constant.
    </p>

    <ul>
      <li>Move output to a new line.</li>
      <li>Insert a tab space.</li>
      <li>Print quotation marks.</li>
      <li>Print a backslash.</li>
      <li>Represent special control characters.</li>
      <li>Represent characters using numeric codes.</li>
    </ul>


    <h3>3. Common Escape Sequences</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Escape Sequence</th>
          <th>Name</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>\\\\n</td>
          <td>New Line</td>
          <td>Moves the cursor to the next line.</td>
        </tr>

        <tr>
          <td>\\\\t</td>
          <td>Horizontal Tab</td>
          <td>Inserts a horizontal tab.</td>
        </tr>

        <tr>
          <td>\\\\r</td>
          <td>Carriage Return</td>
          <td>Moves the cursor to the beginning of the current line.</td>
        </tr>

        <tr>
          <td>\\\\b</td>
          <td>Backspace</td>
          <td>Moves the cursor one position backward.</td>
        </tr>

        <tr>
          <td>\\\\f</td>
          <td>Form Feed</td>
          <td>Represents a form-feed control character.</td>
        </tr>

        <tr>
          <td>\\\\v</td>
          <td>Vertical Tab</td>
          <td>Represents a vertical-tab control character.</td>
        </tr>

        <tr>
          <td>\\\\a</td>
          <td>Alert</td>
          <td>Produces an implementation-defined alert.</td>
        </tr>

        <tr>
          <td>\\\\\\\\</td>
          <td>Backslash</td>
          <td>Prints a backslash.</td>
        </tr>

        <tr>
          <td>\\\\'</td>
          <td>Single Quote</td>
          <td>Represents a single quote character.</td>
        </tr>

        <tr>
          <td>\\\\&quot;</td>
          <td>Double Quote</td>
          <td>Represents a double quote character.</td>
        </tr>

        <tr>
          <td>\\\\?</td>
          <td>Question Mark</td>
          <td>Represents a question mark character.</td>
        </tr>

        <tr>
          <td>\\\\0</td>
          <td>Null Character</td>
          <td>Represents the null character.</td>
        </tr>

      </tbody>
    </table>


    <h3>4. New Line (\\\\n)</h3>

    <p>
      The <strong>\\\\n</strong> escape sequence moves the output
      cursor to the next line.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Hello\\\\n");
    printf("World");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Hello
World</code></pre>


    <h3>5. Horizontal Tab (\\\\t)</h3>

    <p>
      The <strong>\\\\t</strong> escape sequence inserts a horizontal
      tab.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Name\\\\tAge\\\\n");
    printf("Jitesh\\\\t20");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Name    Age
Jitesh  20</code></pre>


    <h3>6. Backslash (\\\\\\\\)</h3>

    <p>
      A backslash itself is represented using <strong>\\\\\\\\</strong>.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("C:\\\\\\\\Program Files\\\\\\\\C");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>C:\\Program Files\\C</code></pre>


    <h3>7. Single Quote (\\\\')</h3>

    <p>
      The <strong>\\\\'</strong> escape sequence can represent a
      single quote character.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char ch = '\\'';

    printf("%c", ch);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>'</code></pre>


    <h3>8. Double Quote (\\\\&quot;)</h3>

    <p>
      The <strong>\\\\&quot;</strong> escape sequence allows a double
      quote to appear inside a string literal.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("He said, \\\\\"Hello!\\\\\"");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>He said, "Hello!"</code></pre>


    <h3>9. Backspace (\\\\b)</h3>

    <p>
      The <strong>\\\\b</strong> escape sequence represents a
      backspace control character.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("ABC\\\\bD");

    return 0;
}</code></pre>

    <p>
      The exact visible effect of control characters such as
      backspace can depend on the terminal or output device.
    </p>


    <h3>10. Carriage Return (\\\\r)</h3>

    <p>
      The <strong>\\\\r</strong> escape sequence represents a
      carriage return.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Hello\\\\rWorld");

    return 0;
}</code></pre>

    <p>
      It moves the cursor to the beginning of the current line.
      The final visible result can depend on the terminal.
    </p>


    <h3>11. Alert (\\\\a)</h3>

    <p>
      The <strong>\\\\a</strong> escape sequence represents an alert
      character.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("\\\\a");

    return 0;
}</code></pre>

    <p>
      The terminal may produce an audible or visual alert, but the
      actual effect is implementation-dependent.
    </p>


    <h3>12. Form Feed (\\\\f)</h3>

    <p>
      The <strong>\\\\f</strong> escape sequence represents a
      form-feed character.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Page 1\\\\fPage 2");

    return 0;
}</code></pre>

    <p>
      Its visible effect depends on the output device or terminal.
    </p>


    <h3>13. Vertical Tab (\\\\v)</h3>

    <p>
      The <strong>\\\\v</strong> escape sequence represents a
      vertical-tab character.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Hello\\\\vWorld");

    return 0;
}</code></pre>

    <p>
      The exact visual behavior can depend on the terminal or output
      device.
    </p>


    <h3>14. Question Mark (\\\\?)</h3>

    <p>
      The <strong>\\\\?</strong> escape sequence represents a
      question mark character.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Are you ready\\\\?");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Are you ready?</code></pre>


    <h3>15. Null Character (\\\\0)</h3>

    <p>
      The <strong>\\\\0</strong> escape sequence represents the
      null character.
    </p>

    <p>
      In a C string, the null character marks the end of the string.
    </p>

    <pre><code>char text[] = "Hello";</code></pre>

    <p>
      Conceptually, the characters are stored as:
    </p>

    <pre><code>H  e  l  l  o  \\\\0</code></pre>


    <h3>16. Octal Escape Sequences</h3>

    <p>
      C also supports escape sequences using an octal character code.
      They begin with a backslash followed by one or more octal
      digits.
    </p>

    <pre><code>\\\\101</code></pre>

    <p>
      This represents the character whose code is octal 101, which is
      <strong>A</strong> in the ASCII character set.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("\\\\101");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>A</code></pre>


    <h3>17. Hexadecimal Escape Sequences</h3>

    <p>
      C supports hexadecimal escape sequences using
      <strong>\\\\x</strong> followed by one or more hexadecimal
      digits.
    </p>

    <pre><code>\\\\x41</code></pre>

    <p>
      In the ASCII character set, hexadecimal <strong>41</strong>
      represents <strong>A</strong>.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("\\\\x41");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>A</code></pre>


    <h3>18. Escape Sequences in Character Constants</h3>

    <p>
      Escape sequences can be used inside character constants.
    </p>

    <pre><code>char newline = '\\\\n';
char tab = '\\\\t';
char quote = '\\\\'';
char slash = '\\\\\\\\';</code></pre>


    <h3>19. Escape Sequences in Strings</h3>

    <p>
      Escape sequences are frequently used inside string literals.
    </p>

    <pre><code>printf("Line 1\\\\nLine 2\\\\nLine 3");</code></pre>

    <p>Output:</p>

    <pre><code>Line 1
Line 2
Line 3</code></pre>


    <h3>20. Escape Sequence Visual Map</h3>

    <div class="c-escape-map">

      <div class="c-escape-map-item">
        <strong>\\\\n</strong>
        <span>New Line</span>
      </div>

      <div class="c-escape-map-item">
        <strong>\\\\t</strong>
        <span>Tab</span>
      </div>

      <div class="c-escape-map-item">
        <strong>\\\\r</strong>
        <span>Carriage Return</span>
      </div>

      <div class="c-escape-map-item">
        <strong>\\\\b</strong>
        <span>Backspace</span>
      </div>

      <div class="c-escape-map-item">
        <strong>\\\\\\\\</strong>
        <span>Backslash</span>
      </div>

      <div class="c-escape-map-item">
        <strong>\\\\'</strong>
        <span>Single Quote</span>
      </div>

      <div class="c-escape-map-item">
        <strong>\\\\&quot;</strong>
        <span>Double Quote</span>
      </div>

      <div class="c-escape-map-item">
        <strong>\\\\0</strong>
        <span>Null Character</span>
      </div>

    </div>


    <h3>21. Escape Sequences with printf()</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Name:\\tJitesh\\n");
    printf("Course:\\tC Programming\\n");
    printf("Status:\\tCompleted\\n");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Name:   Jitesh
Course: C Programming
Status: Completed</code></pre>


    <h3>22. Printing Quotes</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("\\\\\"C Programming\\\\\" is powerful.");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>"C Programming" is powerful.</code></pre>


    <h3>23. Printing File Paths</h3>

    <p>
      On Windows, backslashes inside a C string must themselves be
      escaped.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("C:\\\\\\\\Users\\\\\\\\DELL\\\\\\\\Documents");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>C:\\Users\\DELL\\Documents</code></pre>


    <h3>24. Escape Sequences and ASCII</h3>

    <p>
      Some escape sequences can represent characters by their numeric
      character codes. For example, in the ASCII character set:
    </p>

    <pre><code>\\\\x41  →  A
\\\\x42  →  B
\\\\x43  →  C</code></pre>

    <p>
      Numeric character representations should be understood in the
      context of the character encoding being used.
    </p>


    <h3>25. Difference between \\\\n and \\\\t</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Sequence</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>\\\\n</td>
          <td>Moves to a new line.</td>
          <td>printf("A\\\\nB");</td>
        </tr>

        <tr>
          <td>\\\\t</td>
          <td>Inserts a horizontal tab.</td>
          <td>printf("A\\\\tB");</td>
        </tr>

      </tbody>
    </table>


    <h3>26. Difference between \\\\0 and '0'</h3>

    <p>
      These two are different:
    </p>

    <pre><code>'0'
\\\\0</code></pre>

    <p>
      <strong>'0'</strong> is the character zero, while
      <strong>\\\\0</strong> is the null character.
    </p>

    <pre><code>char a = '0';
char b = '\\\\0';</code></pre>


    <h3>27. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("===== C Escape Sequences =====\\\\n\\\\n");

    printf("New Line: A\\\\nB\\\\n");
    printf("Tab: A\\\\tB\\\\n");
    printf("Backslash: \\\\\\\\\\\\n");
    printf("Single Quote: \\\\'\\\\n");
    printf("Double Quote: \\\\\"Hello\\\\\"\\\\n");
    printf("Question Mark: Are you ready\\\\?\\\\n");
    printf("Octal A: \\\\101\\\\n");
    printf("Hex A: \\\\x41\\\\n");

    return 0;
}</code></pre>


    <h3>28. Important Points</h3>

    <ul>
      <li>Escape sequences begin with a backslash.</li>
      <li>\\\\n represents a new-line character.</li>
      <li>\\\\t represents a horizontal tab.</li>
      <li>\\\\r represents a carriage return.</li>
      <li>\\\\b represents a backspace control character.</li>
      <li>\\\\f represents a form-feed character.</li>
      <li>\\\\v represents a vertical-tab character.</li>
      <li>\\\\a represents an alert character.</li>
      <li>\\\\\\\\ represents a backslash.</li>
      <li>\\\\' represents a single quote.</li>
      <li>\\\\&quot; represents a double quote.</li>
      <li>\\\\0 represents the null character.</li>
      <li>C also supports octal and hexadecimal escape sequences.</li>
      <li>Escape sequences are commonly used inside character and string literals.</li>
      <li>The visible effect of some control characters depends on the output device or terminal.</li>
    </ul>
    `
  ],

  practice: [
    'What is an escape sequence in C?',
    'Why are escape sequences used?',
    'Explain the use of \\\\n and \\\\t.',
    'Explain \\\\r and \\\\b.',
    'How do you print a backslash in C?',
    'How do you print single and double quotation marks?',
    'What is the purpose of \\\\0 in a C string?',
    'What is the difference between \\\\0 and the character 0?',
    'What are octal escape sequences?',
    'What are hexadecimal escape sequences?',
    'Write a program demonstrating five different escape sequences.',
    'Write a C program to display a formatted student information table using \\\\n and \\\\t.'
  ],

  code: `#include <stdio.h>

int main() {

    printf("===== C Escape Sequences =====\\\\n\\\\n");

    printf("Name:\\\\tJitesh\\\\n");
    printf("Course:\\\\tC Programming\\\\n");
    printf("Status:\\\\tCompleted\\\\n");

    printf("\\\\nSpecial Characters:\\\\n");
    printf("Double Quote: \\\\\"Hello\\\\\"\\\\n");
    printf("Backslash: \\\\\\\\\\\\n");
    printf("Question Mark: Are you ready\\\\?\\\\n");

    printf("\\\\nNumeric Escape Sequences:\\\\n");
    printf("Octal A: \\\\101\\\\n");
    printf("Hex A: \\\\x41\\\\n");

    return 0;
}`
},
  {
  key: 'comments',
  title: 'Comments in C',

  description: 'Comments are non-executable parts of a C program used to explain code, improve readability, document logic, and temporarily disable code during development.',

  theory: [
    `
    <h3>1. What are Comments?</h3>

    <p>
      <strong>Comments</strong> are text written inside a C program
      that are ignored by the compiler. They are mainly used to
      explain the purpose and working of the code.
    </p>

    <div class="c-comments-flow">

      <div class="c-comment-box">
        <strong>Source Code</strong>
        <span>Program + Comments</span>
      </div>

      <div class="c-comment-arrow">→</div>

      <div class="c-comment-box c-comment-compiler">
        <strong>Compiler</strong>
        <span>Ignores Comments</span>
      </div>

      <div class="c-comment-arrow">→</div>

      <div class="c-comment-box">
        <strong>Executable</strong>
        <span>Only Program Logic</span>
      </div>

    </div>


    <h3>2. Why are Comments Used?</h3>

    <ul>
      <li>To explain what a section of code does.</li>
      <li>To make programs easier to understand.</li>
      <li>To document important information.</li>
      <li>To help other programmers understand the code.</li>
      <li>To make debugging and maintenance easier.</li>
      <li>To temporarily disable a line or section of code.</li>
    </ul>


    <h3>3. Types of Comments in C</h3>

    <p>
      C supports two commonly used forms of comments:
    </p>

    <div class="c-comment-types">

      <div>
        <strong>// Single-Line Comment</strong>
        <span>Used for a comment that continues until the end of the line.</span>
      </div>

      <div>
        <strong>/* Multi-Line Comment */</strong>
        <span>Used for comments that can span multiple lines.</span>
      </div>

    </div>


    <h3>4. Single-Line Comments</h3>

    <p>
      A single-line comment begins with <strong>//</strong>.
      Everything after <strong>//</strong> until the end of that
      source line is treated as a comment.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    // Display a welcome message
    printf("Welcome to C Programming!");

    return 0;
}</code></pre>


    <h3>5. Single-Line Comment after Code</h3>

    <p>
      A comment can also be written after a statement.
    </p>

    <pre><code>int age = 20;  // Store the user's age</code></pre>

    <p>
      The compiler processes the statement but ignores the comment.
    </p>


    <h3>6. Multi-Line Comments</h3>

    <p>
      A multi-line comment begins with <strong>/*</strong> and ends
      with <strong>*/</strong>. It can extend across multiple lines.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    /*
       This program displays
       a welcome message
       on the screen.
    */

    printf("Welcome to C Programming!");

    return 0;
}</code></pre>


    <h3>7. Single-Line vs Multi-Line Comments</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Usage</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Single-Line</td>
          <td>// comment</td>
          <td>Short explanation on one line.</td>
        </tr>

        <tr>
          <td>Multi-Line</td>
          <td>/* comment */</td>
          <td>Longer explanation across one or more lines.</td>
        </tr>

      </tbody>
    </table>


    <h3>8. Comments do not Execute</h3>

    <p>
      Comments are not executed as program instructions.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    // printf("This line will not execute.");

    printf("This line will execute.");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>This line will execute.</code></pre>


    <h3>9. Using Comments to Disable Code</h3>

    <p>
      During development, comments can be used to temporarily
      disable a statement without deleting it.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Line 1\\n");

    // printf("Line 2\\n");

    printf("Line 3\\n");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Line 1
Line 3</code></pre>


    <h3>10. Commenting Multiple Statements</h3>

    <p>
      A multi-line comment can temporarily disable a group of
      statements.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Start\\n");

    /*
    printf("Temporary line 1\\n");
    printf("Temporary line 2\\n");
    printf("Temporary line 3\\n");
    */

    printf("End\\n");

    return 0;
}</code></pre>


    <h3>11. Comments for Documentation</h3>

    <p>
      Comments can describe the purpose of a program, function,
      variable, or important section.
    </p>

    <pre><code>/*
 * Program: Student Marks
 * Purpose: Calculate total marks
 * Author: Developer
 */

#include &lt;stdio.h&gt;

int main() {

    int marks = 85;

    printf("Marks = %d", marks);

    return 0;
}</code></pre>


    <h3>12. Function Comments</h3>

    <p>
      Comments can explain what a function does and what its
      parameters represent.
    </p>

    <pre><code>/*
 * Calculates the sum of two integers.
 */

int add(int a, int b) {

    return a + b;
}</code></pre>


    <h3>13. Variable Comments</h3>

    <p>
      Comments can be used to explain variables when their purpose
      is not obvious from their names.
    </p>

    <pre><code>int age = 20;       // Student's age
float marks = 85.5; // Final marks
char grade = 'A';   // Student grade</code></pre>


    <h3>14. Good Comments</h3>

    <p>
      Good comments explain <strong>why</strong> something is done,
      especially when the reason is not obvious from the code.
    </p>

    <pre><code>// Convert temperature from Celsius to Fahrenheit
fahrenheit = (celsius * 9 / 5) + 32;</code></pre>

    <p>
      The comment gives useful information about the purpose of the
      calculation.
    </p>


    <h3>15. Avoid Unnecessary Comments</h3>

    <p>
      Comments should not simply repeat obvious code.
    </p>

    <pre><code>// Add 1 to count
count = count + 1;</code></pre>

    <p>
      A clearer variable name or well-structured code may make such
      a comment unnecessary.
    </p>


    <h3>16. Comments and Whitespace</h3>

    <p>
      Comments can be placed on separate lines or after statements,
      but they should be formatted consistently.
    </p>

    <pre><code>// Calculate total marks
int total = math + science + english;</code></pre>


    <h3>17. Nested Comments</h3>

    <p>
      C block comments do not nest. Therefore, placing one
      block comment inside another block comment is not a valid way
      to create nested comments.
    </p>

    <pre><code>/*
    Outer comment

    /*
        Inner comment
    */

    Outer comment
*/</code></pre>

    <p>
      The inner <strong>*/</strong> ends the first block comment.
      This can cause unexpected compilation errors.
    </p>


    <h3>18. Comments Inside Strings</h3>

    <p>
      Comment symbols inside a string literal are treated as part of
      the string, not as comments.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("// This is text, not a comment");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>// This is text, not a comment</code></pre>


    <h3>19. Comment Symbols Inside Character Constants</h3>

    <p>
      The characters used to begin comments have no special comment
      meaning when they occur inside a character constant or string
      literal.
    </p>

    <pre><code>char slash = '/';
char star = '*';</code></pre>


    <h3>20. Comments in Conditional Code</h3>

    <p>
      Comments can help explain conditions and program decisions.
    </p>

    <pre><code>if (marks >= 40) {

    // Student has passed
    printf("Pass");

} else {

    // Student has failed
    printf("Fail");
}</code></pre>


    <h3>21. Comments in Loops</h3>

    <p>
      Comments can explain the purpose of loops.
    </p>

    <pre><code>// Print numbers from 1 to 5
for (int i = 1; i &lt;= 5; i++) {

    printf("%d\\n", i);
}</code></pre>


    <h3>22. Comments in Large Programs</h3>

    <p>
      In large programs, comments can divide the source code into
      logical sections.
    </p>

    <pre><code>/* ===== Input Section ===== */

printf("Enter number: ");
scanf("%d", &amp;number);


/* ===== Processing Section ===== */

result = number * number;


/* ===== Output Section ===== */

printf("Result = %d", result);</code></pre>


    <h3>23. Comment Structure</h3>

    <div class="c-comment-map">

      <div class="c-comment-map-item">
        <strong>//</strong>
        <span>Start Single-Line Comment</span>
      </div>

      <div class="c-comment-map-item">
        <strong>/*</strong>
        <span>Start Multi-Line Comment</span>
      </div>

      <div class="c-comment-map-item">
        <strong>*/</strong>
        <span>End Multi-Line Comment</span>
      </div>

      <div class="c-comment-map-item">
        <strong>Compiler</strong>
        <span>Ignores Comments</span>
      </div>

    </div>


    <h3>24. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

/*
 * Program: Student Result
 * Purpose: Calculate and display total marks.
 */

int main() {

    // Declare marks for three subjects
    int math = 80;
    int science = 75;
    int english = 85;

    // Calculate total marks
    int total = math + science + english;

    // Display the result
    printf("Math: %d\\n", math);
    printf("Science: %d\\n", science);
    printf("English: %d\\n", english);
    printf("Total: %d\\n", total);

    return 0;
}</code></pre>


    <h3>25. Best Practices for Comments</h3>

    <ul>
      <li>Write comments that add useful information.</li>
      <li>Keep comments clear and concise.</li>
      <li>Explain complex logic when necessary.</li>
      <li>Prefer meaningful variable and function names.</li>
      <li>Keep comments updated when code changes.</li>
      <li>Avoid writing comments for every obvious statement.</li>
      <li>Use consistent formatting throughout the project.</li>
      <li>Use comments to explain why something is done when the reason is not obvious.</li>
    </ul>


    <h3>26. Important Points</h3>

    <ul>
      <li>Comments are ignored by the compiler during program translation.</li>
      <li>C supports // single-line comments.</li>
      <li>C supports /* multi-line comments */.</li>
      <li>Comments improve code readability and maintainability.</li>
      <li>Comments can temporarily disable code.</li>
      <li>Block comments cannot be nested.</li>
      <li>Comment markers inside string literals are treated as normal characters.</li>
      <li>Good comments explain purpose or reasoning rather than repeating obvious code.</li>
    </ul>
    `
  ],

  practice: [
    'What are comments in C?',
    'Why are comments used in C programs?',
    'What is a single-line comment?',
    'What is a multi-line comment?',
    'Explain the difference between // and /* */ comments.',
    'Can comments be executed by the compiler?',
    'How can comments be used to temporarily disable code?',
    'Can block comments be nested in C?',
    'Write a C program using both single-line and multi-line comments.',
    'Write comments explaining the input, processing, and output sections of a program.',
    'Why should unnecessary comments be avoided?',
    'Write a C program to calculate student marks and properly document the code.'
  ],

  code: `#include <stdio.h>

/*
 * Program: Student Result
 * Purpose: Calculate and display total marks.
 */

int main() {

    // Declare marks for three subjects
    int math = 80;
    int science = 75;
    int english = 85;

    // Calculate total marks
    int total = math + science + english;

    // Display the result
    printf("===== Student Result =====\\\\n");
    printf("Math: %d\\\\n", math);
    printf("Science: %d\\\\n", science);
    printf("English: %d\\\\n", english);
    printf("Total: %d\\\\n", total);

    return 0;
}`
},
  {
  key: 'type-casting',
  title: 'Type Casting in C',

  description: 'Type casting is the process of converting a value from one data type to another. In C, conversion can be performed implicitly by the compiler or explicitly by the programmer using a cast operator.',

  theory: [
    `
    <h3>1. What is Type Casting?</h3>

    <p>
      <strong>Type casting</strong> is the process of converting a
      value from one data type to another data type.
    </p>

    <p>
      For example, an integer can be converted into a floating-point
      value:
    </p>

    <pre><code>int number = 10;
float value = (float) number;</code></pre>

    <div class="c-casting-flow">

      <div class="c-cast-box">
        <strong>int</strong>
        <span>10</span>
      </div>

      <div class="c-cast-arrow">→</div>

      <div class="c-cast-box c-cast-process">
        <strong>Type Casting</strong>
        <span>(float)</span>
      </div>

      <div class="c-cast-arrow">→</div>

      <div class="c-cast-box">
        <strong>float</strong>
        <span>10.0</span>
      </div>

    </div>


    <h3>2. Types of Type Conversion</h3>

    <p>
      C mainly provides two forms of type conversion:
    </p>

    <div class="c-casting-types">

      <div>
        <strong>Implicit Conversion</strong>
        <span>Performed automatically by the compiler.</span>
      </div>

      <div>
        <strong>Explicit Conversion</strong>
        <span>Performed manually by the programmer using a cast.</span>
      </div>

    </div>


    <h3>3. Implicit Type Conversion</h3>

    <p>
      <strong>Implicit conversion</strong> occurs automatically when
      the compiler converts a value from one type to another according
      to the rules of the C language.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int number = 10;
    float value;

    value = number;

    printf("Number = %d\\n", number);
    printf("Value = %.2f\\n", value);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Number = 10
Value = 10.00</code></pre>


    <h3>4. Integer to Float Conversion</h3>

    <p>
      When an integer is assigned to a floating-point variable,
      the integer can be converted to a floating-point value.
    </p>

    <pre><code>int a = 25;
float b = a;

printf("%.2f", b);</code></pre>

    <p>Output:</p>

    <pre><code>25.00</code></pre>


    <h3>5. Integer to Double Conversion</h3>

    <pre><code>int number = 50;
double value = number;

printf("%f", value);</code></pre>

    <p>
      The integer value is converted to a double value.
    </p>


    <h3>6. Character to Integer Conversion</h3>

    <p>
      In C, a character is represented by an integer character code.
      When used in an integer context, the character's value is
      converted to an integer.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char ch = 'A';

    printf("Character = %c\\n", ch);
    printf("Code = %d\\n", ch);

    return 0;
}</code></pre>

    <p>
      In an ASCII environment, the output for <strong>A</strong> is
      typically:
    </p>

    <pre><code>Character = A
Code = 65</code></pre>


    <h3>7. Integer to Character Conversion</h3>

    <p>
      An integer value can be converted to a character type. The
      resulting character depends on the character encoding.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int code = 65;

    printf("%c", (char) code);

    return 0;
}</code></pre>

    <p>
      In ASCII, this prints:
    </p>

    <pre><code>A</code></pre>


    <h3>8. Explicit Type Casting</h3>

    <p>
      <strong>Explicit type casting</strong> is performed manually
      by the programmer using the cast operator.
    </p>

    <p>Syntax:</p>

    <pre><code>(target_type) expression</code></pre>

    <p>Example:</p>

    <pre><code>float result = (float) 10 / 3;</code></pre>


    <h3>9. Integer Division Problem</h3>

    <p>
      When two integers are divided, C performs integer division.
      The fractional part is discarded.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a = 10;
    int b = 3;

    printf("%d", a / b);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>3</code></pre>


    <h3>10. Solving Integer Division using Casting</h3>

    <p>
      By converting one operand to float, floating-point division is
      performed.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a = 10;
    int b = 3;

    float result = (float) a / b;

    printf("%.2f", result);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>3.33</code></pre>


    <h3>11. Casting Float to Integer</h3>

    <p>
      When a floating-point value is converted to an integer, the
      fractional part is discarded. This is not rounding.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    float value = 12.75f;

    int number = (int) value;

    printf("%d", number);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>12</code></pre>


    <h3>12. Casting Negative Floating Values</h3>

    <p>
      When a finite floating-point value is converted to an integer
      type, the fractional part is discarded.
    </p>

    <pre><code>float value = -12.75f;

int number = (int) value;

printf("%d", number);</code></pre>

    <p>Output:</p>

    <pre><code>-12</code></pre>


    <h3>13. Float to Double</h3>

    <p>
      A float can be converted to double. This conversion generally
      preserves the represented value, although the original float
      has less precision than double.
    </p>

    <pre><code>float a = 10.5f;
double b = (double) a;

printf("%.2f", b);</code></pre>


    <h3>14. Double to Float</h3>

    <p>
      A double can be explicitly converted to float, but precision
      or range may be lost.
    </p>

    <pre><code>double a = 10.123456789;
float b = (float) a;

printf("%.6f", b);</code></pre>


    <h3>15. Type Casting in Expressions</h3>

    <p>
      Type casting can be used inside expressions to control the type
      of calculation.
    </p>

    <pre><code>int total = 10;
int count = 4;

float average = (float) total / count;

printf("%.2f", average);</code></pre>

    <p>Output:</p>

    <pre><code>2.50</code></pre>


    <h3>16. Casting Multiple Values</h3>

    <pre><code>int a = 5;
int b = 2;

float result = (float) a / (float) b;

printf("%.2f", result);</code></pre>

    <p>Output:</p>

    <pre><code>2.50</code></pre>


    <h3>17. Type Casting and Arithmetic</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a = 5;
    int b = 2;

    printf("Integer result = %d\\n", a / b);
    printf("Float result = %.2f\\n", (float) a / b);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Integer result = 2
Float result = 2.50</code></pre>


    <h3>18. Implicit vs Explicit Conversion</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Implicit</th>
          <th>Explicit</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Performed by</td>
          <td>Compiler</td>
          <td>Programmer</td>
        </tr>

        <tr>
          <td>Syntax</td>
          <td>No cast required</td>
          <td>(type) expression</td>
        </tr>

        <tr>
          <td>Control</td>
          <td>Less direct control</td>
          <td>More direct control</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>float x = 10;</td>
          <td>float x = (float) 10;</td>
        </tr>

      </tbody>
    </table>


    <h3>19. Narrowing Conversion</h3>

    <p>
      A conversion from a type that can represent a wider range or
      more precision to a type with a smaller range or precision can
      result in loss of information.
    </p>

    <pre><code>double value = 123.456789;

int number = (int) value;

printf("%d", number);</code></pre>

    <p>
      The fractional part is discarded, producing:
    </p>

    <pre><code>123</code></pre>


    <h3>20. Widening Conversion</h3>

    <p>
      A conversion from a type with less range or precision to a type
      with greater range or precision is often called a widening
      conversion.
    </p>

    <pre><code>int number = 100;

double value = number;

printf("%.2f", value);</code></pre>

    <p>Output:</p>

    <pre><code>100.00</code></pre>


    <h3>21. Casting and Data Loss</h3>

    <p>
      Type casting does not automatically guarantee that the original
      value will be preserved.
    </p>

    <pre><code>float price = 99.99f;

int value = (int) price;

printf("%d", value);</code></pre>

    <p>Output:</p>

    <pre><code>99</code></pre>

    <p>
      The decimal portion is lost during the conversion.
    </p>


    <h3>22. Casting in Percentage Calculation</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int obtained = 425;
    int total = 500;

    float percentage;

    percentage = ((float) obtained / total) * 100;

    printf("Percentage = %.2f%%", percentage);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Percentage = 85.00%</code></pre>


    <h3>23. Casting in Average Calculation</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a = 80;
    int b = 75;
    int c = 90;

    float average;

    average = (float)(a + b + c) / 3;

    printf("Average = %.2f", average);

    return 0;
}</code></pre>


    <h3>24. Casting with Character Values</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char ch = 'A';

    int code = (int) ch;

    printf("Character = %c\\n", ch);
    printf("Integer value = %d\\n", code);

    return 0;
}</code></pre>


    <h3>25. Casting a Pointer</h3>

    <p>
      Pointer conversions are different from ordinary numeric type
      conversions and should be performed carefully.
    </p>

    <p>
      A common example is converting an object pointer to
      <strong>void *</strong> when passing it to functions such as
      printf() with <strong>%p</strong>.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int number = 10;
    int *ptr = &amp;number;

    printf("Address = %p", (void *) ptr);

    return 0;
}</code></pre>


    <h3>26. Important Rules</h3>

    <ul>
      <li>Type casting converts a value to another type.</li>
      <li>Implicit conversion is performed automatically.</li>
      <li>Explicit conversion uses the cast operator.</li>
      <li>The syntax of a cast is (type) expression.</li>
      <li>Integer division can be changed to floating-point division by casting an operand.</li>
      <li>Converting floating-point values to integers discards the fractional part.</li>
      <li>Narrowing conversions may cause loss of information.</li>
      <li>Always choose a suitable target type for the required calculation.</li>
      <li>Pointer casts are different from ordinary numeric casts and require care.</li>
    </ul>


    <h3>27. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int obtained = 425;
    int total = 500;

    int integerResult;
    float percentage;

    // Integer division
    integerResult = obtained / total;

    // Explicit type casting
    percentage = ((float) obtained / total) * 100;

    printf("Integer Division = %d\\n", integerResult);
    printf("Percentage = %.2f%%\\n", percentage);

    return 0;
}</code></pre>
    `
  ],

  practice: [
    'What is type casting in C?',
    'What is the difference between implicit and explicit conversion?',
    'What is the syntax of explicit type casting?',
    'Write a program to convert an integer into a float.',
    'Write a program to convert a float into an integer.',
    'Why does integer division produce a truncated result?',
    'How can type casting be used to perform floating-point division?',
    'What happens to the fractional part when a float is converted to int?',
    'Explain widening and narrowing conversions.',
    'Write a program to calculate percentage using type casting.',
    'Write a program to calculate the average of three integers using type casting.',
    'Explain character-to-integer conversion with an example.'
  ],

  code: `#include <stdio.h>

int main() {

    int obtained = 425;
    int total = 500;

    int integerResult;
    float percentage;

    // Integer division
    integerResult = obtained / total;

    // Explicit type casting
    percentage = ((float) obtained / total) * 100;

    printf("===== Type Casting in C =====\\\\n\\\\n");

    printf("Integer Division = %d\\\\n", integerResult);
    printf("Percentage = %.2f%%\\\\n", percentage);

    // Float to integer conversion
    float price = 99.99f;
    int integerPrice = (int) price;

    printf("Original Price = %.2f\\\\n", price);
    printf("After Casting = %d\\\\n", integerPrice);

    return 0;
}`
},
  {
  key: 'decision-making',
  title: 'Decision Making in C',

  description: 'Decision-making statements allow a C program to evaluate conditions and choose which block of code should be executed.',

  theory: [
    `
    <h3>1. What is Decision Making?</h3>

    <p>
      <strong>Decision making</strong> in C means selecting a particular
      block of code based on whether a condition is true or false.
    </p>

    <p>
      For example, a program can check whether a student has passed
      or failed based on their marks.
    </p>

    <div class="c-decision-flow">

      <div class="c-decision-start">
        <strong>Condition</strong>
        <span>marks >= 40</span>
      </div>

      <div class="c-decision-arrow">↓</div>

      <div class="c-decision-box">
        <strong>TRUE</strong>
        <span>Execute Pass Block</span>
      </div>

      <div class="c-decision-or">OR</div>

      <div class="c-decision-box">
        <strong>FALSE</strong>
        <span>Execute Fail Block</span>
      </div>

    </div>


    <h3>2. Decision-Making Statements in C</h3>

    <p>
      C provides several statements for making decisions:
    </p>

    <ul>
      <li><strong>if</strong> statement</li>
      <li><strong>if-else</strong> statement</li>
      <li><strong>else-if ladder</strong></li>
      <li><strong>nested if</strong></li>
      <li><strong>switch</strong> statement</li>
      <li><strong>conditional operator</strong> (?:)</li>
    </ul>


    <h3>3. if Statement</h3>

    <p>
      The <strong>if</strong> statement executes a block of code only
      when its condition is true.
    </p>

    <p>Syntax:</p>

    <pre><code>if (condition) {
    // statements
}</code></pre>

    <p>Example:</p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int marks = 75;

    if (marks >= 40) {
        printf("Pass");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Pass</code></pre>


    <h3>4. if Statement Flow</h3>

    <pre><code>        Condition
            |
        ┌───┴───┐
       TRUE    FALSE
        |        |
   Execute      Skip
     Block      Block
        |
        ↓
      Continue</code></pre>


    <h3>5. if-else Statement</h3>

    <p>
      The <strong>if-else</strong> statement provides two possible
      execution paths.
    </p>

    <p>
      If the condition is true, the <strong>if</strong> block runs.
      Otherwise, the <strong>else</strong> block runs.
    </p>

    <p>Syntax:</p>

    <pre><code>if (condition) {
    // true block
} else {
    // false block
}</code></pre>

    <p>Example:</p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int number = 10;

    if (number % 2 == 0) {
        printf("Even");
    } else {
        printf("Odd");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Even</code></pre>


    <h3>6. else-if Ladder</h3>

    <p>
      An <strong>else-if ladder</strong> is used when multiple
      conditions need to be checked.
    </p>

    <p>
      Conditions are checked from top to bottom. The first true
      condition executes its block, and the remaining conditions are
      skipped.
    </p>

    <p>Syntax:</p>

    <pre><code>if (condition1) {
    // block 1
}
else if (condition2) {
    // block 2
}
else if (condition3) {
    // block 3
}
else {
    // default block
}</code></pre>


    <h3>7. Example of else-if Ladder</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int marks = 82;

    if (marks >= 90) {
        printf("Grade A+");
    }
    else if (marks >= 80) {
        printf("Grade A");
    }
    else if (marks >= 70) {
        printf("Grade B");
    }
    else if (marks >= 60) {
        printf("Grade C");
    }
    else {
        printf("Grade D");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Grade A</code></pre>


    <h3>8. Nested if Statement</h3>

    <p>
      A <strong>nested if</strong> means placing one if statement
      inside another if statement.
    </p>

    <pre><code>if (condition1) {

    if (condition2) {
        // statements
    }

}</code></pre>


    <h3>9. Example of Nested if</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age = 20;
    int hasID = 1;

    if (age >= 18) {

        if (hasID == 1) {
            printf("Entry allowed");
        }

    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Entry allowed</code></pre>


    <h3>10. Multiple Conditions using Logical Operators</h3>

    <p>
      Logical operators can be used to combine multiple conditions.
    </p>

    <ul>
      <li><strong>&amp;&amp;</strong> - Logical AND</li>
      <li><strong>||</strong> - Logical OR</li>
      <li><strong>!</strong> - Logical NOT</li>
    </ul>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age = 20;

    if (age >= 18 &amp;&amp; age <= 60) {
        printf("Eligible");
    }

    return 0;
}</code></pre>


    <h3>11. switch Statement</h3>

    <p>
      The <strong>switch</strong> statement is used to select one
      block from multiple possible cases based on the value of an
      expression.
    </p>

    <p>Syntax:</p>

    <pre><code>switch (expression) {

    case value1:
        // statements
        break;

    case value2:
        // statements
        break;

    default:
        // default statements
}</code></pre>


    <h3>12. Example of switch</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int day = 2;

    switch (day) {

        case 1:
            printf("Monday");
            break;

        case 2:
            printf("Tuesday");
            break;

        case 3:
            printf("Wednesday");
            break;

        default:
            printf("Invalid day");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Tuesday</code></pre>


    <h3>13. break in switch</h3>

    <p>
      The <strong>break</strong> statement terminates the switch
      statement and transfers control to the statement following it.
    </p>

    <pre><code>switch (choice) {

    case 1:
        printf("Option 1");
        break;

    case 2:
        printf("Option 2");
        break;

    default:
        printf("Invalid choice");
}</code></pre>


    <h3>14. What Happens Without break?</h3>

    <p>
      If a matching case does not contain a break, execution continues
      into the following cases. This behavior is called
      <strong>fall-through</strong>.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int number = 1;

    switch (number) {

        case 1:
            printf("One\\n");

        case 2:
            printf("Two\\n");

        case 3:
            printf("Three\\n");

        default:
            printf("End");
    }

    return 0;
}</code></pre>

    <p>
      Because there are no break statements, execution falls through
      the subsequent cases after case 1.
    </p>


    <h3>15. default in switch</h3>

    <p>
      The <strong>default</strong> block is executed when none of the
      case values match the switch expression.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int choice = 5;

    switch (choice) {

        case 1:
            printf("Start");
            break;

        case 2:
            printf("Stop");
            break;

        default:
            printf("Invalid choice");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Invalid choice</code></pre>


    <h3>16. switch with Character</h3>

    <p>
      A switch expression can also use a character value.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char grade = 'A';

    switch (grade) {

        case 'A':
            printf("Excellent");
            break;

        case 'B':
            printf("Good");
            break;

        case 'C':
            printf("Average");
            break;

        default:
            printf("Invalid grade");
    }

    return 0;
}</code></pre>


    <h3>17. switch vs if-else</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>if-else</th>
          <th>switch</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Conditions</td>
          <td>Can handle complex conditions.</td>
          <td>Primarily compares one expression with case values.</td>
        </tr>

        <tr>
          <td>Operators</td>
          <td>Supports relational and logical expressions.</td>
          <td>Uses case values for matching.</td>
        </tr>

        <tr>
          <td>Ranges</td>
          <td>Good for ranges such as marks &gt;= 80.</td>
          <td>Not directly designed for ranges.</td>
        </tr>

        <tr>
          <td>Multiple choices</td>
          <td>Can be used.</td>
          <td>Often convenient for discrete choices.</td>
        </tr>

        <tr>
          <td>Readability</td>
          <td>Good for complex conditions.</td>
          <td>Good for menu-like choices.</td>
        </tr>

      </tbody>
    </table>


    <h3>18. Conditional Operator</h3>

    <p>
      The <strong>conditional operator</strong> is a compact way to
      select one of two expressions.
    </p>

    <p>Syntax:</p>

    <pre><code>condition ? expression1 : expression2;</code></pre>

    <p>Example:</p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age = 20;

    printf("%s", age >= 18 ? "Adult" : "Minor");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Adult</code></pre>


    <h3>19. if-else vs Conditional Operator</h3>

    <pre><code>// Using if-else

if (a &gt; b) {
    max = a;
} else {
    max = b;
}


// Using conditional operator

max = (a &gt; b) ? a : b;</code></pre>

    <p>
      The conditional operator is useful for simple two-way choices.
      For complex logic, an if-else statement is usually clearer.
    </p>


    <h3>20. Decision Making Flow</h3>

    <div class="c-decision-map">

      <div class="c-decision-map-item">
        <strong>if</strong>
        <span>One condition</span>
      </div>

      <div class="c-decision-map-item">
        <strong>if-else</strong>
        <span>Two paths</span>
      </div>

      <div class="c-decision-map-item">
        <strong>else-if</strong>
        <span>Multiple conditions</span>
      </div>

      <div class="c-decision-map-item">
        <strong>nested if</strong>
        <span>Condition inside condition</span>
      </div>

      <div class="c-decision-map-item">
        <strong>switch</strong>
        <span>Multiple fixed choices</span>
      </div>

      <div class="c-decision-map-item">
        <strong>?:</strong>
        <span>Short two-way decision</span>
      </div>

    </div>


    <h3>21. Real-Life Example: Age Check</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int age;

    printf("Enter your age: ");
    scanf("%d", &amp;age);

    if (age &gt;= 18) {
        printf("You are eligible to vote.");
    } else {
        printf("You are not eligible to vote.");
    }

    return 0;
}</code></pre>


    <h3>22. Real-Life Example: Largest of Two Numbers</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a = 25;
    int b = 40;

    if (a &gt; b) {
        printf("%d is greater", a);
    }
    else if (b &gt; a) {
        printf("%d is greater", b);
    }
    else {
        printf("Both are equal");
    }

    return 0;
}</code></pre>


    <h3>23. Menu-Driven Program using switch</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int choice;

    printf("1. Add\\n");
    printf("2. Subtract\\n");
    printf("3. Multiply\\n");
    printf("4. Divide\\n");

    printf("Enter choice: ");
    scanf("%d", &amp;choice);

    switch (choice) {

        case 1:
            printf("Addition selected");
            break;

        case 2:
            printf("Subtraction selected");
            break;

        case 3:
            printf("Multiplication selected");
            break;

        case 4:
            printf("Division selected");
            break;

        default:
            printf("Invalid choice");
    }

    return 0;
}</code></pre>


    <h3>24. Important Points</h3>

    <ul>
      <li>Decision-making statements control which code block executes.</li>
      <li>if executes a block when a condition is true.</li>
      <li>if-else provides two possible paths.</li>
      <li>else-if is useful for checking multiple conditions.</li>
      <li>Nested if means an if statement inside another if statement.</li>
      <li>switch is useful for selecting among discrete case values.</li>
      <li>break prevents unwanted fall-through between switch cases.</li>
      <li>default handles unmatched switch cases.</li>
      <li>The conditional operator provides a compact two-way choice.</li>
      <li>Logical and relational operators are commonly used in conditions.</li>
    </ul>


    <h3>25. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int marks;

    printf("Enter marks: ");
    scanf("%d", &amp;marks);

    if (marks &lt; 0 || marks &gt; 100) {

        printf("Invalid marks");

    }
    else if (marks &gt;= 90) {

        printf("Grade A+");

    }
    else if (marks &gt;= 80) {

        printf("Grade A");

    }
    else if (marks &gt;= 70) {

        printf("Grade B");

    }
    else if (marks &gt;= 60) {

        printf("Grade C");

    }
    else if (marks &gt;= 40) {

        printf("Grade D");

    }
    else {

        printf("Fail");

    }

    return 0;
}</code></pre>
    `
  ],

  practice: [
    'What is decision making in C?',
    'Explain the if statement with an example.',
    'What is the difference between if and if-else?',
    'What is an else-if ladder?',
    'What is a nested if statement?',
    'Explain the switch statement.',
    'What is the purpose of break in a switch statement?',
    'What is fall-through in switch?',
    'What is the purpose of the default case?',
    'Write a program to check whether a number is positive, negative, or zero.',
    'Write a program to find the largest of three numbers.',
    'Write a program to check whether a student has passed or failed.',
    'Write a menu-driven calculator using switch.',
    'Write a program to assign grades using an else-if ladder.',
    'Explain the conditional operator with an example.'
  ],

  code: `#include <stdio.h>

int main() {

    int marks;

    printf("===== Student Grade Checker =====\\\\n");
    printf("Enter marks: ");
    scanf("%d", &marks);

    if (marks < 0 || marks > 100) {

        printf("Invalid marks");

    }
    else if (marks >= 90) {

        printf("Grade A+");

    }
    else if (marks >= 80) {

        printf("Grade A");

    }
    else if (marks >= 70) {

        printf("Grade B");

    }
    else if (marks >= 60) {

        printf("Grade C");

    }
    else if (marks >= 40) {

        printf("Grade D");

    }
    else {

        printf("Fail");

    }

    return 0;
}`
},
  {
  key: 'loops',
  title: 'Loops in C',

  description: 'Loops are control structures in C that repeatedly execute a block of code while a specified condition is satisfied.',

  theory: [
    `
    <h3>1. What are Loops?</h3>

    <p>
      A <strong>loop</strong> is a control structure that allows a
      program to execute the same block of code repeatedly.
      Instead of writing the same statement many times, a loop can
      perform the repetition automatically.
    </p>

    <div class="c-loop-flow">

      <div class="c-loop-box">
        <strong>Initialize</strong>
        <span>Starting value</span>
      </div>

      <div class="c-loop-arrow">→</div>

      <div class="c-loop-box">
        <strong>Condition</strong>
        <span>Check condition</span>
      </div>

      <div class="c-loop-arrow">→</div>

      <div class="c-loop-box c-loop-process">
        <strong>Execute</strong>
        <span>Run loop body</span>
      </div>

      <div class="c-loop-arrow">→</div>

      <div class="c-loop-box">
        <strong>Update</strong>
        <span>Change value</span>
      </div>

      <div class="c-loop-arrow">↺</div>

    </div>


    <h3>2. Why are Loops Used?</h3>

    <ul>
      <li>To repeat a block of code.</li>
      <li>To process multiple values.</li>
      <li>To reduce duplicate code.</li>
      <li>To work with arrays and collections.</li>
      <li>To perform calculations repeatedly.</li>
      <li>To create menu-driven or repeated programs.</li>
    </ul>


    <h3>3. Types of Loops in C</h3>

    <p>
      C provides three primary loop statements:
    </p>

    <div class="c-loop-types">

      <div>
        <strong>for Loop</strong>
        <span>Useful when initialization, condition, and update are clearly known.</span>
      </div>

      <div>
        <strong>while Loop</strong>
        <span>Checks the condition before each iteration.</span>
      </div>

      <div>
        <strong>do-while Loop</strong>
        <span>Executes the body at least once before checking the condition.</span>
      </div>

    </div>


    <h3>4. for Loop</h3>

    <p>
      The <strong>for loop</strong> is commonly used when the number
      of iterations or the loop control structure is known.
    </p>

    <p>Syntax:</p>

    <pre><code>for (initialization; condition; update) {
    // statements
}</code></pre>


    <h3>5. Example of for Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 1; i &lt;= 5; i++) {
        printf("%d\\n", i);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1
2
3
4
5</code></pre>


    <h3>6. Working of for Loop</h3>

    <pre><code>Initialization
      |
      ↓
  Condition
      |
   ┌──┴──┐
 TRUE   FALSE
   |       |
   ↓       ↓
Body     Exit
   |
   ↓
Update
   |
   └──────→ Condition</code></pre>


    <h3>7. for Loop Example: Even Numbers</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 2; i &lt;= 10; i += 2) {
        printf("%d\\n", i);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>2
4
6
8
10</code></pre>


    <h3>8. for Loop Example: Reverse Counting</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 5; i &gt;= 1; i--) {
        printf("%d\\n", i);
    }

    return 0;
}</code></pre>


    <h3>9. while Loop</h3>

    <p>
      The <strong>while loop</strong> repeatedly executes its body
      as long as its condition remains true.
    </p>

    <p>
      The condition is checked before every iteration.
    </p>

    <p>Syntax:</p>

    <pre><code>while (condition) {
    // statements
}</code></pre>


    <h3>10. Example of while Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int i = 1;

    while (i &lt;= 5) {

        printf("%d\\n", i);

        i++;
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1
2
3
4
5</code></pre>


    <h3>11. Working of while Loop</h3>

    <pre><code>       Condition
           |
       ┌───┴───┐
      TRUE    FALSE
       |        |
       ↓        ↓
      Body     Exit
       |
       ↓
     Update
       |
       └────→ Condition</code></pre>


    <h3>12. do-while Loop</h3>

    <p>
      The <strong>do-while loop</strong> executes its body first and
      checks the condition afterward.
    </p>

    <p>
      Therefore, the body executes at least once.
    </p>

    <p>Syntax:</p>

    <pre><code>do {
    // statements
} while (condition);</code></pre>


    <h3>13. Example of do-while Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int i = 1;

    do {

        printf("%d\\n", i);

        i++;

    } while (i &lt;= 5);

    return 0;
}</code></pre>


    <h3>14. do-while Executes at Least Once</h3>

    <p>
      Even if the condition is initially false, the body of a
      do-while loop executes once.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int i = 10;

    do {

        printf("Hello");

    } while (i &lt; 5);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Hello</code></pre>


    <h3>15. Difference between for, while and do-while</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>for</th>
          <th>while</th>
          <th>do-while</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Condition Check</td>
          <td>Before iteration</td>
          <td>Before iteration</td>
          <td>After iteration</td>
        </tr>

        <tr>
          <td>Minimum Executions</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Initialization</td>
          <td>Usually in loop header</td>
          <td>Usually before loop</td>
          <td>Usually before loop</td>
        </tr>

        <tr>
          <td>Update</td>
          <td>Usually in loop header</td>
          <td>Usually inside body</td>
          <td>Usually inside body</td>
        </tr>

        <tr>
          <td>Common Use</td>
          <td>Count-controlled loops</td>
          <td>Condition-controlled loops</td>
          <td>Menus and at-least-once operations</td>
        </tr>

      </tbody>
    </table>


    <h3>16. Nested Loops</h3>

    <p>
      A <strong>nested loop</strong> is a loop placed inside another
      loop.
    </p>

    <pre><code>for (int i = 1; i &lt;= 3; i++) {

    for (int j = 1; j &lt;= 3; j++) {

        printf("* ");

    }

    printf("\\n");
}</code></pre>

    <p>Output:</p>

    <pre><code>* * *
* * *
* * *</code></pre>


    <h3>17. Nested Loop Working</h3>

    <p>
      For every one iteration of the outer loop, the inner loop
      completes all of its iterations.
    </p>

    <pre><code>Outer Loop
    │
    ├── Inner Loop → Complete
    │
    ├── Inner Loop → Complete
    │
    └── Inner Loop → Complete</code></pre>


    <h3>18. Multiplication Table using Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int number = 5;

    for (int i = 1; i &lt;= 10; i++) {

        printf("%d x %d = %d\\n",
               number,
               i,
               number * i);
    }

    return 0;
}</code></pre>


    <h3>19. Sum of Numbers using Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int sum = 0;

    for (int i = 1; i &lt;= 10; i++) {

        sum += i;
    }

    printf("Sum = %d", sum);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Sum = 55</code></pre>


    <h3>20. Factorial using Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int n = 5;
    int factorial = 1;

    for (int i = 1; i &lt;= n; i++) {

        factorial *= i;
    }

    printf("Factorial = %d", factorial);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Factorial = 120</code></pre>


    <h3>21. Infinite Loop</h3>

    <p>
      An <strong>infinite loop</strong> is a loop that does not
      terminate because its condition never becomes false.
    </p>

    <pre><code>while (1) {

    printf("Running...\\n");
}</code></pre>

    <p>
      Such loops are sometimes intentional, but they should normally
      have a clear termination mechanism when used in applications.
    </p>


    <h3>22. for Loop without Initialization</h3>

    <p>
      The initialization, condition, and update parts of a for loop
      are optional individually.
    </p>

    <pre><code>int i = 1;

for (; i &lt;= 5; i++) {

    printf("%d\\n", i);
}</code></pre>


    <h3>23. for Loop without Update</h3>

    <pre><code>int i = 1;

for (; i &lt;= 5;) {

    printf("%d\\n", i);

    i++;
}</code></pre>


    <h3>24. Multiple Variables in for Loop</h3>

    <p>
      A for loop can initialize and update more than one variable.
    </p>

    <pre><code>for (int i = 1, j = 5; i &lt;= 5; i++, j--) {

    printf("%d %d\\n", i, j);
}</code></pre>


    <h3>25. Loop with Conditional Logic</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 1; i &lt;= 10; i++) {

        if (i % 2 == 0) {
            printf("%d is even\\n", i);
        }
    }

    return 0;
}</code></pre>


    <h3>26. Loop Control Statements</h3>

    <p>
      C provides statements that can change the normal flow of a
      loop.
    </p>

    <ul>
      <li><strong>break</strong> - terminates the loop.</li>
      <li><strong>continue</strong> - skips the remaining body of the current iteration.</li>
      <li><strong>goto</strong> - transfers control to a labeled statement and should be used carefully.</li>
    </ul>

    <pre><code>for (int i = 1; i &lt;= 10; i++) {

    if (i == 5) {
        break;
    }

    printf("%d\\n", i);
}</code></pre>

    <p>Output:</p>

    <pre><code>1
2
3
4</code></pre>


    <h3>27. continue in Loop</h3>

    <p>
      The <strong>continue</strong> statement skips the remaining
      statements in the current iteration and proceeds to the next
      iteration.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 1; i &lt;= 5; i++) {

        if (i == 3) {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1
2
4
5</code></pre>


    <h3>28. Looping through Numbers</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 1; i &lt;= 20; i++) {

        printf("%d ", i);
    }

    return 0;
}</code></pre>


    <h3>29. Reverse Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 10; i &gt;= 1; i--) {

        printf("%d ", i);
    }

    return 0;
}</code></pre>


    <h3>30. Pattern using Nested Loops</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 1; i &lt;= 5; i++) {

        for (int j = 1; j &lt;= i; j++) {

            printf("* ");
        }

        printf("\\n");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>*
* *
* * *
* * * *
* * * * *</code></pre>


    <h3>31. Loop Decision Diagram</h3>

    <div class="c-loop-map">

      <div class="c-loop-map-item">
        <strong>for</strong>
        <span>Initialization → Condition → Body → Update</span>
      </div>

      <div class="c-loop-map-item">
        <strong>while</strong>
        <span>Condition → Body → Update</span>
      </div>

      <div class="c-loop-map-item">
        <strong>do-while</strong>
        <span>Body → Update → Condition</span>
      </div>

      <div class="c-loop-map-item">
        <strong>Nested Loop</strong>
        <span>Loop inside another loop</span>
      </div>

    </div>


    <h3>32. Choosing the Right Loop</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Situation</th>
          <th>Recommended Loop</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Known number of iterations</td>
          <td>for</td>
        </tr>

        <tr>
          <td>Condition-controlled repetition</td>
          <td>while</td>
        </tr>

        <tr>
          <td>Body must execute at least once</td>
          <td>do-while</td>
        </tr>

        <tr>
          <td>Rows and columns / patterns</td>
          <td>Nested loops</td>
        </tr>

      </tbody>
    </table>


    <h3>33. Important Points</h3>

    <ul>
      <li>Loops are used to repeat a block of code.</li>
      <li>C provides for, while, and do-while loops.</li>
      <li>for and while are entry-controlled loops.</li>
      <li>do-while is an exit-controlled loop.</li>
      <li>A do-while loop executes at least once.</li>
      <li>Nested loops contain one loop inside another loop.</li>
      <li>An infinite loop continues until its execution is stopped.</li>
      <li>break can terminate a loop early.</li>
      <li>continue skips the remaining statements of the current iteration.</li>
      <li>A loop should have a clear condition and update when termination is expected.</li>
    </ul>


    <h3>34. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int n;
    int sum = 0;

    printf("Enter a positive number: ");
    scanf("%d", &amp;n);

    if (n &lt;= 0) {

        printf("Please enter a positive number.");

    } else {

        for (int i = 1; i &lt;= n; i++) {

            sum += i;
        }

        printf("Sum of numbers from 1 to %d = %d",
               n,
               sum);
    }

    return 0;
}</code></pre>
    `
  ],

  practice: [
    'What is a loop in C?',
    'Why are loops used in programming?',
    'Explain the for loop with syntax and example.',
    'Explain the while loop with syntax and example.',
    'Explain the do-while loop with syntax and example.',
    'What is the difference between while and do-while?',
    'What is a nested loop?',
    'What is an infinite loop?',
    'Write a program to print numbers from 1 to 100.',
    'Write a program to print even numbers from 1 to 50.',
    'Write a program to calculate the sum of the first N natural numbers.',
    'Write a program to calculate the factorial of a number.',
    'Write a program to print a multiplication table.',
    'Write a program to print a star pattern using nested loops.',
    'Explain the use of break and continue inside loops.'
  ],

  code: `#include <stdio.h>

int main() {

    int n;
    int sum = 0;

    printf("===== C Loops Example =====\\\\n");
    printf("Enter a positive number: ");
    scanf("%d", &n);

    if (n <= 0) {

        printf("Please enter a positive number.");

    } else {

        for (int i = 1; i <= n; i++) {

            sum += i;
        }

        printf("Sum of numbers from 1 to %d = %d\\\\n",
               n,
               sum);

        printf("\\\\nNumbers: ");

        for (int i = 1; i <= n; i++) {

            printf("%d ", i);
        }
    }

    return 0;
}`
},
  {
  key: 'break-continue-goto',
  title: 'Break, Continue and Goto in C',

  description: 'Break, continue, and goto are jump statements in C that change the normal flow of program execution.',

  theory: [
    `
    <h3>1. Jump Statements in C</h3>

    <p>
      <strong>Jump statements</strong> are used to transfer control
      from one part of a program to another.
    </p>

    <p>
      C provides three commonly used jump statements:
    </p>

    <div class="c-jump-cards">

      <div class="c-jump-card">
        <strong>break</strong>
        <span>Terminates a loop or switch statement.</span>
      </div>

      <div class="c-jump-card">
        <strong>continue</strong>
        <span>Skips the current loop iteration.</span>
      </div>

      <div class="c-jump-card">
        <strong>goto</strong>
        <span>Transfers control to a labeled statement.</span>
      </div>

    </div>


    <h3>2. break Statement</h3>

    <p>
      The <strong>break</strong> statement immediately terminates the
      nearest enclosing loop or switch statement.
    </p>

    <p>
      After break executes, program control moves to the statement
      immediately following the loop or switch.
    </p>

    <p>Syntax:</p>

    <pre><code>break;</code></pre>


    <h3>3. break with for Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 1; i &lt;= 10; i++) {

        if (i == 6) {
            break;
        }

        printf("%d\\n", i);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1
2
3
4
5</code></pre>

    <p>
      When <strong>i becomes 6</strong>, break terminates the loop.
    </p>


    <h3>4. break Flow</h3>

    <pre><code>          Start Loop
               |
               ↓
           Condition
               |
          ┌────┴────┐
          ↓         ↓
        TRUE      FALSE
          |         |
          ↓         ↓
       Loop Body   Exit
          |
          ↓
      break?
       /    \
     YES     NO
      |       |
      ↓       ↓
     Exit    Update
              |
              └──→ Condition</code></pre>


    <h3>5. break with while Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int i = 1;

    while (i &lt;= 10) {

        if (i == 5) {
            break;
        }

        printf("%d\\n", i);

        i++;
    }

    return 0;
}</code></pre>


    <h3>6. break with do-while Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int i = 1;

    do {

        if (i == 4) {
            break;
        }

        printf("%d\\n", i);

        i++;

    } while (i &lt;= 10);

    return 0;
}</code></pre>


    <h3>7. break with switch</h3>

    <p>
      The break statement is also commonly used inside a
      <strong>switch</strong> statement to prevent execution from
      falling through to the next case.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int choice = 2;

    switch (choice) {

        case 1:
            printf("One");
            break;

        case 2:
            printf("Two");
            break;

        case 3:
            printf("Three");
            break;

        default:
            printf("Invalid choice");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Two</code></pre>


    <h3>8. continue Statement</h3>

    <p>
      The <strong>continue</strong> statement skips the remaining
      statements of the current loop iteration and starts the next
      iteration.
    </p>

    <p>Syntax:</p>

    <pre><code>continue;</code></pre>


    <h3>9. continue with for Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 1; i &lt;= 5; i++) {

        if (i == 3) {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1
2
4
5</code></pre>

    <p>
      When <strong>i is 3</strong>, continue skips the printf
      statement for that iteration and moves to the next iteration.
    </p>


    <h3>10. continue Flow</h3>

    <pre><code>          Start Loop
               |
               ↓
           Condition
               |
          ┌────┴────┐
          ↓         ↓
        TRUE      FALSE
          |         |
          ↓         ↓
       Loop Body   Exit
          |
          ↓
      continue?
       /      \
     YES       NO
      |         |
      ↓         ↓
   Next       Remaining
   Iteration  Statements
      |         |
      └────┬────┘
           ↓
         Update
           |
           └──→ Condition</code></pre>


    <h3>11. continue with while Loop</h3>

    <p>
      With a while loop, care must be taken to update the loop
      variable before continue when necessary. Otherwise, the loop
      can become infinite.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int i = 0;

    while (i &lt; 5) {

        i++;

        if (i == 3) {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1
2
4
5</code></pre>


    <h3>12. continue with do-while Loop</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int i = 0;

    do {

        i++;

        if (i == 3) {
            continue;
        }

        printf("%d\\n", i);

    } while (i &lt; 5);

    return 0;
}</code></pre>


    <h3>13. goto Statement</h3>

    <p>
      The <strong>goto</strong> statement transfers program control
      directly to a labeled statement within the same function.
    </p>

    <p>Syntax:</p>

    <pre><code>goto label;

...

label:
    statement;</code></pre>


    <h3>14. Simple goto Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    printf("Start\\n");

    goto message;

    printf("This line is skipped.\\n");

message:

    printf("Hello from goto.");

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Start
Hello from goto.</code></pre>


    <h3>15. How goto Works</h3>

    <pre><code>       Start
         |
         ↓
    Execute Code
         |
         ↓
     goto label
         |
         │
         └──────────────┐
                        ↓
                     label:
                        |
                        ↓
                  Execute Code
                        |
                        ↓
                       End</code></pre>


    <h3>16. goto for Repetition</h3>

    <p>
      Although loops are preferred for repetition, goto can be used
      to repeat execution by jumping back to a label.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int i = 1;

start:

    printf("%d\\n", i);

    i++;

    if (i &lt;= 5) {
        goto start;
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1
2
3
4
5</code></pre>


    <h3>17. goto for Error Handling</h3>

    <p>
      In C, goto is sometimes useful for centralized cleanup or
      error-handling paths, especially when a function has several
      resources that need to be released.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int value = -1;

    if (value &lt; 0) {
        goto error;
    }

    printf("Valid value");

    return 0;

error:

    printf("Error: Invalid value");

    return 1;
}</code></pre>

    <p>Output:</p>

    <pre><code>Error: Invalid value</code></pre>


    <h3>18. break vs continue</h3>

    <table class="data-type-table">

      <thead>
        <tr>
          <th>Feature</th>
          <th>break</th>
          <th>continue</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Purpose</td>
          <td>Terminates the loop.</td>
          <td>Skips the current iteration.</td>
        </tr>

        <tr>
          <td>Loop Execution</td>
          <td>Stops completely.</td>
          <td>Continues with the next iteration.</td>
        </tr>

        <tr>
          <td>Used in Loops</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>

        <tr>
          <td>Used in switch</td>
          <td>Yes</td>
          <td>No</td>
        </tr>

      </tbody>

    </table>


    <h3>19. break vs continue Example</h3>

    <pre><code>// break

for (int i = 1; i &lt;= 5; i++) {

    if (i == 3) {
        break;
    }

    printf("%d ", i);
}

// Output:
// 1 2


// continue

for (int i = 1; i &lt;= 5; i++) {

    if (i == 3) {
        continue;
    }

    printf("%d ", i);
}

// Output:
// 1 2 4 5</code></pre>


    <h3>20. break, continue and goto Comparison</h3>

    <table class="data-type-table">

      <thead>
        <tr>
          <th>Statement</th>
          <th>Function</th>
          <th>Typical Use</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>break</td>
          <td>Terminates nearest loop or switch.</td>
          <td>Exit early.</td>
        </tr>

        <tr>
          <td>continue</td>
          <td>Skips current loop iteration.</td>
          <td>Ignore selected iterations.</td>
        </tr>

        <tr>
          <td>goto</td>
          <td>Jumps to a label.</td>
          <td>Controlled jumps or cleanup paths.</td>
        </tr>

      </tbody>

    </table>


    <h3>21. Nested Loop with break</h3>

    <p>
      A break statement terminates only the <strong>nearest
      enclosing loop</strong>.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 1; i &lt;= 3; i++) {

        for (int j = 1; j &lt;= 5; j++) {

            if (j == 3) {
                break;
            }

            printf("%d ", j);
        }

        printf("\\n");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1 2
1 2
1 2</code></pre>


    <h3>22. Nested Loop with continue</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 1; i &lt;= 3; i++) {

        for (int j = 1; j &lt;= 5; j++) {

            if (j == 3) {
                continue;
            }

            printf("%d ", j);
        }

        printf("\\n");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1 2 4 5
1 2 4 5
1 2 4 5</code></pre>


    <h3>23. Searching using break</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int target = 7;

    for (int i = 1; i &lt;= 10; i++) {

        if (i == target) {

            printf("Number found");

            break;
        }
    }

    return 0;
}</code></pre>


    <h3>24. Skipping Numbers using continue</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    for (int i = 1; i &lt;= 10; i++) {

        if (i % 2 == 0) {
            continue;
        }

        printf("%d ", i);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1 3 5 7 9</code></pre>


    <h3>25. Important Points about goto</h3>

    <ul>
      <li>A goto statement jumps to a label.</li>
      <li>The label must be inside the same function.</li>
      <li>goto can make complex code difficult to understand.</li>
      <li>Loops are generally preferred for normal repetition.</li>
      <li>goto can be useful for certain cleanup and error-handling paths.</li>
      <li>Uncontrolled jumps should be avoided.</li>
    </ul>


    <h3>26. Best Practices</h3>

    <ul>
      <li>Use <strong>break</strong> when you need to terminate a loop early.</li>
      <li>Use <strong>continue</strong> when you need to skip selected iterations.</li>
      <li>Keep loop conditions clear when using break and continue.</li>
      <li>Be careful with continue inside while and do-while loops.</li>
      <li>Avoid unnecessary goto statements.</li>
      <li>Use meaningful labels when goto is genuinely appropriate.</li>
    </ul>


    <h3>27. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int number;

    for (int i = 1; i &lt;= 10; i++) {

        printf("Enter number: ");
        scanf("%d", &amp;number);

        if (number &lt; 0) {

            printf("Negative number skipped.\\n");

            continue;
        }

        if (number == 0) {

            printf("Zero entered. Program stopped.\\n");

            break;
        }

        printf("You entered: %d\\n", number);
    }

    return 0;
}</code></pre>

    <p>
      In this example, <strong>continue</strong> skips negative
      numbers, while <strong>break</strong> stops the loop when zero
      is entered.
    </p>
    `
  ],

  practice: [
    'What are jump statements in C?',
    'Explain the break statement with an example.',
    'Explain the continue statement with an example.',
    'What is the difference between break and continue?',
    'Explain the goto statement with an example.',
    'Where can the goto statement transfer control?',
    'What happens when break is used inside a nested loop?',
    'Why should unnecessary goto statements be avoided?',
    'Write a program to stop a loop when the user enters zero.',
    'Write a program to skip all even numbers using continue.',
    'Write a program to search for a number using break.',
    'Write a program using goto to jump to an error-handling section.',
    'Explain the difference between break, continue, and goto.'
  ],

  code: `#include <stdio.h>

int main() {

    int number;

    printf("===== Break and Continue Example =====\\\\n");

    for (int i = 1; i <= 10; i++) {

        printf("Enter number: ");
        scanf("%d", &number);

        if (number < 0) {

            printf("Negative number skipped.\\\\n");

            continue;
        }

        if (number == 0) {

            printf("Zero entered. Program stopped.\\\\n");

            break;
        }

        printf("You entered: %d\\\\n", number);
    }

    return 0;
}`
},
  {
  key: 'arrays-1d',
  title: '1D Arrays in C',

  description: 'A one-dimensional array in C is a collection of elements of the same data type stored in contiguous memory locations and accessed using an index.',

  theory: [
    `
    <h3>1. What is an Array?</h3>

    <p>
      An <strong>array</strong> is a collection of elements of the
      same data type stored in contiguous memory locations.
      Arrays are useful when multiple values of the same type need
      to be stored under a single variable name.
    </p>

    <div class="c-array-visual">

      <div class="c-array-title">int marks[5]</div>

      <div class="c-array-row">

        <div class="c-array-cell">
          <span>Index 0</span>
          <strong>85</strong>
        </div>

        <div class="c-array-cell">
          <span>Index 1</span>
          <strong>90</strong>
        </div>

        <div class="c-array-cell">
          <span>Index 2</span>
          <strong>78</strong>
        </div>

        <div class="c-array-cell">
          <span>Index 3</span>
          <strong>92</strong>
        </div>

        <div class="c-array-cell">
          <span>Index 4</span>
          <strong>88</strong>
        </div>

      </div>

      <p class="c-array-note">
        Array indexing in C starts from 0.
      </p>

    </div>


    <h3>2. What is a 1D Array?</h3>

    <p>
      A <strong>one-dimensional array</strong> stores elements in a
      single sequence or row.
    </p>

    <p>
      It is commonly used to store lists of numbers, marks, prices,
      ages, or other values of the same data type.
    </p>

    <pre><code>int numbers[5];</code></pre>


    <h3>3. Syntax of 1D Array</h3>

    <pre><code>data_type array_name[size];</code></pre>

    <p>Example:</p>

    <pre><code>int marks[5];</code></pre>

    <p>Here:</p>

    <ul>
      <li><strong>int</strong> → data type</li>
      <li><strong>marks</strong> → array name</li>
      <li><strong>5</strong> → number of elements</li>
    </ul>


    <h3>4. Array Index</h3>

    <p>
      C arrays use <strong>zero-based indexing</strong>. This means
      the first element has index 0.
    </p>

    <pre><code>int numbers[5];</code></pre>

    <div class="c-array-index">

      <div>
        <strong>Index</strong>
        <span>0</span>
      </div>

      <div>
        <strong>Index</strong>
        <span>1</span>
      </div>

      <div>
        <strong>Index</strong>
        <span>2</span>
      </div>

      <div>
        <strong>Index</strong>
        <span>3</span>
      </div>

      <div>
        <strong>Index</strong>
        <span>4</span>
      </div>

    </div>

    <p>
      For an array of size 5, valid indexes are <strong>0 to 4</strong>.
    </p>


    <h3>5. Declaring a 1D Array</h3>

    <pre><code>int numbers[5];

float prices[10];

char letters[5];

double values[8];</code></pre>


    <h3>6. Initializing an Array</h3>

    <p>
      An array can be initialized at the time of declaration.
    </p>

    <pre><code>int numbers[5] = {10, 20, 30, 40, 50};</code></pre>

    <p>
      The values are stored in consecutive array elements.
    </p>


    <h3>7. Accessing Array Elements</h3>

    <p>
      Individual elements are accessed using the array name followed
      by an index.
    </p>

    <pre><code>int numbers[5] = {10, 20, 30, 40, 50};

printf("%d", numbers[0]);</code></pre>

    <p>Output:</p>

    <pre><code>10</code></pre>


    <h3>8. Accessing Different Elements</h3>

    <pre><code>int numbers[5] = {10, 20, 30, 40, 50};

printf("%d\\n", numbers[0]);
printf("%d\\n", numbers[1]);
printf("%d\\n", numbers[2]);
printf("%d\\n", numbers[3]);
printf("%d\\n", numbers[4]);</code></pre>

    <p>Output:</p>

    <pre><code>10
20
30
40
50</code></pre>


    <h3>9. Modifying Array Elements</h3>

    <p>
      Array elements can be changed using their index.
    </p>

    <pre><code>int numbers[5] = {10, 20, 30, 40, 50};

numbers[2] = 100;

printf("%d", numbers[2]);</code></pre>

    <p>Output:</p>

    <pre><code>100</code></pre>


    <h3>10. Array Initialization without Size</h3>

    <p>
      When an array is initialized with values, its size can be
      omitted. The compiler determines the size from the number of
      initializers.
    </p>

    <pre><code>int numbers[] = {10, 20, 30, 40, 50};</code></pre>

    <p>
      Here, the compiler creates an array with 5 elements.
    </p>


    <h3>11. Partial Initialization</h3>

    <p>
      If an array is initialized with fewer values than its declared
      size, the remaining elements are initialized to zero.
    </p>

    <pre><code>int numbers[5] = {10, 20};</code></pre>

    <p>The array becomes:</p>

    <pre><code>10 20 0 0 0</code></pre>


    <h3>12. Initialize All Elements to Zero</h3>

    <pre><code>int numbers[5] = {0};</code></pre>

    <p>The array contains:</p>

    <pre><code>0 0 0 0 0</code></pre>


    <h3>13. Traversing an Array</h3>

    <p>
      <strong>Array traversal</strong> means visiting each element of
      an array one by one.
    </p>

    <p>
      Loops are commonly used for array traversal.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5] = {10, 20, 30, 40, 50};

    for (int i = 0; i &lt; 5; i++) {

        printf("%d\\n", numbers[i]);
    }

    return 0;
}</code></pre>


    <h3>14. Array Traversal Diagram</h3>

    <pre><code>Array:
┌────┬────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │ 50 │
└────┴────┴────┴────┴────┘
   ↑    ↑    ↑    ↑    ↑
   0    1    2    3    4
   │
   └──── Loop visits each element ────→</code></pre>


    <h3>15. Taking Array Input from User</h3>

    <p>
      A loop can be used to read multiple values into an array.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5];

    for (int i = 0; i &lt; 5; i++) {

        printf("Enter element %d: ", i + 1);

        scanf("%d", &amp;numbers[i]);
    }

    return 0;
}</code></pre>


    <h3>16. Input and Output of Array</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5];

    printf("Enter 5 numbers:\\n");

    for (int i = 0; i &lt; 5; i++) {

        scanf("%d", &amp;numbers[i]);
    }

    printf("Array elements:\\n");

    for (int i = 0; i &lt; 5; i++) {

        printf("%d ", numbers[i]);
    }

    return 0;
}</code></pre>


    <h3>17. Finding Sum of Array Elements</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5] = {10, 20, 30, 40, 50};

    int sum = 0;

    for (int i = 0; i &lt; 5; i++) {

        sum += numbers[i];
    }

    printf("Sum = %d", sum);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Sum = 150</code></pre>


    <h3>18. Finding Average of Array Elements</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5] = {10, 20, 30, 40, 50};

    int sum = 0;

    float average;

    for (int i = 0; i &lt; 5; i++) {

        sum += numbers[i];
    }

    average = (float)sum / 5;

    printf("Average = %.2f", average);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Average = 30.00</code></pre>


    <h3>19. Finding Largest Element</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5] = {25, 10, 45, 30, 15};

    int largest = numbers[0];

    for (int i = 1; i &lt; 5; i++) {

        if (numbers[i] &gt; largest) {

            largest = numbers[i];
        }
    }

    printf("Largest = %d", largest);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Largest = 45</code></pre>


    <h3>20. Finding Smallest Element</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5] = {25, 10, 45, 30, 15};

    int smallest = numbers[0];

    for (int i = 1; i &lt; 5; i++) {

        if (numbers[i] &lt; smallest) {

            smallest = numbers[i];
        }
    }

    printf("Smallest = %d", smallest);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Smallest = 10</code></pre>


    <h3>21. Searching an Element</h3>

    <p>
      An array can be searched by comparing each element with the
      target value.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5] = {10, 20, 30, 40, 50};

    int target = 30;

    int found = 0;

    for (int i = 0; i &lt; 5; i++) {

        if (numbers[i] == target) {

            found = 1;

            printf("Element found at index %d", i);

            break;
        }
    }

    if (!found) {

        printf("Element not found");
    }

    return 0;
}</code></pre>


    <h3>22. Counting Even and Odd Elements</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[6] = {10, 15, 20, 25, 30, 35};

    int even = 0;
    int odd = 0;

    for (int i = 0; i &lt; 6; i++) {

        if (numbers[i] % 2 == 0) {

            even++;

        } else {

            odd++;
        }
    }

    printf("Even = %d\\n", even);

    printf("Odd = %d", odd);

    return 0;
}</code></pre>


    <h3>23. Reversing an Array</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5] = {10, 20, 30, 40, 50};

    for (int i = 4; i &gt;= 0; i--) {

        printf("%d ", numbers[i]);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>50 40 30 20 10</code></pre>


    <h3>24. Copying an Array</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int source[5] = {10, 20, 30, 40, 50};

    int copy[5];

    for (int i = 0; i &lt; 5; i++) {

        copy[i] = source[i];
    }

    for (int i = 0; i &lt; 5; i++) {

        printf("%d ", copy[i]);
    }

    return 0;
}</code></pre>


    <h3>25. Comparing Two Arrays</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int a[3] = {10, 20, 30};

    int b[3] = {10, 20, 30};

    int equal = 1;

    for (int i = 0; i &lt; 3; i++) {

        if (a[i] != b[i]) {

            equal = 0;

            break;
        }
    }

    if (equal) {

        printf("Arrays are equal");

    } else {

        printf("Arrays are not equal");
    }

    return 0;
}</code></pre>


    <h3>26. Character Array</h3>

    <p>
      A 1D array can also store characters.
    </p>

    <pre><code>char name[6] = {'J', 'i', 't', 'e', 's', 'h'};</code></pre>

    <p>
      Character arrays are commonly used to represent strings in C.
    </p>


    <h3>27. String using Character Array</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char name[] = "Jitesh";

    printf("%s", name);

    return 0;
}</code></pre>

    <p>
      C automatically adds the null character <strong>\\0</strong>
      at the end of a string literal.
    </p>


    <h3>28. Size of an Array</h3>

    <p>
      The <strong>sizeof</strong> operator can be used to calculate
      the total size of an array in bytes.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5];

    printf("Total bytes = %zu\\n",
           sizeof(numbers));

    printf("Number of elements = %zu",
           sizeof(numbers) / sizeof(numbers[0]));

    return 0;
}</code></pre>


    <h3>29. Important Rule: Array Bounds</h3>

    <p>
      If an array has size 5, its valid indexes are 0, 1, 2, 3 and 4.
    </p>

    <pre><code>int numbers[5];

numbers[0] = 10;  // Valid
numbers[4] = 50;  // Valid

// numbers[5] = 60;  // Invalid</code></pre>

    <p>
      Accessing an array outside its valid range causes
      <strong>undefined behavior</strong>.
    </p>


    <h3>30. Array in Memory</h3>

    <p>
      Elements of an array are stored in contiguous memory locations.
    </p>

    <pre><code>Memory:

┌──────────┬──────────┬──────────┬──────────┐
│ numbers0 │ numbers1 │ numbers2 │ numbers3 │ ...
└──────────┴──────────┴──────────┴──────────┘
      ↓          ↓          ↓
   Element    Element    Element
      1          2          3</code></pre>


    <h3>31. 1D Array with User Input</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int n;

    printf("Enter number of elements: ");
    scanf("%d", &amp;n);

    if (n &lt;= 0 || n &gt; 100) {

        printf("Invalid size.");

        return 0;
    }

    int numbers[100];

    printf("Enter %d elements:\\n", n);

    for (int i = 0; i &lt; n; i++) {

        scanf("%d", &amp;numbers[i]);
    }

    printf("Elements are:\\n");

    for (int i = 0; i &lt; n; i++) {

        printf("%d ", numbers[i]);
    }

    return 0;
}</code></pre>


    <h3>32. Important Points</h3>

    <ul>
      <li>A 1D array stores elements in a single sequence.</li>
      <li>All elements normally have the same data type.</li>
      <li>Array indexing starts from 0.</li>
      <li>The last valid index is size - 1.</li>
      <li>Arrays are stored in contiguous memory locations.</li>
      <li>Loops are commonly used to traverse arrays.</li>
      <li>Array elements can be accessed using array[index].</li>
      <li>Accessing outside the valid range causes undefined behavior.</li>
      <li>Character arrays can be used to store strings.</li>
      <li>The sizeof operator can help determine an array's total byte size.</li>
    </ul>


    <h3>33. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int numbers[5];

    int sum = 0;

    int largest;

    printf("Enter 5 numbers:\\n");

    for (int i = 0; i &lt; 5; i++) {

        scanf("%d", &amp;numbers[i]);
    }

    largest = numbers[0];

    printf("\\nArray elements: ");

    for (int i = 0; i &lt; 5; i++) {

        printf("%d ", numbers[i]);

        sum += numbers[i];

        if (numbers[i] &gt; largest) {

            largest = numbers[i];
        }
    }

    printf("\\nSum = %d", sum);

    printf("\\nLargest = %d", largest);

    return 0;
}</code></pre>
    `
  ],

  practice: [
    'What is an array in C?',
    'What is a one-dimensional array?',
    'Write the syntax for declaring a 1D array.',
    'Explain zero-based indexing in C.',
    'How do you initialize a 1D array?',
    'How do you access an individual array element?',
    'Write a program to input and display 5 array elements.',
    'Write a program to find the sum of array elements.',
    'Write a program to find the average of array elements.',
    'Write a program to find the largest element in an array.',
    'Write a program to find the smallest element in an array.',
    'Write a program to search for an element in an array.',
    'Write a program to count even and odd elements.',
    'Write a program to reverse an array.',
    'Write a program to copy one array into another.',
    'Explain what happens when an array is accessed outside its valid index range.',
    'How can sizeof be used to find the number of elements in an array?'
  ],

  code: `#include <stdio.h>

int main() {

    int numbers[5];
    int sum = 0;
    int largest;

    printf("===== 1D Array in C =====\\\\n");

    printf("Enter 5 numbers:\\\\n");

    for (int i = 0; i < 5; i++) {

        scanf("%d", &numbers[i]);
    }

    largest = numbers[0];

    printf("\\\\nArray elements: ");

    for (int i = 0; i < 5; i++) {

        printf("%d ", numbers[i]);

        sum += numbers[i];

        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    printf("\\\\nSum = %d", sum);
    printf("\\\\nLargest = %d", largest);

    return 0;
}`
},
  {
  key: 'arrays-2d',
  title: '2D Arrays in C',

  description: 'A two-dimensional array in C stores elements in rows and columns and is commonly used to represent matrices and table-like data.',

  theory: [
    `
    <h3>1. What is a 2D Array?</h3>

    <p>
      A <strong>two-dimensional array</strong> is an array arranged
      in the form of rows and columns. It is commonly used to
      represent matrices, tables, and grid-based data.
    </p>

    <div class="c-2d-array-visual">

      <div class="c-2d-title">int matrix[3][3]</div>

      <div class="c-2d-grid">

        <div class="c-2d-cell c-2d-head"></div>
        <div class="c-2d-cell c-2d-head">Column 0</div>
        <div class="c-2d-cell c-2d-head">Column 1</div>
        <div class="c-2d-cell c-2d-head">Column 2</div>

        <div class="c-2d-cell c-2d-head">Row 0</div>
        <div class="c-2d-cell">10</div>
        <div class="c-2d-cell">20</div>
        <div class="c-2d-cell">30</div>

        <div class="c-2d-cell c-2d-head">Row 1</div>
        <div class="c-2d-cell">40</div>
        <div class="c-2d-cell">50</div>
        <div class="c-2d-cell">60</div>

        <div class="c-2d-cell c-2d-head">Row 2</div>
        <div class="c-2d-cell">70</div>
        <div class="c-2d-cell">80</div>
        <div class="c-2d-cell">90</div>

      </div>

      <p class="c-2d-note">
        A 2D array uses two indexes: one for the row and one for the column.
      </p>

    </div>


    <h3>2. Syntax of 2D Array</h3>

    <pre><code>data_type array_name[rows][columns];</code></pre>

    <p>Example:</p>

    <pre><code>int matrix[3][4];</code></pre>

    <p>
      This creates an integer array with <strong>3 rows</strong> and
      <strong>4 columns</strong>, containing 12 elements in total.
    </p>


    <h3>3. Declaration of 2D Array</h3>

    <pre><code>int matrix[2][3];

float marks[3][4];

char letters[2][5];</code></pre>


    <h3>4. Row and Column Index</h3>

    <p>
      C uses zero-based indexing for both rows and columns.
    </p>

    <pre><code>int matrix[3][3];</code></pre>

    <p>
      Valid row indexes are <strong>0, 1, 2</strong> and valid column
      indexes are also <strong>0, 1, 2</strong>.
    </p>

    <pre><code>matrix[0][0]
matrix[0][1]
matrix[0][2]

matrix[1][0]
matrix[1][1]
matrix[1][2]

matrix[2][0]
matrix[2][1]
matrix[2][2]</code></pre>


    <h3>5. Initializing a 2D Array</h3>

    <p>
      A 2D array can be initialized using nested braces.
    </p>

    <pre><code>int matrix[2][3] = {
    {10, 20, 30},
    {40, 50, 60}
};</code></pre>

    <p>The array looks like:</p>

    <pre><code>10  20  30
40  50  60</code></pre>


    <h3>6. Accessing 2D Array Elements</h3>

    <p>
      An element is accessed using two indexes:
      <strong>array[row][column]</strong>.
    </p>

    <pre><code>int matrix[2][3] = {
    {10, 20, 30},
    {40, 50, 60}
};

printf("%d", matrix[1][2]);</code></pre>

    <p>Output:</p>

    <pre><code>60</code></pre>


    <h3>7. Modifying a 2D Array Element</h3>

    <pre><code>int matrix[2][2] = {
    {10, 20},
    {30, 40}
};

matrix[1][0] = 100;

printf("%d", matrix[1][0]);</code></pre>

    <p>Output:</p>

    <pre><code>100</code></pre>


    <h3>8. Traversing a 2D Array</h3>

    <p>
      Nested loops are commonly used to traverse a 2D array.
      The outer loop handles rows and the inner loop handles columns.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 3; j++) {

            printf("%d ", matrix[i][j]);
        }

        printf("\\n");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>10 20 30
40 50 60</code></pre>


    <h3>9. 2D Array Traversal Diagram</h3>

    <pre><code>              Columns
          0      1      2
       ┌──────┬──────┬──────┐
Row 0  │  10  │  20  │  30  │
       ├──────┼──────┼──────┤
Row 1  │  40  │  50  │  60  │
       ├──────┼──────┼──────┤
Row 2  │  70  │  80  │  90  │
       └──────┴──────┴──────┘

       Outer Loop → Rows
       Inner Loop → Columns</code></pre>


    <h3>10. Taking Input in a 2D Array</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[2][3];

    printf("Enter 6 elements:\\n");

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 3; j++) {

            scanf("%d", &amp;matrix[i][j]);
        }
    }

    return 0;
}</code></pre>


    <h3>11. Input and Output of Matrix</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[2][3];

    printf("Enter matrix elements:\\n");

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 3; j++) {

            scanf("%d", &amp;matrix[i][j]);
        }
    }

    printf("\\nMatrix:\\n");

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 3; j++) {

            printf("%d\\t", matrix[i][j]);
        }

        printf("\\n");
    }

    return 0;
}</code></pre>


    <h3>12. Sum of All Matrix Elements</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    int sum = 0;

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 3; j++) {

            sum += matrix[i][j];
        }
    }

    printf("Sum = %d", sum);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Sum = 210</code></pre>


    <h3>13. Row-wise Sum</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[3][3] = {
        {10, 20, 30},
        {40, 50, 60},
        {70, 80, 90}
    };

    for (int i = 0; i &lt; 3; i++) {

        int sum = 0;

        for (int j = 0; j &lt; 3; j++) {

            sum += matrix[i][j];
        }

        printf("Row %d Sum = %d\\n", i, sum);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Row 0 Sum = 60
Row 1 Sum = 150
Row 2 Sum = 240</code></pre>


    <h3>14. Column-wise Sum</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[3][3] = {
        {10, 20, 30},
        {40, 50, 60},
        {70, 80, 90}
    };

    for (int j = 0; j &lt; 3; j++) {

        int sum = 0;

        for (int i = 0; i &lt; 3; i++) {

            sum += matrix[i][j];
        }

        printf("Column %d Sum = %d\\n", j, sum);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Column 0 Sum = 120
Column 1 Sum = 150
Column 2 Sum = 180</code></pre>


    <h3>15. Matrix Addition</h3>

    <p>
      Two matrices can be added when they have the same number of
      rows and columns.
    </p>

    <p>
      Each element of the first matrix is added to the corresponding
      element of the second matrix.
    </p>

    <pre><code>C[i][j] = A[i][j] + B[i][j]</code></pre>


    <h3>16. Program for Matrix Addition</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int A[2][2] = {
        {1, 2},
        {3, 4}
    };

    int B[2][2] = {
        {5, 6},
        {7, 8}
    };

    int C[2][2];

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            C[i][j] = A[i][j] + B[i][j];
        }
    }

    printf("Result:\\n");

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            printf("%d\\t", C[i][j]);
        }

        printf("\\n");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>6   8
10  12</code></pre>


    <h3>17. Matrix Subtraction</h3>

    <p>
      Matrix subtraction is performed element by element.
    </p>

    <pre><code>C[i][j] = A[i][j] - B[i][j]</code></pre>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int A[2][2] = {
        {10, 20},
        {30, 40}
    };

    int B[2][2] = {
        {1, 2},
        {3, 4}
    };

    int C[2][2];

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            C[i][j] = A[i][j] - B[i][j];
        }
    }

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            printf("%d\\t", C[i][j]);
        }

        printf("\\n");
    }

    return 0;
}</code></pre>


    <h3>18. Matrix Multiplication</h3>

    <p>
      Matrix multiplication is different from element-by-element
      multiplication.
    </p>

    <p>
      If matrix A has dimensions <strong>m × n</strong> and matrix B
      has dimensions <strong>n × p</strong>, then multiplication is
      possible and the result has dimensions <strong>m × p</strong>.
    </p>

    <p>Formula:</p>

    <pre><code>C[i][j] = Σ A[i][k] × B[k][j]</code></pre>


    <h3>19. Program for Matrix Multiplication</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int A[2][2] = {
        {1, 2},
        {3, 4}
    };

    int B[2][2] = {
        {5, 6},
        {7, 8}
    };

    int C[2][2] = {0};

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            for (int k = 0; k &lt; 2; k++) {

                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    printf("Result:\\n");

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            printf("%d\\t", C[i][j]);
        }

        printf("\\n");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>19  22
43  50</code></pre>


    <h3>20. Matrix Transpose</h3>

    <p>
      The <strong>transpose</strong> of a matrix is obtained by
      converting its rows into columns and its columns into rows.
    </p>

    <pre><code>Original:

1  2  3
4  5  6

Transpose:

1  4
2  5
3  6</code></pre>


    <h3>21. Program for Matrix Transpose</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    int transpose[3][2];

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 3; j++) {

            transpose[j][i] = matrix[i][j];
        }
    }

    printf("Transpose:\\n");

    for (int i = 0; i &lt; 3; i++) {

        for (int j = 0; j &lt; 2; j++) {

            printf("%d\\t", transpose[i][j]);
        }

        printf("\\n");
    }

    return 0;
}</code></pre>


    <h3>22. Main Diagonal of a Matrix</h3>

    <p>
      In a square matrix, the main diagonal contains elements where
      the row index and column index are equal.
    </p>

    <pre><code>1  2  3
4  5  6
7  8  9

Main Diagonal:

1
   5
      9</code></pre>

    <p>
      The condition for the main diagonal is:
    </p>

    <pre><code>i == j</code></pre>


    <h3>23. Program to Print Main Diagonal</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    printf("Main diagonal: ");

    for (int i = 0; i &lt; 3; i++) {

        printf("%d ", matrix[i][i]);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Main diagonal: 1 5 9</code></pre>


    <h3>24. Secondary Diagonal</h3>

    <p>
      In a square matrix, the secondary diagonal runs from the
      top-right corner to the bottom-left corner.
    </p>

    <pre><code>1  2  3
4  5  6
7  8  9

Secondary Diagonal:

      3
   5
7</code></pre>

    <p>
      For an n × n matrix, the secondary diagonal follows:
    </p>

    <pre><code>i + j == n - 1</code></pre>


    <h3>25. Program for Secondary Diagonal</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    printf("Secondary diagonal: ");

    for (int i = 0; i &lt; 3; i++) {

        printf("%d ", matrix[i][2 - i]);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Secondary diagonal: 3 5 7</code></pre>


    <h3>26. Sum of Main Diagonal</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    int sum = 0;

    for (int i = 0; i &lt; 3; i++) {

        sum += matrix[i][i];
    }

    printf("Diagonal Sum = %d", sum);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Diagonal Sum = 15</code></pre>


    <h3>27. Identity Matrix</h3>

    <p>
      An <strong>identity matrix</strong> is a square matrix in which
      all main diagonal elements are 1 and all other elements are 0.
    </p>

    <pre><code>1  0  0
0  1  0
0  0  1</code></pre>


    <h3>28. Checking Identity Matrix</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[3][3] = {
        {1, 0, 0},
        {0, 1, 0},
        {0, 0, 1}
    };

    int identity = 1;

    for (int i = 0; i &lt; 3; i++) {

        for (int j = 0; j &lt; 3; j++) {

            if (i == j) {

                if (matrix[i][j] != 1) {
                    identity = 0;
                }

            } else {

                if (matrix[i][j] != 0) {
                    identity = 0;
                }
            }
        }
    }

    if (identity) {
        printf("Identity Matrix");
    } else {
        printf("Not an Identity Matrix");
    }

    return 0;
}</code></pre>


    <h3>29. Upper Triangular Matrix</h3>

    <p>
      A square matrix is called upper triangular when all elements
      below the main diagonal are zero.
    </p>

    <pre><code>1  2  3
0  4  5
0  0  6</code></pre>


    <h3>30. Lower Triangular Matrix</h3>

    <p>
      A square matrix is called lower triangular when all elements
      above the main diagonal are zero.
    </p>

    <pre><code>1  0  0
2  3  0
4  5  6</code></pre>


    <h3>31. 2D Array and Nested Loops</h3>

    <p>
      The most common way to process a 2D array is by using nested
      loops.
    </p>

    <pre><code>for (int i = 0; i &lt; rows; i++) {

    for (int j = 0; j &lt; columns; j++) {

        // matrix[i][j]
    }
}</code></pre>

    <div class="c-2d-flow">

      <div class="c-2d-flow-box">
        <strong>Outer Loop</strong>
        <span>Controls Rows</span>
      </div>

      <div class="c-2d-flow-arrow">→</div>

      <div class="c-2d-flow-box">
        <strong>Inner Loop</strong>
        <span>Controls Columns</span>
      </div>

      <div class="c-2d-flow-arrow">→</div>

      <div class="c-2d-flow-box">
        <strong>matrix[i][j]</strong>
        <span>Access Element</span>
      </div>

    </div>


    <h3>32. Memory Representation</h3>

    <p>
      C stores a 2D array in row-major order. This means the elements
      of the first row are stored first, followed by the second row,
      and so on.
    </p>

    <pre><code>Matrix:

1  2  3
4  5  6

Memory order:

1 → 2 → 3 → 4 → 5 → 6</code></pre>


    <h3>33. Important Points</h3>

    <ul>
      <li>A 2D array stores data in rows and columns.</li>
      <li>Two indexes are required to access an element.</li>
      <li>The first index represents the row.</li>
      <li>The second index represents the column.</li>
      <li>Indexing starts from 0.</li>
      <li>Nested loops are commonly used to process 2D arrays.</li>
      <li>Matrix addition requires matrices of the same dimensions.</li>
      <li>Matrix multiplication has specific dimension requirements.</li>
      <li>Transpose changes rows into columns.</li>
      <li>A square matrix has the same number of rows and columns.</li>
      <li>C stores multidimensional arrays in row-major order.</li>
    </ul>


    <h3>34. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int matrix[3][3];

    int sum = 0;
    int diagonalSum = 0;

    printf("Enter 9 elements:\\n");

    for (int i = 0; i &lt; 3; i++) {

        for (int j = 0; j &lt; 3; j++) {

            scanf("%d", &amp;matrix[i][j]);
        }
    }

    printf("\\nMatrix:\\n");

    for (int i = 0; i &lt; 3; i++) {

        for (int j = 0; j &lt; 3; j++) {

            printf("%d\\t", matrix[i][j]);

            sum += matrix[i][j];

            if (i == j) {
                diagonalSum += matrix[i][j];
            }
        }

        printf("\\n");
    }

    printf("\\nTotal Sum = %d", sum);

    printf("\\nMain Diagonal Sum = %d", diagonalSum);

    return 0;
}</code></pre>
    `
  ],

  practice: [
    'What is a two-dimensional array in C?',
    'Write the syntax for declaring a 2D array.',
    'Explain rows and columns in a 2D array.',
    'How do you access an element of a 2D array?',
    'Write a program to input and display a 3 × 3 matrix.',
    'Write a program to find the sum of all matrix elements.',
    'Write a program to find the sum of each row.',
    'Write a program to find the sum of each column.',
    'Write a program for matrix addition.',
    'Write a program for matrix subtraction.',
    'Write a program for matrix multiplication.',
    'Write a program to find the transpose of a matrix.',
    'Write a program to print the main diagonal of a matrix.',
    'Write a program to print the secondary diagonal.',
    'What is an identity matrix?',
    'What is the difference between upper and lower triangular matrices?',
    'Explain row-major order in C.',
    'Why are nested loops used with 2D arrays?'
  ],

  code: `#include <stdio.h>

int main() {

    int matrix[3][3];
    int sum = 0;
    int diagonalSum = 0;

    printf("===== 2D Array in C =====\\\\n");
    printf("Enter 9 elements:\\\\n");

    for (int i = 0; i < 3; i++) {

        for (int j = 0; j < 3; j++) {

            scanf("%d", &matrix[i][j]);
        }
    }

    printf("\\\\nMatrix:\\\\n");

    for (int i = 0; i < 3; i++) {

        for (int j = 0; j < 3; j++) {

            printf("%d\\\\t", matrix[i][j]);

            sum += matrix[i][j];

            if (i == j) {
                diagonalSum += matrix[i][j];
            }
        }

        printf("\\\\n");
    }

    printf("\\\\nTotal Sum = %d", sum);
    printf("\\\\nMain Diagonal Sum = %d", diagonalSum);

    return 0;
}`
},
  {
  key: 'arrays-multi',
  title: 'Multi-Dimensional Arrays in C',

  description: 'A multi-dimensional array in C is an array with more than two dimensions. It is useful for storing data in multiple dimensions such as tables, grids, matrices, and 3D data.',

  theory: [
    `
    <h3>1. What is a Multi-Dimensional Array?</h3>

    <p>
      A <strong>multi-dimensional array</strong> is an array that
      contains more than one dimension. A 2D array has two dimensions,
      while a 3D array has three dimensions.
    </p>

    <p>
      Multi-dimensional arrays are useful for representing complex
      data structures such as multiple matrices, 3D coordinates,
      image data, and other grid-based information.
    </p>

    <div class="c-multi-array-visual">

      <div class="c-multi-title">3D Array: int data[2][2][3]</div>

      <div class="c-multi-layers">

        <div class="c-multi-layer">

          <div class="c-multi-layer-title">
            Layer 0
          </div>

          <div class="c-multi-grid">

            <div>10</div>
            <div>20</div>
            <div>30</div>

            <div>40</div>
            <div>50</div>
            <div>60</div>

          </div>

        </div>

        <div class="c-multi-layer">

          <div class="c-multi-layer-title">
            Layer 1
          </div>

          <div class="c-multi-grid">

            <div>70</div>
            <div>80</div>
            <div>90</div>

            <div>100</div>
            <div>110</div>
            <div>120</div>

          </div>

        </div>

      </div>

      <p class="c-multi-note">
        A 3D array can be visualized as multiple 2D arrays stacked together.
      </p>

    </div>


    <h3>2. Dimensions of an Array</h3>

    <p>
      The number of indexes required to access an element determines
      the number of dimensions.
    </p>

    <pre><code>1D → array[i]

2D → array[i][j]

3D → array[i][j][k]

4D → array[i][j][k][l]</code></pre>


    <h3>3. Syntax</h3>

    <p>
      The general syntax of a multi-dimensional array is:
    </p>

    <pre><code>data_type array_name[size1][size2]...[sizeN];</code></pre>

    <p>Example of a 3D array:</p>

    <pre><code>int data[2][3][4];</code></pre>

    <p>
      This array contains:
    </p>

    <pre><code>2 × 3 × 4 = 24 elements</code></pre>


    <h3>4. 3D Array</h3>

    <p>
      A three-dimensional array contains three indexes:
      <strong>layer, row, and column</strong>.
    </p>

    <pre><code>int data[2][2][3];</code></pre>

    <p>
      Here:
    </p>

    <ul>
      <li><strong>2</strong> → number of layers</li>
      <li><strong>2</strong> → number of rows in each layer</li>
      <li><strong>3</strong> → number of columns in each row</li>
    </ul>


    <h3>5. Accessing a 3D Array Element</h3>

    <p>
      Three indexes are required to access an element.
    </p>

    <pre><code>data[layer][row][column]</code></pre>

    <p>Example:</p>

    <pre><code>int data[2][2][3] = {
    {
        {10, 20, 30},
        {40, 50, 60}
    },
    {
        {70, 80, 90},
        {100, 110, 120}
    }
};

printf("%d", data[1][0][2]);</code></pre>

    <p>Output:</p>

    <pre><code>90</code></pre>


    <h3>6. Initializing a 3D Array</h3>

    <pre><code>int data[2][2][2] = {
    {
        {1, 2},
        {3, 4}
    },
    {
        {5, 6},
        {7, 8}
    }
};</code></pre>

    <p>It can be visualized as:</p>

    <pre><code>Layer 0:

1  2
3  4


Layer 1:

5  6
7  8</code></pre>


    <h3>7. Traversing a 3D Array</h3>

    <p>
      Three nested loops are generally used to traverse a 3D array.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int data[2][2][2] = {
        {
            {1, 2},
            {3, 4}
        },
        {
            {5, 6},
            {7, 8}
        }
    };

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            for (int k = 0; k &lt; 2; k++) {

                printf("%d ", data[i][j][k]);
            }

            printf("\\n");
        }

        printf("\\n");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1 2
3 4

5 6
7 8</code></pre>


    <h3>8. Multi-Dimensional Array Traversal</h3>

    <pre><code>for (int i = 0; i &lt; dimension1; i++) {

    for (int j = 0; j &lt; dimension2; j++) {

        for (int k = 0; k &lt; dimension3; k++) {

            printf("%d ", array[i][j][k]);
        }
    }
}</code></pre>

    <div class="c-multi-flow">

      <div class="c-multi-flow-box">
        <strong>Loop 1</strong>
        <span>Layer</span>
      </div>

      <div class="c-multi-arrow">→</div>

      <div class="c-multi-flow-box">
        <strong>Loop 2</strong>
        <span>Row</span>
      </div>

      <div class="c-multi-arrow">→</div>

      <div class="c-multi-flow-box">
        <strong>Loop 3</strong>
        <span>Column</span>
      </div>

      <div class="c-multi-arrow">→</div>

      <div class="c-multi-flow-box">
        <strong>array[i][j][k]</strong>
        <span>Element</span>
      </div>

    </div>


    <h3>9. Taking Input in a 3D Array</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int data[2][2][2];

    printf("Enter 8 elements:\\n");

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            for (int k = 0; k &lt; 2; k++) {

                scanf("%d", &amp;data[i][j][k]);
            }
        }
    }

    return 0;
}</code></pre>


    <h3>10. Displaying a 3D Array</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int data[2][2][2];

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            for (int k = 0; k &lt; 2; k++) {

                scanf("%d", &amp;data[i][j][k]);
            }
        }
    }

    for (int i = 0; i &lt; 2; i++) {

        printf("Layer %d:\\n", i);

        for (int j = 0; j &lt; 2; j++) {

            for (int k = 0; k &lt; 2; k++) {

                printf("%d\\t", data[i][j][k]);
            }

            printf("\\n");
        }

        printf("\\n");
    }

    return 0;
}</code></pre>


    <h3>11. Sum of Elements in a 3D Array</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int data[2][2][2] = {
        {
            {1, 2},
            {3, 4}
        },
        {
            {5, 6},
            {7, 8}
        }
    };

    int sum = 0;

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            for (int k = 0; k &lt; 2; k++) {

                sum += data[i][j][k];
            }
        }
    }

    printf("Sum = %d", sum);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Sum = 36</code></pre>


    <h3>12. Finding the Largest Element</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int data[2][2][2] = {
        {
            {10, 20},
            {30, 40}
        },
        {
            {50, 60},
            {70, 80}
        }
    };

    int largest = data[0][0][0];

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            for (int k = 0; k &lt; 2; k++) {

                if (data[i][j][k] &gt; largest) {

                    largest = data[i][j][k];
                }
            }
        }
    }

    printf("Largest = %d", largest);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Largest = 80</code></pre>


    <h3>13. Finding the Smallest Element</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int data[2][2][2] = {
        {
            {10, 20},
            {30, 40}
        },
        {
            {50, 60},
            {70, 80}
        }
    };

    int smallest = data[0][0][0];

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            for (int k = 0; k &lt; 2; k++) {

                if (data[i][j][k] &lt; smallest) {

                    smallest = data[i][j][k];
                }
            }
        }
    }

    printf("Smallest = %d", smallest);

    return 0;
}</code></pre>


    <h3>14. Number of Elements</h3>

    <p>
      The total number of elements in a multi-dimensional array is
      the product of the sizes of all dimensions.
    </p>

    <pre><code>int data[2][3][4];</code></pre>

    <p>Number of elements:</p>

    <pre><code>2 × 3 × 4 = 24</code></pre>


    <h3>15. Using sizeof with Multi-Dimensional Arrays</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int data[2][3][4];

    int total =
        sizeof(data) / sizeof(data[0][0][0]);

    printf("Total elements = %d", total);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Total elements = 24</code></pre>


    <h3>16. 4D Arrays</h3>

    <p>
      C also supports arrays with four or more dimensions.
    </p>

    <pre><code>int data[2][3][4][5];</code></pre>

    <p>
      The total number of elements is:
    </p>

    <pre><code>2 × 3 × 4 × 5 = 120</code></pre>

    <p>
      Higher-dimensional arrays are less common in basic programming
      because they can become difficult to manage and consume more
      memory.
    </p>


    <h3>17. Multi-Dimensional Array and Memory</h3>

    <p>
      C stores multi-dimensional arrays in <strong>row-major order</strong>.
      The rightmost dimension changes fastest while traversing memory.
    </p>

    <pre><code>int data[2][2][2];

Logical structure:

Layer 0
1  2
3  4

Layer 1
5  6
7  8

Memory order:

1 → 2 → 3 → 4 → 5 → 6 → 7 → 8</code></pre>


    <h3>18. Difference Between 1D, 2D and 3D Arrays</h3>

    <div class="c-array-comparison">

      <div class="c-comparison-card">
        <strong>1D</strong>
        <span>One index</span>
        <code>arr[i]</code>
        <small>List</small>
      </div>

      <div class="c-comparison-card">
        <strong>2D</strong>
        <span>Two indexes</span>
        <code>arr[i][j]</code>
        <small>Matrix / Table</small>
      </div>

      <div class="c-comparison-card">
        <strong>3D</strong>
        <span>Three indexes</span>
        <code>arr[i][j][k]</code>
        <small>Multiple Matrices</small>
      </div>

    </div>


    <h3>19. Real-World Applications</h3>

    <ul>
      <li>3D coordinates in graphics and games.</li>
      <li>Multiple matrices in mathematical calculations.</li>
      <li>Image and video data processing.</li>
      <li>Scientific and engineering data.</li>
      <li>Simulation and modelling.</li>
      <li>Grid-based games and environments.</li>
      <li>Storing data across multiple categories and dimensions.</li>
    </ul>


    <h3>20. Important Points</h3>

    <ul>
      <li>A multi-dimensional array has two or more dimensions.</li>
      <li>A 3D array uses three indexes.</li>
      <li>Each additional dimension requires another index.</li>
      <li>Nested loops are used to traverse multi-dimensional arrays.</li>
      <li>The total number of elements is the product of all dimensions.</li>
      <li>C stores multi-dimensional arrays in row-major order.</li>
      <li>Array indexes start from 0.</li>
      <li>Accessing an invalid index results in undefined behavior.</li>
      <li>Higher-dimensional arrays can require significant memory.</li>
      <li>3D arrays can be viewed as a collection of 2D arrays.</li>
    </ul>


    <h3>21. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    int data[2][2][3];

    int sum = 0;
    int largest;

    printf("===== Multi-Dimensional Array =====\\n");

    printf("Enter 12 elements:\\n");

    for (int i = 0; i &lt; 2; i++) {

        for (int j = 0; j &lt; 2; j++) {

            for (int k = 0; k &lt; 3; k++) {

                scanf("%d", &amp;data[i][j][k]);
            }
        }
    }

    largest = data[0][0][0];

    printf("\\nArray:\\n");

    for (int i = 0; i &lt; 2; i++) {

        printf("Layer %d:\\n", i);

        for (int j = 0; j &lt; 2; j++) {

            for (int k = 0; k &lt; 3; k++) {

                printf("%d\\t", data[i][j][k]);

                sum += data[i][j][k];

                if (data[i][j][k] &gt; largest) {

                    largest = data[i][j][k];
                }
            }

            printf("\\n");
        }

        printf("\\n");
    }

    printf("Total Sum = %d\\n", sum);

    printf("Largest = %d", largest);

    return 0;
}</code></pre>
    `
  ],

  practice: [
    'What is a multi-dimensional array in C?',
    'What is the difference between a 2D and 3D array?',
    'Write the syntax for declaring a 3D array.',
    'How many elements are present in int data[2][3][4]?',
    'How do you access an element of a 3D array?',
    'Write a program to initialize and display a 3D array.',
    'Write a program to take input in a 3D array.',
    'Write a program to find the sum of all elements in a 3D array.',
    'Write a program to find the largest element in a 3D array.',
    'Write a program to find the smallest element in a 3D array.',
    'Explain nested loops in multi-dimensional arrays.',
    'Explain row-major order in C.',
    'How can sizeof be used to find the number of elements?',
    'What are the practical applications of multi-dimensional arrays?',
    'What is a 4D array?'
  ],

  code: `#include <stdio.h>

int main() {

    int data[2][2][3];

    int sum = 0;
    int largest;

    printf("===== Multi-Dimensional Array =====\\\\n");

    printf("Enter 12 elements:\\\\n");

    for (int i = 0; i < 2; i++) {

        for (int j = 0; j < 2; j++) {

            for (int k = 0; k < 3; k++) {

                scanf("%d", &data[i][j][k]);
            }
        }
    }

    largest = data[0][0][0];

    printf("\\\\nArray:\\\\n");

    for (int i = 0; i < 2; i++) {

        printf("Layer %d:\\\\n", i);

        for (int j = 0; j < 2; j++) {

            for (int k = 0; k < 3; k++) {

                printf("%d\\\\t", data[i][j][k]);

                sum += data[i][j][k];

                if (data[i][j][k] > largest) {
                    largest = data[i][j][k];
                }
            }

            printf("\\\\n");
        }

        printf("\\\\n");
    }

    printf("Total Sum = %d\\\\n", sum);
    printf("Largest = %d", largest);

    return 0;
}`
},
  {
  key: 'strings',
  title: 'Strings in C',

  description: 'A string in C is a sequence of characters stored in a character array and terminated by a null character (\\0). Strings are used to store and manipulate text.',

  theory: [
    `
    <h3>1. What is a String?</h3>

    <p>
      A <strong>string</strong> in C is a sequence of characters stored
      inside a character array. Every string in C ends with a special
      null character <strong>\\\\0</strong>.
    </p>

    <div class="c-string-visual">

      <div class="c-string-title">
        String: "HELLO"
      </div>

      <div class="c-string-grid">
        <div class="c-string-cell">
          <strong>H</strong>
          <small>0</small>
        </div>

        <div class="c-string-cell">
          <strong>E</strong>
          <small>1</small>
        </div>

        <div class="c-string-cell">
          <strong>L</strong>
          <small>2</small>
        </div>

        <div class="c-string-cell">
          <strong>L</strong>
          <small>3</small>
        </div>

        <div class="c-string-cell">
          <strong>O</strong>
          <small>4</small>
        </div>

        <div class="c-string-cell c-string-null">
          <strong>\\0</strong>
          <small>5</small>
        </div>
      </div>

      <p class="c-string-note">
        The null character marks the end of the string.
      </p>

    </div>


    <h3>2. Character Array vs String</h3>

    <p>
      A character array stores characters, while a string is a
      character array that ends with a null character.
    </p>

    <pre><code>char name[] = {'H', 'e', 'l', 'l', 'o', '\\0'};</code></pre>

    <p>
      The same string can be written more conveniently as:
    </p>

    <pre><code>char name[] = "Hello";</code></pre>


    <h3>3. Declaring a String</h3>

    <p>The basic syntax is:</p>

    <pre><code>char string_name[size];</code></pre>

    <p>Example:</p>

    <pre><code>char name[20];</code></pre>

    <p>
      This can store up to 19 visible characters plus the
      null character <strong>\\\\0</strong>.
    </p>


    <h3>4. String Initialization</h3>

    <p>A string can be initialized in several ways.</p>

    <pre><code>char name[] = "Jitesh";

char city[10] = "Patna";

char word[] = {'H', 'e', 'l', 'l', 'o', '\\0'};</code></pre>


    <h3>5. String Indexing</h3>

    <p>
      Strings use zero-based indexing just like character arrays.
    </p>

    <pre><code>char name[] = "HELLO";

printf("%c", name[0]);
printf("%c", name[1]);
printf("%c", name[4]);</code></pre>

    <p>Output:</p>

    <pre><code>H
E
O</code></pre>


    <h3>6. Changing a Character in a String</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char name[] = "Hello";

    name[0] = 'Y';

    printf("%s", name);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Yello</code></pre>


    <h3>7. Printing a String</h3>

    <p>
      The <strong>%s</strong> format specifier is used to print a string.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char name[] = "Jitesh";

    printf("Name = %s", name);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Name = Jitesh</code></pre>


    <h3>8. Taking String Input Using scanf()</h3>

    <p>
      The <strong>%s</strong> format specifier can be used with
      <strong>scanf()</strong> to read a single word.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char name[30];

    printf("Enter your name: ");
    scanf("%29s", name);

    printf("Hello %s", name);

    return 0;
}</code></pre>

    <p>
      <strong>Note:</strong> scanf() with %s stops reading when it
      encounters whitespace.
    </p>


    <h3>9. Taking String Input Using fgets()</h3>

    <p>
      <strong>fgets()</strong> is commonly used to read a complete line
      of text, including spaces.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char name[50];

    printf("Enter your full name: ");

    fgets(name, sizeof(name), stdin);

    printf("Name = %s", name);

    return 0;
}</code></pre>


    <h3>10. puts() Function</h3>

    <p>
      The <strong>puts()</strong> function is used to print a string
      followed by a newline.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char message[] = "Welcome to C Programming";

    puts(message);

    return 0;
}</code></pre>


    <h3>11. String Length</h3>

    <p>
      The <strong>strlen()</strong> function returns the number of
      characters in a string, excluding the null character.
    </p>

    <p>
      It is declared in:
    </p>

    <pre><code>#include &lt;string.h&gt;</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char name[] = "Hello";

    printf("Length = %zu", strlen(name));

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Length = 5</code></pre>


    <h3>12. strcpy() Function</h3>

    <p>
      The <strong>strcpy()</strong> function copies one string into
      another string.
    </p>

    <pre><code>strcpy(destination, source);</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char source[] = "Hello";
    char destination[20];

    strcpy(destination, source);

    printf("%s", destination);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Hello</code></pre>


    <h3>13. strcat() Function</h3>

    <p>
      The <strong>strcat()</strong> function joins one string to the
      end of another string.
    </p>

    <pre><code>strcat(destination, source);</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char first[30] = "Hello ";
    char second[] = "World";

    strcat(first, second);

    printf("%s", first);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Hello World</code></pre>


    <h3>14. strcmp() Function</h3>

    <p>
      The <strong>strcmp()</strong> function compares two strings.
    </p>

    <pre><code>strcmp(string1, string2);</code></pre>

    <p>It returns:</p>

    <ul>
      <li><strong>0</strong> if both strings are equal.</li>
      <li>A negative value if the first string is smaller.</li>
      <li>A positive value if the first string is greater.</li>
    </ul>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char a[] = "Hello";
    char b[] = "Hello";

    if (strcmp(a, b) == 0) {
        printf("Strings are equal");
    } else {
        printf("Strings are not equal");
    }

    return 0;
}</code></pre>


    <h3>15. strchr() Function</h3>

    <p>
      The <strong>strchr()</strong> function searches for the first
      occurrence of a character in a string.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "Programming";

    char *result = strchr(text, 'g');

    if (result != NULL) {
        printf("Character found");
    } else {
        printf("Character not found");
    }

    return 0;
}</code></pre>


    <h3>16. strstr() Function</h3>

    <p>
      The <strong>strstr()</strong> function searches for one string
      inside another string.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "I love programming";

    if (strstr(text, "programming") != NULL) {
        printf("Substring found");
    } else {
        printf("Substring not found");
    }

    return 0;
}</code></pre>


    <h3>17. String Length Without strlen()</h3>

    <p>
      String length can also be calculated manually by counting
      characters until the null character is found.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char text[] = "Hello";

    int length = 0;

    while (text[length] != '\\0') {

        length++;
    }

    printf("Length = %d", length);

    return 0;
}</code></pre>


    <h3>18. Reverse a String</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[100];

    printf("Enter a string: ");
    fgets(text, sizeof(text), stdin);

    int length = strlen(text);

    if (length &gt; 0 && text[length - 1] == '\\n') {
        text[length - 1] = '\\0';
        length--;
    }

    printf("Reverse: ");

    for (int i = length - 1; i &gt;= 0; i--) {

        printf("%c", text[i]);
    }

    return 0;
}</code></pre>


    <h3>19. Check Palindrome String</h3>

    <p>
      A palindrome string reads the same from left to right and
      right to left.
    </p>

    <pre><code>madam
level
radar</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[100];

    printf("Enter a string: ");
    scanf("%99s", text);

    int left = 0;
    int right = strlen(text) - 1;
    int palindrome = 1;

    while (left &lt; right) {

        if (text[left] != text[right]) {

            palindrome = 0;
            break;
        }

        left++;
        right--;
    }

    if (palindrome) {
        printf("Palindrome");
    } else {
        printf("Not a Palindrome");
    }

    return 0;
}</code></pre>


    <h3>20. Count Vowels in a String</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char text[100];
    int vowels = 0;

    printf("Enter a string: ");
    fgets(text, sizeof(text), stdin);

    for (int i = 0; text[i] != '\\0'; i++) {

        if (
            text[i] == 'a' || text[i] == 'e' ||
            text[i] == 'i' || text[i] == 'o' ||
            text[i] == 'u' ||
            text[i] == 'A' || text[i] == 'E' ||
            text[i] == 'I' || text[i] == 'O' ||
            text[i] == 'U'
        ) {

            vowels++;
        }
    }

    printf("Vowels = %d", vowels);

    return 0;
}</code></pre>


    <h3>21. Count Characters, Digits and Spaces</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char text[100];

    int characters = 0;
    int digits = 0;
    int spaces = 0;

    printf("Enter a string: ");
    fgets(text, sizeof(text), stdin);

    for (int i = 0; text[i] != '\\0'; i++) {

        if (
            (text[i] &gt;= 'a' && text[i] &lt;= 'z') ||
            (text[i] &gt;= 'A' && text[i] &lt;= 'Z')
        ) {

            characters++;

        } else if (
            text[i] &gt;= '0' && text[i] &lt;= '9'
        ) {

            digits++;

        } else if (text[i] == ' ') {

            spaces++;
        }
    }

    printf("Characters = %d\\n", characters);
    printf("Digits = %d\\n", digits);
    printf("Spaces = %d", spaces);

    return 0;
}</code></pre>


    <h3>22. Convert Lowercase to Uppercase</h3>

    <p>
      The <strong>toupper()</strong> function can be used to convert
      characters to uppercase. It is declared in <strong>ctype.h</strong>.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;ctype.h&gt;

int main() {

    char text[100];

    printf("Enter a string: ");
    fgets(text, sizeof(text), stdin);

    for (int i = 0; text[i] != '\\0'; i++) {

        text[i] = toupper((unsigned char)text[i]);
    }

    printf("Uppercase: %s", text);

    return 0;
}</code></pre>


    <h3>23. Convert Uppercase to Lowercase</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;ctype.h&gt;

int main() {

    char text[100];

    printf("Enter a string: ");
    fgets(text, sizeof(text), stdin);

    for (int i = 0; text[i] != '\\0'; i++) {

        text[i] = tolower((unsigned char)text[i]);
    }

    printf("Lowercase: %s", text);

    return 0;
}</code></pre>


    <h3>24. Array of Strings</h3>

    <p>
      Multiple strings can be stored using a two-dimensional character
      array.
    </p>

    <pre><code>char names[3][20] = {
    "Rahul",
    "Amit",
    "Neha"
};</code></pre>

    <p>Each row stores one string.</p>

    <pre><code>Rahul
Amit
Neha</code></pre>


    <h3>25. Display Array of Strings</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char names[3][20] = {
        "Rahul",
        "Amit",
        "Neha"
    };

    for (int i = 0; i &lt; 3; i++) {

        printf("%s\\n", names[i]);
    }

    return 0;
}</code></pre>


    <h3>26. String Functions in C</h3>

    <div class="c-string-functions">

      <div class="c-string-function">
        <strong>strlen()</strong>
        <span>Finds string length</span>
      </div>

      <div class="c-string-function">
        <strong>strcpy()</strong>
        <span>Copies a string</span>
      </div>

      <div class="c-string-function">
        <strong>strcat()</strong>
        <span>Joins strings</span>
      </div>

      <div class="c-string-function">
        <strong>strcmp()</strong>
        <span>Compares strings</span>
      </div>

      <div class="c-string-function">
        <strong>strchr()</strong>
        <span>Searches a character</span>
      </div>

      <div class="c-string-function">
        <strong>strstr()</strong>
        <span>Searches a substring</span>
      </div>

    </div>


    <h3>27. Important Header Files</h3>

    <p>
      The most commonly used header files with strings are:
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
#include &lt;ctype.h&gt;</code></pre>

    <ul>
      <li><strong>stdio.h</strong> → input and output functions.</li>
      <li><strong>string.h</strong> → string manipulation functions.</li>
      <li><strong>ctype.h</strong> → character classification and conversion functions.</li>
    </ul>


    <h3>28. Important Points</h3>

    <ul>
      <li>A string is stored in a character array.</li>
      <li>Every C string ends with the null character <strong>\\\\0</strong>.</li>
      <li>The <strong>%s</strong> format specifier is used for strings.</li>
      <li><strong>fgets()</strong> can read strings containing spaces.</li>
      <li><strong>strlen()</strong> finds the length of a string.</li>
      <li><strong>strcpy()</strong> copies one string to another.</li>
      <li><strong>strcat()</strong> concatenates two strings.</li>
      <li><strong>strcmp()</strong> compares two strings.</li>
      <li>String functions such as strlen(), strcpy(), strcat() and strcmp() are declared in string.h.</li>
      <li>String indexing starts from 0.</li>
      <li>A character array must have enough space for the null character.</li>
    </ul>


    <h3>29. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char first[50];
    char second[50];

    printf("Enter first string: ");
    fgets(first, sizeof(first), stdin);

    printf("Enter second string: ");
    fgets(second, sizeof(second), stdin);

    first[strcspn(first, "\\n")] = '\\0';
    second[strcspn(second, "\\n")] = '\\0';

    printf("\\nFirst String: %s", first);
    printf("\\nSecond String: %s", second);

    printf("\\nFirst String Length: %zu", strlen(first));
    printf("\\nSecond String Length: %zu", strlen(second));

    if (strcmp(first, second) == 0) {
        printf("\\nStrings are equal");
    } else {
        printf("\\nStrings are different");
    }

    return 0;
}</code></pre>
    `
  ],

  practice: [
    'What is a string in C?',
    'Why is the null character used in a string?',
    'Write the syntax for declaring a string.',
    'What is the difference between a character array and a string?',
    'How do you initialize a string in C?',
    'What is the purpose of the %s format specifier?',
    'What is the difference between scanf() and fgets() for string input?',
    'What is the purpose of puts()?',
    'Explain the strlen() function.',
    'Explain the strcpy() function.',
    'Explain the strcat() function.',
    'Explain the strcmp() function.',
    'Write a program to find the length of a string without using strlen().',
    'Write a program to reverse a string.',
    'Write a program to check whether a string is a palindrome.',
    'Write a program to count vowels in a string.',
    'Write a program to count characters, digits and spaces.',
    'Write a program to convert a string to uppercase.',
    'Write a program to convert a string to lowercase.',
    'What is an array of strings?'
  ],

  code: `#include <stdio.h>
#include <string.h>

int main() {

    char text[100];

    printf("===== Strings in C =====\\\\n");

    printf("Enter a string: ");
    fgets(text, sizeof(text), stdin);

    text[strcspn(text, "\\\\n")] = '\\\\0';

    printf("\\\\nString = %s", text);
    printf("\\\\nLength = %zu", strlen(text));

    printf("\\\\nReverse = ");

    for (int i = strlen(text) - 1; i >= 0; i--) {
        printf("%c", text[i]);
    }

    return 0;
}`
},
  {
  key: 'string-functions',
  title: 'String Functions in C',

  description: 'C provides several functions through the string.h header file for finding string length, copying strings, joining strings, comparing strings, searching characters and substrings, and performing other string operations.',

  theory: [
    `
    <h3>1. What are String Functions?</h3>

    <p>
      String functions are predefined functions used to perform
      different operations on strings in C. Most commonly used
      string functions are available in the <strong>string.h</strong>
      header file.
    </p>

    <pre><code>#include &lt;string.h&gt;</code></pre>

    <div class="c-string-map">

      <div class="c-string-map-title">Important String Functions</div>

      <div class="c-string-map-grid">

        <div>
          <strong>strlen()</strong>
          <span>Find length</span>
        </div>

        <div>
          <strong>strcpy()</strong>
          <span>Copy string</span>
        </div>

        <div>
          <strong>strcat()</strong>
          <span>Join strings</span>
        </div>

        <div>
          <strong>strcmp()</strong>
          <span>Compare strings</span>
        </div>

        <div>
          <strong>strchr()</strong>
          <span>Find character</span>
        </div>

        <div>
          <strong>strstr()</strong>
          <span>Find substring</span>
        </div>

        <div>
          <strong>strcspn()</strong>
          <span>Find first matching character</span>
        </div>

        <div>
          <strong>strspn()</strong>
          <span>Find matching prefix</span>
        </div>

      </div>
    </div>


    <h3>2. strlen()</h3>

    <p>
      The <strong>strlen()</strong> function returns the number of
      characters present in a string. The null character
      <strong>\\\\0</strong> is not included in the length.
    </p>

    <pre><code>strlen(string);</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char name[] = "Jitesh";

    printf("Length = %zu", strlen(name));

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Length = 6</code></pre>


    <h3>3. strlen() with Spaces</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "Hello World";

    printf("Length = %zu", strlen(text));

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Length = 11</code></pre>

    <p>
      Spaces are also counted as characters.
    </p>


    <h3>4. strcpy()</h3>

    <p>
      The <strong>strcpy()</strong> function copies the contents of
      one string into another.
    </p>

    <pre><code>strcpy(destination, source);</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char source[] = "Hello";
    char destination[20];

    strcpy(destination, source);

    printf("%s", destination);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Hello</code></pre>


    <h3>5. Important Point about strcpy()</h3>

    <p>
      The destination array must have enough space to store the source
      string including its null character.
    </p>

    <pre><code>char source[] = "Hello";
char destination[6];

strcpy(destination, source);</code></pre>


    <h3>6. strncpy()</h3>

    <p>
      The <strong>strncpy()</strong> function copies up to a specified
      number of characters from one string to another.
    </p>

    <pre><code>strncpy(destination, source, n);</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char source[] = "Programming";
    char destination[20];

    strncpy(destination, source, 5);

    destination[5] = '\\0';

    printf("%s", destination);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Progr</code></pre>


    <h3>7. strcat()</h3>

    <p>
      The <strong>strcat()</strong> function appends one string to
      the end of another string.
    </p>

    <pre><code>strcat(destination, source);</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char first[30] = "Hello ";
    char second[] = "World";

    strcat(first, second);

    printf("%s", first);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Hello World</code></pre>


    <h3>8. strncat()</h3>

    <p>
      The <strong>strncat()</strong> function appends a specified
      number of characters from one string.
    </p>

    <pre><code>strncat(destination, source, n);</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char first[30] = "Hello ";
    char second[] = "Programming";

    strncat(first, second, 4);

    printf("%s", first);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Hello Prog</code></pre>


    <h3>9. strcmp()</h3>

    <p>
      The <strong>strcmp()</strong> function compares two strings
      character by character.
    </p>

    <pre><code>strcmp(string1, string2);</code></pre>

    <p>Its result is:</p>

    <ul>
      <li><strong>0</strong> → strings are equal.</li>
      <li><strong>Negative value</strong> → first string is smaller.</li>
      <li><strong>Positive value</strong> → first string is greater.</li>
    </ul>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char a[] = "Apple";
    char b[] = "Apple";

    if (strcmp(a, b) == 0) {
        printf("Equal");
    } else {
        printf("Not Equal");
    }

    return 0;
}</code></pre>


    <h3>10. strncmp()</h3>

    <p>
      The <strong>strncmp()</strong> function compares only the first
      specified number of characters of two strings.
    </p>

    <pre><code>strncmp(string1, string2, n);</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char a[] = "Programming";
    char b[] = "Program";

    if (strncmp(a, b, 7) == 0) {
        printf("First 7 characters are equal");
    } else {
        printf("They are different");
    }

    return 0;
}</code></pre>


    <h3>11. strchr()</h3>

    <p>
      The <strong>strchr()</strong> function searches for the first
      occurrence of a character in a string.
    </p>

    <pre><code>strchr(string, character);</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "Programming";

    char *result = strchr(text, 'g');

    if (result != NULL) {
        printf("Character found");
    } else {
        printf("Character not found");
    }

    return 0;
}</code></pre>


    <h3>12. Finding the Position of a Character</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "Programming";

    char *result = strchr(text, 'g');

    if (result != NULL) {

        printf("Position = %ld", result - text);

    } else {

        printf("Character not found");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Position = 3</code></pre>


    <h3>13. strrchr()</h3>

    <p>
      The <strong>strrchr()</strong> function searches for the
      <strong>last occurrence</strong> of a character.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "Programming";

    char *result = strrchr(text, 'g');

    if (result != NULL) {

        printf("Last position = %ld", result - text);

    }

    return 0;
}</code></pre>


    <h3>14. strstr()</h3>

    <p>
      The <strong>strstr()</strong> function searches for the first
      occurrence of a substring inside another string.
    </p>

    <pre><code>strstr(main_string, substring);</code></pre>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "I love C programming";

    char *result = strstr(text, "C");

    if (result != NULL) {
        printf("Substring found");
    } else {
        printf("Substring not found");
    }

    return 0;
}</code></pre>


    <h3>15. Finding Substring Position</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "I love C programming";

    char *result = strstr(text, "programming");

    if (result != NULL) {

        printf("Position = %ld", result - text);

    } else {

        printf("Not found");
    }

    return 0;
}</code></pre>


    <h3>16. strcspn()</h3>

    <p>
      The <strong>strcspn()</strong> function returns the length of
      the initial part of a string that does not contain any character
      from another string.
    </p>

    <p>
      It is commonly used to remove the newline character obtained
      from <strong>fgets()</strong>.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[50];

    fgets(text, sizeof(text), stdin);

    text[strcspn(text, "\\n")] = '\\0';

    printf("%s", text);

    return 0;
}</code></pre>


    <h3>17. strspn()</h3>

    <p>
      The <strong>strspn()</strong> function returns the length of
      the initial part of a string that contains only characters
      from a specified set.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "12345abc";

    size_t result = strspn(text, "0123456789");

    printf("Length = %zu", result);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Length = 5</code></pre>


    <h3>18. strpbrk()</h3>

    <p>
      The <strong>strpbrk()</strong> function searches a string for
      the first occurrence of any character from a specified set.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "Programming";

    char *result = strpbrk(text, "aeiou");

    if (result != NULL) {
        printf("First vowel = %c", *result);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>First vowel = o</code></pre>


    <h3>19. strtok()</h3>

    <p>
      The <strong>strtok()</strong> function divides a string into
      smaller parts called tokens using delimiters.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char text[] = "C,Python,Java";

    char *token = strtok(text, ",");

    while (token != NULL) {

        printf("%s\\n", token);

        token = strtok(NULL, ",");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>C
Python
Java</code></pre>

    <p>
      <strong>Important:</strong> strtok() modifies the string being
      tokenized.
    </p>


    <h3>20. String Function Workflow</h3>

    <div class="c-string-workflow">

      <div class="c-string-work-box">
        <strong>Input</strong>
        <span>"Hello World"</span>
      </div>

      <div class="c-string-work-arrow">→</div>

      <div class="c-string-work-box">
        <strong>Process</strong>
        <span>String Function</span>
      </div>

      <div class="c-string-work-arrow">→</div>

      <div class="c-string-work-box">
        <strong>Output</strong>
        <span>Result</span>
      </div>

    </div>


    <h3>21. Practical Example: Compare User Input</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char password[50];

    printf("Enter password: ");
    fgets(password, sizeof(password), stdin);

    password[strcspn(password, "\\n")] = '\\0';

    if (strcmp(password, "admin123") == 0) {

        printf("Login successful");

    } else {

        printf("Invalid password");
    }

    return 0;
}</code></pre>


    <h3>22. Practical Example: Join First and Last Name</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {

    char first[50];
    char last[50];
    char fullName[110];

    printf("Enter first name: ");
    fgets(first, sizeof(first), stdin);

    printf("Enter last name: ");
    fgets(last, sizeof(last), stdin);

    first[strcspn(first, "\\n")] = '\\0';
    last[strcspn(last, "\\n")] = '\\0';

    strcpy(fullName, first);
    strcat(fullName, " ");
    strcat(fullName, last);

    printf("Full Name = %s", fullName);

    return 0;
}</code></pre>


    <h3>23. Practical Example: Count Occurrences of a Character</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main() {

    char text[100];
    char target;

    int count = 0;

    printf("Enter a string: ");
    fgets(text, sizeof(text), stdin);

    printf("Enter character: ");
    scanf(" %c", &target);

    for (int i = 0; text[i] != '\\0'; i++) {

        if (text[i] == target) {
            count++;
        }
    }

    printf("Occurrences = %d", count);

    return 0;
}</code></pre>


    <h3>24. String Functions Quick Reference</h3>

    <table class="c-string-table">

      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
          <th>Header</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>strlen()</td>
          <td>Find string length</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strcpy()</td>
          <td>Copy string</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strncpy()</td>
          <td>Copy limited characters</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strcat()</td>
          <td>Join strings</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strncat()</td>
          <td>Join limited characters</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strcmp()</td>
          <td>Compare strings</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strncmp()</td>
          <td>Compare limited characters</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strchr()</td>
          <td>Find first character</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strrchr()</td>
          <td>Find last character</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strstr()</td>
          <td>Find substring</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strcspn()</td>
          <td>Find first matching character</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strspn()</td>
          <td>Find matching prefix</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strpbrk()</td>
          <td>Search any character from a set</td>
          <td>string.h</td>
        </tr>

        <tr>
          <td>strtok()</td>
          <td>Split string into tokens</td>
          <td>string.h</td>
        </tr>

      </tbody>

    </table>


    <h3>25. Important Points</h3>

    <ul>
      <li>Most C string functions are declared in <strong>string.h</strong>.</li>
      <li><strong>strlen()</strong> returns the number of characters excluding \\\\0.</li>
      <li><strong>strcpy()</strong> copies a complete string.</li>
      <li><strong>strncpy()</strong> copies a limited number of characters.</li>
      <li><strong>strcat()</strong> joins two strings.</li>
      <li><strong>strncat()</strong> joins a limited number of characters.</li>
      <li><strong>strcmp()</strong> compares two complete strings.</li>
      <li><strong>strncmp()</strong> compares a limited number of characters.</li>
      <li><strong>strchr()</strong> searches for the first occurrence of a character.</li>
      <li><strong>strrchr()</strong> searches for the last occurrence of a character.</li>
      <li><strong>strstr()</strong> searches for a substring.</li>
      <li><strong>strtok()</strong> divides a string into tokens.</li>
      <li>The destination array must have sufficient space when copying or concatenating strings.</li>
      <li>Always ensure that strings are properly null-terminated.</li>
    </ul>
    `
  ],

  practice: [
    'What are string functions in C?',
    'Which header file contains standard string functions?',
    'Explain strlen() with an example.',
    'Explain strcpy() and strncpy().',
    'What is the difference between strcpy() and strncpy()?',
    'Explain strcat() and strncat().',
    'What is the difference between strcmp() and strncmp()?',
    'Write a program to compare two strings.',
    'Write a program to find the first occurrence of a character.',
    'Write a program to find the last occurrence of a character.',
    'Write a program to search for a substring.',
    'Explain strcspn() with an example.',
    'Explain strspn() with an example.',
    'What is the use of strpbrk()?',
    'What is strtok() and where is it used?',
    'Write a program to split a comma-separated string.',
    'Write a program to count occurrences of a character.',
    'Write a program to join first name and last name.',
    'Write a program to remove the newline character from fgets() input.',
    'Write a program to implement common string operations.'
  ],

  code: `#include <stdio.h>
#include <string.h>

int main() {

    char first[50];
    char second[50];

    printf("===== String Functions in C =====\\\\n");

    printf("Enter first string: ");
    fgets(first, sizeof(first), stdin);

    printf("Enter second string: ");
    fgets(second, sizeof(second), stdin);

    first[strcspn(first, "\\\\n")] = '\\\\0';
    second[strcspn(second, "\\\\n")] = '\\\\0';

    printf("\\\\nFirst String: %s", first);
    printf("\\\\nSecond String: %s", second);

    printf("\\\\nFirst Length: %zu", strlen(first));
    printf("\\\\nSecond Length: %zu", strlen(second));

    if (strcmp(first, second) == 0) {
        printf("\\\\nStrings are equal");
    } else {
        printf("\\\\nStrings are different");
    }

    return 0;
}`
},
  {
  key: 'functions',
  title: 'Functions in C',

  description: 'A function in C is a reusable block of code designed to perform a specific task. Functions make programs modular, easier to understand, test, debug, and maintain.',

  theory: [
    `
    <h3>1. What is a Function?</h3>

    <p>
      A <strong>function</strong> is a block of code that performs a
      specific task. Instead of writing the same code repeatedly,
      we can place it inside a function and call it whenever required.
    </p>

    <div class="c-function-visual">

      <div class="c-function-box c-function-input">
        <strong>Input</strong>
        <span>Arguments</span>
      </div>

      <div class="c-function-arrow">→</div>

      <div class="c-function-box c-function-main">
        <strong>FUNCTION</strong>
        <span>Process / Task</span>
      </div>

      <div class="c-function-arrow">→</div>

      <div class="c-function-box c-function-output">
        <strong>Output</strong>
        <span>Return Value</span>
      </div>

    </div>


    <h3>2. Why Use Functions?</h3>

    <ul>
      <li>Functions reduce code duplication.</li>
      <li>They make programs easier to understand.</li>
      <li>They make debugging easier.</li>
      <li>They allow code reuse.</li>
      <li>They divide a large program into smaller modules.</li>
      <li>They make programs easier to maintain.</li>
      <li>Different programmers can work on different functions.</li>
    </ul>


    <h3>3. Basic Syntax of a Function</h3>

    <pre><code>return_type function_name(parameters)
{
    // statements
    return value;
}</code></pre>

    <p>Example:</p>

    <pre><code>int add(int a, int b)
{
    return a + b;
}</code></pre>


    <h3>4. Three Important Parts of a Function</h3>

    <div class="c-function-parts">

      <div>
        <strong>Declaration</strong>
        <span>Tells the compiler about the function.</span>
      </div>

      <div>
        <strong>Definition</strong>
        <span>Contains the actual function code.</span>
      </div>

      <div>
        <strong>Call</strong>
        <span>Executes the function.</span>
      </div>

    </div>


    <h3>5. Function Declaration</h3>

    <p>
      A function declaration, also called a <strong>function prototype</strong>,
      tells the compiler the function name, return type, and parameters.
    </p>

    <pre><code>int add(int, int);</code></pre>

    <p>
      It is normally written before <strong>main()</strong>.
    </p>


    <h3>6. Function Definition</h3>

    <p>
      The function definition contains the actual statements that
      perform the required task.
    </p>

    <pre><code>int add(int a, int b)
{
    return a + b;
}</code></pre>


    <h3>7. Function Call</h3>

    <p>
      A function is executed when it is called.
    </p>

    <pre><code>int result = add(10, 20);</code></pre>


    <h3>8. Complete Function Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int add(int a, int b);

int main()
{
    int result;

    result = add(10, 20);

    printf("Sum = %d", result);

    return 0;
}

int add(int a, int b)
{
    return a + b;
}</code></pre>

    <p>Output:</p>

    <pre><code>Sum = 30</code></pre>


    <h3>9. Function Execution Flow</h3>

    <div class="c-function-flow">

      <div>main()</div>
      <div>↓</div>
      <div>Function Call</div>
      <div>↓</div>
      <div>Function Executes</div>
      <div>↓</div>
      <div>Return Value</div>
      <div>↓</div>
      <div>Back to main()</div>

    </div>


    <h3>10. Types of Functions</h3>

    <p>
      Functions in C can broadly be divided into two categories:
    </p>

    <div class="c-function-types">

      <div>
        <strong>Library Functions</strong>
        <span>
          Predefined functions provided by C libraries.
        </span>
        <code>printf(), strlen(), sqrt()</code>
      </div>

      <div>
        <strong>User-Defined Functions</strong>
        <span>
          Functions created by the programmer.
        </span>
        <code>add(), calculate(), display()</code>
      </div>

    </div>


    <h3>11. Library Functions</h3>

    <p>
      Library functions are predefined functions available through
      standard C header files.
    </p>

    <pre><code>printf()
scanf()
strlen()
strcpy()
sqrt()
pow()</code></pre>

    <p>Example:</p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

int main()
{
    printf("Square Root = %.2f", sqrt(25));

    return 0;
}</code></pre>


    <h3>12. User-Defined Functions</h3>

    <p>
      User-defined functions are created by the programmer according
      to the requirements of the program.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void greet()
{
    printf("Welcome to C Programming!");
}

int main()
{
    greet();

    return 0;
}</code></pre>


    <h3>13. Function with No Arguments and No Return Value</h3>

    <p>
      This type of function does not accept any argument and does not
      return a value.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void message()
{
    printf("Hello World!");
}

int main()
{
    message();

    return 0;
}</code></pre>


    <h3>14. Function with Arguments and No Return Value</h3>

    <p>
      This function accepts arguments but does not return a value.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void display(int number)
{
    printf("Number = %d", number);
}

int main()
{
    display(100);

    return 0;
}</code></pre>


    <h3>15. Function with No Arguments and Return Value</h3>

    <p>
      This function does not accept arguments but returns a value.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int getNumber()
{
    return 100;
}

int main()
{
    int number;

    number = getNumber();

    printf("Number = %d", number);

    return 0;
}</code></pre>


    <h3>16. Function with Arguments and Return Value</h3>

    <p>
      This is one of the most commonly used types of functions.
      It accepts arguments and returns a value.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int multiply(int a, int b)
{
    return a * b;
}

int main()
{
    int result;

    result = multiply(5, 4);

    printf("Result = %d", result);

    return 0;
}</code></pre>


    <h3>17. Four Types of Functions</h3>

    <div class="c-function-four-types">

      <div>
        <strong>1</strong>
        <span>No Argument</span>
        <code>void show()</code>
        <small>No return value</small>
      </div>

      <div>
        <strong>2</strong>
        <span>Argument</span>
        <code>void show(int x)</code>
        <small>No return value</small>
      </div>

      <div>
        <strong>3</strong>
        <span>No Argument</span>
        <code>int get()</code>
        <small>Returns value</small>
      </div>

      <div>
        <strong>4</strong>
        <span>Argument</span>
        <code>int add(int a,int b)</code>
        <small>Returns value</small>
      </div>

    </div>


    <h3>18. Parameters and Arguments</h3>

    <p>
      A <strong>parameter</strong> is a variable declared in the
      function definition.
    </p>

    <pre><code>int add(int a, int b)
{
    return a + b;
}</code></pre>

    <p>
      Here <strong>a</strong> and <strong>b</strong> are parameters.
    </p>

    <p>
      The actual values supplied during the function call are called
      <strong>arguments</strong>.
    </p>

    <pre><code>add(10, 20);</code></pre>

    <p>
      Here <strong>10</strong> and <strong>20</strong> are arguments.
    </p>


    <h3>19. Return Statement</h3>

    <p>
      The <strong>return</strong> statement sends a value back to the
      calling function.
    </p>

    <pre><code>int square(int n)
{
    return n * n;
}</code></pre>

    <pre><code>int result = square(5);</code></pre>

    <p>Result:</p>

    <pre><code>25</code></pre>


    <h3>20. void Function</h3>

    <p>
      A function with a <strong>void</strong> return type does not
      return a value.
    </p>

    <pre><code>void display()
{
    printf("Hello");
}</code></pre>


    <h3>21. Passing Multiple Arguments</h3>

    <pre><code>#include &lt;stdio.h&gt;

int calculate(int a, int b, int c)
{
    return a + b + c;
}

int main()
{
    int result;

    result = calculate(10, 20, 30);

    printf("Sum = %d", result);

    return 0;
}</code></pre>


    <h3>22. Call by Value</h3>

    <p>
      In <strong>call by value</strong>, a copy of the actual value is
      passed to the function. Changes made inside the function do not
      change the original variable.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void change(int x)
{
    x = 100;
}

int main()
{
    int number = 10;

    change(number);

    printf("Number = %d", number);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Number = 10</code></pre>


    <h3>23. Call by Reference Concept</h3>

    <p>
      C does not have a separate call-by-reference parameter mechanism
      like some other languages. Reference-like behavior is achieved
      by passing the address of a variable using pointers.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void change(int *x)
{
    *x = 100;
}

int main()
{
    int number = 10;

    change(&amp;number);

    printf("Number = %d", number);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Number = 100</code></pre>


    <h3>24. Swapping Two Numbers Using a Function</h3>

    <pre><code>#include &lt;stdio.h&gt;

void swap(int *a, int *b)
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x = 10;
    int y = 20;

    printf("Before Swap: %d %d\\n", x, y);

    swap(&amp;x, &amp;y);

    printf("After Swap: %d %d", x, y);

    return 0;
}</code></pre>


    <h3>25. Passing an Array to a Function</h3>

    <p>
      An array can be passed to a function as an argument.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void display(int arr[], int size)
{
    for (int i = 0; i &lt; size; i++)
    {
        printf("%d ", arr[i]);
    }
}

int main()
{
    int numbers[] = {10, 20, 30, 40, 50};

    display(numbers, 5);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>10 20 30 40 50</code></pre>


    <h3>26. Function with String</h3>

    <pre><code>#include &lt;stdio.h&gt;

void display(char name[])
{
    printf("Name = %s", name);
}

int main()
{
    char name[] = "Jitesh";

    display(name);

    return 0;
}</code></pre>


    <h3>27. Function Returning a String</h3>

    <p>
      A function should not return a pointer to a local automatic
      character array because that array ceases to exist after the
      function returns. A safer approach is to let the caller provide
      the output buffer.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

void getMessage(char result[], size_t size)
{
    snprintf(result, size, "Hello from C");
}

int main()
{
    char message[50];

    getMessage(message, sizeof(message));

    printf("%s", message);

    return 0;
}</code></pre>


    <h3>28. Nested Function Calls</h3>

    <p>
      C does not allow defining one named function inside another
      function, but one function can call another function.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int square(int n)
{
    return n * n;
}

int cube(int n)
{
    return n * square(n);
}

int main()
{
    printf("Cube = %d", cube(3));

    return 0;
}</code></pre>


    <h3>29. Recursion</h3>

    <p>
      When a function calls itself, it is called
      <strong>recursion</strong>.
    </p>

    <pre><code>int factorial(int n)
{
    if (n &lt;= 1)
        return 1;

    return n * factorial(n - 1);
}</code></pre>

    <p>
      Recursion is useful for problems that can naturally be divided
      into smaller versions of the same problem.
    </p>


    <h3>30. Static Local Variable in a Function</h3>

    <p>
      A local variable declared with <strong>static</strong> retains
      its value between function calls.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void counter()
{
    static int count = 0;

    count++;

    printf("%d\\n", count);
}

int main()
{
    counter();
    counter();
    counter();

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1
2
3</code></pre>


    <h3>31. Function Scope</h3>

    <p>
      Variables declared inside a function are generally local to that
      function and cannot be directly accessed from another function.
    </p>

    <pre><code>void test()
{
    int x = 10;
}</code></pre>

    <p>
      The variable <strong>x</strong> belongs to the scope of
      <strong>test()</strong>.
    </p>


    <h3>32. Advantages of Functions</h3>

    <div class="c-function-benefits">

      <div>
        <strong>Reusability</strong>
        <span>Use the same code multiple times.</span>
      </div>

      <div>
        <strong>Modularity</strong>
        <span>Divide a large program into smaller parts.</span>
      </div>

      <div>
        <strong>Debugging</strong>
        <span>Find and fix errors more easily.</span>
      </div>

      <div>
        <strong>Maintenance</strong>
        <span>Make future changes easier.</span>
      </div>

    </div>


    <h3>33. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int add(int a, int b)
{
    return a + b;
}

int subtract(int a, int b)
{
    return a - b;
}

int multiply(int a, int b)
{
    return a * b;
}

float divide(int a, int b)
{
    return (float)a / b;
}

int main()
{
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &amp;a, &amp;b);

    printf("\\nAddition = %d", add(a, b));

    printf("\\nSubtraction = %d", subtract(a, b));

    printf("\\nMultiplication = %d", multiply(a, b));

    if (b != 0)
    {
        printf("\\nDivision = %.2f", divide(a, b));
    }
    else
    {
        printf("\\nDivision by zero is not allowed.");
    }

    return 0;
}</code></pre>
    `
  ],

  practice: [
    'What is a function in C?',
    'Why are functions used in C programming?',
    'What is a function declaration?',
    'What is a function definition?',
    'What is a function call?',
    'What is a function prototype?',
    'What is the difference between parameters and arguments?',
    'Explain the four types of user-defined functions.',
    'What is a void function?',
    'What is the purpose of the return statement?',
    'Explain call by value in C.',
    'How can reference-like behavior be achieved using pointers?',
    'Write a program to add two numbers using a function.',
    'Write a program to find the largest of two numbers using a function.',
    'Write a program to calculate factorial using a function.',
    'Write a program to swap two numbers using a function.',
    'Write a program to pass an array to a function.',
    'Write a function to calculate the sum of array elements.',
    'Explain recursion with an example.',
    'What is the use of a static local variable inside a function?',
    'What are the advantages of using functions?',
    'Write a menu-driven calculator using functions.'
  ],

  code: `#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int subtract(int a, int b)
{
    return a - b;
}

int multiply(int a, int b)
{
    return a * b;
}

float divide(int a, int b)
{
    return (float)a / b;
}

int main()
{
    int a, b;

    printf("===== Functions in C =====\\\\n");

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("\\\\nAddition = %d", add(a, b));

    printf("\\\\nSubtraction = %d", subtract(a, b));

    printf("\\\\nMultiplication = %d", multiply(a, b));

    if (b != 0)
    {
        printf("\\\\nDivision = %.2f", divide(a, b));
    }
    else
    {
        printf("\\\\nDivision by zero is not allowed.");
    }

    return 0;
}`
},
  {
  key: 'storage-classes',
  title: 'Storage Classes in C',

  description: 'Storage classes in C define the scope, lifetime, visibility, and storage behavior of variables and functions.',

  theory: [
    `
    <h3>1. What are Storage Classes?</h3>

    <p>
      Storage classes in C determine important properties of a variable,
      such as its <strong>scope</strong>, <strong>lifetime</strong>,
      <strong>visibility</strong>, and linkage.
    </p>

    <div class="c-storage-visual">

      <div class="c-storage-center">
        <strong>Storage Classes</strong>
        <span>Variable Behavior</span>
      </div>

      <div class="c-storage-line"></div>

      <div class="c-storage-items">
        <div>
          <strong>auto</strong>
          <span>Local variable</span>
        </div>

        <div>
          <strong>register</strong>
          <span>Fast access request</span>
        </div>

        <div>
          <strong>static</strong>
          <span>Retains value</span>
        </div>

        <div>
          <strong>extern</strong>
          <span>External variable</span>
        </div>
      </div>

    </div>


    <h3>2. Main Storage Classes in C</h3>

    <p>
      The four commonly studied storage classes in C are:
    </p>

    <ul>
      <li><strong>auto</strong></li>
      <li><strong>register</strong></li>
      <li><strong>static</strong></li>
      <li><strong>extern</strong></li>
    </ul>


    <h3>3. Important Properties</h3>

    <table class="c-storage-table">

      <thead>
        <tr>
          <th>Storage Class</th>
          <th>Scope</th>
          <th>Lifetime</th>
          <th>Default Value</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>auto</td>
          <td>Block</td>
          <td>Until block ends</td>
          <td>Indeterminate</td>
        </tr>

        <tr>
          <td>register</td>
          <td>Block</td>
          <td>Until block ends</td>
          <td>Indeterminate</td>
        </tr>

        <tr>
          <td>static</td>
          <td>Block / File</td>
          <td>Entire program</td>
          <td>0</td>
        </tr>

        <tr>
          <td>extern</td>
          <td>Global</td>
          <td>Entire program</td>
          <td>0 for a definition</td>
        </tr>

      </tbody>

    </table>


    <h3>4. auto Storage Class</h3>

    <p>
      The <strong>auto</strong> storage class is used for local variables.
      Local variables declared inside a block are automatic by default,
      so the keyword <strong>auto</strong> is rarely written explicitly.
    </p>

    <pre><code>auto int x = 10;</code></pre>

    <p>
      The following declaration is equivalent:
    </p>

    <pre><code>int x = 10;</code></pre>


    <h3>5. Example of auto</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    auto int number = 50;

    printf("Number = %d", number);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Number = 50</code></pre>


    <h3>6. Lifetime of auto Variable</h3>

    <p>
      An automatic variable is created when execution enters its block
      and its lifetime ends when execution leaves that block.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void test()
{
    int x = 10;

    printf("%d\\n", x);
}

int main()
{
    test();
    test();

    return 0;
}</code></pre>

    <p>
      A new automatic variable is created each time the function is called.
    </p>


    <h3>7. register Storage Class</h3>

    <p>
      The <strong>register</strong> storage class is a request to the
      compiler to keep a variable in a CPU register when possible,
      potentially allowing fast access.
    </p>

    <pre><code>register int count;</code></pre>

    <p>
      Modern compilers generally make their own optimization decisions,
      so explicitly using <strong>register</strong> is rarely necessary.
    </p>


    <h3>8. Example of register</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    register int i;

    for (i = 1; i &lt;= 5; i++)
    {
        printf("%d ", i);
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>1 2 3 4 5</code></pre>


    <h3>9. Important Point about register</h3>

    <p>
      You should not use the address-of operator
      <strong>&amp;</strong> on a register variable.
    </p>

    <pre><code>register int x = 10;

/* Not allowed */
printf("%p", (void *)&amp;x);</code></pre>

    <p>
      A register-qualified object is not guaranteed to have a memory
      address that can be used this way.
    </p>


    <h3>10. static Storage Class</h3>

    <p>
      The <strong>static</strong> storage class has two important uses:
    </p>

    <ul>
      <li>It preserves the value of a local variable between function calls.</li>
      <li>At file scope, it gives an object or function internal linkage.</li>
    </ul>


    <h3>11. Static Local Variable</h3>

    <p>
      A static local variable is initialized only once and retains its
      value throughout the execution of the program.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void counter()
{
    static int count = 0;

    count++;

    printf("Count = %d\\n", count);
}

int main()
{
    counter();
    counter();
    counter();

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Count = 1
Count = 2
Count = 3</code></pre>


    <h3>12. Normal Local Variable vs static Variable</h3>

    <table class="c-storage-table">

      <thead>
        <tr>
          <th>Normal Local Variable</th>
          <th>static Local Variable</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Created for each function call</td>
          <td>Initialized only once</td>
        </tr>

        <tr>
          <td>Value does not persist between calls</td>
          <td>Value persists between calls</td>
        </tr>

        <tr>
          <td>Lifetime ends when block ends</td>
          <td>Lifetime lasts until program ends</td>
        </tr>

      </tbody>

    </table>


    <h3>13. static Variable with Initialization</h3>

    <p>
      A static variable is initialized only once.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void demo()
{
    static int x = 10;

    printf("%d\\n", x);

    x += 5;
}

int main()
{
    demo();
    demo();
    demo();

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>10
15
20</code></pre>


    <h3>14. static Variable at File Scope</h3>

    <p>
      When <strong>static</strong> is used with a global variable,
      the variable has <strong>internal linkage</strong>. It can be
      accessed only within the same source file.
    </p>

    <pre><code>static int total = 100;</code></pre>

    <p>
      Another source file cannot access this variable using
      <strong>extern</strong>.
    </p>


    <h3>15. static Function</h3>

    <p>
      A function declared with <strong>static</strong> at file scope
      has internal linkage. It can be called only from the same
      source file.
    </p>

    <pre><code>static void display()
{
    printf("Hello");
}</code></pre>


    <h3>16. extern Storage Class</h3>

    <p>
      The <strong>extern</strong> keyword declares that a variable or
      function is defined elsewhere, usually in another source file.
    </p>

    <pre><code>extern int total;</code></pre>

    <p>
      An extern declaration generally does not create a new object;
      it refers to an object defined elsewhere.
    </p>


    <h3>17. Example of extern</h3>

    <p><strong>File 1: main.c</strong></p>

    <pre><code>#include &lt;stdio.h&gt;

extern int number;

int main()
{
    printf("Number = %d", number);

    return 0;
}</code></pre>

    <p><strong>File 2: data.c</strong></p>

    <pre><code>int number = 100;</code></pre>

    <p>
      Here <strong>number</strong> is defined in
      <strong>data.c</strong> and declared with
      <strong>extern</strong> in <strong>main.c</strong>.
    </p>


    <h3>18. extern with Multiple Files</h3>

    <div class="c-storage-files">

      <div>
        <strong>main.c</strong>
        <code>extern int score;</code>
        <span>Uses the variable</span>
      </div>

      <div class="c-storage-file-arrow">→</div>

      <div>
        <strong>data.c</strong>
        <code>int score = 90;</code>
        <span>Defines the variable</span>
      </div>

    </div>


    <h3>19. Difference between static and extern</h3>

    <table class="c-storage-table">

      <thead>
        <tr>
          <th>static</th>
          <th>extern</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Can preserve local variable value.</td>
          <td>Refers to an externally defined object or function.</td>
        </tr>

        <tr>
          <td>At file scope, gives internal linkage.</td>
          <td>Used to declare external linkage.</td>
        </tr>

        <tr>
          <td>Can restrict file-level visibility.</td>
          <td>Can allow use of a definition from another file.</td>
        </tr>

      </tbody>

    </table>


    <h3>20. Storage Class and Scope</h3>

    <div class="c-storage-scope">

      <div class="scope-item">
        <strong>Local</strong>
        <span>Visible inside a block/function.</span>
      </div>

      <div class="scope-item">
        <strong>Global</strong>
        <span>Declared outside functions.</span>
      </div>

      <div class="scope-item">
        <strong>File Limited</strong>
        <span>static file-scope object.</span>
      </div>

    </div>


    <h3>21. Storage Class and Lifetime</h3>

    <div class="c-storage-lifetime">

      <div>
        <strong>auto</strong>
        <span>Block execution</span>
      </div>

      <div>
        <strong>register</strong>
        <span>Block execution</span>
      </div>

      <div>
        <strong>static</strong>
        <span>Entire program</span>
      </div>

      <div>
        <strong>extern</strong>
        <span>Entire program for the defined object</span>
      </div>

    </div>


    <h3>22. Example Combining auto and static</h3>

    <pre><code>#include &lt;stdio.h&gt;

void test()
{
    auto int a = 0;
    static int b = 0;

    a++;
    b++;

    printf("a = %d, b = %d\\n", a, b);
}

int main()
{
    test();
    test();
    test();

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>a = 1, b = 1
a = 1, b = 2
a = 1, b = 3</code></pre>

    <p>
      The automatic variable <strong>a</strong> starts again for each
      function call, while static variable <strong>b</strong> retains
      its previous value.
    </p>


    <h3>23. Storage Classes Quick Comparison</h3>

    <table class="c-storage-table">

      <thead>
        <tr>
          <th>Feature</th>
          <th>auto</th>
          <th>register</th>
          <th>static</th>
          <th>extern</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Typical use</td>
          <td>Local variables</td>
          <td>Frequently accessed locals</td>
          <td>Persistent local / file-private objects</td>
          <td>External declarations</td>
        </tr>

        <tr>
          <td>Scope</td>
          <td>Block</td>
          <td>Block</td>
          <td>Block or file</td>
          <td>Depends on declaration/definition</td>
        </tr>

        <tr>
          <td>Lifetime</td>
          <td>Block</td>
          <td>Block</td>
          <td>Program duration</td>
          <td>Program duration for defined object</td>
        </tr>

        <tr>
          <td>Default initialization</td>
          <td>Indeterminate</td>
          <td>Indeterminate</td>
          <td>Zero</td>
          <td>Defined object is zero-initialized if no initializer is given</td>
        </tr>

        <tr>
          <td>Linkage</td>
          <td>None</td>
          <td>None</td>
          <td>Internal at file scope</td>
          <td>External for applicable file-scope declarations</td>
        </tr>

      </tbody>

    </table>


    <h3>24. Important Points</h3>

    <ul>
      <li>Storage classes define important properties of variables and functions.</li>
      <li>The four commonly studied storage classes are auto, register, static, and extern.</li>
      <li>Local variables are automatic by default.</li>
      <li>register is only a request to the compiler; modern compilers may ignore it.</li>
      <li>A static local variable retains its value between function calls.</li>
      <li>A file-scope static object or function has internal linkage.</li>
      <li>extern is commonly used to refer to a definition in another source file.</li>
      <li>Static variables with static storage duration are initialized only once.</li>
      <li>Uninitialized automatic variables have indeterminate values and should not be read before initialization.</li>
    </ul>


    <h3>25. Real-World Use</h3>

    <div class="c-storage-use">

      <div>
        <strong>auto</strong>
        <span>Temporary local calculations</span>
      </div>

      <div>
        <strong>register</strong>
        <span>Legacy optimization hint</span>
      </div>

      <div>
        <strong>static</strong>
        <span>Counters and file-private data/functions</span>
      </div>

      <div>
        <strong>extern</strong>
        <span>Sharing definitions between source files</span>
      </div>

    </div>
    `
  ],

  practice: [
    'What are storage classes in C?',
    'Name the four commonly studied storage classes in C.',
    'What is the auto storage class?',
    'Why is the auto keyword rarely written explicitly?',
    'What is the register storage class?',
    'Can the address of a register variable be taken?',
    'What is the static storage class?',
    'Explain a static local variable with an example.',
    'What happens to a static variable between function calls?',
    'What is the use of static at file scope?',
    'What is the extern storage class?',
    'How is extern used with multiple source files?',
    'Differentiate between auto and static.',
    'Differentiate between static and extern.',
    'Write a program to demonstrate a static local variable.',
    'Write a program using an extern variable.',
    'Explain scope and lifetime of storage classes.',
    'Create a program that uses auto and static variables together.',
    'What is internal linkage?',
    'What is external linkage?'
  ],

  code: `#include <stdio.h>

void counter()
{
    auto int normal = 0;
    static int persistent = 0;

    normal++;
    persistent++;

    printf("auto variable   = %d\\\\n", normal);
    printf("static variable = %d\\\\n", persistent);

    printf("----------------------\\\\n");
}

int main()
{
    printf("===== Storage Classes in C =====\\\\n\\\\n");

    counter();
    counter();
    counter();

    return 0;
}`
},
  {
  key: 'pointers',
  title: 'Pointers in C',

  description: 'A pointer is a variable that stores the memory address of another variable.',

  theory: [
    `
    <h3>1. What is a Pointer?</h3>

    <p>
      A <strong>pointer</strong> is a variable that stores the
      <strong>memory address</strong> of another variable.
    </p>

    <div class="c-pointer-visual">
      <div class="pointer-box">
        <strong>Variable</strong>
        <span>x = 10</span>
      </div>

      <div class="pointer-arrow">←</div>

      <div class="pointer-box">
        <strong>Pointer</strong>
        <span>int *p</span>
      </div>
    </div>


    <h3>2. Pointer Declaration</h3>

    <pre><code>int *p;</code></pre>

    <p>
      Here <strong>p</strong> is a pointer to an integer variable.
    </p>


    <h3>3. Address Operator &amp;</h3>

    <p>
      The <strong>&amp;</strong> operator is used to get the memory
      address of a variable.
    </p>

    <pre><code>int x = 10;
printf("%p", (void *)&amp;x);</code></pre>


    <h3>4. Dereference Operator *</h3>

    <p>
      The <strong>*</strong> operator is used to access the value stored
      at the address held by a pointer.
    </p>

    <pre><code>int x = 10;
int *p = &amp;x;

printf("%d", *p);</code></pre>

    <p>Output:</p>

    <pre><code>10</code></pre>


    <h3>5. Basic Pointer Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    int x = 25;
    int *p = &amp;x;

    printf("Value = %d\\n", x);
    printf("Address = %p\\n", (void *)p);
    printf("Value using pointer = %d", *p);

    return 0;
}</code></pre>


    <h3>6. Changing Value Using Pointer</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    int x = 10;
    int *p = &amp;x;

    *p = 50;

    printf("x = %d", x);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>x = 50</code></pre>


    <h3>7. Pointer and Function</h3>

    <p>
      Pointers can be used to modify the original variables inside
      a function.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void change(int *p)
{
    *p = 100;
}

int main()
{
    int x = 10;

    change(&amp;x);

    printf("x = %d", x);

    return 0;
}</code></pre>


    <h3>8. Important Points</h3>

    <ul>
      <li>A pointer stores an address.</li>
      <li><strong>&amp;</strong> gives the address of a variable.</li>
      <li><strong>*</strong> accesses the value at an address.</li>
      <li>The pointer type should be compatible with the pointed-to object.</li>
      <li>Pointers are useful with arrays, functions, and dynamic memory.</li>
    </ul>
    `
  ],

  practice: [
    'What is a pointer in C?',
    'How do you declare a pointer?',
    'What is the use of the & operator?',
    'What is the use of the * operator?',
    'Write a program to display the value of a variable using a pointer.',
    'Write a program to change a variable using a pointer.',
    'How are pointers used with functions?'
  ],

  code: `#include <stdio.h>

int main()
{
    int number = 25;
    int *ptr = &number;

    printf("Value = %d\\\\n", number);
    printf("Address = %p\\\\n", (void *)ptr);
    printf("Value using pointer = %d", *ptr);

    return 0;
}`
},
  {
  key: 'pointer-arithmetic',
  title: 'Pointer Arithmetic',

  description: 'Pointer arithmetic allows pointers to move between elements of an array using operations such as increment, decrement, addition, and subtraction.',

  theory: [
    `
    <h3>1. What is Pointer Arithmetic?</h3>

    <p>
      Pointer arithmetic means performing arithmetic operations on
      pointers to move between memory locations of elements, especially
      elements of an array.
    </p>

    <div class="c-pointer-arithmetic-visual">

      <div>
        <strong>arr[0]</strong>
        <span>10</span>
      </div>

      <div>→</div>

      <div>
        <strong>arr[1]</strong>
        <span>20</span>
      </div>

      <div>→</div>

      <div>
        <strong>arr[2]</strong>
        <span>30</span>
      </div>

      <div>→</div>

      <div>
        <strong>arr[3]</strong>
        <span>40</span>
      </div>

    </div>


    <h3>2. Increment Operator</h3>

    <p>
      Using <strong>p++</strong> moves the pointer to the next element
      of its type.
    </p>

    <pre><code>int arr[] = {10, 20, 30};

int *p = arr;

printf("%d", *p);

p++;

printf("%d", *p);</code></pre>

    <p>Output:</p>

    <pre><code>1020</code></pre>


    <h3>3. Decrement Operator</h3>

    <p>
      Using <strong>p--</strong> moves the pointer to the previous
      element.
    </p>

    <pre><code>int arr[] = {10, 20, 30};

int *p = &amp;arr[2];

printf("%d", *p);

p--;

printf("%d", *p);</code></pre>

    <p>Output:</p>

    <pre><code>3020</code></pre>


    <h3>4. Addition with Pointer</h3>

    <p>
      A pointer can be increased by an integer value.
    </p>

    <pre><code>int arr[] = {10, 20, 30, 40};

int *p = arr;

printf("%d", *(p + 2));</code></pre>

    <p>Output:</p>

    <pre><code>30</code></pre>


    <h3>5. Subtraction with Pointer</h3>

    <p>
      A pointer can also be moved backward using subtraction.
    </p>

    <pre><code>int arr[] = {10, 20, 30, 40};

int *p = &amp;arr[3];

printf("%d", *(p - 2));</code></pre>

    <p>Output:</p>

    <pre><code>20</code></pre>


    <h3>6. Difference Between Two Pointers</h3>

    <p>
      Two pointers pointing into the same array can be subtracted to
      find the number of elements between them.
    </p>

    <pre><code>int arr[] = {10, 20, 30, 40, 50};

int *p1 = &amp;arr[1];
int *p2 = &amp;arr[4];

printf("%td", p2 - p1);</code></pre>

    <p>Output:</p>

    <pre><code>3</code></pre>


    <h3>7. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    int arr[] = {10, 20, 30, 40, 50};

    int *p = arr;

    printf("First = %d\\n", *p);

    p++;

    printf("Second = %d\\n", *p);

    p += 2;

    printf("Fourth = %d\\n", *p);

    p--;

    printf("Third = %d", *p);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>First = 10
Second = 20
Fourth = 40
Third = 30</code></pre>


    <h3>8. Important Points</h3>

    <ul>
      <li><strong>p++</strong> moves to the next element.</li>
      <li><strong>p--</strong> moves to the previous element.</li>
      <li><strong>p + n</strong> moves forward by n elements.</li>
      <li><strong>p - n</strong> moves backward by n elements.</li>
      <li>Two pointers can be subtracted when they point into the same array.</li>
      <li>Pointer arithmetic depends on the size of the pointed-to type.</li>
      <li>Pointer arithmetic is commonly used with arrays.</li>
    </ul>
    `
  ],

  practice: [
    'What is pointer arithmetic?',
    'What happens when a pointer is incremented?',
    'What is the use of p++ and p--?',
    'Write a program using pointer increment.',
    'Write a program using pointer addition.',
    'How can two pointers be subtracted?',
    'Explain pointer arithmetic with an array.'
  ],

  code: `#include <stdio.h>

int main()
{
    int arr[] = {10, 20, 30, 40, 50};

    int *p = arr;

    printf("First  = %d\\\\n", *p);

    p++;

    printf("Second = %d\\\\n", *p);

    p += 2;

    printf("Fourth = %d\\\\n", *p);

    p--;

    printf("Third  = %d", *p);

    return 0;
}`
},
  {
  key: 'pointers-arrays',
  title: 'Pointers and Arrays',

  description: 'Pointers and arrays are closely related in C. The name of an array usually represents the address of its first element.',

  theory: [
    `
    <h3>1. Relationship Between Pointers and Arrays</h3>

    <p>
      In C, the array name can be used as the address of its first
      element in most expressions.
    </p>

    <pre><code>int arr[] = {10, 20, 30};

int *p = arr;</code></pre>

    <p>
      Here <strong>p</strong> points to the first element of the array.
    </p>


    <div class="c-array-pointer-visual">

      <div class="array-cell">
        <strong>arr[0]</strong>
        <span>10</span>
      </div>

      <div class="array-cell">
        <strong>arr[1]</strong>
        <span>20</span>
      </div>

      <div class="array-cell">
        <strong>arr[2]</strong>
        <span>30</span>
      </div>

      <div class="pointer-label">
        <strong>p</strong>
        <span>Points to arr[0]</span>
      </div>

    </div>


    <h3>2. Accessing Array Elements Using Pointer</h3>

    <pre><code>int arr[] = {10, 20, 30};

int *p = arr;

printf("%d", *p);
printf("%d", *(p + 1));
printf("%d", *(p + 2));</code></pre>

    <p>Output:</p>

    <pre><code>10 20 30</code></pre>


    <h3>3. Pointer and Array Index</h3>

    <p>
      The following expressions access the same element:
    </p>

    <pre><code>arr[2]
*(arr + 2)
p[2]
*(p + 2)</code></pre>


    <h3>4. Traversing an Array Using Pointer</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;

    for (int i = 0; i &lt; 5; i++)
    {
        printf("%d ", *(p + i));
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>10 20 30 40 50</code></pre>


    <h3>5. Changing Array Elements Using Pointer</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    int arr[] = {10, 20, 30};

    int *p = arr;

    *(p + 1) = 100;

    printf("%d %d %d",
           arr[0], arr[1], arr[2]);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>10 100 30</code></pre>


    <h3>6. Passing Array to Function Using Pointer</h3>

    <pre><code>#include &lt;stdio.h&gt;

void display(int *p, int size)
{
    for (int i = 0; i &lt; size; i++)
    {
        printf("%d ", *(p + i));
    }
}

int main()
{
    int arr[] = {10, 20, 30, 40};

    display(arr, 4);

    return 0;
}</code></pre>


    <h3>7. Important Points</h3>

    <ul>
      <li>The array name usually represents the address of its first element.</li>
      <li>A pointer can be used to access array elements.</li>
      <li><strong>*(arr + i)</strong> is equivalent to <strong>arr[i]</strong>.</li>
      <li>Pointer arithmetic is commonly used to traverse arrays.</li>
      <li>Arrays passed to functions are commonly handled through pointers.</li>
      <li>An array name itself is not a modifiable pointer; you cannot do <strong>arr++</strong>.</li>
    </ul>
    `
  ],

  practice: [
    'What is the relationship between arrays and pointers in C?',
    'How can an array be accessed using a pointer?',
    'Explain *(arr + i) with an example.',
    'Write a program to print array elements using a pointer.',
    'Write a program to modify an array element using a pointer.',
    'How can an array be passed to a function using a pointer?'
  ],

  code: `#include <stdio.h>

int main()
{
    int arr[] = {10, 20, 30, 40, 50};

    int *p = arr;

    printf("Array elements using pointer:\\\\n");

    for (int i = 0; i < 5; i++)
    {
        printf("%d ", *(p + i));
    }

    return 0;
}`
},
  {
  key: 'pointers-functions',
  title: 'Pointers and Functions',

  description: 'Pointers can be passed to functions to access or modify the original variables and to work with memory addresses.',

  theory: [
    `
    <h3>1. Pointers with Functions</h3>

    <p>
      Pointers can be passed as arguments to functions. This allows a
      function to access and modify the original variable.
    </p>

    <div class="c-pointer-function-visual">

      <div class="pf-box">
        <strong>main()</strong>
        <span>x = 10</span>
      </div>

      <div class="pf-arrow">→</div>

      <div class="pf-box">
        <strong>Function</strong>
        <span>int *p</span>
      </div>

      <div class="pf-arrow">→</div>

      <div class="pf-box">
        <strong>Original Variable</strong>
        <span>x = 100</span>
      </div>

    </div>


    <h3>2. Passing Pointer to Function</h3>

    <pre><code>void change(int *p)
{
    *p = 100;
}</code></pre>

    <p>
      The pointer <strong>p</strong> receives the address of the
      original variable.
    </p>


    <h3>3. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

void change(int *p)
{
    *p = 100;
}

int main()
{
    int x = 10;

    printf("Before = %d\\n", x);

    change(&amp;x);

    printf("After = %d", x);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Before = 10
After = 100</code></pre>


    <h3>4. Swapping Two Numbers</h3>

    <p>
      Pointers are commonly used to swap two variables inside a function.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void swap(int *a, int *b)
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x = 10;
    int y = 20;

    swap(&amp;x, &amp;y);

    printf("x = %d\\n", x);
    printf("y = %d", y);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>x = 20
y = 10</code></pre>


    <h3>5. Returning Multiple Results</h3>

    <p>
      A function can use pointer parameters to store multiple results
      in variables supplied by the caller.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

void calculate(int a, int b, int *sum, int *product)
{
    *sum = a + b;
    *product = a * b;
}

int main()
{
    int sum, product;

    calculate(5, 4, &amp;sum, &amp;product);

    printf("Sum = %d\\n", sum);
    printf("Product = %d", product);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Sum = 9
Product = 20</code></pre>


    <h3>6. Pointer to Function</h3>

    <p>
      A <strong>function pointer</strong> stores the address of a function.
      It can then be used to call that function.
    </p>

    <pre><code>int add(int a, int b)
{
    return a + b;
}

int (*operation)(int, int) = add;

printf("%d", operation(10, 20));</code></pre>

    <p>Output:</p>

    <pre><code>30</code></pre>


    <h3>7. Important Points</h3>

    <ul>
      <li>Pointers can be passed as function arguments.</li>
      <li>Use <strong>&amp;</strong> when passing the address of a variable.</li>
      <li>Use <strong>*</strong> inside the function to access or modify the value.</li>
      <li>Pointers allow functions to modify caller variables.</li>
      <li>Pointers can be used to return multiple results through output parameters.</li>
      <li>A function pointer stores the address of a function.</li>
    </ul>
    `
  ],

  practice: [
    'Why are pointers used with functions?',
    'How can a function modify the original variable?',
    'Write a function to change the value of a variable using a pointer.',
    'Write a program to swap two numbers using pointers.',
    'How can pointers be used to return multiple results?',
    'What is a function pointer?'
  ],

  code: `#include <stdio.h>

void swap(int *a, int *b)
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x = 10;
    int y = 20;

    printf("Before Swap: x = %d, y = %d\\\\n", x, y);

    swap(&x, &y);

    printf("After Swap: x = %d, y = %d", x, y);

    return 0;
}`
},
  {
  key: 'dynamic-memory',
  title: 'Dynamic Memory Allocation',

  description: 'Dynamic memory allocation allows a C program to allocate and release memory during runtime using functions such as malloc(), calloc(), realloc(), and free().',

  theory: [
    `
    <h3>1. What is Dynamic Memory Allocation?</h3>

    <p>
      Dynamic Memory Allocation means allocating memory during
      <strong>program execution</strong>. It is useful when the required
      amount of memory is not known at compile time.
    </p>

    <div class="c-dynamic-memory-visual">

      <div class="dm-box">
        <strong>Program</strong>
        <span>Runtime</span>
      </div>

      <div class="dm-arrow">→</div>

      <div class="dm-box">
        <strong>Heap Memory</strong>
        <span>Allocate</span>
      </div>

      <div class="dm-arrow">→</div>

      <div class="dm-box">
        <strong>free()</strong>
        <span>Release Memory</span>
      </div>

    </div>


    <h3>2. Dynamic Memory Functions</h3>

    <ul>
      <li><strong>malloc()</strong> – allocates a block of memory.</li>
      <li><strong>calloc()</strong> – allocates memory for multiple elements and initializes it to zero.</li>
      <li><strong>realloc()</strong> – changes the size of previously allocated memory.</li>
      <li><strong>free()</strong> – releases dynamically allocated memory.</li>
    </ul>


    <h3>3. malloc()</h3>

    <p>
      <strong>malloc()</strong> allocates a specified number of bytes
      and returns a pointer to the allocated memory.
    </p>

    <pre><code>int *p;

p = malloc(5 * sizeof(int));</code></pre>

    <p>
      For portable C code, include <strong>stdlib.h</strong> and check
      whether the returned pointer is <strong>NULL</strong>.
    </p>


    <h3>4. Example of malloc()</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main()
{
    int *p;

    p = malloc(5 * sizeof(int));

    if (p == NULL)
    {
        printf("Memory allocation failed");
        return 1;
    }

    for (int i = 0; i &lt; 5; i++)
    {
        p[i] = (i + 1) * 10;
        printf("%d ", p[i]);
    }

    free(p);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>10 20 30 40 50</code></pre>


    <h3>5. calloc()</h3>

    <p>
      <strong>calloc()</strong> allocates memory for multiple elements
      and initializes all allocated bytes to zero.
    </p>

    <pre><code>int *p;

p = calloc(5, sizeof(int));</code></pre>


    <h3>6. Example of calloc()</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main()
{
    int *p;

    p = calloc(5, sizeof(int));

    if (p == NULL)
    {
        printf("Memory allocation failed");
        return 1;
    }

    for (int i = 0; i &lt; 5; i++)
    {
        printf("%d ", p[i]);
    }

    free(p);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>0 0 0 0 0</code></pre>


    <h3>7. realloc()</h3>

    <p>
      <strong>realloc()</strong> changes the size of a previously
      allocated memory block. The memory may be moved to a new location.
    </p>

    <pre><code>p = realloc(p, 10 * sizeof(int));</code></pre>


    <h3>8. Example of realloc()</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main()
{
    int *p;

    p = malloc(3 * sizeof(int));

    if (p == NULL)
        return 1;

    p[0] = 10;
    p[1] = 20;
    p[2] = 30;

    int *temp = realloc(p, 5 * sizeof(int));

    if (temp == NULL)
    {
        free(p);
        return 1;
    }

    p = temp;

    p[3] = 40;
    p[4] = 50;

    for (int i = 0; i &lt; 5; i++)
    {
        printf("%d ", p[i]);
    }

    free(p);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>10 20 30 40 50</code></pre>


    <h3>9. free()</h3>

    <p>
      <strong>free()</strong> releases dynamically allocated memory
      when it is no longer required.
    </p>

    <pre><code>free(p);
p = NULL;</code></pre>

    <p>
      Setting the pointer to <strong>NULL</strong> after freeing it can
      help prevent accidental reuse of the old address.
    </p>


    <h3>10. malloc() vs calloc()</h3>

    <table class="c-dynamic-table">

      <thead>
        <tr>
          <th>malloc()</th>
          <th>calloc()</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Allocates one block of memory.</td>
          <td>Allocates memory for multiple elements.</td>
        </tr>

        <tr>
          <td>Memory is not initialized.</td>
          <td>Allocated bytes are initialized to zero.</td>
        </tr>

        <tr>
          <td>malloc(size)</td>
          <td>calloc(count, size)</td>
        </tr>
      </tbody>

    </table>


    <h3>11. Dynamic Memory Flow</h3>

    <div class="c-dynamic-flow">

      <div>malloc() / calloc()</div>
      <div>↓</div>
      <div>Use Memory</div>
      <div>↓</div>
      <div>realloc() if needed</div>
      <div>↓</div>
      <div>free()</div>

    </div>


    <h3>12. Important Points</h3>

    <ul>
      <li>Dynamic memory is allocated during runtime.</li>
      <li>Dynamic memory is generally obtained from the heap.</li>
      <li>Use <strong>malloc()</strong> for raw memory allocation.</li>
      <li>Use <strong>calloc()</strong> when zero-initialized allocated storage is needed.</li>
      <li>Use <strong>realloc()</strong> to resize an allocated block.</li>
      <li>Use <strong>free()</strong> to release allocated memory.</li>
      <li>Always check allocation functions for <strong>NULL</strong>.</li>
      <li>For realloc(), use a temporary pointer so the original allocation is not lost if resizing fails.</li>
      <li>Forgetting to free allocated memory can cause a memory leak.</li>
    </ul>
    `
  ],

  practice: [
    'What is dynamic memory allocation?',
    'Why is dynamic memory allocation used in C?',
    'What is malloc()?',
    'What is calloc()?',
    'What is realloc()?',
    'What is free()?',
    'Write a program using malloc() to store five integers.',
    'Write a program using calloc().',
    'Explain the difference between malloc() and calloc().',
    'Write a program to resize dynamically allocated memory using realloc().',
    'What is a memory leak?',
    'Why should dynamically allocated memory be released using free()?'
  ],

  code: `#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;
    int *arr;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    arr = malloc(n * sizeof(int));

    if (arr == NULL)
    {
        printf("Memory allocation failed");
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        arr[i] = (i + 1) * 10;
    }

    printf("Elements: ");

    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }

    free(arr);
    arr = NULL;

    return 0;
}`
},
  {
  key: 'structures',
  title: 'Structures in C',

  description: 'A structure in C is a user-defined data type that groups related variables of different data types under one name.',

  theory: [
    `
    <h3>1. What is a Structure?</h3>

    <p>
      A <strong>structure</strong> is a user-defined data type in C
      that allows us to store different types of data together under
      one name.
    </p>

    <p>
      For example, a student can have a name, roll number, and marks.
      These values can be grouped using a structure.
    </p>

    <div class="c-structure-visual">

      <div class="structure-title">
        <strong>Student</strong>
      </div>

      <div class="structure-items">
        <div>
          <strong>name</strong>
          <span>char[]</span>
        </div>

        <div>
          <strong>roll</strong>
          <span>int</span>
        </div>

        <div>
          <strong>marks</strong>
          <span>float</span>
        </div>
      </div>

    </div>


    <h3>2. Structure Syntax</h3>

    <pre><code>struct StructureName
{
    data_type member1;
    data_type member2;
    data_type member3;
};</code></pre>


    <h3>3. Structure Declaration</h3>

    <pre><code>struct Student
{
    char name[50];
    int roll;
    float marks;
};</code></pre>


    <h3>4. Creating Structure Variable</h3>

    <pre><code>struct Student s1;</code></pre>

    <p>
      Here <strong>s1</strong> is a variable of type
      <strong>struct Student</strong>.
    </p>


    <h3>5. Accessing Structure Members</h3>

    <p>
      The <strong>dot (.) operator</strong> is used to access members
      of a structure variable.
    </p>

    <pre><code>s1.roll = 101;
s1.marks = 85.5;</code></pre>


    <h3>6. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

struct Student
{
    char name[50];
    int roll;
    float marks;
};

int main()
{
    struct Student s1 = {"Jitesh", 101, 85.5};

    printf("Name  = %s\\n", s1.name);
    printf("Roll  = %d\\n", s1.roll);
    printf("Marks = %.2f", s1.marks);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Name  = Jitesh
Roll  = 101
Marks = 85.50</code></pre>


    <h3>7. Structure Initialization</h3>

    <p>
      A structure can be initialized when it is declared.
    </p>

    <pre><code>struct Student s1 = {"Rahul", 102, 90.5};</code></pre>


    <h3>8. Array of Structures</h3>

    <p>
      Multiple structure variables can be stored in an array.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    float marks;
};

int main()
{
    struct Student students[3] =
    {
        {101, 80.5},
        {102, 85.0},
        {103, 90.5}
    };

    for (int i = 0; i &lt; 3; i++)
    {
        printf("Roll = %d, Marks = %.1f\\n",
               students[i].roll,
               students[i].marks);
    }

    return 0;
}</code></pre>


    <h3>9. Structure with Function</h3>

    <p>
      A structure variable can be passed to a function.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

struct Student
{
    int roll;
    float marks;
};

void display(struct Student s)
{
    printf("Roll = %d\\n", s.roll);
    printf("Marks = %.2f", s.marks);
}

int main()
{
    struct Student s = {101, 88.5};

    display(s);

    return 0;
}</code></pre>


    <h3>10. Pointer to Structure</h3>

    <p>
      A pointer can store the address of a structure variable.
      The <strong>-&gt;</strong> operator is used to access members
      through a structure pointer.
    </p>

    <pre><code>struct Student s = {101, 88.5};

struct Student *p = &amp;s;

printf("%d", p-&gt;roll);</code></pre>


    <h3>11. Nested Structure</h3>

    <p>
      A structure can contain another structure as a member.
    </p>

    <pre><code>struct Date
{
    int day;
    int month;
    int year;
};

struct Student
{
    int roll;
    struct Date dob;
};</code></pre>


    <h3>12. typedef with Structure</h3>

    <p>
      <strong>typedef</strong> can be used to create a shorter name
      for a structure type.
    </p>

    <pre><code>typedef struct
{
    int roll;
    float marks;
} Student;

Student s1;</code></pre>


    <h3>13. Structure vs Array</h3>

    <table class="c-structure-table">

      <thead>
        <tr>
          <th>Structure</th>
          <th>Array</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Can store different data types.</td>
          <td>Stores elements of the same data type.</td>
        </tr>

        <tr>
          <td>Members are accessed using names.</td>
          <td>Elements are accessed using indexes.</td>
        </tr>

        <tr>
          <td>Uses . or -&gt; for member access.</td>
          <td>Uses index notation.</td>
        </tr>
      </tbody>

    </table>


    <h3>14. Important Points</h3>

    <ul>
      <li>A structure is a user-defined data type.</li>
      <li>A structure can contain members of different data types.</li>
      <li>The <strong>struct</strong> keyword is used to define a structure.</li>
      <li>The <strong>.</strong> operator accesses members of a structure variable.</li>
      <li>The <strong>-&gt;</strong> operator accesses members through a structure pointer.</li>
      <li>An array of structures can store multiple records.</li>
      <li>Structures can be passed to functions.</li>
      <li>Structures can contain other structures.</li>
    </ul>
    `
  ],

  practice: [
    'What is a structure in C?',
    'Why are structures used?',
    'Write the syntax of a structure.',
    'How do you access structure members?',
    'What is an array of structures?',
    'Write a program to store and display student details using a structure.',
    'What is a pointer to a structure?',
    'What is the difference between . and -> operators?',
    'What is a nested structure?',
    'What is the use of typedef with structures?',
    'Differentiate between structure and array.'
  ],

  code: `#include <stdio.h>

struct Student
{
    char name[50];
    int roll;
    float marks;
};

int main()
{
    struct Student s1 = {"Jitesh", 101, 85.5};

    printf("===== Student Details =====\\\\n");
    printf("Name  : %s\\\\n", s1.name);
    printf("Roll  : %d\\\\n", s1.roll);
    printf("Marks : %.2f", s1.marks);

    return 0;
}`
},
  {
  key: 'unions',
  title: 'Unions in C',

  description: 'A union is a user-defined data type in C where all members share the same memory location.',

  theory: [
    `
    <h3>1. What is a Union?</h3>

    <p>
      A <strong>union</strong> is similar to a structure, but all its
      members share the <strong>same memory location</strong>.
      Therefore, only one member can hold a meaningful value at a time.
    </p>

    <div class="c-union-visual">

      <div class="union-title">
        <strong>union Data</strong>
        <span>Shared Memory</span>
      </div>

      <div class="union-memory">
        <div>
          <strong>int</strong>
          <span>number</span>
        </div>

        <div>
          <strong>float</strong>
          <span>price</span>
        </div>

        <div>
          <strong>char[]</strong>
          <span>name</span>
        </div>
      </div>

      <p>All members use the same memory area.</p>

    </div>


    <h3>2. Union Syntax</h3>

    <pre><code>union UnionName
{
    data_type member1;
    data_type member2;
    data_type member3;
};</code></pre>


    <h3>3. Union Declaration</h3>

    <pre><code>union Data
{
    int number;
    float price;
    char name[20];
};</code></pre>


    <h3>4. Creating a Union Variable</h3>

    <pre><code>union Data d1;</code></pre>

    <p>
      Here <strong>d1</strong> is a variable of type
      <strong>union Data</strong>.
    </p>


    <h3>5. Accessing Union Members</h3>

    <p>
      The <strong>dot (.) operator</strong> is used to access
      union members.
    </p>

    <pre><code>d1.number = 100;

printf("%d", d1.number);</code></pre>


    <h3>6. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

union Data
{
    int number;
    float price;
    char letter;
};

int main()
{
    union Data d;

    d.number = 100;

    printf("Number = %d", d.number);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Number = 100</code></pre>


    <h3>7. Shared Memory</h3>

    <p>
      Since all members share the same memory, assigning a value to
      one member can overwrite the value previously stored by another
      member.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

union Data
{
    int number;
    float price;
};

int main()
{
    union Data d;

    d.number = 10;
    printf("Number = %d\\n", d.number);

    d.price = 25.5;
    printf("Price = %.1f", d.price);

    return 0;
}</code></pre>

    <p>
      After assigning <strong>d.price</strong>, the previous
      <strong>d.number</strong> value should not be relied upon.
    </p>


    <h3>8. Size of Union</h3>

    <p>
      The size of a union is large enough to hold its largest member
      (subject to alignment and implementation details).
    </p>

    <pre><code>printf("%zu", sizeof(union Data));</code></pre>


    <h3>9. Union vs Structure</h3>

    <table class="c-union-table">

      <thead>
        <tr>
          <th>Union</th>
          <th>Structure</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Members share the same memory.</td>
          <td>Each member has its own storage.</td>
        </tr>

        <tr>
          <td>Usually one member is used at a time.</td>
          <td>All members can hold values at the same time.</td>
        </tr>

        <tr>
          <td>Size is based mainly on the largest member.</td>
          <td>Size includes storage for all members and padding.</td>
        </tr>

        <tr>
          <td>Useful for memory saving.</td>
          <td>Useful for grouping related data.</td>
        </tr>
      </tbody>

    </table>


    <h3>10. Union with Pointer</h3>

    <p>
      A pointer can point to a union variable. The
      <strong>-&gt;</strong> operator can then be used to access
      its members.
    </p>

    <pre><code>union Data d;

union Data *p = &amp;d;

p-&gt;number = 50;

printf("%d", p-&gt;number);</code></pre>


    <h3>11. Important Points</h3>

    <ul>
      <li>A union is a user-defined data type.</li>
      <li>All union members share the same memory location.</li>
      <li>Only one member should generally be treated as active at a time.</li>
      <li>The <strong>.</strong> operator accesses a union member.</li>
      <li>The <strong>-&gt;</strong> operator accesses a member through a union pointer.</li>
      <li>Unions can save memory when different data types are alternatives.</li>
      <li>The size of a union is generally based on its largest member and alignment requirements.</li>
    </ul>
    `
  ],

  practice: [
    'What is a union in C?',
    'How is a union different from a structure?',
    'Write the syntax of a union.',
    'How do union members share memory?',
    'Write a program to create and use a union.',
    'What happens when a new member is assigned in a union?',
    'How is the size of a union determined?',
    'What is the use of a pointer to a union?'
  ],

  code: `#include <stdio.h>

union Data
{
    int number;
    float price;
};

int main()
{
    union Data d;

    d.number = 100;

    printf("Number = %d\\\\n", d.number);

    d.price = 25.5;

    printf("Price = %.2f", d.price);

    return 0;
}`
},
  {
  key: 'enumerations',
  title: 'Enumerations in C',

  description: 'An enumeration, or enum, is a user-defined data type that consists of a set of named integer constants.',

  theory: [
    `
    <h3>1. What is Enumeration?</h3>

    <p>
      An <strong>enumeration (enum)</strong> is a user-defined data type
      used to give meaningful names to a set of integer constants.
    </p>

    <div class="c-enum-visual">

      <div class="enum-title">
        <strong>enum Day</strong>
      </div>

      <div class="enum-items">
        <div>
          <strong>MONDAY</strong>
          <span>0</span>
        </div>

        <div>
          <strong>TUESDAY</strong>
          <span>1</span>
        </div>

        <div>
          <strong>WEDNESDAY</strong>
          <span>2</span>
        </div>

        <div>
          <strong>THURSDAY</strong>
          <span>3</span>
        </div>
      </div>

    </div>


    <h3>2. Enum Syntax</h3>

    <pre><code>enum EnumName
{
    constant1,
    constant2,
    constant3
};</code></pre>


    <h3>3. Simple Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY
};

int main()
{
    enum Day today = WEDNESDAY;

    printf("%d", today);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>2</code></pre>

    <p>
      By default, the first enumerator has value <strong>0</strong>,
      the next has <strong>1</strong>, and so on.
    </p>


    <h3>4. Assigning Custom Values</h3>

    <p>
      You can explicitly assign integer values to enum constants.
    </p>

    <pre><code>enum Level
{
    LOW = 1,
    MEDIUM = 5,
    HIGH = 10
};</code></pre>


    <h3>5. Using Enum with if</h3>

    <pre><code>#include &lt;stdio.h&gt;

enum Status
{
    SUCCESS,
    FAILED
};

int main()
{
    enum Status result = SUCCESS;

    if (result == SUCCESS)
    {
        printf("Operation successful");
    }
    else
    {
        printf("Operation failed");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Operation successful</code></pre>


    <h3>6. Enum with switch</h3>

    <p>
      Enumerations are commonly used with <strong>switch</strong>
      statements when a variable can have one of a fixed set of values.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY
};

int main()
{
    enum Day day = TUESDAY;

    switch (day)
    {
        case MONDAY:
            printf("Monday");
            break;

        case TUESDAY:
            printf("Tuesday");
            break;

        case WEDNESDAY:
            printf("Wednesday");
            break;
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Tuesday</code></pre>


    <h3>7. typedef with enum</h3>

    <p>
      <strong>typedef</strong> can be used to create a shorter name
      for an enumeration type.
    </p>

    <pre><code>typedef enum
{
    RED,
    GREEN,
    BLUE
} Color;

Color c = GREEN;</code></pre>


    <h3>8. Practical Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

enum TrafficLight
{
    RED,
    YELLOW,
    GREEN
};

int main()
{
    enum TrafficLight light = GREEN;

    if (light == GREEN)
    {
        printf("Go");
    }

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Go</code></pre>


    <h3>9. Important Points</h3>

    <ul>
      <li><strong>enum</strong> is a user-defined data type.</li>
      <li>Enum constants represent integer values.</li>
      <li>By default, enumeration starts from <strong>0</strong>.</li>
      <li>You can assign custom integer values.</li>
      <li>Enums make code easier to read and understand.</li>
      <li>Enums are useful for fixed sets of related choices.</li>
      <li>Enums are commonly used with <strong>switch</strong> statements.</li>
    </ul>
    `
  ],

  practice: [
    'What is an enumeration in C?',
    'Write the syntax of an enum.',
    'What is the default value of the first enum constant?',
    'How can custom values be assigned to enum constants?',
    'Write a program using enum with switch.',
    'What is the use of typedef with enum?',
    'Give two practical uses of enumerations.'
  ],

  code: `#include <stdio.h>

enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY
};

int main()
{
    enum Day today = WEDNESDAY;

    switch (today)
    {
        case MONDAY:
            printf("Monday");
            break;

        case TUESDAY:
            printf("Tuesday");
            break;

        case WEDNESDAY:
            printf("Wednesday");
            break;

        case THURSDAY:
            printf("Thursday");
            break;

        case FRIDAY:
            printf("Friday");
            break;
    }

    return 0;
}`
},
 {
  key: 'typedef',
  title: 'typedef in C',

  description: 'The typedef keyword in C is used to create an alternative name or alias for an existing data type.',

  theory: [
    `
    <h3>1. What is typedef?</h3>

    <p>
      <strong>typedef</strong> is a C keyword used to create a new name
      (alias) for an existing data type. It makes code shorter and
      easier to read.
    </p>

    <div class="c-typedef-visual">

      <div class="typedef-box">
        <strong>Existing Type</strong>
        <span>unsigned long</span>
      </div>

      <div class="typedef-arrow">→</div>

      <div class="typedef-box">
        <strong>typedef</strong>
        <span>ulong</span>
      </div>

      <div class="typedef-arrow">→</div>

      <div class="typedef-box">
        <strong>Use</strong>
        <span>ulong x;</span>
      </div>

    </div>


    <h3>2. typedef Syntax</h3>

    <pre><code>typedef existing_type new_name;</code></pre>


    <h3>3. Simple Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

typedef int Number;

int main()
{
    Number x = 100;

    printf("%d", x);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>100</code></pre>

    <p>
      Here <strong>Number</strong> is an alias for <strong>int</strong>.
    </p>


    <h3>4. typedef with Structure</h3>

    <p>
      typedef is commonly used with structures to avoid writing
      <strong>struct</strong> every time a variable is declared.
    </p>

    <pre><code>typedef struct
{
    int roll;
    float marks;
} Student;

Student s1;</code></pre>

    <p>
      Instead of:
    </p>

    <pre><code>struct Student s1;</code></pre>


    <h3>5. Complete Structure Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

typedef struct
{
    int roll;
    float marks;
} Student;

int main()
{
    Student s1 = {101, 85.5};

    printf("Roll = %d\\n", s1.roll);
    printf("Marks = %.2f", s1.marks);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Roll = 101
Marks = 85.50</code></pre>


    <h3>6. typedef with enum</h3>

    <p>
      typedef can also be used with enumerations to create a shorter
      type name.
    </p>

    <pre><code>typedef enum
{
    RED,
    GREEN,
    BLUE
} Color;

Color c = GREEN;</code></pre>


    <h3>7. typedef with Pointer</h3>

    <p>
      typedef can create an alias for a pointer type.
    </p>

    <pre><code>typedef int *IntPtr;

IntPtr p;

int x = 10;

p = &amp;x;</code></pre>

    <p>
      Here <strong>IntPtr</strong> represents <strong>int *</strong>.
    </p>


    <h3>8. typedef with Array</h3>

    <p>
      typedef can also be used to create an alias for an array type.
    </p>

    <pre><code>typedef int Numbers[5];

Numbers arr = {10, 20, 30, 40, 50};</code></pre>


    <h3>9. Multiple Variables with typedef</h3>

    <pre><code>typedef unsigned long ulong;

ulong a = 100;
ulong b = 200;</code></pre>


    <h3>10. typedef vs #define</h3>

    <table class="c-typedef-table">

      <thead>
        <tr>
          <th>typedef</th>
          <th>#define</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Creates a type alias.</td>
          <td>Creates a preprocessor macro.</td>
        </tr>

        <tr>
          <td>Understood by the compiler as a type declaration.</td>
          <td>Text substitution happens before compilation.</td>
        </tr>

        <tr>
          <td>Can be used with structures, pointers, arrays, etc.</td>
          <td>Used for macros and symbolic constants.</td>
        </tr>
      </tbody>

    </table>


    <h3>11. Important Points</h3>

    <ul>
      <li><strong>typedef</strong> creates an alias for an existing type.</li>
      <li>It does not create a completely new data type.</li>
      <li>It makes complex declarations easier to read.</li>
      <li>It is commonly used with structures and enums.</li>
      <li>It can also create aliases for pointers and arrays.</li>
      <li>The alias can be used like the original data type.</li>
    </ul>
    `
  ],

  practice: [
    'What is typedef in C?',
    'Write the syntax of typedef.',
    'Create a typedef alias for int.',
    'How is typedef used with structures?',
    'Write a program using typedef with a structure.',
    'How is typedef used with enum?',
    'What is typedef with a pointer?',
    'What is the difference between typedef and #define?'
  ],

  code: `#include <stdio.h>

typedef struct
{
    int roll;
    char name[30];
    float marks;
} Student;

int main()
{
    Student s1 = {101, "Jitesh", 85.5};

    printf("Roll  = %d\\\\n", s1.roll);
    printf("Name  = %s\\\\n", s1.name);
    printf("Marks = %.2f", s1.marks);

    return 0;
}`
} ,
  {
  key: 'bitwise-operators',
  title: 'Bitwise Operators in C',

  description: 'Bitwise operators work directly on the individual bits of integer values.',

  theory: [
    `
    <h3>1. What are Bitwise Operators?</h3>

    <p>
      <strong>Bitwise operators</strong> perform operations directly on
      the binary bits of integer values.
    </p>

    <div class="c-bitwise-visual">

      <div class="bit-number">
        <strong>5</strong>
        <span>0101</span>
      </div>

      <div class="bit-operation">AND</div>

      <div class="bit-number">
        <strong>3</strong>
        <span>0011</span>
      </div>

      <div class="bit-operation">=</div>

      <div class="bit-number">
        <strong>1</strong>
        <span>0001</span>
      </div>

    </div>


    <h3>2. Bitwise Operators in C</h3>

    <table class="c-bitwise-table">

      <thead>
        <tr>
          <th>Operator</th>
          <th>Name</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>&amp;</td>
          <td>Bitwise AND</td>
          <td>a &amp; b</td>
        </tr>

        <tr>
          <td>|</td>
          <td>Bitwise OR</td>
          <td>a | b</td>
        </tr>

        <tr>
          <td>^</td>
          <td>Bitwise XOR</td>
          <td>a ^ b</td>
        </tr>

        <tr>
          <td>~</td>
          <td>Bitwise NOT</td>
          <td>~a</td>
        </tr>

        <tr>
          <td>&lt;&lt;</td>
          <td>Left Shift</td>
          <td>a &lt;&lt; n</td>
        </tr>

        <tr>
          <td>&gt;&gt;</td>
          <td>Right Shift</td>
          <td>a &gt;&gt; n</td>
        </tr>
      </tbody>

    </table>


    <h3>3. Bitwise AND (&amp;)</h3>

    <p>
      AND gives <strong>1</strong> only when both corresponding bits
      are 1.
    </p>

    <pre><code>5 &amp; 3

  0101
&amp; 0011
------
  0001</code></pre>

    <p>Result: <strong>1</strong></p>


    <h3>4. Bitwise OR (|)</h3>

    <p>
      OR gives <strong>1</strong> when at least one corresponding bit
      is 1.
    </p>

    <pre><code>5 | 3

  0101
| 0011
------
  0111</code></pre>

    <p>Result: <strong>7</strong></p>


    <h3>5. Bitwise XOR (^)</h3>

    <p>
      XOR gives <strong>1</strong> when the two corresponding bits
      are different.
    </p>

    <pre><code>5 ^ 3

  0101
^ 0011
------
  0110</code></pre>

    <p>Result: <strong>6</strong></p>


    <h3>6. Bitwise NOT (~)</h3>

    <p>
      NOT flips every bit: 1 becomes 0 and 0 becomes 1.
      For signed integers, the result depends on the representation
      used by the implementation.
    </p>

    <pre><code>unsigned char x = 5;

~x</code></pre>

    <p>
      Conceptually, the bits are inverted.
    </p>


    <h3>7. Left Shift (&lt;&lt;)</h3>

    <p>
      The left shift operator moves bits to the left.
    </p>

    <pre><code>5 &lt;&lt; 1

  0101
→ 1010</code></pre>

    <p>Result: <strong>10</strong></p>

    <p>
      For suitable non-negative values, shifting left by one position
      is equivalent to multiplying by 2.
    </p>


    <h3>8. Right Shift (&gt;&gt;)</h3>

    <p>
      The right shift operator moves bits to the right.
    </p>

    <pre><code>8 &gt;&gt; 1

  1000
→ 0100</code></pre>

    <p>Result: <strong>4</strong></p>


    <h3>9. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    unsigned int a = 5;
    unsigned int b = 3;

    printf("AND = %u\\n", a &amp; b);
    printf("OR  = %u\\n", a | b);
    printf("XOR = %u\\n", a ^ b);
    printf("NOT = %u\\n", (unsigned int)(~a));
    printf("Left Shift = %u\\n", a &lt;&lt; 1);
    printf("Right Shift = %u", a &gt;&gt; 1);

    return 0;
}</code></pre>


    <h3>10. Common Uses</h3>

    <ul>
      <li>Bit masking and flag handling.</li>
      <li>Setting, clearing, and testing individual bits.</li>
      <li>Low-level programming.</li>
      <li>Embedded systems and hardware programming.</li>
      <li>Efficient manipulation of integer bit patterns.</li>
    </ul>


    <h3>11. Important Points</h3>

    <ul>
      <li>Bitwise operators work on integer types.</li>
      <li><strong>&amp;</strong> performs bitwise AND.</li>
      <li><strong>|</strong> performs bitwise OR.</li>
      <li><strong>^</strong> performs bitwise XOR.</li>
      <li><strong>~</strong> performs bitwise NOT.</li>
      <li><strong>&lt;&lt;</strong> shifts bits to the left.</li>
      <li><strong>&gt;&gt;</strong> shifts bits to the right.</li>
      <li>Use unsigned integers when you want more predictable behavior for bit-level operations and shifts.</li>
    </ul>
    `
  ],

  practice: [
    'What are bitwise operators in C?',
    'Explain the bitwise AND operator with an example.',
    'Explain the bitwise OR operator with an example.',
    'Explain the bitwise XOR operator with an example.',
    'What does the bitwise NOT operator do?',
    'What is the use of the left shift operator?',
    'What is the use of the right shift operator?',
    'Write a program to demonstrate all bitwise operators.',
    'Convert 5 and 3 into binary and perform AND, OR, and XOR.'
  ],

  code: `#include <stdio.h>

int main()
{
    unsigned int a = 5;
    unsigned int b = 3;

    printf("a & b  = %u\\\\n", a & b);
    printf("a | b  = %u\\\\n", a | b);
    printf("a ^ b  = %u\\\\n", a ^ b);
    printf("a << 1 = %u\\\\n", a << 1);
    printf("a >> 1 = %u", a >> 1);

    return 0;
}`
},
 {
  key: 'file-handling',
  title: 'File Handling in C',

  description: 'File handling in C is used to create, open, read, write, append, and close files using standard file functions.',

  theory: [
    `
    <h3>1. What is File Handling?</h3>

    <p>
      <strong>File handling</strong> allows a C program to store and
      retrieve data from files. Unlike variables, file data can remain
      available after the program ends.
    </p>

    <div class="c-file-visual">

      <div class="file-box">
        <strong>C Program</strong>
        <span>Read / Write</span>
      </div>

      <div class="file-arrow">↔</div>

      <div class="file-box">
        <strong>File</strong>
        <span>Data Storage</span>
      </div>

    </div>


    <h3>2. FILE Pointer</h3>

    <p>
      C uses the <strong>FILE</strong> type to work with files.
      A file pointer keeps track of the file being accessed.
    </p>

    <pre><code>FILE *fp;</code></pre>


    <h3>3. Opening a File</h3>

    <p>
      The <strong>fopen()</strong> function is used to open a file.
    </p>

    <pre><code>FILE *fp;

fp = fopen("data.txt", "r");</code></pre>

    <p>
      Always check whether the file was opened successfully.
    </p>

    <pre><code>if (fp == NULL)
{
    printf("Unable to open file");
}</code></pre>


    <h3>4. File Opening Modes</h3>

    <table class="c-file-table">

      <thead>
        <tr>
          <th>Mode</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>r</td>
          <td>Open an existing file for reading.</td>
        </tr>

        <tr>
          <td>w</td>
          <td>Open for writing; creates a new file or truncates an existing file.</td>
        </tr>

        <tr>
          <td>a</td>
          <td>Open for appending data at the end of the file.</td>
        </tr>

        <tr>
          <td>r+</td>
          <td>Open an existing file for reading and writing.</td>
        </tr>

        <tr>
          <td>w+</td>
          <td>Open for reading and writing; creates or truncates the file.</td>
        </tr>

        <tr>
          <td>a+</td>
          <td>Open for reading and appending.</td>
        </tr>
      </tbody>

    </table>


    <h3>5. Writing to a File</h3>

    <p>
      The <strong>fprintf()</strong> function can be used to write
      formatted data to a file.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    FILE *fp = fopen("data.txt", "w");

    if (fp == NULL)
        return 1;

    fprintf(fp, "Welcome to C programming!");

    fclose(fp);

    return 0;
}</code></pre>


    <h3>6. Reading from a File</h3>

    <p>
      The <strong>fgets()</strong> function can read a line from a file.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    FILE *fp = fopen("data.txt", "r");
    char text[100];

    if (fp == NULL)
        return 1;

    if (fgets(text, sizeof(text), fp) != NULL)
    {
        printf("%s", text);
    }

    fclose(fp);

    return 0;
}</code></pre>


    <h3>7. fputc() and fgetc()</h3>

    <p>
      <strong>fputc()</strong> writes one character to a file and
      <strong>fgetc()</strong> reads one character from a file.
    </p>

    <pre><code>fputc('A', fp);

char ch = fgetc(fp);</code></pre>


    <h3>8. Appending Data</h3>

    <p>
      The <strong>a</strong> mode is used to add new data at the end
      of an existing file without removing its previous content.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    FILE *fp = fopen("data.txt", "a");

    if (fp == NULL)
        return 1;

    fprintf(fp, "\\nNew data added.");

    fclose(fp);

    return 0;
}</code></pre>


    <h3>9. Closing a File</h3>

    <p>
      The <strong>fclose()</strong> function is used to close an
      opened file.
    </p>

    <pre><code>fclose(fp);</code></pre>

    <p>
      Closing a file ensures that buffered data is written and the
      associated resources are released.
    </p>


    <h3>10. Complete Read and Write Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    FILE *fp;
    char text[100];

    fp = fopen("student.txt", "w");

    if (fp == NULL)
    {
        printf("File could not be opened.");
        return 1;
    }

    fprintf(fp, "Name: Jitesh\\n");
    fprintf(fp, "Course: C Programming\\n");

    fclose(fp);

    fp = fopen("student.txt", "r");

    if (fp == NULL)
        return 1;

    while (fgets(text, sizeof(text), fp) != NULL)
    {
        printf("%s", text);
    }

    fclose(fp);

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Name: Jitesh
Course: C Programming</code></pre>


    <h3>11. File Handling Flow</h3>

    <div class="c-file-flow">

      <div>fopen()</div>
      <div>↓</div>
      <div>Read / Write</div>
      <div>↓</div>
      <div>fclose()</div>

    </div>


    <h3>12. Important Functions</h3>

    <table class="c-file-table">

      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>fopen()</td>
          <td>Opens a file.</td>
        </tr>

        <tr>
          <td>fclose()</td>
          <td>Closes a file.</td>
        </tr>

        <tr>
          <td>fprintf()</td>
          <td>Writes formatted data.</td>
        </tr>

        <tr>
          <td>fscanf()</td>
          <td>Reads formatted data.</td>
        </tr>

        <tr>
          <td>fputc()</td>
          <td>Writes one character.</td>
        </tr>

        <tr>
          <td>fgetc()</td>
          <td>Reads one character.</td>
        </tr>

        <tr>
          <td>fgets()</td>
          <td>Reads a line/string.</td>
        </tr>

        <tr>
          <td>fputs()</td>
          <td>Writes a string.</td>
        </tr>
      </tbody>

    </table>


    <h3>13. Important Points</h3>

    <ul>
      <li>Include <strong>stdio.h</strong> for standard file functions.</li>
      <li>Use a <strong>FILE *</strong> pointer to work with a file.</li>
      <li>Always check whether <strong>fopen()</strong> returned NULL.</li>
      <li>Use <strong>fopen()</strong> to open a file.</li>
      <li>Use <strong>fclose()</strong> to close a file.</li>
      <li>Use <strong>r</strong> for reading, <strong>w</strong> for writing, and <strong>a</strong> for appending.</li>
      <li>File handling is useful for permanent data storage.</li>
    </ul>
    `
  ],

  practice: [
    'What is file handling in C?',
    'What is a FILE pointer?',
    'What is the use of fopen()?',
    'Explain the r, w, and a file modes.',
    'What is the use of fclose()?',
    'Write a program to write data into a file.',
    'Write a program to read data from a file.',
    'Write a program to append data to a file.',
    'What is the difference between fgetc() and fgets()?',
    'What is the difference between fprintf() and fputs()?'
  ],

  code: `#include <stdio.h>

int main()
{
    FILE *fp;
    char text[100];

    fp = fopen("data.txt", "w");

    if (fp == NULL)
    {
        printf("File could not be opened.");
        return 1;
    }

    fprintf(fp, "Welcome to C File Handling!\\\\n");
    fprintf(fp, "Learning file operations.");

    fclose(fp);

    fp = fopen("data.txt", "r");

    if (fp == NULL)
        return 1;

    while (fgets(text, sizeof(text), fp) != NULL)
    {
        printf("%s", text);
    }

    fclose(fp);

    return 0;
}`
},
 {
  key: 'command-line-arguments',
  title: 'Command Line Arguments in C',

  description: 'Command line arguments allow a C program to receive input values directly when the program is executed from the command line.',

  theory: [
    `
    <h3>1. What are Command Line Arguments?</h3>

    <p>
      <strong>Command line arguments</strong> are values passed to a
      C program when it is started from the command line.
    </p>

    <p>
      They are received through the parameters of the
      <strong>main()</strong> function.
    </p>

    <div class="c-cli-visual">

      <div class="cli-command">
        <span>program.exe</span>
        <strong>Jitesh</strong>
        <strong>101</strong>
      </div>

      <div class="cli-arrow">↓</div>

      <div class="cli-main">
        <strong>main(argc, argv)</strong>
        <span>Program receives arguments</span>
      </div>

    </div>


    <h3>2. main() with Command Line Arguments</h3>

    <pre><code>int main(int argc, char *argv[])
{
    // program code
}</code></pre>


    <h3>3. argc</h3>

    <p>
      <strong>argc</strong> stands for <strong>argument count</strong>.
      It stores the number of command line arguments.
    </p>

    <p>
      The program name is included in the count.
    </p>

    <pre><code>./program Jitesh 101</code></pre>

    <p>
      Here <strong>argc = 3</strong>.
    </p>


    <h3>4. argv</h3>

    <p>
      <strong>argv</strong> stands for <strong>argument vector</strong>.
      It is an array of strings containing the command line arguments.
    </p>

    <pre><code>argv[0] → Program name
argv[1] → First argument
argv[2] → Second argument</code></pre>


    <h3>5. Simple Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

int main(int argc, char *argv[])
{
    printf("Argument count = %d\\n", argc);

    for (int i = 0; i &lt; argc; i++)
    {
        printf("argv[%d] = %s\\n", i, argv[i]);
    }

    return 0;
}</code></pre>

    <p>Example command:</p>

    <pre><code>program.exe Jitesh 101</code></pre>

    <p>Output:</p>

    <pre><code>Argument count = 3
argv[0] = program.exe
argv[1] = Jitesh
argv[2] = 101</code></pre>


    <h3>6. Passing Numbers</h3>

    <p>
      Command line arguments are received as strings. If you need a
      number, convert the string to an integer using functions such
      as <strong>atoi()</strong>.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main(int argc, char *argv[])
{
    if (argc &lt; 3)
    {
        printf("Please provide two numbers.");
        return 1;
    }

    int a = atoi(argv[1]);
    int b = atoi(argv[2]);

    printf("Sum = %d", a + b);

    return 0;
}</code></pre>

    <p>Example command:</p>

    <pre><code>program.exe 10 20</code></pre>

    <p>Output:</p>

    <pre><code>Sum = 30</code></pre>


    <h3>7. Command Line Arguments Flow</h3>

    <div class="c-cli-flow">

      <div>Command</div>
      <div>↓</div>
      <div>argc / argv</div>
      <div>↓</div>
      <div>C Program</div>
      <div>↓</div>
      <div>Output</div>

    </div>


    <h3>8. Important Points</h3>

    <ul>
      <li><strong>argc</strong> stores the number of arguments.</li>
      <li><strong>argv</strong> stores the arguments as strings.</li>
      <li><strong>argv[0]</strong> usually contains the program name.</li>
      <li>Arguments are supplied when the program is executed.</li>
      <li>Command line arguments are useful for passing input without interactive prompts.</li>
      <li>Numeric arguments must be converted from strings before numeric calculations.</li>
    </ul>
    `
  ],

  practice: [
    'What are command line arguments in C?',
    'What does argc stand for?',
    'What does argv stand for?',
    'What is stored in argv[0]?',
    'Write a program to display all command line arguments.',
    'Write a program to add two numbers using command line arguments.',
    'Why do numeric command line arguments need conversion?',
    'What is the purpose of atoi()?'
  ],

  code: `#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    if (argc < 3)
    {
        printf("Usage: program number1 number2");
        return 1;
    }

    int a = atoi(argv[1]);
    int b = atoi(argv[2]);

    printf("First Number  = %d\\\\n", a);
    printf("Second Number = %d\\\\n", b);
    printf("Sum           = %d", a + b);

    return 0;
}`
} ,
  {
  key: 'preprocessor',
  title: 'Preprocessor in C',

  description: 'The C preprocessor processes source code before compilation and handles directives such as #include, #define, #if, and #ifdef.',

  theory: [
    `
    <h3>1. What is a Preprocessor?</h3>

    <p>
      The <strong>preprocessor</strong> is a part of the C compilation
      process that processes the source code before the actual
      compilation takes place.
    </p>

    <div class="c-preprocessor-visual">

      <div class="pre-box">
        <strong>C Source Code</strong>
        <span>program.c</span>
      </div>

      <div class="pre-arrow">→</div>

      <div class="pre-box active">
        <strong>Preprocessor</strong>
        <span>Processes # directives</span>
      </div>

      <div class="pre-arrow">→</div>

      <div class="pre-box">
        <strong>Compiler</strong>
        <span>Creates object code</span>
      </div>

    </div>


    <h3>2. Preprocessor Directives</h3>

    <p>
      Preprocessor instructions begin with the <strong>#</strong>
      symbol and do not normally end with a semicolon.
    </p>

    <table class="c-preprocessor-table">

      <thead>
        <tr>
          <th>Directive</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>#include</td>
          <td>Includes the contents of a header file.</td>
        </tr>

        <tr>
          <td>#define</td>
          <td>Defines a macro.</td>
        </tr>

        <tr>
          <td>#undef</td>
          <td>Removes a previously defined macro.</td>
        </tr>

        <tr>
          <td>#if</td>
          <td>Starts conditional compilation.</td>
        </tr>

        <tr>
          <td>#ifdef</td>
          <td>Checks whether a macro is defined.</td>
        </tr>

        <tr>
          <td>#ifndef</td>
          <td>Checks whether a macro is not defined.</td>
        </tr>

        <tr>
          <td>#else</td>
          <td>Provides an alternative conditional block.</td>
        </tr>

        <tr>
          <td>#elif</td>
          <td>Provides another conditional condition.</td>
        </tr>

        <tr>
          <td>#endif</td>
          <td>Ends a conditional compilation block.</td>
        </tr>
      </tbody>

    </table>


    <h3>3. #include</h3>

    <p>
      <strong>#include</strong> is used to include the contents of
      another file, commonly a header file.
    </p>

    <pre><code>#include &lt;stdio.h&gt;</code></pre>

    <p>
      Header files provide declarations for library functions such as
      <strong>printf()</strong> and <strong>scanf()</strong>.
    </p>


    <h3>4. #define</h3>

    <p>
      <strong>#define</strong> creates a macro that the preprocessor
      can substitute into the source code.
    </p>

    <pre><code>#define PI 3.14159

int main()
{
    printf("%f", PI);

    return 0;
}</code></pre>


    <h3>5. Macro with Arguments</h3>

    <p>
      A function-like macro can accept arguments.
    </p>

    <pre><code>#define SQUARE(x) ((x) * (x))

int result = SQUARE(5);</code></pre>

    <p>
      The extra parentheses help avoid unexpected results when the
      macro is used with expressions.
    </p>


    <h3>6. #undef</h3>

    <p>
      <strong>#undef</strong> removes a macro definition.
    </p>

    <pre><code>#define SIZE 100

#undef SIZE</code></pre>


    <h3>7. Conditional Compilation</h3>

    <p>
      Conditional compilation allows parts of a program to be included
      or excluded depending on preprocessor conditions.
    </p>

    <pre><code>#define DEBUG

#ifdef DEBUG
    printf("Debug mode is enabled.");
#endif</code></pre>


    <h3>8. #ifndef</h3>

    <p>
      <strong>#ifndef</strong> checks whether a macro has not been
      defined. It is commonly used in header guards.
    </p>

    <pre><code>#ifndef MY_HEADER_H
#define MY_HEADER_H

/* Header content */

#endif</code></pre>


    <h3>9. #if, #elif and #else</h3>

    <pre><code>#define VERSION 2

#if VERSION == 1
    printf("Version 1");
#elif VERSION == 2
    printf("Version 2");
#else
    printf("Other version");
#endif</code></pre>


    <h3>10. Preprocessor Flow</h3>

    <div class="c-preprocessor-flow">

      <div>Source Code</div>
      <div>↓</div>
      <div>Preprocessor</div>
      <div>↓</div>
      <div>Expanded Source</div>
      <div>↓</div>
      <div>Compiler</div>
      <div>↓</div>
      <div>Program</div>

    </div>


    <h3>11. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;

#define PI 3.14159
#define SQUARE(x) ((x) * (x))

int main()
{
    int n = 5;

    printf("PI = %.2f\\n", PI);
    printf("Square = %d", SQUARE(n));

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>PI = 3.14
Square = 25</code></pre>


    <h3>12. Important Points</h3>

    <ul>
      <li>The preprocessor works before the compiler.</li>
      <li>Preprocessor directives begin with <strong>#</strong>.</li>
      <li><strong>#include</strong> includes files.</li>
      <li><strong>#define</strong> creates macros.</li>
      <li><strong>#ifdef</strong> and <strong>#ifndef</strong> support conditional compilation.</li>
      <li>Preprocessor directives normally do not use a semicolon.</li>
      <li>Header guards commonly use <strong>#ifndef</strong>, <strong>#define</strong>, and <strong>#endif</strong>.</li>
    </ul>
    `
  ],

  practice: [
    'What is a preprocessor in C?',
    'What is a preprocessor directive?',
    'What is the use of #include?',
    'What is the use of #define?',
    'What is a macro?',
    'Explain conditional compilation.',
    'What is the difference between #ifdef and #ifndef?',
    'What is the use of #undef?',
    'Write a program using a macro with arguments.',
    'What are header guards?'
  ],

  code: `#include <stdio.h>

#define PI 3.14159
#define SQUARE(x) ((x) * (x))

int main()
{
    int n = 5;

    printf("PI = %.2f\\\\n", PI);
    printf("Square = %d", SQUARE(n));

    return 0;
}`
},
  {
  key: 'header-files',
  title: 'Header Files in C',

  description: 'Header files in C contain declarations, macros, constants, and other reusable definitions that can be included in C programs.',

  theory: [
    `
    <h3>1. What is a Header File?</h3>

    <p>
      A <strong>header file</strong> is a file with a <strong>.h</strong>
      extension that contains declarations, macros, constants,
      structures, and other definitions that can be shared between
      C source files.
    </p>

    <div class="c-header-visual">

      <div class="header-box">
        <strong>main.c</strong>
        <span>C Program</span>
      </div>

      <div class="header-arrow">→</div>

      <div class="header-box highlight">
        <strong>#include</strong>
        <span>Header File</span>
      </div>

      <div class="header-arrow">→</div>

      <div class="header-box">
        <strong>stdio.h</strong>
        <span>Declarations</span>
      </div>

    </div>


    <h3>2. Types of Header Files</h3>

    <p>Header files are mainly divided into two types:</p>

    <ul>
      <li><strong>Standard Header Files</strong></li>
      <li><strong>User-Defined Header Files</strong></li>
    </ul>


    <h3>3. Standard Header Files</h3>

    <p>
      Standard header files are provided by the C standard library
      implementation.
    </p>

    <table class="c-header-table">

      <thead>
        <tr>
          <th>Header File</th>
          <th>Common Use</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>stdio.h</td>
          <td>Input/output functions such as printf() and scanf().</td>
        </tr>

        <tr>
          <td>stdlib.h</td>
          <td>Memory management, conversion, and general utilities.</td>
        </tr>

        <tr>
          <td>string.h</td>
          <td>String handling functions.</td>
        </tr>

        <tr>
          <td>math.h</td>
          <td>Mathematical functions.</td>
        </tr>

        <tr>
          <td>ctype.h</td>
          <td>Character testing and conversion functions.</td>
        </tr>

        <tr>
          <td>time.h</td>
          <td>Date and time related functions.</td>
        </tr>

        <tr>
          <td>stdbool.h</td>
          <td>Boolean type and values in C.</td>
        </tr>
      </tbody>

    </table>


    <h3>4. #include</h3>

    <p>
      The <strong>#include</strong> preprocessor directive is used to
      include a header file in a C program.
    </p>

    <pre><code>#include &lt;stdio.h&gt;</code></pre>

    <p>
      Angle brackets are normally used for system or standard headers.
    </p>


    <h3>5. User-Defined Header Files</h3>

    <p>
      Programmers can create their own header files to organize and
      reuse declarations and definitions.
    </p>

    <p>Example file: <strong>myheader.h</strong></p>

    <pre><code>#ifndef MYHEADER_H
#define MYHEADER_H

int add(int a, int b);

#endif</code></pre>

    <p>Then include it in another C file:</p>

    <pre><code>#include "myheader.h"</code></pre>

    <p>
      Double quotes are commonly used for user-created headers.
    </p>


    <h3>6. Example with User-Defined Header</h3>

    <p><strong>myheader.h</strong></p>

    <pre><code>#ifndef MYHEADER_H
#define MYHEADER_H

int add(int a, int b);

#endif</code></pre>

    <p><strong>myheader.c</strong></p>

    <pre><code>#include "myheader.h"

int add(int a, int b)
{
    return a + b;
}</code></pre>

    <p><strong>main.c</strong></p>

    <pre><code>#include &lt;stdio.h&gt;
#include "myheader.h"

int main()
{
    printf("Sum = %d", add(10, 20));

    return 0;
}</code></pre>

    <p>Output:</p>

    <pre><code>Sum = 30</code></pre>


    <h3>7. Header Guards</h3>

    <p>
      A header guard prevents the same header file from being included
      more than once in a translation unit.
    </p>

    <pre><code>#ifndef MYHEADER_H
#define MYHEADER_H

/* Header declarations */

#endif</code></pre>


    <h3>8. Commonly Used Header Files</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;string.h&gt;
#include &lt;math.h&gt;
#include &lt;ctype.h&gt;
#include &lt;time.h&gt;</code></pre>


    <h3>9. Header File Structure</h3>

    <div class="c-header-flow">

      <div>Header File</div>
      <div>↓</div>
      <div>Declarations</div>
      <div>↓</div>
      <div>#include</div>
      <div>↓</div>
      <div>C Source File</div>

    </div>


    <h3>10. Important Points</h3>

    <ul>
      <li>Header files normally use the <strong>.h</strong> extension.</li>
      <li>They help organize reusable declarations and definitions.</li>
      <li><strong>#include</strong> is used to include a header file.</li>
      <li>Standard headers are commonly written using <strong>&lt; &gt;</strong>.</li>
      <li>User-defined headers are commonly written using <strong>" "</strong>.</li>
      <li>Header guards help prevent repeated inclusion.</li>
      <li>Common headers include <strong>stdio.h</strong>, <strong>stdlib.h</strong>, <strong>string.h</strong>, and <strong>math.h</strong>.</li>
    </ul>
    `
  ],

  practice: [
    'What is a header file in C?',
    'What is the purpose of #include?',
    'Name any five standard header files.',
    'What is the use of stdio.h?',
    'What is the difference between standard and user-defined header files?',
    'How do you include a user-defined header file?',
    'What are header guards?',
    'Create a user-defined header file containing an add() function.',
    'Write a C program using your own header file.'
  ],

  code: `#include <stdio.h>
#include <math.h>

int main()
{
    double number = 25.0;

    printf("Square root = %.2f\\\\n", sqrt(number));
    printf("Hello from C!");

    return 0;
}`
},
  {
  key: 'error-handling',
  title: 'Error Handling in C',

  description: 'Error handling in C is the process of detecting, reporting, and responding to errors that may occur during program execution.',

  theory: [
    `
    <h3>1. What is Error Handling?</h3>

    <p>
      <strong>Error handling</strong> means detecting errors in a
      program and taking appropriate action instead of allowing the
      program to behave unexpectedly.
    </p>

    <div class="c-error-visual">

      <div class="error-box">
        <strong>Program</strong>
        <span>Operation</span>
      </div>

      <div class="error-arrow">→</div>

      <div class="error-box">
        <strong>Error Check</strong>
        <span>Success / Failure</span>
      </div>

      <div class="error-arrow">→</div>

      <div class="error-box">
        <strong>Action</strong>
        <span>Handle Error</span>
      </div>

    </div>


    <h3>2. Common Types of Errors</h3>

    <table class="c-error-table">

      <thead>
        <tr>
          <th>Error Type</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Syntax Error</td>
          <td>Violation of C language syntax.</td>
        </tr>

        <tr>
          <td>Compile-time Error</td>
          <td>Error detected while compiling the program.</td>
        </tr>

        <tr>
          <td>Runtime Error</td>
          <td>Error that occurs while the program is running.</td>
        </tr>

        <tr>
          <td>Logical Error</td>
          <td>Program runs but produces an incorrect result.</td>
        </tr>
      </tbody>

    </table>


    <h3>3. Checking Return Values</h3>

    <p>
      Many C library functions return a value that indicates whether
      an operation succeeded or failed.
    </p>

    <pre><code>FILE *fp = fopen("data.txt", "r");

if (fp == NULL)
{
    printf("File could not be opened.");
    return 1;
}</code></pre>


    <h3>4. errno</h3>

    <p>
      The <strong>errno</strong> macro can provide an error code set by
      certain library functions when an error occurs.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;errno.h&gt;

int main()
{
    FILE *fp = fopen("missing.txt", "r");

    if (fp == NULL)
    {
        printf("Error code: %d", errno);
    }

    return 0;
}</code></pre>


    <h3>5. perror()</h3>

    <p>
      The <strong>perror()</strong> function prints a message describing
      the most recent error associated with certain library operations.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    FILE *fp = fopen("missing.txt", "r");

    if (fp == NULL)
    {
        perror("fopen");
        return 1;
    }

    fclose(fp);

    return 0;
}</code></pre>


    <h3>6. Handling Division by Zero</h3>

    <p>
      Before performing division, check that the denominator is not zero.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    int a = 10;
    int b = 0;

    if (b == 0)
    {
        printf("Error: Division by zero is not allowed.");
        return 1;
    }

    printf("Result = %d", a / b);

    return 0;
}</code></pre>


    <h3>7. Input Validation</h3>

    <p>
      Programs should validate user input before using it.
    </p>

    <pre><code>#include &lt;stdio.h&gt;

int main()
{
    int age;

    printf("Enter age: ");

    if (scanf("%d", &amp;age) != 1)
    {
        printf("Invalid input.");
        return 1;
    }

    if (age &lt; 0)
    {
        printf("Age cannot be negative.");
        return 1;
    }

    printf("Age = %d", age);

    return 0;
}</code></pre>


    <h3>8. exit()</h3>

    <p>
      The <strong>exit()</strong> function can terminate a program
      immediately with a status code.
    </p>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main()
{
    FILE *fp = fopen("data.txt", "r");

    if (fp == NULL)
    {
        perror("File error");
        exit(EXIT_FAILURE);
    }

    fclose(fp);

    return EXIT_SUCCESS;
}</code></pre>


    <h3>9. Error Handling Flow</h3>

    <div class="c-error-flow">

      <div>Perform Operation</div>
      <div>↓</div>
      <div>Check Result</div>
      <div>↓</div>
      <div>Error?</div>
      <div>↓</div>
      <div>Handle Error</div>

    </div>


    <h3>10. Complete Example</h3>

    <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main()
{
    FILE *fp = fopen("student.txt", "r");

    if (fp == NULL)
    {
        perror("Unable to open file");
        exit(EXIT_FAILURE);
    }

    printf("File opened successfully.");

    fclose(fp);

    return EXIT_SUCCESS;
}</code></pre>


    <h3>11. Important Points</h3>

    <ul>
      <li>C does not have built-in exceptions like some higher-level languages.</li>
      <li>Return values are commonly used to detect errors.</li>
      <li><strong>errno</strong> can store an error code for certain library operations.</li>
      <li><strong>perror()</strong> prints a descriptive error message.</li>
      <li><strong>exit()</strong> can terminate the program when recovery is not possible.</li>
      <li>Always validate important input before using it.</li>
      <li>Check file pointers and other function return values for failure.</li>
    </ul>
    `
  ],

  practice: [
    'What is error handling in C?',
    'What are the common types of errors in C?',
    'What is the purpose of checking return values?',
    'What is errno?',
    'What is the use of perror()?',
    'How can division by zero be prevented?',
    'What is input validation?',
    'What is the use of exit()?',
    'Write a program that handles a file opening error.',
    'Write a program that validates user input.'
  ],

  code: `#include <stdio.h>
#include <stdlib.h>

int main()
{
    FILE *fp = fopen("data.txt", "r");

    if (fp == NULL)
    {
        perror("File error");
        return EXIT_FAILURE;
    }

    printf("File opened successfully.");

    fclose(fp);

    return EXIT_SUCCESS;
}`
},
  {
    key: 'linked-list',
    title: 'Linked List',
    description: 'A linked list is a dynamic data structure made of nodes connected by pointers.',
    theory: [
      'Each node stores data and a pointer to the next node.',
      'Linked lists can grow and shrink at runtime.'
    ],
    practice: [
      'Understand the node structure.',
      'Use pointers to connect nodes.'
    ],
    code: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nint main() {\n    struct Node *head = malloc(sizeof(struct Node));\n    head->data = 1;\n    head->next = NULL;\n    printf("First node: %d\\n", head->data);\n    free(head);\n    return 0;\n}'
  },
  {
    key: 'stack',
    title: 'Stack',
    description: 'A stack is a last-in, first-out data structure.',
    theory: [
      'Push adds an item on top, pop removes the top item.',
      'Stacks are useful for function calls and undo operations.'
    ],
    practice: [
      'Understand push and pop behavior.',
      'Use an array-based stack example.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int stack[5] = {1, 2, 3};\n    int top = 2;\n    printf("Top item: %d\\n", stack[top]);\n    return 0;\n}'
  },
  {
    key: 'queue',
    title: 'Queue',
    description: 'A queue is a first-in, first-out data structure.',
    theory: [
      'Enqueue adds to the rear, dequeue removes from the front.',
      'Queues are used for scheduling and buffering.'
    ],
    practice: [
      'Use an array to simulate a queue.',
      'Track the front and rear positions.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int queue[5] = {1, 2, 3};\n    int front = 0;\n    printf("Dequeued: %d\\n", queue[front]);\n    return 0;\n}'
  },
  {
    key: 'trees',
    title: 'Trees',
    description: 'Trees are hierarchical data structures with nodes and branches.',
    theory: [
      'Each node can have child nodes.',
      'Binary trees are common for searching and sorting.'
    ],
    practice: [
      'Read about tree nodes and branches.',
      'Visualize tree relationships.'
    ],
    code: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\n\nint main() {\n    struct Node *root = malloc(sizeof(struct Node));\n    root->data = 10;\n    root->left = root->right = NULL;\n    printf("Root: %d\\n", root->data);\n    free(root);\n    return 0;\n}'
  },
  {
    key: 'searching-algorithms',
    title: 'Searching Algorithms',
    description: 'Searching algorithms find values in lists using linear or binary search.',
    theory: [
      'Linear search checks each item until it finds a match.',
      'Binary search works on sorted arrays and is faster.'
    ],
    practice: [
      'Compare linear and binary search approaches.',
      'Run a small array search example.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int values[] = {2, 4, 6, 8, 10};\n    int target = 6;\n    for (int i = 0; i < 5; i++) {\n        if (values[i] == target) {\n            printf("Found at index %d\\n", i);\n            break;\n        }\n    }\n    return 0;\n}'
  },
  {
    key: 'sorting-algorithms',
    title: 'Sorting Algorithms',
    description: 'Sorting algorithms arrange values in order using bubble, selection, insertion, merge, or quick sort.',
    theory: [
      'Bubble sort repeatedly swaps adjacent items.',
      'Quick sort uses divide and conquer for faster sorting.'
    ],
    practice: [
      'Run a bubble sort example.',
      'Observe how sorted output changes.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {5, 2, 4, 1, 3};\n    for (int i = 0; i < 5; i++) {\n        for (int j = 0; j < 4; j++) {\n            if (arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}'
  },
  {
    key: 'time-complexity',
    title: 'Time Complexity Basics',
    description: 'Time complexity describes how algorithm performance changes with input size.',
    theory: [
      'O(n) means runtime grows linearly with input size.',
      'O(n^2) means runtime grows quadratically.'
    ],
    practice: [
      'Compare simple loop complexity with nested loops.',
      'Understand why faster algorithms matter.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int n = 5;\n    for (int i = 0; i < n; i++) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}'
  },
  {
    key: 'modular-programming',
    title: 'Modular Programming',
    description: 'Modular programming separates code into reusable functions and files.',
    theory: [
      'Use functions and header files to keep code organized.',
      'Modules improve readability and reuse.'
    ],
    practice: [
      'Group related code into functions.',
      'Use header files for declarations.'
    ],
    code: '#include <stdio.h>\n\nvoid greet() {\n    printf("Hello modular program!\\n");\n}\n\nint main() {\n    greet();\n    return 0;\n}'
  },
  {
    key: 'debugging',
    title: 'Debugging',
    description: 'Debugging helps find and fix errors in code.',
    theory: [
      'Use print statements to inspect values.',
      'Read compiler messages carefully.'
    ],
    practice: [
      'Test small code parts separately.',
      'Check for syntax and logic errors.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int x = 5;\n    printf("x = %d\\n", x);\n    return 0;\n}'
  },
  {
    key: 'compilation-process',
    title: 'Compilation Process',
    description: 'Compilation translates C source code into executable machine code.',
    theory: [
      'The compiler preprocesses, compiles, assembles, and links code.',
      'Errors can occur during each stage.'
    ],
    practice: [
      'Understand compiler error messages.',
      'Fix syntax errors and try again.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    printf("Compile and run C code.\\n");\n    return 0;\n}'
  },
  {
    key: 'memory-management',
    title: 'Memory Management',
    description: 'Memory management means allocating, using, and freeing memory safely.',
    theory: [
      'Use dynamic allocation when data size is not known at compile time.',
      'Free memory to avoid leaks.'
    ],
    practice: [
      'Allocate memory and check for allocation failure.',
      'Free memory after use.'
    ],
    code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *numbers = malloc(2 * sizeof(int));\n    if (!numbers) return 1;\n    numbers[0] = 1;\n    numbers[1] = 2;\n    free(numbers);\n    return 0;\n}'
  },
  {
    key: 'standard-library',
    title: 'Standard C Library',
    description: 'The standard C library provides functions for IO, strings, memory, math, and more.',
    theory: [
      'Common headers include stdio.h, stdlib.h, string.h, and math.h.',
      'These functions save time and reduce errors.'
    ],
    practice: [
      'Use library functions like printf and malloc.',
      'Include headers for the functions you use.'
    ],
    code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    printf("Standard library makes C powerful.\\n");\n    return 0;\n}'
  }
];

const topicData = Object.fromEntries(topics.map((topic) => [topic.key, topic]));

const renderTopicButtons = () => {
  if (!topicListContainer) return;
  topicListContainer.innerHTML = topics
    .map(
      (topic) => `<button type="button" class="topic-button ${topic.key === activeTopicKey ? 'active' : ''}" data-topic="${topic.key}">${topic.title}</button>`
    )
    .join('');
  topicButtons = Array.from(topicListContainer.querySelectorAll('.topic-button'));
};

const setActiveTopicButton = (key) => {
  topicButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.topic === key);
  });
};

const formatList = (items) => items.map((item) => `<p>${item}</p>`).join('');

const loadTopic = (key) => {
  const topic = topicData[key] || topicData.introduction;
  activeTopicKey = topic.key;
  topicTitle.textContent = topic.title;
  topicDescription.textContent = topic.description;
  topicTheory.innerHTML = `${formatList(topic.theory)}<div class="lesson-example"><h4>Example</h4><pre>${topic.code}</pre></div>`;
  topicPractice.innerHTML = formatList(topic.practice);
  if (codeEditor) {
    codeEditor.value = topic.code;
  }
  const topicIndex = topics.findIndex((item) => item.key === topic.key);
  pageTitle.textContent = `${topicIndex >= 0 ? topicIndex + 1 : 1}. ${topic.title}`;
  setActiveTopicButton(topic.key);
  updateProgress();
};

const showOutput = (message) => {
  if (codeOutput) {
    codeOutput.textContent = message;
  }
};

const resetCode = () => {
  const topic = topicData[activeTopicKey] || topicData.introduction;
  if (codeEditor) {
    codeEditor.value = topic.code;
  }
  showOutput('Example code has been reset. Make edits and run again.');
};

const runCode = async () => {
  if (!codeEditor) return;
  const source = codeEditor.value.trim();
  if (!source) {
    showOutput('Please enter C code in the editor before running.');
    return;
  }

  showOutput('Compiling and running... Please wait.');
  document.querySelector('.output-panel')?.classList.add('running');

  try {
    const response = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language_id: 50, source_code: source, stdin: '' })
    });

    if (!response.ok) {
      throw new Error(`Compiler service returned status ${response.status}`);
    }

    const data = await response.json();
    const output = [data.stdout, data.stderr, data.compile_output, data.message].filter(Boolean).join('\n').trim();
    showOutput(output || 'Program finished with no output.');
  } catch (error) {
    console.error('Run error:', error);
    showOutput('Unable to run code. Check your internet connection and try again.');
  } finally {
    document.querySelector('.output-panel')?.classList.remove('running');
  }
};

const getCurrentTopicIndex = () => topics.findIndex((topic) => topic.key === activeTopicKey);

const progressNote = document.getElementById('progress-note');

const updateProgress = () => {
  const currentIndex = getCurrentTopicIndex();
  const completedCount = currentIndex >= 0 ? currentIndex + 1 : 0;
  const currentTopic = topics[currentIndex] || topics[0];
  const nextTopic = topics[currentIndex + 1] || currentTopic;

  if (lessonCountLabel) {
    lessonCountLabel.textContent = `${topics.length} lessons`;
  }
  if (progressFill) {
    progressFill.style.width = `${(completedCount / topics.length) * 100}%`;
  }
  if (progressText) {
    progressText.textContent = `${completedCount} of ${topics.length} completed`;
  }
  if (progressNote) {
    progressNote.textContent = `Current topic: ${currentTopic.title}. Next: ${nextTopic.title}.`;
  }
};

const getTopicByIndex = (index) => {
  if (index < 0) index = 0;
  if (index >= topics.length) index = topics.length - 1;
  return topics[index];
};

const goToTopic = (index) => {
  const topic = getTopicByIndex(index);
  loadTopic(topic.key);
};

const openAuthModal = () => {
  authModal?.classList.add('open');
  authModal?.setAttribute('aria-hidden', 'false');
  authEmail?.focus();
};

const closeAuthModal = () => {
  authModal?.classList.remove('open');
  authModal?.setAttribute('aria-hidden', 'true');
  authForm?.reset();
};

const updateAuthButton = () => {
  const email = localStorage.getItem('csLearnUser');
  if (authButton) {
    authButton.textContent = email ? 'Sign Out' : 'Sign In';
  }
};

const showAuthStatus = (message) => {
  if (!authStatus) return;
  authStatus.textContent = message;
  authStatus.style.display = 'block';
};

const setThemeIcon = () => {
  const icon = themeToggle?.querySelector('i');
  const isLight = document.body.classList.contains('light-theme');
  if (icon) {
    icon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
  themeToggle?.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
};

const initializeTheme = () => {
  let savedTheme = localStorage.getItem('theme');
  const legacyTheme = localStorage.getItem('cTheme');

  if (!savedTheme && legacyTheme) {
    savedTheme = legacyTheme;
    localStorage.setItem('theme', legacyTheme);
  }

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
  setThemeIcon();
};

const toggleTheme = () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  setThemeIcon();
};

const initializePage = () => {
  renderTopicButtons();
  topicButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const topicKey = button.dataset.topic;
      if (topicKey) {
        loadTopic(topicKey);
        button.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  themeToggle?.addEventListener('click', toggleTheme);

  authButton?.addEventListener('click', () => {
    if (localStorage.getItem('csLearnUser')) {
      localStorage.removeItem('csLearnUser');
      updateAuthButton();
      showAuthStatus('You have been signed out.');
    } else {
      openAuthModal();
    }
  });

  authClose?.addEventListener('click', closeAuthModal);

  document.getElementById('prev-topic-btn')?.addEventListener('click', () => {
    const currentIndex = getCurrentTopicIndex();
    if (currentIndex > 0) goToTopic(currentIndex - 1);
  });

  document.getElementById('next-topic-btn')?.addEventListener('click', () => {
    const currentIndex = getCurrentTopicIndex();
    if (currentIndex < topics.length - 1) goToTopic(currentIndex + 1);
  });
  authModal?.addEventListener('click', (event) => {
    if (event.target === authModal) {
      closeAuthModal();
    }
  });

  authForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = authEmail?.value.trim();
    const password = authPassword?.value.trim();
    if (!email || !password) {
      showAuthStatus('Please enter both email and password.');
      return;
    }
    localStorage.setItem('csLearnUser', email);
    updateAuthButton();
    showAuthStatus(`Welcome back, ${email}!`);
    closeAuthModal();
  });

  copyCodeBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codeEditor.value);
      showOutput('Code copied to clipboard.');
    } catch (error) {
      showOutput('Unable to copy code in this browser.');
    }
  });

  resetCodeBtn?.addEventListener('click', resetCode);
  runCodeBtn?.addEventListener('click', runCode);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && authModal?.classList.contains('open')) {
      closeAuthModal();
    }
  });

  initializeTheme();
  updateProgress();
  updateAuthButton();
  loadTopic(activeTopicKey);
};

initializePage();
