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
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

let topicButtons = [];
let activeTopicKey = 'introduction';

const cppTopics = {
  // 1. C++ Introduction & Setup
  'introduction': {
    title: '1. Introduction to C++',
    description: 'Learn what C++ is and why it\'s popular.',
    theory: '<p>C++ is a powerful, general-purpose programming language that extends C with object-oriented features.</p><p><strong>Key Features:</strong></p><ul><li>Fast and efficient compilation</li><li>Object-oriented programming (OOP)</li><li>Rich standard library (STL)</li><li>Low-level memory manipulation</li><li>Used in system software, games, and competitive programming</li></ul><p><strong>History:</strong> Created by Bjarne Stroustrup in 1983</p>',
    practice: '<p>Understand C++ basics and its applications in real-world projects.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Welcome to C++ Programming!" << endl;\n    cout << "Let\'s learn together!" << endl;\n    return 0;\n}'
  },

  'setup': {
    title: '2. Installation & Setup',
    description: 'Set up C++ development environment.',
    theory: '<p><strong>Installation Steps:</strong></p><ul><li><strong>Windows:</strong> Download MinGW or Visual Studio</li><li><strong>Mac:</strong> Install Xcode Command Line Tools</li><li><strong>Linux:</strong> Use apt-get install g++</li></ul><p><strong>Compilers:</strong> GCC, Clang, MSVC</p><p><strong>IDEs:</strong> VS Code, Dev-C++, Code::Blocks, CLion</p>',
    practice: '<p>Install a C++ compiler and IDE on your system.</p>',
    defaultCode: '// Your first C++ program\n#include <iostream>\n\nint main() {\n    std::cout << "Hello World!" << std::endl;\n    return 0;\n}'
  },

  'basicSyntax': {
    title: '3. Basic Syntax',
    description: 'Understand C++ program structure.',
    theory: '<p><strong>Program Structure:</strong></p><ul><li>#include - Include header files</li><li>using namespace std - Use standard namespace</li><li>main() - Entry point</li><li>cout - Output stream</li><li>cin - Input stream</li></ul><p><strong>Comments:</strong> // single line, /* */ multi-line</p>',
    practice: '<p>Write programs demonstrating syntax rules.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // This is a comment\n    cout << "Basic Syntax Example" << endl;\n    /* Multi-line\n       comment */\n    return 0;\n}'
  },

  // 2. Variables & Data Types
  'variables': {
    title: '4. Variables & Constants',
    description: 'Declare and use variables.',
    theory: '<p><strong>Variable Declaration:</strong> data_type variable_name = value;</p><p><strong>Constants:</strong> const data_type CONST_NAME = value;</p><p>Naming rules: start with letter/underscore, alphanumeric characters, case-sensitive</p>',
    practice: '<p>Create variables of different types and display them.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    const double PI = 3.14159;\n    string name = "Alice";\n    \n    cout << "Name: " << name << endl;\n    cout << "Age: " << age << endl;\n    cout << "Pi: " << PI << endl;\n    return 0;\n}'
  },

  'dataTypes': {
    title: '5. Data Types',
    description: 'Explore all C++ data types.',
    theory: '<p><strong>Primitive Types:</strong></p><ul><li>int (4 bytes) - Integers</li><li>float (4 bytes) - Decimal</li><li>double (8 bytes) - Precise decimal</li><li>char (1 byte) - Single character</li><li>bool (1 byte) - true/false</li></ul><p><strong>Modifiers:</strong> signed, unsigned, short, long</p>',
    practice: '<p>Determine sizes of different data types.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "int: " << sizeof(int) << " bytes" << endl;\n    cout << "float: " << sizeof(float) << " bytes" << endl;\n    cout << "double: " << sizeof(double) << " bytes" << endl;\n    cout << "char: " << sizeof(char) << " byte" << endl;\n    cout << "bool: " << sizeof(bool) << " byte" << endl;\n    return 0;\n}'
  },

  'typeCasting': {
    title: '6. Type Casting',
    description: 'Convert between data types.',
    theory: '<p><strong>Implicit Casting:</strong> Automatic conversion (int to double)</p><p><strong>Explicit Casting:</strong> Manual conversion (type) value</p><p><strong>C++ Style Casts:</strong> static_cast, dynamic_cast, reinterpret_cast</p>',
    practice: '<p>Perform implicit and explicit type conversions.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    double y = x;  // Implicit cast\n    \n    double a = 5.9;\n    int b = (int)a;  // Explicit cast\n    \n    cout << "x: " << x << ", y: " << y << endl;\n    cout << "a: " << a << ", b: " << b << endl;\n    return 0;\n}'
  },

  // 3. Input & Output
  'cout': {
    title: '7. Output with cout',
    description: 'Display output to console.',
    theory: '<p>cout is used for output.</p><p><strong>Syntax:</strong> cout << value << endl;</p><p>Use << operator to chain multiple outputs.</p><p>endl adds newline and flushes buffer.</p>',
    practice: '<p>Print various data types with formatted output.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 42;\n    double price = 19.99;\n    string item = "Laptop";\n    \n    cout << "Item: " << item << endl;\n    cout << "Price: $\" << price << endl;\n    cout << "Quantity: \" << num << endl;\n    return 0;\n}'
  },

  'cin': {
    title: '8. Input with cin',
    description: 'Read user input.',
    theory: '<p>cin reads input from keyboard.</p><p><strong>Syntax:</strong> cin >> variable;</p><p>Use >> operator for multiple inputs: cin >> var1 >> var2;</p><p>getline() for string with spaces</p>',
    practice: '<p>Read user input and process it.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    \n    cout << "Enter name: \";\n    cin >> name;\n    cout << \"Enter age: \";\n    cin >> age;\n    \n    cout << \"\\nName: \" << name << endl;\n    cout << \"Age: \" << age << endl;\n    return 0;\n}'
  },

  'formatting': {
    title: '9. Input/Output Formatting',
    description: 'Format input and output.',
    theory: '<p><strong>Formatting Functions:</strong></p><ul><li>setw() - Set width</li><li>setprecision() - Set decimal places</li><li>fixed - Fixed notation</li><li>left/right - Alignment</li><li>setfill() - Fill character</li></ul><p>Include <iomanip> header</p>',
    practice: '<p>Display formatted output with precision.</p>',
    defaultCode: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double pi = 3.14159;\n    \n    cout << fixed << setprecision(2);\n    cout << \"Pi: \" << pi << endl;\n    \n    cout << setw(10) << left << \"Name\";\n    cout << setw(10) << \"Score\" << endl;\n    return 0;\n}'
  },

  // 4. Operators
  'arithmetic': {
    title: '10. Arithmetic Operators',
    description: 'Perform mathematical operations.',
    theory: '<p><strong>Operators:</strong></p><ul><li>+ Addition</li><li>- Subtraction</li><li>* Multiplication</li><li>/ Division</li><li>% Modulus (remainder)</li><li>++ Increment</li><li>-- Decrement</li></ul>',
    practice: '<p>Perform various arithmetic operations.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 15, b = 4;\n    \n    cout << \"a + b = \" << a + b << endl;\n    cout << \"a - b = \" << a - b << endl;\n    cout << \"a * b = \" << a * b << endl;\n    cout << \"a / b = \" << a / b << endl;\n    cout << \"a % b = \" << a % b << endl;\n    return 0;\n}'
  },

  'relational': {
    title: '11. Relational Operators',
    description: 'Compare values.',
    theory: '<p><strong>Operators:</strong></p><ul><li>== Equal to</li><li>!= Not equal to</li><li>> Greater than</li><li>< Less than</li><li>>= Greater or equal</li><li><= Less or equal</li></ul><p>Returns true (1) or false (0)</p>',
    practice: '<p>Compare two numbers.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20;\n    \n    cout << \"x == y: \" << (x == y) << endl;\n    cout << \"x != y: \" << (x != y) << endl;\n    cout << \"x < y: \" << (x < y) << endl;\n    cout << \"x > y: \" << (x > y) << endl;\n    return 0;\n}'
  },

  'logical': {
    title: '12. Logical Operators',
    description: 'Combine boolean conditions.',
    theory: '<p><strong>Operators:</strong></p><ul><li>&& AND - Both conditions true</li><li>|| OR - At least one true</li><li>! NOT - Negate condition</li></ul><p>Used in conditional statements</p>',
    practice: '<p>Combine multiple conditions.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25, income = 50000;\n    \n    if (age >= 18 && income >= 30000) {\n        cout << \"Eligible for loan\" << endl;\n    }\n    \n    if (age < 13 || age > 65) {\n        cout << \"Special category\" << endl;\n    }\n    return 0;\n}'
  },

  'bitwise': {
    title: '13. Bitwise Operators',
    description: 'Operate on binary bits.',
    theory: '<p><strong>Operators:</strong></p><ul><li>& AND</li><li>| OR</li><li>^ XOR</li><li>~ NOT</li><li><< Left shift</li><li>>> Right shift</li></ul><p>Work on integer bits</p>',
    practice: '<p>Perform bitwise operations.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 3;  // 101 and 011 in binary\n    \n    cout << \"a & b = \" << (a & b) << endl;  // 1\n    cout << \"a | b = \" << (a | b) << endl;  // 7\n    cout << \"a ^ b = \" << (a ^ b) << endl;  // 6\n    cout << \"a << 1 = \" << (a << 1) << endl; // 10\n    return 0;\n}'
  },

  'ternary': {
    title: '14. Ternary Operator',
    description: 'Conditional expression shorthand.',
    theory: '<p><strong>Syntax:</strong> condition ? value_if_true : value_if_false;</p><p>Compact alternative to if-else</p><p>Can be nested</p>',
    practice: '<p>Use ternary operator for simple decisions.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 20;\n    string status = (age >= 18) ? \"Adult\" : \"Minor\";\n    \n    cout << \"Status: \" << status << endl;\n    \n    int score = 85;\n    string grade = (score >= 90) ? \"A\" : (score >= 80) ? \"B\" : \"C\";\n    cout << \"Grade: \" << grade << endl;\n    return 0;\n}'
  },

  // 5. Conditional Statements
  'ifelse': {
    title: '15. if-else Statements',
    description: 'Execute code based on conditions.',
    theory: '<p><strong>Syntax:</strong></p><pre>if (condition) {\n    // true\n} else if (condition) {\n    // true\n} else {\n    // false\n}</pre>',
    practice: '<p>Check number properties and decide output.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 15;\n    \n    if (num > 0) {\n        cout << \"Number is positive\" << endl;\n    } else if (num < 0) {\n        cout << \"Number is negative\" << endl;\n    } else {\n        cout << \"Number is zero\" << endl;\n    }\n    return 0;\n}'
  },

  'switchCase': {
    title: '16. switch Statement',
    description: 'Select from multiple cases.',
    theory: '<p><strong>Syntax:</strong></p><pre>switch (expr) {\n    case value1:\n        // code\n        break;\n    default:\n        // code\n}</pre><p>Use break to exit switch</p>',
    practice: '<p>Create menu-driven program.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int choice = 2;\n    \n    switch (choice) {\n        case 1:\n            cout << \"Option 1\" << endl;\n            break;\n        case 2:\n            cout << \"Option 2\" << endl;\n            break;\n        default:\n            cout << \"Invalid option\" << endl;\n    }\n    return 0;\n}'
  },

  // 6. Loops
  'forLoop': {
    title: '17. for Loop',
    description: 'Repeat code specific times.',
    theory: '<p><strong>Syntax:</strong> for (init; condition; update) { }</p><p>Steps: Initialize, Check, Execute, Update</p><p>Predictable number of iterations</p>',
    practice: '<p>Print patterns and series using loops.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        cout << i << \" \";\n    }\n    cout << endl;\n    \n    for (int i = 1; i <= 5; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}'
  },

  'whileLoop': {
    title: '18. while Loop',
    description: 'Repeat while condition is true.',
    theory: '<p><strong>Syntax:</strong> while (condition) { }</p><p>Checks condition before each iteration</p><p>Use when iterations unknown</p>',
    practice: '<p>Create number guessing game.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int i = 1;\n    \n    while (i <= 5) {\n        cout << i << \" \";\n        i++;\n    }\n    cout << endl;\n    \n    int sum = 0, num;\n    while (cin >> num && num != 0) {\n        sum += num;\n    }\n    cout << \"Sum: \" << sum << endl;\n    return 0;\n}'
  },

  'doWhile': {
    title: '19. do-while Loop',
    description: 'Execute at least once.',
    theory: '<p><strong>Syntax:</strong> do { } while (condition);</p><p>Checks condition after execution</p><p>Always runs at least once</p>',
    practice: '<p>Create menu that repeats until user quits.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int i = 1;\n    \n    do {\n        cout << i << \" \";\n        i++;\n    } while (i <= 5);\n    cout << endl;\n    \n    int choice;\n    do {\n        cout << \"Menu (1=Continue, 0=Exit): \";\n        cin >> choice;\n    } while (choice != 0);\n    return 0;\n}'
  },

  'breakContinue': {
    title: '20. break & continue',
    description: 'Control loop flow.',
    theory: '<p><strong>break:</strong> Exit loop immediately</p><p><strong>continue:</strong> Skip to next iteration</p><p>Used in loops and switch statements</p>',
    practice: '<p>Use break and continue in loops.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i == 5) break;  // Exit loop\n        cout << i << \" \";\n    }\n    cout << endl;\n    \n    for (int i = 1; i <= 5; i++) {\n        if (i == 2) continue;  // Skip\n        cout << i << \" \";\n    }\n    return 0;\n}'
  },

  // 7. Functions
  'functions': {
    title: '21. Functions Basics',
    description: 'Create reusable code blocks.',
    theory: '<p><strong>Syntax:</strong> return_type name(parameters) { }</p><p><strong>Components:</strong></p><ul><li>Return type: int, void, string, etc.</li><li>Name: function identifier</li><li>Parameters: input values</li><li>Body: function logic</li></ul>',
    practice: '<p>Create functions for common tasks.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\nvoid greet(string name) {\n    cout << \"Hello, \" << name << endl;\n}\n\nint main() {\n    cout << \"Sum: \" << add(5, 3) << endl;\n    greet(\"Alice\");\n    return 0;\n}'
  },

  'functionAdvanced': {
    title: '22. Advanced Functions',
    description: 'Default arguments, overloading, recursion.',
    theory: '<p><strong>Default Arguments:</strong> Set default values</p><p><strong>Overloading:</strong> Same name, different parameters</p><p><strong>Recursion:</strong> Function calls itself</p>',
    practice: '<p>Create overloaded and recursive functions.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint multiply(int a, int b = 2) {  // Default argument\n    return a * b;\n}\n\nint main() {\n    cout << \"5! = \" << factorial(5) << endl;\n    cout << \"multiply(3) = \" << multiply(3) << endl;\n    cout << \"multiply(3, 4) = \" << multiply(3, 4) << endl;\n    return 0;\n}'
  },

  // 8. Arrays & Strings
  'arrays': {
    title: '23. Arrays',
    description: 'Store multiple values.',
    theory: '<p><strong>1D Array:</strong> data_type arr[size];</p><p><strong>2D Array:</strong> data_type arr[rows][cols];</p><p>Zero-indexed, index from 0 to size-1</p><p>Fixed size at compile time</p>',
    practice: '<p>Work with 1D and 2D arrays.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    \n    for (int i = 0; i < 5; i++) {\n        cout << arr[i] << \" \";\n    }\n    cout << endl;\n    \n    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 3; j++) {\n            cout << matrix[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}'
  },

  'strings': {
    title: '24. Strings',
    description: 'Work with text data.',
    theory: '<p><strong>C-style:</strong> char arr[100];</p><p><strong>String class:</strong> string str;</p><p><strong>String Methods:</strong> length(), append(), find(), substr(), compare()</p>',
    practice: '<p>Perform string operations.</p>',
    defaultCode: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = \"Hello World\";\n    \n    cout << \"String: \" << str << endl;\n    cout << \"Length: \" << str.length() << endl;\n    cout << \"First 5: \" << str.substr(0, 5) << endl;\n    \n    str.append(\" 2024\");\n    cout << \"After append: \" << str << endl;\n    return 0;\n}'
  },

  // 9. Pointers & References
  'pointers': {
    title: '25. Pointers',
    description: 'Work with memory addresses.',
    theory: '<p><strong>&:</strong> Address-of operator</p><p><strong>*:</strong> Dereference operator</p><p>Pointers store memory addresses</p><p>Syntax: data_type* ptr = &variable;</p>',
    practice: '<p>Create and use pointers.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 10;\n    int* ptr = &num;  // Pointer\n    \n    cout << \"Value: \" << num << endl;\n    cout << \"Address: \" << &num << endl;\n    cout << \"Pointer: \" << ptr << endl;\n    cout << \"Dereference: \" << *ptr << endl;\n    \n    *ptr = 20;  // Change via pointer\n    cout << \"New value: \" << num << endl;\n    return 0;\n}'
  },

  'references': {
    title: '26. References',
    description: 'Alternative names for variables.',
    theory: '<p><strong>Syntax:</strong> data_type& ref = variable;</p><p>References are like constant pointers</p><p>Cannot be null, must be initialized</p><p>Cannot be changed to refer to other variable</p>',
    practice: '<p>Use references in functions.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nvoid increment(int& x) {\n    x++;  // Modify original\n}\n\nint main() {\n    int num = 10;\n    int& ref = num;  // Reference\n    \n    cout << \"Original: \" << num << endl;\n    increment(num);\n    cout << \"After increment: \" << num << endl;\n    \n    ref = 100;\n    cout << \"Via reference: \" << num << endl;\n    return 0;\n}'
  },

  // 10. Structures & Enums
  'structures': {
    title: '27. Structures',
    description: 'Group related data together.',
    theory: '<p><strong>Syntax:</strong> struct StructName { members; };</p><p>Bundles different data types</p><p>Create instances: StructName obj;</p><p>Access members: obj.member or ptr->member</p>',
    practice: '<p>Create struct and use it.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nstruct Student {\n    string name;\n    int rollNo;\n    double gpa;\n};\n\nint main() {\n    Student s1;\n    s1.name = \"Alice\";\n    s1.rollNo = 101;\n    s1.gpa = 3.8;\n    \n    cout << \"Name: \" << s1.name << endl;\n    cout << \"Roll No: \" << s1.rollNo << endl;\n    cout << \"GPA: \" << s1.gpa << endl;\n    return 0;\n}'
  },

  'enumerations': {
    title: '28. Enumerations',
    description: 'Define named integer constants.',
    theory: '<p><strong>Syntax:</strong> enum EnumName { value1, value2, ... };</p><p>Each constant has integer value (0-indexed by default)</p><p>Can assign custom values</p>',
    practice: '<p>Create enums for meaningful constants.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nenum Color { RED = 0, GREEN = 1, BLUE = 2 };\nenum Day { SUN, MON, TUE, WED, THU, FRI, SAT };\n\nint main() {\n    Color c = BLUE;\n    Day d = FRI;\n    \n    cout << \"Color: \" << c << endl;  // 2\n    cout << \"Day: \" << d << endl;    // 5\n    \n    if (c == BLUE) {\n        cout << \"Color is blue\" << endl;\n    }\n    return 0;\n}'
  },

  // 11. OOP Concepts
  'classes': {
    title: '29. Classes & Objects',
    description: 'Create custom data types.',
    theory: '<p><strong>Class:</strong> Template for objects</p><p><strong>Object:</strong> Instance of class</p><p><strong>Members:</strong> Data (variables) and functions (methods)</p><p><strong>Access Specifiers:</strong> public, private, protected</p>',
    practice: '<p>Create and use classes.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Car {\npublic:\n    string brand;\n    string model;\n    int year;\n    \n    void display() {\n        cout << year << \" \" << brand << \" \" << model << endl;\n    }\n};\n\nint main() {\n    Car c1;\n    c1.brand = \"Toyota\";\n    c1.model = \"Corolla\";\n    c1.year = 2023;\n    c1.display();\n    return 0;\n}'
  },

  'encapsulation': {
    title: '30. Encapsulation',
    description: 'Hide internal implementation details.',
    theory: '<p><strong>Principle:</strong> Private data, public interface</p><p>Use private members and public getter/setter methods</p><p>Protects data from invalid modifications</p>',
    practice: '<p>Create class with private members.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;\n    \npublic:\n    void setBalance(double b) {\n        if (b > 0) balance = b;\n    }\n    \n    double getBalance() {\n        return balance;\n    }\n    \n    void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n};\n\nint main() {\n    BankAccount acc;\n    acc.setBalance(1000);\n    acc.deposit(500);\n    cout << \"Balance: \" << acc.getBalance() << endl;\n    return 0;\n}'
  },

  // 12. Constructors & Destructors
  'constructors': {
    title: '31. Constructors',
    description: 'Initialize objects.',
    theory: '<p><strong>Constructor:</strong> Special function called when object created</p><p><strong>Default:</strong> No parameters</p><p><strong>Parameterized:</strong> Takes parameters</p><p><strong>Copy Constructor:</strong> Copies another object</p><p>Same name as class, no return type</p>',
    practice: '<p>Create constructors for initialization.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Point {\npublic:\n    int x, y;\n    \n    Point() {  // Default constructor\n        x = 0; y = 0;\n    }\n    \n    Point(int a, int b) {  // Parameterized\n        x = a; y = b;\n    }\n    \n    void display() {\n        cout << \"(\" << x << \", \" << y << \")\" << endl;\n    }\n};\n\nint main() {\n    Point p1;  // Default\n    p1.display();\n    \n    Point p2(3, 4);  // Parameterized\n    p2.display();\n    return 0;\n}'
  },

  'destructors': {
    title: '32. Destructors',
    description: 'Clean up resources.',
    theory: '<p><strong>Destructor:</strong> Called when object destroyed</p><p>Syntax: ~ClassName() { }</p><p>Used to free dynamic memory</p><p>Automatically called</p>',
    practice: '<p>Create destructor to free memory.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Resource {\npublic:\n    int* data;\n    \n    Resource(int size) {\n        data = new int[size];\n        cout << \"Resource allocated\" << endl;\n    }\n    \n    ~Resource() {\n        delete[] data;\n        cout << \"Resource deallocated\" << endl;\n    }\n};\n\nint main() {\n    {\n        Resource r(100);\n        // Use resource\n    }  // Destructor called here\n    return 0;\n}'
  },

  // 13. Inheritance
  'inheritance': {
    title: '33. Inheritance',
    description: 'Derive classes from base class.',
    theory: '<p><strong>Syntax:</strong> class Derived : access Base { };</p><p><strong>Types:</strong> Single, Multiple, Multilevel, Hierarchical, Hybrid</p><p>Derived class inherits all members of base class</p>',
    practice: '<p>Create inheritance hierarchy.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    void eat() {\n        cout << \"Eating...\" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << \"Woof!\" << endl;\n    }\n};\n\nint main() {\n    Dog d;\n    d.eat();   // From Animal\n    d.bark();  // From Dog\n    return 0;\n}'
  },

  // 14. Polymorphism
  'polymorphism': {
    title: '34. Polymorphism',
    description: 'Same interface, different implementations.',
    theory: '<p><strong>Compile-time:</strong> Function overloading, operator overloading</p><p><strong>Runtime:</strong> Virtual functions, function overriding</p><p><strong>Virtual Function:</strong> Keyword virtual</p>',
    practice: '<p>Create virtual functions.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() {\n        cout << \"Drawing shape\" << endl;\n    }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        cout << \"Drawing circle\" << endl;\n    }\n};\n\nint main() {\n    Shape* s = new Circle();\n    s->draw();  // Calls Circle::draw()\n    delete s;\n    return 0;\n}'
  },

  // 15. Operator Overloading
  'operatorOverloading': {
    title: '35. Operator Overloading',
    description: 'Redefine operators for custom types.',
    theory: '<p><strong>Syntax:</strong> returnType operator@(parameters) { }</p><p>@ is the operator to overload</p><p>Cannot overload: ::, ., .*, ?:</p><p>Can be member or friend function</p>',
    practice: '<p>Overload + operator for custom class.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Complex {\npublic:\n    int real, imag;\n    \n    Complex operator+(const Complex& c) {\n        Complex temp;\n        temp.real = real + c.real;\n        temp.imag = imag + c.imag;\n        return temp;\n    }\n    \n    void display() {\n        cout << real << \" + \" << imag << \"i\" << endl;\n    }\n};\n\nint main() {\n    Complex c1 = {3, 4};\n    Complex c2 = {1, 2};\n    Complex c3 = c1 + c2;\n    c3.display();\n    return 0;\n}'
  },

  // 16. Templates
  'templates': {
    title: '36. Templates',
    description: 'Write generic code.',
    theory: '<p><strong>Function Template:</strong> Generic function</p><p><strong>Class Template:</strong> Generic class</p><p>Syntax: template<typename T> or template<class T></p><p>Instantiation at compile-time</p>',
    practice: '<p>Create function template.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT maximum(T a, T b) {\n    return (a > b) ? a : b;\n}\n\ntemplate <typename T>\nclass Stack {\nprivate:\n    T data[100];\n    int top;\n    \npublic:\n    Stack() { top = -1; }\n    \n    void push(T x) {\n        data[++top] = x;\n    }\n};\n\nint main() {\n    cout << \"Max of 5 and 10: \" << maximum(5, 10) << endl;\n    cout << \"Max of 5.5 and 3.2: \" << maximum(5.5, 3.2) << endl;\n    return 0;\n}'
  },

  // 17. Exception Handling
  'exceptions': {
    title: '37. Exception Handling',
    description: 'Handle runtime errors gracefully.',
    theory: '<p><strong>try:</strong> Block containing risky code</p><p><strong>catch:</strong> Handle exception</p><p><strong>throw:</strong> Raise exception</p><p>Can catch specific or generic exceptions</p>',
    practice: '<p>Handle division by zero exception.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 10;\n    \n    try {\n        if (num == 0) {\n            throw \"Divisor cannot be zero\";\n        }\n        cout << \"50 / \" << num << \" = \" << 50 / num << endl;\n    }\n    catch (const char* msg) {\n        cout << \"Error: \" << msg << endl;\n    }\n    \n    return 0;\n}'
  },

  // 18. File Handling
  'fileHandling': {
    title: '38. File Handling',
    description: 'Read and write files.',
    theory: '<p><strong>ofstream:</strong> Output to file</p><p><strong>ifstream:</strong> Input from file</p><p><strong>Modes:</strong> ios::in, ios::out, ios::app, ios::binary</p><p>Always close file after use</p>',
    practice: '<p>Write and read from file.</p>',
    defaultCode: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    // Write to file\n    ofstream outfile(\"data.txt\");\n    outfile << \"Hello World\" << endl;\n    outfile << \"Line 2\" << endl;\n    outfile.close();\n    \n    // Read from file\n    ifstream infile(\"data.txt\");\n    string line;\n    while (getline(infile, line)) {\n        cout << line << endl;\n    }\n    infile.close();\n    return 0;\n}'
  },

  // 19. STL
  'stl': {
    title: '39. STL - Containers',
    description: 'Standard Template Library containers.',
    theory: '<p><strong>Containers:</strong></p><ul><li>Vector - Dynamic array</li><li>List - Doubly linked list</li><li>Stack - LIFO</li><li>Queue - FIFO</li><li>Set - Unique sorted elements</li><li>Map - Key-value pairs</li></ul>',
    practice: '<p>Use different STL containers.</p>',
    defaultCode: '#include <iostream>\n#include <vector>\n#include <stack>\n#include <map>\nusing namespace std;\n\nint main() {\n    // Vector\n    vector<int> v = {1, 2, 3};\n    v.push_back(4);\n    \n    // Stack\n    stack<int> s;\n    s.push(10);\n    s.push(20);\n    \n    // Map\n    map<string, int> m;\n    m[\"age\"] = 25;\n    m[\"score\"] = 95;\n    \n    cout << \"Age: \" << m[\"age\"] << endl;\n    return 0;\n}'
  },

  // 20. Memory Management
  'memoryManagement': {
    title: '40. Dynamic Memory',
    description: 'Allocate and deallocate memory.',
    theory: '<p><strong>new:</strong> Allocate memory</p><p><strong>delete:</strong> Free memory</p><p><strong>new[]:</strong> Allocate array</p><p><strong>delete[]:</strong> Free array</p><p>Returns pointer to allocated memory</p>',
    practice: '<p>Use dynamic memory allocation.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Single variable\n    int* ptr = new int;\n    *ptr = 100;\n    cout << \"Value: \" << *ptr << endl;\n    delete ptr;\n    \n    // Array\n    int* arr = new int[5];\n    for (int i = 0; i < 5; i++) {\n        arr[i] = i * 10;\n    }\n    delete[] arr;\n    return 0;\n}'
  },

  // 21. Advanced C++
  'lambda': {
    title: '41. Lambda Functions',
    description: 'Anonymous inline functions.',
    theory: '<p><strong>Syntax:</strong> [captures](params) { body }</p><p>Used with STL algorithms</p><p>Captures: [&] all by reference, [=] all by value</p>',
    practice: '<p>Use lambda with sort.</p>',
    defaultCode: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {3, 1, 4, 1, 5, 9};\n    \n    sort(nums.begin(), nums.end(), [](int a, int b) {\n        return a > b;  // Descending\n    });\n    \n    for (int n : nums) {\n        cout << n << \" \";\n    }\n    return 0;\n}'
  },

  // 22. Modern C++
  'modernCpp': {
    title: '42. Modern C++ Features',
    description: 'C++11/14/17/20 features.',
    theory: '<p><strong>C++11:</strong> auto, range-based for, nullptr</p><p><strong>C++17:</strong> structured bindings, optional</p><p><strong>C++20:</strong> concepts, ranges</p>',
    practice: '<p>Use modern C++ features.</p>',
    defaultCode: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    // auto keyword\n    auto x = 10;\n    auto y = 5.5;\n    \n    // Range-based for\n    vector<int> v = {1, 2, 3, 4, 5};\n    for (auto num : v) {\n        cout << num << \" \";\n    }\n    \n    // nullptr\n    int* ptr = nullptr;\n    return 0;\n}'
  },

  // 23. DSA with C++
  'dsa': {
    title: '43. Data Structures & Algorithms',
    description: 'Common DSA patterns.',
    theory: '<p><strong>Searching:</strong> Linear, Binary</p><p><strong>Sorting:</strong> Bubble, Selection, Quick, Merge</p><p><strong>Data Structures:</strong> Stack, Queue, Tree, Graph</p>',
    practice: '<p>Implement binary search.</p>',
    defaultCode: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint binarySearch(int arr[], int n, int target) {\n    int left = 0, right = n - 1;\n    while (left <= right) {\n        int mid = (left + right) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {1, 3, 5, 7, 9};\n    cout << binarySearch(arr, 5, 7) << endl;  // 3\n    return 0;\n}'
  },

  // 24. Projects
  'projects': {
    title: '44. C++ Projects',
    description: 'Build real-world projects.',
    theory: '<p><strong>Project Ideas:</strong></p><ul><li>Calculator</li><li>To-Do List</li><li>Bank Management System</li><li>Student Management</li><li>Game (Tic-Tac-Toe)</li><li>Chat Application</li></ul>',
    practice: '<p>Start building projects to practice.</p>',
    defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Calculator {\npublic:\n    double add(double a, double b) { return a + b; }\n    double subtract(double a, double b) { return a - b; }\n    double multiply(double a, double b) { return a * b; }\n    double divide(double a, double b) {\n        return (b != 0) ? a / b : 0;\n    }\n};\n\nint main() {\n    Calculator c;\n    cout << \"5 + 3 = \" << c.add(5, 3) << endl;\n    return 0;\n}'
  }
};

const topicOrder = [
  'introduction', 'setup', 'basicSyntax', 'variables', 'dataTypes', 'typeCasting',
  'cout', 'cin', 'formatting', 'arithmetic', 'relational', 'logical', 'bitwise', 'ternary',
  'ifelse', 'switchCase', 'forLoop', 'whileLoop', 'doWhile', 'breakContinue',
  'functions', 'functionAdvanced', 'arrays', 'strings', 'pointers', 'references',
  'structures', 'enumerations', 'classes', 'encapsulation', 'constructors', 'destructors',
  'inheritance', 'polymorphism', 'operatorOverloading', 'templates', 'exceptions',
  'fileHandling', 'stl', 'memoryManagement', 'lambda', 'modernCpp', 'dsa', 'projects'
];

// Initialize topics
function initializeCourse() {
  renderTopicList();
  loadTopic(activeTopicKey);
}

function renderTopicList() {
  topicListContainer.innerHTML = '';
  topicButtons = [];
  
  topicOrder.forEach(key => {
    const topic = cppTopics[key];
    const button = document.createElement('button');
    button.className = 'topic-button';
    button.textContent = topic.title;
    button.dataset.topicKey = key;
    
    if (key === activeTopicKey) {
      button.classList.add('active');
    }
    
    button.addEventListener('click', () => {
      document.querySelectorAll('.topic-button').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      loadTopic(key);
      activeTopicKey = key;
    });
    
    topicListContainer.appendChild(button);
    topicButtons.push(button);
  });
  
  lessonCountLabel.textContent = `${topicOrder.length} lessons`;
}

function loadTopic(topicKey) {
  const topic = cppTopics[topicKey];
  const currentIndex = topicOrder.indexOf(topicKey);
  
  pageTitle.textContent = `${currentIndex + 1}. ${topic.title}`;
  topicTitle.textContent = topic.title;
  topicDescription.textContent = topic.description;
  topicTheory.innerHTML = `<p><strong>What is ${topic.title}?</strong></p><p>${topic.description} This lesson explains the idea, the syntax to remember, and where it is useful in a real C++ program.</p>${topic.theory}<div class="lesson-example"><h4>Example</h4><pre>${escapeHtml(topic.defaultCode)}</pre></div><h4 class="lesson-reference-title">Key Points</h4><ul><li>Pay attention to the syntax and data types used.</li><li>Compile the example and read the output.</li><li>Change one value and run it again to learn by doing.</li></ul><h4 class="lesson-reference-title">Quick Reference</h4><table class="lesson-table"><thead><tr><th>Concept</th><th>What it does</th></tr></thead><tbody><tr><td>${topic.title}</td><td>Core C++ concept for this lesson</td></tr><tr><td>Practice</td><td>Compile, run, and modify the example</td></tr></tbody></table>`;
  topicPractice.innerHTML = topic.practice;
  codeEditor.value = topic.defaultCode;
  codeOutput.textContent = 'Ready to execute C++ code. Click Run Code.';
  
  updateProgress(currentIndex);
  updateNavigationButtons(currentIndex);
  updateProgressNote(topic.title, currentIndex);
}

function updateProgress(currentIndex) {
  const progress = ((currentIndex + 1) / topicOrder.length) * 100;
  progressFill.style.width = progress + '%';
  progressText.textContent = `${currentIndex + 1} of ${topicOrder.length} completed`;
}

function updateNavigationButtons(currentIndex) {
  const prevBtn = document.getElementById('prev-topic-btn');
  const nextBtn = document.getElementById('next-topic-btn');
  
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === topicOrder.length - 1;
  
  prevBtn.onclick = () => {
    if (currentIndex > 0) {
      const prevKey = topicOrder[currentIndex - 1];
      document.querySelector(`[data-topic-key="${prevKey}"]`).click();
    }
  };
  
  nextBtn.onclick = () => {
    if (currentIndex < topicOrder.length - 1) {
      const nextKey = topicOrder[currentIndex + 1];
      document.querySelector(`[data-topic-key="${nextKey}"]`).click();
    }
  };
}

function updateProgressNote(topicTitle, currentIndex) {
  if (currentIndex < topicOrder.length - 1) {
    const nextTopic = cppTopics[topicOrder[currentIndex + 1]];
    progressNote.textContent = `Current: ${topicTitle}. Next: ${nextTopic.title}`;
  } else {
    progressNote.textContent = `🎉 Course Completed! Final topic: ${topicTitle}`;
  }
}

// Run code functionality
runCodeBtn.addEventListener('click', async () => {
  const code = codeEditor.value;
  if (!code.trim()) {
    codeOutput.textContent = 'Please write some C++ code first!';
    return;
  }
  
  codeOutput.textContent = 'Compiling and executing...';
  
  try {
    const response = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ language_id: 54, source_code: code, stdin: '' })
    });
    
    const result = await response.json();
    
    const output = [result.stdout, result.stderr, result.compile_output, result.message].filter(Boolean).join('\n').trim();
    codeOutput.textContent = output || 'Program finished with no output.';
  } catch (error) {
    codeOutput.textContent = 'Unable to run code. Check your internet connection and try again.';
  }
});

resetCodeBtn.addEventListener('click', () => {
  const topic = cppTopics[activeTopicKey];
  codeEditor.value = topic.defaultCode;
  codeOutput.textContent = 'Ready to execute C++ code. Click Run Code.';
});

copyCodeBtn.addEventListener('click', () => {
  codeEditor.select();
  document.execCommand('copy');
  alert('Code copied to clipboard!');
});

// Menu toggle
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
});

// Theme toggle
const setThemeIcon = () => {
  const icon = themeToggle?.querySelector('i');
  const isLight = document.body.classList.contains('light-theme');

  if (icon) {
    icon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }

  themeToggle?.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
};

const initializeTheme = () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
  }

  setThemeIcon();
};

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  setThemeIcon();
});

// Auth modal
authButton.addEventListener('click', () => {
  authModal.classList.add('open');
  authModal.setAttribute('aria-hidden', 'false');
});

authClose.addEventListener('click', () => {
  authModal.classList.remove('open');
  authModal.setAttribute('aria-hidden', 'true');
});

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(`Welcome ${authEmail.value}!`);
  authModal.classList.remove('open');
  authForm.reset();
});

// Close modal on background click
authModal.addEventListener('click', (e) => {
  if (e.target === authModal) {
    authModal.classList.remove('open');
  }
});

// Initialize on page load
initializeTheme();
document.addEventListener('DOMContentLoaded', initializeCourse);