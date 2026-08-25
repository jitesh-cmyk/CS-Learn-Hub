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
const progressNote = document.getElementById('progress-note');
let topicButtons = [];
let activeTopicKey = 'introduction';

const topics = [
  {
    key: 'introduction',
    title: 'Introduction to Python',
    description: 'Python is a high-level, general-purpose, interpreted programming language. It is designed with a simple and readable syntax, making it easy to learn and use. Python is widely used for web development, software development, data analysis, artificial intelligence, machine learning, automation, and cybersecurity.',
    theory: [
      'Python was created by Guido van Rossum and was first released in 1991. It is an open-source programming language, which means anyone can use and modify it according to the license terms.',
      'Python was created by Guido van Rossum and was first released in 1991. It is an open-source programming language, which means anyone can use and modify it according to the license terms.',
      'Python is an interpreted language, meaning that Python programs are generally executed by the Python interpreter rather than being directly compiled into machine code beforehand. Python is also dynamically typed, so the programmer does not need to specify the data type of a variable when creating it.',
      'Because of its simplicity, extensive libraries, and wide range of applications, Python has become one of the most popular programming languages in the world.'
    ],
    practice: [
      'Run the sample Python code to see output instantly.',
      'Change the message and rerun the program.'
    ],
    code: 'print("Welcome to Python programming!")'
  },
  {
    key: 'history',
    title: 'History of Python',
    description: 'Python was created by Guido van Rossum and first released in 1991.',
    theory: [
      'The history of Python begins in December 1989, when Guido van Rossum started working on Python at CWI (Centrum Wiskunde & Informatica) in the Netherlands. Python was developed as a successor to the ABC programming language. The main goal was to create a language that was easy to read, easy to write, and powerful enough for practical programming.',
      'The name Python was inspired by the British comedy group Monty Python, rather than the snake.',
      'The first public version, Python 0.9.0, was released in February 1991. It already included important features such as functions, classes, exception handling, and core data types.'
    ],
    practice: [
      'Explore why Python became so popular.',
      'Think about how Python syntax differs from C.'
    ],
    code: 'print("Python was released in 1991.")'
  },
  {
    key: 'features',
    title: 'Python Features',
    description: 'Python is one of the most popular programming languages because of its simple syntax, powerful features, and wide range of applications. It provides many useful features that make programming easier and more efficient.',
    theory: [
      'The main features of Python are as follows:',
      '1. Easy to Learn and Use:-Python has a simple syntax that is easy to read and write, making it beginner-friendly.',
      '2. High-Level Language:-Python is a high-level programming language, which means it abstracts away many of the complex details of the computer\'s hardware and operating system.',
      '3. Interpreted Language:-Python is an interpreted language, which means that the code is executed line by line, making it easier to debug and test.',
      '4. Object-Oriented:- Python Support object- oriented programming concept such as classes object, inheritance,and polymorphism.',
      '5. Portable and Cross-Platform:- python programs can run on different operating systems such as Windows, Linux, and macOS without requiring any changes.',
      '6. Open Source:- python is free to use, and its source code is available for modification and distribution.',
      '7. Dynamically Typed:- In Python, there is no need to declare the data type of a variable explicitly.',
      '8. Extensible and Embeddable:- Python can be integrated with other programming languages like C and C++.',
      '9. Supports Multiple Programming Paradigms:- Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming.',
      'It has built-in support for lists, dictionaries, and functions.'
    ],
    practice: [
      'List some features that make Python beginner-friendly.',
      'Try using Python for small utility scripts.'
    ],
    code: 'print("Python is powerful and easy to learn.")'
  },
  {
    key: 'syntax',
    title: 'Python Syntax',
    description: 'Python syntax refers to the set of rules used to write Python programs. Python has a simple and readable syntax, which makes it easier to learn and understand. Unlike many other programming languages, Python uses indentation to define blocks of code.',
    theory: [
      'A Python program is written using statements, variables, functions, operators, and other programming elements. Python does not generally require semicolons (;) at the end of statements.',
      'Indentation is required for if statements, loops, and functions.',
      'Important Rules of Python Syntax:',
      '1. Indentation :- indentaton is used to define a block of code. Normally , four spaces are used',
      '2. Case-Sensitive :- python is case-sensitive. Name , name , and NAME are treated as different identifiers.',
      '3. Comments :- The # sybol is used to write a single-line comment.',
      '4. Variables :- Variables are used to store data values. Python does not require explicit declaration of variable types.',
      '5. Statements :- Each instruction is normally written on a separate line.',
      '6. Colon(:) :- A colon is used after statements such as if , for , while , fuctions, and classes before an indented block.',

    ],
    practice: [
      'Write a small if statement in the editor.',
      'Observe how indentation controls the flow.'
    ],
    code: `x = 5
if x > 0:
    print("x is positive")`
  },
  {
    key: 'variables',
    title: 'Variables',
    description: 'A variable in Python is a name used to store a value in memory. The value of a variable can be changed during program execution. Python does not require the programmer to declare the data type of a variable explicitly.',
    theory: [
      'In Python, a variable is created when a value is assigned to it using the assignment operator (=).',
      'Rule of Naming Variables:',
      '1. A variable name can contain letters, numbers, and underscore ( _ )',
      '2. A variable name cannot start with a number.',
      '3. Variable names are case-sensitive.',
      '4. Avariable name cannot be a Python Keywords such as if , for , class, or while.',
     '5. Spaces are not allowed in variable names. Use an underscore instead.',
      
    ],
    practice: [
      'Create variables and print their values.',
      'Change the type of a variable and rerun the code.'
    ],
    code: `name = "Alice"
age = 25
_total = 500
print(f"Name: {name}, Age: {age}", _total : {total})`
  },
 {
  key: 'data-types',
  title: 'Data Types',
  description: 'Python has built-in data types such as int, float, str, list, tuple, set, dict, bool, and NoneType.',

  theory: [
    'Python is a dynamically typed language, so we do not need to specify the data type while creating a variable. Python automatically determines the type based on the value assigned to the variable.',

    `
    <h3>Common Python Data Types</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>int</td>
          <td>Stores whole numbers</td>
          <td>age = 20</td>
        </tr>

        <tr>
          <td>float</td>
          <td>Stores decimal numbers</td>
          <td>price = 19.99</td>
        </tr>

        <tr>
          <td>complex</td>
          <td>Stores complex numbers</td>
          <td>z = 3 + 4j</td>
        </tr>

        <tr>
          <td>str</td>
          <td>Stores text or strings</td>
          <td>name = "Python"</td>
        </tr>

        <tr>
          <td>list</td>
          <td>Stores an ordered and changeable collection</td>
          <td>marks = [80, 90, 85]</td>
        </tr>

        <tr>
          <td>tuple</td>
          <td>Stores an ordered and unchangeable collection</td>
          <td>point = (10, 20)</td>
        </tr>

        <tr>
          <td>set</td>
          <td>Stores unique values</td>
          <td>numbers = {1, 2, 3}</td>
        </tr>

        <tr>
          <td>dict</td>
          <td>Stores data in key-value pairs</td>
          <td>student = {"name": "Rahul"}</td>
        </tr>

        <tr>
          <td>bool</td>
          <td>Stores True or False</td>
          <td>is_pass = True</td>
        </tr>

        <tr>
          <td>NoneType</td>
          <td>Represents no value</td>
          <td>result = None</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create examples of different Python data types.',
    'Print the type of each value using type().'
  ],

  code: `value = 7
price = 19.99
message = "Hello"

print(type(value))
print(type(price))
print(type(message))`
},
 {
  key: 'operators',
  title: 'Operators',
  description: 'Python provides different types of operators to perform calculations, comparisons, logical operations, assignments, and other operations on values and variables.',

  theory: [
    'Operators are special symbols or keywords used to perform operations on values and variables. Python supports several types of operators.',

    `
    <h3>1. Arithmetic Operators</h3>

    <p>Arithmetic operators are used to perform mathematical calculations.</p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Name</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>+</td>
          <td>Addition</td>
          <td>10 + 3</td>
          <td>13</td>
        </tr>

        <tr>
          <td>-</td>
          <td>Subtraction</td>
          <td>10 - 3</td>
          <td>7</td>
        </tr>

        <tr>
          <td>*</td>
          <td>Multiplication</td>
          <td>10 * 3</td>
          <td>30</td>
        </tr>

        <tr>
          <td>/</td>
          <td>Division</td>
          <td>10 / 3</td>
          <td>3.333...</td>
        </tr>

        <tr>
          <td>%</td>
          <td>Modulus</td>
          <td>10 % 3</td>
          <td>1</td>
        </tr>

        <tr>
          <td>**</td>
          <td>Exponentiation</td>
          <td>2 ** 3</td>
          <td>8</td>
        </tr>

        <tr>
          <td>//</td>
          <td>Floor Division</td>
          <td>10 // 3</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>

    <h3>2. Comparison Operators</h3>

    <p>Comparison operators are used to compare two values. They return either True or False.</p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Name</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>==</td>
          <td>Equal to</td>
          <td>10 == 10</td>
          <td>True</td>
        </tr>

        <tr>
          <td>!=</td>
          <td>Not equal to</td>
          <td>10 != 5</td>
          <td>True</td>
        </tr>

        <tr>
          <td>&gt;</td>
          <td>Greater than</td>
          <td>10 &gt; 5</td>
          <td>True</td>
        </tr>

        <tr>
          <td>&lt;</td>
          <td>Less than</td>
          <td>10 &lt; 5</td>
          <td>False</td>
        </tr>

        <tr>
          <td>&gt;=</td>
          <td>Greater than or equal to</td>
          <td>10 &gt;= 10</td>
          <td>True</td>
        </tr>

        <tr>
          <td>&lt;=</td>
          <td>Less than or equal to</td>
          <td>10 &lt;= 5</td>
          <td>False</td>
        </tr>
      </tbody>
    </table>

    <h3>3. Logical Operators</h3>

    <p>Logical operators are used to combine multiple conditions.</p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>and</td>
          <td>Returns True when both conditions are True.</td>
          <td>a &gt; 5 and b &gt; 0</td>
        </tr>

        <tr>
          <td>or</td>
          <td>Returns True when at least one condition is True.</td>
          <td>a &gt; 5 or b &lt; 0</td>
        </tr>

        <tr>
          <td>not</td>
          <td>Reverses the result of a condition.</td>
          <td>not(a &gt; 5)</td>
        </tr>
      </tbody>
    </table>

    <h3>4. Assignment Operators</h3>

    <p>Assignment operators are used to assign and update values in variables.</p>

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
          <td>x = 10</td>
          <td>x = 10</td>
        </tr>

        <tr>
          <td>+=</td>
          <td>x += 5</td>
          <td>x = x + 5</td>
        </tr>

        <tr>
          <td>-=</td>
          <td>x -= 5</td>
          <td>x = x - 5</td>
        </tr>

        <tr>
          <td>*=</td>
          <td>x *= 5</td>
          <td>x = x * 5</td>
        </tr>

        <tr>
          <td>/=</td>
          <td>x /= 5</td>
          <td>x = x / 5</td>
        </tr>

        <tr>
          <td>%=</td>
          <td>x %= 5</td>
          <td>x = x % 5</td>
        </tr>

        <tr>
          <td>**=</td>
          <td>x **= 5</td>
          <td>x = x ** 5</td>
        </tr>
      </tbody>
    </table>

    <h3>5. Membership Operators</h3>

    <p>Membership operators are used to check whether a value exists in a sequence such as a string, list, tuple, or set.</p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>in</td>
          <td>Returns True if a value exists in a sequence.</td>
          <td>"a" in "Python"</td>
        </tr>

        <tr>
          <td>not in</td>
          <td>Returns True if a value does not exist in a sequence.</td>
          <td>"z" not in "Python"</td>
        </tr>
      </tbody>
    </table>

    <h3>6. Identity Operators</h3>

    <p>Identity operators are used to check whether two variables refer to the same object.</p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>is</td>
          <td>Returns True if both variables refer to the same object.</td>
        </tr>

        <tr>
          <td>is not</td>
          <td>Returns True if both variables refer to different objects.</td>
        </tr>
      </tbody>
    </table>

    <h3>7. Bitwise Operators</h3>

    <p>Bitwise operators perform operations on the binary representation of integers.</p>

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
    `
  ],

  practice: [
    'Write expressions using arithmetic and comparison operators.',
    'Try combining conditions with and, or, and not.',
    'Use assignment operators to update the value of a variable.',
    'Practice membership operators with strings and lists.'
  ],

  code: `a = 10
b = 3

print(a + b)
print(a > b)
print((a > b) and (b > 0))`
},
 {
  key: 'control-flow',
  title: 'Control Flow',

  description: 'Control flow refers to the order in which statements are executed in a Python program. It allows a program to make decisions, repeat operations, and control the execution of statements.',

  theory: [
    'Control flow statements are used to control the order in which instructions are executed in a Python program.',

    `
    <h3>1. Conditional Statements</h3>

    <p>
      Conditional statements are used to execute different blocks of code
      depending on whether a condition is True or False.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Statement</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>if</td>
          <td>Executes a block of code when the condition is True.</td>
          <td>if score &gt;= 60:</td>
        </tr>

        <tr>
          <td>elif</td>
          <td>Checks another condition when the previous condition is False.</td>
          <td>elif score &gt;= 40:</td>
        </tr>

        <tr>
          <td>else</td>
          <td>Executes a block of code when all previous conditions are False.</td>
          <td>else:</td>
        </tr>
      </tbody>
    </table>

    <h3>Example of if-elif-else</h3>

    <pre><code>score = 75

if score &gt;= 90:
    print("Excellent")
elif score &gt;= 60:
    print("Good")
else:
    print("Keep improving")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Good</code></pre>


    <h3>2. Looping Statements</h3>

    <p>
      Loops are used to execute a block of code repeatedly until a specific
      condition is satisfied.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Loop</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>for</td>
          <td>Used to iterate over a sequence such as a list, string, tuple, or range.</td>
          <td>for i in range(5):</td>
        </tr>

        <tr>
          <td>while</td>
          <td>Repeats a block of code as long as a condition is True.</td>
          <td>while count &lt; 5:</td>
        </tr>
      </tbody>
    </table>

    <h3>For Loop Example</h3>

    <pre><code>for i in range(1, 6):
    print(i)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
3
4
5</code></pre>


    <h3>While Loop Example</h3>

    <pre><code>count = 1

while count &lt;= 5:
    print(count)
    count += 1</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
3
4
5</code></pre>


    <h3>3. Control Statements</h3>

    <p>
      Control statements are used to change the normal execution of a loop.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Statement</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>break</td>
          <td>Terminates the loop immediately.</td>
        </tr>

        <tr>
          <td>continue</td>
          <td>Skips the current iteration and moves to the next iteration.</td>
        </tr>

        <tr>
          <td>pass</td>
          <td>Does nothing and is used as a placeholder for future code.</td>
        </tr>
      </tbody>
    </table>

    <h3>Example of break</h3>

    <pre><code>for i in range(1, 6):
    if i == 3:
        break
    print(i)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2</code></pre>


    <h3>Example of continue</h3>

    <pre><code>for i in range(1, 6):
    if i == 3:
        continue
    print(i)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
4
5</code></pre>
    `
  ],

  practice: [
    'Build a conditional statement using if, elif, and else.',
    'Test different values and observe the output.',
    'Create a for loop to print numbers from 1 to 10.',
    'Create a while loop and use a condition to control its execution.',
    'Practice using break and continue inside a loop.'
  ],

  code: `score = 75

if score >= 90:
    print("Excellent")
elif score >= 60:
    print("Good")
else:
    print("Keep improving")`
},
 {
  key: 'loops',
  title: 'Loops',
  description: 'Loops are used to execute a block of code repeatedly. Python provides for and while loops for performing repetitive tasks.',

  theory: [
    'A loop allows a program to repeat a block of code multiple times. Python mainly provides for and while loops.',

    `
    <h3>1. for Loop</h3>

    <p>
      The <strong>for</strong> loop is used to iterate over a sequence such as
      a list, tuple, string, or range of numbers.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>for loop</td>
          <td>Used to iterate over items in a sequence or range.</td>
        </tr>

        <tr>
          <td>range()</td>
          <td>Generates a sequence of numbers.</td>
        </tr>
      </tbody>
    </table>

    <h3>Example of for Loop</h3>

    <pre><code>for i in range(1, 6):
    print(i)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
3
4
5</code></pre>


    <h3>2. while Loop</h3>

    <p>
      The <strong>while</strong> loop repeatedly executes a block of code
      as long as the given condition is True.
    </p>

    <h3>Example of while Loop</h3>

    <pre><code>count = 1

while count &lt;= 5:
    print(count)
    count += 1</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
3
4
5</code></pre>


    <h3>3. Loop Control Statements</h3>

    <p>
      Python provides special statements that can change the normal execution
      of a loop.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Statement</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>break</td>
          <td>Stops the loop immediately.</td>
        </tr>

        <tr>
          <td>continue</td>
          <td>Skips the current iteration and moves to the next iteration.</td>
        </tr>

        <tr>
          <td>pass</td>
          <td>Does nothing and is used as a placeholder.</td>
        </tr>
      </tbody>
    </table>

    <h3>Example of break</h3>

    <pre><code>for i in range(1, 6):
    if i == 3:
        break
    print(i)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2</code></pre>


    <h3>Example of continue</h3>

    <pre><code>for i in range(1, 6):
    if i == 3:
        continue
    print(i)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
4
5</code></pre>
    `
  ],

  practice: [
    'Use a for loop to print numbers from 1 to 10.',
    'Use a while loop to print numbers from 1 to 10.',
    'Create a loop to print the multiplication table of a number.',
    'Practice using break and continue inside a loop.'
  ],

  code: `for i in range(1, 6):
    print(i)`
},
 {
  key: 'functions',
  title: 'Functions',
  description: 'A function is a reusable block of code that performs a specific task. Functions help organize code, reduce repetition, and make programs easier to understand and maintain.',

  theory: [
    'A function is a block of reusable code that runs only when it is called. In Python, a function is defined using the def keyword.',

    `
    <h3>1. Defining a Function</h3>

    <p>
      The <strong>def</strong> keyword is used to create or define a function.
      A function can contain one or more statements that perform a specific task.
    </p>

    <pre><code>def greet():
    print("Hello, Python!")

greet()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello, Python!</code></pre>


    <h3>2. Function with Parameters</h3>

    <p>
      Parameters are variables written inside the parentheses of a function.
      They allow us to pass data to a function.
    </p>

    <pre><code>def greet(name):
    print("Hello", name)

greet("Jitesh")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello Jitesh</code></pre>


    <h3>3. Function with Return Value</h3>

    <p>
      The <strong>return</strong> statement is used to send a result back
      from a function.
    </p>

    <pre><code>def add(a, b):
    return a + b

result = add(10, 5)
print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>15</code></pre>


    <h3>4. Types of Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Built-in Function</td>
          <td>Functions already provided by Python.</td>
          <td>print(), len(), type()</td>
        </tr>

        <tr>
          <td>User-defined Function</td>
          <td>Functions created by the programmer.</td>
          <td>def add():</td>
        </tr>

        <tr>
          <td>Function with Parameters</td>
          <td>Accepts values as input.</td>
          <td>def add(a, b):</td>
        </tr>

        <tr>
          <td>Function with Return Value</td>
          <td>Returns a result to the calling code.</td>
          <td>return a + b</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Advantages of Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Code Reusability</td>
          <td>The same function can be called multiple times.</td>
        </tr>

        <tr>
          <td>Reduces Repetition</td>
          <td>Common code can be written once and reused.</td>
        </tr>

        <tr>
          <td>Easy Maintenance</td>
          <td>Functions make programs easier to modify and maintain.</td>
        </tr>

        <tr>
          <td>Better Organization</td>
          <td>Large programs can be divided into smaller and manageable blocks.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a function that prints a welcome message.',
    'Create a function that accepts two numbers and returns their sum.',
    'Create a function to calculate the square of a number.',
    'Create a function with parameters and test it with different values.'
  ],

  code: `def add(a, b):
    return a + b

result = add(10, 5)
print("Sum:", result)`
},
  {
  key: 'lists',
  title: 'Lists',
  description: 'A list is a built-in Python data type used to store multiple values in a single variable. Lists are ordered, changeable, and allow duplicate values.',

  theory: [
    'A list is a collection of items stored in a single variable. Lists are created using square brackets [ ]. A list can contain different types of data, and its elements can be accessed using their index.',

    `
    <h3>1. Creating a List</h3>

    <p>
      A list is created by placing items inside square brackets
      <strong>[ ]</strong>, separated by commas.
    </p>

    <pre><code>fruits = ["Apple", "Banana", "Mango"]

print(fruits)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>['Apple', 'Banana', 'Mango']</code></pre>


    <h3>2. List Indexing</h3>

    <p>
      Each element in a list has an index. Python uses zero-based indexing,
      which means the first element has index 0.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>0</td>
          <td>Apple</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Banana</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Mango</td>
        </tr>
      </tbody>
    </table>

    <pre><code>fruits = ["Apple", "Banana", "Mango"]

print(fruits[0])
print(fruits[2])</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Apple
Mango</code></pre>


    <h3>3. Changing List Items</h3>

    <p>
      Lists are mutable, which means their elements can be changed after
      the list is created.
    </p>

    <pre><code>fruits = ["Apple", "Banana", "Mango"]

fruits[1] = "Orange"

print(fruits)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>['Apple', 'Orange', 'Mango']</code></pre>


    <h3>4. Common List Methods</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>append()</td>
          <td>Adds an item to the end of the list.</td>
          <td>fruits.append("Orange")</td>
        </tr>

        <tr>
          <td>insert()</td>
          <td>Adds an item at a specific position.</td>
          <td>fruits.insert(1, "Orange")</td>
        </tr>

        <tr>
          <td>remove()</td>
          <td>Removes a specified item from the list.</td>
          <td>fruits.remove("Apple")</td>
        </tr>

        <tr>
          <td>pop()</td>
          <td>Removes an item using its index.</td>
          <td>fruits.pop(0)</td>
        </tr>

        <tr>
          <td>sort()</td>
          <td>Sorts the list in ascending order by default.</td>
          <td>numbers.sort()</td>
        </tr>

        <tr>
          <td>reverse()</td>
          <td>Reverses the order of list elements.</td>
          <td>fruits.reverse()</td>
        </tr>

        <tr>
          <td>clear()</td>
          <td>Removes all items from the list.</td>
          <td>fruits.clear()</td>
        </tr>

        <tr>
          <td>len()</td>
          <td>Returns the number of items in a list.</td>
          <td>len(fruits)</td>
        </tr>
      </tbody>
    </table>


    <h3>5. List Characteristics</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Characteristic</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Ordered</td>
          <td>List items maintain their order.</td>
        </tr>

        <tr>
          <td>Changeable</td>
          <td>List items can be modified after creation.</td>
        </tr>

        <tr>
          <td>Allows Duplicates</td>
          <td>A list can contain the same value multiple times.</td>
        </tr>

        <tr>
          <td>Indexed</td>
          <td>List elements can be accessed using indexes.</td>
        </tr>

        <tr>
          <td>Multiple Data Types</td>
          <td>A list can contain different types of values.</td>
        </tr>
      </tbody>
    </table>


    <h3>6. Example with List Methods</h3>

    <pre><code>numbers = [10, 20, 30]

numbers.append(40)
numbers.remove(20)

print(numbers)
print(len(numbers))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[10, 30, 40]
3</code></pre>
    `
  ],

  practice: [
    'Create a list containing five different fruits.',
    'Access list elements using their indexes.',
    'Add and remove elements using append() and remove().',
    'Sort a list of numbers using sort().',
    'Find the number of elements in a list using len().'
  ],

  code: `fruits = ["Apple", "Banana", "Mango"]

fruits.append("Orange")

print(fruits)
print(fruits[0])
print(len(fruits))`
},
  {
  key: 'tuples',
  title: 'Tuples',
  description: 'A tuple is a built-in Python data type used to store multiple values in a single variable. Tuples are ordered, immutable, and allow duplicate values.',

  theory: [
    'A tuple is a collection of items stored in a single variable. Tuples are created using parentheses ( ). Unlike lists, tuples are immutable, which means their elements cannot be changed after the tuple is created.',

    `
    <h3>1. Creating a Tuple</h3>

    <p>
      A tuple is normally created by placing items inside parentheses
      <strong>( )</strong>, separated by commas.
    </p>

    <pre><code>fruits = ("Apple", "Banana", "Mango")

print(fruits)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>('Apple', 'Banana', 'Mango')</code></pre>


    <h3>2. Tuple Indexing</h3>

    <p>
      Tuple elements are indexed starting from 0. The first element has
      index 0, the second has index 1, and so on.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>0</td>
          <td>Apple</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Banana</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Mango</td>
        </tr>
      </tbody>
    </table>

    <pre><code>fruits = ("Apple", "Banana", "Mango")

print(fruits[0])
print(fruits[2])</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Apple
Mango</code></pre>


    <h3>3. Tuple is Immutable</h3>

    <p>
      Tuples are immutable, which means their elements cannot be changed,
      added, or removed after the tuple is created.
    </p>

    <pre><code>fruits = ("Apple", "Banana", "Mango")

# This will cause an error:
# fruits[1] = "Orange"</code></pre>

    <p>
      If you need to modify the data, you can convert the tuple into a list,
      make the required changes, and then convert it back into a tuple.
    </p>


    <h3>4. Common Tuple Methods</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Method / Function</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>count()</td>
          <td>Returns the number of times a value occurs in the tuple.</td>
          <td>numbers.count(10)</td>
        </tr>

        <tr>
          <td>index()</td>
          <td>Returns the index of the first occurrence of a value.</td>
          <td>numbers.index(20)</td>
        </tr>

        <tr>
          <td>len()</td>
          <td>Returns the number of elements in a tuple.</td>
          <td>len(numbers)</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Tuple Characteristics</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Characteristic</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Ordered</td>
          <td>Tuple elements maintain their order.</td>
        </tr>

        <tr>
          <td>Immutable</td>
          <td>Tuple elements cannot be changed after creation.</td>
        </tr>

        <tr>
          <td>Allows Duplicates</td>
          <td>A tuple can contain duplicate values.</td>
        </tr>

        <tr>
          <td>Indexed</td>
          <td>Tuple elements can be accessed using indexes.</td>
        </tr>

        <tr>
          <td>Multiple Data Types</td>
          <td>A tuple can contain different types of values.</td>
        </tr>
      </tbody>
    </table>


    <h3>6. Tuple with Different Data Types</h3>

    <pre><code>student = ("Jitesh", 20, 85.5, True)

print(student)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>('Jitesh', 20, 85.5, True)</code></pre>


    <h3>7. Tuple Unpacking</h3>

    <p>
      Tuple unpacking allows us to assign the values of a tuple to separate
      variables.
    </p>

    <pre><code>student = ("Jitesh", 20, 85)

name, age, marks = student

print(name)
print(age)
print(marks)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh
20
85</code></pre>
    `
  ],

  practice: [
    'Create a tuple containing five different values.',
    'Access tuple elements using their indexes.',
    'Use count() and index() with a tuple.',
    'Find the number of elements using len().',
    'Practice tuple unpacking by assigning tuple values to variables.'
  ],

  code: `fruits = ("Apple", "Banana", "Mango")

print(fruits)
print(fruits[0])
print(len(fruits))`
},
  {
  key: 'dictionaries',
  title: 'Dictionaries',
  description: 'A dictionary is a built-in Python data type used to store data in key-value pairs. Dictionaries are ordered, changeable, and do not allow duplicate keys.',

  theory: [
    'A dictionary stores data in the form of key-value pairs. Dictionaries are created using curly brackets { }. Each key is connected to a value using a colon (:).',

    `
    <h3>1. Creating a Dictionary</h3>

    <p>
      A dictionary is created using curly brackets <strong>{ }</strong>.
      Each key and value are separated by a colon <strong>:</strong>,
      and different key-value pairs are separated by commas.
    </p>

    <pre><code>student = {
    "name": "Jitesh",
    "age": 20,
    "marks": 85
}

print(student)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'name': 'Jitesh', 'age': 20, 'marks': 85}</code></pre>


    <h3>2. Accessing Dictionary Values</h3>

    <p>
      Dictionary values can be accessed using their corresponding keys.
    </p>

    <pre><code>student = {
    "name": "Jitesh",
    "age": 20,
    "marks": 85
}

print(student["name"])
print(student["marks"])</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh
85</code></pre>


    <h3>3. Adding and Updating Items</h3>

    <p>
      Dictionaries are changeable, so new key-value pairs can be added
      and existing values can be updated.
    </p>

    <pre><code>student = {
    "name": "Jitesh",
    "age": 20
}

student["marks"] = 85
student["age"] = 21

print(student)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'name': 'Jitesh', 'age': 21, 'marks': 85}</code></pre>


    <h3>4. Common Dictionary Methods</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>keys()</td>
          <td>Returns all the keys in the dictionary.</td>
          <td>student.keys()</td>
        </tr>

        <tr>
          <td>values()</td>
          <td>Returns all the values in the dictionary.</td>
          <td>student.values()</td>
        </tr>

        <tr>
          <td>items()</td>
          <td>Returns all key-value pairs.</td>
          <td>student.items()</td>
        </tr>

        <tr>
          <td>get()</td>
          <td>Returns the value associated with a specified key.</td>
          <td>student.get("name")</td>
        </tr>

        <tr>
          <td>update()</td>
          <td>Updates the dictionary with new key-value pairs.</td>
          <td>student.update({"age": 21})</td>
        </tr>

        <tr>
          <td>pop()</td>
          <td>Removes an item using its key.</td>
          <td>student.pop("age")</td>
        </tr>

        <tr>
          <td>clear()</td>
          <td>Removes all items from the dictionary.</td>
          <td>student.clear()</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Dictionary Characteristics</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Characteristic</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Key-Value Pairs</td>
          <td>Data is stored using a key and its corresponding value.</td>
        </tr>

        <tr>
          <td>Ordered</td>
          <td>Dictionaries preserve insertion order.</td>
        </tr>

        <tr>
          <td>Changeable</td>
          <td>Dictionary items can be added, changed, or removed.</td>
        </tr>

        <tr>
          <td>No Duplicate Keys</td>
          <td>A dictionary cannot have duplicate keys.</td>
        </tr>

        <tr>
          <td>Indexed by Keys</td>
          <td>Values are accessed using their keys instead of numerical indexes.</td>
        </tr>
      </tbody>
    </table>


    <h3>6. Loop Through a Dictionary</h3>

    <p>
      A dictionary can be traversed using a <strong>for</strong> loop.
    </p>

    <pre><code>student = {
    "name": "Jitesh",
    "age": 20,
    "marks": 85
}

for key, value in student.items():
    print(key, ":", value)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>name : Jitesh
age : 20
marks : 85</code></pre>


    <h3>7. Nested Dictionary</h3>

    <p>
      A dictionary can contain another dictionary as its value.
      This is called a nested dictionary.
    </p>

    <pre><code>students = {
    "student1": {
        "name": "Jitesh",
        "age": 20
    },
    "student2": {
        "name": "Rahul",
        "age": 21
    }
}

print(students["student1"]["name"])</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh</code></pre>
    `
  ],

  practice: [
    'Create a dictionary containing a student name, age, and marks.',
    'Access dictionary values using their keys.',
    'Add a new key-value pair to a dictionary.',
    'Update and remove dictionary items.',
    'Practice using keys(), values(), and items().',
    'Create a nested dictionary and access its values.'
  ],

  code: `student = {
    "name": "Jitesh",
    "age": 20,
    "marks": 85
}

print(student["name"])
print(student["marks"])

student["grade"] = "A"

print(student)`
},
  
{
  key: 'sets',
  title: 'Sets',
  description: 'A set is a built-in Python data type used to store multiple unique values. Sets are unordered, changeable, and do not allow duplicate elements.',

  theory: [
    'A set is a collection of unique elements. Sets are created using curly brackets { } or the set() function. Since sets do not allow duplicate values, duplicate elements are automatically removed.',

    `
    <h3>1. Creating a Set</h3>

    <p>
      A set can be created by placing elements inside curly brackets
      <strong>{ }</strong>, separated by commas.
    </p>

    <pre><code>fruits = {"Apple", "Banana", "Mango"}

print(fruits)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'Apple', 'Banana', 'Mango'}</code></pre>


    <h3>2. Duplicate Values in Sets</h3>

    <p>
      Sets do not allow duplicate values. If duplicate values are added,
      Python automatically keeps only one copy of each value.
    </p>

    <pre><code>numbers = {10, 20, 20, 30, 30}

print(numbers)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{10, 20, 30}</code></pre>


    <h3>3. Adding Elements</h3>

    <p>
      The <strong>add()</strong> method is used to add a single element
      to a set.
    </p>

    <pre><code>fruits = {"Apple", "Banana"}

fruits.add("Mango")

print(fruits)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'Apple', 'Banana', 'Mango'}</code></pre>


    <h3>4. Removing Elements</h3>

    <p>
      Elements can be removed from a set using methods such as
      <strong>remove()</strong>, <strong>discard()</strong>, and
      <strong>pop()</strong>.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>add()</td>
          <td>Adds an element to the set.</td>
          <td>numbers.add(40)</td>
        </tr>

        <tr>
          <td>remove()</td>
          <td>Removes a specified element. Raises an error if the element does not exist.</td>
          <td>numbers.remove(20)</td>
        </tr>

        <tr>
          <td>discard()</td>
          <td>Removes a specified element without raising an error if it does not exist.</td>
          <td>numbers.discard(20)</td>
        </tr>

        <tr>
          <td>pop()</td>
          <td>Removes and returns an arbitrary element from the set.</td>
          <td>numbers.pop()</td>
        </tr>

        <tr>
          <td>clear()</td>
          <td>Removes all elements from the set.</td>
          <td>numbers.clear()</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Set Operations</h3>

    <p>
      Python supports mathematical set operations such as union,
      intersection, difference, and symmetric difference.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operation</th>
          <th>Operator</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Union</td>
          <td>|</td>
          <td>Combines all unique elements from both sets.</td>
        </tr>

        <tr>
          <td>Intersection</td>
          <td>&amp;</td>
          <td>Returns elements that are common to both sets.</td>
        </tr>

        <tr>
          <td>Difference</td>
          <td>-</td>
          <td>Returns elements present in the first set but not in the second.</td>
        </tr>

        <tr>
          <td>Symmetric Difference</td>
          <td>^</td>
          <td>Returns elements that are present in either set but not in both.</td>
        </tr>
      </tbody>
    </table>


    <h3>6. Set Operations Example</h3>

    <pre><code>A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

print(A | B)
print(A &amp; B)
print(A - B)
print(A ^ B)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{1, 2, 3, 4, 5, 6}
{3, 4}
{1, 2}
{1, 2, 5, 6}</code></pre>


    <h3>7. Set Characteristics</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Characteristic</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Unique</td>
          <td>A set does not allow duplicate elements.</td>
        </tr>

        <tr>
          <td>Unordered</td>
          <td>Set elements do not have a fixed positional order.</td>
        </tr>

        <tr>
          <td>Changeable</td>
          <td>Elements can be added or removed from a set.</td>
        </tr>

        <tr>
          <td>Unindexed</td>
          <td>Set elements cannot be accessed using numerical indexes.</td>
        </tr>

        <tr>
          <td>Multiple Data Types</td>
          <td>A set can contain different types of values, as long as the elements are hashable.</td>
        </tr>
      </tbody>
    </table>


    <h3>8. Checking Membership</h3>

    <p>
      The <strong>in</strong> operator can be used to check whether an
      element exists in a set.
    </p>

    <pre><code>numbers = {10, 20, 30}

print(20 in numbers)
print(50 in numbers)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>True
False</code></pre>
    `
  ],

  practice: [
    'Create a set containing five different numbers.',
    'Add and remove elements from a set.',
    'Create two sets and perform union and intersection.',
    'Practice difference and symmetric difference operations.',
    'Check whether an element exists in a set using the in operator.'
  ],

  code: `A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

print("Union:", A | B)
print("Intersection:", A & B)
print("Difference:", A - B)`
},
  {
  key: 'strings',
  title: 'Strings',
  description: 'A string is a sequence of characters used to store text in Python. Strings can contain letters, numbers, symbols, and spaces and are written inside single, double, or triple quotes.',

  theory: [
    'A string is a sequence of characters enclosed in single quotes, double quotes, or triple quotes. Strings are immutable, which means their characters cannot be changed after the string is created.',

    `
    <h3>1. Creating a String</h3>

    <p>
      Strings can be created using single quotes <strong>' '</strong>,
      double quotes <strong>" "</strong>, or triple quotes
      <strong>''' '''</strong>.
    </p>

    <pre><code>name = "Jitesh"
language = 'Python'

print(name)
print(language)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh
Python</code></pre>


    <h3>2. String Indexing</h3>

    <p>
      Each character in a string has an index. Python uses zero-based
      indexing, so the first character has index 0.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Character</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>0</td>
          <td>P</td>
        </tr>

        <tr>
          <td>1</td>
          <td>y</td>
        </tr>

        <tr>
          <td>2</td>
          <td>t</td>
        </tr>

        <tr>
          <td>3</td>
          <td>h</td>
        </tr>

        <tr>
          <td>4</td>
          <td>o</td>
        </tr>

        <tr>
          <td>5</td>
          <td>n</td>
        </tr>
      </tbody>
    </table>

    <pre><code>language = "Python"

print(language[0])
print(language[3])</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>P
h</code></pre>


    <h3>3. String Slicing</h3>

    <p>
      String slicing is used to extract a part of a string.
      The syntax is <strong>string[start:end]</strong>.
    </p>

    <pre><code>language = "Python"

print(language[0:3])
print(language[2:6])</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Pyt
thon</code></pre>


    <h3>4. String Operators</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Name</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>+</td>
          <td>Concatenation</td>
          <td>Joins two or more strings.</td>
          <td>"Hello" + " World"</td>
        </tr>

        <tr>
          <td>*</td>
          <td>Repetition</td>
          <td>Repeats a string multiple times.</td>
          <td>"Hi " * 3</td>
        </tr>

        <tr>
          <td>in</td>
          <td>Membership</td>
          <td>Checks whether a character or substring exists.</td>
          <td>"Py" in "Python"</td>
        </tr>

        <tr>
          <td>not in</td>
          <td>Not Membership</td>
          <td>Checks whether a character or substring does not exist.</td>
          <td>"Java" not in "Python"</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Common String Methods</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>upper()</td>
          <td>Converts all characters to uppercase.</td>
          <td>text.upper()</td>
        </tr>

        <tr>
          <td>lower()</td>
          <td>Converts all characters to lowercase.</td>
          <td>text.lower()</td>
        </tr>

        <tr>
          <td>capitalize()</td>
          <td>Converts the first character to uppercase.</td>
          <td>text.capitalize()</td>
        </tr>

        <tr>
          <td>strip()</td>
          <td>Removes spaces from the beginning and end of a string.</td>
          <td>text.strip()</td>
        </tr>

        <tr>
          <td>replace()</td>
          <td>Replaces a part of a string with another value.</td>
          <td>text.replace("Python", "Java")</td>
        </tr>

        <tr>
          <td>split()</td>
          <td>Splits a string into a list.</td>
          <td>text.split()</td>
        </tr>

        <tr>
          <td>find()</td>
          <td>Returns the position of the first occurrence of a substring.</td>
          <td>text.find("Python")</td>
        </tr>

        <tr>
          <td>count()</td>
          <td>Returns the number of occurrences of a substring.</td>
          <td>text.count("a")</td>
        </tr>

        <tr>
          <td>startswith()</td>
          <td>Checks whether a string starts with a specified value.</td>
          <td>text.startswith("Py")</td>
        </tr>

        <tr>
          <td>endswith()</td>
          <td>Checks whether a string ends with a specified value.</td>
          <td>text.endswith("on")</td>
        </tr>
      </tbody>
    </table>


    <h3>6. String Immutability</h3>

    <p>
      Strings are immutable in Python. This means individual characters
      cannot be changed directly after a string has been created.
    </p>

    <pre><code>text = "Python"

# This is not allowed:
# text[0] = "J"</code></pre>

    <p>
      Instead, a new string can be created by assigning a new value.
    </p>

    <pre><code>text = "Python"
text = "Java"

print(text)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Java</code></pre>


    <h3>7. String Formatting</h3>

    <p>
      Python provides <strong>f-strings</strong> to insert variables
      directly into a string.
    </p>

    <pre><code>name = "Jitesh"
age = 20

print(f"My name is {name} and I am {age} years old.")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>My name is Jitesh and I am 20 years old.</code></pre>
    `
  ],

  practice: [
    'Create a string containing your name and print it.',
    'Access individual characters using string indexing.',
    'Practice string slicing with different start and end positions.',
    'Use upper(), lower(), replace(), and split() methods.',
    'Concatenate two strings using the + operator.',
    'Create a sentence using an f-string.'
  ],

  code: `name = "Jitesh"
language = "Python"

print(name)
print(language.upper())
print(language[0])
print(f"{name} is learning {language}.")`
},
  {
  key: 'file-io',
  title: 'File I/O',
  description: 'File I/O (Input/Output) in Python is used to create, read, write, append, and manage files. Python provides simple built-in functions and methods for working with files.',

  theory: [
    'File I/O allows a Python program to store data permanently in files and retrieve it when needed. The open() function is used to open a file, and different file modes determine how the file will be used.',

    `
    <h3>1. Opening a File</h3>

    <p>
      The <strong>open()</strong> function is used to open a file.
      It returns a file object that can be used to perform different
      file operations.
    </p>

    <p><strong>Syntax:</strong></p>

    <pre><code>file = open("filename.txt", "mode")</code></pre>


    <h3>2. File Modes</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Mode</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>r</td>
          <td>Read</td>
          <td>Opens a file for reading. The file must already exist.</td>
        </tr>

        <tr>
          <td>w</td>
          <td>Write</td>
          <td>Opens a file for writing. Creates a new file or overwrites an existing file.</td>
        </tr>

        <tr>
          <td>a</td>
          <td>Append</td>
          <td>Opens a file for adding new content at the end.</td>
        </tr>

        <tr>
          <td>x</td>
          <td>Create</td>
          <td>Creates a new file and raises an error if the file already exists.</td>
        </tr>

        <tr>
          <td>b</td>
          <td>Binary</td>
          <td>Used for binary files such as images, audio, and video.</td>
        </tr>

        <tr>
          <td>t</td>
          <td>Text</td>
          <td>Used for text files. This is the default mode.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Writing to a File</h3>

    <p>
      The <strong>write()</strong> method is used to write data into a file.
    </p>

    <pre><code>file = open("example.txt", "w")

file.write("Hello, Python!")

file.close()</code></pre>

    <p>
      The <strong>w</strong> mode creates the file if it does not exist.
      If the file already contains data, the existing content is replaced.
    </p>


    <h3>4. Reading a File</h3>

    <p>
      The <strong>read()</strong> method is used to read the contents of a file.
    </p>

    <pre><code>file = open("example.txt", "r")

content = file.read()

print(content)

file.close()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello, Python!</code></pre>


    <h3>5. Reading a File Line by Line</h3>

    <p>
      The <strong>readline()</strong> method reads one line at a time,
      while <strong>readlines()</strong> reads all lines and returns them
      as a list.
    </p>

    <pre><code>file = open("example.txt", "r")

print(file.readline())

file.close()</code></pre>


    <h3>6. Appending Data to a File</h3>

    <p>
      The <strong>a</strong> mode is used to add new content at the end
      of an existing file without deleting its previous content.
    </p>

    <pre><code>file = open("example.txt", "a")

file.write("\\nWelcome to Python.")

file.close()</code></pre>


    <h3>7. Closing a File</h3>

    <p>
      The <strong>close()</strong> method is used to close an opened file.
      Closing a file releases system resources associated with the file.
    </p>

    <pre><code>file = open("example.txt", "r")

content = file.read()

file.close()</code></pre>


    <h3>8. Using with Statement</h3>

    <p>
      The <strong>with</strong> statement is the recommended way to work
      with files in Python. It automatically closes the file after the
      block of code has finished executing.
    </p>

    <pre><code>with open("example.txt", "r") as file:
    content = file.read()
    print(content)</code></pre>


    <h3>9. Common File Methods</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>open()</td>
          <td>Opens a file.</td>
          <td>open("file.txt", "r")</td>
        </tr>

        <tr>
          <td>read()</td>
          <td>Reads the contents of a file.</td>
          <td>file.read()</td>
        </tr>

        <tr>
          <td>readline()</td>
          <td>Reads one line from a file.</td>
          <td>file.readline()</td>
        </tr>

        <tr>
          <td>readlines()</td>
          <td>Reads all lines and returns them as a list.</td>
          <td>file.readlines()</td>
        </tr>

        <tr>
          <td>write()</td>
          <td>Writes data to a file.</td>
          <td>file.write("Hello")</td>
        </tr>

        <tr>
          <td>writelines()</td>
          <td>Writes multiple strings to a file.</td>
          <td>file.writelines(lines)</td>
        </tr>

        <tr>
          <td>close()</td>
          <td>Closes the file.</td>
          <td>file.close()</td>
        </tr>
      </tbody>
    </table>


    <h3>10. Complete File I/O Example</h3>

    <pre><code>with open("student.txt", "w") as file:
    file.write("Name: Jitesh\\n")
    file.write("Marks: 85")

with open("student.txt", "r") as file:
    content = file.read()
    print(content)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Name: Jitesh
Marks: 85</code></pre>
    `
  ],

  practice: [
    'Create a text file using Python.',
    'Write some text into a file using write().',
    'Read the contents of a file using read().',
    'Append new content using append mode.',
    'Read a file line by line using readline().',
    'Practice using the with statement for file handling.'
  ],

  code: `with open("example.txt", "w") as file:
    file.write("Hello, Python!")

with open("example.txt", "r") as file:
    content = file.read()
    print(content)`
},
  {
  key: 'exceptions',
  title: 'Exception Handling',
  description: 'Exception handling in Python is used to handle runtime errors and prevent a program from terminating unexpectedly. Python provides try, except, else, and finally blocks for handling exceptions.',

  theory: [
    'An exception is an error that occurs during the execution of a program. Exception handling allows a program to detect and handle these errors so that the program can continue or terminate gracefully.',

    `
    <h3>1. What is an Exception?</h3>

    <p>
      An exception is an unexpected event that occurs while a Python program
      is running. For example, dividing a number by zero or trying to access
      a file that does not exist can cause an exception.
    </p>

    <pre><code>number = 10
result = number / 0

print(result)</code></pre>

    <p><strong>Result:</strong></p>

    <pre><code>ZeroDivisionError</code></pre>


    <h3>2. try and except</h3>

    <p>
      The <strong>try</strong> block contains code that may produce an exception.
      The <strong>except</strong> block handles the exception if it occurs.
    </p>

    <pre><code>try:
    number = 10
    result = number / 0
    print(result)

except ZeroDivisionError:
    print("Cannot divide by zero")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Cannot divide by zero</code></pre>


    <h3>3. Common Python Exceptions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Exception</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>ZeroDivisionError</td>
          <td>Occurs when a number is divided by zero.</td>
          <td>10 / 0</td>
        </tr>

        <tr>
          <td>ValueError</td>
          <td>Occurs when a function receives an inappropriate value.</td>
          <td>int("abc")</td>
        </tr>

        <tr>
          <td>TypeError</td>
          <td>Occurs when an operation is performed on an inappropriate data type.</td>
          <td>"10" + 5</td>
        </tr>

        <tr>
          <td>IndexError</td>
          <td>Occurs when an invalid index is accessed.</td>
          <td>numbers[10]</td>
        </tr>

        <tr>
          <td>KeyError</td>
          <td>Occurs when a dictionary key does not exist.</td>
          <td>student["address"]</td>
        </tr>

        <tr>
          <td>FileNotFoundError</td>
          <td>Occurs when a requested file cannot be found.</td>
          <td>open("abc.txt")</td>
        </tr>
      </tbody>
    </table>


    <h3>4. else Block</h3>

    <p>
      The <strong>else</strong> block is executed when no exception occurs
      inside the try block.
    </p>

    <pre><code>try:
    number = 10
    result = number / 2

except ZeroDivisionError:
    print("Cannot divide by zero")

else:
    print("Result:", result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Result: 5.0</code></pre>


    <h3>5. finally Block</h3>

    <p>
      The <strong>finally</strong> block always executes, whether an exception
      occurs or not. It is commonly used for cleanup operations.
    </p>

    <pre><code>try:
    number = 10
    result = number / 2
    print(result)

except ZeroDivisionError:
    print("Cannot divide by zero")

finally:
    print("Program execution completed")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>5.0
Program execution completed</code></pre>


    <h3>6. Complete Exception Handling Structure</h3>

    <pre><code>try:
    # Code that may cause an exception

except:
    # Code to handle the exception

else:
    # Runs when no exception occurs

finally:
    # Always runs</code></pre>


    <h3>7. Handling Multiple Exceptions</h3>

    <p>
      Multiple exception types can be handled using multiple
      <strong>except</strong> blocks.
    </p>

    <pre><code>try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(result)

except ValueError:
    print("Please enter a valid number")

except ZeroDivisionError:
    print("Number cannot be zero")</code></pre>


    <h3>8. Raising an Exception</h3>

    <p>
      The <strong>raise</strong> statement is used to manually generate
      an exception when a specific condition occurs.
    </p>

    <pre><code>age = 15

if age &lt; 18:
    raise ValueError("Age must be 18 or above")</code></pre>

    <p><strong>Result:</strong></p>

    <pre><code>ValueError: Age must be 18 or above</code></pre>


    <h3>9. Advantages of Exception Handling</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Error Handling</td>
          <td>Allows runtime errors to be handled properly.</td>
        </tr>

        <tr>
          <td>Program Stability</td>
          <td>Prevents unexpected termination of the program.</td>
        </tr>

        <tr>
          <td>Debugging</td>
          <td>Makes it easier to identify and manage errors.</td>
        </tr>

        <tr>
          <td>Clean Code</td>
          <td>Keeps error-handling code separate from normal program logic.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a program that handles ZeroDivisionError.',
    'Handle ValueError when converting invalid input to an integer.',
    'Use try, except, else, and finally in one program.',
    'Handle multiple exceptions using multiple except blocks.',
    'Use raise to generate a custom exception.'
  ],

  code: `try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print("Result:", result)

except ValueError:
    print("Please enter a valid number")

except ZeroDivisionError:
    print("Cannot divide by zero")

else:
    print("Calculation successful")

finally:
    print("Program completed")`
},
  {
  key: 'modules',
  title: 'Modules',
  description: 'A module is a Python file containing functions, classes, and variables that can be reused in other Python programs. Modules help organize code and make programs easier to maintain and reuse.',

  theory: [
    'A module is a Python file with a .py extension that contains reusable code. Instead of writing the same code again, we can create a module and import it into another Python program.',

    `
    <h3>1. Creating a Module</h3>

    <p>
      A module is simply a Python file containing functions, variables,
      or classes. For example, create a file named <strong>calculator.py</strong>.
    </p>

    <pre><code># calculator.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b</code></pre>


    <h3>2. Importing a Module</h3>

    <p>
      The <strong>import</strong> statement is used to import a module
      into another Python program.
    </p>

    <pre><code>import calculator

print(calculator.add(10, 5))
print(calculator.subtract(10, 5))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>15
5</code></pre>


    <h3>3. Using from ... import</h3>

    <p>
      The <strong>from ... import</strong> statement allows us to import
      specific functions or variables from a module.
    </p>

    <pre><code>from calculator import add

result = add(10, 5)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>15</code></pre>


    <h3>4. Importing Multiple Items</h3>

    <p>
      Multiple functions or variables can be imported from the same module.
    </p>

    <pre><code>from calculator import add, subtract

print(add(20, 10))
print(subtract(20, 10))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>30
10</code></pre>


    <h3>5. Using an Alias</h3>

    <p>
      The <strong>as</strong> keyword can be used to give a module a shorter
      or different name.
    </p>

    <pre><code>import calculator as calc

print(calc.add(10, 20))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>30</code></pre>


    <h3>6. Built-in Python Modules</h3>

    <p>
      Python provides many built-in modules that can be imported and used
      directly in programs.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Module</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>math</td>
          <td>Provides mathematical functions.</td>
          <td>math.sqrt(25)</td>
        </tr>

        <tr>
          <td>random</td>
          <td>Generates random values.</td>
          <td>random.randint(1, 10)</td>
        </tr>

        <tr>
          <td>datetime</td>
          <td>Works with dates and times.</td>
          <td>datetime.datetime.now()</td>
        </tr>

        <tr>
          <td>os</td>
          <td>Provides functions for interacting with the operating system.</td>
          <td>os.getcwd()</td>
        </tr>

        <tr>
          <td>sys</td>
          <td>Provides access to Python runtime and system-specific information.</td>
          <td>sys.version</td>
        </tr>
      </tbody>
    </table>


    <h3>7. Example of math Module</h3>

    <pre><code>import math

print(math.sqrt(25))
print(math.pi)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>5.0
3.141592653589793</code></pre>


    <h3>8. Example of random Module</h3>

    <pre><code>import random

number = random.randint(1, 10)

print(number)</code></pre>

    <p>
      The output will be a random number between 1 and 10.
    </p>


    <h3>9. User-Defined Modules</h3>

    <p>
      A programmer can create their own module by writing reusable code
      in a separate Python file.
    </p>

    <pre><code># message.py

def welcome():
    print("Welcome to Python!")</code></pre>

    <p>
      The module can then be imported into another Python file:
    </p>

    <pre><code>import message

message.welcome()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Welcome to Python!</code></pre>


    <h3>10. Advantages of Modules</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Code Reusability</td>
          <td>Reusable code can be imported into multiple programs.</td>
        </tr>

        <tr>
          <td>Organization</td>
          <td>Large programs can be divided into smaller files.</td>
        </tr>

        <tr>
          <td>Easy Maintenance</td>
          <td>Changes can be made in one module without rewriting the same code everywhere.</td>
        </tr>

        <tr>
          <td>Namespace</td>
          <td>Modules help organize names and reduce naming conflicts.</td>
        </tr>

        <tr>
          <td>Reusability</td>
          <td>Functions, classes, and variables can be reused across programs.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Import and use the math module.',
    'Generate a random number using the random module.',
    'Import a specific function using from ... import.',
    'Create a user-defined module containing two functions.',
    'Import your user-defined module into another Python program.',
    'Practice using an alias with the as keyword.'
  ],

  code: `import math

number = 25

print("Square root:", math.sqrt(number))
print("Value of pi:", math.pi)`
},
  {
  key: 'classes',
  title: 'Classes',
  description: 'A class is a blueprint for creating objects in Python. It defines the properties and behaviors that objects created from the class can have.',

  theory: [
    'A class is a user-defined data structure that combines data and functions into a single unit. In Python, the class keyword is used to create a class.',

    `
    <h3>1. Creating a Class</h3>

    <p>
      A class is created using the <strong>class</strong> keyword.
      A class can contain variables and functions that describe the
      properties and behavior of its objects.
    </p>

    <pre><code>class Student:
    name = "Jitesh"
    age = 20

print(Student.name)
print(Student.age)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh
20</code></pre>


    <h3>2. Creating an Object</h3>

    <p>
      An object is an instance of a class. We create an object by calling
      the class like a function.
    </p>

    <pre><code>class Student:
    name = "Jitesh"
    age = 20

student1 = Student()

print(student1.name)
print(student1.age)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh
20</code></pre>


    <h3>3. The __init__() Method</h3>

    <p>
      The <strong>__init__()</strong> method is a special method that is
      automatically called when an object is created. It is commonly used
      to initialize object attributes.
    </p>

    <pre><code>class Student:

    def __init__(self, name, age):
        self.name = name
        self.age = age

student1 = Student("Jitesh", 20)

print(student1.name)
print(student1.age)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh
20</code></pre>


    <h3>4. The self Parameter</h3>

    <p>
      The <strong>self</strong> parameter refers to the current object.
      It is used to access the attributes and methods belonging to that object.
    </p>

    <pre><code>class Student:

    def __init__(self, name):
        self.name = name

    def display(self):
        print("Name:", self.name)

student1 = Student("Jitesh")

student1.display()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Name: Jitesh</code></pre>


    <h3>5. Class Attributes and Instance Attributes</h3>

    <p>
      A <strong>class attribute</strong> is shared by all objects of a class,
      while an <strong>instance attribute</strong> belongs to a specific object.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Class Attribute</td>
          <td>Shared by all objects of the class.</td>
          <td>school = "ABC College"</td>
        </tr>

        <tr>
          <td>Instance Attribute</td>
          <td>Belongs to a particular object.</td>
          <td>self.name = name</td>
        </tr>
      </tbody>
    </table>


    <h3>6. Methods in a Class</h3>

    <p>
      A method is a function defined inside a class. Methods are used to
      define the behavior of objects.
    </p>

    <pre><code>class Calculator:

    def add(self, a, b):
        return a + b

calc = Calculator()

print(calc.add(10, 5))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>15</code></pre>


    <h3>7. Multiple Objects</h3>

    <p>
      A single class can be used to create multiple objects. Each object
      can have different attribute values.
    </p>

    <pre><code>class Student:

    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

student1 = Student("Jitesh", 85)
student2 = Student("Rahul", 90)

print(student1.name, student1.marks)
print(student2.name, student2.marks)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh 85
Rahul 90</code></pre>


    <h3>8. Important Concepts of Classes</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Class</td>
          <td>A blueprint used to create objects.</td>
        </tr>

        <tr>
          <td>Object</td>
          <td>An instance of a class.</td>
        </tr>

        <tr>
          <td>Attribute</td>
          <td>A variable that belongs to a class or object.</td>
        </tr>

        <tr>
          <td>Method</td>
          <td>A function defined inside a class.</td>
        </tr>

        <tr>
          <td>__init__()</td>
          <td>A special method used to initialize object attributes.</td>
        </tr>

        <tr>
          <td>self</td>
          <td>Refers to the current object.</td>
        </tr>
      </tbody>
    </table>


    <h3>9. Advantages of Classes</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Organization</td>
          <td>Groups related data and functions together.</td>
        </tr>

        <tr>
          <td>Reusability</td>
          <td>A class can be used to create multiple objects.</td>
        </tr>

        <tr>
          <td>Encapsulation</td>
          <td>Combines data and methods into a single unit.</td>
        </tr>

        <tr>
          <td>Maintainability</td>
          <td>Makes large programs easier to manage and maintain.</td>
        </tr>
      </tbody>
    </table>


    <h3>10. Complete Class Example</h3>

    <pre><code>class Student:

    def __init__(self, name, age, marks):
        self.name = name
        self.age = age
        self.marks = marks

    def display(self):
        print("Name:", self.name)
        print("Age:", self.age)
        print("Marks:", self.marks)

student1 = Student("Jitesh", 20, 85)

student1.display()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Name: Jitesh
Age: 20
Marks: 85</code></pre>
    `
  ],

  practice: [
    'Create a Student class with name and age attributes.',
    'Create an object of the Student class.',
    'Use the __init__() method to initialize object attributes.',
    'Create a class with a method that performs a calculation.',
    'Create multiple objects from the same class.',
    'Create a class for a Bank Account with deposit and withdraw methods.'
  ],

  code: `class Student:

    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def display(self):
        print("Name:", self.name)
        print("Marks:", self.marks)

student1 = Student("Jitesh", 85)

student1.display()`
},
  {
  key: 'inheritance',
  title: 'Inheritance',
  description: 'Inheritance is an Object-Oriented Programming feature that allows a class to inherit properties and methods from another class. It promotes code reusability and helps create a relationship between classes.',

  theory: [
    'Inheritance allows a child class to reuse the attributes and methods of a parent class. The class that provides the properties and methods is called the parent class, while the class that inherits them is called the child class.',

    `
    <h3>1. Parent Class and Child Class</h3>

    <p>
      The class whose properties and methods are inherited is called the
      <strong>parent class</strong> or <strong>base class</strong>.
      The class that inherits them is called the <strong>child class</strong>
      or <strong>derived class</strong>.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Term</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Parent Class</td>
          <td>The class whose properties and methods are inherited.</td>
        </tr>

        <tr>
          <td>Child Class</td>
          <td>The class that inherits properties and methods from the parent class.</td>
        </tr>

        <tr>
          <td>Inheritance</td>
          <td>The mechanism through which a child class reuses the features of a parent class.</td>
        </tr>
      </tbody>
    </table>


    <h3>2. Basic Inheritance</h3>

    <p>
      A child class can inherit from a parent class by passing the parent
      class name inside parentheses.
    </p>

    <pre><code>class Animal:

    def speak(self):
        print("Animal makes a sound")


class Dog(Animal):
    pass


dog = Dog()

dog.speak()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Animal makes a sound</code></pre>


    <h3>3. Single Inheritance</h3>

    <p>
      Single inheritance occurs when one child class inherits from one
      parent class.
    </p>

    <pre><code>class Animal:

    def eat(self):
        print("Animal is eating")


class Dog(Animal):

    def bark(self):
        print("Dog is barking")


dog = Dog()

dog.eat()
dog.bark()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Animal is eating
Dog is barking</code></pre>


    <h3>4. Using super()</h3>

    <p>
      The <strong>super()</strong> function is used to call methods or
      access functionality from the parent class.
    </p>

    <pre><code>class Animal:

    def __init__(self, name):
        self.name = name


class Dog(Animal):

    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed


dog = Dog("Bruno", "Labrador")

print(dog.name)
print(dog.breed)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Bruno
Labrador</code></pre>


    <h3>5. Method Overriding</h3>

    <p>
      When a child class provides its own implementation of a method that
      already exists in the parent class, it is called
      <strong>method overriding</strong>.
    </p>

    <pre><code>class Animal:

    def speak(self):
        print("Animal makes a sound")


class Dog(Animal):

    def speak(self):
        print("Dog barks")


dog = Dog()

dog.speak()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Dog barks</code></pre>


    <h3>6. Types of Inheritance</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Single Inheritance</td>
          <td>One child class inherits from one parent class.</td>
        </tr>

        <tr>
          <td>Multiple Inheritance</td>
          <td>One child class inherits from more than one parent class.</td>
        </tr>

        <tr>
          <td>Multilevel Inheritance</td>
          <td>A class inherits from another child class, forming multiple levels.</td>
        </tr>

        <tr>
          <td>Hierarchical Inheritance</td>
          <td>Multiple child classes inherit from the same parent class.</td>
        </tr>

        <tr>
          <td>Hybrid Inheritance</td>
          <td>A combination of two or more types of inheritance.</td>
        </tr>
      </tbody>
    </table>


    <h3>7. Multiple Inheritance</h3>

    <p>
      Multiple inheritance occurs when one child class inherits from
      more than one parent class.
    </p>

    <pre><code>class Father:

    def father_method(self):
        print("Father method")


class Mother:

    def mother_method(self):
        print("Mother method")


class Child(Father, Mother):
    pass


child = Child()

child.father_method()
child.mother_method()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Father method
Mother method</code></pre>


    <h3>8. Multilevel Inheritance</h3>

    <p>
      In multilevel inheritance, a class inherits from another child class,
      creating a chain of inheritance.
    </p>

    <pre><code>class Grandparent:

    def grandparent_method(self):
        print("Grandparent")


class Parent(Grandparent):

    def parent_method(self):
        print("Parent")


class Child(Parent):

    def child_method(self):
        print("Child")


obj = Child()

obj.grandparent_method()
obj.parent_method()
obj.child_method()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Grandparent
Parent
Child</code></pre>


    <h3>9. Hierarchical Inheritance</h3>

    <p>
      Hierarchical inheritance occurs when multiple child classes inherit
      from the same parent class.
    </p>

    <pre><code>class Animal:

    def eat(self):
        print("Animal is eating")


class Dog(Animal):

    def bark(self):
        print("Dog is barking")


class Cat(Animal):

    def meow(self):
        print("Cat is meowing")


dog = Dog()
cat = Cat()

dog.eat()
dog.bark()

cat.eat()
cat.meow()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Animal is eating
Dog is barking
Animal is eating
Cat is meowing</code></pre>


    <h3>10. Advantages of Inheritance</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Code Reusability</td>
          <td>Existing code can be reused in child classes.</td>
        </tr>

        <tr>
          <td>Less Code Duplication</td>
          <td>Common functionality does not need to be written repeatedly.</td>
        </tr>

        <tr>
          <td>Easy Maintenance</td>
          <td>Changes to common functionality can be managed through the parent class.</td>
        </tr>

        <tr>
          <td>Extensibility</td>
          <td>Child classes can add new features to inherited functionality.</td>
        </tr>

        <tr>
          <td>Method Overriding</td>
          <td>Child classes can provide their own implementation of inherited methods.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a parent class named Animal and a child class named Dog.',
    'Practice single inheritance using two classes.',
    'Use super() to call the parent class constructor.',
    'Create an example of method overriding.',
    'Create a program demonstrating multiple inheritance.',
    'Create a multilevel inheritance example.'
  ],

  code: `class Animal:

    def speak(self):
        print("Animal makes a sound")


class Dog(Animal):

    def speak(self):
        print("Dog barks")


dog = Dog()

dog.speak()`
},
  {
  key: 'comprehensions',
  title: 'Comprehensions',
  description: 'Comprehensions provide a concise way to create new collections from existing sequences in Python. They can be used with lists, sets, and dictionaries and often make code shorter and easier to read.',

  theory: [
    'Comprehensions are a special Python syntax used to create collections in a single expression. They can include loops and optional conditions to filter or transform data.',

    `
    <h3>1. List Comprehension</h3>

    <p>
      List comprehension is used to create a new list from an existing
      sequence in a concise way.
    </p>

    <p><strong>Syntax:</strong></p>

    <pre><code>[expression for item in iterable]</code></pre>

    <h3>Example</h3>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = [x * x for x in numbers]

print(squares)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[1, 4, 9, 16, 25]</code></pre>


    <h3>2. List Comprehension with Condition</h3>

    <p>
      An <strong>if</strong> condition can be added to a list comprehension
      to filter elements.
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5, 6]

even_numbers = [x for x in numbers if x % 2 == 0]

print(even_numbers)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[2, 4, 6]</code></pre>


    <h3>3. List Comprehension with if-else</h3>

    <p>
      An <strong>if-else</strong> expression can be used to choose
      different values for each element.
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

result = ["Even" if x % 2 == 0 else "Odd" for x in numbers]

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>['Odd', 'Even', 'Odd', 'Even', 'Odd']</code></pre>


    <h3>4. Set Comprehension</h3>

    <p>
      Set comprehension is used to create a new set using a concise syntax.
      Duplicate values are automatically removed because sets store only
      unique elements.
    </p>

    <p><strong>Syntax:</strong></p>

    <pre><code>{expression for item in iterable}</code></pre>

    <h3>Example</h3>

    <pre><code>numbers = [1, 2, 2, 3, 3, 4]

squares = {x * x for x in numbers}

print(squares)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{1, 4, 9, 16}</code></pre>


    <h3>5. Dictionary Comprehension</h3>

    <p>
      Dictionary comprehension is used to create a dictionary using
      a concise syntax.
    </p>

    <p><strong>Syntax:</strong></p>

    <pre><code>{key: value for item in iterable}</code></pre>

    <h3>Example</h3>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = {x: x * x for x in numbers}

print(squares)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</code></pre>


    <h3>6. Dictionary Comprehension with Condition</h3>

    <p>
      A condition can be used to filter the items included in a dictionary.
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5, 6]

even_squares = {
    x: x * x
    for x in numbers
    if x % 2 == 0
}

print(even_squares)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{2: 4, 4: 16, 6: 36}</code></pre>


    <h3>7. Types of Comprehensions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Purpose</th>
          <th>Syntax</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>List Comprehension</td>
          <td>Creates a new list.</td>
          <td>[expression for item in iterable]</td>
        </tr>

        <tr>
          <td>Set Comprehension</td>
          <td>Creates a new set of unique values.</td>
          <td>{expression for item in iterable}</td>
        </tr>

        <tr>
          <td>Dictionary Comprehension</td>
          <td>Creates a new dictionary.</td>
          <td>{key: value for item in iterable}</td>
        </tr>
      </tbody>
    </table>


    <h3>8. Comprehension vs Normal Loop</h3>

    <p>
      The same task can often be performed using a normal loop or a
      comprehension. Comprehensions usually require fewer lines of code.
    </p>

    <h4>Using a Normal Loop</h4>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = []

for x in numbers:
    squares.append(x * x)

print(squares)</code></pre>

    <h4>Using List Comprehension</h4>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = [x * x for x in numbers]

print(squares)</code></pre>

    <p>
      Both examples produce the same result, but the comprehension is
      more concise.
    </p>


    <h3>9. Advantages of Comprehensions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Concise Code</td>
          <td>Creates collections using fewer lines of code.</td>
        </tr>

        <tr>
          <td>Readable</td>
          <td>Can make simple transformation and filtering operations easier to understand.</td>
        </tr>

        <tr>
          <td>Efficient</td>
          <td>Provides a compact way to build collections.</td>
        </tr>

        <tr>
          <td>Flexible</td>
          <td>Can include loops, expressions, and conditions.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a list of squares from 1 to 10 using list comprehension.',
    'Create a list containing only even numbers using a condition.',
    'Create a set comprehension that removes duplicate values.',
    'Create a dictionary containing numbers and their squares.',
    'Rewrite a normal for loop using list comprehension.'
  ],

  code: `numbers = [1, 2, 3, 4, 5]

squares = [x * x for x in numbers]

print(squares)`
},
  {
  key: 'standard-library',
  title: 'Standard Library',
  description: 'The Python Standard Library is a collection of modules and packages that provide ready-to-use functionality for common programming tasks such as mathematics, dates, file handling, operating system operations, random numbers, and data processing.',

  theory: [
    'Python Standard Library provides a large collection of built-in modules that can be imported and used without installing external packages. These modules help programmers perform common tasks efficiently.',

    `
    <h3>1. What is the Python Standard Library?</h3>

    <p>
      The Python Standard Library is a collection of modules and packages
      that are included with Python. It provides ready-made functionality
      for many common programming tasks.
    </p>

    <p>
      Standard Library modules can usually be imported using the
      <strong>import</strong> statement.
    </p>

    <pre><code>import math

print(math.sqrt(25))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>5.0</code></pre>


    <h3>2. Common Standard Library Modules</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Module</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>math</td>
          <td>Provides mathematical functions and constants.</td>
          <td>math.sqrt(25)</td>
        </tr>

        <tr>
          <td>random</td>
          <td>Generates random numbers and selections.</td>
          <td>random.randint(1, 10)</td>
        </tr>

        <tr>
          <td>datetime</td>
          <td>Works with dates and times.</td>
          <td>datetime.datetime.now()</td>
        </tr>

        <tr>
          <td>os</td>
          <td>Provides functions for interacting with the operating system.</td>
          <td>os.getcwd()</td>
        </tr>

        <tr>
          <td>sys</td>
          <td>Provides access to Python runtime and system information.</td>
          <td>sys.version</td>
        </tr>

        <tr>
          <td>json</td>
          <td>Works with JSON data.</td>
          <td>json.dumps(data)</td>
        </tr>

        <tr>
          <td>re</td>
          <td>Provides regular expression operations.</td>
          <td>re.search(pattern, text)</td>
        </tr>

        <tr>
          <td>statistics</td>
          <td>Provides statistical calculations.</td>
          <td>statistics.mean(data)</td>
        </tr>

        <tr>
          <td>collections</td>
          <td>Provides specialized collection data types.</td>
          <td>Counter(items)</td>
        </tr>

        <tr>
          <td>time</td>
          <td>Provides time-related functions.</td>
          <td>time.sleep(2)</td>
        </tr>
      </tbody>
    </table>


    <h3>3. math Module</h3>

    <p>
      The <strong>math</strong> module provides mathematical functions
      and constants.
    </p>

    <pre><code>import math

print(math.sqrt(16))
print(math.pow(2, 3))
print(math.pi)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>4.0
8.0
3.141592653589793</code></pre>


    <h3>4. random Module</h3>

    <p>
      The <strong>random</strong> module is used to generate random values.
    </p>

    <pre><code>import random

number = random.randint(1, 10)

print(number)</code></pre>

    <p>
      The output will be a random integer between 1 and 10.
    </p>


    <h3>5. datetime Module</h3>

    <p>
      The <strong>datetime</strong> module is used to work with dates
      and times.
    </p>

    <pre><code>import datetime

current_time = datetime.datetime.now()

print(current_time)</code></pre>

    <p>
      The output displays the current date and time.
    </p>


    <h3>6. os Module</h3>

    <p>
      The <strong>os</strong> module provides functions for interacting
      with the operating system.
    </p>

    <pre><code>import os

print(os.getcwd())</code></pre>

    <p>
      This displays the current working directory of the Python program.
    </p>


    <h3>7. json Module</h3>

    <p>
      The <strong>json</strong> module is used to encode and decode
      JSON data.
    </p>

    <pre><code>import json

student = {
    "name": "Jitesh",
    "marks": 85
}

data = json.dumps(student)

print(data)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{"name": "Jitesh", "marks": 85}</code></pre>


    <h3>8. statistics Module</h3>

    <p>
      The <strong>statistics</strong> module provides functions for
      calculating common statistical values.
    </p>

    <pre><code>import statistics

numbers = [10, 20, 30, 40, 50]

print(statistics.mean(numbers))
print(statistics.median(numbers))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>30
30</code></pre>


    <h3>9. collections Module</h3>

    <p>
      The <strong>collections</strong> module provides specialized
      container data types.
    </p>

    <pre><code>from collections import Counter

items = ["apple", "banana", "apple", "mango", "apple"]

count = Counter(items)

print(count)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Counter({'apple': 3, 'banana': 1, 'mango': 1})</code></pre>


    <h3>10. Standard Library vs External Packages</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Standard Library</th>
          <th>External Package</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Installation</td>
          <td>Usually included with Python.</td>
          <td>Usually needs to be installed separately.</td>
        </tr>

        <tr>
          <td>Availability</td>
          <td>Available as part of the Python installation.</td>
          <td>Depends on the package being installed.</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>math, os, json, datetime</td>
          <td>Requests, NumPy, Pandas</td>
        </tr>

        <tr>
          <td>Usage</td>
          <td>Useful for common programming tasks.</td>
          <td>Often provides specialized functionality.</td>
        </tr>
      </tbody>
    </table>


    <h3>11. Advantages of the Standard Library</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Ready to Use</td>
          <td>Provides many pre-built functions and modules.</td>
        </tr>

        <tr>
          <td>No Extra Installation</td>
          <td>Most modules are included with Python.</td>
        </tr>

        <tr>
          <td>Saves Time</td>
          <td>Reduces the need to write common functionality from scratch.</td>
        </tr>

        <tr>
          <td>Reliable</td>
          <td>Standard Library modules are maintained as part of Python.</td>
        </tr>

        <tr>
          <td>Wide Range of Features</td>
          <td>Provides tools for mathematics, files, dates, networking, data processing, and more.</td>
        </tr>
      </tbody>
    </table>


    <h3>12. Complete Example</h3>

    <pre><code>import math
import random
import datetime

number = 25

print("Square root:", math.sqrt(number))
print("Random number:", random.randint(1, 10))
print("Current date and time:", datetime.datetime.now())</code></pre>
    `
  ],

  practice: [
    'Use the math module to calculate the square root of a number.',
    'Generate a random number using the random module.',
    'Display the current date and time using datetime.',
    'Find the current working directory using the os module.',
    'Convert a Python dictionary into JSON using the json module.',
    'Calculate the mean of a list using the statistics module.'
  ],

  code: `import math
import random
import datetime

number = 25

print("Square root:", math.sqrt(number))
print("Random number:", random.randint(1, 10))
print("Current date:", datetime.datetime.now().date())`
},
  {
  key: 'debugging',
  title: 'Debugging',
  description: 'Debugging is the process of finding, identifying, and fixing errors or unexpected behavior in a Python program. Python provides tools and techniques such as print(), tracebacks, breakpoints, and the pdb module to help debug programs.',

  theory: [
    'Debugging is the process of locating and correcting errors in a program. When a Python program does not produce the expected result, debugging techniques help identify where the problem occurs and how it can be fixed.',

    `
    <h3>1. What is Debugging?</h3>

    <p>
      Debugging is the process of finding and fixing errors in a program.
      These errors may cause the program to stop, produce incorrect results,
      or behave differently from what the programmer expects.
    </p>

    <p>
      The main purpose of debugging is to understand the cause of a problem
      and correct the code without introducing new errors.
    </p>


    <h3>2. Types of Errors</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Error Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Syntax Error</td>
          <td>Occurs when Python syntax rules are not followed.</td>
          <td>if x &gt; 5 print(x)</td>
        </tr>

        <tr>
          <td>Runtime Error</td>
          <td>Occurs while the program is running.</td>
          <td>10 / 0</td>
        </tr>

        <tr>
          <td>Logical Error</td>
          <td>Program runs but produces an incorrect result.</td>
          <td>Using + instead of *</td>
        </tr>

        <tr>
          <td>NameError</td>
          <td>Occurs when an undefined variable or name is used.</td>
          <td>print(total)</td>
        </tr>

        <tr>
          <td>TypeError</td>
          <td>Occurs when an operation is performed on incompatible types.</td>
          <td>"10" + 5</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Using print() for Debugging</h3>

    <p>
      One of the simplest debugging techniques is using
      <strong>print()</strong> statements to check the values of variables
      and understand how the program is executing.
    </p>

    <pre><code>a = 10
b = 5

print("Value of a:", a)
print("Value of b:", b)

result = a + b

print("Result:", result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Value of a: 10
Value of b: 5
Result: 15</code></pre>


    <h3>4. Understanding Tracebacks</h3>

    <p>
      When Python encounters an unhandled exception, it displays a
      <strong>traceback</strong>. A traceback shows where the error occurred
      and provides information about the type of exception.
    </p>

    <pre><code>number = 10
result = number / 0

print(result)</code></pre>

    <p>
      Python reports a <strong>ZeroDivisionError</strong> and indicates
      the line where the error occurred.
    </p>


    <h3>5. Debugging with try and except</h3>

    <p>
      The <strong>try</strong> and <strong>except</strong> blocks can be
      used to catch exceptions and display useful information.
    </p>

    <pre><code>try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print("Result:", result)

except ValueError:
    print("Invalid input")

except ZeroDivisionError:
    print("Cannot divide by zero")</code></pre>


    <h3>6. Using Breakpoints</h3>

    <p>
      A breakpoint pauses program execution at a specific line.
      This allows the programmer to inspect variable values and understand
      the program's execution step by step.
    </p>

    <p>
      Breakpoints are commonly available in Python development environments
      and code editors that support debugging.
    </p>

    <pre><code>def calculate(a, b):
    result = a + b
    return result

x = 10
y = 20

answer = calculate(x, y)

print(answer)</code></pre>

    <p>
      A breakpoint can be placed inside the <strong>calculate()</strong>
      function to inspect the values of <strong>a</strong>,
      <strong>b</strong>, and <strong>result</strong>.
    </p>


    <h3>7. Using the pdb Module</h3>

    <p>
      Python provides a built-in debugging module called
      <strong>pdb</strong>. It allows a programmer to pause execution,
      inspect variables, and execute a program step by step.
    </p>

    <pre><code>import pdb

x = 10
y = 20

pdb.set_trace()

result = x + y

print(result)</code></pre>

    <p>
      When execution reaches <strong>pdb.set_trace()</strong>, the debugger
      pauses the program and allows the programmer to inspect the current
      state of the program.
    </p>


    <h3>8. Common Debugging Techniques</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Technique</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>print()</td>
          <td>Checks variable values and program execution.</td>
        </tr>

        <tr>
          <td>Traceback</td>
          <td>Shows where an exception occurred.</td>
        </tr>

        <tr>
          <td>Breakpoints</td>
          <td>Pauses program execution at a selected line.</td>
        </tr>

        <tr>
          <td>Step-by-Step Execution</td>
          <td>Runs the program one statement at a time.</td>
        </tr>

        <tr>
          <td>pdb</td>
          <td>Provides an interactive Python debugger.</td>
        </tr>

        <tr>
          <td>Code Review</td>
          <td>Helps identify logical and structural problems in code.</td>
        </tr>
      </tbody>
    </table>


    <h3>9. Example of a Logical Error</h3>

    <p>
      Logical errors are different from syntax and runtime errors.
      The program runs successfully, but the result is incorrect.
    </p>

    <pre><code>length = 10
width = 5

area = length + width

print("Area:", area)</code></pre>

    <p>
      The program runs, but the formula for the area of a rectangle should
      use multiplication instead of addition.
    </p>

    <pre><code>length = 10
width = 5

area = length * width

print("Area:", area)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Area: 50</code></pre>


    <h3>10. Debugging Process</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Step</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1. Identify the Problem</td>
          <td>Understand what is going wrong in the program.</td>
        </tr>

        <tr>
          <td>2. Reproduce the Error</td>
          <td>Run the program and reproduce the problem.</td>
        </tr>

        <tr>
          <td>3. Find the Cause</td>
          <td>Inspect the traceback, variables, and program logic.</td>
        </tr>

        <tr>
          <td>4. Fix the Problem</td>
          <td>Modify the code to correct the error.</td>
        </tr>

        <tr>
          <td>5. Test Again</td>
          <td>Run the program again to verify that the problem is fixed.</td>
        </tr>
      </tbody>
    </table>


    <h3>11. Simple Debugging Example</h3>

    <pre><code>def calculate(a, b):
    print("Debug: a =", a)
    print("Debug: b =", b)

    result = a * b

    print("Debug: result =", result)

    return result


x = 10
y = 5

answer = calculate(x, y)

print("Answer:", answer)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Debug: a = 10
Debug: b = 5
Debug: result = 50
Answer: 50</code></pre>


    <h3>12. Advantages of Debugging</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Error Detection</td>
          <td>Helps find errors in a program.</td>
        </tr>

        <tr>
          <td>Error Correction</td>
          <td>Helps fix problems in the source code.</td>
        </tr>

        <tr>
          <td>Better Reliability</td>
          <td>Helps make programs more stable and reliable.</td>
        </tr>

        <tr>
          <td>Better Understanding</td>
          <td>Helps programmers understand how their code executes.</td>
        </tr>

        <tr>
          <td>Improved Code Quality</td>
          <td>Helps identify logical and programming mistakes.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Find and fix a syntax error in a Python program.',
    'Use print() statements to check variable values.',
    'Create a program containing a logical error and fix it.',
    'Use try and except to handle a runtime error.',
    'Practice reading and understanding a Python traceback.',
    'Use pdb.set_trace() to inspect variables during program execution.'
  ],

  code: `def calculate(a, b):
    print("Debug: a =", a)
    print("Debug: b =", b)

    result = a + b

    print("Debug: result =", result)

    return result

x = 10
y = 20

answer = calculate(x, y)

print("Answer:", answer)`
},
  {
  key: 'virtual-environments',
  title: 'Virtual Environments',
  description: 'A virtual environment is an isolated Python environment used to install and manage packages separately for each project. It prevents package and version conflicts between different Python projects.',

  theory: [
    'A virtual environment creates an isolated space for a Python project. Each project can have its own Python packages and package versions without affecting other projects or the system-wide Python installation.',

    `
    <h3>1. What is a Virtual Environment?</h3>

    <p>
      A virtual environment is an isolated environment created for a
      Python project. It allows you to install project-specific packages
      without changing packages used by other projects.
    </p>

    <p>
      For example, one project may require an older version of a package,
      while another project may require a newer version. Virtual environments
      allow both projects to use their required versions separately.
    </p>


    <h3>2. Why Use Virtual Environments?</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Reason</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Isolation</td>
          <td>Keeps project dependencies separate from other projects.</td>
        </tr>

        <tr>
          <td>Version Management</td>
          <td>Allows different projects to use different package versions.</td>
        </tr>

        <tr>
          <td>Dependency Management</td>
          <td>Installs only the packages required by a specific project.</td>
        </tr>

        <tr>
          <td>System Protection</td>
          <td>Prevents project packages from unnecessarily changing the system Python environment.</td>
        </tr>

        <tr>
          <td>Reproducibility</td>
          <td>Makes it easier to recreate the same project environment on another system.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Creating a Virtual Environment</h3>

    <p>
      Python provides the built-in <strong>venv</strong> module for creating
      virtual environments.
    </p>

    <pre><code>python -m venv myenv</code></pre>

    <p>
      This command creates a virtual environment named
      <strong>myenv</strong>.
    </p>


    <h3>4. Activating a Virtual Environment on Windows</h3>

    <p>
      On Windows, the activation command depends on the terminal being used.
    </p>

    <h4>Command Prompt (CMD)</h4>

    <pre><code>myenv\\Scripts\\activate</code></pre>

    <h4>PowerShell</h4>

    <pre><code>.\\myenv\\Scripts\\Activate.ps1</code></pre>

    <p>
      After successful activation, the environment name usually appears
      at the beginning of the terminal prompt.
    </p>

    <pre><code>(myenv) C:\\Projects\\PythonApp&gt;</code></pre>


    <h3>5. Activating a Virtual Environment on macOS and Linux</h3>

    <p>
      On macOS and Linux, the activation command is:
    </p>

    <pre><code>source myenv/bin/activate</code></pre>

    <p>
      After activation, the environment name appears in the terminal prompt.
    </p>

    <pre><code>(myenv) user@computer:~/project$</code></pre>


    <h3>6. Installing Packages</h3>

    <p>
      Once the virtual environment is activated, packages can be installed
      using <strong>pip</strong>.
    </p>

    <pre><code>pip install requests</code></pre>

    <p>
      The package is installed inside the active virtual environment instead
      of being installed globally.
    </p>


    <h3>7. Checking Installed Packages</h3>

    <p>
      The <strong>pip list</strong> command displays the packages installed
      in the current environment.
    </p>

    <pre><code>pip list</code></pre>


    <h3>8. Creating requirements.txt</h3>

    <p>
      The <strong>requirements.txt</strong> file is commonly used to store
      the packages and versions required by a Python project.
    </p>

    <pre><code>pip freeze &gt; requirements.txt</code></pre>

    <p>
      This command saves the installed packages and their versions into
      the <strong>requirements.txt</strong> file.
    </p>

    <h3>Example requirements.txt</h3>

    <pre><code>requests==2.32.3
flask==3.0.3</code></pre>


    <h3>9. Installing from requirements.txt</h3>

    <p>
      When setting up the project on another computer or in a new virtual
      environment, all required packages can be installed using:
    </p>

    <pre><code>pip install -r requirements.txt</code></pre>


    <h3>10. Deactivating a Virtual Environment</h3>

    <p>
      The <strong>deactivate</strong> command is used to leave the active
      virtual environment.
    </p>

    <pre><code>deactivate</code></pre>

    <p>
      After running this command, the terminal returns to the normal
      system Python environment.
    </p>


    <h3>11. Virtual Environment Workflow</h3>

    <pre><code># Create environment
python -m venv myenv

# Activate on Windows CMD
myenv\\Scripts\\activate

# Install a package
pip install requests

# Save dependencies
pip freeze &gt; requirements.txt

# Deactivate environment
deactivate</code></pre>


    <h3>12. Virtual Environment vs Global Installation</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Virtual Environment</th>
          <th>Global Installation</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Isolation</td>
          <td>Packages are isolated for a project.</td>
          <td>Packages are shared across projects.</td>
        </tr>

        <tr>
          <td>Version Control</td>
          <td>Different projects can use different versions.</td>
          <td>Version conflicts can occur between projects.</td>
        </tr>

        <tr>
          <td>Project Management</td>
          <td>Better for individual projects.</td>
          <td>Less suitable for projects with different dependencies.</td>
        </tr>

        <tr>
          <td>System Environment</td>
          <td>Does not normally modify the global package environment.</td>
          <td>Changes the system-wide Python environment.</td>
        </tr>
      </tbody>
    </table>


    <h3>13. Advantages of Virtual Environments</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Dependency Isolation</td>
          <td>Each project can have its own dependencies.</td>
        </tr>

        <tr>
          <td>Version Management</td>
          <td>Different package versions can be used by different projects.</td>
        </tr>

        <tr>
          <td>Easy Deployment</td>
          <td>Dependencies can be recorded using requirements.txt.</td>
        </tr>

        <tr>
          <td>Safer Development</td>
          <td>Reduces the risk of affecting other Python projects.</td>
        </tr>
      </tbody>
    </table>


    <h3>14. Complete Example</h3>

    <p>
      A typical Python project can use a virtual environment with the
      following workflow:
    </p>

    <pre><code># Create a virtual environment
python -m venv myenv

# Activate the environment
myenv\\Scripts\\activate

# Install a package
pip install requests

# Check installed packages
pip list

# Save dependencies
pip freeze &gt; requirements.txt

# Exit the environment
deactivate</code></pre>
    `
  ],

  practice: [
    'Create a virtual environment named myenv.',
    'Activate the virtual environment on Windows.',
    'Install a Python package using pip.',
    'Display installed packages using pip list.',
    'Create a requirements.txt file using pip freeze.',
    'Install packages from requirements.txt.',
    'Deactivate the virtual environment.'
  ],

  code: `# Create a virtual environment
python -m venv myenv

# Activate on Windows CMD
myenv\\Scripts\\activate

# Install a package
pip install requests

# Check installed packages
pip list

# Deactivate
deactivate`
},
  {
  key: 'installation',
  title: 'Python Installation',
  description: 'Python installation is the process of downloading and setting up Python on a computer. After installation, Python can be used to write, execute, and develop Python programs.',

  theory: [
    'Python can be installed on Windows, macOS, and Linux. The official Python installer provides the Python interpreter, standard library, and other tools required to run Python programs.',

    `
    <h3>1. Download Python</h3>

    <p>
      Python can be downloaded from the official Python website.
      Choose the installer suitable for your operating system.
    </p>

    <p>
      For Windows, download the latest stable Python release and
      select the appropriate installer for your system.
    </p>

    <p>
      <strong>Official Website:</strong>
      <a href="https://www.python.org/" target="_blank">python.org</a>
    </p>


    <h3>2. Installing Python on Windows</h3>

    <p>
      After downloading the Python installer, open the installer and
      follow the installation steps.
    </p>

    <ol>
      <li>Run the downloaded Python installer.</li>
      <li>Enable <strong>Add Python.exe to PATH</strong>.</li>
      <li>Click <strong>Install Now</strong>.</li>
      <li>Wait for the installation to complete.</li>
      <li>Click <strong>Close</strong> after the installation finishes.</li>
    </ol>

    <p>
      Enabling <strong>Add Python.exe to PATH</strong> allows Python
      commands to be used directly from Command Prompt or PowerShell.
    </p>


    <h3>3. Checking Python Installation</h3>

    <p>
      Open Command Prompt or PowerShell and run:
    </p>

    <pre><code>python --version</code></pre>

    <p>
      You can also use:
    </p>

    <pre><code>python -V</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>Python 3.x.x</code></pre>

    <p>
      The exact version number may be different depending on the
      Python version installed on your computer.
    </p>


    <h3>4. Checking pip</h3>

    <p>
      <strong>pip</strong> is Python's package installer. It is used to
      install and manage additional Python packages.
    </p>

    <pre><code>pip --version</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>pip x.x.x from ...</code></pre>


    <h3>5. Running Python in Command Prompt</h3>

    <p>
      After installing Python, type the following command:
    </p>

    <pre><code>python</code></pre>

    <p>
      This opens the Python interactive interpreter.
    </p>

    <pre><code>&gt;&gt;&gt; print("Hello, Python!")
Hello, Python!</code></pre>

    <p>
      To exit the Python interpreter, you can use:
    </p>

    <pre><code>exit()</code></pre>


    <h3>6. Creating Your First Python Program</h3>

    <p>
      Create a file named <strong>hello.py</strong> and write the following code:
    </p>

    <pre><code>print("Hello, Python!")</code></pre>

    <p>
      Save the file and open Command Prompt in the same folder.
      Then run:
    </p>

    <pre><code>python hello.py</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello, Python!</code></pre>


    <h3>7. Python Installation Components</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Python Interpreter</td>
          <td>Executes Python code.</td>
        </tr>

        <tr>
          <td>Standard Library</td>
          <td>Provides built-in modules and functionality.</td>
        </tr>

        <tr>
          <td>pip</td>
          <td>Installs and manages Python packages.</td>
        </tr>

        <tr>
          <td>IDLE</td>
          <td>A basic development environment included with Python.</td>
        </tr>

        <tr>
          <td>Python Launcher</td>
          <td>Helps run different Python versions on supported systems.</td>
        </tr>
      </tbody>
    </table>


    <h3>8. Python PATH</h3>

    <p>
      PATH is an operating system environment variable that tells the
      system where executable programs are located.
    </p>

    <p>
      When Python is added to PATH, commands such as
      <strong>python</strong> and <strong>pip</strong> can be executed
      from Command Prompt or PowerShell.
    </p>

    <pre><code>python --version
pip --version</code></pre>


    <h3>9. Installing Python on macOS and Linux</h3>

    <p>
      Python installation methods can vary depending on the operating
      system. After installation, verify Python using:
    </p>

    <pre><code>python3 --version</code></pre>

    <p>
      On many macOS and Linux systems, the command
      <strong>python3</strong> is used instead of <strong>python</strong>.
    </p>


    <h3>10. Troubleshooting Python Installation</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Problem</th>
          <th>Possible Solution</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>'python' is not recognized</td>
          <td>Check that Python is installed and added to PATH.</td>
        </tr>

        <tr>
          <td>pip is not recognized</td>
          <td>Check the Python installation and pip configuration.</td>
        </tr>

        <tr>
          <td>Wrong Python version</td>
          <td>Check installed versions and the PATH configuration.</td>
        </tr>

        <tr>
          <td>Installation failed</td>
          <td>Run the installer again and check the installation options.</td>
        </tr>
      </tbody>
    </table>


    <h3>11. Verify Everything</h3>

    <p>
      After installation, run the following commands to verify that
      Python and pip are working correctly.
    </p>

    <pre><code>python --version
pip --version</code></pre>

    <p>
      If both commands display version information, Python has been
      successfully installed and is ready to use.
    </p>
    `
  ],

  practice: [
    'Install Python on your computer.',
    'Check the installed Python version using python --version.',
    'Check the pip version using pip --version.',
    'Open the Python interactive interpreter.',
    'Create and run your first hello.py program.',
    'Practice running a Python program from Command Prompt.'
  ],

  code: `print("Hello, Python!")
print("Python is successfully installed.")`
},
  {
  key: 'python-ide',
  title: 'Python IDE',
  description: 'A Python IDE (Integrated Development Environment) is a software application that provides tools for writing, running, testing, and debugging Python programs. An IDE combines a code editor, interpreter support, debugging tools, and other development features in one environment.',

  theory: [
    'An IDE provides a complete environment for Python development. It helps programmers write code, execute programs, find errors, debug applications, and manage project files from a single application.',

    `
    <h3>1. What is an IDE?</h3>

    <p>
      IDE stands for <strong>Integrated Development Environment</strong>.
      It is a software application that provides different tools required
      for software development in one place.
    </p>

    <p>
      A Python IDE generally includes a code editor, syntax highlighting,
      code completion, debugging tools, terminal support, and project
      management features.
    </p>


    <h3>2. Common Python IDEs and Editors</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>IDE / Editor</th>
          <th>Description</th>
          <th>Suitable For</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>IDLE</td>
          <td>Basic development environment included with Python.</td>
          <td>Beginners and basic Python programs.</td>
        </tr>

        <tr>
          <td>Visual Studio Code</td>
          <td>Lightweight and extensible code editor with Python support.</td>
          <td>Beginners, students, and professional developers.</td>
        </tr>

        <tr>
          <td>PyCharm</td>
          <td>Feature-rich IDE designed especially for Python development.</td>
          <td>Large projects and professional development.</td>
        </tr>

        <tr>
          <td>Jupyter Notebook</td>
          <td>Interactive environment for running code in separate cells.</td>
          <td>Data science, learning, and experimentation.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Python IDLE</h3>

    <p>
      <strong>IDLE</strong> is a basic Python development environment
      that is included with the standard Python installation.
    </p>

    <p>
      It provides a Python shell and a simple editor for writing and
      executing Python programs.
    </p>

    <pre><code>print("Hello from IDLE")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello from IDLE</code></pre>


    <h3>4. Visual Studio Code</h3>

    <p>
      <strong>Visual Studio Code</strong> is a popular code editor that
      supports Python through the Python extension.
    </p>

    <p>Common features include:</p>

    <ul>
      <li>Syntax highlighting</li>
      <li>Code completion</li>
      <li>Debugging</li>
      <li>Integrated terminal</li>
      <li>Extensions</li>
      <li>Git integration</li>
      <li>Virtual environment support</li>
    </ul>

    <p>
      A Python file can be created with the <strong>.py</strong> extension.
    </p>

    <pre><code>message = "Hello, Python!"

print(message)</code></pre>


    <h3>5. PyCharm</h3>

    <p>
      <strong>PyCharm</strong> is an IDE specifically designed for Python
      development. It provides advanced tools for writing, testing,
      debugging, and managing Python projects.
    </p>

    <p>Common features include:</p>

    <ul>
      <li>Intelligent code completion</li>
      <li>Code navigation</li>
      <li>Debugging tools</li>
      <li>Testing support</li>
      <li>Virtual environment management</li>
      <li>Project management</li>
    </ul>


    <h3>6. Jupyter Notebook</h3>

    <p>
      <strong>Jupyter Notebook</strong> is an interactive environment where
      Python code can be written and executed in separate cells.
    </p>

    <p>
      It is commonly used for data analysis, visualization, scientific
      computing, education, and experimentation.
    </p>

    <pre><code>numbers = [10, 20, 30, 40, 50]

sum(numbers) / len(numbers)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>30.0</code></pre>


    <h3>7. Important Features of a Python IDE</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Code Editor</td>
          <td>Used to write and edit Python programs.</td>
        </tr>

        <tr>
          <td>Syntax Highlighting</td>
          <td>Makes different parts of Python code easier to identify.</td>
        </tr>

        <tr>
          <td>Code Completion</td>
          <td>Suggests code, functions, variables, and methods while typing.</td>
        </tr>

        <tr>
          <td>Debugger</td>
          <td>Helps find and fix errors in a program.</td>
        </tr>

        <tr>
          <td>Terminal</td>
          <td>Allows Python commands and other system commands to be executed.</td>
        </tr>

        <tr>
          <td>Project Management</td>
          <td>Helps organize files, folders, and project settings.</td>
        </tr>

        <tr>
          <td>Extensions</td>
          <td>Adds additional functionality to the development environment.</td>
        </tr>
      </tbody>
    </table>


    <h3>8. Running a Python Program in an IDE</h3>

    <p>
      A Python program can generally be created by making a file with
      the <strong>.py</strong> extension and then running it through
      the IDE.
    </p>

    <pre><code># hello.py

name = "Jitesh"

print("Hello,", name)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello, Jitesh</code></pre>


    <h3>9. IDE vs Code Editor</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>IDE</th>
          <th>Code Editor</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Code Editing</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>

        <tr>
          <td>Debugger</td>
          <td>Usually built-in</td>
          <td>Often available through extensions</td>
        </tr>

        <tr>
          <td>Project Management</td>
          <td>Usually built-in</td>
          <td>Depends on the editor and extensions</td>
        </tr>

        <tr>
          <td>Extensions</td>
          <td>May be supported</td>
          <td>Commonly supported</td>
        </tr>

        <tr>
          <td>Examples</td>
          <td>PyCharm, IDLE</td>
          <td>Visual Studio Code</td>
        </tr>
      </tbody>
    </table>


    <h3>10. Choosing a Python IDE</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>User</th>
          <th>Recommended Environment</th>
          <th>Reason</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Beginner</td>
          <td>IDLE</td>
          <td>Simple and easy to use.</td>
        </tr>

        <tr>
          <td>Student</td>
          <td>Visual Studio Code</td>
          <td>Lightweight and supports many programming languages.</td>
        </tr>

        <tr>
          <td>Professional Developer</td>
          <td>PyCharm</td>
          <td>Provides advanced Python development features.</td>
        </tr>

        <tr>
          <td>Data Science Learner</td>
          <td>Jupyter Notebook</td>
          <td>Useful for interactive coding and data analysis.</td>
        </tr>
      </tbody>
    </table>


    <h3>11. Advantages of Using a Python IDE</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Easy Development</td>
          <td>Provides important development tools in one application.</td>
        </tr>

        <tr>
          <td>Faster Coding</td>
          <td>Code completion and suggestions make coding faster.</td>
        </tr>

        <tr>
          <td>Easy Debugging</td>
          <td>Debuggers help locate and fix errors.</td>
        </tr>

        <tr>
          <td>Better Organization</td>
          <td>Projects, files, and folders can be managed easily.</td>
        </tr>

        <tr>
          <td>Productivity</td>
          <td>Development tools can be accessed from one environment.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Open Python IDLE and run a simple Python program.',
    'Create and run a .py file using a Python IDE.',
    'Practice writing Python code in Visual Studio Code.',
    'Use the terminal inside an IDE to run a Python program.',
    'Set a breakpoint and debug a simple Python program.',
    'Compare IDLE, Visual Studio Code, PyCharm, and Jupyter Notebook.'
  ],

  code: `name = "Jitesh"
language = "Python"

print("Name:", name)
print("Learning:", language)`
},
  {
  key: 'type-conversion',
  title: 'Type Conversion',
  description: 'Type conversion is the process of changing a value from one data type to another in Python. Python supports implicit type conversion, which is performed automatically, and explicit type conversion, which is performed manually using built-in functions.',

  theory: [
    'Type conversion is used when a program needs to convert data from one type to another. For example, a string containing a number can be converted into an integer before performing mathematical operations.',

    `
    <h3>1. What is Type Conversion?</h3>

    <p>
      Type conversion means converting a value from one data type to
      another data type. Python provides several built-in functions
      for performing type conversion.
    </p>

    <p>
      For example, a string value <strong>"25"</strong> can be converted
      into an integer using <strong>int()</strong>.
    </p>

    <pre><code>value = "25"

number = int(value)

print(number)
print(type(number))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>25
&lt;class 'int'&gt;</code></pre>


    <h3>2. Types of Type Conversion</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Implicit Conversion</td>
          <td>Python automatically converts one compatible data type into another.</td>
        </tr>

        <tr>
          <td>Explicit Conversion</td>
          <td>The programmer manually converts a value using built-in functions.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Implicit Type Conversion</h3>

    <p>
      In implicit conversion, Python automatically converts a value from
      one data type to another when necessary.
    </p>

    <p>
      For example, when an integer and a float are used in an arithmetic
      operation, Python converts the integer into a float.
    </p>

    <pre><code>number = 10
price = 2.5

result = number + price

print(result)
print(type(result))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>12.5
&lt;class 'float'&gt;</code></pre>


    <h3>4. Explicit Type Conversion</h3>

    <p>
      In explicit conversion, the programmer manually changes the data
      type using functions such as <strong>int()</strong>,
      <strong>float()</strong>, and <strong>str()</strong>.
    </p>

    <pre><code>value = "100"

number = int(value)

print(number + 20)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>120</code></pre>


    <h3>5. int() Function</h3>

    <p>
      The <strong>int()</strong> function converts a compatible value
      into an integer.
    </p>

    <pre><code>value = "50"

number = int(value)

print(number)
print(type(number))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>50
&lt;class 'int'&gt;</code></pre>


    <h3>6. float() Function</h3>

    <p>
      The <strong>float()</strong> function converts a compatible value
      into a floating-point number.
    </p>

    <pre><code>value = "19.99"

price = float(value)

print(price)
print(type(price))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>19.99
&lt;class 'float'&gt;</code></pre>


    <h3>7. str() Function</h3>

    <p>
      The <strong>str()</strong> function converts a value into a string.
    </p>

    <pre><code>number = 100

text = str(number)

print(text)
print(type(text))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>100
&lt;class 'str'&gt;</code></pre>


    <h3>8. bool() Function</h3>

    <p>
      The <strong>bool()</strong> function converts a value into
      <strong>True</strong> or <strong>False</strong>.
    </p>

    <pre><code>value = 10

result = bool(value)

print(result)
print(type(result))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>True
&lt;class 'bool'&gt;</code></pre>

    <p>
      In general, zero and empty values are considered false, while
      many non-zero and non-empty values are considered true.
    </p>


    <h3>9. list() Function</h3>

    <p>
      The <strong>list()</strong> function can be used to convert an
      iterable into a list.
    </p>

    <pre><code>text = "Python"

letters = list(text)

print(letters)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>['P', 'y', 't', 'h', 'o', 'n']</code></pre>


    <h3>10. tuple() Function</h3>

    <p>
      The <strong>tuple()</strong> function converts an iterable into
      a tuple.
    </p>

    <pre><code>numbers = [1, 2, 3, 4]

result = tuple(numbers)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>(1, 2, 3, 4)</code></pre>


    <h3>11. set() Function</h3>

    <p>
      The <strong>set()</strong> function converts an iterable into a set.
      Duplicate values are removed because sets contain unique elements.
    </p>

    <pre><code>numbers = [1, 2, 2, 3, 3, 4]

result = set(numbers)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{1, 2, 3, 4}</code></pre>


    <h3>12. Common Type Conversion Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Converts To</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>int()</td>
          <td>Integer</td>
          <td>int("10") → 10</td>
        </tr>

        <tr>
          <td>float()</td>
          <td>Float</td>
          <td>float("10.5") → 10.5</td>
        </tr>

        <tr>
          <td>str()</td>
          <td>String</td>
          <td>str(10) → "10"</td>
        </tr>

        <tr>
          <td>bool()</td>
          <td>Boolean</td>
          <td>bool(1) → True</td>
        </tr>

        <tr>
          <td>list()</td>
          <td>List</td>
          <td>list("ABC") → ['A', 'B', 'C']</td>
        </tr>

        <tr>
          <td>tuple()</td>
          <td>Tuple</td>
          <td>tuple([1, 2]) → (1, 2)</td>
        </tr>

        <tr>
          <td>set()</td>
          <td>Set</td>
          <td>set([1, 2, 2]) → {1, 2}</td>
        </tr>
      </tbody>
    </table>


    <h3>13. Type Conversion with User Input</h3>

    <p>
      The <strong>input()</strong> function returns user input as a string.
      Therefore, numeric input often needs to be converted before performing
      calculations.
    </p>

    <pre><code>age = input("Enter your age: ")

age = int(age)

print("Your age is:", age)</code></pre>

    <p>
      A shorter version can also be written as:
    </p>

    <pre><code>age = int(input("Enter your age: "))

print("Your age is:", age)</code></pre>


    <h3>14. Invalid Type Conversion</h3>

    <p>
      Not every value can be converted into every data type. For example,
      converting a non-numeric string into an integer causes a
      <strong>ValueError</strong>.
    </p>

    <pre><code>value = "Hello"

number = int(value)</code></pre>

    <p>
      This code raises a <strong>ValueError</strong> because
      "Hello" is not a valid integer representation.
    </p>


    <h3>15. Advantages of Type Conversion</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Data Compatibility</td>
          <td>Allows different types of values to work together.</td>
        </tr>

        <tr>
          <td>User Input</td>
          <td>Converts input values into the required data type.</td>
        </tr>

        <tr>
          <td>Calculations</td>
          <td>Converts numeric strings into numbers for calculations.</td>
        </tr>

        <tr>
          <td>Data Processing</td>
          <td>Helps convert data into suitable collection types.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Convert a string containing a number into an integer using int().',
    'Convert an integer into a float using float().',
    'Convert a number into a string using str().',
    'Convert a list into a tuple using tuple().',
    'Convert a list into a set using set().',
    'Take two numbers as input from the user and calculate their sum.',
    'Try converting an invalid string into an integer and observe the error.'
  ],

  code: `value = "25"

number = int(value)

print("Value:", number)
print("Type:", type(number))

price = float("19.99")

print("Price:", price)
print("Type:", type(price))`
},
  {
  key: 'input-output',
  title: 'Input and Output',
  description: 'Input and Output are used to communicate with the user in a Python program. The input() function is used to receive data from the user, while the print() function is used to display information on the screen.',

  theory: [
    'Input is the data provided to a program by the user or another source. Output is the information produced by a program and displayed to the user. Python provides simple built-in functions such as input() and print() for basic input and output operations.',

    `
    <h3>1. What is Input?</h3>

    <p>
      Input is the data provided to a program during its execution.
      In Python, the <strong>input()</strong> function is commonly used
      to take input from the user through the keyboard.
    </p>

    <pre><code>name = input("Enter your name: ")

print(name)</code></pre>

    <p><strong>Example Input:</strong></p>

    <pre><code>Jitesh</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh</code></pre>


    <h3>2. What is Output?</h3>

    <p>
      Output is the information produced by a program. Python uses the
      <strong>print()</strong> function to display output on the screen.
    </p>

    <pre><code>print("Hello, Python!")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello, Python!</code></pre>


    <h3>3. print() Function</h3>

    <p>
      The <strong>print()</strong> function is used to display text,
      numbers, variables, expressions, and other values.
    </p>

    <pre><code>name = "Jitesh"
age = 20

print(name)
print(age)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh
20</code></pre>


    <h3>4. Printing Multiple Values</h3>

    <p>
      Multiple values can be passed to the <strong>print()</strong>
      function by separating them with commas.
    </p>

    <pre><code>name = "Jitesh"
age = 20

print("Name:", name, "Age:", age)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Name: Jitesh Age: 20</code></pre>


    <h3>5. Taking User Input</h3>

    <p>
      The <strong>input()</strong> function pauses the program and waits
      for the user to enter a value.
    </p>

    <pre><code>name = input("Enter your name: ")

print("Hello", name)</code></pre>

    <p><strong>Example Input:</strong></p>

    <pre><code>Jitesh</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello Jitesh</code></pre>


    <h3>6. Input is a String</h3>

    <p>
      By default, the <strong>input()</strong> function returns the entered
      value as a string, even when the user enters a number.
    </p>

    <pre><code>age = input("Enter your age: ")

print(type(age))</code></pre>

    <p><strong>Example Input:</strong></p>

    <pre><code>20</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>&lt;class 'str'&gt;</code></pre>


    <h3>7. Taking Integer Input</h3>

    <p>
      To use user input as an integer, convert the input using
      <strong>int()</strong>.
    </p>

    <pre><code>age = int(input("Enter your age: "))

print("Age:", age)
print("Type:", type(age))</code></pre>

    <p><strong>Example Input:</strong></p>

    <pre><code>20</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Age: 20
Type: &lt;class 'int'&gt;</code></pre>


    <h3>8. Taking Float Input</h3>

    <p>
      The <strong>float()</strong> function can be used when the user
      needs to enter a decimal number.
    </p>

    <pre><code>price = float(input("Enter price: "))

print("Price:", price)</code></pre>

    <p><strong>Example Input:</strong></p>

    <pre><code>99.50</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Price: 99.5</code></pre>


    <h3>9. Taking Multiple Inputs</h3>

    <p>
      Multiple values can be taken in a single line using
      <strong>split()</strong>.
    </p>

    <pre><code>name, city = input("Enter name and city: ").split()

print("Name:", name)
print("City:", city)</code></pre>

    <p><strong>Example Input:</strong></p>

    <pre><code>Jitesh Patna</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Name: Jitesh
City: Patna</code></pre>


    <h3>10. Taking Multiple Integer Inputs</h3>

    <p>
      The <strong>map()</strong> function can be combined with
      <strong>int()</strong> and <strong>split()</strong> to take
      multiple integer values.
    </p>

    <pre><code>a, b, c = map(int, input("Enter three numbers: ").split())

print("Sum:", a + b + c)</code></pre>

    <p><strong>Example Input:</strong></p>

    <pre><code>10 20 30</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Sum: 60</code></pre>


    <h3>11. sep Parameter</h3>

    <p>
      The <strong>sep</strong> parameter defines the separator between
      multiple values passed to print().
    </p>

    <pre><code>print("Python", "Java", "C++", sep=" | ")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Python | Java | C++</code></pre>


    <h3>12. end Parameter</h3>

    <p>
      By default, print() moves to a new line after displaying output.
      The <strong>end</strong> parameter can be used to change this behavior.
    </p>

    <pre><code>print("Hello", end=" ")
print("Python")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello Python</code></pre>


    <h3>13. Formatted Output using f-strings</h3>

    <p>
      F-strings provide a convenient way to insert variables and expressions
      inside a string.
    </p>

    <pre><code>name = "Jitesh"
age = 20

print(f"My name is {name} and I am {age} years old.")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>My name is Jitesh and I am 20 years old.</code></pre>


    <h3>14. Escape Characters</h3>

    <p>
      Escape characters are special characters used to control how text
      is displayed.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Escape Character</th>
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
          <td>Tab space</td>
        </tr>

        <tr>
          <td>\\\\</td>
          <td>Backslash</td>
        </tr>

        <tr>
          <td>\\'</td>
          <td>Single quotation mark</td>
        </tr>

        <tr>
          <td>\\"</td>
          <td>Double quotation mark</td>
        </tr>
      </tbody>
    </table>

    <pre><code>print("Hello\\nPython")
print("Name:\\tJitesh")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello
Python
Name:   Jitesh</code></pre>


    <h3>15. Input and Output Example</h3>

    <pre><code>name = input("Enter your name: ")
age = int(input("Enter your age: "))

print(f"Hello, {name}!")
print(f"You are {age} years old.")</code></pre>

    <p><strong>Example Input:</strong></p>

    <pre><code>Jitesh
20</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello, Jitesh!
You are 20 years old.</code></pre>


    <h3>16. Common Input and Output Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function / Method</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>input()</td>
          <td>Receives input from the user.</td>
        </tr>

        <tr>
          <td>print()</td>
          <td>Displays output on the screen.</td>
        </tr>

        <tr>
          <td>split()</td>
          <td>Splits input into multiple parts.</td>
        </tr>

        <tr>
          <td>int()</td>
          <td>Converts input into an integer.</td>
        </tr>

        <tr>
          <td>float()</td>
          <td>Converts input into a floating-point number.</td>
        </tr>

        <tr>
          <td>str()</td>
          <td>Converts a value into a string.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Take your name as input and print a greeting message.',
    'Take two integers from the user and print their sum.',
    'Take the length and width of a rectangle and calculate its area.',
    'Take multiple numbers in one line using split() and map().',
    'Use sep and end with the print() function.',
    'Create a formatted output using an f-string.',
    'Practice using escape characters such as \\n and \\t.'
  ],

  code: `name = input("Enter your name: ")
age = int(input("Enter your age: "))

print(f"Hello, {name}!")
print(f"You are {age} years old.")`
},
  {
  key: 'comments',
  title: 'Comments',
  description: 'Comments are notes written inside a Python program to explain the code. Python ignores comments during program execution. Comments make code easier to understand, maintain, and debug.',

  theory: [
    'Comments are used to add explanations or notes to Python code. They are not executed by the Python interpreter and are mainly written to improve code readability and documentation.',

    `
    <h3>1. What are Comments?</h3>

    <p>
      A comment is a piece of text written in a Python program that is
      ignored during execution. Comments help programmers understand
      the purpose and working of different parts of the code.
    </p>

    <pre><code># This is a comment

print("Hello, Python!")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello, Python!</code></pre>

    <p>
      The line beginning with <strong>#</strong> is ignored by Python.
    </p>


    <h3>2. Single-Line Comments</h3>

    <p>
      A single-line comment starts with the <strong>#</strong> symbol.
      Everything after the <strong>#</strong> on that line is treated
      as a comment.
    </p>

    <pre><code># Store the student's age
age = 20

# Display the age
print(age)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>20</code></pre>


    <h3>3. Inline Comments</h3>

    <p>
      A comment can also be written on the same line as Python code.
      This is called an inline comment.
    </p>

    <pre><code>age = 20  # Student's age

print(age)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>20</code></pre>


    <h3>4. Multi-Line Comments</h3>

    <p>
      Python does not have a separate multi-line comment syntax.
      Multiple lines can be commented by placing <strong>#</strong>
      at the beginning of each line.
    </p>

    <pre><code># This program calculates
# the sum of two numbers
# and displays the result.

a = 10
b = 20

print(a + b)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>30</code></pre>


    <h3>5. Comments for Code Explanation</h3>

    <p>
      Comments can explain what a particular section of code does.
      This is especially useful in large programs.
    </p>

    <pre><code># Calculate the area of a rectangle
length = 10
width = 5

area = length * width

# Display the calculated area
print("Area:", area)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Area: 50</code></pre>


    <h3>6. Comments for Debugging</h3>

    <p>
      Comments can also be used to temporarily disable a line of code
      while testing or debugging a program.
    </p>

    <pre><code>number = 10

# print("Debug value:", number)

print(number)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>10</code></pre>

    <p>
      The commented <strong>print()</strong> statement is not executed.
    </p>


    <h3>7. Docstrings</h3>

    <p>
      Python also supports documentation strings, commonly called
      <strong>docstrings</strong>. They are used to describe modules,
      classes, and functions.
    </p>

    <pre><code>def add(a, b):
    """Return the sum of two numbers."""
    return a + b

print(add(10, 20))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>30</code></pre>

    <p>
      Unlike ordinary comments, docstrings can be accessed at runtime
      through the object's <strong>__doc__</strong> attribute.
    </p>


    <h3>8. Comments vs Docstrings</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Comment</th>
          <th>Docstring</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Symbol / Syntax</td>
          <td>#</td>
          <td>Triple quotes</td>
        </tr>

        <tr>
          <td>Purpose</td>
          <td>Explain or annotate code.</td>
          <td>Document modules, classes, and functions.</td>
        </tr>

        <tr>
          <td>Executed</td>
          <td>No</td>
          <td>Stored as documentation.</td>
        </tr>

        <tr>
          <td>Can be accessed at runtime</td>
          <td>No</td>
          <td>Yes, using __doc__.</td>
        </tr>
      </tbody>
    </table>


    <h3>9. Good Comments</h3>

    <p>
      Good comments explain <strong>why</strong> something is done when
      the reason is not obvious from the code itself.
    </p>

    <pre><code># Use a temporary variable to preserve the original value
original_price = 100

discount = 10

final_price = original_price - discount

print(final_price)</code></pre>


    <h3>10. Avoid Unnecessary Comments</h3>

    <p>
      Comments should add useful information. Avoid comments that simply
      repeat what the code already clearly shows.
    </p>

    <p><strong>Unnecessary:</strong></p>

    <pre><code># Add 10 to x
x = x + 10</code></pre>

    <p><strong>Better:</strong></p>

    <pre><code># Add the bonus points to the student's score
score = score + 10</code></pre>


    <h3>11. Benefits of Comments</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Benefit</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Readability</td>
          <td>Makes code easier to understand.</td>
        </tr>

        <tr>
          <td>Documentation</td>
          <td>Provides useful information about the code.</td>
        </tr>

        <tr>
          <td>Maintenance</td>
          <td>Helps developers understand code when making future changes.</td>
        </tr>

        <tr>
          <td>Debugging</td>
          <td>Can temporarily disable code during testing.</td>
        </tr>

        <tr>
          <td>Teamwork</td>
          <td>Helps other developers understand the purpose of the code.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Write a single-line comment in a Python program.',
    'Add inline comments to explain variables.',
    'Write multiple comments to explain a program.',
    'Use comments to temporarily disable a line of code.',
    'Create a function with a docstring.',
    'Add meaningful comments to a small Python project.'
  ],

  code: `# Store two numbers
a = 10
b = 20

# Calculate their sum
result = a + b

# Display the result
print("Sum:", result)`
},
  {
  key: 'expressions',
  title: 'Expressions',
  description: 'An expression is a combination of values, variables, operators, and function calls that Python evaluates to produce a result. Expressions are used to perform calculations, comparisons, logical operations, and other computations.',

  theory: [
    'An expression is any valid combination of operands and operators that produces a value. Python evaluates an expression and returns its result.',

    `
    <h3>1. What is an Expression?</h3>

    <p>
      An expression is a combination of values, variables, operators,
      and function calls that Python evaluates to produce a result.
    </p>

    <pre><code>10 + 5</code></pre>

    <p>
      In this expression, <strong>10</strong> and <strong>5</strong>
      are values and <strong>+</strong> is the arithmetic operator.
    </p>

    <p><strong>Result:</strong></p>

    <pre><code>15</code></pre>


    <h3>2. Expression vs Statement</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Expression</th>
          <th>Statement</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Produces or evaluates to a value.</td>
          <td>Performs an action or controls program execution.</td>
        </tr>

        <tr>
          <td>Example: 10 + 5</td>
          <td>Example: x = 10 + 5</td>
        </tr>

        <tr>
          <td>Can be used as part of a larger expression.</td>
          <td>Usually represents a complete instruction.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Arithmetic Expressions</h3>

    <p>
      Arithmetic expressions are used to perform mathematical calculations.
    </p>

    <pre><code>a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)
print(a ** b)
print(a // b)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>13
7
30
3.3333333333333335
1
1000
3</code></pre>


    <h3>4. Comparison Expressions</h3>

    <p>
      Comparison expressions compare two values and return either
      <strong>True</strong> or <strong>False</strong>.
    </p>

    <pre><code>a = 10
b = 5

print(a &gt; b)
print(a &lt; b)
print(a == b)
print(a != b)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>True
False
False
True</code></pre>


    <h3>5. Logical Expressions</h3>

    <p>
      Logical expressions use <strong>and</strong>,
      <strong>or</strong>, and <strong>not</strong> to combine
      or modify conditions.
    </p>

    <pre><code>age = 20
has_id = True

print(age &gt;= 18 and has_id)
print(age &lt; 18 or has_id)
print(not has_id)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>True
True
False</code></pre>


    <h3>6. Assignment Expressions</h3>

    <p>
      Python also supports the assignment expression operator
      <strong>:=</strong>, commonly called the <strong>walrus operator</strong>.
      It allows a value to be assigned to a variable as part of an expression.
    </p>

    <pre><code>if (length := len("Python")) &gt; 5:
    print("Length:", length)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Length: 6</code></pre>


    <h3>7. String Expressions</h3>

    <p>
      Expressions can also be used with strings for concatenation,
      repetition, and formatting.
    </p>

    <pre><code>first = "Hello"
second = "Python"

message = first + " " + second

print(message)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello Python</code></pre>


    <h3>8. Boolean Expressions</h3>

    <p>
      A Boolean expression evaluates to either <strong>True</strong>
      or <strong>False</strong>.
    </p>

    <pre><code>age = 20

result = age &gt;= 18

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>True</code></pre>


    <h3>9. Expressions with Variables</h3>

    <p>
      Variables can be used as operands in expressions.
    </p>

    <pre><code>price = 500
discount = 50

final_price = price - discount

print(final_price)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>450</code></pre>


    <h3>10. Expressions with Function Calls</h3>

    <p>
      A function call can also be part of an expression because it
      produces a value.
    </p>

    <pre><code>numbers = [10, 20, 30, 40]

total = sum(numbers)

print(total)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>100</code></pre>


    <h3>11. Conditional Expressions</h3>

    <p>
      Python provides a short way to write a simple conditional expression.
      It is also called the <strong>ternary conditional expression</strong>.
    </p>

    <pre><code>age = 20

status = "Adult" if age &gt;= 18 else "Minor"

print(status)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Adult</code></pre>


    <h3>12. Operator Precedence</h3>

    <p>
      When an expression contains multiple operators, Python follows
      operator precedence to determine which operation is performed first.
    </p>

    <pre><code>result = 10 + 5 * 2

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>20</code></pre>

    <p>
      Multiplication is performed before addition, so the expression
      is evaluated as:
    </p>

    <pre><code>10 + (5 * 2)</code></pre>


    <h3>13. Parentheses in Expressions</h3>

    <p>
      Parentheses can be used to control the order in which an expression
      is evaluated.
    </p>

    <pre><code>result = (10 + 5) * 2

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>30</code></pre>


    <h3>14. Common Types of Expressions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arithmetic</td>
          <td>10 + 5</td>
          <td>15</td>
        </tr>

        <tr>
          <td>Comparison</td>
          <td>10 &gt; 5</td>
          <td>True</td>
        </tr>

        <tr>
          <td>Logical</td>
          <td>10 &gt; 5 and 5 &gt; 2</td>
          <td>True</td>
        </tr>

        <tr>
          <td>String</td>
          <td>"Hello" + " Python"</td>
          <td>"Hello Python"</td>
        </tr>

        <tr>
          <td>Conditional</td>
          <td>"Adult" if age &gt;= 18 else "Minor"</td>
          <td>"Adult"</td>
        </tr>

        <tr>
          <td>Function Call</td>
          <td>len("Python")</td>
          <td>6</td>
        </tr>
      </tbody>
    </table>


    <h3>15. Expressions in a Python Program</h3>

    <pre><code>price = 1000
discount = 100

final_price = price - discount

if final_price &gt; 500:
    print("Price is high")
else:
    print("Price is affordable")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Price is high</code></pre>


    <h3>16. Importance of Expressions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Use</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Calculations</td>
          <td>Perform mathematical operations.</td>
        </tr>

        <tr>
          <td>Comparisons</td>
          <td>Compare values and produce Boolean results.</td>
        </tr>

        <tr>
          <td>Conditions</td>
          <td>Build conditions used by if and other control-flow statements.</td>
        </tr>

        <tr>
          <td>Data Processing</td>
          <td>Calculate and transform values during program execution.</td>
        </tr>

        <tr>
          <td>Function Calls</td>
          <td>Use returned values as part of larger expressions.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Write arithmetic expressions using different operators.',
    'Create comparison expressions that return True or False.',
    'Combine multiple conditions using and, or, and not.',
    'Practice using parentheses to change operator precedence.',
    'Create a conditional expression using if and else.',
    'Use a function call as part of an expression.',
    'Create a program that calculates a final price after applying a discount.'
  ],

  code: `price = 1000
discount = 100

final_price = price - discount

print("Original Price:", price)
print("Discount:", discount)
print("Final Price:", final_price)

if final_price > 500:
    print("Price is high")
else:
    print("Price is affordable")`
},
  {
  key: 'conditional-statements',
  title: 'Conditional Statements',
  description: 'Conditional statements are used to make decisions in a Python program. They allow the program to execute different blocks of code depending on whether a condition is True or False.',

  theory: [
    'Conditional statements control the flow of a Python program by checking conditions and executing specific blocks of code based on the result.',

    `
    <h3>1. What are Conditional Statements?</h3>

    <p>
      Conditional statements are used when a program needs to make a
      decision. Python checks a condition and executes a particular
      block of code when the condition is satisfied.
    </p>

    <p>
      The main conditional statements in Python are
      <strong>if</strong>, <strong>if-else</strong>, and
      <strong>if-elif-else</strong>.
    </p>


    <h3>2. if Statement</h3>

    <p>
      The <strong>if</strong> statement executes a block of code only
      when the specified condition is True.
    </p>

    <pre><code>age = 20

if age >= 18:
    print("You are an adult.")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>You are an adult.</code></pre>


    <h3>3. Syntax of if Statement</h3>

    <pre><code>if condition:
    # code to execute</code></pre>

    <p>
      Python uses indentation to identify the block of code that belongs
      to the <strong>if</strong> statement.
    </p>


    <h3>4. if-else Statement</h3>

    <p>
      The <strong>if-else</strong> statement provides two possible paths.
      If the condition is True, the if block is executed. Otherwise,
      the else block is executed.
    </p>

    <pre><code>age = 16

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>You are a minor.</code></pre>


    <h3>5. Syntax of if-else</h3>

    <pre><code>if condition:
    # code when condition is True
else:
    # code when condition is False</code></pre>


    <h3>6. if-elif-else Statement</h3>

    <p>
      The <strong>if-elif-else</strong> statement is used when there
      are multiple conditions to check.
    </p>

    <pre><code>marks = 75

if marks >= 90:
    print("Grade A")
elif marks >= 60:
    print("Grade B")
elif marks >= 40:
    print("Grade C")
else:
    print("Fail")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Grade B</code></pre>


    <h3>7. Syntax of if-elif-else</h3>

    <pre><code>if condition1:
    # code
elif condition2:
    # code
elif condition3:
    # code
else:
    # code</code></pre>

    <p>
      Python checks the conditions from top to bottom. When it finds
      the first True condition, its block is executed and the remaining
      conditions are skipped.
    </p>


    <h3>8. Multiple elif Statements</h3>

    <p>
      A program can contain multiple <strong>elif</strong> statements
      when several conditions need to be checked.
    </p>

    <pre><code>temperature = 30

if temperature >= 40:
    print("Very Hot")
elif temperature >= 30:
    print("Hot")
elif temperature >= 20:
    print("Normal")
else:
    print("Cold")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hot</code></pre>


    <h3>9. Nested if Statement</h3>

    <p>
      An <strong>if</strong> statement placed inside another
      <strong>if</strong> statement is called a nested if statement.
    </p>

    <pre><code>age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Entry allowed.")
    else:
        print("ID is required.")
else:
    print("Entry not allowed.")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Entry allowed.</code></pre>


    <h3>10. Using Comparison Operators</h3>

    <p>
      Conditional statements commonly use comparison operators such as
      <strong>==</strong>, <strong>!=</strong>, <strong>&gt;</strong>,
      <strong>&lt;</strong>, <strong>&gt;=</strong>, and
      <strong>&lt;=</strong>.
    </p>

    <pre><code>number = 10

if number == 10:
    print("Number is 10")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Number is 10</code></pre>


    <h3>11. Using Logical Operators</h3>

    <p>
      Logical operators can be used to combine multiple conditions.
    </p>

    <pre><code>age = 25
has_id = True

if age >= 18 and has_id:
    print("Access granted.")
else:
    print("Access denied.")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Access granted.</code></pre>


    <h3>12. Checking Even and Odd Numbers</h3>

    <p>
      Conditional statements can be used to determine whether a number
      is even or odd.
    </p>

    <pre><code>number = 10

if number % 2 == 0:
    print("Even number")
else:
    print("Odd number")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Even number</code></pre>


    <h3>13. Short-Hand if Statement</h3>

    <p>
      A simple if statement can sometimes be written on a single line.
    </p>

    <pre><code>age = 20

if age >= 18: print("Adult")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Adult</code></pre>


    <h3>14. Conditional Expression</h3>

    <p>
      A simple if-else decision can be written as a conditional expression.
      This is useful when assigning one of two values based on a condition.
    </p>

    <pre><code>age = 20

status = "Adult" if age >= 18 else "Minor"

print(status)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Adult</code></pre>


    <h3>15. Conditional Statements with User Input</h3>

    <p>
      Conditional statements can be combined with user input to create
      interactive programs.
    </p>

    <pre><code>marks = int(input("Enter your marks: "))

if marks >= 90:
    print("Excellent")
elif marks >= 60:
    print("Good")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")</code></pre>

    <p><strong>Example Input:</strong></p>

    <pre><code>75</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Good</code></pre>


    <h3>16. Truthy and Falsy Values</h3>

    <p>
      Python allows many values to be used directly as conditions.
      Some values are treated as False, while most other values are
      treated as True.
    </p>

    <pre><code>name = ""

if name:
    print("Name is available.")
else:
    print("Name is empty.")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Name is empty.</code></pre>


    <h3>17. Conditional Statements Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Statement</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>if</td>
          <td>Executes code when a condition is True.</td>
          <td>if age &gt;= 18:</td>
        </tr>

        <tr>
          <td>if-else</td>
          <td>Provides two possible execution paths.</td>
          <td>if age &gt;= 18 else</td>
        </tr>

        <tr>
          <td>if-elif-else</td>
          <td>Checks multiple conditions.</td>
          <td>if / elif / else</td>
        </tr>

        <tr>
          <td>Nested if</td>
          <td>Places one conditional statement inside another.</td>
          <td>if inside if</td>
        </tr>

        <tr>
          <td>Conditional Expression</td>
          <td>Provides a short way to choose between two values.</td>
          <td>x if condition else y</td>
        </tr>
      </tbody>
    </table>


    <h3>18. Importance of Conditional Statements</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Use</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Decision Making</td>
          <td>Allows a program to make decisions based on conditions.</td>
        </tr>

        <tr>
          <td>Validation</td>
          <td>Checks whether input or data meets specific requirements.</td>
        </tr>

        <tr>
          <td>Program Control</td>
          <td>Controls which block of code should execute.</td>
        </tr>

        <tr>
          <td>User Interaction</td>
          <td>Allows programs to respond differently to different inputs.</td>
        </tr>

        <tr>
          <td>Problem Solving</td>
          <td>Helps implement real-world decision-making logic.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Write an if statement to check whether a number is positive.',
    'Create an if-else program to check whether a number is even or odd.',
    'Create an if-elif-else program to calculate grades.',
    'Write a program to check whether a person is eligible to vote.',
    'Create a nested if statement using age and another condition.',
    'Use logical operators with conditional statements.',
    'Create a program that takes marks as input and displays the appropriate grade.'
  ],

  code: `marks = int(input("Enter your marks: "))

if marks >= 90:
    print("Grade A")
elif marks >= 60:
    print("Grade B")
elif marks >= 40:
    print("Grade C")
else:
    print("Fail")`
},
  {
  key: 'break-continue-pass',
  title: 'Break, Continue and Pass',
  description: 'Python provides break, continue, and pass statements to control the execution of loops and code blocks. The break statement stops a loop, continue skips the current iteration, and pass acts as a placeholder without performing any operation.',

  theory: [
    'The break, continue, and pass statements are control statements used to change the normal flow of program execution. They are especially useful when working with loops and conditional blocks.',

    `
    <h3>1. What are break, continue and pass?</h3>

    <p>
      Python provides three useful control statements:
      <strong>break</strong>, <strong>continue</strong>, and
      <strong>pass</strong>.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Statement</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>break</td>
          <td>Immediately terminates the loop.</td>
        </tr>

        <tr>
          <td>continue</td>
          <td>Skips the current iteration and moves to the next iteration.</td>
        </tr>

        <tr>
          <td>pass</td>
          <td>Does nothing and acts as a placeholder.</td>
        </tr>
      </tbody>
    </table>


    <h3>2. break Statement</h3>

    <p>
      The <strong>break</strong> statement is used to immediately stop
      a loop when a particular condition is satisfied.
    </p>

    <pre><code>for number in range(1, 10):
    if number == 5:
        break

    print(number)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
3
4</code></pre>

    <p>
      When <strong>number</strong> becomes 5, the break statement
      terminates the loop.
    </p>


    <h3>3. break with while Loop</h3>

    <p>
      The break statement can also be used inside a
      <strong>while</strong> loop.
    </p>

    <pre><code>number = 1

while number &lt;= 10:
    if number == 6:
        break

    print(number)
    number += 1</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
3
4
5</code></pre>


    <h3>4. continue Statement</h3>

    <p>
      The <strong>continue</strong> statement skips the remaining
      statements of the current loop iteration and moves to the
      next iteration.
    </p>

    <pre><code>for number in range(1, 6):
    if number == 3:
        continue

    print(number)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
4
5</code></pre>

    <p>
      When number is 3, continue skips the print statement for that
      iteration. The loop then continues with number 4.
    </p>


    <h3>5. continue with while Loop</h3>

    <p>
      The continue statement can also be used with a while loop.
      Care must be taken to update the loop variable so that the
      loop does not become infinite.
    </p>

    <pre><code>number = 0

while number &lt; 5:
    number += 1

    if number == 3:
        continue

    print(number)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
4
5</code></pre>


    <h3>6. pass Statement</h3>

    <p>
      The <strong>pass</strong> statement does nothing when executed.
      It is used as a placeholder when a statement is syntactically
      required but no action is needed yet.
    </p>

    <pre><code>for number in range(1, 6):
    if number == 3:
        pass

    print(number)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
3
4
5</code></pre>

    <p>
      Unlike continue, pass does not skip the iteration.
      The program continues normally.
    </p>


    <h3>7. pass in a Function</h3>

    <p>
      The pass statement can be used when a function is planned but
      its implementation will be written later.
    </p>

    <pre><code>def calculate_result():
    pass

print("Function created successfully.")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Function created successfully.</code></pre>


    <h3>8. pass in a Class</h3>

    <p>
      The pass statement can also be used to create an empty class
      temporarily.
    </p>

    <pre><code>class Student:
    pass

student = Student()

print("Student object created.")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Student object created.</code></pre>


    <h3>9. break vs continue vs pass</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>break</th>
          <th>continue</th>
          <th>pass</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Purpose</td>
          <td>Stops the loop.</td>
          <td>Skips the current iteration.</td>
          <td>Does nothing.</td>
        </tr>

        <tr>
          <td>Loop Terminates</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
        </tr>

        <tr>
          <td>Current Iteration</td>
          <td>Stops completely.</td>
          <td>Remaining code is skipped.</td>
          <td>Continues normally.</td>
        </tr>

        <tr>
          <td>Common Use</td>
          <td>Stop when a condition is met.</td>
          <td>Skip unwanted values.</td>
          <td>Placeholder for future code.</td>
        </tr>
      </tbody>
    </table>


    <h3>10. Using break to Find a Value</h3>

    <p>
      The break statement can be useful when searching for a particular
      value in a collection.
    </p>

    <pre><code>numbers = [10, 20, 30, 40, 50]

for number in numbers:
    if number == 30:
        print("Number found!")
        break</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Number found!</code></pre>


    <h3>11. Using continue to Skip Values</h3>

    <p>
      The continue statement can be used to skip specific values
      while processing a collection.
    </p>

    <pre><code>for number in range(1, 6):
    if number % 2 == 0:
        continue

    print(number)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
3
5</code></pre>

    <p>
      Here, even numbers are skipped and only odd numbers are printed.
    </p>


    <h3>12. Using break and continue Together</h3>

    <p>
      Both statements can be used in the same loop when different
      conditions require different actions.
    </p>

    <pre><code>for number in range(1, 10):

    if number == 3:
        continue

    if number == 7:
        break

    print(number)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
4
5
6</code></pre>


    <h3>13. Using pass as a Placeholder</h3>

    <p>
      When you want to create a code block but do not want to implement
      it yet, pass can be used.
    </p>

    <pre><code>age = 20

if age &gt;= 18:
    pass
else:
    print("Minor")</code></pre>

    <p>
      Nothing happens when the condition is True because the pass
      statement performs no operation.
    </p>


    <h3>14. Important Difference</h3>

    <pre><code># break
for i in range(5):
    if i == 2:
        break
    print(i)</code></pre>

    <p>Output:</p>

    <pre><code>0
1</code></pre>

    <pre><code># continue
for i in range(5):
    if i == 2:
        continue
    print(i)</code></pre>

    <p>Output:</p>

    <pre><code>0
1
3
4</code></pre>

    <pre><code># pass
for i in range(5):
    if i == 2:
        pass
    print(i)</code></pre>

    <p>Output:</p>

    <pre><code>0
1
2
3
4</code></pre>


    <h3>15. Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Statement</th>
          <th>What it Does</th>
          <th>Example Use</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>break</td>
          <td>Terminates the loop immediately.</td>
          <td>Stop searching after finding a value.</td>
        </tr>

        <tr>
          <td>continue</td>
          <td>Skips the current iteration.</td>
          <td>Skip unwanted or invalid values.</td>
        </tr>

        <tr>
          <td>pass</td>
          <td>Performs no operation.</td>
          <td>Placeholder for code to be implemented later.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Use break to stop a loop when a number reaches 5.',
    'Use continue to print only odd numbers.',
    'Use continue to skip a particular value in a list.',
    'Use pass inside an if statement.',
    'Create an empty function using pass.',
    'Create an empty class using pass.',
    'Write a program that uses break and continue in the same loop.'
  ],

  code: `for number in range(1, 10):

    if number == 3:
        continue

    if number == 7:
        break

    print(number)`
} ,
  {
  key: 'list-comprehension',
  title: 'List Comprehension',
  description: 'List comprehension is a concise way to create a new list from an existing iterable in Python. It allows you to combine a loop and optional condition into a single readable expression.',

  theory: [
    'List comprehension provides a shorter and more readable way to create lists. Instead of writing multiple lines using a for loop, a new list can often be created in a single line.',

    `
    <h3>1. What is List Comprehension?</h3>

    <p>
      List comprehension is a Python feature used to create a new list
      from an existing iterable such as a list, tuple, range, or string.
    </p>

    <p>
      It combines the process of looping through values and optionally
      applying a condition into a compact expression.
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = [number ** 2 for number in numbers]

print(squares)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[1, 4, 9, 16, 25]</code></pre>


    <h3>2. Basic Syntax</h3>

    <pre><code>[expression for item in iterable]</code></pre>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Part</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>expression</td>
          <td>Value that will be added to the new list.</td>
        </tr>

        <tr>
          <td>item</td>
          <td>Current element from the iterable.</td>
        </tr>

        <tr>
          <td>iterable</td>
          <td>Collection or sequence being iterated over.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. List Comprehension vs Normal for Loop</h3>

    <p>
      The same list can be created using a normal for loop or a list
      comprehension.
    </p>

    <p><strong>Using a normal for loop:</strong></p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = []

for number in numbers:
    squares.append(number ** 2)

print(squares)</code></pre>

    <p><strong>Using list comprehension:</strong></p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = [number ** 2 for number in numbers]

print(squares)</code></pre>

    <p>
      Both programs produce the same result, but the list comprehension
      is more compact.
    </p>


    <h3>4. List Comprehension with range()</h3>

    <p>
      The <strong>range()</strong> function can be used with list
      comprehension to generate a sequence of values.
    </p>

    <pre><code>numbers = [number for number in range(1, 6)]

print(numbers)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[1, 2, 3, 4, 5]</code></pre>


    <h3>5. List Comprehension with Condition</h3>

    <p>
      An <strong>if</strong> condition can be added to a list
      comprehension to select only specific values.
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5, 6]

even_numbers = [
    number for number in numbers
    if number % 2 == 0
]

print(even_numbers)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[2, 4, 6]</code></pre>


    <h3>6. List Comprehension with if-else</h3>

    <p>
      An <strong>if-else</strong> expression can be used to generate
      different values depending on a condition.
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

result = [
    "Even" if number % 2 == 0 else "Odd"
    for number in numbers
]

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>['Odd', 'Even', 'Odd', 'Even', 'Odd']</code></pre>


    <h3>7. Converting Values Using List Comprehension</h3>

    <p>
      List comprehension can be used to transform each element of
      an existing list.
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

doubled = [number * 2 for number in numbers]

print(doubled)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[2, 4, 6, 8, 10]</code></pre>


    <h3>8. Working with Strings</h3>

    <p>
      A string is iterable, so list comprehension can be used to
      create a list from its characters.
    </p>

    <pre><code>text = "Python"

letters = [character for character in text]

print(letters)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>['P', 'y', 't', 'h', 'o', 'n']</code></pre>


    <h3>9. Filtering Strings</h3>

    <p>
      Conditions can be used to select specific characters from a string.
    </p>

    <pre><code>text = "Python Programming"

vowels = [
    character
    for character in text.lower()
    if character in "aeiou"
]

print(vowels)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>['o', 'o', 'o', 'a', 'i']</code></pre>


    <h3>10. Nested List Comprehension</h3>

    <p>
      A list comprehension can contain more than one for clause.
      This is useful when working with nested data.
    </p>

    <pre><code>matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
]

values = [
    number
    for row in matrix
    for number in row
]

print(values)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[1, 2, 3, 4, 5, 6]</code></pre>


    <h3>11. Nested List Comprehension for a Matrix</h3>

    <p>
      Nested list comprehension can also be used to create a matrix.
    </p>

    <pre><code>matrix = [
    [number for number in range(1, 4)]
    for row in range(3)
]

print(matrix)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[[1, 2, 3], [1, 2, 3], [1, 2, 3]]</code></pre>


    <h3>12. List Comprehension with Multiple Conditions</h3>

    <p>
      Multiple conditions can be combined using logical operators.
    </p>

    <pre><code>numbers = range(1, 21)

result = [
    number
    for number in numbers
    if number % 2 == 0 and number > 10
]

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[12, 14, 16, 18, 20]</code></pre>


    <h3>13. List Comprehension with Functions</h3>

    <p>
      A function can be called inside a list comprehension to transform
      each value.
    </p>

    <pre><code>def square(number):
    return number ** 2

numbers = [1, 2, 3, 4]

result = [square(number) for number in numbers]

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[1, 4, 9, 16]</code></pre>


    <h3>14. List Comprehension with Dictionaries</h3>

    <p>
      List comprehension can be used to extract values from a dictionary.
    </p>

    <pre><code>student_marks = {
    "Aman": 85,
    "Ravi": 72,
    "Jitesh": 90
}

marks = [
    mark
    for mark in student_marks.values()
    if mark >= 80
]

print(marks)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[85, 90]</code></pre>


    <h3>15. Advantages of List Comprehension</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Concise</td>
          <td>Creates lists using fewer lines of code.</td>
        </tr>

        <tr>
          <td>Readable</td>
          <td>Simple transformations can be expressed clearly.</td>
        </tr>

        <tr>
          <td>Filtering</td>
          <td>Makes it easy to select elements based on conditions.</td>
        </tr>

        <tr>
          <td>Transformation</td>
          <td>Can transform every element of an iterable.</td>
        </tr>

        <tr>
          <td>Flexible</td>
          <td>Supports conditions, functions, and nested loops.</td>
        </tr>
      </tbody>
    </table>


    <h3>16. When to Avoid List Comprehension</h3>

    <p>
      Although list comprehensions are useful, they should not be used
      when the expression becomes too complicated. Complex comprehensions
      can make code difficult to read.
    </p>

    <p><strong>Simple and readable:</strong></p>

    <pre><code>squares = [number ** 2 for number in range(10)]</code></pre>

    <p>
      For complex logic, a normal <strong>for</strong> loop may be
      easier to understand and maintain.
    </p>


    <h3>17. List Comprehension Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Syntax</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>[expression for item in iterable]</td>
          <td>Create a new list from an iterable.</td>
        </tr>

        <tr>
          <td>[expression for item in iterable if condition]</td>
          <td>Create a filtered list.</td>
        </tr>

        <tr>
          <td>[value1 if condition else value2 for item in iterable]</td>
          <td>Create values based on a condition.</td>
        </tr>

        <tr>
          <td>[expression for x in iterable1 for y in iterable2]</td>
          <td>Use nested loops inside a comprehension.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a list containing squares of numbers from 1 to 10.',
    'Create a list containing only even numbers from 1 to 20.',
    'Create a list containing only odd numbers from 1 to 20.',
    'Convert a list of strings into uppercase using list comprehension.',
    'Extract vowels from a string using list comprehension.',
    'Create a list using an if-else expression.',
    'Flatten a nested list using list comprehension.',
    'Create a matrix using nested list comprehension.'
  ],

  code: `numbers = range(1, 11)

squares = [
    number ** 2
    for number in numbers
    if number % 2 == 0
]

print(squares)`
},
  {
  key: 'dict-comprehension',
  title: 'Dictionary Comprehension',
  description: 'Dictionary comprehension is a concise way to create dictionaries in Python. It allows you to generate key-value pairs from an iterable using a single expression, with optional conditions for filtering or transforming data.',

  theory: [
    'Dictionary comprehension provides a short and readable way to create dictionaries using an iterable. It can be used to generate key-value pairs, transform data, and filter elements based on conditions.',

    `
    <h3>1. What is Dictionary Comprehension?</h3>

    <p>
      Dictionary comprehension is a Python feature used to create a new
      dictionary from an iterable such as a list, tuple, range, or another
      dictionary.
    </p>

    <p>
      It allows key-value pairs to be generated in a compact and readable
      form.
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = {
    number: number ** 2
    for number in numbers
}

print(squares)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</code></pre>


    <h3>2. Basic Syntax</h3>

    <pre><code>{key: value for item in iterable}</code></pre>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Part</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>key</td>
          <td>Key of the new dictionary.</td>
        </tr>

        <tr>
          <td>value</td>
          <td>Value associated with the key.</td>
        </tr>

        <tr>
          <td>item</td>
          <td>Current element from the iterable.</td>
        </tr>

        <tr>
          <td>iterable</td>
          <td>Collection or sequence being processed.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Dictionary Comprehension vs Normal for Loop</h3>

    <p>
      A dictionary can be created using a normal for loop or using
      dictionary comprehension.
    </p>

    <p><strong>Using a normal for loop:</strong></p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = {}

for number in numbers:
    squares[number] = number ** 2

print(squares)</code></pre>

    <p><strong>Using dictionary comprehension:</strong></p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = {
    number: number ** 2
    for number in numbers
}

print(squares)</code></pre>

    <p>
      Both approaches produce the same dictionary, but dictionary
      comprehension is more concise.
    </p>


    <h3>4. Creating a Dictionary from range()</h3>

    <p>
      The <strong>range()</strong> function can be used to generate
      keys and values.
    </p>

    <pre><code>numbers = range(1, 6)

result = {
    number: number * 10
    for number in numbers
}

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{1: 10, 2: 20, 3: 30, 4: 40, 5: 50}</code></pre>


    <h3>5. Dictionary Comprehension with a Condition</h3>

    <p>
      An <strong>if</strong> condition can be added to filter elements
      while creating the dictionary.
    </p>

    <pre><code>numbers = range(1, 11)

even_numbers = {
    number: number ** 2
    for number in numbers
    if number % 2 == 0
}

print(even_numbers)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{2: 4, 4: 16, 6: 36, 8: 64, 10: 100}</code></pre>


    <h3>6. Dictionary Comprehension with if-else</h3>

    <p>
      An if-else expression can be used to assign different values
      depending on a condition.
    </p>

    <pre><code>numbers = range(1, 6)

result = {
    number: "Even" if number % 2 == 0 else "Odd"
    for number in numbers
}

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{1: 'Odd', 2: 'Even', 3: 'Odd', 4: 'Even', 5: 'Odd'}</code></pre>


    <h3>7. Creating a Dictionary from Two Lists</h3>

    <p>
      The <strong>zip()</strong> function can be used with dictionary
      comprehension to combine two lists into key-value pairs.
    </p>

    <pre><code>names = ["Aman", "Ravi", "Jitesh"]
marks = [85, 72, 90]

students = {
    name: mark
    for name, mark in zip(names, marks)
}

print(students)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'Aman': 85, 'Ravi': 72, 'Jitesh': 90}</code></pre>


    <h3>8. Filtering a Dictionary</h3>

    <p>
      Dictionary comprehension can be used to create a new dictionary
      containing only the items that satisfy a condition.
    </p>

    <pre><code>students = {
    "Aman": 85,
    "Ravi": 55,
    "Jitesh": 90,
    "Rahul": 40
}

passed = {
    name: marks
    for name, marks in students.items()
    if marks >= 60
}

print(passed)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'Aman': 85, 'Jitesh': 90}</code></pre>


    <h3>9. Transforming Dictionary Values</h3>

    <p>
      Dictionary comprehension can be used to modify the values of
      an existing dictionary.
    </p>

    <pre><code>prices = {
    "Book": 100,
    "Pen": 20,
    "Bag": 500
}

discounted = {
    item: price * 0.9
    for item, price in prices.items()
}

print(discounted)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'Book': 90.0, 'Pen': 18.0, 'Bag': 450.0}</code></pre>


    <h3>10. Transforming Dictionary Keys</h3>

    <p>
      Dictionary comprehension can also be used to transform dictionary
      keys.
    </p>

    <pre><code>students = {
    "aman": 85,
    "ravi": 72,
    "jitesh": 90
}

uppercase_names = {
    name.upper(): marks
    for name, marks in students.items()
}

print(uppercase_names)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'AMAN': 85, 'RAVI': 72, 'JITESH': 90}</code></pre>


    <h3>11. Creating a Dictionary of Squares</h3>

    <p>
      A common use of dictionary comprehension is creating a dictionary
      where numbers are mapped to their squares.
    </p>

    <pre><code>squares = {
    number: number ** 2
    for number in range(1, 6)
}

print(squares)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</code></pre>


    <h3>12. Dictionary Comprehension with Strings</h3>

    <p>
      Strings are iterable, so dictionary comprehension can be used
      to create a dictionary containing characters and their positions.
    </p>

    <pre><code>text = "Python"

positions = {
    index: character
    for index, character in enumerate(text)
}

print(positions)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{0: 'P', 1: 'y', 2: 't', 3: 'h', 4: 'o', 5: 'n'}</code></pre>


    <h3>13. Counting Characters</h3>

    <p>
      Dictionary comprehension can be used in combination with other
      operations to process string data.
    </p>

    <pre><code>text = "Python"

lengths = {
    character: len(character)
    for character in text
}

print(lengths)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'P': 1, 'y': 1, 't': 1, 'h': 1, 'o': 1, 'n': 1}</code></pre>


    <h3>14. Multiple Conditions</h3>

    <p>
      Multiple conditions can be combined using logical operators.
    </p>

    <pre><code>numbers = range(1, 21)

result = {
    number: number ** 2
    for number in numbers
    if number % 2 == 0 and number > 10
}

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{12: 144, 14: 196, 16: 256, 18: 324, 20: 400}</code></pre>


    <h3>15. Nested Dictionary Comprehension</h3>

    <p>
      Dictionary comprehensions can also be nested to create more
      complex dictionary structures.
    </p>

    <pre><code>result = {
    number: {
        "square": number ** 2,
        "cube": number ** 3
    }
    for number in range(1, 4)
}

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{
    1: {'square': 1, 'cube': 1},
    2: {'square': 4, 'cube': 8},
    3: {'square': 9, 'cube': 27}
}</code></pre>


    <h3>16. Advantages of Dictionary Comprehension</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Concise</td>
          <td>Creates dictionaries using fewer lines of code.</td>
        </tr>

        <tr>
          <td>Readable</td>
          <td>Simple transformations can be expressed clearly.</td>
        </tr>

        <tr>
          <td>Filtering</td>
          <td>Allows dictionary items to be selected using conditions.</td>
        </tr>

        <tr>
          <td>Transformation</td>
          <td>Keys and values can be transformed easily.</td>
        </tr>

        <tr>
          <td>Flexible</td>
          <td>Supports conditions, functions, and nested structures.</td>
        </tr>
      </tbody>
    </table>


    <h3>17. When to Avoid Dictionary Comprehension</h3>

    <p>
      Dictionary comprehension is useful for simple operations, but
      very complex comprehensions can reduce readability.
    </p>

    <p>
      When the logic becomes difficult to understand, a normal
      <strong>for</strong> loop is often a better choice.
    </p>

    <pre><code>result = {}

for number in range(1, 6):
    if number % 2 == 0:
        result[number] = number ** 2

print(result)</code></pre>


    <h3>18. Dictionary Comprehension Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Syntax</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{key: value for item in iterable}</td>
          <td>Create a dictionary from an iterable.</td>
        </tr>

        <tr>
          <td>{key: value for item in iterable if condition}</td>
          <td>Create a filtered dictionary.</td>
        </tr>

        <tr>
          <td>{key: value1 if condition else value2 for item in iterable}</td>
          <td>Create values based on a condition.</td>
        </tr>

        <tr>
          <td>{key: value for key, value in dictionary.items()}</td>
          <td>Transform an existing dictionary.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a dictionary containing numbers and their squares from 1 to 10.',
    'Create a dictionary containing only even numbers and their squares.',
    'Create a dictionary from two lists using zip().',
    'Filter a dictionary to keep only values greater than 50.',
    'Convert all dictionary keys to uppercase.',
    'Increase every value in a dictionary by 10%.',
    'Create a dictionary containing numbers, their squares, and cubes.',
    'Use dictionary comprehension with multiple conditions.'
  ],

  code: `numbers = range(1, 11)

squares = {
    number: number ** 2
    for number in numbers
    if number % 2 == 0
}

print(squares)`
},
  {
  key: 'lambda-functions',
  title: 'Lambda Functions',
  description: 'A lambda function is a small anonymous function in Python that can take any number of arguments but contains only one expression. Lambda functions are commonly used for short operations and as arguments to functions such as map(), filter(), and sorted().',

  theory: [
    'Lambda functions are small anonymous functions defined using the lambda keyword. They are useful when a simple function is required for a short period of time without defining a regular function using def.',

    `
    <h3>1. What is a Lambda Function?</h3>

    <p>
      A lambda function is a small anonymous function that is created
      using the <strong>lambda</strong> keyword.
    </p>

    <p>
      Unlike a normal function, a lambda function does not require a
      function name and usually contains a single expression.
    </p>

    <pre><code>square = lambda x: x ** 2

print(square(5))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>25</code></pre>


    <h3>2. Syntax of Lambda Function</h3>

    <pre><code>lambda arguments: expression</code></pre>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Part</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>lambda</td>
          <td>Keyword used to create a lambda function.</td>
        </tr>

        <tr>
          <td>arguments</td>
          <td>Input values accepted by the function.</td>
        </tr>

        <tr>
          <td>expression</td>
          <td>Single expression whose result is returned.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Lambda Function with One Argument</h3>

    <p>
      A lambda function can accept a single argument.
    </p>

    <pre><code>double = lambda x: x * 2

print(double(10))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>20</code></pre>


    <h3>4. Lambda Function with Multiple Arguments</h3>

    <p>
      Lambda functions can accept multiple arguments.
    </p>

    <pre><code>add = lambda a, b: a + b

print(add(10, 20))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>30</code></pre>


    <h3>5. Lambda Function with Three Arguments</h3>

    <pre><code>calculate = lambda a, b, c: a + b + c

print(calculate(10, 20, 30))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>60</code></pre>


    <h3>6. Lambda vs Normal Function</h3>

    <p>
      The same operation can be performed using a normal function
      or a lambda function.
    </p>

    <p><strong>Normal Function:</strong></p>

    <pre><code>def square(x):
    return x ** 2

print(square(5))</code></pre>

    <p><strong>Lambda Function:</strong></p>

    <pre><code>square = lambda x: x ** 2

print(square(5))</code></pre>

    <p>
      Both produce the same result, but the lambda function is more
      concise for a simple operation.
    </p>


    <h3>7. Lambda Function with if-else</h3>

    <p>
      A lambda function can contain a conditional expression.
    </p>

    <pre><code>check = lambda x: "Even" if x % 2 == 0 else "Odd"

print(check(10))
print(check(7))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Even
Odd</code></pre>


    <h3>8. Lambda with map()</h3>

    <p>
      The <strong>map()</strong> function applies a function to every
      item in an iterable. Lambda functions are commonly used with map().
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

squares = list(
    map(lambda x: x ** 2, numbers)
)

print(squares)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[1, 4, 9, 16, 25]</code></pre>


    <h3>9. Lambda with filter()</h3>

    <p>
      The <strong>filter()</strong> function is used to select elements
      that satisfy a condition.
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5, 6]

even_numbers = list(
    filter(lambda x: x % 2 == 0, numbers)
)

print(even_numbers)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[2, 4, 6]</code></pre>


    <h3>10. Lambda with sorted()</h3>

    <p>
      Lambda functions can be used with <strong>sorted()</strong> to
      specify the value according to which items should be sorted.
    </p>

    <pre><code>students = [
    ("Aman", 85),
    ("Ravi", 72),
    ("Jitesh", 90)
]

students_sorted = sorted(
    students,
    key=lambda student: student[1]
)

print(students_sorted)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[('Ravi', 72), ('Aman', 85), ('Jitesh', 90)]</code></pre>


    <h3>11. Lambda with max() and min()</h3>

    <p>
      Lambda functions can also be used to specify which value should
      be considered when finding the maximum or minimum item.
    </p>

    <pre><code>students = [
    ("Aman", 85),
    ("Ravi", 72),
    ("Jitesh", 90)
]

highest = max(
    students,
    key=lambda student: student[1]
)

lowest = min(
    students,
    key=lambda student: student[1]
)

print(highest)
print(lowest)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>('Jitesh', 90)
('Ravi', 72)</code></pre>


    <h3>12. Lambda Function Without a Variable</h3>

    <p>
      A lambda function can be called immediately without assigning it
      to a variable.
    </p>

    <pre><code>result = (lambda x: x * 2)(10)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>20</code></pre>


    <h3>13. Lambda with String Operations</h3>

    <p>
      Lambda functions can also perform simple operations on strings.
    </p>

    <pre><code>upper = lambda text: text.upper()

print(upper("python"))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>PYTHON</code></pre>


    <h3>14. Lambda with Dictionary Data</h3>

    <p>
      Lambda functions are useful when working with dictionaries,
      especially when sorting items according to their keys or values.
    </p>

    <pre><code>students = {
    "Aman": 85,
    "Ravi": 72,
    "Jitesh": 90
}

result = sorted(
    students.items(),
    key=lambda item: item[1]
)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[('Ravi', 72), ('Aman', 85), ('Jitesh', 90)]</code></pre>


    <h3>15. Lambda Functions and Return Value</h3>

    <p>
      A lambda function automatically returns the result of its
      expression. The <strong>return</strong> keyword is not written
      explicitly.
    </p>

    <pre><code>multiply = lambda a, b: a * b

result = multiply(5, 4)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>20</code></pre>


    <h3>16. Advantages of Lambda Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Concise</td>
          <td>Allows simple functions to be written in one line.</td>
        </tr>

        <tr>
          <td>Anonymous</td>
          <td>Does not require a function name.</td>
        </tr>

        <tr>
          <td>Useful with map()</td>
          <td>Can transform elements of an iterable.</td>
        </tr>

        <tr>
          <td>Useful with filter()</td>
          <td>Can select elements based on a condition.</td>
        </tr>

        <tr>
          <td>Useful with sorted()</td>
          <td>Can specify custom sorting logic.</td>
        </tr>
      </tbody>
    </table>


    <h3>17. Limitations of Lambda Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Limitation</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Single Expression</td>
          <td>A lambda function contains only one expression.</td>
        </tr>

        <tr>
          <td>Readability</td>
          <td>Complex lambda expressions can be difficult to understand.</td>
        </tr>

        <tr>
          <td>No Statements</td>
          <td>It cannot contain normal statements such as assignments or loops.</td>
        </tr>

        <tr>
          <td>Limited Use</td>
          <td>Regular def functions are better for large or complex logic.</td>
        </tr>
      </tbody>
    </table>


    <h3>18. When to Use Lambda Functions</h3>

    <p>
      Lambda functions are best suited for small operations that are
      needed temporarily, especially when working with functions such
      as <strong>map()</strong>, <strong>filter()</strong>,
      <strong>sorted()</strong>, <strong>min()</strong>, and
      <strong>max()</strong>.
    </p>

    <pre><code>numbers = [5, 2, 8, 1, 9]

result = sorted(
    numbers,
    key=lambda x: x
)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[1, 2, 5, 8, 9]</code></pre>


    <h3>19. Lambda Function Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Keyword</td>
          <td>lambda</td>
        </tr>

        <tr>
          <td>Arguments</td>
          <td>Can accept one or more arguments.</td>
        </tr>

        <tr>
          <td>Expression</td>
          <td>Contains a single expression.</td>
        </tr>

        <tr>
          <td>Return</td>
          <td>Expression result is returned automatically.</td>
        </tr>

        <tr>
          <td>Common Uses</td>
          <td>map(), filter(), sorted(), min(), max()</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a lambda function to calculate the square of a number.',
    'Create a lambda function to add two numbers.',
    'Create a lambda function to check whether a number is even or odd.',
    'Use lambda with map() to calculate squares of numbers.',
    'Use lambda with filter() to select even numbers.',
    'Use lambda with sorted() to sort a list of tuples by the second value.',
    'Use lambda with max() to find the student with the highest marks.'
  ],

  code: `numbers = [1, 2, 3, 4, 5]

squares = list(
    map(lambda x: x ** 2, numbers)
)

even_numbers = list(
    filter(lambda x: x % 2 == 0, numbers)
)

print("Squares:", squares)
print("Even Numbers:", even_numbers)`
},
  {
  key: 'recursion',
  title: 'Recursion',
  description: 'Recursion is a programming technique in which a function calls itself to solve a problem. A recursive function must have a base case to stop the recursive calls and prevent infinite execution.',

  theory: [
    'Recursion is a technique where a function calls itself with a smaller or simpler version of the same problem. It is commonly used for problems that can be divided into smaller subproblems.',

    `
    <h3>1. What is Recursion?</h3>

    <p>
      Recursion is a process in which a function calls itself during
      its execution. The function continues calling itself until a
      specific stopping condition is reached.
    </p>

    <p>
      A recursive function normally contains two important parts:
      <strong>base case</strong> and <strong>recursive case</strong>.
    </p>


    <h3>2. Parts of a Recursive Function</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Part</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Base Case</td>
          <td>Condition that stops the recursion.</td>
        </tr>

        <tr>
          <td>Recursive Case</td>
          <td>Part where the function calls itself.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Basic Example of Recursion</h3>

    <p>
      The following function prints numbers from n down to 1 using
      recursion.
    </p>

    <pre><code>def count_down(n):
    if n == 0:
        return

    print(n)
    count_down(n - 1)

count_down(5)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>5
4
3
2
1</code></pre>


    <h3>4. How Recursion Works</h3>

    <p>
      When the function calls itself, Python stores the current function
      call in memory and starts the next function call. When the base
      case is reached, the functions return one by one.
    </p>

    <pre><code>count_down(3)
    ↓
count_down(2)
    ↓
count_down(1)
    ↓
count_down(0)
    ↓
Stop</code></pre>


    <h3>5. Factorial Using Recursion</h3>

    <p>
      Factorial is a common example of recursion. The factorial of a
      number n is calculated as:
    </p>

    <pre><code>n! = n × (n - 1) × (n - 2) × ... × 1</code></pre>

    <p>
      For example, 5! = 5 × 4 × 3 × 2 × 1 = 120.
    </p>

    <pre><code>def factorial(n):
    if n == 0 or n == 1:
        return 1

    return n * factorial(n - 1)

print(factorial(5))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>120</code></pre>


    <h3>6. Factorial Execution</h3>

    <pre><code>factorial(5)
= 5 × factorial(4)
= 5 × 4 × factorial(3)
= 5 × 4 × 3 × factorial(2)
= 5 × 4 × 3 × 2 × factorial(1)
= 120</code></pre>


    <h3>7. Sum of Natural Numbers Using Recursion</h3>

    <p>
      Recursion can be used to calculate the sum of natural numbers.
    </p>

    <pre><code>def sum_numbers(n):
    if n == 0:
        return 0

    return n + sum_numbers(n - 1)

print(sum_numbers(5))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>15</code></pre>


    <h3>8. Fibonacci Series Using Recursion</h3>

    <p>
      The Fibonacci sequence is a sequence in which each number is the
      sum of the previous two numbers.
    </p>

    <pre><code>def fibonacci(n):
    if n <= 1:
        return n

    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(7):
    print(fibonacci(i))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>0
1
1
2
3
5
8</code></pre>


    <h3>9. Recursive Function to Calculate Power</h3>

    <p>
      A recursive function can also be used to calculate the power of
      a number.
    </p>

    <pre><code>def power(base, exponent):
    if exponent == 0:
        return 1

    return base * power(base, exponent - 1)

print(power(2, 4))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>16</code></pre>


    <h3>10. Recursion with Strings</h3>

    <p>
      Recursion can be used to reverse a string by processing one
      character at a time.
    </p>

    <pre><code>def reverse_string(text):
    if text == "":
        return ""

    return reverse_string(text[1:]) + text[0]

print(reverse_string("Python"))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>nohtyP</code></pre>


    <h3>11. Recursive Countdown</h3>

    <pre><code>def countdown(n):
    if n <= 0:
        print("Done!")
        return

    print(n)
    countdown(n - 1)

countdown(5)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>5
4
3
2
1
Done!</code></pre>


    <h3>12. Base Case</h3>

    <p>
      The base case is extremely important in recursion. It tells the
      function when to stop calling itself.
    </p>

    <pre><code>def example(n):
    if n == 0:
        return

    print(n)
    example(n - 1)</code></pre>

    <p>
      Here, <strong>n == 0</strong> is the base case.
    </p>


    <h3>13. What Happens Without a Base Case?</h3>

    <p>
      If a recursive function does not have a proper stopping condition,
      it may continue calling itself indefinitely. Python eventually
      raises a <strong>RecursionError</strong>.
    </p>

    <pre><code>def infinite_recursion():
    infinite_recursion()

# infinite_recursion()</code></pre>

    <p>
      This function should not be executed because it has no base case.
    </p>


    <h3>14. Recursion and the Call Stack</h3>

    <p>
      Each recursive function call is stored on the call stack. When
      the base case is reached, the calls return in reverse order.
    </p>

    <pre><code>factorial(3)
    ↓
factorial(2)
    ↓
factorial(1)
    ↓
Return 1
    ↑
Return 2
    ↑
Return 6</code></pre>


    <h3>15. Recursion vs Loop</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Recursion</th>
          <th>Loop</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Approach</td>
          <td>Function calls itself.</td>
          <td>Repeats statements using for or while.</td>
        </tr>

        <tr>
          <td>Stopping Condition</td>
          <td>Base case.</td>
          <td>Loop condition.</td>
        </tr>

        <tr>
          <td>Memory</td>
          <td>Uses call stack memory.</td>
          <td>Usually uses less memory.</td>
        </tr>

        <tr>
          <td>Code</td>
          <td>Can be simpler for recursive problems.</td>
          <td>Often simpler for repetitive tasks.</td>
        </tr>

        <tr>
          <td>Common Uses</td>
          <td>Trees, graphs, factorial, divide-and-conquer.</td>
          <td>Iteration and repeated operations.</td>
        </tr>
      </tbody>
    </table>


    <h3>16. Advantages of Recursion</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Simple Logic</td>
          <td>Can make some complex problems easier to express.</td>
        </tr>

        <tr>
          <td>Tree Problems</td>
          <td>Very useful for traversing tree structures.</td>
        </tr>

        <tr>
          <td>Divide and Conquer</td>
          <td>Useful for algorithms that divide problems into smaller parts.</td>
        </tr>

        <tr>
          <td>Readable</td>
          <td>Some recursive algorithms are easier to understand.</td>
        </tr>
      </tbody>
    </table>


    <h3>17. Disadvantages of Recursion</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Disadvantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Memory Usage</td>
          <td>Each function call requires stack memory.</td>
        </tr>

        <tr>
          <td>RecursionError</td>
          <td>Too many recursive calls can exceed Python's recursion limit.</td>
        </tr>

        <tr>
          <td>Performance</td>
          <td>Some recursive solutions can be slower than iterative solutions.</td>
        </tr>

        <tr>
          <td>Complexity</td>
          <td>Incorrect recursive logic can be difficult to debug.</td>
        </tr>
      </tbody>
    </table>


    <h3>18. Common Applications of Recursion</h3>

    <ul>
      <li>Factorial calculation</li>
      <li>Fibonacci sequence</li>
      <li>Tree traversal</li>
      <li>Graph traversal</li>
      <li>Searching algorithms</li>
      <li>Sorting algorithms</li>
      <li>Divide-and-conquer algorithms</li>
      <li>Backtracking problems</li>
    </ul>


    <h3>19. Recursion Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Recursion</td>
          <td>A function calling itself.</td>
        </tr>

        <tr>
          <td>Base Case</td>
          <td>Condition that stops recursion.</td>
        </tr>

        <tr>
          <td>Recursive Case</td>
          <td>Part that calls the function again.</td>
        </tr>

        <tr>
          <td>Call Stack</td>
          <td>Memory structure used to store active function calls.</td>
        </tr>

        <tr>
          <td>RecursionError</td>
          <td>Error caused by exceeding Python's recursion limit.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Write a recursive function to print numbers from 1 to 10.',
    'Write a recursive function to calculate the factorial of a number.',
    'Calculate the sum of natural numbers using recursion.',
    'Create a recursive function to calculate the power of a number.',
    'Generate Fibonacci numbers using recursion.',
    'Write a recursive function to reverse a string.',
    'Create a recursive function to find the sum of digits of a number.'
  ],

  code: `def factorial(n):
    if n == 0 or n == 1:
        return 1

    return n * factorial(n - 1)

number = 5

print("Factorial:", factorial(number))`
},
  {
  key: 'scope',
  title: 'Scope',
  description: 'Scope determines where a variable can be accessed in a Python program. Python provides different levels of scope, including local, enclosing, global, and built-in scope.',

  theory: [
    'Scope defines the region of a Python program where a variable or name is accessible. Python follows the LEGB rule to search for variables: Local, Enclosing, Global, and Built-in.',

    `
    <h3>1. What is Scope?</h3>

    <p>
      Scope refers to the area of a Python program where a variable,
      function, or other name can be accessed.
    </p>

    <p>
      A variable created inside a function may not be accessible outside
      that function, while a variable created outside functions can
      generally be accessed from different parts of the program.
    </p>

    <pre><code>name = "Python"

def show_name():
    print(name)

show_name()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Python</code></pre>


    <h3>2. Types of Scope in Python</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Scope</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Local Scope</td>
          <td>Names created inside a function.</td>
        </tr>

        <tr>
          <td>Enclosing Scope</td>
          <td>Names in an outer function when working with nested functions.</td>
        </tr>

        <tr>
          <td>Global Scope</td>
          <td>Names created at the top level of a Python program or module.</td>
        </tr>

        <tr>
          <td>Built-in Scope</td>
          <td>Names provided automatically by Python, such as len(), print(), and type().</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Local Scope</h3>

    <p>
      A variable created inside a function has local scope. It can
      normally be accessed only inside that function.
    </p>

    <pre><code>def display():
    message = "Hello Python"
    print(message)

display()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello Python</code></pre>

    <p>
      Here, <strong>message</strong> is a local variable because it was
      created inside the function.
    </p>


    <h3>4. Local Variable Cannot Normally Be Accessed Outside</h3>

    <pre><code>def display():
    message = "Hello"

display()

# print(message)</code></pre>

    <p>
      The variable <strong>message</strong> belongs to the local scope
      of the function and is not normally available outside it.
    </p>


    <h3>5. Global Scope</h3>

    <p>
      A variable created outside all functions has global scope. It can
      generally be accessed from functions within the same module.
    </p>

    <pre><code>name = "Jitesh"

def display():
    print(name)

display()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh</code></pre>


    <h3>6. Local and Global Variables with the Same Name</h3>

    <p>
      A local variable can have the same name as a global variable.
      Inside the function, Python uses the local variable.
    </p>

    <pre><code>name = "Global"

def display():
    name = "Local"
    print(name)

display()
print(name)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Local
Global</code></pre>


    <h3>7. Using the global Keyword</h3>

    <p>
      The <strong>global</strong> keyword is used inside a function when
      you want to modify a variable that belongs to the global scope.
    </p>

    <pre><code>count = 10

def update_count():
    global count
    count = 20

update_count()

print(count)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>20</code></pre>


    <h3>8. Why Use global?</h3>

    <p>
      Without the <strong>global</strong> keyword, assigning a value to
      a variable inside a function creates or refers to a local variable
      rather than modifying the global variable.
    </p>

    <pre><code>count = 10

def update():
    global count
    count += 5

update()

print(count)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>15</code></pre>


    <h3>9. Enclosing Scope</h3>

    <p>
      Enclosing scope occurs when one function is defined inside another
      function. The inner function can access variables from the outer
      function.
    </p>

    <pre><code>def outer():
    message = "Hello"

    def inner():
        print(message)

    inner()

outer()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello</code></pre>

    <p>
      Here, <strong>message</strong> belongs to the enclosing scope of
      the <strong>inner()</strong> function.
    </p>


    <h3>10. nonlocal Keyword</h3>

    <p>
      The <strong>nonlocal</strong> keyword is used inside a nested
      function to modify a variable from its enclosing function.
    </p>

    <pre><code>def outer():
    count = 10

    def inner():
        nonlocal count
        count += 5

    inner()

    print(count)

outer()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>15</code></pre>


    <h3>11. Built-in Scope</h3>

    <p>
      Built-in scope contains names that are automatically available
      in Python. Examples include <strong>print()</strong>,
      <strong>len()</strong>, <strong>type()</strong>,
      <strong>sum()</strong>, and <strong>range()</strong>.
    </p>

    <pre><code>numbers = [10, 20, 30]

print(len(numbers))
print(sum(numbers))
print(type(numbers))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>3
60
&lt;class 'list'&gt;</code></pre>


    <h3>12. LEGB Rule</h3>

    <p>
      Python follows the <strong>LEGB</strong> rule when looking for
      a variable or name.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Letter</th>
          <th>Scope</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>L</td>
          <td>Local</td>
          <td>Current function.</td>
        </tr>

        <tr>
          <td>E</td>
          <td>Enclosing</td>
          <td>Outer function in nested functions.</td>
        </tr>

        <tr>
          <td>G</td>
          <td>Global</td>
          <td>Top-level module scope.</td>
        </tr>

        <tr>
          <td>B</td>
          <td>Built-in</td>
          <td>Names provided by Python.</td>
        </tr>
      </tbody>
    </table>


    <h3>13. LEGB Example</h3>

    <pre><code>x = "Global"

def outer():
    x = "Enclosing"

    def inner():
        x = "Local"
        print(x)

    inner()

outer()</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Local</code></pre>

    <p>
      Python first searches for <strong>x</strong> in the local scope.
      If it is not found, it checks enclosing, global, and then
      built-in scopes.
    </p>


    <h3>14. Scope in Loops</h3>

    <p>
      Unlike functions, loops such as <strong>for</strong> and
      <strong>while</strong> do not create a separate local scope
      in the same way that functions do.
    </p>

    <pre><code>for number in range(3):
    value = number

print(value)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>2</code></pre>


    <h3>15. Scope in Functions</h3>

    <p>
      Functions create their own local scope. Variables created inside
      a function are separate from variables with the same name outside
      the function.
    </p>

    <pre><code>x = 100

def test():
    x = 50
    print("Inside:", x)

test()

print("Outside:", x)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Inside: 50
Outside: 100</code></pre>


    <h3>16. Global Keyword vs nonlocal Keyword</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Keyword</th>
          <th>Used For</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>global</td>
          <td>Modifying a variable from the global scope.</td>
        </tr>

        <tr>
          <td>nonlocal</td>
          <td>Modifying a variable from an enclosing function.</td>
        </tr>
      </tbody>
    </table>


    <h3>17. Why Scope is Important</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Benefit</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Data Protection</td>
          <td>Local variables prevent unnecessary access from other parts of the program.</td>
        </tr>

        <tr>
          <td>Code Organization</td>
          <td>Variables can be limited to the area where they are needed.</td>
        </tr>

        <tr>
          <td>Avoid Conflicts</td>
          <td>Different functions can use the same variable names independently.</td>
        </tr>

        <tr>
          <td>Maintainability</td>
          <td>Proper scope makes programs easier to understand and maintain.</td>
        </tr>
      </tbody>
    </table>


    <h3>18. Scope Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Scope</th>
          <th>Where It Exists</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Local</td>
          <td>Inside a function.</td>
          <td>Variable created inside a function.</td>
        </tr>

        <tr>
          <td>Enclosing</td>
          <td>Outer function of a nested function.</td>
          <td>Variable in outer().</td>
        </tr>

        <tr>
          <td>Global</td>
          <td>Top level of a module.</td>
          <td>Variable outside functions.</td>
        </tr>

        <tr>
          <td>Built-in</td>
          <td>Python's built-in namespace.</td>
          <td>print(), len(), type().</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a local variable inside a function and print it.',
    'Create a global variable and access it inside a function.',
    'Create local and global variables with the same name and observe the output.',
    'Use the global keyword to modify a global variable.',
    'Create a nested function and access an enclosing variable.',
    'Use the nonlocal keyword to modify an enclosing variable.',
    'Write a program that demonstrates the LEGB rule.'
  ],

  code: `x = "Global"

def outer():
    x = "Enclosing"

    def inner():
        x = "Local"
        print("Local:", x)

    inner()

outer()

print("Global:", x)`
},
  {
  key: 'packages',
  title: 'Packages',
  description: 'A package is a way of organizing related Python modules into a directory structure. Packages help developers organize large projects, reuse code, and manage related modules efficiently.',

  theory: [
    'A Python package is a directory that contains related modules and subpackages. Packages make large Python projects easier to organize, maintain, and reuse.',

    `
    <h3>1. What is a Package?</h3>

    <p>
      A <strong>package</strong> is a collection of related Python modules
      organized inside a directory. A module is usually a single Python
      file, while a package can contain multiple modules and subpackages.
    </p>

    <p>
      Packages are useful when a project becomes large and its code needs
      to be divided into multiple logical sections.
    </p>

    <pre><code>my_package/
    __init__.py
    calculator.py
    message.py</code></pre>


    <h3>2. Module vs Package</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Module</th>
          <th>Package</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Meaning</td>
          <td>A single Python file containing code.</td>
          <td>A directory containing related modules.</td>
        </tr>

        <tr>
          <td>Extension</td>
          <td>.py</td>
          <td>Directory containing Python modules.</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>calculator.py</td>
          <td>my_package/</td>
        </tr>

        <tr>
          <td>Purpose</td>
          <td>Organize individual code.</td>
          <td>Organize multiple related modules.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Package Structure</h3>

    <p>
      A simple Python package can have the following structure:
    </p>

    <pre><code>project/
│
├── main.py
│
└── my_package/
    ├── __init__.py
    ├── calculator.py
    └── message.py</code></pre>

    <p>
      Here, <strong>my_package</strong> contains two modules:
      <strong>calculator.py</strong> and <strong>message.py</strong>.
    </p>


    <h3>4. The __init__.py File</h3>

    <p>
      The <strong>__init__.py</strong> file is commonly used inside
      Python packages to initialize the package and define package-level
      behavior.
    </p>

    <pre><code>my_package/
    __init__.py
    calculator.py
    message.py</code></pre>

    <p>
      In modern Python, some directories can also work as packages
      without an <strong>__init__.py</strong> file through namespace
      packages. However, using <strong>__init__.py</strong> remains
      common and useful for regular packages.
    </p>


    <h3>5. Creating a Simple Package</h3>

    <p>
      Suppose we create a package named <strong>calculator</strong>.
    </p>

    <pre><code>calculator/
    __init__.py
    operations.py</code></pre>

    <p>
      Inside <strong>operations.py</strong>:
    </p>

    <pre><code>def add(a, b):
    return a + b

def subtract(a, b):
    return a - b</code></pre>


    <h3>6. Importing a Module from a Package</h3>

    <p>
      A module inside a package can be imported using dot notation.
    </p>

    <pre><code>from calculator import operations

print(operations.add(10, 5))
print(operations.subtract(10, 5))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>15
5</code></pre>


    <h3>7. Importing Specific Functions</h3>

    <p>
      Specific functions can be imported directly from a module.
    </p>

    <pre><code>from calculator.operations import add

print(add(10, 20))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>30</code></pre>


    <h3>8. Using an Alias</h3>

    <p>
      The <strong>as</strong> keyword can be used to give an imported
      module or package a shorter name.
    </p>

    <pre><code>import calculator.operations as op

print(op.add(5, 10))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>15</code></pre>


    <h3>9. Subpackages</h3>

    <p>
      A package can contain another package. Such a package is called
      a <strong>subpackage</strong>.
    </p>

    <pre><code>project/
│
├── main.py
│
└── school/
    ├── __init__.py
    └── students/
        ├── __init__.py
        └── student.py</code></pre>

    <p>
      Here, <strong>students</strong> is a subpackage of the
      <strong>school</strong> package.
    </p>


    <h3>10. Importing from a Subpackage</h3>

    <pre><code>from school.students import student

student.show_student()</code></pre>

    <p>
      This allows large projects to organize code into multiple levels.
    </p>


    <h3>11. Using a Package in a Project</h3>

    <p>
      Packages are especially useful for larger applications where
      different parts of the program perform different tasks.
    </p>

    <pre><code>my_project/
│
├── main.py
│
├── users/
│   ├── __init__.py
│   ├── login.py
│   └── profile.py
│
└── database/
    ├── __init__.py
    └── connection.py</code></pre>

    <p>
      This structure separates user-related code from database-related
      code.
    </p>


    <h3>12. Package vs Library</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Term</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Module</td>
          <td>A single Python file containing code.</td>
        </tr>

        <tr>
          <td>Package</td>
          <td>A collection of related Python modules.</td>
        </tr>

        <tr>
          <td>Library</td>
          <td>A collection of reusable code that may contain modules and packages.</td>
        </tr>
      </tbody>
    </table>


    <h3>13. Installing Packages with pip</h3>

    <p>
      Python packages can be installed from the Python Package Index
      using <strong>pip</strong>.
    </p>

    <pre><code>pip install requests</code></pre>

    <p>
      After installation, the package can be imported into a Python
      program.
    </p>

    <pre><code>import requests</code></pre>


    <h3>14. Checking Installed Packages</h3>

    <p>
      The following command displays packages installed in the current
      Python environment.
    </p>

    <pre><code>pip list</code></pre>


    <h3>15. Installing a Specific Package Version</h3>

    <p>
      A particular version of a package can be installed by specifying
      the version number.
    </p>

    <pre><code>pip install requests==2.32.0</code></pre>

    <p>
      This is useful when a project requires a specific package version.
    </p>


    <h3>16. requirements.txt</h3>

    <p>
      A project can store its external package dependencies in a
      <strong>requirements.txt</strong> file.
    </p>

    <pre><code>requests
numpy
pandas</code></pre>

    <p>
      All packages listed in the file can be installed using:
    </p>

    <pre><code>pip install -r requirements.txt</code></pre>


    <h3>17. Standard Library Packages and Modules</h3>

    <p>
      Python includes a large standard library containing modules and
      packages that can be used without installing them separately.
    </p>

    <pre><code>import math

print(math.sqrt(25))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>5.0</code></pre>


    <h3>18. External Packages</h3>

    <p>
      External packages are created by the Python community and can
      be installed using package-management tools such as pip.
    </p>

    <p>
      Examples include packages used for web development, data analysis,
      machine learning, image processing, and networking.
    </p>


    <h3>19. Advantages of Packages</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Organization</td>
          <td>Groups related modules into a structured directory.</td>
        </tr>

        <tr>
          <td>Reusability</td>
          <td>Allows code to be reused across different programs.</td>
        </tr>

        <tr>
          <td>Maintainability</td>
          <td>Makes large projects easier to manage and maintain.</td>
        </tr>

        <tr>
          <td>Namespace Management</td>
          <td>Helps avoid naming conflicts between modules.</td>
        </tr>

        <tr>
          <td>Scalability</td>
          <td>Allows applications to grow while keeping code organized.</td>
        </tr>
      </tbody>
    </table>


    <h3>20. Package Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Package</td>
          <td>Directory containing related Python modules.</td>
        </tr>

        <tr>
          <td>Module</td>
          <td>A Python file containing reusable code.</td>
        </tr>

        <tr>
          <td>__init__.py</td>
          <td>Commonly used to initialize a regular Python package.</td>
        </tr>

        <tr>
          <td>Subpackage</td>
          <td>A package contained inside another package.</td>
        </tr>

        <tr>
          <td>pip</td>
          <td>Tool commonly used to install Python packages.</td>
        </tr>

        <tr>
          <td>requirements.txt</td>
          <td>File used to list project dependencies.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a Python package containing a calculator module.',
    'Create separate modules for addition and subtraction.',
    'Import a module from your package into another Python file.',
    'Import a specific function from a package module.',
    'Create a package containing a subpackage.',
    'Create a requirements.txt file containing project dependencies.',
    'Install a package using pip and import it into a Python program.'
  ],

  code: `# Package structure:
#
# my_package/
#     __init__.py
#     calculator.py
#
# calculator.py:
#
# def add(a, b):
#     return a + b
#
# main.py:

from my_package.calculator import add

result = add(10, 20)

print("Result:", result)`
},
  {
  key: 'built-in-functions',
  title: 'Built-in Functions',
  description: 'Python provides many built-in functions that are available automatically without importing any module. These functions are used for common tasks such as input, output, type conversion, calculations, iteration, and working with collections.',

  theory: [
    'Built-in functions are predefined functions provided by Python. They can be used directly in a program without defining them or importing a separate module.',

    `
    <h3>1. What are Built-in Functions?</h3>

    <p>
      Built-in functions are functions that are already provided by
      Python. They are available automatically whenever a Python program
      runs.
    </p>

    <p>
      Some commonly used built-in functions are
      <strong>print()</strong>, <strong>input()</strong>,
      <strong>len()</strong>, <strong>type()</strong>,
      <strong>int()</strong>, <strong>str()</strong>,
      <strong>sum()</strong>, <strong>max()</strong>, and
      <strong>min()</strong>.
    </p>

    <pre><code>name = "Python"

print(name)
print(len(name))
print(type(name))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Python
6
&lt;class 'str'&gt;</code></pre>


    <h3>2. Common Built-in Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>print()</td>
          <td>Displays output on the screen.</td>
        </tr>

        <tr>
          <td>input()</td>
          <td>Reads input from the user.</td>
        </tr>

        <tr>
          <td>len()</td>
          <td>Returns the number of items in an object.</td>
        </tr>

        <tr>
          <td>type()</td>
          <td>Returns the type of an object.</td>
        </tr>

        <tr>
          <td>int()</td>
          <td>Converts a value to an integer when possible.</td>
        </tr>

        <tr>
          <td>float()</td>
          <td>Converts a value to a floating-point number when possible.</td>
        </tr>

        <tr>
          <td>str()</td>
          <td>Converts a value to a string.</td>
        </tr>

        <tr>
          <td>sum()</td>
          <td>Returns the sum of items in an iterable.</td>
        </tr>

        <tr>
          <td>max()</td>
          <td>Returns the largest item.</td>
        </tr>

        <tr>
          <td>min()</td>
          <td>Returns the smallest item.</td>
        </tr>

        <tr>
          <td>abs()</td>
          <td>Returns the absolute value of a number.</td>
        </tr>

        <tr>
          <td>round()</td>
          <td>Rounds a number to a specified number of digits.</td>
        </tr>

        <tr>
          <td>range()</td>
          <td>Generates a sequence of numbers.</td>
        </tr>

        <tr>
          <td>enumerate()</td>
          <td>Returns index-value pairs while iterating.</td>
        </tr>

        <tr>
          <td>zip()</td>
          <td>Combines elements from multiple iterables.</td>
        </tr>

        <tr>
          <td>sorted()</td>
          <td>Returns a sorted list from an iterable.</td>
        </tr>

        <tr>
          <td>reversed()</td>
          <td>Returns an iterator that accesses elements in reverse order.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. print()</h3>

    <p>
      The <strong>print()</strong> function is used to display text,
      values, or results on the screen.
    </p>

    <pre><code>name = "Jitesh"
age = 20

print(name)
print(age)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh
20</code></pre>


    <h3>4. input()</h3>

    <p>
      The <strong>input()</strong> function is used to receive data
      from the user. The value returned by input() is normally a string.
    </p>

    <pre><code>name = input("Enter your name: ")

print("Hello", name)</code></pre>


    <h3>5. len()</h3>

    <p>
      The <strong>len()</strong> function returns the number of items
      in a sequence or collection.
    </p>

    <pre><code>name = "Python"
numbers = [10, 20, 30, 40]

print(len(name))
print(len(numbers))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>6
4</code></pre>


    <h3>6. type()</h3>

    <p>
      The <strong>type()</strong> function returns the type of an object.
    </p>

    <pre><code>value = 25
name = "Python"

print(type(value))
print(type(name))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>&lt;class 'int'&gt;
&lt;class 'str'&gt;</code></pre>


    <h3>7. int(), float(), and str()</h3>

    <p>
      These functions are commonly used for type conversion.
    </p>

    <pre><code>number = int("25")
price = float("19.99")
text = str(100)

print(number)
print(price)
print(text)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>25
19.99
100</code></pre>


    <h3>8. sum()</h3>

    <p>
      The <strong>sum()</strong> function calculates the total of
      numeric values in an iterable.
    </p>

    <pre><code>numbers = [10, 20, 30, 40]

total = sum(numbers)

print(total)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>100</code></pre>


    <h3>9. max() and min()</h3>

    <p>
      The <strong>max()</strong> function returns the largest value,
      while <strong>min()</strong> returns the smallest value.
    </p>

    <pre><code>numbers = [10, 5, 25, 15]

print(max(numbers))
print(min(numbers))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>25
5</code></pre>


    <h3>10. abs()</h3>

    <p>
      The <strong>abs()</strong> function returns the absolute value
      of a number.
    </p>

    <pre><code>print(abs(-25))
print(abs(10))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>25
10</code></pre>


    <h3>11. round()</h3>

    <p>
      The <strong>round()</strong> function rounds a number to the
      nearest value or to a specified number of decimal places.
    </p>

    <pre><code>price = 19.8765

print(round(price))
print(round(price, 2))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>20
19.88</code></pre>


    <h3>12. range()</h3>

    <p>
      The <strong>range()</strong> function generates a sequence of
      numbers and is commonly used with loops.
    </p>

    <pre><code>for number in range(1, 6):
    print(number)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1
2
3
4
5</code></pre>


    <h3>13. enumerate()</h3>

    <p>
      The <strong>enumerate()</strong> function adds a counter while
      iterating over an iterable.
    </p>

    <pre><code>names = ["Aman", "Ravi", "Jitesh"]

for index, name in enumerate(names):
    print(index, name)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>0 Aman
1 Ravi
2 Jitesh</code></pre>


    <h3>14. zip()</h3>

    <p>
      The <strong>zip()</strong> function combines elements from two
      or more iterables.
    </p>

    <pre><code>names = ["Aman", "Ravi", "Jitesh"]
marks = [85, 72, 90]

for name, mark in zip(names, marks):
    print(name, mark)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Aman 85
Ravi 72
Jitesh 90</code></pre>


    <h3>15. sorted()</h3>

    <p>
      The <strong>sorted()</strong> function returns a new sorted list
      from an iterable.
    </p>

    <pre><code>numbers = [5, 2, 8, 1, 9]

result = sorted(numbers)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[1, 2, 5, 8, 9]</code></pre>


    <h3>16. sorted() in Reverse Order</h3>

    <pre><code>numbers = [5, 2, 8, 1, 9]

result = sorted(numbers, reverse=True)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[9, 8, 5, 2, 1]</code></pre>


    <h3>17. reversed()</h3>

    <p>
      The <strong>reversed()</strong> function returns an iterator that
      accesses the elements of a sequence in reverse order.
    </p>

    <pre><code>numbers = [1, 2, 3, 4, 5]

for number in reversed(numbers):
    print(number)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>5
4
3
2
1</code></pre>


    <h3>18. any()</h3>

    <p>
      The <strong>any()</strong> function returns True if at least one
      element in an iterable is true.
    </p>

    <pre><code>values = [False, False, True]

print(any(values))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>True</code></pre>


    <h3>19. all()</h3>

    <p>
      The <strong>all()</strong> function returns True only when all
      elements in an iterable are true.
    </p>

    <pre><code>values = [True, True, True]

print(all(values))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>True</code></pre>


    <h3>20. isinstance()</h3>

    <p>
      The <strong>isinstance()</strong> function checks whether an
      object belongs to a specified type or class.
    </p>

    <pre><code>number = 25

print(isinstance(number, int))
print(isinstance(number, str))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>True
False</code></pre>


    <h3>21. dir()</h3>

    <p>
      The <strong>dir()</strong> function returns a list of names and
      attributes available for an object.
    </p>

    <pre><code>text = "Python"

print(dir(text))</code></pre>

    <p>
      It is commonly useful when exploring the methods and attributes
      available on an object.
    </p>


    <h3>22. help()</h3>

    <p>
      The <strong>help()</strong> function displays documentation and
      information about Python objects and functions.
    </p>

    <pre><code>help(len)</code></pre>

    <p>
      It can be useful when learning how a function works or checking
      its documentation.
    </p>


    <h3>23. id()</h3>

    <p>
      The <strong>id()</strong> function returns an identity value for
      an object during its lifetime.
    </p>

    <pre><code>name = "Python"

print(id(name))</code></pre>

    <p>
      The exact value returned by <strong>id()</strong> can vary between
      different program executions.
    </p>


    <h3>24. Built-in Functions for Collections</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Example</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>len()</td>
          <td>len([1, 2, 3])</td>
          <td>Counts elements.</td>
        </tr>

        <tr>
          <td>sum()</td>
          <td>sum([1, 2, 3])</td>
          <td>Adds numeric elements.</td>
        </tr>

        <tr>
          <td>max()</td>
          <td>max([1, 5, 3])</td>
          <td>Finds the largest element.</td>
        </tr>

        <tr>
          <td>min()</td>
          <td>min([1, 5, 3])</td>
          <td>Finds the smallest element.</td>
        </tr>

        <tr>
          <td>sorted()</td>
          <td>sorted([3, 1, 2])</td>
          <td>Sorts elements.</td>
        </tr>

        <tr>
          <td>enumerate()</td>
          <td>enumerate(list)</td>
          <td>Provides index and value.</td>
        </tr>

        <tr>
          <td>zip()</td>
          <td>zip(list1, list2)</td>
          <td>Combines iterables.</td>
        </tr>

        <tr>
          <td>any()</td>
          <td>any(values)</td>
          <td>Checks whether any element is true.</td>
        </tr>

        <tr>
          <td>all()</td>
          <td>all(values)</td>
          <td>Checks whether all elements are true.</td>
        </tr>
      </tbody>
    </table>


    <h3>25. Built-in Functions for Type Conversion</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Conversion</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>int()</td>
          <td>Converts a value to integer when possible.</td>
        </tr>

        <tr>
          <td>float()</td>
          <td>Converts a value to floating-point number when possible.</td>
        </tr>

        <tr>
          <td>str()</td>
          <td>Converts a value to string.</td>
        </tr>

        <tr>
          <td>bool()</td>
          <td>Converts a value to Boolean.</td>
        </tr>

        <tr>
          <td>list()</td>
          <td>Creates a list from an iterable.</td>
        </tr>

        <tr>
          <td>tuple()</td>
          <td>Creates a tuple from an iterable.</td>
        </tr>

        <tr>
          <td>set()</td>
          <td>Creates a set from an iterable.</td>
        </tr>

        <tr>
          <td>dict()</td>
          <td>Creates a dictionary.</td>
        </tr>
      </tbody>
    </table>


    <h3>26. Built-in Functions vs User-Defined Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Built-in Function</th>
          <th>User-Defined Function</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Created By</td>
          <td>Python provides it.</td>
          <td>Programmer creates it.</td>
        </tr>

        <tr>
          <td>Definition Required</td>
          <td>No.</td>
          <td>Yes, usually using def.</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>len(), print(), sum()</td>
          <td>def calculate():</td>
        </tr>

        <tr>
          <td>Import Required</td>
          <td>No separate import for built-ins.</td>
          <td>Depends on where the function is defined.</td>
        </tr>
      </tbody>
    </table>


    <h3>27. Advantages of Built-in Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Easy to Use</td>
          <td>They can be called directly without defining them.</td>
        </tr>

        <tr>
          <td>Save Time</td>
          <td>Common programming operations are already implemented.</td>
        </tr>

        <tr>
          <td>Reliable</td>
          <td>They are part of Python's standard functionality.</td>
        </tr>

        <tr>
          <td>Reusable</td>
          <td>The same functions can be used in many programs.</td>
        </tr>
      </tbody>
    </table>


    <h3>28. Built-in Functions Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Important Functions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Input / Output</td>
          <td>input(), print()</td>
        </tr>

        <tr>
          <td>Type Checking</td>
          <td>type(), isinstance()</td>
        </tr>

        <tr>
          <td>Type Conversion</td>
          <td>int(), float(), str(), bool(), list(), tuple(), set(), dict()</td>
        </tr>

        <tr>
          <td>Mathematical</td>
          <td>abs(), round(), sum(), max(), min()</td>
        </tr>

        <tr>
          <td>Iteration</td>
          <td>range(), enumerate(), zip(), reversed()</td>
        </tr>

        <tr>
          <td>Sorting</td>
          <td>sorted()</td>
        </tr>

        <tr>
          <td>Boolean Checking</td>
          <td>any(), all()</td>
        </tr>

        <tr>
          <td>Object Information</td>
          <td>id(), dir(), help()</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Use print() to display a message and a number.',
    'Take input from the user using input().',
    'Find the length of a string using len().',
    'Check the type of different values using type().',
    'Convert a string into an integer using int().',
    'Find the sum, maximum, and minimum of a list.',
    'Use enumerate() to display indexes and values of a list.',
    'Use zip() to combine two lists.',
    'Sort a list using sorted().',
    'Use any() and all() with a list of Boolean values.',
    'Check the type of a variable using isinstance().'
  ],

  code: `numbers = [10, 20, 30, 40, 50]

print("Length:", len(numbers))
print("Sum:", sum(numbers))
print("Maximum:", max(numbers))
print("Minimum:", min(numbers))
print("Sorted:", sorted(numbers))

for index, value in enumerate(numbers):
    print(index, value)`
},
  {
  key: 'math-module',
  title: 'Math Module',
  description: 'The math module is a built-in Python module that provides mathematical functions and constants. It is useful for performing calculations involving numbers, powers, square roots, logarithms, trigonometry, rounding, and other mathematical operations.',

  theory: [
    'Python provides the math module for performing common mathematical operations. The module contains functions such as sqrt(), pow(), factorial(), ceil(), floor(), sin(), cos(), log(), and constants such as pi and e.',

    `
    <h3>1. What is the Math Module?</h3>

    <p>
      The <strong>math</strong> module is a standard Python module that
      provides mathematical functions and constants.
    </p>

    <p>
      To use the math module, it must first be imported using the
      <strong>import</strong> statement.
    </p>

    <pre><code>import math

print(math.sqrt(25))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>5.0</code></pre>


    <h3>2. Importing the Math Module</h3>

    <p>
      The complete math module can be imported using:
    </p>

    <pre><code>import math</code></pre>

    <p>
      After importing it, functions and constants are accessed using
      <strong>math.</strong>.
    </p>

    <pre><code>import math

print(math.pi)
print(math.sqrt(16))</code></pre>


    <h3>3. Important Math Constants</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Constant</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>math.pi</td>
          <td>Value of π (approximately 3.14159).</td>
          <td>math.pi</td>
        </tr>

        <tr>
          <td>math.e</td>
          <td>Base of the natural logarithm.</td>
          <td>math.e</td>
        </tr>

        <tr>
          <td>math.tau</td>
          <td>Value of 2π.</td>
          <td>math.tau</td>
        </tr>

        <tr>
          <td>math.inf</td>
          <td>Positive infinity.</td>
          <td>math.inf</td>
        </tr>

        <tr>
          <td>math.nan</td>
          <td>Not-a-Number value.</td>
          <td>math.nan</td>
        </tr>
      </tbody>
    </table>


    <h3>4. math.pi</h3>

    <p>
      <strong>math.pi</strong> represents the mathematical constant π.
      It is commonly used in circle-related calculations.
    </p>

    <pre><code>import math

radius = 5

area = math.pi * radius ** 2

print(area)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>78.53981633974483</code></pre>


    <h3>5. math.sqrt()</h3>

    <p>
      The <strong>sqrt()</strong> function returns the square root of
      a number.
    </p>

    <pre><code>import math

result = math.sqrt(64)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>8.0</code></pre>


    <h3>6. math.pow()</h3>

    <p>
      The <strong>pow()</strong> function calculates a number raised to
      a specified power.
    </p>

    <pre><code>import math

result = math.pow(2, 5)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>32.0</code></pre>


    <h3>7. math.factorial()</h3>

    <p>
      The <strong>factorial()</strong> function returns the factorial
      of a non-negative integer.
    </p>

    <pre><code>import math

result = math.factorial(5)

print(result)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>120</code></pre>


    <h3>8. math.ceil()</h3>

    <p>
      The <strong>ceil()</strong> function rounds a number upward to
      the nearest integer.
    </p>

    <pre><code>import math

print(math.ceil(4.2))
print(math.ceil(7.8))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>5
8</code></pre>


    <h3>9. math.floor()</h3>

    <p>
      The <strong>floor()</strong> function rounds a number downward
      to the nearest integer.
    </p>

    <pre><code>import math

print(math.floor(4.8))
print(math.floor(7.2))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>4
7</code></pre>


    <h3>10. ceil() vs floor()</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>math.ceil()</td>
          <td>Rounds upward.</td>
          <td>math.ceil(4.2)</td>
          <td>5</td>
        </tr>

        <tr>
          <td>math.floor()</td>
          <td>Rounds downward.</td>
          <td>math.floor(4.8)</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>


    <h3>11. math.fabs()</h3>

    <p>
      The <strong>fabs()</strong> function returns the absolute value
      of a number as a floating-point value.
    </p>

    <pre><code>import math

print(math.fabs(-15.5))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>15.5</code></pre>


    <h3>12. math.log()</h3>

    <p>
      The <strong>log()</strong> function returns the logarithm of a
      number. By default, it calculates the natural logarithm.
    </p>

    <pre><code>import math

print(math.log(10))
print(math.log(8, 2))</code></pre>

    <p>
      The second example calculates the logarithm of 8 with base 2.
    </p>


    <h3>13. math.log10()</h3>

    <p>
      The <strong>log10()</strong> function calculates the base-10
      logarithm.
    </p>

    <pre><code>import math

print(math.log10(100))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>2.0</code></pre>


    <h3>14. math.exp()</h3>

    <p>
      The <strong>exp()</strong> function returns e raised to the
      specified power.
    </p>

    <pre><code>import math

print(math.exp(2))</code></pre>


    <h3>15. Trigonometric Functions</h3>

    <p>
      The math module provides several trigonometric functions such as
      <strong>sin()</strong>, <strong>cos()</strong>, and
      <strong>tan()</strong>.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>math.sin()</td>
          <td>Returns the sine of an angle in radians.</td>
        </tr>

        <tr>
          <td>math.cos()</td>
          <td>Returns the cosine of an angle in radians.</td>
        </tr>

        <tr>
          <td>math.tan()</td>
          <td>Returns the tangent of an angle in radians.</td>
        </tr>
      </tbody>
    </table>


    <h3>16. math.radians()</h3>

    <p>
      The <strong>radians()</strong> function converts an angle from
      degrees to radians.
    </p>

    <pre><code>import math

angle = math.radians(90)

print(angle)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>1.5707963267948966</code></pre>


    <h3>17. math.degrees()</h3>

    <p>
      The <strong>degrees()</strong> function converts an angle from
      radians to degrees.
    </p>

    <pre><code>import math

angle = math.degrees(math.pi)

print(angle)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>180.0</code></pre>


    <h3>18. Trigonometric Example</h3>

    <pre><code>import math

angle = math.radians(30)

print(math.sin(angle))
print(math.cos(angle))
print(math.tan(angle))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>0.49999999999999994
0.8660254037844387
0.5773502691896257</code></pre>


    <h3>19. math.gcd()</h3>

    <p>
      The <strong>gcd()</strong> function returns the greatest common
      divisor of two or more integers.
    </p>

    <pre><code>import math

print(math.gcd(12, 18))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>6</code></pre>


    <h3>20. math.lcm()</h3>

    <p>
      The <strong>lcm()</strong> function returns the least common
      multiple of two or more integers.
    </p>

    <pre><code>import math

print(math.lcm(4, 6))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>12</code></pre>


    <h3>21. math.isqrt()</h3>

    <p>
      The <strong>isqrt()</strong> function returns the integer square
      root of a non-negative integer.
    </p>

    <pre><code>import math

print(math.isqrt(20))
print(math.isqrt(25))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>4
5</code></pre>


    <h3>22. math.comb()</h3>

    <p>
      The <strong>comb()</strong> function calculates the number of
      combinations for selecting r items from n items.
    </p>

    <pre><code>import math

print(math.comb(5, 2))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>10</code></pre>


    <h3>23. math.perm()</h3>

    <p>
      The <strong>perm()</strong> function calculates the number of
      permutations for selecting r items from n items.
    </p>

    <pre><code>import math

print(math.perm(5, 2))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>20</code></pre>


    <h3>24. Important Math Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>sqrt()</td>
          <td>Calculates square root.</td>
        </tr>

        <tr>
          <td>pow()</td>
          <td>Calculates a number raised to a power.</td>
        </tr>

        <tr>
          <td>factorial()</td>
          <td>Calculates factorial.</td>
        </tr>

        <tr>
          <td>ceil()</td>
          <td>Rounds upward.</td>
        </tr>

        <tr>
          <td>floor()</td>
          <td>Rounds downward.</td>
        </tr>

        <tr>
          <td>fabs()</td>
          <td>Returns absolute value as a float.</td>
        </tr>

        <tr>
          <td>log()</td>
          <td>Calculates logarithm.</td>
        </tr>

        <tr>
          <td>log10()</td>
          <td>Calculates base-10 logarithm.</td>
        </tr>

        <tr>
          <td>exp()</td>
          <td>Calculates e raised to a power.</td>
        </tr>

        <tr>
          <td>gcd()</td>
          <td>Calculates greatest common divisor.</td>
        </tr>

        <tr>
          <td>lcm()</td>
          <td>Calculates least common multiple.</td>
        </tr>

        <tr>
          <td>isqrt()</td>
          <td>Calculates integer square root.</td>
        </tr>

        <tr>
          <td>comb()</td>
          <td>Calculates combinations.</td>
        </tr>

        <tr>
          <td>perm()</td>
          <td>Calculates permutations.</td>
        </tr>
      </tbody>
    </table>


    <h3>25. Important Math Constants</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Constant</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>math.pi</td>
          <td>π, approximately 3.14159.</td>
        </tr>

        <tr>
          <td>math.e</td>
          <td>Euler's number.</td>
        </tr>

        <tr>
          <td>math.tau</td>
          <td>2π.</td>
        </tr>

        <tr>
          <td>math.inf</td>
          <td>Positive infinity.</td>
        </tr>

        <tr>
          <td>math.nan</td>
          <td>Not-a-Number.</td>
        </tr>
      </tbody>
    </table>


    <h3>26. Math Module Example</h3>

    <p>
      The following example calculates the area and circumference of a
      circle using the math module.
    </p>

    <pre><code>import math

radius = 7

area = math.pi * radius ** 2
circumference = 2 * math.pi * radius

print("Area:", area)
print("Circumference:", circumference)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Area: 153.93804002589985
Circumference: 43.982297150257104</code></pre>


    <h3>27. Advantages of Math Module</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Mathematical Functions</td>
          <td>Provides many commonly required mathematical operations.</td>
        </tr>

        <tr>
          <td>Constants</td>
          <td>Provides useful constants such as pi and e.</td>
        </tr>

        <tr>
          <td>Easy to Use</td>
          <td>Functions can be accessed using the math module.</td>
        </tr>

        <tr>
          <td>Reliable</td>
          <td>Part of Python's standard library.</td>
        </tr>
      </tbody>
    </table>


    <h3>28. Math Module Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Functions / Constants</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Constants</td>
          <td>pi, e, tau, inf, nan</td>
        </tr>

        <tr>
          <td>Power & Root</td>
          <td>sqrt(), pow(), isqrt()</td>
        </tr>

        <tr>
          <td>Rounding</td>
          <td>ceil(), floor()</td>
        </tr>

        <tr>
          <td>Logarithms</td>
          <td>log(), log10(), exp()</td>
        </tr>

        <tr>
          <td>Trigonometry</td>
          <td>sin(), cos(), tan()</td>
        </tr>

        <tr>
          <td>Number Theory</td>
          <td>gcd(), lcm(), factorial()</td>
        </tr>

        <tr>
          <td>Combinatorics</td>
          <td>comb(), perm()</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Import the math module and calculate the square root of a number.',
    'Use math.pi to calculate the area of a circle.',
    'Use math.pow() to calculate powers.',
    'Calculate the factorial of a number using math.factorial().',
    'Use math.ceil() and math.floor() on decimal numbers.',
    'Convert degrees to radians and calculate sin(), cos(), and tan().',
    'Find the GCD and LCM of two numbers.',
    'Use math.comb() and math.perm() for combinations and permutations.'
  ],

  code: `import math

number = 25

print("Square Root:", math.sqrt(number))
print("Power:", math.pow(2, 5))
print("Factorial:", math.factorial(5))
print("Ceiling:", math.ceil(4.2))
print("Floor:", math.floor(4.8))
print("GCD:", math.gcd(12, 18))
print("LCM:", math.lcm(4, 6))
print("Pi:", math.pi)`
},
  {
  key: 'random-module',
  title: 'Random Module',
  description: 'The random module is a Python standard library module used to generate random numbers, select random elements, shuffle sequences, and perform other randomization tasks.',

  theory: [
    'Python provides the random module for generating pseudo-random numbers and making random selections. It is commonly used in games, simulations, testing, quizzes, and applications where random values are required.',

    `
    <h3>1. What is the Random Module?</h3>

    <p>
      The <strong>random</strong> module is a built-in Python standard
      library module that provides functions for generating random values
      and making random selections.
    </p>

    <p>
      Before using the random module, it must be imported.
    </p>

    <pre><code>import random

print(random.random())</code></pre>

    <p>
      The <strong>random()</strong> function returns a floating-point
      number between 0.0 and 1.0.
    </p>


    <h3>2. Importing the Random Module</h3>

    <p>
      The complete random module can be imported using:
    </p>

    <pre><code>import random</code></pre>

    <p>
      Functions can then be accessed using <strong>random.</strong>.
    </p>

    <pre><code>import random

number = random.randint(1, 10)

print(number)</code></pre>


    <h3>3. Important Random Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>random()</td>
          <td>Returns a random floating-point number between 0.0 and 1.0.</td>
        </tr>

        <tr>
          <td>randint()</td>
          <td>Returns a random integer between two specified values, including both endpoints.</td>
        </tr>

        <tr>
          <td>randrange()</td>
          <td>Returns a randomly selected value from a range.</td>
        </tr>

        <tr>
          <td>choice()</td>
          <td>Returns one random element from a sequence.</td>
        </tr>

        <tr>
          <td>choices()</td>
          <td>Returns a list containing randomly selected elements, with replacement.</td>
        </tr>

        <tr>
          <td>sample()</td>
          <td>Returns a list of unique random elements from a sequence.</td>
        </tr>

        <tr>
          <td>shuffle()</td>
          <td>Randomly rearranges the elements of a mutable sequence.</td>
        </tr>

        <tr>
          <td>uniform()</td>
          <td>Returns a random floating-point number between two values.</td>
        </tr>

        <tr>
          <td>seed()</td>
          <td>Initializes the random number generator to produce a repeatable sequence.</td>
        </tr>
      </tbody>
    </table>


    <h3>4. random.random()</h3>

    <p>
      The <strong>random()</strong> function returns a random floating-point
      number greater than or equal to 0.0 and less than 1.0.
    </p>

    <pre><code>import random

number = random.random()

print(number)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>0.735421</code></pre>

    <p>
      The exact output changes each time the program runs.
    </p>


    <h3>5. random.randint()</h3>

    <p>
      The <strong>randint(a, b)</strong> function returns a random integer
      from <strong>a</strong> through <strong>b</strong>, including both
      endpoints.
    </p>

    <pre><code>import random

number = random.randint(1, 10)

print(number)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>7</code></pre>

    <p>
      The result can be any integer from 1 to 10.
    </p>


    <h3>6. random.randrange()</h3>

    <p>
      The <strong>randrange()</strong> function returns a randomly
      selected value from a range.
    </p>

    <pre><code>import random

number = random.randrange(1, 10)

print(number)</code></pre>

    <p>
      In this example, the possible values are 1 through 9 because the
      stop value 10 is not included.
    </p>


    <h3>7. randint() vs randrange()</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Example</th>
          <th>Range</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>randint()</td>
          <td>random.randint(1, 10)</td>
          <td>1 to 10, including 10</td>
        </tr>

        <tr>
          <td>randrange()</td>
          <td>random.randrange(1, 10)</td>
          <td>1 to 9</td>
        </tr>
      </tbody>
    </table>


    <h3>8. random.choice()</h3>

    <p>
      The <strong>choice()</strong> function selects one random element
      from a non-empty sequence.
    </p>

    <pre><code>import random

colors = ["Red", "Green", "Blue", "Yellow"]

print(random.choice(colors))</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>Blue</code></pre>

    <p>
      The selected value may be different each time the program runs.
    </p>


    <h3>9. random.choices()</h3>

    <p>
      The <strong>choices()</strong> function returns a list containing
      randomly selected elements. The same element can appear more than
      once because selection is performed with replacement.
    </p>

    <pre><code>import random

colors = ["Red", "Green", "Blue"]

result = random.choices(colors, k=5)

print(result)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>['Blue', 'Red', 'Blue', 'Green', 'Red']</code></pre>


    <h3>10. random.sample()</h3>

    <p>
      The <strong>sample()</strong> function selects multiple unique
      elements from a sequence without replacement.
    </p>

    <pre><code>import random

numbers = [10, 20, 30, 40, 50]

result = random.sample(numbers, 3)

print(result)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>[40, 10, 30]</code></pre>

    <p>
      An element cannot be selected more than once in the same sample.
    </p>


    <h3>11. choice() vs choices() vs sample()</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Selection</th>
          <th>Repeated Elements</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>choice()</td>
          <td>Selects one element.</td>
          <td>Not applicable for one selection.</td>
        </tr>

        <tr>
          <td>choices()</td>
          <td>Selects one or more elements.</td>
          <td>Yes, possible.</td>
        </tr>

        <tr>
          <td>sample()</td>
          <td>Selects multiple elements.</td>
          <td>No, elements are unique.</td>
        </tr>
      </tbody>
    </table>


    <h3>12. random.shuffle()</h3>

    <p>
      The <strong>shuffle()</strong> function randomly rearranges the
      elements of a mutable sequence such as a list.
    </p>

    <pre><code>import random

numbers = [1, 2, 3, 4, 5]

random.shuffle(numbers)

print(numbers)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>[3, 1, 5, 2, 4]</code></pre>

    <p>
      The original list itself is modified.
    </p>


    <h3>13. random.uniform()</h3>

    <p>
      The <strong>uniform(a, b)</strong> function returns a random
      floating-point number between two specified values.
    </p>

    <pre><code>import random

number = random.uniform(1.5, 5.5)

print(number)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>3.728451</code></pre>


    <h3>14. random.seed()</h3>

    <p>
      The <strong>seed()</strong> function initializes the random number
      generator. Using the same seed can produce the same sequence of
      pseudo-random results.
    </p>

    <pre><code>import random

random.seed(10)

print(random.randint(1, 100))
print(random.randint(1, 100))</code></pre>

    <p>
      Using the same seed again will reproduce the same sequence on the
      same Python implementation.
    </p>


    <h3>15. Random Number Example</h3>

    <p>
      The following program generates five random numbers between 1 and
      100.
    </p>

    <pre><code>import random

for i in range(5):
    number = random.randint(1, 100)
    print(number)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>45
12
87
63
29</code></pre>


    <h3>16. Random Password Example</h3>

    <p>
      The random module can be used with a collection of characters to
      create a simple random string.
    </p>

    <pre><code>import random
import string

characters = string.ascii_letters + string.digits

password = ''.join(random.choice(characters) for i in range(8))

print(password)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>aB7kP2xQ</code></pre>

    <p>
      For security-sensitive passwords, tokens, or authentication codes,
      Python's <strong>secrets</strong> module should be used instead of
      the random module.
    </p>


    <h3>17. Random Dice Example</h3>

    <p>
      A dice normally has values from 1 to 6. We can simulate a dice
      roll using randint().
    </p>

    <pre><code>import random

dice = random.randint(1, 6)

print("Dice:", dice)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>Dice: 4</code></pre>


    <h3>18. Random Quiz Question</h3>

    <p>
      The choice() function can be used to select a random question
      from a list.
    </p>

    <pre><code>import random

questions = [
    "What is Python?",
    "What is a variable?",
    "What is a loop?",
    "What is a function?"
]

question = random.choice(questions)

print(question)</code></pre>


    <h3>19. Random Module Functions Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Example</th>
          <th>Use</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>random()</td>
          <td>random.random()</td>
          <td>Random float from 0.0 to less than 1.0.</td>
        </tr>

        <tr>
          <td>randint()</td>
          <td>random.randint(1, 10)</td>
          <td>Random integer including both endpoints.</td>
        </tr>

        <tr>
          <td>randrange()</td>
          <td>random.randrange(1, 10)</td>
          <td>Random value from a range.</td>
        </tr>

        <tr>
          <td>choice()</td>
          <td>random.choice(items)</td>
          <td>Selects one random element.</td>
        </tr>

        <tr>
          <td>choices()</td>
          <td>random.choices(items, k=3)</td>
          <td>Selects multiple elements with replacement.</td>
        </tr>

        <tr>
          <td>sample()</td>
          <td>random.sample(items, 3)</td>
          <td>Selects unique random elements.</td>
        </tr>

        <tr>
          <td>shuffle()</td>
          <td>random.shuffle(items)</td>
          <td>Randomly rearranges a list.</td>
        </tr>

        <tr>
          <td>uniform()</td>
          <td>random.uniform(1, 5)</td>
          <td>Generates a random float between two values.</td>
        </tr>

        <tr>
          <td>seed()</td>
          <td>random.seed(10)</td>
          <td>Initializes the random generator.</td>
        </tr>
      </tbody>
    </table>


    <h3>20. Advantages of Random Module</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Random Numbers</td>
          <td>Generates random integers and floating-point numbers.</td>
        </tr>

        <tr>
          <td>Random Selection</td>
          <td>Allows random elements to be selected from sequences.</td>
        </tr>

        <tr>
          <td>Shuffling</td>
          <td>Can randomly rearrange elements of a list.</td>
        </tr>

        <tr>
          <td>Useful in Games</td>
          <td>Can be used for dice, cards, questions, and game events.</td>
        </tr>

        <tr>
          <td>Useful in Simulations</td>
          <td>Can be used to simulate random events and processes.</td>
        </tr>
      </tbody>
    </table>


    <h3>21. Important Note</h3>

    <p>
      The random module generates pseudo-random values and is not
      designed for security-sensitive applications.
    </p>

    <p>
      For passwords, authentication tokens, security keys, and other
      security-related random values, use Python's
      <strong>secrets</strong> module.
    </p>
    `
  ],

  practice: [
    'Generate a random integer between 1 and 100 using randint().',
    'Generate a random floating-point number using random().',
    'Select a random element from a list using choice().',
    'Select three unique elements from a list using sample().',
    'Shuffle a list using shuffle().',
    'Generate a random floating-point number between two values using uniform().',
    'Create a simple dice program using randint().',
    'Create a program that randomly selects a quiz question.',
    'Use seed() and observe how the generated sequence changes.'
  ],

  code: `import random

numbers = [10, 20, 30, 40, 50]

print("Random Number:", random.randint(1, 100))
print("Random Choice:", random.choice(numbers))

random.shuffle(numbers)

print("Shuffled List:", numbers)

print("Random Float:", random.uniform(1, 10))`
},
  {
  key: 'os-module',
  title: 'OS Module',
  description: 'The os module is a Python standard library module that provides functions for interacting with the operating system. It can be used to work with files and directories, environment variables, paths, and other operating-system-related tasks.',

  theory: [
    'The os module allows Python programs to interact with the operating system. It provides functions for creating, deleting, renaming, and listing directories, working with environment variables, and handling operating-system paths.',

    `
    <h3>1. What is the OS Module?</h3>

    <p>
      The <strong>os</strong> module is a standard Python library module
      that provides functions for interacting with the operating system.
    </p>

    <p>
      It is commonly used for working with files, folders, directories,
      environment variables, and operating-system paths.
    </p>

    <pre><code>import os

print(os.getcwd())</code></pre>

    <p>
      The <strong>getcwd()</strong> function returns the current working
      directory.
    </p>


    <h3>2. Importing the OS Module</h3>

    <p>
      The os module can be imported using the following statement:
    </p>

    <pre><code>import os</code></pre>

    <p>
      After importing the module, its functions can be accessed using
      <strong>os.</strong>.
    </p>


    <h3>3. Important OS Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>os.getcwd()</td>
          <td>Returns the current working directory.</td>
        </tr>

        <tr>
          <td>os.chdir()</td>
          <td>Changes the current working directory.</td>
        </tr>

        <tr>
          <td>os.listdir()</td>
          <td>Returns files and directories in a directory.</td>
        </tr>

        <tr>
          <td>os.mkdir()</td>
          <td>Creates a new directory.</td>
        </tr>

        <tr>
          <td>os.makedirs()</td>
          <td>Creates directories including intermediate directories.</td>
        </tr>

        <tr>
          <td>os.rmdir()</td>
          <td>Removes an empty directory.</td>
        </tr>

        <tr>
          <td>os.remove()</td>
          <td>Removes a file.</td>
        </tr>

        <tr>
          <td>os.rename()</td>
          <td>Renames a file or directory.</td>
        </tr>

        <tr>
          <td>os.path.exists()</td>
          <td>Checks whether a path exists.</td>
        </tr>

        <tr>
          <td>os.path.isfile()</td>
          <td>Checks whether a path is a file.</td>
        </tr>

        <tr>
          <td>os.path.isdir()</td>
          <td>Checks whether a path is a directory.</td>
        </tr>

        <tr>
          <td>os.path.join()</td>
          <td>Combines path components safely.</td>
        </tr>

        <tr>
          <td>os.getenv()</td>
          <td>Reads an environment variable.</td>
        </tr>

        <tr>
          <td>os.environ</td>
          <td>Provides access to environment variables.</td>
        </tr>
      </tbody>
    </table>


    <h3>4. os.getcwd()</h3>

    <p>
      The <strong>os.getcwd()</strong> function returns the current
      working directory of the Python program.
    </p>

    <pre><code>import os

path = os.getcwd()

print(path)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>C:\\Users\\Student\\Documents\\Python</code></pre>

    <p>
      The exact path depends on where the program is executed.
    </p>


    <h3>5. os.chdir()</h3>

    <p>
      The <strong>os.chdir()</strong> function changes the current
      working directory.
    </p>

    <pre><code>import os

os.chdir("C:\\Users\\Student\\Documents")

print(os.getcwd())</code></pre>

    <p>
      The specified directory must exist, otherwise Python raises an
      error.
    </p>


    <h3>6. os.listdir()</h3>

    <p>
      The <strong>os.listdir()</strong> function returns the names of
      files and directories inside a specified directory.
    </p>

    <pre><code>import os

items = os.listdir()

print(items)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>['file1.txt', 'file2.py', 'images']</code></pre>


    <h3>7. Listing a Specific Directory</h3>

    <pre><code>import os

items = os.listdir(".")

for item in items:
    print(item)</code></pre>

    <p>
      The <strong>.</strong> represents the current directory.
    </p>


    <h3>8. os.mkdir()</h3>

    <p>
      The <strong>os.mkdir()</strong> function creates a new directory.
    </p>

    <pre><code>import os

os.mkdir("my_folder")

print("Folder created")</code></pre>

    <p>
      The directory must not already exist at the specified location.
    </p>


    <h3>9. os.makedirs()</h3>

    <p>
      The <strong>os.makedirs()</strong> function can create a directory
      along with its missing parent directories.
    </p>

    <pre><code>import os

os.makedirs("project/data/files")

print("Directories created")</code></pre>

    <p>
      This can create the complete directory structure when the parent
      directories do not already exist.
    </p>


    <h3>10. os.rmdir()</h3>

    <p>
      The <strong>os.rmdir()</strong> function removes an empty directory.
    </p>

    <pre><code>import os

os.rmdir("my_folder")

print("Folder removed")</code></pre>

    <p>
      The directory must be empty before it can be removed using
      <strong>os.rmdir()</strong>.
    </p>


    <h3>11. os.remove()</h3>

    <p>
      The <strong>os.remove()</strong> function deletes a file.
    </p>

    <pre><code>import os

os.remove("example.txt")

print("File deleted")</code></pre>

    <p>
      If the file does not exist, Python raises an error.
    </p>


    <h3>12. os.rename()</h3>

    <p>
      The <strong>os.rename()</strong> function is used to rename a
      file or directory.
    </p>

    <pre><code>import os

os.rename("old.txt", "new.txt")

print("File renamed")</code></pre>


    <h3>13. os.path.exists()</h3>

    <p>
      The <strong>os.path.exists()</strong> function checks whether a
      file or directory exists at a specified path.
    </p>

    <pre><code>import os

if os.path.exists("example.txt"):
    print("File exists")
else:
    print("File does not exist")</code></pre>


    <h3>14. os.path.isfile()</h3>

    <p>
      The <strong>os.path.isfile()</strong> function checks whether the
      specified path points to a file.
    </p>

    <pre><code>import os

if os.path.isfile("example.txt"):
    print("It is a file")
else:
    print("It is not a file")</code></pre>


    <h3>15. os.path.isdir()</h3>

    <p>
      The <strong>os.path.isdir()</strong> function checks whether the
      specified path points to a directory.
    </p>

    <pre><code>import os

if os.path.isdir("my_folder"):
    print("It is a directory")
else:
    print("It is not a directory")</code></pre>


    <h3>16. File vs Directory Checking</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Checks</th>
          <th>Returns</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>os.path.exists()</td>
          <td>File or directory</td>
          <td>True / False</td>
        </tr>

        <tr>
          <td>os.path.isfile()</td>
          <td>File</td>
          <td>True / False</td>
        </tr>

        <tr>
          <td>os.path.isdir()</td>
          <td>Directory</td>
          <td>True / False</td>
        </tr>
      </tbody>
    </table>


    <h3>17. os.path.join()</h3>

    <p>
      The <strong>os.path.join()</strong> function combines multiple
      path components using the correct path separator for the operating
      system.
    </p>

    <pre><code>import os

folder = "documents"
file = "notes.txt"

path = os.path.join(folder, file)

print(path)</code></pre>

    <p><strong>Example Output on Windows:</strong></p>

    <pre><code>documents\\notes.txt</code></pre>


    <h3>18. os.path.basename()</h3>

    <p>
      The <strong>os.path.basename()</strong> function returns the final
      component of a path.
    </p>

    <pre><code>import os

path = "documents\\notes.txt"

print(os.path.basename(path))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>notes.txt</code></pre>


    <h3>19. os.path.dirname()</h3>

    <p>
      The <strong>os.path.dirname()</strong> function returns the
      directory portion of a path.
    </p>

    <pre><code>import os

path = "documents\\notes.txt"

print(os.path.dirname(path))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>documents</code></pre>


    <h3>20. os.path.splitext()</h3>

    <p>
      The <strong>os.path.splitext()</strong> function separates a file
      path into its name and extension.
    </p>

    <pre><code>import os

name, extension = os.path.splitext("notes.txt")

print(name)
print(extension)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>notes
.txt</code></pre>


    <h3>21. Environment Variables</h3>

    <p>
      Environment variables store configuration information provided by
      the operating system or the environment in which a program runs.
    </p>

    <p>
      Python can access environment variables through
      <strong>os.getenv()</strong> and <strong>os.environ</strong>.
    </p>

    <pre><code>import os

username = os.getenv("USERNAME")

print(username)</code></pre>

    <p>
      The exact result depends on the environment in which the program
      is running.
    </p>


    <h3>22. os.getenv()</h3>

    <p>
      The <strong>os.getenv()</strong> function retrieves the value of
      an environment variable.
    </p>

    <pre><code>import os

value = os.getenv("PATH")

print(value)</code></pre>

    <p>
      If the environment variable does not exist, <strong>None</strong>
      is returned unless a default value is provided.
    </p>

    <pre><code>import os

value = os.getenv("MY_VARIABLE", "Not Found")

print(value)</code></pre>


    <h3>23. os.environ</h3>

    <p>
      <strong>os.environ</strong> provides a mapping-like interface to
      environment variables.
    </p>

    <pre><code>import os

print(os.environ.get("PATH"))</code></pre>

    <p>
      It can also be used to set an environment variable for the current
      process.
    </p>

    <pre><code>import os

os.environ["APP_MODE"] = "development"

print(os.environ.get("APP_MODE"))</code></pre>


    <h3>24. OS Module Path Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>os.path.exists()</td>
          <td>Checks whether a path exists.</td>
        </tr>

        <tr>
          <td>os.path.isfile()</td>
          <td>Checks whether a path is a file.</td>
        </tr>

        <tr>
          <td>os.path.isdir()</td>
          <td>Checks whether a path is a directory.</td>
        </tr>

        <tr>
          <td>os.path.join()</td>
          <td>Combines path components.</td>
        </tr>

        <tr>
          <td>os.path.basename()</td>
          <td>Returns the final part of a path.</td>
        </tr>

        <tr>
          <td>os.path.dirname()</td>
          <td>Returns the directory part of a path.</td>
        </tr>

        <tr>
          <td>os.path.splitext()</td>
          <td>Separates filename and extension.</td>
        </tr>
      </tbody>
    </table>


    <h3>25. OS Module Example</h3>

    <p>
      The following program displays the current directory and lists
      the files and folders inside it.
    </p>

    <pre><code>import os

print("Current Directory:")
print(os.getcwd())

print("\\nFiles and Folders:")

for item in os.listdir():
    print(item)</code></pre>


    <h3>26. Creating and Checking a Directory</h3>

    <pre><code>import os

folder = "my_data"

if not os.path.exists(folder):
    os.mkdir(folder)
    print("Folder created")
else:
    print("Folder already exists")</code></pre>


    <h3>27. Safe File Checking</h3>

    <p>
      Before deleting or opening a file, it is often useful to check
      whether the file exists.
    </p>

    <pre><code>import os

file = "example.txt"

if os.path.exists(file):
    print("File found")
else:
    print("File not found")</code></pre>


    <h3>28. Important OS Functions Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Use</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>os.getcwd()</td>
          <td>Get current working directory.</td>
        </tr>

        <tr>
          <td>os.chdir()</td>
          <td>Change current working directory.</td>
        </tr>

        <tr>
          <td>os.listdir()</td>
          <td>List files and directories.</td>
        </tr>

        <tr>
          <td>os.mkdir()</td>
          <td>Create a directory.</td>
        </tr>

        <tr>
          <td>os.makedirs()</td>
          <td>Create nested directories.</td>
        </tr>

        <tr>
          <td>os.rmdir()</td>
          <td>Remove an empty directory.</td>
        </tr>

        <tr>
          <td>os.remove()</td>
          <td>Remove a file.</td>
        </tr>

        <tr>
          <td>os.rename()</td>
          <td>Rename a file or directory.</td>
        </tr>

        <tr>
          <td>os.getenv()</td>
          <td>Read an environment variable.</td>
        </tr>

        <tr>
          <td>os.path.join()</td>
          <td>Join path components.</td>
        </tr>

        <tr>
          <td>os.path.exists()</td>
          <td>Check whether a path exists.</td>
        </tr>

        <tr>
          <td>os.path.isfile()</td>
          <td>Check whether a path is a file.</td>
        </tr>

        <tr>
          <td>os.path.isdir()</td>
          <td>Check whether a path is a directory.</td>
        </tr>
      </tbody>
    </table>


    <h3>29. Advantages of OS Module</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>File Management</td>
          <td>Helps create, remove, rename, and inspect files.</td>
        </tr>

        <tr>
          <td>Directory Management</td>
          <td>Helps create, remove, and list directories.</td>
        </tr>

        <tr>
          <td>Path Handling</td>
          <td>Provides useful functions for working with file paths.</td>
        </tr>

        <tr>
          <td>Environment Variables</td>
          <td>Allows programs to read environment configuration.</td>
        </tr>

        <tr>
          <td>Cross-Platform Support</td>
          <td>Provides operating-system-aware utilities for common tasks.</td>
        </tr>
      </tbody>
    </table>


    <h3>30. Important Note</h3>

    <p>
      Functions such as <strong>os.remove()</strong> and
      <strong>os.rmdir()</strong> can permanently delete files or
      directories. Always verify the path before performing destructive
      operations.
    </p>
    `
  ],

  practice: [
    'Display the current working directory using os.getcwd().',
    'List all files and folders in the current directory using os.listdir().',
    'Create a new directory using os.mkdir().',
    'Check whether a file or directory exists using os.path.exists().',
    'Check whether a path is a file using os.path.isfile().',
    'Check whether a path is a directory using os.path.isdir().',
    'Create a file path using os.path.join().',
    'Rename a file using os.rename().',
    'Read an environment variable using os.getenv().',
    'Create a program that checks whether a specified file exists.'
  ],

  code: `import os

print("Current Directory:", os.getcwd())

print("\\nFiles and Folders:")

for item in os.listdir():
    print(item)

folder = "python_data"

if not os.path.exists(folder):
    os.mkdir(folder)
    print("\\nFolder created:", folder)
else:
    print("\\nFolder already exists:", folder)`
},
  {
  key: 'sys-module',
  title: 'Sys Module',
  description: 'The sys module is a Python standard library module that provides access to variables, functions, and information related to the Python interpreter and the running program.',

  theory: [
    'The sys module allows a Python program to interact with the Python interpreter and the system environment. It can be used to work with command-line arguments, exit a program, access the Python version, inspect the module search path, and read standard input and output streams.',

    `
    <h3>1. What is the Sys Module?</h3>

    <p>
      The <strong>sys</strong> module is a standard Python library module
      that provides access to information and functionality related to
      the Python interpreter.
    </p>

    <p>
      It is commonly used for command-line arguments, program termination,
      Python version information, module paths, and standard input/output.
    </p>

    <pre><code>import sys

print(sys.version)</code></pre>


    <h3>2. Importing the Sys Module</h3>

    <p>
      The sys module can be imported using:
    </p>

    <pre><code>import sys</code></pre>

    <p>
      After importing it, its functions and variables can be accessed
      using <strong>sys.</strong>.
    </p>


    <h3>3. Important Sys Functions and Variables</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function / Variable</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>sys.version</td>
          <td>Provides information about the Python version.</td>
        </tr>

        <tr>
          <td>sys.version_info</td>
          <td>Provides structured Python version information.</td>
        </tr>

        <tr>
          <td>sys.argv</td>
          <td>Contains command-line arguments passed to the program.</td>
        </tr>

        <tr>
          <td>sys.exit()</td>
          <td>Terminates the Python program.</td>
        </tr>

        <tr>
          <td>sys.path</td>
          <td>Contains paths used by Python to search for modules.</td>
        </tr>

        <tr>
          <td>sys.platform</td>
          <td>Provides information about the operating system platform.</td>
        </tr>

        <tr>
          <td>sys.stdin</td>
          <td>Represents standard input.</td>
        </tr>

        <tr>
          <td>sys.stdout</td>
          <td>Represents standard output.</td>
        </tr>

        <tr>
          <td>sys.stderr</td>
          <td>Represents standard error output.</td>
        </tr>

        <tr>
          <td>sys.maxsize</td>
          <td>Provides the largest practical integer size used for indexing.</td>
        </tr>

        <tr>
          <td>sys.modules</td>
          <td>Contains modules that have already been loaded by Python.</td>
        </tr>
      </tbody>
    </table>


    <h3>4. sys.version</h3>

    <p>
      The <strong>sys.version</strong> variable provides information
      about the currently running Python interpreter.
    </p>

    <pre><code>import sys

print(sys.version)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>3.13.5 (main, ...)</code></pre>

    <p>
      The exact output depends on the Python version installed on the
      computer.
    </p>


    <h3>5. sys.version_info</h3>

    <p>
      The <strong>sys.version_info</strong> object provides structured
      information about the Python version.
    </p>

    <pre><code>import sys

print(sys.version_info)</code></pre>

    <p>
      Individual version components can also be accessed.
    </p>

    <pre><code>import sys

print(sys.version_info.major)
print(sys.version_info.minor)
print(sys.version_info.micro)</code></pre>


    <h3>6. sys.argv</h3>

    <p>
      The <strong>sys.argv</strong> list contains command-line arguments
      passed to a Python program.
    </p>

    <p>
      The first element, <strong>sys.argv[0]</strong>, normally contains
      the name or path of the Python script.
    </p>

    <pre><code>import sys

print(sys.argv)</code></pre>

    <p>
      Suppose the program is executed as:
    </p>

    <pre><code>python app.py Jitesh 20</code></pre>

    <p>
      Then the arguments will be available through <strong>sys.argv</strong>.
    </p>

    <pre><code>import sys

print("Script:", sys.argv[0])
print("Name:", sys.argv[1])
print("Age:", sys.argv[2])</code></pre>


    <h3>7. Command-Line Arguments Example</h3>

    <p>
      Command-line arguments allow users to provide values when starting
      a Python program.
    </p>

    <pre><code>import sys

if len(sys.argv) > 1:
    print("Hello", sys.argv[1])
else:
    print("No name provided")</code></pre>

    <p>
      Example command:
    </p>

    <pre><code>python app.py Jitesh</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello Jitesh</code></pre>


    <h3>8. sys.exit()</h3>

    <p>
      The <strong>sys.exit()</strong> function is used to terminate the
      Python program.
    </p>

    <pre><code>import sys

print("Program started")

sys.exit()

print("Program ended")</code></pre>

    <p>
      The second print statement is not executed because the program
      terminates at <strong>sys.exit()</strong>.
    </p>


    <h3>9. sys.exit() with a Message</h3>

    <p>
      A message can be supplied to <strong>sys.exit()</strong>.
    </p>

    <pre><code>import sys

age = 15

if age < 18:
    sys.exit("You must be 18 or older")

print("Access granted")</code></pre>


    <h3>10. sys.path</h3>

    <p>
      The <strong>sys.path</strong> variable contains a list of locations
      where Python searches for modules when an import statement is used.
    </p>

    <pre><code>import sys

for path in sys.path:
    print(path)</code></pre>

    <p>
      This is useful when understanding why Python can or cannot find
      a particular module.
    </p>


    <h3>11. sys.platform</h3>

    <p>
      The <strong>sys.platform</strong> variable provides information
      about the platform on which Python is running.
    </p>

    <pre><code>import sys

print(sys.platform)</code></pre>

    <p>
      For example, Windows commonly reports a value beginning with
      <strong>win</strong>, while Linux commonly reports
      <strong>linux</strong>.
    </p>


    <h3>12. Checking the Operating System</h3>

    <pre><code>import sys

if sys.platform.startswith("win"):
    print("Windows")
elif sys.platform.startswith("linux"):
    print("Linux")
elif sys.platform == "darwin":
    print("macOS")
else:
    print("Other platform")</code></pre>


    <h3>13. sys.stdin</h3>

    <p>
      <strong>sys.stdin</strong> represents the standard input stream.
      It can be used to read input from the user or another input source.
    </p>

    <pre><code>import sys

name = sys.stdin.readline().strip()

print("Hello", name)</code></pre>

    <p>
      For normal user input, the built-in <strong>input()</strong>
      function is usually simpler.
    </p>


    <h3>14. sys.stdout</h3>

    <p>
      <strong>sys.stdout</strong> represents the standard output stream.
      Text can be written to it using <strong>write()</strong>.
    </p>

    <pre><code>import sys

sys.stdout.write("Hello Python")</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Hello Python</code></pre>


    <h3>15. sys.stderr</h3>

    <p>
      <strong>sys.stderr</strong> represents the standard error stream.
      It is commonly used to display error messages.
    </p>

    <pre><code>import sys

sys.stderr.write("An error occurred")</code></pre>


    <h3>16. Standard Streams</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Stream</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>sys.stdin</td>
          <td>Standard input.</td>
        </tr>

        <tr>
          <td>sys.stdout</td>
          <td>Standard output.</td>
        </tr>

        <tr>
          <td>sys.stderr</td>
          <td>Standard error output.</td>
        </tr>
      </tbody>
    </table>


    <h3>17. sys.maxsize</h3>

    <p>
      The <strong>sys.maxsize</strong> variable provides the largest
      practical value used for indexing Python sequences on the current
      platform.
    </p>

    <pre><code>import sys

print(sys.maxsize)</code></pre>

    <p>
      Its exact value depends on the Python build and platform.
    </p>


    <h3>18. sys.modules</h3>

    <p>
      The <strong>sys.modules</strong> dictionary contains modules that
      have already been loaded into the current Python interpreter.
    </p>

    <pre><code>import sys

print("Number of loaded modules:", len(sys.modules))</code></pre>

    <p>
      It can be useful for understanding Python's module-loading system.
    </p>


    <h3>19. Checking Python Version</h3>

    <pre><code>import sys

major = sys.version_info.major
minor = sys.version_info.minor

print("Python Version:", major, minor)</code></pre>

    <p><strong>Example Output:</strong></p>

    <pre><code>Python Version: 3 13</code></pre>


    <h3>20. Command-Line Calculator Example</h3>

    <p>
      The sys module can be used to accept numbers from the command line.
    </p>

    <pre><code>import sys

if len(sys.argv) < 3:
    print("Usage: python app.py number1 number2")
    sys.exit()

a = float(sys.argv[1])
b = float(sys.argv[2])

print("Sum:", a + b)</code></pre>

    <p>
      Example command:
    </p>

    <pre><code>python app.py 10 20</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Sum: 30.0</code></pre>


    <h3>21. Important Sys Functions and Variables Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Use</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>sys.version</td>
          <td>Get Python version information.</td>
        </tr>

        <tr>
          <td>sys.version_info</td>
          <td>Get structured Python version information.</td>
        </tr>

        <tr>
          <td>sys.argv</td>
          <td>Access command-line arguments.</td>
        </tr>

        <tr>
          <td>sys.exit()</td>
          <td>Terminate the program.</td>
        </tr>

        <tr>
          <td>sys.path</td>
          <td>View module search paths.</td>
        </tr>

        <tr>
          <td>sys.platform</td>
          <td>Identify the current platform.</td>
        </tr>

        <tr>
          <td>sys.stdin</td>
          <td>Read from standard input.</td>
        </tr>

        <tr>
          <td>sys.stdout</td>
          <td>Write to standard output.</td>
        </tr>

        <tr>
          <td>sys.stderr</td>
          <td>Write error messages.</td>
        </tr>

        <tr>
          <td>sys.maxsize</td>
          <td>Get the largest practical sequence index value.</td>
        </tr>

        <tr>
          <td>sys.modules</td>
          <td>Access already loaded modules.</td>
        </tr>
      </tbody>
    </table>


    <h3>22. Advantages of Sys Module</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Interpreter Access</td>
          <td>Provides information about the Python interpreter.</td>
        </tr>

        <tr>
          <td>Command-Line Arguments</td>
          <td>Allows programs to receive arguments from the command line.</td>
        </tr>

        <tr>
          <td>Program Control</td>
          <td>Allows a program to terminate using sys.exit().</td>
        </tr>

        <tr>
          <td>Module Management</td>
          <td>Provides access to Python's module search path and loaded modules.</td>
        </tr>

        <tr>
          <td>Standard Streams</td>
          <td>Provides access to standard input, output, and error streams.</td>
        </tr>
      </tbody>
    </table>


    <h3>23. Sys Module Example</h3>

    <pre><code>import sys

print("Python Version:", sys.version_info.major)
print("Platform:", sys.platform)
print("Arguments:", sys.argv)
print("Maximum Size:", sys.maxsize)</code></pre>


    <h3>24. Important Note</h3>

    <p>
      The sys module provides low-level access to the Python interpreter
      and should be used carefully. In many simple programs, built-in
      functions such as <strong>input()</strong> and <strong>print()</strong>
      are easier to use than sys.stdin and sys.stdout.
    </p>
    `
  ],

  practice: [
    'Print the Python version using sys.version.',
    'Display the major, minor, and micro Python version using sys.version_info.',
    'Print all command-line arguments using sys.argv.',
    'Create a program that accepts a name from the command line.',
    'Use sys.exit() to terminate a program when a condition is false.',
    'Display the Python module search paths using sys.path.',
    'Display the current platform using sys.platform.',
    'Use sys.stdout.write() to display a message.',
    'Use sys.stderr.write() to display an error message.',
    'Create a simple command-line calculator using sys.argv.'
  ],

  code: `import sys

print("Python Version:", sys.version_info.major)
print("Platform:", sys.platform)

print("Command-Line Arguments:")

for argument in sys.argv:
    print(argument)

print("Maximum Size:", sys.maxsize)`
},
  {
  key: 'json',
  title: 'JSON',
  description: 'JSON (JavaScript Object Notation) is a lightweight data format commonly used to store and exchange structured data. Python provides the built-in json module to encode Python objects into JSON and decode JSON data back into Python objects.',

  theory: [
    'JSON stands for JavaScript Object Notation. It is a text-based format used to store and exchange structured data. Although JSON originated from JavaScript, it is language-independent and is widely used with Python, JavaScript, Java, PHP, APIs, and web applications.',

    `
    <h3>1. What is JSON?</h3>

    <p>
      <strong>JSON</strong> stands for <strong>JavaScript Object
      Notation</strong>. It is a lightweight text-based format used to
      store and exchange structured data.
    </p>

    <p>
      JSON is commonly used when data needs to be transferred between a
      client and a server, especially when working with web APIs.
    </p>

    <pre><code>{
  "name": "Jitesh",
  "age": 20,
  "course": "Python"
}</code></pre>


    <h3>2. JSON in Python</h3>

    <p>
      Python provides a built-in <strong>json</strong> module for working
      with JSON data.
    </p>

    <pre><code>import json</code></pre>

    <p>
      The json module provides functions for converting Python objects
      to JSON and JSON data back to Python objects.
    </p>


    <h3>3. JSON Data Types</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>JSON Type</th>
          <th>Python Type</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>object</td>
          <td>dict</td>
          <td>{"name": "Jitesh"}</td>
        </tr>

        <tr>
          <td>array</td>
          <td>list</td>
          <td>[10, 20, 30]</td>
        </tr>

        <tr>
          <td>string</td>
          <td>str</td>
          <td>"Python"</td>
        </tr>

        <tr>
          <td>number</td>
          <td>int / float</td>
          <td>25 or 19.5</td>
        </tr>

        <tr>
          <td>true / false</td>
          <td>True / False</td>
          <td>true</td>
        </tr>

        <tr>
          <td>null</td>
          <td>None</td>
          <td>null</td>
        </tr>
      </tbody>
    </table>


    <h3>4. Python Dictionary to JSON</h3>

    <p>
      The <strong>json.dumps()</strong> function converts a Python object
      into a JSON-formatted string.
    </p>

    <pre><code>import json

student = {
    "name": "Jitesh",
    "age": 20,
    "course": "Python"
}

data = json.dumps(student)

print(data)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{"name": "Jitesh", "age": 20, "course": "Python"}</code></pre>


    <h3>5. json.dumps()</h3>

    <p>
      <strong>json.dumps()</strong> means JSON "dump string". It converts
      a Python object into a JSON string.
    </p>

    <pre><code>import json

data = {
    "name": "Python",
    "version": 3
}

json_data = json.dumps(data)

print(json_data)
print(type(json_data))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{"name": "Python", "version": 3}
&lt;class 'str'&gt;</code></pre>


    <h3>6. json.loads()</h3>

    <p>
      The <strong>json.loads()</strong> function converts a JSON string
      into a Python object.
    </p>

    <pre><code>import json

data = '{"name": "Jitesh", "age": 20}'

student = json.loads(data)

print(student)
print(student["name"])</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'name': 'Jitesh', 'age': 20}
Jitesh</code></pre>


    <h3>7. dumps() vs loads()</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Conversion</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>json.dumps()</td>
          <td>Python object → JSON string</td>
        </tr>

        <tr>
          <td>json.loads()</td>
          <td>JSON string → Python object</td>
        </tr>
      </tbody>
    </table>


    <h3>8. json.dump()</h3>

    <p>
      The <strong>json.dump()</strong> function writes a Python object
      directly into a JSON file.
    </p>

    <pre><code>import json

student = {
    "name": "Jitesh",
    "age": 20,
    "course": "Python"
}

with open("student.json", "w") as file:
    json.dump(student, file)</code></pre>

    <p>
      This creates a file named <strong>student.json</strong>.
    </p>


    <h3>9. json.load()</h3>

    <p>
      The <strong>json.load()</strong> function reads JSON data directly
      from a file and converts it into a Python object.
    </p>

    <pre><code>import json

with open("student.json", "r") as file:
    student = json.load(file)

print(student)
print(student["name"])</code></pre>


    <h3>10. load() vs loads()</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Used With</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>json.load()</td>
          <td>File</td>
          <td>Reads JSON data from a file.</td>
        </tr>

        <tr>
          <td>json.loads()</td>
          <td>String</td>
          <td>Reads JSON data from a string.</td>
        </tr>

        <tr>
          <td>json.dump()</td>
          <td>File</td>
          <td>Writes Python data to a JSON file.</td>
        </tr>

        <tr>
          <td>json.dumps()</td>
          <td>String</td>
          <td>Converts Python data into a JSON string.</td>
        </tr>
      </tbody>
    </table>


    <h3>11. JSON Object</h3>

    <p>
      A JSON object is written using curly braces
      <strong>{ }</strong>. It contains key-value pairs.
    </p>

    <pre><code>{
  "name": "Jitesh",
  "age": 20,
  "city": "Patna"
}</code></pre>

    <p>
      JSON object keys must be strings and are normally written using
      double quotation marks.
    </p>


    <h3>12. JSON Array</h3>

    <p>
      A JSON array is written using square brackets
      <strong>[ ]</strong>.
    </p>

    <pre><code>{
  "languages": [
    "Python",
    "C++",
    "Java",
    "JavaScript"
  ]
}</code></pre>


    <h3>13. Nested JSON</h3>

    <p>
      JSON objects and arrays can be nested inside one another.
    </p>

    <pre><code>{
  "student": {
    "name": "Jitesh",
    "age": 20,
    "subjects": [
      "Python",
      "Networking",
      "Database"
    ]
  }
}</code></pre>

    <p>
      Nested JSON is commonly used for representing complex structured
      data.
    </p>


    <h3>14. Accessing JSON Data</h3>

    <pre><code>import json

data = '''
{
  "name": "Jitesh",
  "age": 20
}
'''

student = json.loads(data)

print(student["name"])
print(student["age"])</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh
20</code></pre>


    <h3>15. Formatting JSON with indent</h3>

    <p>
      The <strong>indent</strong> parameter can be used with
      <strong>json.dumps()</strong> to make JSON easier to read.
    </p>

    <pre><code>import json

student = {
    "name": "Jitesh",
    "age": 20,
    "course": "Python"
}

print(json.dumps(student, indent=4))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{
    "name": "Jitesh",
    "age": 20,
    "course": "Python"
}</code></pre>


    <h3>16. Sorting JSON Keys</h3>

    <p>
      The <strong>sort_keys=True</strong> option sorts dictionary keys
      alphabetically when converting Python data to JSON.
    </p>

    <pre><code>import json

data = {
    "course": "Python",
    "age": 20,
    "name": "Jitesh"
}

print(json.dumps(data, indent=4, sort_keys=True))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{
    "age": 20,
    "course": "Python",
    "name": "Jitesh"
}</code></pre>


    <h3>17. JSON Boolean Values</h3>

    <p>
      JSON uses lowercase <strong>true</strong> and
      <strong>false</strong>, while Python uses
      <strong>True</strong> and <strong>False</strong>.
    </p>

    <pre><code>import json

data = {
    "is_student": True,
    "is_active": False
}

print(json.dumps(data))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{"is_student": true, "is_active": false}</code></pre>


    <h3>18. JSON null Value</h3>

    <p>
      JSON uses <strong>null</strong> to represent the absence of a value.
      Python uses <strong>None</strong>.
    </p>

    <pre><code>import json

data = {
    "name": "Jitesh",
    "phone": None
}

print(json.dumps(data))</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{"name": "Jitesh", "phone": null}</code></pre>


    <h3>19. Python to JSON Conversion</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Python</th>
          <th>JSON</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>dict</td>
          <td>object</td>
        </tr>

        <tr>
          <td>list / tuple</td>
          <td>array</td>
        </tr>

        <tr>
          <td>str</td>
          <td>string</td>
        </tr>

        <tr>
          <td>int / float</td>
          <td>number</td>
        </tr>

        <tr>
          <td>True</td>
          <td>true</td>
        </tr>

        <tr>
          <td>False</td>
          <td>false</td>
        </tr>

        <tr>
          <td>None</td>
          <td>null</td>
        </tr>
      </tbody>
    </table>


    <h3>20. JSON to Python Conversion</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>JSON</th>
          <th>Python</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>object</td>
          <td>dict</td>
        </tr>

        <tr>
          <td>array</td>
          <td>list</td>
        </tr>

        <tr>
          <td>string</td>
          <td>str</td>
        </tr>

        <tr>
          <td>number</td>
          <td>int / float</td>
        </tr>

        <tr>
          <td>true</td>
          <td>True</td>
        </tr>

        <tr>
          <td>false</td>
          <td>False</td>
        </tr>

        <tr>
          <td>null</td>
          <td>None</td>
        </tr>
      </tbody>
    </table>


    <h3>21. Working with a JSON File</h3>

    <p>
      JSON files normally use the <strong>.json</strong> extension.
      Python can write data to and read data from these files using
      <strong>json.dump()</strong> and <strong>json.load()</strong>.
    </p>

    <pre><code>import json

student = {
    "name": "Jitesh",
    "age": 20,
    "course": "Python"
}

with open("student.json", "w") as file:
    json.dump(student, file, indent=4)

with open("student.json", "r") as file:
    data = json.load(file)

print(data)</code></pre>


    <h3>22. JSON and APIs</h3>

    <p>
      JSON is widely used for exchanging data between web applications
      and servers through APIs.
    </p>

    <p>
      For example, an API may return student information in JSON format:
    </p>

    <pre><code>{
  "id": 101,
  "name": "Jitesh",
  "course": "Python",
  "completed": true
}</code></pre>

    <p>
      Python can convert this JSON data into a dictionary using
      <strong>json.loads()</strong>.
    </p>


    <h3>23. JSON Example with API-like Data</h3>

    <pre><code>import json

response = '''
{
  "id": 101,
  "name": "Jitesh",
  "course": "Python",
  "completed": true
}
'''

data = json.loads(response)

print("ID:", data["id"])
print("Name:", data["name"])
print("Course:", data["course"])
print("Completed:", data["completed"])</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>ID: 101
Name: Jitesh
Course: Python
Completed: True</code></pre>


    <h3>24. Handling JSON Errors</h3>

    <p>
      If a JSON string contains invalid JSON syntax,
      <strong>json.loads()</strong> can raise a
      <strong>JSONDecodeError</strong>.
    </p>

    <pre><code>import json

data = '{"name": "Jitesh", "age": 20}'

try:
    student = json.loads(data)
    print(student)
except json.JSONDecodeError:
    print("Invalid JSON data")</code></pre>


    <h3>25. Important JSON Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>json.dumps()</td>
          <td>Converts Python object into a JSON string.</td>
        </tr>

        <tr>
          <td>json.loads()</td>
          <td>Converts JSON string into a Python object.</td>
        </tr>

        <tr>
          <td>json.dump()</td>
          <td>Writes Python object to a JSON file.</td>
        </tr>

        <tr>
          <td>json.load()</td>
          <td>Reads JSON data from a file.</td>
        </tr>
      </tbody>
    </table>


    <h3>26. dumps() vs dump()</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Works With</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>json.dumps()</td>
          <td>String</td>
          <td>Converts Python data into JSON string.</td>
        </tr>

        <tr>
          <td>json.dump()</td>
          <td>File</td>
          <td>Writes Python data into a JSON file.</td>
        </tr>
      </tbody>
    </table>


    <h3>27. loads() vs load()</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Works With</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>json.loads()</td>
          <td>String</td>
          <td>Converts JSON string into Python data.</td>
        </tr>

        <tr>
          <td>json.load()</td>
          <td>File</td>
          <td>Reads JSON data from a file.</td>
        </tr>
      </tbody>
    </table>


    <h3>28. Advantages of JSON</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Lightweight</td>
          <td>JSON is a relatively compact text-based data format.</td>
        </tr>

        <tr>
          <td>Easy to Read</td>
          <td>Its structure is simple and human-readable.</td>
        </tr>

        <tr>
          <td>Language Independent</td>
          <td>JSON can be used with many programming languages.</td>
        </tr>

        <tr>
          <td>API Friendly</td>
          <td>It is widely used for exchanging data through web APIs.</td>
        </tr>

        <tr>
          <td>Easy to Process</td>
          <td>Python provides built-in functions for encoding and decoding JSON.</td>
        </tr>
      </tbody>
    </table>


    <h3>29. Complete JSON Example</h3>

    <pre><code>import json

student = {
    "name": "Jitesh",
    "age": 20,
    "course": "Python",
    "skills": [
        "Python",
        "HTML",
        "CSS"
    ],
    "active": True
}

# Python dictionary to JSON string
json_data = json.dumps(student, indent=4)

print(json_data)

# JSON string to Python dictionary
data = json.loads(json_data)

print("Name:", data["name"])
print("Course:", data["course"])</code></pre>


    <h3>30. JSON Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>JSON</td>
          <td>JavaScript Object Notation.</td>
        </tr>

        <tr>
          <td>json.dumps()</td>
          <td>Python object → JSON string.</td>
        </tr>

        <tr>
          <td>json.loads()</td>
          <td>JSON string → Python object.</td>
        </tr>

        <tr>
          <td>json.dump()</td>
          <td>Python object → JSON file.</td>
        </tr>

        <tr>
          <td>json.load()</td>
          <td>JSON file → Python object.</td>
        </tr>

        <tr>
          <td>indent</td>
          <td>Makes JSON output easier to read.</td>
        </tr>

        <tr>
          <td>JSON Object</td>
          <td>Uses key-value pairs inside { }.</td>
        </tr>

        <tr>
          <td>JSON Array</td>
          <td>Stores multiple values inside [ ].</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a Python dictionary containing student information and convert it into a JSON string using json.dumps().',
    'Convert a JSON string into a Python dictionary using json.loads().',
    'Write Python dictionary data to a JSON file using json.dump().',
    'Read data from a JSON file using json.load().',
    'Use indent=4 to display formatted JSON data.',
    'Create a nested JSON structure containing student details and subjects.',
    'Convert Python True, False, and None values into JSON and observe the result.',
    'Create an API-like JSON response and access its values in Python.',
    'Handle invalid JSON using json.JSONDecodeError.'
  ],

  code: `import json

student = {
    "name": "Jitesh",
    "age": 20,
    "course": "Python",
    "skills": ["HTML", "CSS", "Python"],
    "active": True
}

# Convert Python dictionary to JSON
json_data = json.dumps(student, indent=4)

print(json_data)

# Convert JSON back to Python dictionary
data = json.loads(json_data)

print("Name:", data["name"])
print("Course:", data["course"])`
},
  {
  key: 'csv',
  title: 'CSV',
  description: 'CSV (Comma-Separated Values) is a simple text-based format used to store tabular data in rows and columns. Python provides the built-in csv module for reading and writing CSV files.',

  theory: [
    'CSV stands for Comma-Separated Values. It is a common file format used to store structured tabular data. Each line usually represents a row, and values within a row are separated by a delimiter such as a comma.',

    `
    <h3>1. What is CSV?</h3>

    <p>
      <strong>CSV</strong> stands for <strong>Comma-Separated Values</strong>.
      It is a simple text-based file format used to store data in rows
      and columns.
    </p>

    <p>
      A CSV file usually has the <strong>.csv</strong> extension.
      Each row represents a record and values are normally separated
      by commas.
    </p>

    <pre><code>Name,Age,Course
Jitesh,20,Python
Rahul,21,Java
Aman,19,C++</code></pre>


    <h3>2. CSV Structure</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Jitesh</td>
          <td>20</td>
          <td>Python</td>
        </tr>

        <tr>
          <td>Rahul</td>
          <td>21</td>
          <td>Java</td>
        </tr>

        <tr>
          <td>Aman</td>
          <td>19</td>
          <td>C++</td>
        </tr>
      </tbody>
    </table>

    <p>
      In the CSV file, the first row is often used as a header containing
      the names of the columns.
    </p>


    <h3>3. CSV Module in Python</h3>

    <p>
      Python provides a built-in <strong>csv</strong> module for working
      with CSV files.
    </p>

    <pre><code>import csv</code></pre>

    <p>
      The csv module provides functions and classes for reading and
      writing tabular data.
    </p>


    <h3>4. Important CSV Functions and Classes</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function / Class</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>csv.reader()</td>
          <td>Reads rows from a CSV file.</td>
        </tr>

        <tr>
          <td>csv.writer()</td>
          <td>Writes rows to a CSV file.</td>
        </tr>

        <tr>
          <td>csv.DictReader()</td>
          <td>Reads CSV rows as dictionaries.</td>
        </tr>

        <tr>
          <td>csv.DictWriter()</td>
          <td>Writes dictionaries to a CSV file.</td>
        </tr>

        <tr>
          <td>writerow()</td>
          <td>Writes one row to a CSV file.</td>
        </tr>

        <tr>
          <td>writerows()</td>
          <td>Writes multiple rows to a CSV file.</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Reading a CSV File</h3>

    <p>
      The <strong>csv.reader()</strong> function can be used to read
      rows from a CSV file.
    </p>

    <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)</code></pre>

    <p>
      Each row is returned as a list.
    </p>


    <h3>6. Example CSV File</h3>

    <p>
      Suppose <strong>students.csv</strong> contains:
    </p>

    <pre><code>Name,Age,Course
Jitesh,20,Python
Rahul,21,Java
Aman,19,C++</code></pre>

    <p>
      The Python program:
    </p>

    <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>['Name', 'Age', 'Course']
['Jitesh', '20', 'Python']
['Rahul', '21', 'Java']
['Aman', '19', 'C++']</code></pre>


    <h3>7. Reading CSV Without Header</h3>

    <p>
      If the CSV file does not contain a header, every row can simply
      be processed as a list.
    </p>

    <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print("Name:", row[0])
        print("Age:", row[1])
        print("Course:", row[2])</code></pre>


    <h3>8. Writing Data to a CSV File</h3>

    <p>
      The <strong>csv.writer()</strong> function is used to create a
      CSV writer object.
    </p>

    <pre><code>import csv

with open("students.csv", "w", newline="") as file:
    writer = csv.writer(file)

    writer.writerow(["Name", "Age", "Course"])
    writer.writerow(["Jitesh", 20, "Python"])
    writer.writerow(["Rahul", 21, "Java"])</code></pre>

    <p>
      The <strong>newline=""</strong> argument helps avoid unwanted
      blank lines on some platforms.
    </p>


    <h3>9. writerow()</h3>

    <p>
      The <strong>writerow()</strong> method writes one row at a time.
    </p>

    <pre><code>import csv

with open("students.csv", "w", newline="") as file:
    writer = csv.writer(file)

    writer.writerow(["Name", "Age"])
    writer.writerow(["Jitesh", 20])
    writer.writerow(["Rahul", 21])</code></pre>


    <h3>10. writerows()</h3>

    <p>
      The <strong>writerows()</strong> method writes multiple rows at
      once.
    </p>

    <pre><code>import csv

students = [
    ["Name", "Age", "Course"],
    ["Jitesh", 20, "Python"],
    ["Rahul", 21, "Java"],
    ["Aman", 19, "C++"]
]

with open("students.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(students)</code></pre>


    <h3>11. Reading CSV Using DictReader</h3>

    <p>
      <strong>csv.DictReader()</strong> reads each CSV row as a
      dictionary. The column headers become dictionary keys.
    </p>

    <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.DictReader(file)

    for row in reader:
        print(row)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>{'Name': 'Jitesh', 'Age': '20', 'Course': 'Python'}
{'Name': 'Rahul', 'Age': '21', 'Course': 'Java'}</code></pre>


    <h3>12. Accessing DictReader Values</h3>

    <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.DictReader(file)

    for row in reader:
        print("Name:", row["Name"])
        print("Course:", row["Course"])</code></pre>


    <h3>13. Writing CSV Using DictWriter</h3>

    <p>
      <strong>csv.DictWriter()</strong> is used to write dictionary data
      into a CSV file.
    </p>

    <pre><code>import csv

students = [
    {
        "Name": "Jitesh",
        "Age": 20,
        "Course": "Python"
    },
    {
        "Name": "Rahul",
        "Age": 21,
        "Course": "Java"
    }
]

with open("students.csv", "w", newline="") as file:
    fieldnames = ["Name", "Age", "Course"]

    writer = csv.DictWriter(file, fieldnames=fieldnames)

    writer.writeheader()
    writer.writerows(students)</code></pre>


    <h3>14. writeheader()</h3>

    <p>
      The <strong>writeheader()</strong> method writes the column names
      to the first row of a CSV file.
    </p>

    <pre><code>import csv

with open("students.csv", "w", newline="") as file:
    fieldnames = ["Name", "Age", "Course"]

    writer = csv.DictWriter(
        file,
        fieldnames=fieldnames
    )

    writer.writeheader()</code></pre>


    <h3>15. DictReader vs DictWriter</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>csv.DictReader()</td>
          <td>Reads CSV rows as dictionaries.</td>
        </tr>

        <tr>
          <td>csv.DictWriter()</td>
          <td>Writes dictionaries to a CSV file.</td>
        </tr>
      </tbody>
    </table>


    <h3>16. CSV Reader vs Writer</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Tool</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>csv.reader()</td>
          <td>Reads CSV rows as lists.</td>
        </tr>

        <tr>
          <td>csv.writer()</td>
          <td>Writes lists or sequences as CSV rows.</td>
        </tr>

        <tr>
          <td>csv.DictReader()</td>
          <td>Reads CSV rows as dictionaries.</td>
        </tr>

        <tr>
          <td>csv.DictWriter()</td>
          <td>Writes dictionaries as CSV rows.</td>
        </tr>
      </tbody>
    </table>


    <h3>17. CSV Delimiter</h3>

    <p>
      A CSV file commonly uses a comma as the delimiter, but other
      delimiters such as semicolon or tab can also be used.
    </p>

    <pre><code>Name;Age;Course
Jitesh;20;Python
Rahul;21;Java</code></pre>

    <p>
      The delimiter can be specified while creating a reader or writer.
    </p>

    <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file, delimiter=";")

    for row in reader:
        print(row)</code></pre>


    <h3>18. CSV with Tab Delimiter</h3>

    <p>
      The tab character can also be used as a delimiter.
    </p>

    <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file, delimiter="\\t")

    for row in reader:
        print(row)</code></pre>


    <h3>19. Appending Data to CSV</h3>

    <p>
      The <strong>"a"</strong> mode can be used to add new rows to an
      existing CSV file without deleting its existing data.
    </p>

    <pre><code>import csv

with open("students.csv", "a", newline="") as file:
    writer = csv.writer(file)

    writer.writerow(["Aman", 19, "C++"])</code></pre>


    <h3>20. CSV File Modes</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Mode</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>"r"</td>
          <td>Read an existing CSV file.</td>
        </tr>

        <tr>
          <td>"w"</td>
          <td>Write a new CSV file or overwrite an existing file.</td>
        </tr>

        <tr>
          <td>"a"</td>
          <td>Append new data to an existing CSV file.</td>
        </tr>
      </tbody>
    </table>


    <h3>21. Handling Quoted Values</h3>

    <p>
      CSV can contain values that include commas. Such values can be
      enclosed in quotation marks.
    </p>

    <pre><code>Name,Address
Jitesh,"Patna, Bihar"
Rahul,"Delhi, India"</code></pre>

    <p>
      The csv module automatically handles standard CSV quoting rules.
    </p>

    <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)</code></pre>


    <h3>22. CSV and Excel</h3>

    <p>
      CSV files can be opened by spreadsheet applications such as
      Microsoft Excel and LibreOffice Calc.
    </p>

    <p>
      Because CSV is a plain-text format, it is useful for transferring
      tabular data between different applications.
    </p>


    <h3>23. Reading Specific Columns</h3>

    <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.DictReader(file)

    for row in reader:
        print(row["Name"], "-", row["Course"])</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>Jitesh - Python
Rahul - Java
Aman - C++</code></pre>


    <h3>24. Counting CSV Records</h3>

    <pre><code>import csv

count = 0

with open("students.csv", "r") as file:
    reader = csv.DictReader(file)

    for row in reader:
        count += 1

print("Total Students:", count)</code></pre>


    <h3>25. Searching Data in a CSV File</h3>

    <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.DictReader(file)

    for row in reader:
        if row["Course"] == "Python":
            print("Student:", row["Name"])</code></pre>


    <h3>26. Complete CSV Example</h3>

    <pre><code>import csv

students = [
    ["Name", "Age", "Course"],
    ["Jitesh", 20, "Python"],
    ["Rahul", 21, "Java"],
    ["Aman", 19, "C++"]
]

# Write CSV
with open("students.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(students)

# Read CSV
with open("students.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)</code></pre>


    <h3>27. Advantages of CSV</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Simple</td>
          <td>CSV has a simple and easy-to-understand structure.</td>
        </tr>

        <tr>
          <td>Lightweight</td>
          <td>CSV files contain plain text and are usually small.</td>
        </tr>

        <tr>
          <td>Portable</td>
          <td>CSV files can be used by many applications and programming languages.</td>
        </tr>

        <tr>
          <td>Easy to Edit</td>
          <td>CSV files can be opened and edited using text editors or spreadsheet software.</td>
        </tr>

        <tr>
          <td>Data Exchange</td>
          <td>Useful for transferring tabular data between applications.</td>
        </tr>
      </tbody>
    </table>


    <h3>28. Limitations of CSV</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Limitation</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>No Complex Structure</td>
          <td>CSV is mainly designed for flat tabular data.</td>
        </tr>

        <tr>
          <td>No Data Types</td>
          <td>CSV values are generally read as strings.</td>
        </tr>

        <tr>
          <td>Limited Metadata</td>
          <td>CSV does not naturally store rich metadata or formatting.</td>
        </tr>

        <tr>
          <td>Nested Data</td>
          <td>Representing deeply nested data is difficult compared with JSON.</td>
        </tr>
      </tbody>
    </table>


    <h3>29. CSV vs JSON</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>CSV</th>
          <th>JSON</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Structure</td>
          <td>Rows and columns</td>
          <td>Objects and arrays</td>
        </tr>

        <tr>
          <td>Best For</td>
          <td>Tabular data</td>
          <td>Structured and nested data</td>
        </tr>

        <tr>
          <td>Nested Data</td>
          <td>Difficult</td>
          <td>Easy</td>
        </tr>

        <tr>
          <td>Human Readable</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>

        <tr>
          <td>Common Extension</td>
          <td>.csv</td>
          <td>.json</td>
        </tr>
      </tbody>
    </table>


    <h3>30. CSV Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>CSV</td>
          <td>Comma-Separated Values.</td>
        </tr>

        <tr>
          <td>csv.reader()</td>
          <td>Reads CSV rows as lists.</td>
        </tr>

        <tr>
          <td>csv.writer()</td>
          <td>Writes rows to a CSV file.</td>
        </tr>

        <tr>
          <td>csv.DictReader()</td>
          <td>Reads CSV rows as dictionaries.</td>
        </tr>

        <tr>
          <td>csv.DictWriter()</td>
          <td>Writes dictionaries to a CSV file.</td>
        </tr>

        <tr>
          <td>writerow()</td>
          <td>Writes one row.</td>
        </tr>

        <tr>
          <td>writerows()</td>
          <td>Writes multiple rows.</td>
        </tr>

        <tr>
          <td>delimiter</td>
          <td>Specifies the character used to separate values.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a students.csv file containing Name, Age, and Course columns.',
    'Read a CSV file using csv.reader().',
    'Write multiple rows to a CSV file using writerows().',
    'Read a CSV file using csv.DictReader().',
    'Write dictionary data to a CSV file using csv.DictWriter().',
    'Add a new record to an existing CSV file using append mode.',
    'Search for students belonging to a particular course.',
    'Count the number of records in a CSV file.',
    'Create a CSV file using a semicolon as the delimiter.',
    'Compare CSV and JSON and identify when each format is more suitable.'
  ],

  code: `import csv

students = [
    ["Name", "Age", "Course"],
    ["Jitesh", 20, "Python"],
    ["Rahul", 21, "Java"],
    ["Aman", 19, "C++"]
]

# Write data to CSV
with open("students.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(students)

# Read data from CSV
with open("students.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)`
},
 {
  key: 'pip',
  title: 'PIP',
  description: 'PIP is the standard package installer for Python. It is used to install, upgrade, remove, and manage Python packages and their dependencies from package repositories such as PyPI.',

  theory: [
    'PIP stands for PIP Installs Packages. It is a command-line tool used to install and manage Python packages. With PIP, developers can easily add external libraries and tools to Python projects.',

    `
    <h3>1. What is PIP?</h3>

    <p>
      <strong>PIP</strong> is the standard package installer for Python.
      It allows developers to install and manage additional Python
      packages that are not included in the Python standard library.
    </p>

    <p>
      For example, if you want to install a package such as
      <strong>requests</strong>, you can use:
    </p>

    <pre><code>pip install requests</code></pre>

    <p>
      PIP downloads the package and installs it into the Python
      environment.
    </p>


    <h3>2. What is a Python Package?</h3>

    <p>
      A Python package is a collection of Python code that provides
      reusable functionality.
    </p>

    <p>
      Packages allow developers to avoid writing everything from scratch.
      For example, packages are available for web development, data
      analysis, machine learning, networking, image processing, and more.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Package</th>
          <th>Common Use</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>requests</td>
          <td>HTTP requests and web APIs.</td>
        </tr>

        <tr>
          <td>numpy</td>
          <td>Numerical and array operations.</td>
        </tr>

        <tr>
          <td>pandas</td>
          <td>Data analysis and data manipulation.</td>
        </tr>

        <tr>
          <td>flask</td>
          <td>Web application development.</td>
        </tr>

        <tr>
          <td>django</td>
          <td>Web application development.</td>
        </tr>

        <tr>
          <td>matplotlib</td>
          <td>Data visualization and plotting.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Checking PIP Installation</h3>

    <p>
      You can check whether PIP is installed by running the following
      command in Command Prompt or Terminal:
    </p>

    <pre><code>pip --version</code></pre>

    <p>
      Another commonly used command is:
    </p>

    <pre><code>python -m pip --version</code></pre>

    <p>
      The second form is often useful when multiple Python installations
      exist on a computer because it runs PIP through the selected Python
      interpreter.
    </p>


    <h3>4. Installing a Package</h3>

    <p>
      The <strong>pip install</strong> command installs a Python package.
    </p>

    <pre><code>pip install requests</code></pre>

    <p>
      Using Python's module form:
    </p>

    <pre><code>python -m pip install requests</code></pre>


    <h3>5. Installing a Specific Package Version</h3>

    <p>
      You can install a specific version of a package by using
      <strong>==</strong>.
    </p>

    <pre><code>pip install requests==2.32.3</code></pre>

    <p>
      You can also specify minimum or maximum versions.
    </p>

    <pre><code>pip install requests>=2.30.0
pip install requests<3.0.0</code></pre>


    <h3>6. Upgrading a Package</h3>

    <p>
      The <strong>--upgrade</strong> option updates an installed package
      to a newer available version.
    </p>

    <pre><code>pip install --upgrade requests</code></pre>

    <p>
      Or:
    </p>

    <pre><code>python -m pip install --upgrade requests</code></pre>


    <h3>7. Installing Multiple Packages</h3>

    <p>
      Multiple packages can be installed using a single command.
    </p>

    <pre><code>pip install requests flask numpy</code></pre>


    <h3>8. Listing Installed Packages</h3>

    <p>
      The <strong>pip list</strong> command displays packages installed
      in the current Python environment.
    </p>

    <pre><code>pip list</code></pre>

    <p>
      Example output:
    </p>

    <pre><code>Package    Version
---------- -------
pip        25.x
requests   2.x
flask      3.x</code></pre>


    <h3>9. Showing Package Information</h3>

    <p>
      The <strong>pip show</strong> command displays information about
      an installed package.
    </p>

    <pre><code>pip show requests</code></pre>

    <p>
      It can display information such as the package version, location,
      dependencies, and metadata.
    </p>


    <h3>10. Uninstalling a Package</h3>

    <p>
      The <strong>pip uninstall</strong> command removes an installed
      package.
    </p>

    <pre><code>pip uninstall requests</code></pre>

    <p>
      PIP normally asks for confirmation before removing the package.
    </p>


    <h3>11. Searching for Packages</h3>

    <p>
      Package discovery is commonly done through the Python Package
      Index (PyPI) website. Modern PIP versions do not provide the
      traditional <strong>pip search</strong> command.
    </p>

    <p>
      You can search for packages on PyPI and then install the package
      using PIP.
    </p>

    <pre><code>pip install package-name</code></pre>


    <h3>12. Requirements.txt</h3>

    <p>
      A <strong>requirements.txt</strong> file contains a list of Python
      packages required by a project.
    </p>

    <p>
      Example:
    </p>

    <pre><code>requests==2.32.3
flask==3.1.0
numpy==2.1.0</code></pre>

    <p>
      All packages listed in the file can be installed using:
    </p>

    <pre><code>pip install -r requirements.txt</code></pre>


    <h3>13. Creating requirements.txt</h3>

    <p>
      The <strong>pip freeze</strong> command displays installed packages
      in a format suitable for a requirements file.
    </p>

    <pre><code>pip freeze</code></pre>

    <p>
      To save the output into a file:
    </p>

    <pre><code>pip freeze > requirements.txt</code></pre>


    <h3>14. Installing from requirements.txt</h3>

    <p>
      When a project contains a requirements.txt file, all listed
      dependencies can be installed with:
    </p>

    <pre><code>pip install -r requirements.txt</code></pre>

    <p>
      This is especially useful when sharing a project with other
      developers or setting up the project on another computer.
    </p>


    <h3>15. PIP and Virtual Environments</h3>

    <p>
      PIP is commonly used inside a Python virtual environment.
      A virtual environment keeps project dependencies isolated from
      other Python projects.
    </p>

    <pre><code>python -m venv venv</code></pre>

    <p>
      After activating the environment, packages can be installed using
      PIP.
    </p>

    <pre><code>pip install requests</code></pre>


    <h3>16. PIP with Virtual Environment on Windows</h3>

    <p>
      Create a virtual environment:
    </p>

    <pre><code>python -m venv venv</code></pre>

    <p>
      Activate it in Command Prompt:
    </p>

    <pre><code>venv\\Scripts\\activate</code></pre>

    <p>
      Then install packages:
    </p>

    <pre><code>pip install requests</code></pre>

    <p>
      To leave the virtual environment:
    </p>

    <pre><code>deactivate</code></pre>


    <h3>17. PIP with Python Module Syntax</h3>

    <p>
      Instead of using the pip command directly, you can run PIP through
      Python:
    </p>

    <pre><code>python -m pip install requests</code></pre>

    <p>
      This is useful when you want to make sure PIP belongs to the Python
      interpreter being used.
    </p>


    <h3>18. Upgrading PIP</h3>

    <p>
      PIP itself can be upgraded using:
    </p>

    <pre><code>python -m pip install --upgrade pip</code></pre>

    <p>
      On some systems, administrative permissions may be required if
      you are modifying a system-wide Python installation.
    </p>


    <h3>19. PIP Freeze</h3>

    <p>
      The <strong>pip freeze</strong> command lists installed packages
      with their versions.
    </p>

    <pre><code>pip freeze</code></pre>

    <p>
      Example:
    </p>

    <pre><code>Flask==3.1.0
requests==2.32.3
urllib3==2.2.2</code></pre>

    <p>
      This output can be saved into requirements.txt:
    </p>

    <pre><code>pip freeze > requirements.txt</code></pre>


    <h3>20. PIP Check</h3>

    <p>
      The <strong>pip check</strong> command checks whether installed
      packages have compatible dependencies.
    </p>

    <pre><code>pip check</code></pre>

    <p>
      If there are no dependency problems, PIP reports that the installed
      packages have compatible dependencies.
    </p>


    <h3>21. PIP Show</h3>

    <p>
      The <strong>pip show</strong> command provides detailed information
      about a particular installed package.
    </p>

    <pre><code>pip show flask</code></pre>

    <p>
      Information may include the package name, version, location,
      dependencies, and other metadata.
    </p>


    <h3>22. Installing Packages for a User</h3>

    <p>
      A package can be installed for the current user using the
      <strong>--user</strong> option.
    </p>

    <pre><code>python -m pip install --user package-name</code></pre>

    <p>
      The exact installation location depends on the operating system
      and Python configuration.
    </p>


    <h3>23. PIP Command Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>pip --version</td>
          <td>Checks the installed PIP version.</td>
        </tr>

        <tr>
          <td>pip install package</td>
          <td>Installs a package.</td>
        </tr>

        <tr>
          <td>pip install --upgrade package</td>
          <td>Upgrades a package.</td>
        </tr>

        <tr>
          <td>pip uninstall package</td>
          <td>Removes a package.</td>
        </tr>

        <tr>
          <td>pip list</td>
          <td>Lists installed packages.</td>
        </tr>

        <tr>
          <td>pip show package</td>
          <td>Shows package information.</td>
        </tr>

        <tr>
          <td>pip freeze</td>
          <td>Lists installed packages with versions.</td>
        </tr>

        <tr>
          <td>pip check</td>
          <td>Checks package dependency compatibility.</td>
        </tr>

        <tr>
          <td>pip install -r requirements.txt</td>
          <td>Installs packages listed in requirements.txt.</td>
        </tr>
      </tbody>
    </table>


    <h3>24. PIP vs Standard Library</h3>

    <p>
      Python already includes many modules in its standard library.
      These modules generally do not need to be installed using PIP.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Standard Library</th>
          <th>External Package</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>os</td>
          <td>requests</td>
        </tr>

        <tr>
          <td>sys</td>
          <td>numpy</td>
        </tr>

        <tr>
          <td>json</td>
          <td>pandas</td>
        </tr>

        <tr>
          <td>csv</td>
          <td>flask</td>
        </tr>

        <tr>
          <td>math</td>
          <td>django</td>
        </tr>
      </tbody>
    </table>

    <p>
      External packages are commonly installed using PIP.
    </p>


    <h3>25. Installing and Using Requests</h3>

    <p>
      The following example demonstrates the basic workflow of installing
      an external package.
    </p>

    <pre><code>pip install requests</code></pre>

    <p>
      After installation, the package can be imported in Python:
    </p>

    <pre><code>import requests

response = requests.get("https://example.com")

print(response.status_code)</code></pre>


    <h3>26. Dependency Management</h3>

    <p>
      A Python package may depend on other packages. PIP can resolve and
      install required dependencies when installing a package.
    </p>

    <pre><code>pip install requests</code></pre>

    <p>
      This makes it easier to set up projects that rely on multiple
      packages.
    </p>


    <h3>27. Installing a Package in a Project</h3>

    <p>
      A common project workflow is:
    </p>

    <pre><code>python -m venv venv
venv\\Scripts\\activate
python -m pip install requests
python -m pip freeze > requirements.txt</code></pre>

    <p>
      This creates an isolated environment, installs a package, and
      records installed dependencies.
    </p>


    <h3>28. Common PIP Errors</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Error</th>
          <th>Possible Cause</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>'pip' is not recognized</td>
          <td>PIP may not be available on PATH or Python may not be configured correctly.</td>
        </tr>

        <tr>
          <td>No matching distribution found</td>
          <td>The requested package/version may not be available for the current environment.</td>
        </tr>

        <tr>
          <td>Permission denied</td>
          <td>The current user may not have permission to modify the installation location.</td>
        </tr>

        <tr>
          <td>Dependency conflict</td>
          <td>Installed packages may require incompatible versions of another package.</td>
        </tr>
      </tbody>
    </table>


    <h3>29. Important Note About PIP</h3>

    <p>
      PIP installs packages into the Python environment associated with
      the command being used. When multiple Python installations or
      virtual environments exist, using
      <strong>python -m pip</strong> is often a reliable way to ensure
      that the package is installed for the intended Python interpreter.
    </p>


    <h3>30. PIP Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>PIP</td>
          <td>Python package installer.</td>
        </tr>

        <tr>
          <td>PyPI</td>
          <td>Python Package Index containing Python packages.</td>
        </tr>

        <tr>
          <td>pip install</td>
          <td>Installs packages.</td>
        </tr>

        <tr>
          <td>pip uninstall</td>
          <td>Removes packages.</td>
        </tr>

        <tr>
          <td>pip list</td>
          <td>Lists installed packages.</td>
        </tr>

        <tr>
          <td>pip freeze</td>
          <td>Shows installed packages with versions.</td>
        </tr>

        <tr>
          <td>requirements.txt</td>
          <td>Stores project dependencies.</td>
        </tr>

        <tr>
          <td>Virtual Environment</td>
          <td>Provides an isolated environment for project packages.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Check the installed PIP version using pip --version.',
    'Install the requests package using PIP.',
    'Display all installed packages using pip list.',
    'Display information about an installed package using pip show.',
    'Upgrade an installed package using pip install --upgrade.',
    'Uninstall a package using pip uninstall.',
    'Generate a requirements.txt file using pip freeze.',
    'Create a virtual environment and install a package inside it.',
    'Install all dependencies from a requirements.txt file.',
    'Check package dependencies using pip check.'
  ],

  code: `# Check PIP using the terminal:
# python -m pip --version

# Install a package:
# python -m pip install requests

# List installed packages:
# python -m pip list

# Create requirements.txt:
# python -m pip freeze > requirements.txt

# Install requirements:
# python -m pip install -r requirements.txt

# Upgrade a package:
# python -m pip install --upgrade requests

# Uninstall a package:
# python -m pip uninstall requests`
},
  {
  key: 'multithreading',
  title: 'Multithreading',
  description: 'Multithreading is a technique that allows a Python program to execute multiple threads concurrently. It is useful for tasks such as I/O operations, network requests, file handling, and other operations where a program spends time waiting.',

  theory: [
    'A thread is a lightweight unit of execution within a program. Multithreading allows multiple threads to make progress concurrently within the same process.',

    `
    <h3>1. What is Multithreading?</h3>

    <p>
      <strong>Multithreading</strong> is a technique in which multiple
      threads are created and executed within a single program.
    </p>

    <p>
      A thread represents a separate path of execution. By using multiple
      threads, a program can handle several tasks concurrently.
    </p>

    <p>
      For example, a program may use one thread to download data while
      another thread performs a different task.
    </p>


    <h3>2. What is a Thread?</h3>

    <p>
      A <strong>thread</strong> is the smallest unit of execution that
      can run within a process.
    </p>

    <p>
      A Python program normally starts with one main thread. Additional
      threads can be created when needed.
    </p>

    <pre><code>import threading

print("Main thread is running")</code></pre>


    <h3>3. Process vs Thread</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Process</th>
          <th>Thread</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Definition</td>
          <td>Independent program execution unit.</td>
          <td>Execution unit inside a process.</td>
        </tr>

        <tr>
          <td>Memory</td>
          <td>Usually has separate memory space.</td>
          <td>Threads share the process memory.</td>
        </tr>

        <tr>
          <td>Creation</td>
          <td>Generally more resource-intensive.</td>
          <td>Generally lighter than creating a separate process.</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Requires inter-process communication mechanisms.</td>
          <td>Threads can communicate through shared memory.</td>
        </tr>
      </tbody>
    </table>


    <h3>4. Threading Module</h3>

    <p>
      Python provides the built-in <strong>threading</strong> module for
      creating and managing threads.
    </p>

    <pre><code>import threading</code></pre>


    <h3>5. Creating a Thread</h3>

    <p>
      A thread can be created using the
      <strong>threading.Thread()</strong> class.
    </p>

    <pre><code>import threading

def task():
    print("Task is running")

thread = threading.Thread(target=task)

thread.start()</code></pre>

    <p>
      The <strong>start()</strong> method starts the thread.
    </p>


    <h3>6. Using start()</h3>

    <p>
      The <strong>start()</strong> method schedules the thread to begin
      execution.
    </p>

    <pre><code>import threading

def task():
    print("Hello from thread")

t = threading.Thread(target=task)

t.start()</code></pre>


    <h3>7. Using join()</h3>

    <p>
      The <strong>join()</strong> method makes the calling thread wait
      until the specified thread has finished.
    </p>

    <pre><code>import threading

def task():
    print("Task completed")

t = threading.Thread(target=task)

t.start()
t.join()

print("Main program continues")</code></pre>


    <h3>8. Multiple Threads</h3>

    <p>
      A program can create multiple threads to handle different tasks.
    </p>

    <pre><code>import threading

def task1():
    print("Task 1 running")

def task2():
    print("Task 2 running")

t1 = threading.Thread(target=task1)
t2 = threading.Thread(target=task2)

t1.start()
t2.start()

t1.join()
t2.join()

print("Both tasks completed")</code></pre>


    <h3>9. Thread Target Function</h3>

    <p>
      The <strong>target</strong> parameter specifies the function that
      the thread should execute.
    </p>

    <pre><code>import threading

def greet(name):
    print("Hello", name)

t = threading.Thread(
    target=greet,
    args=("Jitesh",)
)

t.start()
t.join()</code></pre>


    <h3>10. Passing Multiple Arguments</h3>

    <p>
      Multiple arguments can be passed to a thread using the
      <strong>args</strong> parameter.
    </p>

    <pre><code>import threading

def add(a, b):
    print("Sum:", a + b)

t = threading.Thread(
    target=add,
    args=(10, 20)
)

t.start()
t.join()</code></pre>


    <h3>11. Thread Names</h3>

    <p>
      Threads can be assigned names to make them easier to identify.
    </p>

    <pre><code>import threading

def task():
    print("Running:", threading.current_thread().name)

t = threading.Thread(
    target=task,
    name="Worker-1"
)

t.start()
t.join()</code></pre>


    <h3>12. current_thread()</h3>

    <p>
      The <strong>threading.current_thread()</strong> function returns
      the currently executing thread object.
    </p>

    <pre><code>import threading

def task():
    thread = threading.current_thread()
    print("Thread name:", thread.name)

t = threading.Thread(target=task)

t.start()
t.join()</code></pre>


    <h3>13. active_count()</h3>

    <p>
      The <strong>threading.active_count()</strong> function returns the
      number of currently active threads.
    </p>

    <pre><code>import threading

print("Active threads:",
      threading.active_count())</code></pre>


    <h3>14. Thread Identity</h3>

    <p>
      Each thread has an identifier that can be accessed using
      <strong>ident</strong>.
    </p>

    <pre><code>import threading

def task():
    thread = threading.current_thread()

    print("Thread ID:", thread.ident)

t = threading.Thread(target=task)

t.start()
t.join()</code></pre>


    <h3>15. Daemon Threads</h3>

    <p>
      A <strong>daemon thread</strong> is a background thread that does
      not prevent the Python process from exiting when all non-daemon
      threads have finished.
    </p>

    <pre><code>import threading
import time

def background_task():
    while True:
        print("Background task")
        time.sleep(1)

t = threading.Thread(
    target=background_task,
    daemon=True
)

t.start()

time.sleep(3)

print("Main program finished")</code></pre>


    <h3>16. Race Condition</h3>

    <p>
      A <strong>race condition</strong> can occur when multiple threads
      access and modify shared data without proper synchronization.
    </p>

    <p>
      The final result may depend on the timing or order in which the
      threads execute.
    </p>

    <pre><code>counter = 0</code></pre>

    <p>
      If multiple threads modify the same shared variable, synchronization
      may be required.
    </p>


    <h3>17. Lock</h3>

    <p>
      A <strong>Lock</strong> is used to protect shared resources so that
      only one thread can execute a critical section at a time.
    </p>

    <pre><code>import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter

    with lock:
        counter += 1

threads = []

for i in range(5):
    t = threading.Thread(target=increment)
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print("Counter:", counter)</code></pre>


    <h3>18. Why Use a Lock?</h3>

    <p>
      A lock helps prevent multiple threads from modifying shared data
      at the same time when that would cause incorrect or inconsistent
      results.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Without Lock</th>
          <th>With Lock</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Multiple threads may enter a critical section together.</td>
          <td>Only one thread at a time can hold the lock.</td>
        </tr>

        <tr>
          <td>Shared data may become inconsistent.</td>
          <td>Shared operations can be synchronized.</td>
        </tr>
      </tbody>
    </table>


    <h3>19. Lock acquire() and release()</h3>

    <p>
      A lock can be explicitly acquired and released.
    </p>

    <pre><code>import threading

lock = threading.Lock()

lock.acquire()

try:
    print("Critical section")
finally:
    lock.release()</code></pre>

    <p>
      Using <strong>with lock:</strong> is usually simpler and safer.
    </p>


    <h3>20. Semaphore</h3>

    <p>
      A <strong>Semaphore</strong> controls how many threads can access
      a resource at the same time.
    </p>

    <pre><code>import threading
import time

semaphore = threading.Semaphore(2)

def task(number):
    with semaphore:
        print("Thread", number, "is using resource")
        time.sleep(1)

threads = []

for i in range(5):
    t = threading.Thread(
        target=task,
        args=(i,)
    )

    threads.append(t)
    t.start()

for t in threads:
    t.join()</code></pre>


    <h3>21. Event</h3>

    <p>
      A <strong>threading.Event</strong> allows one thread to signal
      another thread that an event or condition has occurred.
    </p>

    <pre><code>import threading

event = threading.Event()

def worker():
    print("Waiting for signal...")
    event.wait()
    print("Signal received!")

t = threading.Thread(target=worker)

t.start()

event.set()

t.join()</code></pre>


    <h3>22. Threading for I/O-Bound Tasks</h3>

    <p>
      Multithreading can be useful for I/O-bound tasks such as network
      communication, waiting for files, or other operations where the
      program spends time waiting.
    </p>

    <pre><code>import threading
import time

def download_file(name):
    print("Downloading", name)
    time.sleep(2)
    print("Finished", name)

t1 = threading.Thread(
    target=download_file,
    args=("file1",)
)

t2 = threading.Thread(
    target=download_file,
    args=("file2",)
)

t1.start()
t2.start()

t1.join()
t2.join()

print("All downloads completed")</code></pre>


    <h3>23. Multithreading and the GIL</h3>

    <p>
      In standard CPython, the <strong>Global Interpreter Lock (GIL)</strong>
      means that only one thread executes Python bytecode at a time within
      a process.
    </p>

    <p>
      Because of this, Python threads are generally more useful for
      I/O-bound work than for CPU-bound Python code.
    </p>


    <h3>24. I/O-Bound vs CPU-Bound Tasks</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Task Type</th>
          <th>Examples</th>
          <th>Common Approach</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>I/O-Bound</td>
          <td>Network requests, file operations, waiting for external services.</td>
          <td>Threading can be useful.</td>
        </tr>

        <tr>
          <td>CPU-Bound</td>
          <td>Large calculations, intensive data processing.</td>
          <td>Multiprocessing or other approaches may be more suitable.</td>
        </tr>
      </tbody>
    </table>


    <h3>25. Multithreading vs Multiprocessing</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Multithreading</th>
          <th>Multiprocessing</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Execution Unit</td>
          <td>Threads</td>
          <td>Processes</td>
        </tr>

        <tr>
          <td>Memory</td>
          <td>Shared process memory</td>
          <td>Separate process memory</td>
        </tr>

        <tr>
          <td>Best Use</td>
          <td>Many I/O-bound tasks</td>
          <td>CPU-bound tasks</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Can use shared memory</td>
          <td>Requires process communication mechanisms</td>
        </tr>

        <tr>
          <td>CPython GIL</td>
          <td>Affects Python bytecode execution</td>
          <td>Each process has its own interpreter and GIL</td>
        </tr>
      </tbody>
    </table>


    <h3>26. Thread Safety</h3>

    <p>
      <strong>Thread safety</strong> means that shared data and resources
      can be accessed by multiple threads without causing incorrect
      behavior.
    </p>

    <p>
      Locks, semaphores, events, and other synchronization mechanisms
      can be used when required.
    </p>


    <h3>27. Thread Lifecycle</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Stage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Created</td>
          <td>A Thread object is created.</td>
        </tr>

        <tr>
          <td>Started</td>
          <td>start() begins thread execution.</td>
        </tr>

        <tr>
          <td>Running</td>
          <td>The thread executes its target function.</td>
        </tr>

        <tr>
          <td>Waiting</td>
          <td>The thread may wait for a resource, event, or another thread.</td>
        </tr>

        <tr>
          <td>Finished</td>
          <td>The target function completes and the thread terminates.</td>
        </tr>
      </tbody>
    </table>


    <h3>28. ThreadPoolExecutor</h3>

    <p>
      Python also provides <strong>ThreadPoolExecutor</strong> through
      the <strong>concurrent.futures</strong> module. It provides a
      convenient way to manage a pool of worker threads.
    </p>

    <pre><code>from concurrent.futures import ThreadPoolExecutor

def square(number):
    return number * number

with ThreadPoolExecutor(max_workers=3) as executor:
    results = executor.map(square, [1, 2, 3, 4, 5])

    for result in results:
        print(result)</code></pre>


    <h3>29. Advantages of Multithreading</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Concurrency</td>
          <td>Multiple tasks can make progress concurrently.</td>
        </tr>

        <tr>
          <td>Useful for I/O</td>
          <td>Can improve responsiveness during waiting operations.</td>
        </tr>

        <tr>
          <td>Shared Memory</td>
          <td>Threads within a process can access shared data.</td>
        </tr>

        <tr>
          <td>Responsiveness</td>
          <td>Can help applications remain responsive while background work occurs.</td>
        </tr>
      </tbody>
    </table>


    <h3>30. Disadvantages of Multithreading</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Disadvantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Race Conditions</td>
          <td>Shared data can cause synchronization problems.</td>
        </tr>

        <tr>
          <td>Complexity</td>
          <td>Concurrent programs can be harder to design and debug.</td>
        </tr>

        <tr>
          <td>GIL in CPython</td>
          <td>Limits simultaneous execution of Python bytecode in standard CPython.</td>
        </tr>

        <tr>
          <td>Synchronization</td>
          <td>Locks and other mechanisms may be required for shared resources.</td>
        </tr>
      </tbody>
    </table>


    <h3>31. Complete Multithreading Example</h3>

    <pre><code>import threading
import time

def task(name):
    print(name, "started")
    time.sleep(2)
    print(name, "finished")

t1 = threading.Thread(
    target=task,
    args=("Task 1",)
)

t2 = threading.Thread(
    target=task,
    args=("Task 2",)
)

t1.start()
t2.start()

t1.join()
t2.join()

print("All tasks completed")</code></pre>


    <h3>32. Multithreading Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Thread</td>
          <td>A unit of execution within a process.</td>
        </tr>

        <tr>
          <td>threading</td>
          <td>Python module for working with threads.</td>
        </tr>

        <tr>
          <td>Thread()</td>
          <td>Creates a thread object.</td>
        </tr>

        <tr>
          <td>start()</td>
          <td>Starts a thread.</td>
        </tr>

        <tr>
          <td>join()</td>
          <td>Waits for a thread to finish.</td>
        </tr>

        <tr>
          <td>Lock</td>
          <td>Protects shared resources from concurrent access.</td>
        </tr>

        <tr>
          <td>Semaphore</td>
          <td>Limits simultaneous access to a resource.</td>
        </tr>

        <tr>
          <td>Event</td>
          <td>Provides a mechanism for threads to signal each other.</td>
        </tr>

        <tr>
          <td>Daemon Thread</td>
          <td>Background thread that does not keep the process alive by itself.</td>
        </tr>

        <tr>
          <td>ThreadPoolExecutor</td>
          <td>Convenient interface for managing a pool of threads.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a thread that prints a simple message.',
    'Create two threads that execute two different functions.',
    'Pass arguments to a thread using the args parameter.',
    'Use start() and join() to control thread execution.',
    'Create multiple threads and print their names.',
    'Use threading.current_thread() to display the current thread.',
    'Create a program that uses a Lock to safely update shared data.',
    'Create a daemon thread that performs a background task.',
    'Use Semaphore to limit the number of threads accessing a resource.',
    'Create a ThreadPoolExecutor and execute multiple tasks concurrently.'
  ],

  code: `import threading
import time

def task(name):
    print(name, "started")
    time.sleep(2)
    print(name, "finished")

t1 = threading.Thread(
    target=task,
    args=("Task 1",)
)

t2 = threading.Thread(
    target=task,
    args=("Task 2",)
)

t1.start()
t2.start()

t1.join()
t2.join()

print("All tasks completed")`
},
  {
  key: 'multiprocessing',
  title: 'Multiprocessing',
  description: 'Multiprocessing is a technique that allows a Python program to run multiple processes independently. Each process has its own memory space and Python interpreter, making multiprocessing useful for CPU-bound tasks that can benefit from parallel execution.',

  theory: [
    'Multiprocessing allows a Python program to create and execute multiple processes. Each process runs independently and has its own memory space. In standard CPython, multiprocessing can be useful for CPU-bound tasks because separate processes can execute Python code in parallel on multiple CPU cores.',

    `
    <h3>1. What is Multiprocessing?</h3>

    <p>
      <strong>Multiprocessing</strong> is a technique in which a program
      uses multiple processes to perform multiple tasks.
    </p>

    <p>
      A process is an independent execution unit with its own memory
      space and Python interpreter.
    </p>

    <p>
      Multiprocessing is especially useful for <strong>CPU-bound tasks</strong>
      such as mathematical calculations, data processing, image processing,
      and other computationally intensive operations.
    </p>

    <pre><code>from multiprocessing import Process</code></pre>


    <h3>2. What is a Process?</h3>

    <p>
      A <strong>process</strong> is an independent running instance of
      a program.
    </p>

    <p>
      Each process normally has its own memory space and resources.
      Processes can execute independently of one another.
    </p>

    <pre><code>import multiprocessing

print("Process ID:", multiprocessing.current_process().pid)</code></pre>


    <h3>3. Multiprocessing Module</h3>

    <p>
      Python provides the built-in
      <strong>multiprocessing</strong> module for creating and managing
      processes.
    </p>

    <pre><code>import multiprocessing</code></pre>

    <p>
      The module provides classes and functions for starting processes,
      communicating between processes, sharing selected data, and
      managing process pools.
    </p>


    <h3>4. Creating a Process</h3>

    <p>
      A process can be created using the
      <strong>multiprocessing.Process()</strong> class.
    </p>

    <pre><code>from multiprocessing import Process

def task():
    print("Task is running")

process = Process(target=task)

process.start()
process.join()</code></pre>


    <h3>5. start() Method</h3>

    <p>
      The <strong>start()</strong> method starts the process and causes
      the target function to execute in the new process.
    </p>

    <pre><code>from multiprocessing import Process

def task():
    print("Child process is running")

p = Process(target=task)

p.start()
p.join()</code></pre>


    <h3>6. join() Method</h3>

    <p>
      The <strong>join()</strong> method makes the current process wait
      until the specified child process finishes.
    </p>

    <pre><code>from multiprocessing import Process

def task():
    print("Task completed")

p = Process(target=task)

p.start()
p.join()

print("Main process continues")</code></pre>


    <h3>7. Multiple Processes</h3>

    <p>
      A program can create multiple processes to perform different
      tasks concurrently.
    </p>

    <pre><code>from multiprocessing import Process

def task1():
    print("Task 1 running")

def task2():
    print("Task 2 running")

p1 = Process(target=task1)
p2 = Process(target=task2)

p1.start()
p2.start()

p1.join()
p2.join()

print("Both processes completed")</code></pre>


    <h3>8. Passing Arguments to a Process</h3>

    <p>
      Arguments can be passed to a process using the
      <strong>args</strong> parameter.
    </p>

    <pre><code>from multiprocessing import Process

def add(a, b):
    print("Sum:", a + b)

p = Process(
    target=add,
    args=(10, 20)
)

p.start()
p.join()</code></pre>


    <h3>9. Process Name</h3>

    <p>
      A process can be assigned a name to make it easier to identify.
    </p>

    <pre><code>from multiprocessing import Process

def task():
    print("Child process is running")

p = Process(
    target=task,
    name="Worker-1"
)

p.start()

print("Process name:", p.name)

p.join()</code></pre>


    <h3>10. Process ID</h3>

    <p>
      Each running process has a unique process identifier called a
      <strong>PID</strong>.
    </p>

    <pre><code>from multiprocessing import Process
import os

def task():
    print("Child PID:", os.getpid())

p = Process(target=task)

p.start()

print("Main PID:", os.getpid())

p.join()</code></pre>


    <h3>11. current_process()</h3>

    <p>
      The <strong>current_process()</strong> function returns the
      currently running process object.
    </p>

    <pre><code>import multiprocessing

process = multiprocessing.current_process()

print("Process name:", process.name)
print("Process ID:", process.pid)</code></pre>


    <h3>12. CPU-Bound Tasks</h3>

    <p>
      Multiprocessing is particularly useful for tasks that require
      significant CPU computation.
    </p>

    <p>Examples include:</p>

    <ul>
      <li>Large mathematical calculations</li>
      <li>Image processing</li>
      <li>Data processing</li>
      <li>Scientific calculations</li>
      <li>CPU-intensive algorithms</li>
    </ul>


    <h3>13. Example of CPU-Bound Work</h3>

    <pre><code>def calculate():
    total = 0

    for i in range(10_000_000):
        total += i

    print(total)</code></pre>

    <p>
      Such CPU-intensive work may benefit from multiprocessing when it
      can be divided into independent tasks.
    </p>


    <h3>14. Multiprocessing Pool</h3>

    <p>
      A <strong>Pool</strong> provides a convenient way to distribute
      multiple tasks across a group of worker processes.
    </p>

    <pre><code>from multiprocessing import Pool

def square(number):
    return number * number

if __name__ == "__main__":
    with Pool(4) as pool:
        results = pool.map(
            square,
            [1, 2, 3, 4, 5]
        )

    print(results)</code></pre>


    <h3>15. pool.map()</h3>

    <p>
      The <strong>map()</strong> method applies a function to each item
      in an iterable using the worker processes in the pool.
    </p>

    <pre><code>from multiprocessing import Pool

def square(number):
    return number * number

if __name__ == "__main__":
    with Pool(3) as pool:
        results = pool.map(
            square,
            [1, 2, 3, 4, 5]
        )

    print(results)</code></pre>

    <p><strong>Output:</strong></p>

    <pre><code>[1, 4, 9, 16, 25]</code></pre>


    <h3>16. Pool Size</h3>

    <p>
      The number of worker processes can be specified when creating
      a Pool.
    </p>

    <pre><code>from multiprocessing import Pool

if __name__ == "__main__":
    with Pool(4) as pool:
        print(pool.map(
            str,
            [1, 2, 3, 4]
        ))</code></pre>

    <p>
      Here, the pool is configured with four worker processes.
    </p>


    <h3>17. Multiprocessing Queue</h3>

    <p>
      A <strong>Queue</strong> can be used to exchange data between
      processes safely.
    </p>

    <pre><code>from multiprocessing import Process, Queue

def worker(queue):
    queue.put("Hello from child process")

if __name__ == "__main__":
    queue = Queue()

    p = Process(
        target=worker,
        args=(queue,)
    )

    p.start()

    print(queue.get())

    p.join()</code></pre>


    <h3>18. Multiprocessing Pipe</h3>

    <p>
      A <strong>Pipe</strong> provides a communication channel between
      processes.
    </p>

    <pre><code>from multiprocessing import Process, Pipe

def worker(connection):
    connection.send("Hello from child")
    connection.close()

if __name__ == "__main__":
    parent_conn, child_conn = Pipe()

    p = Process(
        target=worker,
        args=(child_conn,)
    )

    p.start()

    print(parent_conn.recv())

    p.join()</code></pre>


    <h3>19. Queue vs Pipe</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Queue</th>
          <th>Pipe</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Purpose</td>
          <td>Exchange data between processes.</td>
          <td>Communication channel between processes.</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Message-based queue.</td>
          <td>Connection-based.</td>
        </tr>

        <tr>
          <td>Use Case</td>
          <td>Useful for producer-consumer patterns.</td>
          <td>Useful for direct process communication.</td>
        </tr>
      </tbody>
    </table>


    <h3>20. Shared Value</h3>

    <p>
      Processes normally have separate memory. The
      <strong>multiprocessing.Value</strong> class can be used when
      processes need to share a simple value.
    </p>

    <pre><code>from multiprocessing import Process, Value

def increment(number):
    with number.get_lock():
        number.value += 1

if __name__ == "__main__":
    number = Value("i", 0)

    processes = []

    for i in range(5):
        p = Process(
            target=increment,
            args=(number,)
        )

        processes.append(p)
        p.start()

    for p in processes:
        p.join()

    print("Value:", number.value)</code></pre>


    <h3>21. Shared Array</h3>

    <p>
      The <strong>multiprocessing.Array</strong> class can be used to
      create a shared array between processes.
    </p>

    <pre><code>from multiprocessing import Process, Array

def update(numbers):
    numbers[0] = 100

if __name__ == "__main__":
    numbers = Array("i", [1, 2, 3, 4])

    p = Process(
        target=update,
        args=(numbers,)
    )

    p.start()
    p.join()

    print(list(numbers))</code></pre>


    <h3>22. Lock in Multiprocessing</h3>

    <p>
      A <strong>multiprocessing.Lock</strong> can be used to protect
      shared resources from being accessed by multiple processes at
      the same time.
    </p>

    <pre><code>from multiprocessing import Process, Lock

def task(lock, number):
    with lock:
        print("Process", number, "is using resource")

if __name__ == "__main__":
    lock = Lock()

    processes = []

    for i in range(3):
        p = Process(
            target=task,
            args=(lock, i)
        )

        processes.append(p)
        p.start()

    for p in processes:
        p.join()</code></pre>


    <h3>23. Daemon Process</h3>

    <p>
      A process can be configured as a daemon process using the
      <strong>daemon</strong> attribute.
    </p>

    <pre><code>from multiprocessing import Process
import time

def background_task():
    while True:
        print("Background process")
        time.sleep(1)

if __name__ == "__main__":
    p = Process(target=background_task)

    p.daemon = True
    p.start()

    time.sleep(3)

    print("Main process finished")</code></pre>


    <h3>24. Process Termination</h3>

    <p>
      A process can be terminated using the <strong>terminate()</strong>
      method.
    </p>

    <pre><code>from multiprocessing import Process
import time

def task():
    while True:
        print("Running...")
        time.sleep(1)

if __name__ == "__main__":
    p = Process(target=task)

    p.start()

    time.sleep(2)

    p.terminate()
    p.join()

    print("Process terminated")</code></pre>


    <h3>25. Checking Process Status</h3>

    <p>
      The <strong>is_alive()</strong> method checks whether a process
      is currently running.
    </p>

    <pre><code>from multiprocessing import Process
import time

def task():
    time.sleep(2)

if __name__ == "__main__":
    p = Process(target=task)

    p.start()

    print("Running:", p.is_alive())

    p.join()

    print("Running:", p.is_alive())</code></pre>


    <h3>26. if __name__ == "__main__"</h3>

    <p>
      When using multiprocessing, especially on platforms such as
      Windows, process-creating code should generally be placed inside
      an <strong>if __name__ == "__main__":</strong> block.
    </p>

    <pre><code>from multiprocessing import Process

def task():
    print("Child process")

if __name__ == "__main__":
    p = Process(target=task)

    p.start()
    p.join()</code></pre>

    <p>
      This prevents child processes from unintentionally executing the
      process-creation code again when the module is imported.
    </p>


    <h3>27. Multiprocessing vs Multithreading</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Multithreading</th>
          <th>Multiprocessing</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Execution Unit</td>
          <td>Thread</td>
          <td>Process</td>
        </tr>

        <tr>
          <td>Memory</td>
          <td>Threads share process memory.</td>
          <td>Processes have separate memory spaces.</td>
        </tr>

        <tr>
          <td>Best For</td>
          <td>Many I/O-bound tasks.</td>
          <td>CPU-bound tasks.</td>
        </tr>

        <tr>
          <td>CPython GIL</td>
          <td>Limits simultaneous Python bytecode execution.</td>
          <td>Separate processes can execute Python code in parallel.</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Shared memory and synchronization.</td>
          <td>Queues, Pipes, shared objects, and other IPC mechanisms.</td>
        </tr>

        <tr>
          <td>Resource Usage</td>
          <td>Generally lighter.</td>
          <td>Generally more resource-intensive.</td>
        </tr>
      </tbody>
    </table>


    <h3>28. Advantages of Multiprocessing</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Parallel Execution</td>
          <td>Separate processes can execute Python code in parallel.</td>
        </tr>

        <tr>
          <td>CPU-Bound Tasks</td>
          <td>Useful for computationally intensive workloads.</td>
        </tr>

        <tr>
          <td>Memory Isolation</td>
          <td>Each process normally has its own memory space.</td>
        </tr>

        <tr>
          <td>Fault Isolation</td>
          <td>A failure in one process is generally isolated from other processes.</td>
        </tr>

        <tr>
          <td>Multiple CPU Cores</td>
          <td>Processes can take advantage of multiple CPU cores.</td>
        </tr>
      </tbody>
    </table>


    <h3>29. Disadvantages of Multiprocessing</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Disadvantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Higher Resource Usage</td>
          <td>Processes generally require more resources than threads.</td>
        </tr>

        <tr>
          <td>Communication Overhead</td>
          <td>Communication between processes can be more expensive than communication between threads.</td>
        </tr>

        <tr>
          <td>Memory Separation</td>
          <td>Processes do not normally share ordinary Python objects directly.</td>
        </tr>

        <tr>
          <td>Complexity</td>
          <td>Managing multiple processes and shared resources can be more complex.</td>
        </tr>
      </tbody>
    </table>


    <h3>30. Common Multiprocessing Classes and Functions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Class / Function</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Process()</td>
          <td>Creates a new process.</td>
        </tr>

        <tr>
          <td>start()</td>
          <td>Starts a process.</td>
        </tr>

        <tr>
          <td>join()</td>
          <td>Waits for a process to finish.</td>
        </tr>

        <tr>
          <td>Pool()</td>
          <td>Creates a pool of worker processes.</td>
        </tr>

        <tr>
          <td>Queue()</td>
          <td>Provides communication between processes.</td>
        </tr>

        <tr>
          <td>Pipe()</td>
          <td>Creates a communication channel between processes.</td>
        </tr>

        <tr>
          <td>Lock()</td>
          <td>Synchronizes access to shared resources.</td>
        </tr>

        <tr>
          <td>Value()</td>
          <td>Creates a shared value.</td>
        </tr>

        <tr>
          <td>Array()</td>
          <td>Creates a shared array.</td>
        </tr>

        <tr>
          <td>terminate()</td>
          <td>Terminates a process.</td>
        </tr>

        <tr>
          <td>is_alive()</td>
          <td>Checks whether a process is running.</td>
        </tr>
      </tbody>
    </table>


    <h3>31. Complete Multiprocessing Example</h3>

    <pre><code>from multiprocessing import Process
import time

def task(name):
    print(name, "started")
    time.sleep(2)
    print(name, "finished")

if __name__ == "__main__":

    p1 = Process(
        target=task,
        args=("Task 1",)
    )

    p2 = Process(
        target=task,
        args=("Task 2",)
    )

    p1.start()
    p2.start()

    p1.join()
    p2.join()

    print("All processes completed")</code></pre>


    <h3>32. Multiprocessing Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Multiprocessing</td>
          <td>Running multiple processes to perform tasks concurrently.</td>
        </tr>

        <tr>
          <td>Process</td>
          <td>An independent execution unit.</td>
        </tr>

        <tr>
          <td>Process()</td>
          <td>Creates a process.</td>
        </tr>

        <tr>
          <td>start()</td>
          <td>Starts a process.</td>
        </tr>

        <tr>
          <td>join()</td>
          <td>Waits for a process to finish.</td>
        </tr>

        <tr>
          <td>Pool()</td>
          <td>Manages a group of worker processes.</td>
        </tr>

        <tr>
          <td>Queue()</td>
          <td>Allows processes to exchange data.</td>
        </tr>

        <tr>
          <td>Pipe()</td>
          <td>Provides direct process communication.</td>
        </tr>

        <tr>
          <td>Lock()</td>
          <td>Synchronizes access to shared resources.</td>
        </tr>

        <tr>
          <td>Value / Array</td>
          <td>Provides selected forms of shared data.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a process that prints a simple message.',
    'Create two processes that execute two different functions.',
    'Pass arguments to a process using the args parameter.',
    'Use start() and join() to control process execution.',
    'Display the process ID using os.getpid().',
    'Create a Pool and calculate the squares of multiple numbers.',
    'Use Queue to send data from one process to another.',
    'Use Pipe to communicate between two processes.',
    'Use Lock to protect a shared resource.',
    'Create a CPU-intensive task and experiment with multiple processes.'
  ],

  code: `from multiprocessing import Process
import time

def task(name):
    print(name, "started")
    time.sleep(2)
    print(name, "finished")

if __name__ == "__main__":

    p1 = Process(
        target=task,
        args=("Task 1",)
    )

    p2 = Process(
        target=task,
        args=("Task 2",)
    )

    p1.start()
    p2.start()

    p1.join()
    p2.join()

    print("All processes completed")`
},
  {
  key: 'sqlite',
  title: 'SQLite',
  description: 'SQLite is a lightweight, serverless, self-contained relational database that stores data in a single database file. Python provides the built-in sqlite3 module for creating databases, tables, inserting records, retrieving data, updating records, deleting records, and managing transactions.',

  theory: [
    'SQLite is a lightweight relational database that does not require a separate database server. Python provides the built-in sqlite3 module to work with SQLite databases directly from Python programs.',

    `
    <h3>1. What is SQLite?</h3>

    <p>
      <strong>SQLite</strong> is a lightweight relational database management
      system. It stores the complete database in a single file and does not
      require a separate database server.
    </p>

    <p>
      SQLite is useful for small applications, learning projects,
      prototypes, desktop applications, testing, and applications that
      need a simple local database.
    </p>

    <h3>2. Features of SQLite</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Serverless</td>
          <td>No separate database server is required.</td>
        </tr>
        <tr>
          <td>Lightweight</td>
          <td>It is small and easy to use.</td>
        </tr>
        <tr>
          <td>Self-contained</td>
          <td>The database is stored in a single file.</td>
        </tr>
        <tr>
          <td>SQL Support</td>
          <td>It supports SQL for managing relational data.</td>
        </tr>
        <tr>
          <td>Portable</td>
          <td>The database file can be easily moved between systems.</td>
        </tr>
      </tbody>
    </table>

    <h3>3. SQLite in Python</h3>

    <p>
      Python provides the built-in <strong>sqlite3</strong> module for
      working with SQLite databases.
    </p>

    <pre><code>import sqlite3</code></pre>

    <p>
      No separate Python package is normally required to use the standard
      <strong>sqlite3</strong> module.
    </p>

    <h3>4. Connecting to a Database</h3>

    <p>
      The <strong>sqlite3.connect()</strong> function is used to create
      a connection to an SQLite database.
    </p>

    <pre><code>import sqlite3

connection = sqlite3.connect("school.db")

print("Database connected")

connection.close()</code></pre>

    <p>
      If the specified database file does not exist, SQLite normally
      creates it automatically.
    </p>

    <h3>5. In-Memory Database</h3>

    <p>
      SQLite can also create a temporary database in memory by using
      <strong>:memory:</strong>.
    </p>

    <pre><code>import sqlite3

connection = sqlite3.connect(":memory:")

print("In-memory database created")

connection.close()</code></pre>

    <p>
      An in-memory database is temporary and its data is lost when the
      connection is closed.
    </p>

    <h3>6. Cursor</h3>

    <p>
      A <strong>cursor</strong> is used to execute SQL statements and
      retrieve query results.
    </p>

    <pre><code>import sqlite3

connection = sqlite3.connect("school.db")

cursor = connection.cursor()

cursor.execute("SELECT 1")

print(cursor.fetchone())

connection.close()</code></pre>

    <h3>7. Creating a Table</h3>

    <p>
      The <strong>CREATE TABLE</strong> SQL statement is used to create
      a table.
    </p>

    <pre><code>import sqlite3

connection = sqlite3.connect("school.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    course TEXT
)
""")

connection.commit()
connection.close()</code></pre>

    <h3>8. Common SQLite Data Types</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>SQLite Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INTEGER</td>
          <td>Integer values.</td>
        </tr>
        <tr>
          <td>REAL</td>
          <td>Floating-point numbers.</td>
        </tr>
        <tr>
          <td>TEXT</td>
          <td>Text or string values.</td>
        </tr>
        <tr>
          <td>BLOB</td>
          <td>Binary data.</td>
        </tr>
        <tr>
          <td>NULL</td>
          <td>Represents a missing or unknown value.</td>
        </tr>
      </tbody>
    </table>

    <h3>9. Primary Key</h3>

    <p>
      A <strong>PRIMARY KEY</strong> uniquely identifies each record in
      a table.
    </p>

    <pre><code>CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
)</code></pre>

    <p>
      In this example, <strong>id</strong> is the primary key.
    </p>

    <h3>10. Inserting Data</h3>

    <p>
      The <strong>INSERT INTO</strong> statement is used to add records
      to a table.
    </p>

    <pre><code>import sqlite3

connection = sqlite3.connect("school.db")
cursor = connection.cursor()

cursor.execute("""
INSERT INTO students (name, age, course)
VALUES ('Rahul', 20, 'Python')
""")

connection.commit()
connection.close()</code></pre>

    <h3>11. Parameterized Queries</h3>

    <p>
      Parameterized queries should be used when inserting values supplied
      by users or other external sources. They help prevent SQL injection
      and avoid manually constructing SQL strings.
    </p>

    <pre><code>import sqlite3

connection = sqlite3.connect("school.db")
cursor = connection.cursor()

name = "Amit"
age = 21
course = "Python"

cursor.execute("""
INSERT INTO students (name, age, course)
VALUES (?, ?, ?)
""", (name, age, course))

connection.commit()
connection.close()</code></pre>

    <h3>12. Selecting Data</h3>

    <p>
      The <strong>SELECT</strong> statement is used to retrieve records.
    </p>

    <pre><code>import sqlite3

connection = sqlite3.connect("school.db")
cursor = connection.cursor()

cursor.execute("SELECT * FROM students")

rows = cursor.fetchall()

for row in rows:
    print(row)

connection.close()</code></pre>

    <h3>13. fetchone()</h3>

    <p>
      The <strong>fetchone()</strong> method retrieves the next available
      row from the query result.
    </p>

    <pre><code>cursor.execute("SELECT * FROM students")

row = cursor.fetchone()

print(row)</code></pre>

    <h3>14. fetchall()</h3>

    <p>
      The <strong>fetchall()</strong> method retrieves all remaining rows
      from the query result.
    </p>

    <pre><code>cursor.execute("SELECT * FROM students")

rows = cursor.fetchall()

for row in rows:
    print(row)</code></pre>

    <h3>15. fetchmany()</h3>

    <p>
      The <strong>fetchmany()</strong> method retrieves a specified number
      of rows.
    </p>

    <pre><code>cursor.execute("SELECT * FROM students")

rows = cursor.fetchmany(3)

for row in rows:
    print(row)</code></pre>

    <h3>16. WHERE Clause</h3>

    <p>
      The <strong>WHERE</strong> clause is used to filter records.
    </p>

    <pre><code>cursor.execute(
    "SELECT * FROM students WHERE age > ?",
    (18,)
)

for row in cursor.fetchall():
    print(row)</code></pre>

    <h3>17. Updating Data</h3>

    <p>
      The <strong>UPDATE</strong> statement is used to modify existing
      records.
    </p>

    <pre><code>cursor.execute("""
UPDATE students
SET course = ?
WHERE id = ?
""", ("Web Development", 1))

connection.commit()</code></pre>

    <h3>18. Deleting Data</h3>

    <p>
      The <strong>DELETE</strong> statement is used to remove records
      from a table.
    </p>

    <pre><code>cursor.execute(
    "DELETE FROM students WHERE id = ?",
    (1,)
)

connection.commit()</code></pre>

    <h3>19. Counting Records</h3>

    <p>
      SQL aggregate functions such as <strong>COUNT()</strong> can be
      used to count records.
    </p>

    <pre><code>cursor.execute("SELECT COUNT(*) FROM students")

count = cursor.fetchone()[0]

print("Total students:", count)</code></pre>

    <h3>20. Sorting Data</h3>

    <p>
      The <strong>ORDER BY</strong> clause is used to sort query results.
    </p>

    <pre><code>cursor.execute("""
SELECT * FROM students
ORDER BY age DESC
""")

for row in cursor.fetchall():
    print(row)</code></pre>

    <h3>21. Limiting Results</h3>

    <p>
      The <strong>LIMIT</strong> clause can restrict the number of rows
      returned by a query.
    </p>

    <pre><code>cursor.execute("""
SELECT * FROM students
LIMIT 5
""")

for row in cursor.fetchall():
    print(row)</code></pre>

    <h3>22. Transactions</h3>

    <p>
      A transaction groups database operations into a unit of work.
      Changes can be committed or rolled back.
    </p>

    <pre><code>import sqlite3

connection = sqlite3.connect("school.db")

try:
    cursor = connection.cursor()

    cursor.execute("""
    INSERT INTO students (name, age, course)
    VALUES (?, ?, ?)
    """, ("Neha", 20, "Python"))

    connection.commit()

except Exception:
    connection.rollback()

finally:
    connection.close()</code></pre>

    <h3>23. commit()</h3>

    <p>
      The <strong>commit()</strong> method saves the changes made during
      a transaction.
    </p>

    <pre><code>connection.commit()</code></pre>

    <h3>24. rollback()</h3>

    <p>
      The <strong>rollback()</strong> method cancels uncommitted changes
      made during the current transaction.
    </p>

    <pre><code>connection.rollback()</code></pre>

    <h3>25. Using with Connection</h3>

    <p>
      A connection can be used as a context manager to help manage
      transactions.
    </p>

    <pre><code>import sqlite3

with sqlite3.connect("school.db") as connection:
    cursor = connection.cursor()

    cursor.execute("""
    INSERT INTO students (name, age, course)
    VALUES (?, ?, ?)
    """, ("Ravi", 22, "C++"))</code></pre>

    <h3>26. Row Factory</h3>

    <p>
      SQLite normally returns rows as tuples. The
      <strong>sqlite3.Row</strong> factory allows values to be accessed
      by column name as well as index.
    </p>

    <pre><code>import sqlite3

connection = sqlite3.connect("school.db")

connection.row_factory = sqlite3.Row

cursor = connection.cursor()

cursor.execute("SELECT * FROM students")

row = cursor.fetchone()

if row:
    print(row["name"])

connection.close()</code></pre>

    <h3>27. Multiple Records</h3>

    <p>
      Multiple records can be inserted efficiently using
      <strong>executemany()</strong>.
    </p>

    <pre><code>import sqlite3

connection = sqlite3.connect("school.db")
cursor = connection.cursor()

students = [
    ("Aman", 20, "Python"),
    ("Riya", 21, "Java"),
    ("Karan", 22, "C++")
]

cursor.executemany("""
INSERT INTO students (name, age, course)
VALUES (?, ?, ?)
""", students)

connection.commit()
connection.close()</code></pre>

    <h3>28. execute()</h3>

    <p>
      The <strong>execute()</strong> method executes a single SQL
      statement.
    </p>

    <pre><code>cursor.execute(
    "SELECT * FROM students"
)</code></pre>

    <h3>29. executemany()</h3>

    <p>
      The <strong>executemany()</strong> method executes the same SQL
      statement for multiple sets of parameters.
    </p>

    <pre><code>cursor.executemany(
    "INSERT INTO students (name, age) VALUES (?, ?)",
    [
        ("A", 20),
        ("B", 21),
        ("C", 22)
    ]
)</code></pre>

    <h3>30. executescript()</h3>

    <p>
      The <strong>executescript()</strong> method can execute multiple
      SQL statements supplied as a script.
    </p>

    <pre><code>cursor.executescript("""
CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY,
    name TEXT
);

INSERT INTO courses (name)
VALUES ('Python');

INSERT INTO courses (name)
VALUES ('C++');
""")</code></pre>

    <h3>31. SQLite CRUD Operations</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operation</th>
          <th>SQL Command</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Create</td>
          <td>INSERT</td>
          <td>Adds new records.</td>
        </tr>
        <tr>
          <td>Read</td>
          <td>SELECT</td>
          <td>Retrieves records.</td>
        </tr>
        <tr>
          <td>Update</td>
          <td>UPDATE</td>
          <td>Modifies existing records.</td>
        </tr>
        <tr>
          <td>Delete</td>
          <td>DELETE</td>
          <td>Removes records.</td>
        </tr>
      </tbody>
    </table>

    <h3>32. SQLite Database Structure</h3>

    <pre><code>school.db
    |
    └── students
          |
          ├── id
          ├── name
          ├── age
          └── course</code></pre>

    <h3>33. Complete SQLite Example</h3>

    <pre><code>import sqlite3

connection = sqlite3.connect("school.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER,
    course TEXT
)
""")

cursor.execute("""
INSERT INTO students (name, age, course)
VALUES (?, ?, ?)
""", ("Jitesh", 21, "Python"))

connection.commit()

cursor.execute("SELECT * FROM students")

students = cursor.fetchall()

for student in students:
    print(student)

connection.close()</code></pre>

    <h3>34. Advantages of SQLite</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Easy to Use</td>
          <td>No separate database server is required.</td>
        </tr>
        <tr>
          <td>Lightweight</td>
          <td>Suitable for many small and local applications.</td>
        </tr>
        <tr>
          <td>Portable</td>
          <td>The database is stored in a single file.</td>
        </tr>
        <tr>
          <td>Built into Python</td>
          <td>The sqlite3 module is included with standard Python installations.</td>
        </tr>
      </tbody>
    </table>

    <h3>35. Limitations of SQLite</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Limitation</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Concurrent Writes</td>
          <td>It is not designed for workloads with many simultaneous writers.</td>
        </tr>
        <tr>
          <td>Server Features</td>
          <td>It does not provide the client-server architecture of databases such as PostgreSQL or MySQL.</td>
        </tr>
        <tr>
          <td>Large Applications</td>
          <td>Some large multi-user applications may require a server-based database.</td>
        </tr>
      </tbody>
    </table>

    <h3>36. SQLite vs Server Database</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>SQLite</th>
          <th>Server Database</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Server Required</td>
          <td>No</td>
          <td>Usually yes</td>
        </tr>
        <tr>
          <td>Storage</td>
          <td>Single database file</td>
          <td>Managed by database server</td>
        </tr>
        <tr>
          <td>Setup</td>
          <td>Very simple</td>
          <td>Usually requires server configuration</td>
        </tr>
        <tr>
          <td>Typical Use</td>
          <td>Local applications, prototypes, small projects</td>
          <td>Multi-user and larger applications</td>
        </tr>
      </tbody>
    </table>

    <h3>37. SQLite Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SQLite</td>
          <td>Lightweight, serverless relational database.</td>
        </tr>
        <tr>
          <td>sqlite3</td>
          <td>Python's built-in module for SQLite.</td>
        </tr>
        <tr>
          <td>connect()</td>
          <td>Creates a database connection.</td>
        </tr>
        <tr>
          <td>cursor()</td>
          <td>Creates a cursor for executing SQL.</td>
        </tr>
        <tr>
          <td>execute()</td>
          <td>Executes an SQL statement.</td>
        </tr>
        <tr>
          <td>fetchone()</td>
          <td>Fetches one row.</td>
        </tr>
        <tr>
          <td>fetchall()</td>
          <td>Fetches all remaining rows.</td>
        </tr>
        <tr>
          <td>commit()</td>
          <td>Saves transaction changes.</td>
        </tr>
        <tr>
          <td>rollback()</td>
          <td>Reverts uncommitted changes.</td>
        </tr>
        <tr>
          <td>close()</td>
          <td>Closes the database connection.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create an SQLite database using the sqlite3 module.',
    'Create a students table with id, name, age, and course columns.',
    'Insert multiple student records into the table.',
    'Retrieve all records using SELECT and fetchall().',
    'Retrieve a single record using fetchone().',
    'Update a student record using UPDATE.',
    'Delete a student record using DELETE.',
    'Use parameterized queries for inserting and searching data.',
    'Create a program that performs complete CRUD operations.',
    'Use a transaction with commit() and rollback().'
  ],

  code: `import sqlite3

connection = sqlite3.connect("school.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER,
    course TEXT
)
""")

cursor.execute("""
INSERT INTO students (name, age, course)
VALUES (?, ?, ?)
""", ("Jitesh", 21, "Python"))

connection.commit()

cursor.execute("SELECT * FROM students")

students = cursor.fetchall()

for student in students:
    print(student)

connection.close()`
},
  {
  key: 'mysql',
  title: 'MySQL',
  description: 'MySQL is a popular relational database management system used to store, organize, and manage structured data. Python applications can connect to MySQL using database connector libraries and perform operations such as creating tables, inserting data, retrieving records, updating records, and deleting data.',

  theory: [
    'MySQL is a relational database management system that stores data in tables. Python programs can connect to MySQL using a MySQL connector and execute SQL queries to manage application data.',

    `
    <h3>1. What is MySQL?</h3>

    <p>
      <strong>MySQL</strong> is a popular relational database management
      system (RDBMS). It stores data in tables consisting of rows and
      columns.
    </p>

    <p>
      MySQL uses <strong>SQL (Structured Query Language)</strong> to create,
      read, update, and delete data.
    </p>

    <p>
      MySQL is commonly used in websites, web applications, business
      applications, content management systems, and many other software
      systems.
    </p>


    <h3>2. Features of MySQL</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Relational Database</td>
          <td>Stores structured data in tables.</td>
        </tr>

        <tr>
          <td>SQL Support</td>
          <td>Uses SQL for database operations.</td>
        </tr>

        <tr>
          <td>Multi-User</td>
          <td>Supports multiple users and applications.</td>
        </tr>

        <tr>
          <td>Scalable</td>
          <td>Can be used for applications ranging from small projects to large systems.</td>
        </tr>

        <tr>
          <td>Security</td>
          <td>Provides users, permissions, authentication, and other security features.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. MySQL and Python</h3>

    <p>
      Python can communicate with MySQL using a MySQL connector library.
      One commonly used package is <strong>mysql-connector-python</strong>.
    </p>

    <pre><code>pip install mysql-connector-python</code></pre>

    <p>
      After installation, the connector can be imported into a Python
      program.
    </p>

    <pre><code>import mysql.connector</code></pre>


    <h3>4. Connecting Python to MySQL</h3>

    <p>
      The <strong>mysql.connector.connect()</strong> function can be used
      to establish a connection to a MySQL server.
    </p>

    <pre><code>import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password"
)

print("Connected to MySQL")

connection.close()</code></pre>


    <h3>5. Connection Parameters</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>host</td>
          <td>Specifies the MySQL server address.</td>
        </tr>

        <tr>
          <td>user</td>
          <td>Specifies the MySQL username.</td>
        </tr>

        <tr>
          <td>password</td>
          <td>Specifies the user's password.</td>
        </tr>

        <tr>
          <td>database</td>
          <td>Specifies the database to use.</td>
        </tr>

        <tr>
          <td>port</td>
          <td>Specifies the MySQL server port when required.</td>
        </tr>
      </tbody>
    </table>


    <h3>6. Creating a Database</h3>

    <p>
      The <strong>CREATE DATABASE</strong> SQL statement is used to
      create a new database.
    </p>

    <pre><code>import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password"
)

cursor = connection.cursor()

cursor.execute(
    "CREATE DATABASE IF NOT EXISTS school"
)

print("Database created")

connection.close()</code></pre>


    <h3>7. Connecting to a Specific Database</h3>

    <pre><code>import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="school"
)

print("Connected to school database")

connection.close()</code></pre>


    <h3>8. Creating a Cursor</h3>

    <p>
      A <strong>cursor</strong> is used to execute SQL statements and
      retrieve query results.
    </p>

    <pre><code>cursor = connection.cursor()</code></pre>


    <h3>9. Creating a Table</h3>

    <p>
      The <strong>CREATE TABLE</strong> statement is used to create
      tables inside a database.
    </p>

    <pre><code>cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100)
)
""")</code></pre>


    <h3>10. MySQL Data Types</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Data Type</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>INT</td>
          <td>Stores integer values.</td>
        </tr>

        <tr>
          <td>VARCHAR</td>
          <td>Stores variable-length text.</td>
        </tr>

        <tr>
          <td>TEXT</td>
          <td>Stores larger text values.</td>
        </tr>

        <tr>
          <td>DECIMAL</td>
          <td>Stores exact decimal values.</td>
        </tr>

        <tr>
          <td>DATE</td>
          <td>Stores date values.</td>
        </tr>

        <tr>
          <td>DATETIME</td>
          <td>Stores date and time values.</td>
        </tr>

        <tr>
          <td>BOOLEAN</td>
          <td>Represents true or false values.</td>
        </tr>
      </tbody>
    </table>


    <h3>11. Primary Key</h3>

    <p>
      A <strong>PRIMARY KEY</strong> uniquely identifies each record in
      a table.
    </p>

    <pre><code>CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT
)</code></pre>


    <h3>12. AUTO_INCREMENT</h3>

    <p>
      <strong>AUTO_INCREMENT</strong> automatically generates a new
      numeric value for a column when a new record is inserted.
    </p>

    <pre><code>id INT PRIMARY KEY AUTO_INCREMENT</code></pre>


    <h3>13. Inserting Data</h3>

    <p>
      The <strong>INSERT INTO</strong> statement is used to add records
      to a table.
    </p>

    <pre><code>sql = """
INSERT INTO students (name, age, course)
VALUES (%s, %s, %s)
"""

values = ("Rahul", 20, "Python")

cursor.execute(sql, values)

connection.commit()</code></pre>


    <h3>14. Parameterized Queries</h3>

    <p>
      Parameterized queries should be used when values come from users
      or other external sources. They separate SQL code from data and
      help protect against SQL injection.
    </p>

    <pre><code>sql = """
INSERT INTO students (name, age, course)
VALUES (%s, %s, %s)
"""

values = ("Amit", 21, "C++")

cursor.execute(sql, values)

connection.commit()</code></pre>


    <h3>15. Selecting Data</h3>

    <p>
      The <strong>SELECT</strong> statement is used to retrieve records
      from a table.
    </p>

    <pre><code>cursor.execute(
    "SELECT * FROM students"
)

rows = cursor.fetchall()

for row in rows:
    print(row)</code></pre>


    <h3>16. fetchone()</h3>

    <p>
      The <strong>fetchone()</strong> method retrieves one row from the
      query result.
    </p>

    <pre><code>cursor.execute(
    "SELECT * FROM students"
)

row = cursor.fetchone()

print(row)</code></pre>


    <h3>17. fetchall()</h3>

    <p>
      The <strong>fetchall()</strong> method retrieves all remaining rows
      from the query result.
    </p>

    <pre><code>cursor.execute(
    "SELECT * FROM students"
)

rows = cursor.fetchall()

for row in rows:
    print(row)</code></pre>


    <h3>18. Filtering Data with WHERE</h3>

    <p>
      The <strong>WHERE</strong> clause is used to filter records based
      on a condition.
    </p>

    <pre><code>sql = """
SELECT * FROM students
WHERE age > %s
"""

cursor.execute(sql, (18,))

for row in cursor.fetchall():
    print(row)</code></pre>


    <h3>19. Updating Data</h3>

    <p>
      The <strong>UPDATE</strong> statement is used to modify existing
      records.
    </p>

    <pre><code>sql = """
UPDATE students
SET course = %s
WHERE id = %s
"""

cursor.execute(
    sql,
    ("Web Development", 1)
)

connection.commit()</code></pre>


    <h3>20. Deleting Data</h3>

    <p>
      The <strong>DELETE</strong> statement is used to remove records
      from a table.
    </p>

    <pre><code>sql = """
DELETE FROM students
WHERE id = %s
"""

cursor.execute(sql, (1,))

connection.commit()</code></pre>


    <h3>21. Sorting Data</h3>

    <p>
      The <strong>ORDER BY</strong> clause is used to sort records.
    </p>

    <pre><code>cursor.execute("""
SELECT * FROM students
ORDER BY age DESC
""")

for row in cursor.fetchall():
    print(row)</code></pre>


    <h3>22. LIMIT</h3>

    <p>
      The <strong>LIMIT</strong> clause can be used to restrict the
      number of rows returned by a query.
    </p>

    <pre><code>cursor.execute("""
SELECT * FROM students
LIMIT 5
""")

for row in cursor.fetchall():
    print(row)</code></pre>


    <h3>23. Counting Records</h3>

    <p>
      The <strong>COUNT()</strong> function is used to count records.
    </p>

    <pre><code>cursor.execute(
    "SELECT COUNT(*) FROM students"
)

result = cursor.fetchone()

print("Total students:", result[0])</code></pre>


    <h3>24. LIKE Operator</h3>

    <p>
      The <strong>LIKE</strong> operator is used to search for a pattern
      in text data.
    </p>

    <pre><code>sql = """
SELECT * FROM students
WHERE name LIKE %s
"""

cursor.execute(sql, ("A%",))

for row in cursor.fetchall():
    print(row)</code></pre>


    <h3>25. Multiple Conditions</h3>

    <p>
      SQL conditions can be combined using operators such as
      <strong>AND</strong> and <strong>OR</strong>.
    </p>

    <pre><code>sql = """
SELECT * FROM students
WHERE age > %s AND course = %s
"""

cursor.execute(
    sql,
    (18, "Python")
)

for row in cursor.fetchall():
    print(row)</code></pre>


    <h3>26. Multiple Records with executemany()</h3>

    <p>
      The <strong>executemany()</strong> method can insert multiple
      records efficiently.
    </p>

    <pre><code>sql = """
INSERT INTO students (name, age, course)
VALUES (%s, %s, %s)
"""

students = [
    ("Aman", 20, "Python"),
    ("Riya", 21, "Java"),
    ("Karan", 22, "C++")
]

cursor.executemany(sql, students)

connection.commit()</code></pre>


    <h3>27. Transactions</h3>

    <p>
      A transaction is a group of database operations that can be
      committed or rolled back as one unit of work.
    </p>

    <pre><code>try:
    cursor.execute(
        "INSERT INTO students (name, age) VALUES (%s, %s)",
        ("Neha", 20)
    )

    connection.commit()

except Exception:
    connection.rollback()</code></pre>


    <h3>28. commit()</h3>

    <p>
      The <strong>commit()</strong> method saves changes made to the
      database.
    </p>

    <pre><code>connection.commit()</code></pre>


    <h3>29. rollback()</h3>

    <p>
      The <strong>rollback()</strong> method reverses changes that have
      not yet been committed.
    </p>

    <pre><code>connection.rollback()</code></pre>


    <h3>30. Closing Cursor and Connection</h3>

    <p>
      After completing database operations, the cursor and database
      connection should be closed.
    </p>

    <pre><code>cursor.close()
connection.close()</code></pre>


    <h3>31. CRUD Operations</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Operation</th>
          <th>SQL Command</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Create</td>
          <td>INSERT</td>
          <td>Adds new records.</td>
        </tr>

        <tr>
          <td>Read</td>
          <td>SELECT</td>
          <td>Retrieves records.</td>
        </tr>

        <tr>
          <td>Update</td>
          <td>UPDATE</td>
          <td>Modifies existing records.</td>
        </tr>

        <tr>
          <td>Delete</td>
          <td>DELETE</td>
          <td>Removes records.</td>
        </tr>
      </tbody>
    </table>


    <h3>32. MySQL Joins</h3>

    <p>
      A <strong>JOIN</strong> is used to retrieve related data from
      multiple tables.
    </p>

    <p>Common types of joins include:</p>

    <ul>
      <li>INNER JOIN</li>
      <li>LEFT JOIN</li>
      <li>RIGHT JOIN</li>
      <li>CROSS JOIN</li>
    </ul>

    <pre><code>SELECT students.name, courses.name
FROM students
INNER JOIN courses
ON students.course_id = courses.id;</code></pre>


    <h3>33. INNER JOIN</h3>

    <p>
      <strong>INNER JOIN</strong> returns records that have matching
      values in both tables.
    </p>

    <pre><code>SELECT students.name, courses.name
FROM students
INNER JOIN courses
ON students.course_id = courses.id;</code></pre>


    <h3>34. Foreign Key</h3>

    <p>
      A <strong>FOREIGN KEY</strong> is used to create a relationship
      between tables.
    </p>

    <pre><code>CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    course_id INT,
    FOREIGN KEY (course_id)
        REFERENCES courses(id)
);</code></pre>


    <h3>35. MySQL Database Structure</h3>

    <pre><code>MySQL Server
     |
     └── school database
            |
            ├── students table
            |
            └── courses table</code></pre>


    <h3>36. Complete Python + MySQL Example</h3>

    <pre><code>import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="school"
)

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100)
)
""")

cursor.execute("""
INSERT INTO students (name, age, course)
VALUES (%s, %s, %s)
""", ("Jitesh", 21, "Python"))

connection.commit()

cursor.execute(
    "SELECT * FROM students"
)

students = cursor.fetchall()

for student in students:
    print(student)

cursor.close()
connection.close()</code></pre>


    <h3>37. Advantages of MySQL</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Advantage</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Popular</td>
          <td>Widely used in web and business applications.</td>
        </tr>

        <tr>
          <td>Relational</td>
          <td>Organizes data into related tables.</td>
        </tr>

        <tr>
          <td>Multi-User</td>
          <td>Supports multiple users and applications.</td>
        </tr>

        <tr>
          <td>Scalable</td>
          <td>Can support a wide range of application sizes.</td>
        </tr>

        <tr>
          <td>SQL Support</td>
          <td>Provides powerful SQL features for managing data.</td>
        </tr>
      </tbody>
    </table>


    <h3>38. MySQL vs SQLite</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>SQLite</th>
          <th>MySQL</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Architecture</td>
          <td>Serverless</td>
          <td>Client-server</td>
        </tr>

        <tr>
          <td>Storage</td>
          <td>Usually a single database file</td>
          <td>Managed by MySQL server</td>
        </tr>

        <tr>
          <td>Setup</td>
          <td>Very simple</td>
          <td>Requires a MySQL server</td>
        </tr>

        <tr>
          <td>Typical Use</td>
          <td>Local applications and small projects</td>
          <td>Web applications and multi-user systems</td>
        </tr>

        <tr>
          <td>Python Module</td>
          <td>sqlite3</td>
          <td>mysql-connector-python or another MySQL driver</td>
        </tr>
      </tbody>
    </table>


    <h3>39. MySQL Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>MySQL</td>
          <td>Relational database management system.</td>
        </tr>

        <tr>
          <td>mysql.connector</td>
          <td>Python connector used to communicate with MySQL.</td>
        </tr>

        <tr>
          <td>connect()</td>
          <td>Creates a connection to MySQL.</td>
        </tr>

        <tr>
          <td>cursor()</td>
          <td>Creates a cursor for executing SQL queries.</td>
        </tr>

        <tr>
          <td>execute()</td>
          <td>Executes an SQL statement.</td>
        </tr>

        <tr>
          <td>fetchone()</td>
          <td>Fetches one record.</td>
        </tr>

        <tr>
          <td>fetchall()</td>
          <td>Fetches all records.</td>
        </tr>

        <tr>
          <td>commit()</td>
          <td>Saves database changes.</td>
        </tr>

        <tr>
          <td>rollback()</td>
          <td>Reverts uncommitted changes.</td>
        </tr>

        <tr>
          <td>close()</td>
          <td>Closes the connection or cursor.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Install the MySQL connector using pip.',
    'Connect a Python program to a MySQL server.',
    'Create a database named school.',
    'Create a students table with id, name, age, and course columns.',
    'Insert multiple student records using parameterized queries.',
    'Retrieve records using SELECT and fetchall().',
    'Update a student record using UPDATE.',
    'Delete a student record using DELETE.',
    'Use WHERE, ORDER BY, LIMIT, and LIKE in SQL queries.',
    'Create a complete Python program that performs CRUD operations with MySQL.'
  ],

  code: `import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="school"
)

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100)
)
""")

cursor.execute("""
INSERT INTO students (name, age, course)
VALUES (%s, %s, %s)
""", ("Jitesh", 21, "Python"))

connection.commit()

cursor.execute("SELECT * FROM students")

students = cursor.fetchall()

for student in students:
    print(student)

cursor.close()
connection.close()`
},
  {
  key: 'networking-basics',
  title: 'Networking Basics',
  description: 'Computer networking is the process of connecting computers and other devices so they can communicate and share data, resources, and services. Networking basics include devices, protocols, IP addresses, MAC addresses, ports, network types, and common networking services.',

  theory: [
    'A computer network is a group of interconnected devices that communicate with each other and share data and resources.',
    'Networking uses protocols such as TCP/IP, HTTP, HTTPS, DNS, and DHCP to control how devices communicate.',
    'Common networking devices include switches, routers, access points, modems, and firewalls.'
  ],

  practice: [
    'Identify the IP address of your computer.',
    'Use ping to test connectivity with another device.',
    'Use ipconfig or ifconfig to view network configuration.',
    'Identify the difference between a router and a switch.',
    'Practice basic networking commands such as ping, tracert, nslookup, and ipconfig.'
  ],

  code: `# Basic networking example in Python

import socket

hostname = socket.gethostname()
ip_address = socket.gethostbyname(hostname)

print("Hostname:", hostname)
print("IP Address:", ip_address)`
},
  {
  key: 'web-scraping',
  title: 'Web Scraping',
  description: 'Web scraping is the process of collecting information from websites automatically using a program. Python provides libraries such as requests and BeautifulSoup that can be used to download web pages and extract useful information from HTML documents.',

  theory: [
    `
    <h3>1. What is Web Scraping?</h3>

    <p>
      <strong>Web scraping</strong> is the process of automatically
      collecting information from websites using a program.
    </p>

    <p>
      Instead of manually copying information from a website, a Python
      program can request a web page, read its HTML content, and extract
      the required information.
    </p>

    <div class="scraping-flow">
      <div class="scraping-box">
        🌐
        <strong>Website</strong>
        <span>Web Page</span>
      </div>

      <div class="scraping-arrow">→</div>

      <div class="scraping-box">
        🐍
        <strong>Python</strong>
        <span>Scraper</span>
      </div>

      <div class="scraping-arrow">→</div>

      <div class="scraping-box">
        📄
        <strong>HTML</strong>
        <span>Page Content</span>
      </div>

      <div class="scraping-arrow">→</div>

      <div class="scraping-box">
        💾
        <strong>Data</strong>
        <span>Extracted Data</span>
      </div>
    </div>


    <h3>2. How Web Scraping Works</h3>

    <p>
      A basic web scraping process usually follows these steps:
    </p>

    <ol>
      <li>Send a request to a web page.</li>
      <li>Receive the HTML response.</li>
      <li>Parse the HTML document.</li>
      <li>Find the required elements.</li>
      <li>Extract the information.</li>
      <li>Process or save the extracted data.</li>
    </ol>


    <h3>3. Common Python Libraries for Web Scraping</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Library</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>requests</td>
          <td>Sends HTTP requests and receives web responses.</td>
        </tr>

        <tr>
          <td>BeautifulSoup</td>
          <td>Parses HTML and helps extract information from web pages.</td>
        </tr>

        <tr>
          <td>Scrapy</td>
          <td>A framework for building larger and more advanced web crawlers and scrapers.</td>
        </tr>

        <tr>
          <td>lxml</td>
          <td>Provides fast XML and HTML parsing.</td>
        </tr>

        <tr>
          <td>pandas</td>
          <td>Useful for processing and storing tabular data.</td>
        </tr>
      </tbody>
    </table>


    <h3>4. Installing Required Libraries</h3>

    <p>
      The <strong>requests</strong> and <strong>beautifulsoup4</strong>
      packages can be installed using pip.
    </p>

    <pre><code>pip install requests beautifulsoup4</code></pre>


    <h3>5. Sending a Request</h3>

    <p>
      The <strong>requests</strong> library can be used to send an HTTP
      request to a web page.
    </p>

    <pre><code>import requests

url = "https://example.com"

response = requests.get(url)

print(response.status_code)</code></pre>


    <h3>6. HTTP Status Codes</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Status Code</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>200</td>
          <td>Request was successful.</td>
        </tr>

        <tr>
          <td>301</td>
          <td>Resource has been permanently redirected.</td>
        </tr>

        <tr>
          <td>302</td>
          <td>Temporary redirect.</td>
        </tr>

        <tr>
          <td>403</td>
          <td>Access to the resource is forbidden.</td>
        </tr>

        <tr>
          <td>404</td>
          <td>Resource was not found.</td>
        </tr>

        <tr>
          <td>500</td>
          <td>Server encountered an internal error.</td>
        </tr>
      </tbody>
    </table>


    <h3>7. Reading HTML Content</h3>

    <p>
      The HTML returned by a request can be accessed using
      <strong>response.text</strong>.
    </p>

    <pre><code>import requests

response = requests.get("https://example.com")

html = response.text

print(html)</code></pre>


    <h3>8. BeautifulSoup</h3>

    <p>
      <strong>BeautifulSoup</strong> is a Python library used to parse
      HTML and XML documents and navigate their structure.
    </p>

    <pre><code>from bs4 import BeautifulSoup

html = "&lt;h1&gt;Hello World&lt;/h1&gt;"

soup = BeautifulSoup(html, "html.parser")

print(soup.h1.text)</code></pre>


    <h3>9. Finding HTML Elements</h3>

    <p>
      The <strong>find()</strong> method can be used to find the first
      matching HTML element.
    </p>

    <pre><code>from bs4 import BeautifulSoup

html = """
&lt;html&gt;
&lt;body&gt;
&lt;h1&gt;Python Course&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
"""

soup = BeautifulSoup(html, "html.parser")

heading = soup.find("h1")

print(heading.text)</code></pre>


    <h3>10. find_all()</h3>

    <p>
      The <strong>find_all()</strong> method returns all matching
      elements.
    </p>

    <pre><code>from bs4 import BeautifulSoup

html = """
&lt;p&gt;Python&lt;/p&gt;
&lt;p&gt;Java&lt;/p&gt;
&lt;p&gt;C++&lt;/p&gt;
"""

soup = BeautifulSoup(html, "html.parser")

items = soup.find_all("p")

for item in items:
    print(item.text)</code></pre>


    <h3>11. Extracting Links</h3>

    <p>
      Links are commonly represented using the HTML
      <strong>&lt;a&gt;</strong> element.
    </p>

    <pre><code>from bs4 import BeautifulSoup

html = """
&lt;a href="https://example.com"&gt;Example&lt;/a&gt;
"""

soup = BeautifulSoup(html, "html.parser")

link = soup.find("a")

print(link.text)
print(link.get("href"))</code></pre>


    <h3>12. Extracting Images</h3>

    <p>
      Image URLs can be obtained from the <strong>src</strong> attribute
      of an HTML image element.
    </p>

    <pre><code>image = soup.find("img")

if image:
    print(image.get("src"))</code></pre>


    <h3>13. CSS Selectors</h3>

    <p>
      BeautifulSoup provides the <strong>select()</strong> method for
      finding elements using CSS selectors.
    </p>

    <pre><code>elements = soup.select(".product")

for element in elements:
    print(element.text)</code></pre>


    <h3>14. Selecting by ID</h3>

    <p>
      An element with a specific HTML ID can be selected using a
      <strong>#</strong> selector.
    </p>

    <pre><code>element = soup.select_one("#main")

if element:
    print(element.text)</code></pre>


    <h3>15. Selecting by Class</h3>

    <p>
      A class selector begins with a dot.
    </p>

    <pre><code>items = soup.select(".item")

for item in items:
    print(item.text)</code></pre>


    <h3>16. Extracting Text</h3>

    <p>
      The <strong>get_text()</strong> method extracts readable text from
      an HTML element.
    </p>

    <pre><code>text = soup.get_text(" ", strip=True)

print(text)</code></pre>


    <h3>17. Extracting Attributes</h3>

    <p>
      HTML attributes such as href, src, class, and id can be accessed
      using the <strong>get()</strong> method.
    </p>

    <pre><code>link = soup.find("a")

print(link.get("href"))</code></pre>


    <h3>18. Scraping a List of Items</h3>

    <p>
      If a web page contains multiple similar elements, they can be
      collected using <strong>find_all()</strong>.
    </p>

    <pre><code>items = soup.find_all("li")

for item in items:
    print(item.get_text(strip=True))</code></pre>


    <h3>19. Saving Scraped Data</h3>

    <p>
      Extracted information can be saved into files such as CSV,
      JSON, or text files.
    </p>

    <pre><code>import csv

data = [
    ["Name", "Course"],
    ["Aman", "Python"],
    ["Riya", "Java"]
]

with open("data.csv", "w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerows(data)</code></pre>


    <h3>20. Web Scraping and JSON</h3>

    <p>
      Some websites provide data through APIs or JSON responses. In
      such cases, using the API directly is generally preferable to
      scraping rendered HTML.
    </p>

    <pre><code>import requests

response = requests.get("https://example.com/data.json")

data = response.json()

print(data)</code></pre>


    <h3>21. Headers</h3>

    <p>
      HTTP headers provide additional information about a request or
      response. A program may need to send appropriate headers when
      accessing a website.
    </p>

    <pre><code>import requests

headers = {
    "User-Agent": "Mozilla/5.0"
}

response = requests.get(
    "https://example.com",
    headers=headers
)

print(response.status_code)</code></pre>


    <h3>22. Request Timeout</h3>

    <p>
      A timeout can prevent a program from waiting indefinitely for a
      server response.
    </p>

    <pre><code>import requests

response = requests.get(
    "https://example.com",
    timeout=10
)

print(response.status_code)</code></pre>


    <h3>23. Handling Request Errors</h3>

    <p>
      Network requests can fail because of connection problems, timeouts,
      invalid URLs, or server errors. Exceptions should be handled
      appropriately.
    </p>

    <pre><code>import requests

try:
    response = requests.get(
        "https://example.com",
        timeout=10
    )

    response.raise_for_status()

    print("Request successful")

except requests.RequestException as error:
    print("Request failed:", error)</code></pre>


    <h3>24. Basic Web Scraping Example</h3>

    <pre><code>import requests
from bs4 import BeautifulSoup

url = "https://example.com"

response = requests.get(url, timeout=10)
response.raise_for_status()

soup = BeautifulSoup(
    response.text,
    "html.parser"
)

heading = soup.find("h1")

if heading:
    print("Heading:", heading.get_text(strip=True))</code></pre>


    <h3>25. Web Scraping Process</h3>

    <div class="scraping-process">

      <div class="process-step">
        <span>1</span>
        <strong>Request</strong>
        <small>Send HTTP request</small>
      </div>

      <div class="process-arrow">→</div>

      <div class="process-step">
        <span>2</span>
        <strong>Response</strong>
        <small>Receive HTML</small>
      </div>

      <div class="process-arrow">→</div>

      <div class="process-step">
        <span>3</span>
        <strong>Parse</strong>
        <small>Read HTML</small>
      </div>

      <div class="process-arrow">→</div>

      <div class="process-step">
        <span>4</span>
        <strong>Extract</strong>
        <small>Get required data</small>
      </div>

      <div class="process-arrow">→</div>

      <div class="process-step">
        <span>5</span>
        <strong>Save</strong>
        <small>Store the data</small>
      </div>

    </div>


    <h3>26. Static vs Dynamic Websites</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Common Approach</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Static</td>
          <td>Content is present directly in the HTML response.</td>
          <td>Requests + BeautifulSoup</td>
        </tr>

        <tr>
          <td>Dynamic</td>
          <td>Content may be generated or loaded using JavaScript.</td>
          <td>API or browser automation when appropriate</td>
        </tr>
      </tbody>
    </table>


    <h3>27. Web Scraping vs Web Crawling</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Web Scraping</th>
          <th>Web Crawling</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Focuses on extracting specific information.</td>
          <td>Focuses on discovering and visiting web pages.</td>
        </tr>

        <tr>
          <td>Usually targets particular elements or data.</td>
          <td>May follow links across many pages.</td>
        </tr>

        <tr>
          <td>Often used for data collection.</td>
          <td>Often used for indexing and discovery.</td>
        </tr>
      </tbody>
    </table>


    <h3>28. Responsible Web Scraping</h3>

    <p>
      Web scraping should be performed responsibly. Before collecting
      data from a website, check its terms of service, robots.txt
      guidance where applicable, access restrictions, and applicable
      laws.
    </p>

    <ul>
      <li>Respect website terms and access policies.</li>
      <li>Do not overload servers with excessive requests.</li>
      <li>Use reasonable delays when appropriate.</li>
      <li>Respect authentication and access controls.</li>
      <li>Prefer official APIs when they are available.</li>
      <li>Handle personal or copyrighted data responsibly.</li>
    </ul>


    <h3>29. Advantages of Web Scraping</h3>

    <ul>
      <li>Automates repetitive data collection.</li>
      <li>Can collect large amounts of publicly available information.</li>
      <li>Reduces manual copying.</li>
      <li>Can transform web data into structured formats.</li>
      <li>Useful for research and data analysis.</li>
    </ul>


    <h3>30. Limitations of Web Scraping</h3>

    <ul>
      <li>Website structures can change.</li>
      <li>Some content requires JavaScript execution.</li>
      <li>Websites may limit automated requests.</li>
      <li>Network errors can interrupt scraping.</li>
      <li>Legal and usage restrictions may apply.</li>
    </ul>


    <h3>31. Web Scraping Summary</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>requests</td>
          <td>Sends HTTP requests.</td>
        </tr>

        <tr>
          <td>BeautifulSoup</td>
          <td>Parses HTML and extracts information.</td>
        </tr>

        <tr>
          <td>find()</td>
          <td>Finds the first matching element.</td>
        </tr>

        <tr>
          <td>find_all()</td>
          <td>Finds multiple matching elements.</td>
        </tr>

        <tr>
          <td>select()</td>
          <td>Finds elements using CSS selectors.</td>
        </tr>

        <tr>
          <td>get_text()</td>
          <td>Extracts text from an HTML element.</td>
        </tr>

        <tr>
          <td>get()</td>
          <td>Reads an HTML attribute.</td>
        </tr>

        <tr>
          <td>response.text</td>
          <td>Provides the response body as text.</td>
        </tr>

        <tr>
          <td>response.status_code</td>
          <td>Provides the HTTP response status code.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Install requests and BeautifulSoup using pip.',
    'Send a GET request to a web page and print its status code.',
    'Extract the page title using BeautifulSoup.',
    'Find all headings on a web page.',
    'Extract all links and their URLs.',
    'Extract text from selected HTML elements.',
    'Save extracted data into a CSV file.',
    'Handle request errors and timeouts.',
    'Use CSS selectors to extract specific elements.',
    'Build a small scraper for a website that permits automated access.'
  ],

  code: `import requests
from bs4 import BeautifulSoup

url = "https://example.com"

try:
    response = requests.get(
        url,
        timeout=10
    )

    response.raise_for_status()

    soup = BeautifulSoup(
        response.text,
        "html.parser"
    )

    print("Title:", soup.title.get_text(strip=True))

    for link in soup.find_all("a"):
        text = link.get_text(" ", strip=True)
        href = link.get("href")

        print(text, "->", href)

except requests.RequestException as error:
    print("Request failed:", error)`
},
  {
  key: 'apis',
  title: 'APIs',
  description: 'An API (Application Programming Interface) is a set of rules and methods that allows different software applications to communicate and exchange data. In Python, APIs are commonly accessed using HTTP requests and data is often exchanged in JSON format.',

  theory: [
    `
    <h3>1. What is an API?</h3>

    <p>
      <strong>API (Application Programming Interface)</strong> is a
      mechanism that allows different software applications to communicate
      with each other.
    </p>

    <p>
      An API defines how a client can request information or perform an
      operation and how the server should respond.
    </p>

    <div class="api-flow">
      <div class="api-box">
        💻
        <strong>Client</strong>
        <span>Python Program</span>
      </div>

      <div class="api-arrow">
        →
        <small>Request</small>
      </div>

      <div class="api-box api-server">
        🖥️
        <strong>API Server</strong>
        <span>Processes Request</span>
      </div>

      <div class="api-arrow">
        →
        <small>Response</small>
      </div>

      <div class="api-box">
        📦
        <strong>Data</strong>
        <span>JSON Response</span>
      </div>
    </div>


    <h3>2. How an API Works</h3>

    <ol>
      <li>The client sends a request to an API endpoint.</li>
      <li>The API receives and processes the request.</li>
      <li>The server performs the requested operation.</li>
      <li>The server sends a response back to the client.</li>
      <li>The client processes the returned data.</li>
    </ol>


    <h3>3. API Request and Response</h3>

    <div class="api-request-response">
      <div class="api-request">
        <strong>Request</strong>
        <code>GET /users</code>
      </div>

      <div class="api-big-arrow">↔</div>

      <div class="api-response">
        <strong>Response</strong>
        <code>{"name": "Aman"}</code>
      </div>
    </div>


    <h3>4. API Endpoint</h3>

    <p>
      An <strong>API endpoint</strong> is a specific URL through which
      a client can access a particular API resource or operation.
    </p>

    <pre><code>https://api.example.com/users</code></pre>


    <h3>5. HTTP Methods</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>GET</td>
          <td>Retrieve data.</td>
        </tr>

        <tr>
          <td>POST</td>
          <td>Submit data or create a resource.</td>
        </tr>

        <tr>
          <td>PUT</td>
          <td>Replace or update a resource.</td>
        </tr>

        <tr>
          <td>PATCH</td>
          <td>Partially update a resource.</td>
        </tr>

        <tr>
          <td>DELETE</td>
          <td>Delete a resource.</td>
        </tr>
      </tbody>
    </table>


    <h3>6. GET Request</h3>

    <p>
      A <strong>GET</strong> request is commonly used to retrieve
      information from an API.
    </p>

    <pre><code>import requests

response = requests.get(
    "https://api.example.com/users"
)

print(response.status_code)</code></pre>


    <h3>7. POST Request</h3>

    <p>
      A <strong>POST</strong> request is commonly used to send data to
      a server, for example when creating a new resource.
    </p>

    <pre><code>import requests

data = {
    "name": "Aman",
    "course": "Python"
}

response = requests.post(
    "https://api.example.com/users",
    json=data
)

print(response.status_code)</code></pre>


    <h3>8. JSON</h3>

    <p>
      <strong>JSON (JavaScript Object Notation)</strong> is a common
      format for exchanging structured data between clients and servers.
    </p>

    <pre><code>{
  "name": "Aman",
  "age": 21,
  "course": "Python"
}</code></pre>


    <h3>9. Reading JSON in Python</h3>

    <p>
      The requests library provides the <strong>json()</strong> method
      to convert a JSON response into Python data structures.
    </p>

    <pre><code>import requests

response = requests.get(
    "https://api.example.com/users"
)

data = response.json()

print(data)</code></pre>


    <h3>10. Accessing JSON Data</h3>

    <pre><code>data = {
    "name": "Aman",
    "age": 21,
    "course": "Python"
}

print(data["name"])
print(data["course"])</code></pre>


    <h3>11. API Status Codes</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Status Code</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>200</td>
          <td>Request successful.</td>
        </tr>

        <tr>
          <td>201</td>
          <td>Resource successfully created.</td>
        </tr>

        <tr>
          <td>400</td>
          <td>Bad request.</td>
        </tr>

        <tr>
          <td>401</td>
          <td>Authentication is required or credentials are invalid.</td>
        </tr>

        <tr>
          <td>403</td>
          <td>Request is understood but access is forbidden.</td>
        </tr>

        <tr>
          <td>404</td>
          <td>Requested resource was not found.</td>
        </tr>

        <tr>
          <td>500</td>
          <td>Internal server error.</td>
        </tr>
      </tbody>
    </table>


    <h3>12. API Parameters</h3>

    <p>
      Parameters allow a client to provide additional information with
      an API request.
    </p>

    <p><strong>Query parameter example:</strong></p>

    <pre><code>https://api.example.com/users?page=2</code></pre>

    <p>
      Here, <strong>page=2</strong> is a query parameter.
    </p>


    <h3>13. Query Parameters in Python</h3>

    <pre><code>import requests

params = {
    "page": 2,
    "limit": 10
}

response = requests.get(
    "https://api.example.com/users",
    params=params
)

print(response.url)</code></pre>


    <h3>14. Path Parameters</h3>

    <p>
      A path parameter is included directly in the URL path to identify
      a specific resource.
    </p>

    <pre><code>https://api.example.com/users/10</code></pre>


    <h3>15. API Headers</h3>

    <p>
      HTTP headers provide additional information about a request.
      APIs commonly use headers for content types, authorization,
      and other request metadata.
    </p>

    <pre><code>import requests

headers = {
    "Accept": "application/json"
}

response = requests.get(
    "https://api.example.com/users",
    headers=headers
)

print(response.status_code)</code></pre>


    <h3>16. API Authentication</h3>

    <p>
      Some APIs require authentication before allowing access to
      protected resources.
    </p>

    <p>
      Common authentication mechanisms include API keys, bearer tokens,
      OAuth, and session-based authentication.
    </p>

    <pre><code>import requests

headers = {
    "Authorization": "Bearer YOUR_TOKEN"
}

response = requests.get(
    "https://api.example.com/profile",
    headers=headers
)

print(response.status_code)</code></pre>


    <h3>17. API Key</h3>

    <p>
      An <strong>API key</strong> is a credential provided by an API
      service to identify or authorize a client.
    </p>

    <p>
      API keys should not be hard-coded into public source code or
      uploaded to public repositories.
    </p>


    <h3>18. REST API</h3>

    <p>
      A <strong>REST API</strong> is an API designed around the principles
      of REST (Representational State Transfer). REST APIs commonly use
      HTTP methods and resource-oriented URLs.
    </p>

    <div class="rest-api-figure">

      <div class="rest-item">
        <span class="method get">GET</span>
        <strong>/users</strong>
        <small>Get users</small>
      </div>

      <div class="rest-item">
        <span class="method post">POST</span>
        <strong>/users</strong>
        <small>Create user</small>
      </div>

      <div class="rest-item">
        <span class="method put">PUT</span>
        <strong>/users/1</strong>
        <small>Update user</small>
      </div>

      <div class="rest-item">
        <span class="method delete">DELETE</span>
        <strong>/users/1</strong>
        <small>Delete user</small>
      </div>

    </div>


    <h3>19. REST API Example</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>HTTP Method</th>
          <th>Endpoint</th>
          <th>Operation</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>GET</td>
          <td>/users</td>
          <td>Get all users</td>
        </tr>

        <tr>
          <td>GET</td>
          <td>/users/1</td>
          <td>Get user 1</td>
        </tr>

        <tr>
          <td>POST</td>
          <td>/users</td>
          <td>Create a user</td>
        </tr>

        <tr>
          <td>PUT</td>
          <td>/users/1</td>
          <td>Update user 1</td>
        </tr>

        <tr>
          <td>DELETE</td>
          <td>/users/1</td>
          <td>Delete user 1</td>
        </tr>
      </tbody>
    </table>


    <h3>20. Handling API Errors</h3>

    <p>
      API requests can fail because of network problems, invalid
      parameters, authentication failures, or server errors.
    </p>

    <pre><code>import requests

try:
    response = requests.get(
        "https://api.example.com/users",
        timeout=10
    )

    response.raise_for_status()

    print(response.json())

except requests.RequestException as error:
    print("API request failed:", error)</code></pre>


    <h3>21. API Request with JSON Data</h3>

    <pre><code>import requests

user = {
    "name": "Jitesh",
    "course": "Python"
}

response = requests.post(
    "https://api.example.com/users",
    json=user,
    timeout=10
)

print(response.status_code)</code></pre>


    <h3>22. API vs Web Scraping</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>API</th>
          <th>Web Scraping</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Provides structured data through an interface.</td>
          <td>Extracts information from web pages.</td>
        </tr>

        <tr>
          <td>Usually returns JSON, XML, or another defined format.</td>
          <td>Often starts with HTML content.</td>
        </tr>

        <tr>
          <td>Usually more stable when officially supported.</td>
          <td>Can break when page structure changes.</td>
        </tr>

        <tr>
          <td>Often has authentication and rate limits.</td>
          <td>Must respect website access rules and restrictions.</td>
        </tr>
      </tbody>
    </table>


    <h3>23. API Workflow</h3>

    <div class="api-workflow">

      <div class="workflow-step">
        <span>1</span>
        <strong>Client</strong>
        <small>Python Application</small>
      </div>

      <div class="workflow-arrow">→</div>

      <div class="workflow-step">
        <span>2</span>
        <strong>Request</strong>
        <small>HTTP Request</small>
      </div>

      <div class="workflow-arrow">→</div>

      <div class="workflow-step">
        <span>3</span>
        <strong>API</strong>
        <small>Process Request</small>
      </div>

      <div class="workflow-arrow">→</div>

      <div class="workflow-step">
        <span>4</span>
        <strong>Response</strong>
        <small>JSON Data</small>
      </div>

    </div>


    <h3>24. Complete Python API Example</h3>

    <pre><code>import requests

url = "https://api.example.com/users"

try:
    response = requests.get(
        url,
        timeout=10
    )

    response.raise_for_status()

    data = response.json()

    for user in data:
        print(user)

except requests.RequestException as error:
    print("Error:", error)</code></pre>


    <h3>25. Important API Concepts</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>API</td>
          <td>Interface used for communication between software systems.</td>
        </tr>

        <tr>
          <td>Endpoint</td>
          <td>URL through which an API resource or operation is accessed.</td>
        </tr>

        <tr>
          <td>Request</td>
          <td>Message sent by a client to an API.</td>
        </tr>

        <tr>
          <td>Response</td>
          <td>Message returned by the server.</td>
        </tr>

        <tr>
          <td>JSON</td>
          <td>Common structured data format used by APIs.</td>
        </tr>

        <tr>
          <td>Authentication</td>
          <td>Process of verifying access to protected API resources.</td>
        </tr>

        <tr>
          <td>API Key</td>
          <td>Credential used by some APIs to identify or authorize clients.</td>
        </tr>

        <tr>
          <td>REST</td>
          <td>A common architectural style for web APIs.</td>
        </tr>

        <tr>
          <td>Status Code</td>
          <td>HTTP code indicating the result of a request.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Install the requests library using pip.',
    'Send a GET request to a public API.',
    'Print the HTTP status code of an API response.',
    'Read JSON data returned by an API.',
    'Use query parameters in an API request.',
    'Send JSON data using a POST request.',
    'Practice GET, POST, PUT, PATCH, and DELETE requests.',
    'Handle API errors using try and except.',
    'Use request headers in an API call.',
    'Create a Python program that reads and displays data from a public API.'
  ],

  code: `import requests

url = "https://api.example.com/users"

try:
    response = requests.get(
        url,
        timeout=10
    )

    response.raise_for_status()

    data = response.json()

    print("API Response:")

    for item in data:
        print(item)

except requests.RequestException as error:
    print("Request failed:", error)`
},
  {
  key: 'gui-development',
  title: 'GUI Development',
  description: 'GUI (Graphical User Interface) development is the process of creating applications with visual elements such as windows, buttons, labels, text fields, menus, and dialogs. Python provides libraries such as Tkinter for building desktop GUI applications.',

  theory: [
    `
    <h3>1. What is GUI?</h3>

    <p>
      <strong>GUI (Graphical User Interface)</strong> is a user interface
      that allows users to interact with a program using visual elements
      such as windows, buttons, menus, text boxes, and icons.
    </p>

    <p>
      Unlike a command-line interface, a GUI allows users to interact
      with an application using a mouse, keyboard, and visual controls.
    </p>

    <div class="gui-figure">
      <div class="gui-window">
        <div class="gui-titlebar">
          <strong>Python Application</strong>
          <span>− □ ×</span>
        </div>

        <div class="gui-content">
          <h4>Welcome to Python GUI</h4>

          <input type="text" placeholder="Enter your name">

          <div class="gui-buttons">
            <button>Submit</button>
            <button>Clear</button>
          </div>
        </div>
      </div>
    </div>


    <h3>2. GUI Development in Python</h3>

    <p>
      Python provides several libraries and frameworks for developing
      graphical user interfaces.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Library / Framework</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Tkinter</td>
          <td>Built-in Python library for creating desktop GUI applications.</td>
        </tr>

        <tr>
          <td>PyQt</td>
          <td>Framework for creating feature-rich cross-platform applications.</td>
        </tr>

        <tr>
          <td>Kivy</td>
          <td>Framework for building multi-touch and cross-platform applications.</td>
        </tr>

        <tr>
          <td>wxPython</td>
          <td>Toolkit for creating native-looking desktop applications.</td>
        </tr>

        <tr>
          <td>PySide</td>
          <td>Python bindings for the Qt framework.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Tkinter</h3>

    <p>
      <strong>Tkinter</strong> is Python's standard GUI toolkit. It is
      commonly used for learning desktop GUI development and creating
      small to medium-sized applications.
    </p>

    <pre><code>import tkinter as tk

window = tk.Tk()

window.title("My Application")
window.geometry("400x300")

window.mainloop()</code></pre>


    <h3>4. Creating a Window</h3>

    <p>
      The <strong>Tk()</strong> function creates the main application
      window.
    </p>

    <pre><code>import tkinter as tk

root = tk.Tk()

root.title("Python GUI")
root.geometry("500x350")

root.mainloop()</code></pre>


    <h3>5. Window Properties</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>title()</td>
          <td>Sets the window title.</td>
        </tr>

        <tr>
          <td>geometry()</td>
          <td>Sets the window size and position.</td>
        </tr>

        <tr>
          <td>resizable()</td>
          <td>Controls whether the window can be resized.</td>
        </tr>

        <tr>
          <td>minsize()</td>
          <td>Sets the minimum window size.</td>
        </tr>

        <tr>
          <td>maxsize()</td>
          <td>Sets the maximum window size.</td>
        </tr>

        <tr>
          <td>mainloop()</td>
          <td>Starts the GUI event loop.</td>
        </tr>
      </tbody>
    </table>


    <h3>6. Label</h3>

    <p>
      A <strong>Label</strong> is used to display text or information
      inside a GUI application.
    </p>

    <pre><code>import tkinter as tk

root = tk.Tk()

label = tk.Label(
    root,
    text="Hello Python"
)

label.pack()

root.mainloop()</code></pre>


    <h3>7. Button</h3>

    <p>
      A <strong>Button</strong> allows the user to perform an action
      when it is clicked.
    </p>

    <pre><code>import tkinter as tk

def show_message():
    print("Button clicked")

root = tk.Tk()

button = tk.Button(
    root,
    text="Click Me",
    command=show_message
)

button.pack()

root.mainloop()</code></pre>


    <h3>8. Entry Widget</h3>

    <p>
      The <strong>Entry</strong> widget is used to accept a single line
      of text from the user.
    </p>

    <pre><code>import tkinter as tk

root = tk.Tk()

entry = tk.Entry(root)
entry.pack()

root.mainloop()</code></pre>


    <h3>9. Getting Input from Entry</h3>

    <pre><code>import tkinter as tk

def show_name():
    name = entry.get()
    print("Name:", name)

root = tk.Tk()

entry = tk.Entry(root)
entry.pack()

button = tk.Button(
    root,
    text="Submit",
    command=show_name
)

button.pack()

root.mainloop()</code></pre>


    <h3>10. Common Tkinter Widgets</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Widget</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Label</td>
          <td>Displays text or information.</td>
        </tr>

        <tr>
          <td>Button</td>
          <td>Performs an action when clicked.</td>
        </tr>

        <tr>
          <td>Entry</td>
          <td>Accepts single-line text input.</td>
        </tr>

        <tr>
          <td>Text</td>
          <td>Accepts multiple lines of text.</td>
        </tr>

        <tr>
          <td>Checkbutton</td>
          <td>Provides a checkbox option.</td>
        </tr>

        <tr>
          <td>Radiobutton</td>
          <td>Allows selection of one option from a group.</td>
        </tr>

        <tr>
          <td>Listbox</td>
          <td>Displays a list of selectable items.</td>
        </tr>

        <tr>
          <td>Combobox</td>
          <td>Provides a dropdown selection.</td>
        </tr>

        <tr>
          <td>Frame</td>
          <td>Groups related widgets together.</td>
        </tr>

        <tr>
          <td>Canvas</td>
          <td>Used for drawing shapes and graphics.</td>
        </tr>
      </tbody>
    </table>


    <h3>11. Frame</h3>

    <p>
      A <strong>Frame</strong> is a container used to organize and
      group other widgets.
    </p>

    <pre><code>import tkinter as tk

root = tk.Tk()

frame = tk.Frame(root)
frame.pack()

label = tk.Label(
    frame,
    text="Inside Frame"
)

label.pack()

root.mainloop()</code></pre>


    <h3>12. Layout Managers</h3>

    <p>
      Tkinter provides layout managers to control the position of
      widgets inside a window.
    </p>

    <div class="gui-layout-figure">

      <div class="layout-box">
        <strong>pack()</strong>
        <span>Simple arrangement</span>
      </div>

      <div class="layout-box">
        <strong>grid()</strong>
        <span>Rows and columns</span>
      </div>

      <div class="layout-box">
        <strong>place()</strong>
        <span>Exact position</span>
      </div>

    </div>


    <h3>13. pack()</h3>

    <p>
      The <strong>pack()</strong> geometry manager arranges widgets
      relative to each other.
    </p>

    <pre><code>label.pack()
button.pack()</code></pre>


    <h3>14. grid()</h3>

    <p>
      The <strong>grid()</strong> geometry manager arranges widgets
      in rows and columns.
    </p>

    <pre><code>label.grid(row=0, column=0)
entry.grid(row=0, column=1)

button.grid(row=1, column=0)</code></pre>


    <h3>15. place()</h3>

    <p>
      The <strong>place()</strong> geometry manager allows widgets to
      be positioned using coordinates.
    </p>

    <pre><code>button.place(
    x=100,
    y=150
)</code></pre>


    <h3>16. Event Handling</h3>

    <p>
      GUI applications are event-driven. An event can occur when the
      user clicks a button, presses a key, moves the mouse, or performs
      another interaction.
    </p>

    <pre><code>import tkinter as tk

def clicked():
    label.config(text="Button was clicked!")

root = tk.Tk()

label = tk.Label(root, text="Click the button")
label.pack()

button = tk.Button(
    root,
    text="Click",
    command=clicked
)

button.pack()

root.mainloop()</code></pre>


    <h3>17. Message Box</h3>

    <p>
      The <strong>messagebox</strong> module provides dialog boxes for
      displaying messages, warnings, and confirmation dialogs.
    </p>

    <pre><code>import tkinter as tk
from tkinter import messagebox

root = tk.Tk()

def show_message():
    messagebox.showinfo(
        "Message",
        "Welcome to Python GUI!"
    )

button = tk.Button(
    root,
    text="Show Message",
    command=show_message
)

button.pack()

root.mainloop()</code></pre>


    <h3>18. Checkbutton</h3>

    <p>
      A <strong>Checkbutton</strong> allows the user to select or
      deselect an option.
    </p>

    <pre><code>import tkinter as tk

root = tk.Tk()

value = tk.BooleanVar()

check = tk.Checkbutton(
    root,
    text="I agree",
    variable=value
)

check.pack()

root.mainloop()</code></pre>


    <h3>19. Radiobutton</h3>

    <p>
      Radiobuttons are used when the user should select one option
      from a group.
    </p>

    <pre><code>import tkinter as tk

root = tk.Tk()

choice = tk.StringVar(value="Python")

tk.Radiobutton(
    root,
    text="Python",
    variable=choice,
    value="Python"
).pack()

tk.Radiobutton(
    root,
    text="Java",
    variable=choice,
    value="Java"
).pack()

root.mainloop()</code></pre>


    <h3>20. Text Widget</h3>

    <p>
      The <strong>Text</strong> widget is used to enter and display
      multiple lines of text.
    </p>

    <pre><code>import tkinter as tk

root = tk.Tk()

text = tk.Text(
    root,
    width=40,
    height=10
)

text.pack()

root.mainloop()</code></pre>


    <h3>21. GUI Event Flow</h3>

    <div class="gui-event-flow">

      <div class="event-box">
        👤
        <strong>User</strong>
        <span>Clicks Button</span>
      </div>

      <div class="event-arrow">→</div>

      <div class="event-box">
        ⚡
        <strong>Event</strong>
        <span>Click Event</span>
      </div>

      <div class="event-arrow">→</div>

      <div class="event-box">
        🐍
        <strong>Function</strong>
        <span>Runs Code</span>
      </div>

      <div class="event-arrow">→</div>

      <div class="event-box">
        🖥️
        <strong>GUI</strong>
        <span>Updates</span>
      </div>

    </div>


    <h3>22. Simple Login GUI</h3>

    <p>
      A simple login interface can be created using labels, entry
      fields, and a button.
    </p>

    <pre><code>import tkinter as tk
from tkinter import messagebox

def login():
    username = username_entry.get()
    password = password_entry.get()

    if username == "admin" and password == "1234":
        messagebox.showinfo(
            "Login",
            "Login successful"
        )
    else:
        messagebox.showerror(
            "Login",
            "Invalid username or password"
        )

root = tk.Tk()
root.title("Login")
root.geometry("350x250")

tk.Label(
    root,
    text="Username"
).pack()

username_entry = tk.Entry(root)
username_entry.pack()

tk.Label(
    root,
    text="Password"
).pack()

password_entry = tk.Entry(
    root,
    show="*"
)

password_entry.pack()

tk.Button(
    root,
    text="Login",
    command=login
).pack(pady=15)

root.mainloop()</code></pre>


    <h3>23. GUI Application Structure</h3>

    <div class="gui-architecture">

      <div class="architecture-box">
        🪟
        <strong>Window</strong>
        <span>Main Application</span>
      </div>

      <div class="architecture-line">↓</div>

      <div class="architecture-box">
        🧩
        <strong>Widgets</strong>
        <span>Label • Button • Entry</span>
      </div>

      <div class="architecture-line">↓</div>

      <div class="architecture-box">
        ⚡
        <strong>Events</strong>
        <span>Click • Key • Mouse</span>
      </div>

      <div class="architecture-line">↓</div>

      <div class="architecture-box">
        🐍
        <strong>Python Logic</strong>
        <span>Program Operations</span>
      </div>

    </div>


    <h3>24. Advantages of GUI Development</h3>

    <ul>
      <li>Easy for users to interact with applications.</li>
      <li>Provides visual controls and feedback.</li>
      <li>Useful for desktop applications.</li>
      <li>Can make applications more user-friendly.</li>
      <li>Supports event-driven programming.</li>
    </ul>


    <h3>25. Limitations of GUI Development</h3>

    <ul>
      <li>GUI applications can require more code than command-line programs.</li>
      <li>Designing a good user interface requires planning.</li>
      <li>Different operating systems may have different UI behavior.</li>
      <li>Complex applications may require advanced GUI frameworks.</li>
    </ul>


    <h3>26. GUI vs Command Line Interface</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>GUI</th>
          <th>CLI</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Uses windows, buttons, menus, and other visual elements.</td>
          <td>Uses text commands.</td>
        </tr>

        <tr>
          <td>Usually easier for beginners to interact with.</td>
          <td>Requires knowledge of commands.</td>
        </tr>

        <tr>
          <td>Uses mouse and keyboard.</td>
          <td>Primarily uses keyboard commands.</td>
        </tr>

        <tr>
          <td>Common in desktop applications.</td>
          <td>Common in terminals and command-line tools.</td>
        </tr>
      </tbody>
    </table>


    <h3>27. Important GUI Concepts</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Window</td>
          <td>Main area of a GUI application.</td>
        </tr>

        <tr>
          <td>Widget</td>
          <td>Visual component such as a button or label.</td>
        </tr>

        <tr>
          <td>Event</td>
          <td>User or system action that triggers program behavior.</td>
        </tr>

        <tr>
          <td>Callback</td>
          <td>Function executed in response to an event.</td>
        </tr>

        <tr>
          <td>Layout Manager</td>
          <td>Controls the position of widgets.</td>
        </tr>

        <tr>
          <td>mainloop()</td>
          <td>Runs the GUI event loop.</td>
        </tr>

        <tr>
          <td>Tkinter</td>
          <td>Python's standard GUI toolkit.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a basic Tkinter window.',
    'Add a label and a button to the window.',
    'Create an Entry field and display the entered text.',
    'Practice the pack(), grid(), and place() layout managers.',
    'Create a GUI with multiple buttons.',
    'Use a Checkbutton and Radiobutton.',
    'Display a message using messagebox.',
    'Create a simple calculator GUI.',
    'Create a simple login GUI.',
    'Build a small desktop application using Tkinter.'
  ],

  code: `import tkinter as tk
from tkinter import messagebox

def greet():
    name = entry.get()

    if name:
        messagebox.showinfo(
            "Greeting",
            f"Hello, {name}!"
        )
    else:
        messagebox.showwarning(
            "Warning",
            "Please enter your name."
        )

root = tk.Tk()

root.title("Python GUI")
root.geometry("400x250")

label = tk.Label(
    root,
    text="Enter your name"
)

label.pack(pady=15)

entry = tk.Entry(root)
entry.pack()

button = tk.Button(
    root,
    text="Greet",
    command=greet
)

button.pack(pady=20)

root.mainloop()`
},
  {
  key: 'data-analysis',
  title: 'Data Analysis',
  description: 'Data analysis is the process of collecting, cleaning, transforming, exploring, and interpreting data to find useful information and support decision-making. Python provides powerful libraries such as NumPy, Pandas, and Matplotlib for working with and analyzing data.',

  theory: [
    `
    <h3>1. What is Data Analysis?</h3>

    <p>
      <strong>Data Analysis</strong> is the process of examining,
      cleaning, transforming, and interpreting data to discover useful
      information, patterns, and relationships.
    </p>

    <div class="data-analysis-flow">

      <div class="analysis-box">
        📥
        <strong>Collect</strong>
        <span>Gather Data</span>
      </div>

      <div class="analysis-arrow">→</div>

      <div class="analysis-box">
        🧹
        <strong>Clean</strong>
        <span>Fix Data</span>
      </div>

      <div class="analysis-arrow">→</div>

      <div class="analysis-box">
        🔍
        <strong>Analyze</strong>
        <span>Find Patterns</span>
      </div>

      <div class="analysis-arrow">→</div>

      <div class="analysis-box">
        📊
        <strong>Visualize</strong>
        <span>Show Results</span>
      </div>

      <div class="analysis-arrow">→</div>

      <div class="analysis-box">
        💡
        <strong>Insights</strong>
        <span>Make Decisions</span>
      </div>

    </div>


    <h3>2. Data Analysis with Python</h3>

    <p>
      Python is widely used for data analysis because it provides
      libraries that make it easier to work with numerical, tabular,
      and visual data.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Library</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>NumPy</td>
          <td>Numerical computing and multidimensional arrays.</td>
        </tr>

        <tr>
          <td>Pandas</td>
          <td>Data manipulation and analysis using Series and DataFrame.</td>
        </tr>

        <tr>
          <td>Matplotlib</td>
          <td>Creating charts and visualizations.</td>
        </tr>

        <tr>
          <td>Seaborn</td>
          <td>Statistical data visualization.</td>
        </tr>

        <tr>
          <td>SciPy</td>
          <td>Scientific and statistical computing.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Installing Data Analysis Libraries</h3>

    <pre><code>pip install numpy pandas matplotlib seaborn</code></pre>


    <h3>4. NumPy</h3>

    <p>
      <strong>NumPy</strong> is a Python library used for numerical
      computing. It provides efficient multidimensional arrays and
      mathematical operations.
    </p>

    <pre><code>import numpy as np

numbers = np.array([10, 20, 30, 40, 50])

print(numbers)
print(numbers.mean())</code></pre>


    <h3>5. NumPy Array</h3>

    <p>
      A NumPy array stores elements in a structured multidimensional
      format and supports fast numerical operations.
    </p>

    <pre><code>import numpy as np

data = np.array([
    [10, 20],
    [30, 40]
])

print(data)
print(data.shape)</code></pre>


    <h3>6. Pandas</h3>

    <p>
      <strong>Pandas</strong> is one of the most commonly used Python
      libraries for data analysis. It provides powerful data structures
      such as Series and DataFrame.
    </p>


    <h3>7. Pandas Series</h3>

    <p>
      A <strong>Series</strong> is a one-dimensional labeled data
      structure.
    </p>

    <pre><code>import pandas as pd

marks = pd.Series([
    75, 82, 91, 68
])

print(marks)</code></pre>


    <h3>8. Pandas DataFrame</h3>

    <p>
      A <strong>DataFrame</strong> is a two-dimensional tabular data
      structure consisting of rows and columns.
    </p>

    <div class="dataframe-figure">

      <div class="dataframe-title">
        Student Data
      </div>

      <div class="dataframe-row header">
        <span>Name</span>
        <span>Age</span>
        <span>Marks</span>
      </div>

      <div class="dataframe-row">
        <span>Aman</span>
        <span>20</span>
        <span>85</span>
      </div>

      <div class="dataframe-row">
        <span>Riya</span>
        <span>21</span>
        <span>91</span>
      </div>

      <div class="dataframe-row">
        <span>Rahul</span>
        <span>20</span>
        <span>76</span>
      </div>

    </div>

    <pre><code>import pandas as pd

data = {
    "Name": ["Aman", "Riya", "Rahul"],
    "Age": [20, 21, 20],
    "Marks": [85, 91, 76]
}

df = pd.DataFrame(data)

print(df)</code></pre>


    <h3>9. Reading CSV Files</h3>

    <p>
      Pandas can read data from CSV files using
      <strong>read_csv()</strong>.
    </p>

    <pre><code>import pandas as pd

df = pd.read_csv("students.csv")

print(df)</code></pre>


    <h3>10. Reading Excel Files</h3>

    <p>
      Pandas can also be used to read Excel files.
    </p>

    <pre><code>import pandas as pd

df = pd.read_excel("students.xlsx")

print(df)</code></pre>


    <h3>11. Viewing Data</h3>

    <p>
      Pandas provides methods such as <strong>head()</strong>,
      <strong>tail()</strong>, and <strong>sample()</strong> to inspect
      data.
    </p>

    <pre><code>print(df.head())
print(df.tail())
print(df.sample(3))</code></pre>


    <h3>12. Understanding Data</h3>

    <p>
      The <strong>info()</strong> and <strong>describe()</strong>
      methods provide useful information about a DataFrame.
    </p>

    <pre><code>print(df.info())
print(df.describe())</code></pre>


    <h3>13. Selecting Columns</h3>

    <pre><code>names = df["Name"]

marks = df["Marks"]

print(names)
print(marks)</code></pre>


    <h3>14. Selecting Multiple Columns</h3>

    <pre><code>selected = df[
    ["Name", "Marks"]
]

print(selected)</code></pre>


    <h3>15. Filtering Data</h3>

    <p>
      Data can be filtered using conditions.
    </p>

    <pre><code>high_marks = df[
    df["Marks"] >= 80
]

print(high_marks)</code></pre>


    <h3>16. Sorting Data</h3>

    <p>
      The <strong>sort_values()</strong> method sorts data according to
      one or more columns.
    </p>

    <pre><code>sorted_data = df.sort_values(
    "Marks",
    ascending=False
)

print(sorted_data)</code></pre>


    <h3>17. Adding a Column</h3>

    <pre><code>df["Passed"] = df["Marks"] >= 40

print(df)</code></pre>


    <h3>18. Removing a Column</h3>

    <pre><code>df = df.drop(
    columns=["Passed"]
)

print(df)</code></pre>


    <h3>19. Missing Data</h3>

    <p>
      Real-world datasets may contain missing values. Pandas provides
      methods such as <strong>isnull()</strong>, <strong>dropna()</strong>,
      and <strong>fillna()</strong> for handling them.
    </p>

    <pre><code>print(df.isnull())

df = df.dropna()

df = df.fillna(0)</code></pre>


    <h3>20. Removing Duplicate Data</h3>

    <pre><code>df = df.drop_duplicates()

print(df)</code></pre>


    <h3>21. Grouping Data</h3>

    <p>
      The <strong>groupby()</strong> method is used to group data based
      on one or more columns.
    </p>

    <pre><code>result = df.groupby(
    "Department"
)["Marks"].mean()

print(result)</code></pre>


    <h3>22. Basic Statistical Analysis</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>mean()</td>
          <td>Calculates the average.</td>
        </tr>

        <tr>
          <td>median()</td>
          <td>Finds the middle value.</td>
        </tr>

        <tr>
          <td>mode()</td>
          <td>Finds the most frequently occurring value.</td>
        </tr>

        <tr>
          <td>min()</td>
          <td>Finds the minimum value.</td>
        </tr>

        <tr>
          <td>max()</td>
          <td>Finds the maximum value.</td>
        </tr>

        <tr>
          <td>sum()</td>
          <td>Calculates the total.</td>
        </tr>

        <tr>
          <td>std()</td>
          <td>Calculates standard deviation.</td>
        </tr>
      </tbody>
    </table>


    <h3>23. Calculating Statistics</h3>

    <pre><code>print(df["Marks"].mean())
print(df["Marks"].median())
print(df["Marks"].min())
print(df["Marks"].max())
print(df["Marks"].sum())</code></pre>


    <h3>24. Data Visualization</h3>

    <p>
      Data visualization represents information using charts and graphs.
      It makes patterns, trends, and comparisons easier to understand.
    </p>

    <div class="chart-types-figure">

      <div class="chart-card">
        📊
        <strong>Bar Chart</strong>
        <span>Compare values</span>
      </div>

      <div class="chart-card">
        📈
        <strong>Line Chart</strong>
        <span>Show trends</span>
      </div>

      <div class="chart-card">
        🥧
        <strong>Pie Chart</strong>
        <span>Show proportions</span>
      </div>

      <div class="chart-card">
        🔵
        <strong>Scatter Plot</strong>
        <span>Show relationships</span>
      </div>

    </div>


    <h3>25. Matplotlib</h3>

    <p>
      <strong>Matplotlib</strong> is a popular Python library for
      creating charts and graphs.
    </p>

    <pre><code>import matplotlib.pyplot as plt

names = ["Aman", "Riya", "Rahul"]
marks = [85, 91, 76]

plt.bar(names, marks)

plt.title("Student Marks")
plt.xlabel("Students")
plt.ylabel("Marks")

plt.show()</code></pre>


    <h3>26. Line Chart</h3>

    <pre><code>import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr"]
sales = [100, 150, 130, 180]

plt.plot(months, sales)

plt.title("Monthly Sales")
plt.xlabel("Month")
plt.ylabel("Sales")

plt.show()</code></pre>


    <h3>27. Histogram</h3>

    <p>
      A histogram shows the distribution of numerical data.
    </p>

    <pre><code>import matplotlib.pyplot as plt

marks = [45, 50, 55, 60, 65, 70, 75, 80, 85, 90]

plt.hist(marks)

plt.title("Marks Distribution")
plt.xlabel("Marks")
plt.ylabel("Frequency")

plt.show()</code></pre>


    <h3>28. Correlation</h3>

    <p>
      <strong>Correlation</strong> describes the relationship between
      two numerical variables.
    </p>

    <pre><code>correlation = df[
    ["Age", "Marks"]
].corr()

print(correlation)</code></pre>


    <h3>29. Data Analysis Workflow</h3>

    <div class="analysis-workflow">

      <div class="workflow-analysis-box">
        <span>1</span>
        <strong>Collect</strong>
        <small>Obtain Dataset</small>
      </div>

      <div class="workflow-analysis-arrow">→</div>

      <div class="workflow-analysis-box">
        <span>2</span>
        <strong>Clean</strong>
        <small>Fix Missing Data</small>
      </div>

      <div class="workflow-analysis-arrow">→</div>

      <div class="workflow-analysis-box">
        <span>3</span>
        <strong>Explore</strong>
        <small>Understand Data</small>
      </div>

      <div class="workflow-analysis-arrow">→</div>

      <div class="workflow-analysis-box">
        <span>4</span>
        <strong>Analyze</strong>
        <small>Find Patterns</small>
      </div>

      <div class="workflow-analysis-arrow">→</div>

      <div class="workflow-analysis-box">
        <span>5</span>
        <strong>Visualize</strong>
        <small>Show Results</small>
      </div>

    </div>


    <h3>30. Exporting Data</h3>

    <p>
      After processing data, a DataFrame can be exported to formats
      such as CSV and Excel.
    </p>

    <pre><code>df.to_csv(
    "cleaned_data.csv",
    index=False
)

df.to_excel(
    "cleaned_data.xlsx",
    index=False
)</code></pre>


    <h3>31. Data Cleaning</h3>

    <p>
      Data cleaning is the process of detecting and correcting
      inaccurate, incomplete, duplicated, or inconsistent data.
    </p>

    <ul>
      <li>Handle missing values.</li>
      <li>Remove duplicate records.</li>
      <li>Correct incorrect data types.</li>
      <li>Standardize inconsistent values.</li>
      <li>Remove unnecessary data.</li>
    </ul>


    <h3>32. Advantages of Python for Data Analysis</h3>

    <ul>
      <li>Easy-to-understand syntax.</li>
      <li>Large ecosystem of data science libraries.</li>
      <li>Powerful DataFrame and numerical tools.</li>
      <li>Excellent visualization support.</li>
      <li>Can work with CSV, Excel, JSON, SQL, and other data sources.</li>
    </ul>


    <h3>33. Important Data Analysis Concepts</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>NumPy</td>
          <td>Numerical computing and arrays.</td>
        </tr>

        <tr>
          <td>Pandas</td>
          <td>Data manipulation and analysis.</td>
        </tr>

        <tr>
          <td>DataFrame</td>
          <td>Two-dimensional tabular data structure.</td>
        </tr>

        <tr>
          <td>Series</td>
          <td>One-dimensional labeled data structure.</td>
        </tr>

        <tr>
          <td>Data Cleaning</td>
          <td>Improves data quality and consistency.</td>
        </tr>

        <tr>
          <td>Filtering</td>
          <td>Selects records based on conditions.</td>
        </tr>

        <tr>
          <td>Grouping</td>
          <td>Organizes data into groups for analysis.</td>
        </tr>

        <tr>
          <td>Visualization</td>
          <td>Represents data using charts and graphs.</td>
        </tr>

        <tr>
          <td>Correlation</td>
          <td>Measures the relationship between variables.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Install NumPy, Pandas, and Matplotlib using pip.',
    'Create a NumPy array and perform mathematical operations.',
    'Create a Pandas Series and DataFrame.',
    'Read a CSV file using Pandas.',
    'Display the first and last records of a dataset.',
    'Filter data using conditions.',
    'Sort a DataFrame by a column.',
    'Find and handle missing values.',
    'Remove duplicate records.',
    'Calculate mean, median, minimum, and maximum values.',
    'Group data using groupby().',
    'Create a bar chart using Matplotlib.',
    'Create a line chart and histogram.',
    'Clean a dataset and export the result to a CSV file.'
  ],

  code: `import pandas as pd
import matplotlib.pyplot as plt

# Create sample data
data = {
    "Name": ["Aman", "Riya", "Rahul", "Neha"],
    "Marks": [85, 92, 76, 88]
}

df = pd.DataFrame(data)

# Display data
print(df)

# Basic analysis
print("Average:", df["Marks"].mean())
print("Highest:", df["Marks"].max())
print("Lowest:", df["Marks"].min())

# Filter data
high_marks = df[df["Marks"] >= 80]

print("\\nStudents with marks >= 80:")
print(high_marks)

# Visualization
plt.bar(
    df["Name"],
    df["Marks"]
)

plt.title("Student Marks")
plt.xlabel("Student")
plt.ylabel("Marks")

plt.show()`
},
  {
  key: 'machine-learning',
  title: 'Machine Learning',
  description: 'Machine Learning is a branch of Artificial Intelligence that enables computers to learn patterns from data and make predictions or decisions without being explicitly programmed for every task. Python provides powerful libraries such as NumPy, Pandas, Matplotlib, and Scikit-learn for building machine learning applications.',

  theory: [
    `
    <h3>1. What is Machine Learning?</h3>

    <p>
      <strong>Machine Learning (ML)</strong> is a branch of Artificial
      Intelligence that allows computers to learn patterns from data
      and use those patterns to make predictions or decisions.
    </p>

    <p>
      Instead of writing separate rules for every situation, a machine
      learning system learns from examples and improves its performance
      based on data.
    </p>

    <div class="ml-flow">

      <div class="ml-box">
        📊
        <strong>Data</strong>
        <span>Training Examples</span>
      </div>

      <div class="ml-arrow">→</div>

      <div class="ml-box">
        ⚙️
        <strong>Algorithm</strong>
        <span>Learning Process</span>
      </div>

      <div class="ml-arrow">→</div>

      <div class="ml-box">
        🧠
        <strong>Model</strong>
        <span>Learned Pattern</span>
      </div>

      <div class="ml-arrow">→</div>

      <div class="ml-box">
        🔮
        <strong>Prediction</strong>
        <span>New Result</span>
      </div>

    </div>


    <h3>2. Machine Learning vs Traditional Programming</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Traditional Programming</th>
          <th>Machine Learning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Rules + Data → Output</td>
          <td>Data + Output → Learned Model</td>
        </tr>

        <tr>
          <td>Programmer defines the rules.</td>
          <td>Algorithm learns patterns from data.</td>
        </tr>

        <tr>
          <td>Rules are explicitly written.</td>
          <td>Rules are learned from examples.</td>
        </tr>

        <tr>
          <td>Suitable for well-defined problems.</td>
          <td>Useful when patterns are difficult to define manually.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Types of Machine Learning</h3>

    <div class="ml-types">

      <div class="ml-type-card">
        🎯
        <strong>Supervised Learning</strong>
        <span>Uses labeled data</span>
      </div>

      <div class="ml-type-card">
        🔍
        <strong>Unsupervised Learning</strong>
        <span>Finds patterns in data</span>
      </div>

      <div class="ml-type-card">
        🤖
        <strong>Reinforcement Learning</strong>
        <span>Learns through rewards</span>
      </div>

    </div>


    <h3>4. Supervised Learning</h3>

    <p>
      <strong>Supervised Learning</strong> uses a dataset where the
      correct output or target is already known. The model learns the
      relationship between input features and the target.
    </p>

    <p>
      Common supervised learning tasks include
      <strong>classification</strong> and <strong>regression</strong>.
    </p>

    <pre><code>Input Data
     ↓
Features + Labels
     ↓
Training Algorithm
     ↓
Machine Learning Model
     ↓
Prediction</code></pre>


    <h3>5. Unsupervised Learning</h3>

    <p>
      <strong>Unsupervised Learning</strong> works with data that does
      not contain predefined labels. The algorithm tries to discover
      hidden patterns, structures, or groups within the data.
    </p>

    <p>
      <strong>Clustering</strong> is one of the common unsupervised
      learning techniques.
    </p>


    <h3>6. Reinforcement Learning</h3>

    <p>
      <strong>Reinforcement Learning</strong> is a type of machine
      learning in which an agent learns by interacting with an
      environment.
    </p>

    <div class="reinforcement-flow">

      <div class="rl-box">
        🤖
        <strong>Agent</strong>
      </div>

      <div class="rl-arrow">→</div>

      <div class="rl-box">
        🌍
        <strong>Environment</strong>
      </div>

      <div class="rl-arrow">→</div>

      <div class="rl-box">
        🎯
        <strong>Action</strong>
      </div>

      <div class="rl-arrow">→</div>

      <div class="rl-box">
        ⭐
        <strong>Reward</strong>
      </div>

    </div>


    <h3>7. Dataset</h3>

    <p>
      A <strong>dataset</strong> is a collection of data used for
      analysis and machine learning. A dataset may contain rows
      representing records and columns representing features.
    </p>

    <div class="ml-dataset">

      <div class="ml-dataset-row header">
        <span>Hours</span>
        <span>Attendance</span>
        <span>Marks</span>
      </div>

      <div class="ml-dataset-row">
        <span>5</span>
        <span>90%</span>
        <span>85</span>
      </div>

      <div class="ml-dataset-row">
        <span>3</span>
        <span>75%</span>
        <span>68</span>
      </div>

      <div class="ml-dataset-row">
        <span>7</span>
        <span>95%</span>
        <span>92</span>
      </div>

    </div>


    <h3>8. Features and Labels</h3>

    <p>
      <strong>Features</strong> are input variables used by a machine
      learning model. A <strong>label</strong> is the target value that
      the model tries to predict in supervised learning.
    </p>

    <pre><code>Features:
Hours Studied
Attendance

Label:
Marks</code></pre>


    <h3>9. Training and Testing Data</h3>

    <p>
      A dataset is commonly divided into training and testing portions.
      The training data is used to learn the model, while testing data
      is used to evaluate how well the model performs on unseen data.
    </p>

    <div class="train-test-flow">

      <div class="dataset-part">
        📊
        <strong>Complete Dataset</strong>
      </div>

      <div class="train-test-arrow">→</div>

      <div class="dataset-part training">
        ⚙️
        <strong>Training Data</strong>
        <span>Learn Model</span>
      </div>

      <div class="dataset-part testing">
        🧪
        <strong>Testing Data</strong>
        <span>Evaluate Model</span>
      </div>

    </div>


    <h3>10. Scikit-learn</h3>

    <p>
      <strong>Scikit-learn</strong> is a popular Python library for
      machine learning. It provides algorithms and tools for
      classification, regression, clustering, preprocessing, and model
      evaluation.
    </p>

    <pre><code>pip install scikit-learn</code></pre>


    <h3>11. Machine Learning Workflow</h3>

    <div class="ml-workflow">

      <div class="workflow-ml-box">
        <span>1</span>
        <strong>Collect Data</strong>
      </div>

      <div class="workflow-ml-arrow">→</div>

      <div class="workflow-ml-box">
        <span>2</span>
        <strong>Clean Data</strong>
      </div>

      <div class="workflow-ml-arrow">→</div>

      <div class="workflow-ml-box">
        <span>3</span>
        <strong>Split Data</strong>
      </div>

      <div class="workflow-ml-arrow">→</div>

      <div class="workflow-ml-box">
        <span>4</span>
        <strong>Train Model</strong>
      </div>

      <div class="workflow-ml-arrow">→</div>

      <div class="workflow-ml-box">
        <span>5</span>
        <strong>Evaluate</strong>
      </div>

      <div class="workflow-ml-arrow">→</div>

      <div class="workflow-ml-box">
        <span>6</span>
        <strong>Predict</strong>
      </div>

    </div>


    <h3>12. Data Preprocessing</h3>

    <p>
      <strong>Data preprocessing</strong> prepares raw data before it
      is provided to a machine learning algorithm.
    </p>

    <ul>
      <li>Handling missing values.</li>
      <li>Removing duplicate records.</li>
      <li>Encoding categorical data.</li>
      <li>Scaling numerical features.</li>
      <li>Splitting data into training and testing sets.</li>
    </ul>


    <h3>13. Linear Regression</h3>

    <p>
      <strong>Linear Regression</strong> is a supervised learning
      algorithm used to predict a continuous numerical value.
    </p>

    <p>
      For example, it can be used to predict house prices based on
      area or predict marks based on study hours.
    </p>

    <pre><code>from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction)</code></pre>


    <h3>14. Classification</h3>

    <p>
      <strong>Classification</strong> is used when the output belongs
      to a specific category or class.
    </p>

    <p>
      Examples include spam detection, disease classification,
      sentiment classification, and image classification.
    </p>


    <h3>15. Logistic Regression</h3>

    <p>
      <strong>Logistic Regression</strong> is commonly used for
      classification problems where the output represents categories.
    </p>

    <pre><code>from sklearn.linear_model import LogisticRegression

model = LogisticRegression()

model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction)</code></pre>


    <h3>16. Decision Tree</h3>

    <p>
      A <strong>Decision Tree</strong> uses a tree-like structure of
      decisions to make predictions.
    </p>

    <pre><code>from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()

model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction)</code></pre>


    <h3>17. K-Nearest Neighbors</h3>

    <p>
      <strong>K-Nearest Neighbors (KNN)</strong> predicts the class
      of a data point based on the classes of nearby data points.
    </p>

    <pre><code>from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier(
    n_neighbors=3
)

model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction)</code></pre>


    <h3>18. Clustering</h3>

    <p>
      <strong>Clustering</strong> is an unsupervised learning technique
      used to group similar data points together.
    </p>

    <pre><code>from sklearn.cluster import KMeans

model = KMeans(
    n_clusters=3,
    random_state=42
)

model.fit(X)

labels = model.labels_

print(labels)</code></pre>


    <h3>19. Model Prediction</h3>

    <p>
      After training, a machine learning model can be used to predict
      results for new or unseen data.
    </p>

    <pre><code>model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction)</code></pre>


    <h3>20. Model Evaluation</h3>

    <p>
      Model evaluation measures how well a machine learning model
      performs on data that it has not seen during training.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Accuracy</td>
          <td>Measures the proportion of correct predictions.</td>
        </tr>

        <tr>
          <td>Precision</td>
          <td>Measures how many predicted positive cases are actually positive.</td>
        </tr>

        <tr>
          <td>Recall</td>
          <td>Measures how many actual positive cases were correctly identified.</td>
        </tr>

        <tr>
          <td>F1 Score</td>
          <td>Combines precision and recall into a single metric.</td>
        </tr>

        <tr>
          <td>Mean Squared Error</td>
          <td>Measures average squared error for regression models.</td>
        </tr>
      </tbody>
    </table>


    <h3>21. Accuracy Score</h3>

    <pre><code>from sklearn.metrics import accuracy_score

accuracy = accuracy_score(
    y_test,
    prediction
)

print("Accuracy:", accuracy)</code></pre>


    <h3>22. Overfitting</h3>

    <p>
      <strong>Overfitting</strong> occurs when a model learns the
      training data too closely, including noise, and performs poorly
      on new data.
    </p>

    <div class="ml-comparison">

      <div class="model-state">
        🎯
        <strong>Good Fit</strong>
        <span>Works well on training and new data</span>
      </div>

      <div class="model-state">
        ⚠️
        <strong>Overfitting</strong>
        <span>Excellent training performance but poor new-data performance</span>
      </div>

      <div class="model-state">
        📉
        <strong>Underfitting</strong>
        <span>Model is too simple to learn the pattern</span>
      </div>

    </div>


    <h3>23. Underfitting</h3>

    <p>
      <strong>Underfitting</strong> occurs when a model is too simple
      to capture the important patterns in the training data.
    </p>


    <h3>24. Model Performance</h3>

    <p>
      A good machine learning model should generalize well to unseen
      data instead of simply memorizing the training dataset.
    </p>


    <h3>25. Common Machine Learning Algorithms</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Algorithm</th>
          <th>Common Use</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Linear Regression</td>
          <td>Predicting continuous values.</td>
        </tr>

        <tr>
          <td>Logistic Regression</td>
          <td>Classification problems.</td>
        </tr>

        <tr>
          <td>Decision Tree</td>
          <td>Classification and regression.</td>
        </tr>

        <tr>
          <td>KNN</td>
          <td>Classification and prediction based on nearby data.</td>
        </tr>

        <tr>
          <td>K-Means</td>
          <td>Clustering similar data points.</td>
        </tr>

        <tr>
          <td>Random Forest</td>
          <td>Classification and regression using multiple trees.</td>
        </tr>
      </tbody>
    </table>


    <h3>26. Applications of Machine Learning</h3>

    <ul>
      <li>Recommendation systems.</li>
      <li>Spam email detection.</li>
      <li>Fraud detection.</li>
      <li>Image and object recognition.</li>
      <li>Speech recognition.</li>
      <li>Customer segmentation.</li>
      <li>Price prediction.</li>
      <li>Predictive analytics.</li>
      <li>Search and ranking systems.</li>
    </ul>


    <h3>27. Important Machine Learning Concepts</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Dataset</td>
          <td>Collection of data used by a machine learning system.</td>
        </tr>

        <tr>
          <td>Feature</td>
          <td>Input variable used to make predictions.</td>
        </tr>

        <tr>
          <td>Label</td>
          <td>Target value in supervised learning.</td>
        </tr>

        <tr>
          <td>Model</td>
          <td>Learned representation of patterns in data.</td>
        </tr>

        <tr>
          <td>Training</td>
          <td>Process of learning from training data.</td>
        </tr>

        <tr>
          <td>Testing</td>
          <td>Process of evaluating a model on unseen data.</td>
        </tr>

        <tr>
          <td>Prediction</td>
          <td>Output generated by a trained model.</td>
        </tr>

        <tr>
          <td>Overfitting</td>
          <td>Model performs well on training data but poorly on new data.</td>
        </tr>

        <tr>
          <td>Underfitting</td>
          <td>Model is too simple to learn important patterns.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Install Scikit-learn using pip.',
    'Create a simple dataset using Pandas.',
    'Separate features and labels.',
    'Split a dataset into training and testing data.',
    'Train a Linear Regression model.',
    'Create a classification model using Logistic Regression.',
    'Build a Decision Tree classifier.',
    'Practice K-Nearest Neighbors.',
    'Create a K-Means clustering model.',
    'Calculate model accuracy.',
    'Practice handling missing data before training.',
    'Compare training and testing performance.',
    'Identify examples of overfitting and underfitting.',
    'Build a small machine learning prediction project.'
  ],

  code: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Sample dataset
data = {
    "Hours": [1, 2, 3, 4, 5, 6],
    "Marks": [40, 45, 55, 65, 75, 85]
}

df = pd.DataFrame(data)

# Features and target
X = df[["Hours"]]
y = df["Marks"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Create and train model
model = LinearRegression()

model.fit(
    X_train,
    y_train
)

# Prediction
prediction = model.predict(X_test)

print("Prediction:", prediction)

# Evaluation
error = mean_squared_error(
    y_test,
    prediction
)

print("Mean Squared Error:", error)`
},
  {
  key: 'deep-learning',
  title: 'Deep Learning',
  description: 'Deep Learning is a subset of Machine Learning that uses artificial neural networks with multiple layers to learn complex patterns from large amounts of data. It is widely used in image recognition, natural language processing, speech recognition, computer vision, and many other AI applications.',

  theory: [
    `
    <h3>1. What is Deep Learning?</h3>

    <p>
      <strong>Deep Learning</strong> is a branch of Machine Learning
      that uses artificial neural networks with multiple layers to
      automatically learn complex patterns from data.
    </p>

    <p>
      Deep Learning is especially useful for large and complex
      datasets such as images, audio, video, and text.
    </p>

    <div class="deep-learning-flow">

      <div class="dl-box">
        📊
        <strong>Input Data</strong>
        <span>Images, Text, Audio</span>
      </div>

      <div class="dl-arrow">→</div>

      <div class="dl-box">
        🧠
        <strong>Neural Network</strong>
        <span>Multiple Layers</span>
      </div>

      <div class="dl-arrow">→</div>

      <div class="dl-box">
        ⚙️
        <strong>Learning</strong>
        <span>Pattern Detection</span>
      </div>

      <div class="dl-arrow">→</div>

      <div class="dl-box">
        🎯
        <strong>Output</strong>
        <span>Prediction</span>
      </div>

    </div>


    <h3>2. Machine Learning vs Deep Learning</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Machine Learning</th>
          <th>Deep Learning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Often requires feature engineering.</td>
          <td>Can automatically learn useful features.</td>
        </tr>

        <tr>
          <td>Can work well with smaller datasets.</td>
          <td>Usually benefits from large datasets.</td>
        </tr>

        <tr>
          <td>Uses many different algorithms.</td>
          <td>Primarily uses neural networks with multiple layers.</td>
        </tr>

        <tr>
          <td>Usually requires less computational power.</td>
          <td>Often requires more computational resources.</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Artificial Neural Network</h3>

    <p>
      An <strong>Artificial Neural Network (ANN)</strong> is a
      computational model inspired by the structure of biological
      neural networks.
    </p>

    <p>
      A neural network consists of interconnected nodes called
      <strong>neurons</strong>. These neurons are organized into
      different layers.
    </p>

    <div class="neural-network">

      <div class="nn-layer">
        <strong>Input Layer</strong>
        <div class="nn-node">●</div>
        <div class="nn-node">●</div>
        <div class="nn-node">●</div>
      </div>

      <div class="nn-arrow">→</div>

      <div class="nn-layer">
        <strong>Hidden Layer</strong>
        <div class="nn-node">●</div>
        <div class="nn-node">●</div>
        <div class="nn-node">●</div>
        <div class="nn-node">●</div>
      </div>

      <div class="nn-arrow">→</div>

      <div class="nn-layer">
        <strong>Output Layer</strong>
        <div class="nn-node">●</div>
      </div>

    </div>


    <h3>4. Layers of a Neural Network</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Input Layer</td>
          <td>Receives input features or data.</td>
        </tr>

        <tr>
          <td>Hidden Layer</td>
          <td>Learns patterns and representations from the input.</td>
        </tr>

        <tr>
          <td>Output Layer</td>
          <td>Produces the final prediction or result.</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Neuron</h3>

    <p>
      A <strong>neuron</strong> receives input values, applies weights
      and a bias, and passes the result through an activation function.
    </p>

    <pre><code>Input
  ↓
Weighted Sum
  ↓
Add Bias
  ↓
Activation Function
  ↓
Output</code></pre>


    <h3>6. Weights and Bias</h3>

    <p>
      <strong>Weights</strong> determine the importance of input
      values. A <strong>bias</strong> allows the neuron to adjust its
      output independently of the input values.
    </p>

    <pre><code>output = (input × weight) + bias</code></pre>


    <h3>7. Activation Functions</h3>

    <p>
      An <strong>activation function</strong> determines whether and
      how strongly a neuron should be activated. It also introduces
      non-linearity into neural networks.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Common Use</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>ReLU</td>
          <td>Commonly used in hidden layers.</td>
        </tr>

        <tr>
          <td>Sigmoid</td>
          <td>Often used for binary classification outputs.</td>
        </tr>

        <tr>
          <td>Softmax</td>
          <td>Commonly used for multi-class classification.</td>
        </tr>

        <tr>
          <td>Tanh</td>
          <td>Used in some neural network architectures.</td>
        </tr>
      </tbody>
    </table>


    <h3>8. ReLU</h3>

    <p>
      <strong>ReLU (Rectified Linear Unit)</strong> returns zero for
      negative values and returns the input value for positive values.
    </p>

    <pre><code>ReLU(x) = max(0, x)</code></pre>


    <h3>9. Forward Propagation</h3>

    <p>
      <strong>Forward Propagation</strong> is the process of passing
      input data through the neural network from the input layer to the
      output layer to generate a prediction.
    </p>

    <div class="propagation-flow">

      <div class="propagation-box">
        📥
        <strong>Input</strong>
      </div>

      <div class="propagation-arrow">→</div>

      <div class="propagation-box">
        🧠
        <strong>Hidden Layers</strong>
      </div>

      <div class="propagation-arrow">→</div>

      <div class="propagation-box">
        📤
        <strong>Prediction</strong>
      </div>

    </div>


    <h3>10. Loss Function</h3>

    <p>
      A <strong>loss function</strong> measures the difference between
      the predicted output and the actual output. The training process
      tries to reduce this error.
    </p>

    <pre><code>Actual Value
     ↓
Compare
     ↓
Predicted Value
     ↓
Loss / Error</code></pre>


    <h3>11. Backpropagation</h3>

    <p>
      <strong>Backpropagation</strong> is a training technique used to
      calculate how much each weight contributed to the prediction
      error. The network uses this information to update its weights.
    </p>

    <div class="backprop-flow">

      <div class="backprop-box">
        📤
        <strong>Prediction</strong>
      </div>

      <div class="backprop-arrow">→</div>

      <div class="backprop-box">
        ❌
        <strong>Calculate Loss</strong>
      </div>

      <div class="backprop-arrow">→</div>

      <div class="backprop-box">
        🔄
        <strong>Update Weights</strong>
      </div>

      <div class="backprop-arrow">↩</div>

      <div class="backprop-box">
        🧠
        <strong>Improve Model</strong>
      </div>

    </div>


    <h3>12. Optimizer</h3>

    <p>
      An <strong>optimizer</strong> updates the weights of a neural
      network during training to minimize the loss function.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Optimizer</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>SGD</td>
          <td>Stochastic Gradient Descent.</td>
        </tr>

        <tr>
          <td>Adam</td>
          <td>An adaptive optimization algorithm widely used in deep learning.</td>
        </tr>

        <tr>
          <td>RMSprop</td>
          <td>An optimizer that adapts the learning rate during training.</td>
        </tr>
      </tbody>
    </table>


    <h3>13. Epoch</h3>

    <p>
      An <strong>epoch</strong> represents one complete pass through
      the training dataset during model training.
    </p>

    <pre><code>Dataset
   ↓
Epoch 1
   ↓
Epoch 2
   ↓
Epoch 3
   ↓
Improved Model</code></pre>


    <h3>14. Batch Size</h3>

    <p>
      <strong>Batch size</strong> is the number of training examples
      processed by the model before the weights are updated.
    </p>


    <h3>15. Learning Rate</h3>

    <p>
      The <strong>learning rate</strong> controls how large the weight
      updates are during training.
    </p>

    <p>
      A learning rate that is too large can make training unstable,
      while a very small learning rate can make training slow.
    </p>


    <h3>16. TensorFlow</h3>

    <p>
      <strong>TensorFlow</strong> is an open-source machine learning
      framework commonly used to build and train neural networks.
    </p>

    <pre><code>pip install tensorflow</code></pre>


    <h3>17. Keras</h3>

    <p>
      <strong>Keras</strong> is a high-level deep learning API that
      provides a simple way to create and train neural networks.
    </p>

    <pre><code>from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(10, activation="relu"),
    keras.layers.Dense(1)
])</code></pre>


    <h3>18. Creating a Simple Neural Network</h3>

    <pre><code>from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(
        16,
        activation="relu"
    ),

    keras.layers.Dense(
        8,
        activation="relu"
    ),

    keras.layers.Dense(
        1,
        activation="sigmoid"
    )
])

model.compile(
    optimizer="adam",
    loss="binary_crossentropy",
    metrics=["accuracy"]
)</code></pre>


    <h3>19. Training a Neural Network</h3>

    <p>
      The <strong>fit()</strong> method is commonly used to train a
      neural network using training data.
    </p>

    <pre><code>model.fit(
    X_train,
    y_train,
    epochs=10,
    batch_size=32
)</code></pre>


    <h3>20. Evaluating a Model</h3>

    <pre><code>loss, accuracy = model.evaluate(
    X_test,
    y_test
)

print("Loss:", loss)
print("Accuracy:", accuracy)</code></pre>


    <h3>21. Making Predictions</h3>

    <pre><code>predictions = model.predict(
    X_test
)

print(predictions)</code></pre>


    <h3>22. Convolutional Neural Network</h3>

    <p>
      A <strong>Convolutional Neural Network (CNN)</strong> is a deep
      learning architecture commonly used for image and computer
      vision tasks.
    </p>

    <div class="cnn-flow">

      <div class="cnn-box">
        🖼️
        <strong>Image</strong>
      </div>

      <div class="cnn-arrow">→</div>

      <div class="cnn-box">
        🔍
        <strong>Convolution</strong>
      </div>

      <div class="cnn-arrow">→</div>

      <div class="cnn-box">
        📦
        <strong>Pooling</strong>
      </div>

      <div class="cnn-arrow">→</div>

      <div class="cnn-box">
        🧠
        <strong>Dense Layer</strong>
      </div>

      <div class="cnn-arrow">→</div>

      <div class="cnn-box">
        🎯
        <strong>Prediction</strong>
      </div>

    </div>


    <h3>23. Recurrent Neural Network</h3>

    <p>
      A <strong>Recurrent Neural Network (RNN)</strong> is designed
      to work with sequential or time-dependent data. It can use
      information from previous steps while processing new inputs.
    </p>

    <p>
      RNNs can be used for tasks involving sequences such as text,
      speech, and time-series data.
    </p>


    <h3>24. LSTM</h3>

    <p>
      <strong>Long Short-Term Memory (LSTM)</strong> is a type of
      recurrent neural network designed to better handle long-term
      dependencies in sequential data.
    </p>


    <h3>25. CNN vs RNN</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>CNN</th>
          <th>RNN</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Commonly used for images.</td>
          <td>Commonly used for sequential data.</td>
        </tr>

        <tr>
          <td>Extracts spatial features.</td>
          <td>Processes information across sequences.</td>
        </tr>

        <tr>
          <td>Used in computer vision.</td>
          <td>Used in text, speech, and time-series tasks.</td>
        </tr>
      </tbody>
    </table>


    <h3>26. Overfitting in Deep Learning</h3>

    <p>
      <strong>Overfitting</strong> occurs when a neural network learns
      the training data too closely and performs poorly on unseen data.
    </p>

    <p>
      Techniques such as dropout, regularization, data augmentation,
      and early stopping can help reduce overfitting.
    </p>


    <h3>27. Dropout</h3>

    <p>
      <strong>Dropout</strong> is a regularization technique that
      temporarily disables a portion of neurons during training.
      This can help prevent the network from relying too heavily on
      particular neurons.
    </p>

    <pre><code>keras.layers.Dropout(0.5)</code></pre>


    <h3>28. Applications of Deep Learning</h3>

    <ul>
      <li>Image recognition.</li>
      <li>Face recognition.</li>
      <li>Object detection.</li>
      <li>Speech recognition.</li>
      <li>Natural Language Processing.</li>
      <li>Machine translation.</li>
      <li>Recommendation systems.</li>
      <li>Autonomous systems.</li>
      <li>Medical image analysis.</li>
      <li>Generative AI.</li>
    </ul>


    <h3>29. Deep Learning Workflow</h3>

    <div class="dl-workflow">

      <div class="workflow-dl-box">
        <span>1</span>
        <strong>Collect Data</strong>
      </div>

      <div class="workflow-dl-arrow">→</div>

      <div class="workflow-dl-box">
        <span>2</span>
        <strong>Preprocess</strong>
      </div>

      <div class="workflow-dl-arrow">→</div>

      <div class="workflow-dl-box">
        <span>3</span>
        <strong>Build Network</strong>
      </div>

      <div class="workflow-dl-arrow">→</div>

      <div class="workflow-dl-box">
        <span>4</span>
        <strong>Train</strong>
      </div>

      <div class="workflow-dl-arrow">→</div>

      <div class="workflow-dl-box">
        <span>5</span>
        <strong>Evaluate</strong>
      </div>

      <div class="workflow-dl-arrow">→</div>

      <div class="workflow-dl-box">
        <span>6</span>
        <strong>Predict</strong>
      </div>

    </div>


    <h3>30. Important Deep Learning Concepts</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Neuron</td>
          <td>Basic computational unit of a neural network.</td>
        </tr>

        <tr>
          <td>Layer</td>
          <td>Group of neurons arranged at a particular stage.</td>
        </tr>

        <tr>
          <td>Weight</td>
          <td>Controls the importance of an input.</td>
        </tr>

        <tr>
          <td>Bias</td>
          <td>Helps adjust the output of a neuron.</td>
        </tr>

        <tr>
          <td>Activation Function</td>
          <td>Introduces non-linearity into the network.</td>
        </tr>

        <tr>
          <td>Loss Function</td>
          <td>Measures prediction error.</td>
        </tr>

        <tr>
          <td>Optimizer</td>
          <td>Updates model weights to reduce loss.</td>
        </tr>

        <tr>
          <td>Epoch</td>
          <td>One complete pass through the training dataset.</td>
        </tr>

        <tr>
          <td>Batch Size</td>
          <td>Number of samples processed before a weight update.</td>
        </tr>

        <tr>
          <td>CNN</td>
          <td>Neural network commonly used for image-related tasks.</td>
        </tr>

        <tr>
          <td>RNN</td>
          <td>Neural network designed for sequential data.</td>
        </tr>

        <tr>
          <td>LSTM</td>
          <td>RNN architecture designed to handle long-term dependencies.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Install TensorFlow using pip.',
    'Create a simple neural network using Keras.',
    'Understand neurons, layers, weights, and biases.',
    'Practice different activation functions.',
    'Train a simple neural network.',
    'Experiment with epochs and batch size.',
    'Compare different optimizers.',
    'Create a binary classification neural network.',
    'Build a simple CNN for image classification.',
    'Practice an RNN with sequential data.',
    'Experiment with dropout to reduce overfitting.',
    'Evaluate a neural network using test data.',
    'Create a small deep learning project.'
  ],

  code: `from tensorflow import keras

# Create a simple neural network
model = keras.Sequential([
    keras.layers.Dense(
        16,
        activation="relu",
        input_shape=(4,)
    ),

    keras.layers.Dense(
        8,
        activation="relu"
    ),

    keras.layers.Dense(
        1,
        activation="sigmoid"
    )
])

# Compile the model
model.compile(
    optimizer="adam",
    loss="binary_crossentropy",
    metrics=["accuracy"]
)

# Display model structure
model.summary()`
},
  {
  key: 'automation',
  title: 'Automation',
  description: 'Python Automation is the process of using Python programs to perform repetitive tasks automatically with little or no human intervention. Python provides powerful built-in modules and external libraries for automating files, folders, data processing, web browsers, emails, system tasks, and scheduled operations.',

  theory: [
    `
    <h3>1. What is Automation?</h3>

    <p>
      <strong>Automation</strong> means using a computer program to
      perform tasks automatically instead of doing them manually.
      Python is widely used for automation because it has a simple
      syntax and provides many useful libraries.
    </p>

    <div class="automation-flow">

      <div class="automation-box">
        👤
        <strong>Manual Task</strong>
        <span>Repeated Work</span>
      </div>

      <div class="automation-arrow">→</div>

      <div class="automation-box">
        🐍
        <strong>Python Script</strong>
        <span>Automates Task</span>
      </div>

      <div class="automation-arrow">→</div>

      <div class="automation-box">
        ⚙️
        <strong>Automatic Process</strong>
        <span>Less Human Effort</span>
      </div>

      <div class="automation-arrow">→</div>

      <div class="automation-box">
        ✅
        <strong>Result</strong>
        <span>Fast & Consistent</span>
      </div>

    </div>


    <h3>2. Why Use Python for Automation?</h3>

    <ul>
      <li>Simple and easy-to-read syntax.</li>
      <li>Large collection of built-in modules.</li>
      <li>Supports file and folder operations.</li>
      <li>Can automate browser-based tasks.</li>
      <li>Can process large amounts of data.</li>
      <li>Can interact with operating system commands.</li>
      <li>Supports scheduling and repetitive tasks.</li>
    </ul>


    <h3>3. Common Automation Tasks</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>File Automation</td>
          <td>Rename, copy, move, or delete files.</td>
        </tr>

        <tr>
          <td>Folder Automation</td>
          <td>Create and organize directories automatically.</td>
        </tr>

        <tr>
          <td>Data Automation</td>
          <td>Process CSV, Excel, and other datasets.</td>
        </tr>

        <tr>
          <td>Web Automation</td>
          <td>Automate browser-based repetitive tasks.</td>
        </tr>

        <tr>
          <td>Email Automation</td>
          <td>Send automated emails and reports.</td>
        </tr>

        <tr>
          <td>System Automation</td>
          <td>Run system commands and applications.</td>
        </tr>

        <tr>
          <td>Task Scheduling</td>
          <td>Run scripts at a specific time or interval.</td>
        </tr>
      </tbody>
    </table>


    <h3>4. File Automation</h3>

    <p>
      Python can automatically create, read, rename, copy, move,
      and delete files. This is useful when dealing with a large
      number of files.
    </p>

    <pre><code>from pathlib import Path

file = Path("example.txt")

if file.exists():
    print("File exists")
else:
    print("File not found")</code></pre>


    <h3>5. Creating Folders Automatically</h3>

    <p>
      The <strong>pathlib</strong> module can be used to create
      directories programmatically.
    </p>

    <pre><code>from pathlib import Path

folder = Path("Reports")

folder.mkdir(
    exist_ok=True
)

print("Folder created")</code></pre>


    <h3>6. Copying and Moving Files</h3>

    <p>
      The <strong>shutil</strong> module provides functions for
      copying and moving files and folders.
    </p>

    <pre><code>import shutil

shutil.copy(
    "report.txt",
    "backup/report.txt"
)

shutil.move(
    "old.txt",
    "documents/old.txt"
)</code></pre>


    <h3>7. Renaming Files</h3>

    <pre><code>from pathlib import Path

old_name = Path("old_name.txt")
new_name = Path("new_name.txt")

old_name.rename(new_name)

print("File renamed")</code></pre>


    <h3>8. Organizing Files Automatically</h3>

    <p>
      Python can organize files based on their extensions. For example,
      images can be moved to an Images folder and documents can be moved
      to a Documents folder.
    </p>

    <pre><code>from pathlib import Path
import shutil

source = Path("Downloads")

for file in source.iterdir():

    if file.is_file():

        if file.suffix.lower() == ".jpg":
            destination = source / "Images"
            destination.mkdir(exist_ok=True)

            shutil.move(
                str(file),
                str(destination / file.name)
            )</code></pre>


    <h3>9. Operating System Automation</h3>

    <p>
      The <strong>os</strong> module allows Python programs to interact
      with the operating system and perform tasks such as listing
      directories and accessing environment variables.
    </p>

    <pre><code>import os

print(os.getcwd())

print(os.listdir())</code></pre>


    <h3>10. Running System Commands</h3>

    <p>
      The <strong>subprocess</strong> module can be used to execute
      external programs and system commands from Python.
    </p>

    <pre><code>import subprocess

result = subprocess.run(
    ["python", "--version"],
    capture_output=True,
    text=True
)

print(result.stdout)</code></pre>


    <h3>11. CSV Automation</h3>

    <p>
      Python can automatically read and process CSV files using the
      built-in <strong>csv</strong> module or libraries such as Pandas.
    </p>

    <pre><code>import csv

with open(
    "students.csv",
    "r",
    newline=""
) as file:

    reader = csv.reader(file)

    for row in reader:
        print(row)</code></pre>


    <h3>12. Excel Automation</h3>

    <p>
      Excel files can be automated using libraries such as
      <strong>openpyxl</strong>. Python can read, update, and create
      spreadsheet data.
    </p>

    <pre><code>from openpyxl import load_workbook

workbook = load_workbook(
    "students.xlsx"
)

sheet = workbook.active

sheet["A1"] = "Student Name"

workbook.save(
    "students.xlsx"
)</code></pre>


    <h3>13. Web Automation</h3>

    <p>
      Web automation allows Python programs to interact with web
      browsers automatically. Tools such as Selenium can be used for
      browser testing and other legitimate repetitive browser tasks.
    </p>

    <pre><code>from selenium import webdriver

driver = webdriver.Chrome()

driver.get(
    "https://example.com"
)

print(driver.title)

driver.quit()</code></pre>


    <h3>14. Browser Automation Workflow</h3>

    <div class="browser-flow">

      <div class="browser-box">
        🌐
        <strong>Open Browser</strong>
      </div>

      <div class="browser-arrow">→</div>

      <div class="browser-box">
        🔗
        <strong>Open Website</strong>
      </div>

      <div class="browser-arrow">→</div>

      <div class="browser-box">
        🖱️
        <strong>Perform Action</strong>
      </div>

      <div class="browser-arrow">→</div>

      <div class="browser-box">
        📄
        <strong>Read Result</strong>
      </div>

      <div class="browser-arrow">→</div>

      <div class="browser-box">
        ❌
        <strong>Close Browser</strong>
      </div>

    </div>


    <h3>15. Email Automation</h3>

    <p>
      Python can be used to automate email-related tasks such as
      sending reports or notifications. The <strong>smtplib</strong>
      module provides SMTP functionality.
    </p>

    <pre><code>import smtplib

server = smtplib.SMTP(
    "smtp.example.com",
    587
)

server.starttls()

# Authenticate and send email
# Use your email provider's
# supported authentication method.

server.quit()</code></pre>


    <h3>16. Task Scheduling</h3>

    <p>
      Automation scripts can be scheduled to run at specific times or
      intervals. Python can also work with operating-system schedulers
      such as Windows Task Scheduler and cron on Linux.
    </p>

    <pre><code>import time

while True:

    print("Task executed")

    time.sleep(60)</code></pre>


    <h3>17. Time-Based Automation</h3>

    <p>
      The <strong>datetime</strong> module can be used to work with
      dates and times in automation programs.
    </p>

    <pre><code>from datetime import datetime

now = datetime.now()

print("Current time:", now)</code></pre>


    <h3>18. Automation with APIs</h3>

    <p>
      Python can communicate with web APIs to automatically retrieve
      or send data. The <strong>requests</strong> library is commonly
      used for HTTP requests.
    </p>

    <pre><code>import requests

response = requests.get(
    "https://api.example.com/data"
)

if response.ok:
    data = response.json()
    print(data)</code></pre>


    <h3>19. Logging in Automation</h3>

    <p>
      Logging helps record what an automation script is doing. It is
      useful for troubleshooting errors and checking whether automated
      tasks completed successfully.
    </p>

    <pre><code>import logging

logging.basicConfig(
    level=logging.INFO
)

logging.info(
    "Automation started"
)

logging.info(
    "Task completed"
)</code></pre>


    <h3>20. Error Handling in Automation</h3>

    <p>
      Automation programs should handle errors properly so that one
      unexpected problem does not stop the entire workflow.
    </p>

    <pre><code>try:

    with open(
        "data.txt",
        "r"
    ) as file:

        data = file.read()

except FileNotFoundError:

    print("File not found")

except Exception as error:

    print("Error:", error)</code></pre>


    <h3>21. Automation Workflow</h3>

    <div class="automation-workflow">

      <div class="workflow-auto-box">
        <span>1</span>
        <strong>Identify Task</strong>
      </div>

      <div class="workflow-auto-arrow">→</div>

      <div class="workflow-auto-box">
        <span>2</span>
        <strong>Write Script</strong>
      </div>

      <div class="workflow-auto-arrow">→</div>

      <div class="workflow-auto-box">
        <span>3</span>
        <strong>Test</strong>
      </div>

      <div class="workflow-auto-arrow">→</div>

      <div class="workflow-auto-box">
        <span>4</span>
        <strong>Schedule</strong>
      </div>

      <div class="workflow-auto-arrow">→</div>

      <div class="workflow-auto-box">
        <span>5</span>
        <strong>Monitor</strong>
      </div>

    </div>


    <h3>22. Common Python Automation Libraries</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Library / Module</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>os</td>
          <td>Operating system interaction.</td>
        </tr>

        <tr>
          <td>pathlib</td>
          <td>Modern file and path handling.</td>
        </tr>

        <tr>
          <td>shutil</td>
          <td>Copying and moving files and directories.</td>
        </tr>

        <tr>
          <td>subprocess</td>
          <td>Running external commands and programs.</td>
        </tr>

        <tr>
          <td>csv</td>
          <td>Reading and writing CSV files.</td>
        </tr>

        <tr>
          <td>openpyxl</td>
          <td>Working with Excel workbooks.</td>
        </tr>

        <tr>
          <td>requests</td>
          <td>Sending HTTP requests to APIs and websites.</td>
        </tr>

        <tr>
          <td>Selenium</td>
          <td>Browser automation and web testing.</td>
        </tr>

        <tr>
          <td>logging</td>
          <td>Recording program activity and errors.</td>
        </tr>

        <tr>
          <td>schedule</td>
          <td>Simple time-based task scheduling.</td>
        </tr>
      </tbody>
    </table>


    <h3>23. Benefits of Automation</h3>

    <ul>
      <li>Saves time.</li>
      <li>Reduces repetitive manual work.</li>
      <li>Reduces human errors.</li>
      <li>Improves consistency.</li>
      <li>Can process large amounts of data.</li>
      <li>Allows tasks to run automatically.</li>
      <li>Improves productivity.</li>
    </ul>


    <h3>24. Real-World Applications</h3>

    <ul>
      <li>Automatic file organization.</li>
      <li>Automatic report generation.</li>
      <li>Data cleaning and processing.</li>
      <li>Website testing.</li>
      <li>System monitoring.</li>
      <li>Email notifications.</li>
      <li>Database backups.</li>
      <li>Scheduled data collection.</li>
      <li>Excel report processing.</li>
      <li>Routine development tasks.</li>
    </ul>


    <h3>25. Important Automation Concepts</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Automation</td>
          <td>Performing tasks automatically using software.</td>
        </tr>

        <tr>
          <td>Script</td>
          <td>A program written to perform a specific task.</td>
        </tr>

        <tr>
          <td>Scheduling</td>
          <td>Running a task at a specified time or interval.</td>
        </tr>

        <tr>
          <td>File Automation</td>
          <td>Automatically managing files and folders.</td>
        </tr>

        <tr>
          <td>Web Automation</td>
          <td>Automatically interacting with web browsers.</td>
        </tr>

        <tr>
          <td>API Automation</td>
          <td>Automatically exchanging data with APIs.</td>
        </tr>

        <tr>
          <td>Logging</td>
          <td>Recording the activities of an automation program.</td>
        </tr>

        <tr>
          <td>Error Handling</td>
          <td>Managing errors without unexpectedly stopping the workflow.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a Python script that creates multiple folders automatically.',
    'Write a program to rename multiple files.',
    'Build a file organizer based on file extensions.',
    'Copy important files to a backup folder automatically.',
    'Read and process a CSV file automatically.',
    'Create and update an Excel file using Python.',
    'Run a system command using subprocess.',
    'Create a simple browser automation script using Selenium.',
    'Build a script that records its activities using logging.',
    'Create a simple scheduled task.',
    'Fetch data from an API and save it to a file.',
    'Create an automated report generation script.',
    'Build a small file-backup automation project.'
  ],

  code: `from pathlib import Path
import shutil

# Source folder
source = Path("Downloads")

# Create destination folders
images = source / "Images"
documents = source / "Documents"

images.mkdir(exist_ok=True)
documents.mkdir(exist_ok=True)

# Organize files
for file in source.iterdir():

    if not file.is_file():
        continue

    if file.suffix.lower() in [".jpg", ".png", ".jpeg"]:
        shutil.move(
            str(file),
            str(images / file.name)
        )

    elif file.suffix.lower() in [".pdf", ".docx", ".txt"]:
        shutil.move(
            str(file),
            str(documents / file.name)
        )

print("Files organized successfully.")`
},
  {
  key: 'testing',
  title: 'Testing',
  description: 'Testing is the process of checking a program to verify that it works correctly and produces the expected results. Python provides built-in and third-party testing tools such as unittest and pytest to create, run, and automate tests.',

  theory: [
    `
    <h3>1. What is Testing?</h3>

    <p>
      <strong>Testing</strong> is the process of checking a software
      application or program to find errors and verify that it behaves
      as expected.
    </p>

    <p>
      Testing helps developers identify problems early and improve the
      reliability, quality, and maintainability of software.
    </p>

    <div class="testing-flow">

      <div class="testing-box">
        💻
        <strong>Program</strong>
        <span>Code to Test</span>
      </div>

      <div class="testing-arrow">→</div>

      <div class="testing-box">
        🧪
        <strong>Test</strong>
        <span>Check Behavior</span>
      </div>

      <div class="testing-arrow">→</div>

      <div class="testing-box">
        🔍
        <strong>Find Errors</strong>
        <span>Identify Problems</span>
      </div>

      <div class="testing-arrow">→</div>

      <div class="testing-box">
        ✅
        <strong>Reliable Code</strong>
        <span>Expected Result</span>
      </div>

    </div>


    <h3>2. Why is Testing Important?</h3>

    <ul>
      <li>Helps find bugs and errors.</li>
      <li>Verifies that code produces expected results.</li>
      <li>Prevents previously fixed bugs from returning.</li>
      <li>Improves software quality.</li>
      <li>Makes code easier to maintain.</li>
      <li>Provides confidence when changing existing code.</li>
      <li>Helps automate repetitive checks.</li>
    </ul>


    <h3>3. Testing Process</h3>

    <div class="test-process">

      <div class="process-test-box">
        <span>1</span>
        <strong>Write Code</strong>
      </div>

      <div class="process-test-arrow">→</div>

      <div class="process-test-box">
        <span>2</span>
        <strong>Create Tests</strong>
      </div>

      <div class="process-test-arrow">→</div>

      <div class="process-test-box">
        <span>3</span>
        <strong>Run Tests</strong>
      </div>

      <div class="process-test-arrow">→</div>

      <div class="process-test-box">
        <span>4</span>
        <strong>Check Results</strong>
      </div>

      <div class="process-test-arrow">→</div>

      <div class="process-test-box">
        <span>5</span>
        <strong>Fix Bugs</strong>
      </div>

    </div>


    <h3>4. Test Case</h3>

    <p>
      A <strong>test case</strong> is a specific set of inputs,
      conditions, and expected results used to verify a particular
      behavior of a program.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Test Case</th>
          <th>Input</th>
          <th>Expected Result</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Addition</td>
          <td>5, 3</td>
          <td>8</td>
        </tr>

        <tr>
          <td>Positive Number</td>
          <td>10</td>
          <td>True</td>
        </tr>

        <tr>
          <td>Empty String</td>
          <td>""</td>
          <td>False</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Assertion</h3>

    <p>
      An <strong>assertion</strong> checks whether a condition is true.
      If the condition is false, Python raises an
      <strong>AssertionError</strong>.
    </p>

    <pre><code>def add(a, b):
    return a + b

assert add(2, 3) == 5

print("Test passed")</code></pre>


    <h3>6. Unit Testing</h3>

    <p>
      <strong>Unit Testing</strong> tests small individual parts of a
      program, such as functions or methods, independently.
    </p>

    <p>
      For example, a calculator program can have separate unit tests
      for addition, subtraction, multiplication, and division.
    </p>

    <pre><code>def multiply(a, b):
    return a * b

assert multiply(4, 5) == 20</code></pre>


    <h3>7. Python unittest Module</h3>

    <p>
      Python provides the built-in <strong>unittest</strong> module
      for creating and running automated unit tests.
    </p>

    <pre><code>import unittest

def add(a, b):
    return a + b

class TestCalculator(unittest.TestCase):

    def test_add(self):
        self.assertEqual(
            add(2, 3),
            5
        )

if __name__ == "__main__":
    unittest.main()</code></pre>


    <h3>8. Common unittest Assertions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Assertion</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>assertEqual()</td>
          <td>Checks whether two values are equal.</td>
        </tr>

        <tr>
          <td>assertNotEqual()</td>
          <td>Checks whether two values are different.</td>
        </tr>

        <tr>
          <td>assertTrue()</td>
          <td>Checks whether a condition is true.</td>
        </tr>

        <tr>
          <td>assertFalse()</td>
          <td>Checks whether a condition is false.</td>
        </tr>

        <tr>
          <td>assertIsNone()</td>
          <td>Checks whether a value is None.</td>
        </tr>

        <tr>
          <td>assertIn()</td>
          <td>Checks whether a value exists inside a collection.</td>
        </tr>
      </tbody>
    </table>


    <h3>9. pytest</h3>

    <p>
      <strong>pytest</strong> is a popular third-party Python testing
      framework. It provides a simple syntax and powerful features for
      writing and running tests.
    </p>

    <pre><code>pip install pytest</code></pre>


    <h3>10. Creating a pytest Test</h3>

    <pre><code>def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5

def test_add_negative():
    assert add(-2, 2) == 0</code></pre>


    <h3>11. Running pytest</h3>

    <p>
      If the test file is named <strong>test_calculator.py</strong>,
      pytest can discover and run the tests automatically.
    </p>

    <pre><code>pytest</code></pre>


    <h3>12. Test Result</h3>

    <div class="result-testing">

      <div class="result-box success">
        ✅
        <strong>Test Passed</strong>
        <span>Expected result was received.</span>
      </div>

      <div class="result-box failed">
        ❌
        <strong>Test Failed</strong>
        <span>Actual result differs from expected result.</span>
      </div>

    </div>


    <h3>13. Unit Testing vs Integration Testing</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Unit Testing</th>
          <th>Integration Testing</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Tests individual components.</td>
          <td>Tests multiple components together.</td>
        </tr>

        <tr>
          <td>Usually smaller and faster.</td>
          <td>Usually more complex.</td>
        </tr>

        <tr>
          <td>Focuses on one function or module.</td>
          <td>Focuses on interaction between components.</td>
        </tr>
      </tbody>
    </table>


    <h3>14. Integration Testing</h3>

    <p>
      <strong>Integration Testing</strong> checks whether different
      modules or components work correctly when combined.
    </p>

    <pre><code>def calculate_total(price, tax):
    return price + tax

def get_tax(price):
    return price * 0.10

def test_total():
    price = 100
    tax = get_tax(price)

    assert calculate_total(
        price,
        tax
    ) == 110</code></pre>


    <h3>15. Functional Testing</h3>

    <p>
      <strong>Functional Testing</strong> verifies whether a software
      feature behaves according to its requirements.
    </p>

    <p>
      For example, a login system can be tested with valid credentials,
      invalid credentials, empty fields, and incorrect passwords.
    </p>


    <h3>16. Regression Testing</h3>

    <p>
      <strong>Regression Testing</strong> checks that new code changes
      have not broken existing functionality.
    </p>

    <div class="regression-flow">

      <div class="regression-box">
        🧩
        <strong>Existing Code</strong>
      </div>

      <div class="regression-arrow">→</div>

      <div class="regression-box">
        🔧
        <strong>New Changes</strong>
      </div>

      <div class="regression-arrow">→</div>

      <div class="regression-box">
        🧪
        <strong>Run Old Tests</strong>
      </div>

      <div class="regression-arrow">→</div>

      <div class="regression-box">
        ✅
        <strong>Verify</strong>
      </div>

    </div>


    <h3>17. Test-Driven Development</h3>

    <p>
      <strong>Test-Driven Development (TDD)</strong> is a development
      approach where tests are written before the implementation code.
    </p>

    <pre><code>Write Test
    ↓
Test Fails
    ↓
Write Code
    ↓
Test Passes
    ↓
Improve Code</code></pre>


    <h3>18. Test Fixtures</h3>

    <p>
      Test fixtures provide the setup and cleanup required by tests.
      They help prepare a consistent environment before a test runs.
    </p>

    <pre><code>import unittest

class TestExample(unittest.TestCase):

    def setUp(self):
        self.number = 10

    def test_value(self):
        self.assertEqual(
            self.number,
            10
        )</code></pre>


    <h3>19. Testing Exceptions</h3>

    <p>
      Tests can verify that a program correctly raises an expected
      exception.
    </p>

    <pre><code>import unittest

def divide(a, b):
    return a / b

class TestDivide(unittest.TestCase):

    def test_zero_division(self):

        with self.assertRaises(
            ZeroDivisionError
        ):
            divide(10, 0)</code></pre>


    <h3>20. Mocking</h3>

    <p>
      <strong>Mocking</strong> replaces a real dependency with a
      controlled object during testing. It is useful when testing code
      that depends on external services, APIs, databases, or other
      components.
    </p>

    <pre><code>from unittest.mock import Mock

service = Mock()

service.get_data.return_value = "Test Data"

result = service.get_data()

print(result)</code></pre>


    <h3>21. Test Coverage</h3>

    <p>
      <strong>Test Coverage</strong> measures how much of the program's
      code is executed by the test suite. High coverage does not
      automatically mean that the software is completely bug-free, but
      it can help identify untested areas.
    </p>

    <pre><code>pip install coverage

coverage run -m pytest

coverage report</code></pre>


    <h3>22. Debugging vs Testing</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Testing</th>
          <th>Debugging</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Finds whether the program has problems.</td>
          <td>Finds and fixes the cause of a problem.</td>
        </tr>

        <tr>
          <td>Uses test cases.</td>
          <td>Uses debugging tools and code inspection.</td>
        </tr>

        <tr>
          <td>Can be automated.</td>
          <td>Often requires investigation by the developer.</td>
        </tr>
      </tbody>
    </table>


    <h3>23. Automated Testing</h3>

    <p>
      <strong>Automated Testing</strong> uses software tools to execute
      tests automatically and compare actual results with expected
      results.
    </p>

    <div class="automated-testing-flow">

      <div class="auto-test-box">
        🧪
        <strong>Test Cases</strong>
      </div>

      <div class="auto-test-arrow">→</div>

      <div class="auto-test-box">
        ⚙️
        <strong>Test Runner</strong>
      </div>

      <div class="auto-test-arrow">→</div>

      <div class="auto-test-box">
        📊
        <strong>Results</strong>
      </div>

      <div class="auto-test-arrow">→</div>

      <div class="auto-test-box">
        ✅
        <strong>Report</strong>
      </div>

    </div>


    <h3>24. Testing Best Practices</h3>

    <ul>
      <li>Write clear and independent tests.</li>
      <li>Use meaningful test names.</li>
      <li>Test normal and edge cases.</li>
      <li>Keep tests easy to understand.</li>
      <li>Run tests after important code changes.</li>
      <li>Automate repetitive tests.</li>
      <li>Do not depend unnecessarily on test execution order.</li>
      <li>Keep test data controlled and predictable.</li>
    </ul>


    <h3>25. Common Python Testing Tools</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Tool</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>unittest</td>
          <td>Python's built-in unit testing framework.</td>
        </tr>

        <tr>
          <td>pytest</td>
          <td>Popular and flexible testing framework.</td>
        </tr>

        <tr>
          <td>coverage.py</td>
          <td>Measures code coverage.</td>
        </tr>

        <tr>
          <td>unittest.mock</td>
          <td>Creates mock objects for testing.</td>
        </tr>
      </tbody>
    </table>


    <h3>26. Important Testing Concepts</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Test Case</td>
          <td>Specific input and expected result used for testing.</td>
        </tr>

        <tr>
          <td>Unit Test</td>
          <td>Tests a small individual part of a program.</td>
        </tr>

        <tr>
          <td>Integration Test</td>
          <td>Tests multiple components working together.</td>
        </tr>

        <tr>
          <td>Assertion</td>
          <td>Checks whether an expected condition is true.</td>
        </tr>

        <tr>
          <td>Regression Test</td>
          <td>Checks that existing features still work after changes.</td>
        </tr>

        <tr>
          <td>Mock</td>
          <td>Simulates a dependency during testing.</td>
        </tr>

        <tr>
          <td>Test Coverage</td>
          <td>Measures how much code is executed by tests.</td>
        </tr>

        <tr>
          <td>Test Runner</td>
          <td>Executes test cases and reports their results.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a simple function and write unit tests for it.',
    'Practice assertEqual() and assertTrue().',
    'Create tests using Python unittest.',
    'Install pytest and create pytest test cases.',
    'Test normal and edge-case inputs.',
    'Write a test for an expected exception.',
    'Create an integration test for two functions.',
    'Practice mocking an external dependency.',
    'Measure test coverage using coverage.py.',
    'Create a small automated test suite for a Python project.'
  ],

  code: `import unittest

def add(a, b):
    return a + b

def divide(a, b):
    return a / b


class TestCalculator(unittest.TestCase):

    def test_add(self):
        self.assertEqual(
            add(5, 3),
            8
        )

    def test_add_negative(self):
        self.assertEqual(
            add(-5, 3),
            -2
        )

    def test_divide(self):
        self.assertEqual(
            divide(10, 2),
            5
        )

    def test_zero_division(self):

        with self.assertRaises(
            ZeroDivisionError
        ):
            divide(10, 0)


if __name__ == "__main__":
    unittest.main()`
},
  {
  key: 'login',
  title: 'Login',
  description: 'Login is the process of verifying a user’s identity before allowing access to a protected application or service. A typical login system accepts credentials such as an email or username and password, validates them, and creates an authenticated session or token after successful verification.',

  theory: [
    `
    <h3>1. What is Login?</h3>

    <p>
      <strong>Login</strong> is the process through which a user provides
      their credentials to access an application, website, or system.
      The most common credentials are a username or email address and a
      password.
    </p>

    <div class="login-flow">

      <div class="login-box">
        👤
        <strong>User</strong>
        <span>Enters Credentials</span>
      </div>

      <div class="login-arrow">→</div>

      <div class="login-box">
        🔐
        <strong>Login Form</strong>
        <span>Username + Password</span>
      </div>

      <div class="login-arrow">→</div>

      <div class="login-box">
        🛡️
        <strong>Authentication</strong>
        <span>Verify User</span>
      </div>

      <div class="login-arrow">→</div>

      <div class="login-box">
        ✅
        <strong>Access</strong>
        <span>Login Successful</span>
      </div>

    </div>


    <h3>2. Why is Login Important?</h3>

    <ul>
      <li>Protects private user accounts.</li>
      <li>Restricts access to authorized users.</li>
      <li>Helps identify users.</li>
      <li>Protects application data.</li>
      <li>Supports personalized user experiences.</li>
      <li>Provides a foundation for access control.</li>
    </ul>


    <h3>3. Basic Login Components</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Username / Email</td>
          <td>Identifies the user account.</td>
        </tr>

        <tr>
          <td>Password</td>
          <td>Secret credential used to verify the user.</td>
        </tr>

        <tr>
          <td>Login Form</td>
          <td>Collects the user's credentials.</td>
        </tr>

        <tr>
          <td>Authentication</td>
          <td>Verifies whether the credentials are correct.</td>
        </tr>

        <tr>
          <td>Session / Token</td>
          <td>Maintains the authenticated state after login.</td>
        </tr>

        <tr>
          <td>Logout</td>
          <td>Ends the authenticated session.</td>
        </tr>
      </tbody>
    </table>


    <h3>4. Login Process</h3>

    <div class="login-process">

      <div class="process-login-box">
        <span>1</span>
        <strong>Enter Email</strong>
      </div>

      <div class="process-login-arrow">→</div>

      <div class="process-login-box">
        <span>2</span>
        <strong>Enter Password</strong>
      </div>

      <div class="process-login-arrow">→</div>

      <div class="process-login-box">
        <span>3</span>
        <strong>Validate Input</strong>
      </div>

      <div class="process-login-arrow">→</div>

      <div class="process-login-box">
        <span>4</span>
        <strong>Verify Credentials</strong>
      </div>

      <div class="process-login-arrow">→</div>

      <div class="process-login-box">
        <span>5</span>
        <strong>Grant Access</strong>
      </div>

    </div>


    <h3>5. Login Form</h3>

    <p>
      A login form normally contains an email or username field,
      a password field, and a submit button.
    </p>

    <pre><code>&lt;form&gt;

  &lt;label&gt;Email&lt;/label&gt;
  &lt;input
    type="email"
    name="email"
    required
  &gt;

  &lt;label&gt;Password&lt;/label&gt;
  &lt;input
    type="password"
    name="password"
    required
  &gt;

  &lt;button type="submit"&gt;
    Login
  &lt;/button&gt;

&lt;/form&gt;</code></pre>


    <h3>6. Input Validation</h3>

    <p>
      Before authentication, the application should validate the
      submitted data. For example, it can check whether the email
      field is present and whether the password is not empty.
    </p>

    <pre><code>email = "user@example.com"
password = "secret123"

if not email:
    print("Email is required")

elif not password:
    print("Password is required")

else:
    print("Input is valid")</code></pre>


    <h3>7. Authentication</h3>

    <p>
      <strong>Authentication</strong> verifies the identity of a user.
      The server compares the submitted credentials with the securely
      stored account information.
    </p>

    <pre><code>stored_email = "user@example.com"
stored_password = "secret123"

email = "user@example.com"
password = "secret123"

if (
    email == stored_email
    and password == stored_password
):
    print("Login successful")
else:
    print("Invalid credentials")</code></pre>

    <p>
      The example above is only for understanding the concept.
      Real applications should never store user passwords as plain text.
    </p>


    <h3>8. Password Hashing</h3>

    <p>
      Passwords should be stored using a secure password-hashing
      algorithm rather than storing the original password.
      During login, the entered password is checked against the
      stored password hash.
    </p>

    <pre><code>import hashlib

password = "secret123"

password_hash = hashlib.sha256(
    password.encode()
).hexdigest()

print(password_hash)</code></pre>

    <p>
      For production authentication systems, use a password-specific
      hashing algorithm such as Argon2, bcrypt, or scrypt through a
      well-maintained library rather than using plain SHA-256 alone
      for password storage.
    </p>


    <h3>9. Authentication vs Authorization</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Authentication</th>
          <th>Authorization</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Verifies who the user is.</td>
          <td>Determines what the user can access.</td>
        </tr>

        <tr>
          <td>Uses credentials.</td>
          <td>Uses permissions or roles.</td>
        </tr>

        <tr>
          <td>Example: Login.</td>
          <td>Example: Admin can manage users.</td>
        </tr>
      </tbody>
    </table>


    <h3>10. Session</h3>

    <p>
      After successful login, a server can create a
      <strong>session</strong> to remember that the user has been
      authenticated.
    </p>

    <div class="session-flow">

      <div class="session-box">
        🔑
        <strong>Login</strong>
      </div>

      <div class="session-arrow">→</div>

      <div class="session-box">
        🪪
        <strong>Session Created</strong>
      </div>

      <div class="session-arrow">→</div>

      <div class="session-box">
        🌐
        <strong>Access Pages</strong>
      </div>

      <div class="session-arrow">→</div>

      <div class="session-box">
        🚪
        <strong>Logout</strong>
      </div>

    </div>


    <h3>11. Token-Based Authentication</h3>

    <p>
      In token-based authentication, the server provides a token after
      successful login. The client sends the token with later requests
      to access protected resources.
    </p>

    <pre><code>Authorization: Bearer YOUR_TOKEN</code></pre>


    <h3>12. Login with Python Backend</h3>

    <p>
      A Python web framework such as Flask can receive login requests
      from a frontend and perform authentication on the server.
    </p>

    <pre><code>from flask import Flask, request, jsonify

app = Flask(__name__)

@app.post("/login")
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "error": "Email and password are required"
        }), 400

    return jsonify({
        "message": "Login request received"
    })</code></pre>


    <h3>13. Frontend Login Request</h3>

    <p>
      JavaScript can send the login credentials to a backend API using
      the <strong>fetch()</strong> function.
    </p>

    <pre><code>fetch("/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: email,
    password: password
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
});</code></pre>


    <h3>14. Login Success and Failure</h3>

    <div class="login-result">

      <div class="login-result-box success">
        ✅
        <strong>Login Successful</strong>
        <span>User can access protected resources.</span>
      </div>

      <div class="login-result-box failed">
        ❌
        <strong>Login Failed</strong>
        <span>Credentials are invalid or request is rejected.</span>
      </div>

    </div>


    <h3>15. Logout</h3>

    <p>
      <strong>Logout</strong> ends the user's authenticated state.
      Depending on the authentication design, this may involve
      destroying a server-side session or invalidating a token.
    </p>

    <pre><code>def logout():
    print("User logged out")</code></pre>


    <h3>16. Protected Routes</h3>

    <p>
      A <strong>protected route</strong> is a page or API endpoint that
      should only be accessible to authenticated users.
    </p>

    <pre><code>if user_is_authenticated:
    print("Access granted")
else:
    print("Please login first")</code></pre>


    <h3>17. Login Security</h3>

    <ul>
      <li>Never store passwords in plain text.</li>
      <li>Use HTTPS for login and authenticated traffic.</li>
      <li>Use secure password hashing.</li>
      <li>Validate input on the server.</li>
      <li>Use secure session or token handling.</li>
      <li>Protect against brute-force login attempts.</li>
      <li>Do not expose sensitive information in error messages.</li>
      <li>Keep authentication libraries and dependencies updated.</li>
    </ul>


    <h3>18. Common Login Errors</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Error</th>
          <th>Possible Reason</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invalid Credentials</td>
          <td>Email or password is incorrect.</td>
        </tr>

        <tr>
          <td>Required Field</td>
          <td>Email or password was not provided.</td>
        </tr>

        <tr>
          <td>Unauthorized</td>
          <td>User is not authenticated.</td>
        </tr>

        <tr>
          <td>Forbidden</td>
          <td>User is authenticated but lacks permission.</td>
        </tr>

        <tr>
          <td>Server Error</td>
          <td>Something went wrong on the backend.</td>
        </tr>
      </tbody>
    </table>


    <h3>19. Login Architecture</h3>

    <div class="login-architecture">

      <div class="architecture-box">
        💻
        <strong>Frontend</strong>
        <span>Login Form</span>
      </div>

      <div class="architecture-arrow">→</div>

      <div class="architecture-box">
        🌐
        <strong>API</strong>
        <span>Login Request</span>
      </div>

      <div class="architecture-arrow">→</div>

      <div class="architecture-box">
        🖥️
        <strong>Backend</strong>
        <span>Authentication</span>
      </div>

      <div class="architecture-arrow">→</div>

      <div class="architecture-box">
        🗄️
        <strong>Database</strong>
        <span>User Information</span>
      </div>

    </div>


    <h3>20. Login and Database</h3>

    <p>
      In a real application, user account information is generally
      stored in a database. During login, the backend finds the
      account and securely verifies the submitted password against
      the stored password hash.
    </p>

    <pre><code>SELECT id, email, password_hash
FROM users
WHERE email = ?;</code></pre>


    <h3>21. Multi-Factor Authentication</h3>

    <p>
      <strong>Multi-Factor Authentication (MFA)</strong> adds an
      additional verification step after the password, such as a
      one-time code or authenticator approval.
    </p>

    <div class="mfa-flow">

      <div class="mfa-box">
        👤
        <strong>Password</strong>
      </div>

      <div class="mfa-arrow">→</div>

      <div class="mfa-box">
        📱
        <strong>Second Factor</strong>
      </div>

      <div class="mfa-arrow">→</div>

      <div class="mfa-box">
        ✅
        <strong>Access</strong>
      </div>

    </div>


    <h3>22. Important Login Concepts</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Credential</td>
          <td>Information used to verify a user.</td>
        </tr>

        <tr>
          <td>Authentication</td>
          <td>Verifying the identity of a user.</td>
        </tr>

        <tr>
          <td>Authorization</td>
          <td>Determining what an authenticated user can access.</td>
        </tr>

        <tr>
          <td>Session</td>
          <td>Maintains an authenticated user's state.</td>
        </tr>

        <tr>
          <td>Token</td>
          <td>Credential used to authenticate subsequent requests.</td>
        </tr>

        <tr>
          <td>Password Hash</td>
          <td>One-way representation used for secure password storage.</td>
        </tr>

        <tr>
          <td>Protected Route</td>
          <td>Resource that requires authentication.</td>
        </tr>

        <tr>
          <td>MFA</td>
          <td>Authentication using multiple verification factors.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Create a simple login form using HTML.',
    'Add email and password validation using JavaScript.',
    'Create a basic Python login function.',
    'Build a Flask login API.',
    'Connect a login form with a backend API.',
    'Store users in a database and verify credentials.',
    'Practice secure password hashing.',
    'Create a logout feature.',
    'Create a protected page that requires authentication.',
    'Add session-based authentication to a small project.'
  ],

  code: `from flask import Flask, request, jsonify

app = Flask(__name__)

@app.post("/api/login")
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    # Validate input
    if not email or not password:
        return jsonify({
            "error": "Email and password are required"
        }), 400

    # Demo only:
    # Real applications should verify a
    # securely stored password hash.
    if (
        email == "user@example.com"
        and password == "secret123"
    ):
        return jsonify({
            "message": "Login successful"
        }), 200

    return jsonify({
        "error": "Invalid credentials"
    }), 401


if __name__ == "__main__":
    app.run(debug=True)`
},
  {
  key: 'coding-best-practices',
  title: 'Coding Best Practices',
  description: 'Coding best practices are recommended techniques and habits that help developers write clean, readable, maintainable, secure, efficient, and reliable Python programs.',

  theory: [
    `
    <h3>1. What are Coding Best Practices?</h3>

    <p>
      <strong>Coding Best Practices</strong> are guidelines and techniques
      that help developers write code that is easy to read, understand,
      test, debug, maintain, and reuse.
    </p>

    <div class="best-practice-flow">

      <div class="practice-box">
        🧑‍💻
        <strong>Write Code</strong>
        <span>Implement Solution</span>
      </div>

      <div class="practice-arrow">→</div>

      <div class="practice-box">
        🧹
        <strong>Clean Code</strong>
        <span>Improve Structure</span>
      </div>

      <div class="practice-arrow">→</div>

      <div class="practice-box">
        🧪
        <strong>Test</strong>
        <span>Find Problems</span>
      </div>

      <div class="practice-arrow">→</div>

      <div class="practice-box">
        🚀
        <strong>Maintain</strong>
        <span>Reliable Software</span>
      </div>

    </div>


    <h3>2. Why are Coding Best Practices Important?</h3>

    <ul>
      <li>Make code easier to understand.</li>
      <li>Reduce programming errors.</li>
      <li>Make debugging easier.</li>
      <li>Improve code maintainability.</li>
      <li>Make code easier to reuse.</li>
      <li>Improve collaboration between developers.</li>
      <li>Make testing easier.</li>
      <li>Improve software quality.</li>
    </ul>


    <h3>3. Use Meaningful Variable Names</h3>

    <p>
      Variable names should clearly describe the data they contain.
      Avoid unnecessary names such as <strong>x</strong>,
      <strong>a</strong>, or <strong>temp</strong> when a more descriptive
      name is possible.
    </p>

    <pre><code># Bad
x = 500

# Good
student_marks = 500</code></pre>


    <h3>4. Follow Python Naming Conventions</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Recommended Style</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Variable</td>
          <td>snake_case</td>
          <td>student_name</td>
        </tr>

        <tr>
          <td>Function</td>
          <td>snake_case</td>
          <td>calculate_total()</td>
        </tr>

        <tr>
          <td>Class</td>
          <td>PascalCase</td>
          <td>StudentRecord</td>
        </tr>

        <tr>
          <td>Constant</td>
          <td>UPPER_CASE</td>
          <td>MAX_SIZE</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Use Proper Indentation</h3>

    <p>
      Python uses indentation to define blocks of code. Consistent
      indentation is essential for readable and correct Python programs.
    </p>

    <pre><code># Good
if age >= 18:
    print("Adult")

# Avoid inconsistent indentation</code></pre>


    <h3>6. Keep Functions Small and Focused</h3>

    <p>
      A function should ideally perform one clear task. Small functions
      are easier to test, reuse, understand, and maintain.
    </p>

    <pre><code>def calculate_area(length, width):
    return length * width


area = calculate_area(10, 5)

print(area)</code></pre>


    <h3>7. Avoid Repeating Code</h3>

    <p>
      Repeating the same code in multiple places makes maintenance
      difficult. Use functions, loops, or reusable modules instead.
    </p>

    <pre><code># Better approach

def greet(name):
    return f"Hello, {name}!"

print(greet("Aman"))
print(greet("Rahul"))
print(greet("Priya"))</code></pre>


    <h3>8. Follow DRY Principle</h3>

    <p>
      <strong>DRY</strong> means <strong>Don't Repeat Yourself</strong>.
      Code that performs the same operation repeatedly should usually
      be placed in a reusable function or component.
    </p>


    <h3>9. Write Useful Comments</h3>

    <p>
      Comments should explain why something is done when the reason is
      not obvious. Avoid comments that simply repeat what the code
      already says.
    </p>

    <pre><code># Good:
# Apply discount only to premium members.
if is_premium:
    price *= 0.90</code></pre>


    <h3>10. Use Docstrings</h3>

    <p>
      A <strong>docstring</strong> documents a module, class, or function.
      It helps other developers understand how the code should be used.
    </p>

    <pre><code>def calculate_area(length, width):
    """
    Calculate the area of a rectangle.

    Args:
        length: Length of the rectangle.
        width: Width of the rectangle.

    Returns:
        The calculated area.
    """

    return length * width</code></pre>


    <h3>11. Handle Errors Properly</h3>

    <p>
      Use exception handling when an operation can reasonably fail.
      Avoid silently ignoring errors.
    </p>

    <pre><code>try:
    number = int(input("Enter a number: "))

except ValueError:
    print("Please enter a valid number.")</code></pre>


    <h3>12. Avoid Bare except</h3>

    <p>
      Catch specific exceptions whenever possible. A bare
      <strong>except:</strong> can hide unexpected programming errors.
    </p>

    <pre><code># Better

try:
    value = int("abc")

except ValueError:
    print("Invalid number.")</code></pre>


    <h3>13. Validate User Input</h3>

    <p>
      Input received from users should be validated before it is used.
      This helps prevent unexpected behavior and improves application
      reliability.
    </p>

    <pre><code>age = input("Enter your age: ")

if age.isdigit():
    age = int(age)
    print("Age:", age)
else:
    print("Invalid age")</code></pre>


    <h3>14. Keep Code Readable</h3>

    <p>
      Readable code is easier for both the original developer and other
      developers to understand.
    </p>

    <pre><code># Less readable
total=price*quantity+tax

# More readable
subtotal = price * quantity
total = subtotal + tax</code></pre>


    <h3>15. Avoid Extremely Long Lines</h3>

    <p>
      Long lines can make code difficult to read. Break complex
      expressions into smaller and meaningful parts.
    </p>

    <pre><code>total_price = (
    product_price
    * quantity
    + shipping_cost
)</code></pre>


    <h3>16. Use Constants for Fixed Values</h3>

    <p>
      Values that should remain fixed can be stored in constants with
      descriptive names.
    </p>

    <pre><code>MAX_LOGIN_ATTEMPTS = 5
TAX_RATE = 0.18

print(MAX_LOGIN_ATTEMPTS)</code></pre>


    <h3>17. Avoid Hard-Coding Sensitive Information</h3>

    <p>
      Passwords, API keys, database credentials, and other secrets
      should not be written directly into source code.
    </p>

    <pre><code># Avoid
API_KEY = "my-secret-key"

# Better:
# Load the value from an environment variable.</code></pre>


    <h3>18. Use Environment Variables</h3>

    <p>
      Environment variables can be used to keep configuration and
      sensitive values outside the source code.
    </p>

    <pre><code>import os

api_key = os.getenv("API_KEY")

if not api_key:
    raise RuntimeError(
        "API_KEY is not configured"
    )</code></pre>


    <h3>19. Use Virtual Environments</h3>

    <p>
      Virtual environments keep project dependencies isolated from
      other Python projects.
    </p>

    <pre><code>python -m venv .venv</code></pre>


    <h3>20. Manage Dependencies</h3>

    <p>
      Project dependencies should be documented so that the project
      can be installed and reproduced on another system.
    </p>

    <pre><code>pip freeze > requirements.txt</code></pre>


    <h3>21. Use Modules and Packages</h3>

    <p>
      Large programs should be divided into logical modules and
      packages rather than keeping everything in one file.
    </p>

    <div class="module-flow">

      <div class="module-box">
        📁
        <strong>Project</strong>
      </div>

      <div class="module-arrow">→</div>

      <div class="module-box">
        📄
        <strong>Modules</strong>
      </div>

      <div class="module-arrow">→</div>

      <div class="module-box">
        📦
        <strong>Packages</strong>
      </div>

      <div class="module-arrow">→</div>

      <div class="module-box">
        🚀
        <strong>Application</strong>
      </div>

    </div>


    <h3>22. Use Testing</h3>

    <p>
      Write tests to verify that functions and application features
      work as expected.
    </p>

    <pre><code>def add(a, b):
    return a + b


def test_add():
    assert add(2, 3) == 5</code></pre>


    <h3>23. Use Logging Instead of print() for Applications</h3>

    <p>
      The <strong>logging</strong> module provides different log levels
      and is more suitable than print statements for larger applications.
    </p>

    <pre><code>import logging

logging.basicConfig(
    level=logging.INFO
)

logging.info("Application started")
logging.warning("Low disk space")</code></pre>


    <h3>24. Use Git for Version Control</h3>

    <p>
      Git helps developers track code changes, create branches,
      collaborate with others, and restore previous versions.
    </p>

    <pre><code>git add .
git commit -m "Add user authentication"
git push</code></pre>


    <h3>25. Keep Functions and Classes Documented</h3>

    <p>
      Important functions and classes should have clear documentation
      describing their purpose, inputs, outputs, and important behavior.
    </p>

    <pre><code>class Calculator:
    """
    Provides basic mathematical operations.
    """

    def add(self, a, b):
        """Return the sum of two numbers."""
        return a + b</code></pre>


    <h3>26. Follow PEP 8</h3>

    <p>
      <strong>PEP 8</strong> is the main style guide for Python code.
      It provides recommendations for formatting, naming, indentation,
      imports, whitespace, and code organization.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Practice</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Indentation</td>
          <td>Use consistent 4-space indentation.</td>
        </tr>

        <tr>
          <td>Variable Names</td>
          <td>Use snake_case.</td>
        </tr>

        <tr>
          <td>Class Names</td>
          <td>Use PascalCase.</td>
        </tr>

        <tr>
          <td>Constants</td>
          <td>Use UPPER_CASE.</td>
        </tr>

        <tr>
          <td>Imports</td>
          <td>Keep imports organized.</td>
        </tr>
      </tbody>
    </table>


    <h3>27. Code Formatting Tools</h3>

    <p>
      Code formatting tools can automatically format Python source code
      according to consistent style rules.
    </p>

    <pre><code>pip install black

black main.py</code></pre>


    <h3>28. Static Code Checking</h3>

    <p>
      Linters and static analysis tools inspect source code without
      executing it. They can detect style problems, suspicious code,
      and potential errors.
    </p>

    <pre><code>pip install ruff

ruff check .</code></pre>


    <h3>29. Code Review</h3>

    <p>
      <strong>Code Review</strong> is the process of examining code
      changes before they are merged into a project.
    </p>

    <ul>
      <li>Check correctness.</li>
      <li>Check readability.</li>
      <li>Check security issues.</li>
      <li>Check test coverage.</li>
      <li>Check unnecessary complexity.</li>
    </ul>


    <h3>30. Common Bad Practices to Avoid</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Bad Practice</th>
          <th>Better Approach</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Meaningless variable names</td>
          <td>Use descriptive names.</td>
        </tr>

        <tr>
          <td>Repeated code</td>
          <td>Create reusable functions.</td>
        </tr>

        <tr>
          <td>Hard-coded secrets</td>
          <td>Use environment variables or a secret manager.</td>
        </tr>

        <tr>
          <td>Huge functions</td>
          <td>Split them into smaller functions.</td>
        </tr>

        <tr>
          <td>Ignoring errors</td>
          <td>Handle expected exceptions properly.</td>
        </tr>

        <tr>
          <td>No tests</td>
          <td>Create automated tests.</td>
        </tr>

        <tr>
          <td>No documentation</td>
          <td>Use comments and docstrings where useful.</td>
        </tr>

        <tr>
          <td>No version control</td>
          <td>Use Git.</td>
        </tr>
      </tbody>
    </table>


    <h3>31. Clean Code Example</h3>

    <pre><code>MAX_MARKS = 100


def calculate_percentage(marks):
    """
    Calculate percentage from obtained marks.
    """

    if marks < 0:
        raise ValueError(
            "Marks cannot be negative"
        )

    return (
        marks / MAX_MARKS
    ) * 100


marks = 85

percentage = calculate_percentage(marks)

print(
    f"Percentage: {percentage}%"
)</code></pre>


    <h3>32. Best Practices Checklist</h3>

    <div class="best-practice-checklist">

      <div>✅ Meaningful names</div>
      <div>✅ Proper indentation</div>
      <div>✅ Small functions</div>
      <div>✅ Avoid repeated code</div>
      <div>✅ Useful comments</div>
      <div>✅ Docstrings</div>
      <div>✅ Error handling</div>
      <div>✅ Input validation</div>
      <div>✅ Secure configuration</div>
      <div>✅ Automated testing</div>
      <div>✅ Logging</div>
      <div>✅ Git version control</div>
      <div>✅ Code formatting</div>
      <div>✅ Code review</div>

    </div>


    <h3>33. Important Coding Best Practices</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Practice</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Readable Code</td>
          <td>Makes code easy to understand.</td>
        </tr>

        <tr>
          <td>DRY</td>
          <td>Avoids unnecessary repetition.</td>
        </tr>

        <tr>
          <td>PEP 8</td>
          <td>Provides Python style guidelines.</td>
        </tr>

        <tr>
          <td>Testing</td>
          <td>Checks whether code behaves correctly.</td>
        </tr>

        <tr>
          <td>Logging</td>
          <td>Records application activity.</td>
        </tr>

        <tr>
          <td>Documentation</td>
          <td>Explains how code works and should be used.</td>
        </tr>

        <tr>
          <td>Version Control</td>
          <td>Tracks changes to source code.</td>
        </tr>

        <tr>
          <td>Security</td>
          <td>Protects applications and sensitive information.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Rewrite poorly named variables using meaningful names.',
    'Create small functions instead of one large function.',
    'Find and remove repeated code from a Python program.',
    'Add useful comments and docstrings to a project.',
    'Add proper exception handling to a program.',
    'Create unit tests for important functions.',
    'Configure logging in a Python application.',
    'Create a virtual environment for a project.',
    'Create a requirements.txt file.',
    'Use Git to track project changes.',
    'Format a Python file using Black.',
    'Check Python code using Ruff.',
    'Review a Python project and create a coding best-practices checklist.'
  ],

  code: `import logging

MAX_MARKS = 100


def calculate_percentage(marks):
    """
    Calculate percentage from obtained marks.
    """

    if not isinstance(marks, (int, float)):
        raise TypeError(
            "Marks must be a number"
        )

    if marks < 0 or marks > MAX_MARKS:
        raise ValueError(
            "Marks must be between 0 and 100"
        )

    return (
        marks / MAX_MARKS
    ) * 100


logging.basicConfig(
    level=logging.INFO
)

marks = 85

try:

    percentage = calculate_percentage(
        marks
    )

    logging.info(
        "Percentage calculated successfully"
    )

    print(
        f"Percentage: {percentage}%"
    )

except (TypeError, ValueError) as error:

    logging.error(
        "Calculation failed: %s",
        error
    )`
},
  {
  key: 'mini-projects',
  title: 'Mini Projects',
  description: 'Mini projects are small practical applications that help learners apply Python concepts such as variables, conditions, loops, functions, data structures, file handling, modules, databases, APIs, and object-oriented programming.',

  theory: [
    `
    <h3>1. What are Mini Projects?</h3>

    <p>
      <strong>Mini Projects</strong> are small applications created to
      practice programming concepts in a practical way. They help
      students move from learning individual topics to building
      complete working programs.
    </p>

    <div class="mini-project-flow">

      <div class="mini-project-box">
        📚
        <strong>Learn Concepts</strong>
        <span>Python Basics</span>
      </div>

      <div class="mini-project-arrow">→</div>

      <div class="mini-project-box">
        💡
        <strong>Choose Idea</strong>
        <span>Project Planning</span>
      </div>

      <div class="mini-project-arrow">→</div>

      <div class="mini-project-box">
        💻
        <strong>Build Project</strong>
        <span>Write Code</span>
      </div>

      <div class="mini-project-arrow">→</div>

      <div class="mini-project-box">
        🧪
        <strong>Test</strong>
        <span>Find & Fix Bugs</span>
      </div>

      <div class="mini-project-arrow">→</div>

      <div class="mini-project-box">
        🚀
        <strong>Complete</strong>
        <span>Working Project</span>
      </div>

    </div>


    <h3>2. Why Build Mini Projects?</h3>

    <ul>
      <li>Practice Python concepts in real programs.</li>
      <li>Improve problem-solving skills.</li>
      <li>Learn how multiple concepts work together.</li>
      <li>Build confidence in programming.</li>
      <li>Learn debugging and testing.</li>
      <li>Create projects for a portfolio.</li>
      <li>Understand real-world programming workflows.</li>
    </ul>


    <h3>3. Project Development Process</h3>

    <div class="project-process">

      <div class="project-step">
        <span>1</span>
        <strong>Idea</strong>
      </div>

      <div class="project-step-arrow">→</div>

      <div class="project-step">
        <span>2</span>
        <strong>Requirements</strong>
      </div>

      <div class="project-step-arrow">→</div>

      <div class="project-step">
        <span>3</span>
        <strong>Design</strong>
      </div>

      <div class="project-step-arrow">→</div>

      <div class="project-step">
        <span>4</span>
        <strong>Coding</strong>
      </div>

      <div class="project-step-arrow">→</div>

      <div class="project-step">
        <span>5</span>
        <strong>Testing</strong>
      </div>

      <div class="project-step-arrow">→</div>

      <div class="project-step">
        <span>6</span>
        <strong>Deployment</strong>
      </div>

    </div>


    <h3>4. Beginner Mini Projects</h3>

    <p>
      Beginner projects focus on basic Python concepts such as
      variables, input/output, conditions, loops, and functions.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Concepts Used</th>
          <th>Difficulty</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Calculator</td>
          <td>Input, Operators, Conditions</td>
          <td>⭐ Beginner</td>
        </tr>

        <tr>
          <td>Number Guessing Game</td>
          <td>Loops, Conditions, Random</td>
          <td>⭐ Beginner</td>
        </tr>

        <tr>
          <td>Even/Odd Checker</td>
          <td>Operators, Conditions</td>
          <td>⭐ Beginner</td>
        </tr>

        <tr>
          <td>Temperature Converter</td>
          <td>Variables, Functions</td>
          <td>⭐ Beginner</td>
        </tr>

        <tr>
          <td>Simple Quiz</td>
          <td>Lists, Conditions, Loops</td>
          <td>⭐ Beginner</td>
        </tr>
      </tbody>
    </table>


    <h3>5. Intermediate Mini Projects</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Concepts Used</th>
          <th>Difficulty</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>To-Do List</td>
          <td>Lists, Functions, File Handling</td>
          <td>⭐⭐ Intermediate</td>
        </tr>

        <tr>
          <td>Contact Book</td>
          <td>Dictionaries, Functions, File Handling</td>
          <td>⭐⭐ Intermediate</td>
        </tr>

        <tr>
          <td>Expense Tracker</td>
          <td>Lists, Dictionaries, CSV</td>
          <td>⭐⭐ Intermediate</td>
        </tr>

        <tr>
          <td>Student Management System</td>
          <td>Classes, Files, Database</td>
          <td>⭐⭐ Intermediate</td>
        </tr>

        <tr>
          <td>Password Generator</td>
          <td>Random, Strings, Functions</td>
          <td>⭐⭐ Intermediate</td>
        </tr>
      </tbody>
    </table>


    <h3>6. Advanced Mini Projects</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Concepts Used</th>
          <th>Difficulty</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Weather App</td>
          <td>API, JSON, GUI/Web</td>
          <td>⭐⭐⭐ Advanced</td>
        </tr>

        <tr>
          <td>Web Scraper</td>
          <td>Requests, HTML Parsing, Data Processing</td>
          <td>⭐⭐⭐ Advanced</td>
        </tr>

        <tr>
          <td>Chat Application</td>
          <td>Networking, Sockets, Threads</td>
          <td>⭐⭐⭐ Advanced</td>
        </tr>

        <tr>
          <td>Library Management System</td>
          <td>OOP, SQLite, File Handling</td>
          <td>⭐⭐⭐ Advanced</td>
        </tr>

        <tr>
          <td>Task Management API</td>
          <td>Flask, API, Database, Authentication</td>
          <td>⭐⭐⭐ Advanced</td>
        </tr>
      </tbody>
    </table>


    <h3>7. Calculator Project</h3>

    <p>
      A calculator is one of the simplest Python projects for
      practicing input, operators, functions, and conditional
      statements.
    </p>

    <pre><code>def calculator(a, b, operator):

    if operator == "+":
        return a + b

    elif operator == "-":
        return a - b

    elif operator == "*":
        return a * b

    elif operator == "/":

        if b == 0:
            return "Cannot divide by zero"

        return a / b

    else:
        return "Invalid operator"


a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
operator = input("Enter operator (+, -, *, /): ")

result = calculator(a, b, operator)

print("Result:", result)</code></pre>


    <h3>8. Number Guessing Game</h3>

    <p>
      This project uses the <strong>random</strong> module, loops,
      conditions, and user input.
    </p>

    <pre><code>import random

number = random.randint(1, 100)

while True:

    guess = int(
        input("Guess the number: ")
    )

    if guess == number:
        print("Correct!")
        break

    elif guess < number:
        print("Too low")

    else:
        print("Too high")</code></pre>


    <h3>9. To-Do List</h3>

    <p>
      A To-Do List project helps practice lists, functions, loops, and
      file handling.
    </p>

    <pre><code>tasks = []


def add_task(task):
    tasks.append(task)


def show_tasks():

    if not tasks:
        print("No tasks available")
        return

    for number, task in enumerate(
        tasks,
        start=1
    ):
        print(number, task)


add_task("Learn Python")
add_task("Build a project")

show_tasks()</code></pre>


    <h3>10. Expense Tracker</h3>

    <p>
      An expense tracker can store expenses and calculate the total
      amount spent.
    </p>

    <pre><code>expenses = []


def add_expense(name, amount):

    expenses.append({
        "name": name,
        "amount": amount
    })


def total_expense():

    return sum(
        expense["amount"]
        for expense in expenses
    )


add_expense("Food", 250)
add_expense("Travel", 100)

print(
    "Total:",
    total_expense()
)</code></pre>


    <h3>11. Contact Book</h3>

    <p>
      A contact book can store names and phone numbers using a
      dictionary.
    </p>

    <pre><code>contacts = {}


def add_contact(name, phone):

    contacts[name] = phone


def find_contact(name):

    return contacts.get(
        name,
        "Contact not found"
    )


add_contact(
    "Rahul",
    "9876543210"
)

print(
    find_contact("Rahul")
)</code></pre>


    <h3>12. Student Management System</h3>

    <p>
      This project can combine classes, lists, dictionaries, file
      handling, and databases to manage student records.
    </p>

    <pre><code>class Student:

    def __init__(
        self,
        name,
        roll_number,
        marks
    ):
        self.name = name
        self.roll_number = roll_number
        self.marks = marks

    def display(self):

        print(
            self.roll_number,
            self.name,
            self.marks
        )


student = Student(
    "Aman",
    101,
    85
)

student.display()</code></pre>


    <h3>13. Weather App</h3>

    <p>
      A weather application can use a web API to retrieve current
      weather information and display it to the user.
    </p>

    <div class="project-architecture">

      <div class="architecture-project-box">
        👤
        <strong>User</strong>
      </div>

      <div class="architecture-project-arrow">→</div>

      <div class="architecture-project-box">
        💻
        <strong>Python App</strong>
      </div>

      <div class="architecture-project-arrow">→</div>

      <div class="architecture-project-box">
        🌐
        <strong>Weather API</strong>
      </div>

      <div class="architecture-project-arrow">→</div>

      <div class="architecture-project-box">
        📊
        <strong>Weather Data</strong>
      </div>

    </div>


    <h3>14. Project Folder Structure</h3>

    <p>
      A project should be organized into separate files and folders
      when it becomes larger.
    </p>

    <pre><code>my_project/
│
├── main.py
├── requirements.txt
├── README.md
│
├── src/
│   ├── __init__.py
│   ├── functions.py
│   └── database.py
│
├── tests/
│   ├── test_functions.py
│   └── test_database.py
│
└── data/
    └── records.json</code></pre>


    <h3>15. README File</h3>

    <p>
      A <strong>README.md</strong> file explains what the project does,
      how to install it, how to run it, and how to use it.
    </p>

    <pre><code># To-Do List

A simple Python To-Do List application.

## Installation

pip install -r requirements.txt

## Run

python main.py

## Features

- Add tasks
- View tasks
- Remove tasks
- Save tasks</code></pre>


    <h3>16. Testing a Project</h3>

    <p>
      Projects should be tested before they are considered complete.
      Test normal inputs, invalid inputs, and edge cases.
    </p>

    <pre><code>def add(a, b):
    return a + b


def test_add():

    assert add(2, 3) == 5
    assert add(-2, 2) == 0</code></pre>


    <h3>17. Debugging a Project</h3>

    <p>
      Debugging is the process of finding and fixing errors in a
      program. Use error messages, logging, breakpoints, and small
      test cases to identify problems.
    </p>

    <pre><code>try:

    result = 10 / 0

except ZeroDivisionError as error:

    print(
        "Error:",
        error
    )</code></pre>


    <h3>18. Mini Project Development Checklist</h3>

    <div class="project-checklist">

      <div>💡 Choose an idea</div>
      <div>📝 Define requirements</div>
      <div>📁 Create project structure</div>
      <div>💻 Write code</div>
      <div>🧪 Test features</div>
      <div>🐞 Fix bugs</div>
      <div>📖 Write documentation</div>
      <div>🔀 Use Git</div>
      <div>🚀 Complete project</div>

    </div>


    <h3>19. Portfolio Projects</h3>

    <p>
      Completed mini projects can be added to a GitHub repository or
      portfolio to demonstrate practical programming skills.
    </p>

    <ul>
      <li>Keep the source code organized.</li>
      <li>Add a README file.</li>
      <li>Explain project features.</li>
      <li>Include installation instructions.</li>
      <li>Add screenshots when useful.</li>
      <li>Document important technologies used.</li>
      <li>Keep sensitive information out of the repository.</li>
    </ul>


    <h3>20. Mini Project Roadmap</h3>

    <div class="project-roadmap">

      <div class="roadmap-project beginner">
        <span>LEVEL 1</span>
        <strong>Beginner</strong>
        <p>Calculator</p>
        <p>Quiz Game</p>
        <p>Number Guessing</p>
      </div>

      <div class="roadmap-project intermediate">
        <span>LEVEL 2</span>
        <strong>Intermediate</strong>
        <p>To-Do List</p>
        <p>Expense Tracker</p>
        <p>Contact Book</p>
      </div>

      <div class="roadmap-project advanced">
        <span>LEVEL 3</span>
        <strong>Advanced</strong>
        <p>Weather App</p>
        <p>Web Scraper</p>
        <p>Library System</p>
      </div>

    </div>


    <h3>21. Important Project Concepts</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Planning</td>
          <td>Defines what the project should do.</td>
        </tr>

        <tr>
          <td>Functions</td>
          <td>Organize reusable logic.</td>
        </tr>

        <tr>
          <td>Modules</td>
          <td>Separate code into logical files.</td>
        </tr>

        <tr>
          <td>Database</td>
          <td>Stores structured application data.</td>
        </tr>

        <tr>
          <td>Testing</td>
          <td>Checks whether features work correctly.</td>
        </tr>

        <tr>
          <td>Debugging</td>
          <td>Finds and fixes errors.</td>
        </tr>

        <tr>
          <td>Documentation</td>
          <td>Explains the project and its usage.</td>
        </tr>

        <tr>
          <td>Git</td>
          <td>Tracks project changes.</td>
        </tr>
      </tbody>
    </table>
    `
  ],

  practice: [
    'Build a simple calculator project.',
    'Create a number guessing game.',
    'Build a quiz application.',
    'Create a To-Do List using Python.',
    'Build a Contact Book using dictionaries.',
    'Create an Expense Tracker using CSV or JSON.',
    'Build a Student Management System.',
    'Create a Password Generator.',
    'Build a Weather App using an API.',
    'Create a simple web scraper.',
    'Build a Library Management System using SQLite.',
    'Create a Python project with tests and documentation.',
    'Upload a completed project to GitHub with a README file.'
  ],

  code: `# Mini Project: To-Do List

tasks = []


def add_task(task):
    tasks.append(task)
    print("Task added successfully.")


def show_tasks():

    if not tasks:
        print("No tasks available.")
        return

    print("\\nTasks:")

    for number, task in enumerate(
        tasks,
        start=1
    ):
        print(
            f"{number}. {task}"
        )


def remove_task(number):

    if 1 <= number <= len(tasks):

        removed = tasks.pop(
            number - 1
        )

        print(
            f"Removed: {removed}"
        )

    else:
        print("Invalid task number.")


while True:

    print("\\n--- To-Do List ---")
    print("1. Add Task")
    print("2. Show Tasks")
    print("3. Remove Task")
    print("4. Exit")

    choice = input(
        "Enter your choice: "
    )

    if choice == "1":

        task = input(
            "Enter task: "
        )

        if task.strip():
            add_task(task)
        else:
            print("Task cannot be empty.")

    elif choice == "2":

        show_tasks()

    elif choice == "3":

        show_tasks()

        try:

            number = int(
                input(
                    "Enter task number: "
                )
            )

            remove_task(number)

        except ValueError:

            print(
                "Please enter a valid number."
            )

    elif choice == "4":

        print("Goodbye!")
        break

    else:

        print(
            "Invalid choice."
        )`
},
  {
  key: 'final-projects',
  title: 'Final Projects',
  description: 'Final projects are complete Python applications that combine multiple programming concepts such as functions, OOP, databases, APIs, authentication, testing, file handling, and deployment into a single real-world project.',

  theory: [
    `
    <h3>1. What are Final Projects?</h3>

    <p>
      A <strong>Final Project</strong> is a complete application developed
      by combining multiple Python concepts learned throughout the course.
      Unlike small practice programs, a final project solves a practical
      problem and usually contains multiple features and components.
    </p>

    <div class="final-project-flow">

      <div class="final-project-box">
        💡
        <strong>Problem</strong>
        <span>Identify a real need</span>
      </div>

      <div class="final-project-arrow">→</div>

      <div class="final-project-box">
        📝
        <strong>Planning</strong>
        <span>Define features</span>
      </div>

      <div class="final-project-arrow">→</div>

      <div class="final-project-box">
        💻
        <strong>Development</strong>
        <span>Build application</span>
      </div>

      <div class="final-project-arrow">→</div>

      <div class="final-project-box">
        🧪
        <strong>Testing</strong>
        <span>Find and fix bugs</span>
      </div>

      <div class="final-project-arrow">→</div>

      <div class="final-project-box">
        🚀
        <strong>Deployment</strong>
        <span>Release project</span>
      </div>

    </div>


    <h3>2. Difference Between Mini and Final Projects</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Mini Project</th>
          <th>Final Project</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Small application</td>
          <td>Complete application</td>
        </tr>

        <tr>
          <td>Few features</td>
          <td>Multiple features</td>
        </tr>

        <tr>
          <td>Usually one or few files</td>
          <td>Multiple modules and folders</td>
        </tr>

        <tr>
          <td>Basic concepts</td>
          <td>Multiple advanced concepts</td>
        </tr>

        <tr>
          <td>Limited testing</td>
          <td>Proper testing and validation</td>
        </tr>

        <tr>
          <td>Practice focused</td>
          <td>Real-world problem focused</td>
        </tr>
      </tbody>
    </table>


    <h3>3. Important Components of a Final Project</h3>

    <div class="final-components">

      <div>🖥️ User Interface</div>
      <div>⚙️ Backend Logic</div>
      <div>🗄️ Database</div>
      <div>🔐 Authentication</div>
      <div>🌐 APIs</div>
      <div>🧪 Testing</div>
      <div>📝 Documentation</div>
      <div>🚀 Deployment</div>

    </div>


    <h3>4. Final Project Development Life Cycle</h3>

    <div class="final-lifecycle">

      <div class="lifecycle-item">
        <span>1</span>
        <strong>Requirement Analysis</strong>
        <p>Understand the problem.</p>
      </div>

      <div class="lifecycle-item">
        <span>2</span>
        <strong>System Design</strong>
        <p>Plan the application.</p>
      </div>

      <div class="lifecycle-item">
        <span>3</span>
        <strong>Database Design</strong>
        <p>Plan data storage.</p>
      </div>

      <div class="lifecycle-item">
        <span>4</span>
        <strong>Implementation</strong>
        <p>Write the code.</p>
      </div>

      <div class="lifecycle-item">
        <span>5</span>
        <strong>Testing</strong>
        <p>Verify functionality.</p>
      </div>

      <div class="lifecycle-item">
        <span>6</span>
        <strong>Deployment</strong>
        <p>Make the project available.</p>
      </div>

    </div>


    <h3>5. Final Project Ideas</h3>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Main Technologies</th>
          <th>Level</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Student Management System</td>
          <td>Python, SQLite, OOP</td>
          <td>⭐⭐⭐</td>
        </tr>

        <tr>
          <td>Library Management System</td>
          <td>Python, SQLite, OOP</td>
          <td>⭐⭐⭐</td>
        </tr>

        <tr>
          <td>Expense Management System</td>
          <td>Python, SQLite, Data Analysis</td>
          <td>⭐⭐⭐</td>
        </tr>

        <tr>
          <td>Online Quiz System</td>
          <td>Python, Flask, Database</td>
          <td>⭐⭐⭐</td>
        </tr>

        <tr>
          <td>Blog Application</td>
          <td>Python, Flask, SQLite</td>
          <td>⭐⭐⭐⭐</td>
        </tr>

        <tr>
          <td>Task Management System</td>
          <td>Python, Flask, API, Database</td>
          <td>⭐⭐⭐⭐</td>
        </tr>

        <tr>
          <td>Weather Dashboard</td>
          <td>Python, API, JSON, Data Visualization</td>
          <td>⭐⭐⭐⭐</td>
        </tr>

        <tr>
          <td>E-Commerce Backend</td>
          <td>Python, Flask, MySQL, API</td>
          <td>⭐⭐⭐⭐⭐</td>
        </tr>
      </tbody>
    </table>


    <h3>6. Student Management System</h3>

    <p>
      A Student Management System stores and manages student information
      such as name, roll number, course, marks, and attendance.
    </p>

    <ul>
      <li>Add students.</li>
      <li>Update student information.</li>
      <li>Delete student records.</li>
      <li>Search students.</li>
      <li>Display student records.</li>
      <li>Store data in a database.</li>
    </ul>

    <div class="system-architecture">

      <div class="architecture-box">
        👤
        <strong>User</strong>
      </div>

      <div class="architecture-arrow">→</div>

      <div class="architecture-box">
        🖥️
        <strong>Application</strong>
      </div>

      <div class="architecture-arrow">→</div>

      <div class="architecture-box">
        ⚙️
        <strong>Python Logic</strong>
      </div>

      <div class="architecture-arrow">→</div>

      <div class="architecture-box">
        🗄️
        <strong>Database</strong>
      </div>

    </div>


    <h3>7. Library Management System</h3>

    <p>
      A Library Management System manages books, students, borrowing,
      returning, and library records.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Add Book</td>
          <td>Add new books to the library.</td>
        </tr>

        <tr>
          <td>Search Book</td>
          <td>Find books by title or author.</td>
        </tr>

        <tr>
          <td>Issue Book</td>
          <td>Record a book issued to a user.</td>
        </tr>

        <tr>
          <td>Return Book</td>
          <td>Record returned books.</td>
        </tr>

        <tr>
          <td>Database</td>
          <td>Store books and user information.</td>
        </tr>
      </tbody>
    </table>


    <h3>8. Online Quiz System</h3>

    <p>
      An Online Quiz System allows users to log in, answer questions,
      submit quizzes, and view their scores.
    </p>

    <div class="quiz-flow">

      <div>🔐 Login</div>
      <span>→</span>
      <div>📚 Select Quiz</div>
      <span>→</span>
      <div>❓ Answer Questions</div>
      <span>→</span>
      <div>📤 Submit</div>
      <span>→</span>
      <div>🏆 Result</div>

    </div>


    <h3>9. Blog Application</h3>

    <p>
      A blog application allows users to create, edit, delete, and
      read posts. A backend framework such as Flask can be used to
      build the application.
    </p>

    <ul>
      <li>User registration and login.</li>
      <li>Create blog posts.</li>
      <li>Edit posts.</li>
      <li>Delete posts.</li>
      <li>Display posts.</li>
      <li>Store posts in a database.</li>
    </ul>


    <h3>10. Expense Management System</h3>

    <p>
      An Expense Management System records daily expenses and provides
      useful summaries of spending.
    </p>

    <pre><code>expenses = [
    {
        "category": "Food",
        "amount": 250
    },
    {
        "category": "Travel",
        "amount": 150
    },
    {
        "category": "Books",
        "amount": 500
    }
]


total = sum(
    expense["amount"]
    for expense in expenses
)

print("Total Expense:", total)</code></pre>


    <h3>11. Weather Dashboard</h3>

    <p>
      A Weather Dashboard retrieves weather information from an API
      and displays useful information such as temperature, humidity,
      wind speed, and weather conditions.
    </p>

    <div class="api-architecture">

      <div class="api-box">
        👤
        <strong>User</strong>
      </div>

      <div class="api-arrow">→</div>

      <div class="api-box">
        🖥️
        <strong>Python App</strong>
      </div>

      <div class="api-arrow">→</div>

      <div class="api-box">
        🌐
        <strong>Weather API</strong>
      </div>

      <div class="api-arrow">→</div>

      <div class="api-box">
        📊
        <strong>JSON Data</strong>
      </div>

    </div>


    <h3>12. E-Commerce Backend</h3>

    <p>
      An E-Commerce Backend is an advanced project that can manage
      users, products, orders, payments, and authentication.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Module</th>
          <th>Function</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>User Management</td>
          <td>Registration and authentication.</td>
        </tr>

        <tr>
          <td>Products</td>
          <td>Add, update, delete, and view products.</td>
        </tr>

        <tr>
          <td>Cart</td>
          <td>Manage selected products.</td>
        </tr>

        <tr>
          <td>Orders</td>
          <td>Create and manage orders.</td>
        </tr>

        <tr>
          <td>Database</td>
          <td>Store application data.</td>
        </tr>

        <tr>
          <td>API</td>
          <td>Provide backend services.</td>
        </tr>
      </tbody>
    </table>


    <h3>13. Recommended Project Structure</h3>

    <pre><code>final_project/
│
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── config/
│   └── settings.py
│
├── models/
│   ├── user.py
│   └── product.py
│
├── routes/
│   ├── auth.py
│   └── products.py
│
├── services/
│   └── database.py
│
├── tests/
│   ├── test_auth.py
│   └── test_products.py
│
├── templates/
│
├── static/
│
└── data/</code></pre>


    <h3>14. Database Design</h3>

    <p>
      Applications that store large amounts of structured information
      should use a database. Common choices include SQLite and MySQL.
    </p>

    <div class="database-flow">

      <div class="database-box">
        👤
        <strong>Users</strong>
      </div>

      <div class="database-arrow">↔</div>

      <div class="database-box">
        🗄️
        <strong>Database</strong>
      </div>

      <div class="database-arrow">↔</div>

      <div class="database-box">
        📦
        <strong>Application</strong>
      </div>

    </div>


    <h3>15. Authentication</h3>

    <p>
      Authentication verifies the identity of a user. A final project
      may include registration, login, logout, password protection,
      and access control.
    </p>

    <pre><code>def login(username, password):

    if username == "admin" and password == "1234":
        return True

    return False


if login("admin", "1234"):
    print("Login successful")
else:
    print("Invalid credentials")</code></pre>

    <p>
      This example is only for learning. Real applications should
      never store plain-text passwords and should use secure password
      hashing and proper authentication mechanisms.
    </p>


    <h3>16. API Integration</h3>

    <p>
      APIs allow a Python application to communicate with external
      services and exchange data.
    </p>

    <pre><code>import requests

response = requests.get(
    "https://example.com/api/data",
    timeout=10
)

if response.ok:
    data = response.json()
    print(data)</code></pre>


    <h3>17. Testing Final Projects</h3>

    <p>
      A final project should be tested systematically before release.
    </p>

    <table class="data-type-table">
      <thead>
        <tr>
          <th>Testing Type</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Unit Testing</td>
          <td>Tests individual functions or components.</td>
        </tr>

        <tr>
          <td>Integration Testing</td>
          <td>Tests how different components work together.</td>
        </tr>

        <tr>
          <td>Functional Testing</td>
          <td>Checks whether features work as expected.</td>
        </tr>

        <tr>
          <td>Security Testing</td>
          <td>Checks common security problems.</td>
        </tr>

        <tr>
          <td>User Testing</td>
          <td>Checks usability from a user's perspective.</td>
        </tr>
      </tbody>
    </table>


    <h3>18. Error Handling</h3>

    <p>
      Final applications should handle expected errors gracefully
      instead of crashing unexpectedly.
    </p>

    <pre><code>try:

    age = int(
        input("Enter your age: ")
    )

except ValueError:

    print(
        "Please enter a valid number."
    )</code></pre>


    <h3>19. Security Best Practices</h3>

    <ul>
      <li>Never hard-code passwords or API keys.</li>
      <li>Validate user input.</li>
      <li>Use secure password hashing.</li>
      <li>Protect sensitive configuration.</li>
      <li>Use parameterized database queries.</li>
      <li>Keep dependencies updated.</li>
      <li>Use HTTPS when communicating with remote services.</li>
      <li>Do not expose sensitive information in error messages.</li>
    </ul>


    <h3>20. Documentation</h3>

    <p>
      A final project should contain documentation explaining its
      purpose, features, installation, configuration, usage, and
      technologies.
    </p>

    <pre><code># Student Management System

## Description

A Python application for managing student records.

## Features

- Add student
- Update student
- Delete student
- Search student
- View student records

## Technologies

- Python
- SQLite

## Run

python app.py</code></pre>


    <h3>21. Version Control</h3>

    <p>
      Git can be used to track changes and maintain the project source
      code. A final project should normally include a clear commit
      history and a useful README.
    </p>

    <pre><code>git init

git add .

git commit -m "Initial project setup"

git branch -M main

git remote add origin YOUR_REPOSITORY_URL

git push -u origin main</code></pre>


    <h3>22. Final Project Checklist</h3>

    <div class="final-project-checklist">

      <div>✅ Problem clearly defined</div>
      <div>✅ Requirements documented</div>
      <div>✅ Project structure organized</div>
      <div>✅ Database designed</div>
      <div>✅ Core features implemented</div>
      <div>✅ Input validation added</div>
      <div>✅ Error handling implemented</div>
      <div>✅ Authentication secured</div>
      <div>✅ Tests written</div>
      <div>✅ Documentation created</div>
      <div>✅ Git repository maintained</div>
      <div>✅ Project tested before release</div>

    </div>


    <h3>23. Final Project Roadmap</h3>

    <div class="final-roadmap">

      <div class="roadmap-stage">
        <span>01</span>
        <strong>Idea</strong>
        <p>Choose a real-world problem.</p>
      </div>

      <div class="roadmap-stage">
        <span>02</span>
        <strong>Planning</strong>
        <p>Define features and requirements.</p>
      </div>

      <div class="roadmap-stage">
        <span>03</span>
        <strong>Development</strong>
        <p>Build the application.</p>
      </div>

      <div class="roadmap-stage">
        <span>04</span>
        <strong>Testing</strong>
        <p>Find and fix problems.</p>
      </div>

      <div class="roadmap-stage">
        <span>05</span>
        <strong>Documentation</strong>
        <p>Explain the project.</p>
      </div>

      <div class="roadmap-stage">
        <span>06</span>
        <strong>Deployment</strong>
        <p>Release the application.</p>
      </div>

    </div>
    `
  ],

  practice: [
    'Build a complete Student Management System using Python and SQLite.',
    'Build a Library Management System with book issue and return functionality.',
    'Create an Online Quiz System with user login and score tracking.',
    'Build a Blog Application using Python and Flask.',
    'Create an Expense Management System with data visualization.',
    'Build a Weather Dashboard using a public API.',
    'Create a Task Management API with a database.',
    'Build an E-Commerce backend with users, products, and orders.',
    'Add authentication and proper input validation to a final project.',
    'Write automated tests for the main features.',
    'Create a complete README.md file.',
    'Upload the project to GitHub and maintain it using Git.'
  ],

  code: `# Final Project Example
# Student Management System

import sqlite3


DATABASE = "students.db"


def create_database():

    connection = sqlite3.connect(
        DATABASE
    )

    cursor = connection.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            roll_number TEXT UNIQUE NOT NULL,
            marks REAL NOT NULL
        )
    """)

    connection.commit()
    connection.close()


def add_student(
    name,
    roll_number,
    marks
):

    connection = sqlite3.connect(
        DATABASE
    )

    cursor = connection.cursor()

    try:

        cursor.execute(
            """
            INSERT INTO students
            (name, roll_number, marks)
            VALUES (?, ?, ?)
            """,
            (name, roll_number, marks)
        )

        connection.commit()

        print(
            "Student added successfully."
        )

    except sqlite3.IntegrityError:

        print(
            "Roll number already exists."
        )

    finally:

        connection.close()


def show_students():

    connection = sqlite3.connect(
        DATABASE
    )

    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM students"
    )

    students = cursor.fetchall()

    connection.close()

    if not students:

        print("No students found.")
        return

    for student in students:

        print(
            f"ID: {student[0]} | "
            f"Name: {student[1]} | "
            f"Roll: {student[2]} | "
            f"Marks: {student[3]}"
        )


create_database()

add_student(
    "Aman",
    "CS101",
    85
)

show_students()`
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
  topicTheory.innerHTML = formatList(topic.theory);
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
    showOutput('Please enter Python code in the editor before running.');
    return;
  }

  showOutput('Executing code... Please wait.');
  document.querySelector('.output-panel')?.classList.add('running');

  try {
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: 'python', source, stdin: '' })
    });

    if (!response.ok) {
      throw new Error(`Execution service returned status ${response.status}`);
    }

    const data = await response.json();
    const stderr = data?.run?.stderr?.trim();
    const stdout = data?.run?.stdout?.trim();
    const output = [stderr, stdout].filter(Boolean).join('\n');
    showOutput(output || 'Program finished with no output.');
  } catch (error) {
    console.error('Run error:', error);
    showOutput('Unable to run code. Check your internet connection and try again.');
  } finally {
    document.querySelector('.output-panel')?.classList.remove('running');
  }
};

const getCurrentTopicIndex = () => topics.findIndex((topic) => topic.key === activeTopicKey);

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
  const savedTheme = localStorage.getItem('cTheme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
  setThemeIcon();
};

const toggleTheme = () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('cTheme', isLight ? 'light' : 'dark');
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