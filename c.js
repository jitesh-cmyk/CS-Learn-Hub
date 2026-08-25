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
    description: 'C is the foundation of systems programming and an essential language for learning low-level concepts.',
    theory: [
      'C programs are structured with functions, statements, and header files.',
      'The main() function is the entry point of every C program.'
    ],
    practice: [
      'Study the sample program structure.',
      'Run the code and observe the output.',
      'Modify the printed text and run again.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    printf("Welcome to C programming!\\n");\n    return 0;\n}'
  },
  {
    key: 'history',
    title: 'History of C',
    description: 'C was created by Dennis Ritchie in 1972 and has shaped modern programming languages.',
    theory: [
      'C was originally developed for writing operating systems at Bell Labs.',
      'It became popular because of its speed and portability.'
    ],
    practice: [
      'Learn why C remains important for systems and embedded programming.',
      'Think about how modern languages borrow C syntax and concepts.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    printf("C was created by Dennis Ritchie in 1972.\\n");\n    return 0;\n}'
  },
  {
    key: 'features',
    title: 'Features of C',
    description: 'C is fast, portable, and gives direct access to system memory.',
    theory: [
      'C programs compile to efficient machine code.',
      'The language is close to hardware and does not hide details.'
    ],
    practice: [
      'Identify why C is used for operating systems and embedded devices.',
      'Compare C features with higher-level languages.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    printf("C is fast and portable.\\n");\n    return 0;\n}'
  },
  {
    key: 'structure',
    title: 'Structure of a C Program',
    description: 'A C program typically includes headers, a main function, and statements inside braces.',
    theory: [
      '#include adds libraries such as stdio.h for input/output.',
      'main() is the starting point for execution.'
    ],
    practice: [
      'Observe the include statement, main function, and return value.',
      'Try adding a second printf statement.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    printf("This is the structure of a C program.\\n");\n    printf("It includes headers and main().\\n");\n    return 0;\n}'
  },
  {
    key: 'tokens',
    title: 'Tokens',
    description: 'Tokens are the smallest meaningful units of a C program, like keywords and identifiers.',
    theory: [
      'Tokens include keywords, identifiers, constants, operators, and separators.',
      'The compiler uses tokens to parse the source code.'
    ],
    practice: [
      'Identify tokens in the sample code.',
      'Try changing a constant or identifier name.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int number = 5;\n    printf("Number: %d\\n", number);\n    return 0;\n}'
  },
  {
    key: 'keywords',
    title: 'Keywords',
    description: 'Keywords are reserved words that cannot be used as variable names.',
    theory: [
      'Examples include int, return, if, else, for, while, and switch.',
      'Keywords have special meaning to the compiler.'
    ],
    practice: [
      'Find all keywords in the sample program.',
      'Do not use keywords as identifiers.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int value = 10;\n    return 0;\n}'
  },
  {
    key: 'identifiers',
    title: 'Identifiers',
    description: 'Identifiers are names for variables, functions, and constants.',
    theory: [
      'They must start with a letter or underscore and can contain letters, digits, and underscores.',
      'Meaningful identifiers improve code readability.'
    ],
    practice: [
      'Rename variables using descriptive names.',
      'Avoid using reserved words as identifiers.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int myNumber = 15;\n    printf("My number is %d\\n", myNumber);\n    return 0;\n}'
  },
  {
    key: 'variables',
    title: 'Variables',
    description: 'Variables store values that programs can read or change.',
    theory: [
      'Variables have a type such as int, float, or char.',
      'They occupy memory and can be assigned values.'
    ],
    practice: [
      'Declare variables and print their values.',
      'Change values and rerun the program.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    float price = 49.99f;\n    printf("Age: %d, Price: %.2f\\n", age, price);\n    return 0;\n}'
  },
  {
    key: 'constants',
    title: 'Constants',
    description: 'Constants hold values that do not change during program execution.',
    theory: [
      'Use const or #define to declare constants.',
      'Constants help protect important values from accidental updates.'
    ],
    practice: [
      'Define a constant and print it.',
      'Try changing a constant name.'
    ],
    code: '#include <stdio.h>\n#define DAYS_IN_WEEK 7\n\nint main() {\n    printf("Weeks have %d days.\\n", DAYS_IN_WEEK);\n    return 0;\n}'
  },
  {
    key: 'data-types',
    title: 'Data Types',
    description: 'Data types tell C what kind of data each variable stores.',
    theory: [
      'Common types include int, float, double, and char.',
      'Use the correct type for memory and precision.'
    ],
    practice: [
      'Create variables of different types.',
      'Print values with the correct format specifier.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int age = 21;\n    float cgpa = 8.5f;\n    char grade = \'A\';\n    printf("Age: %d, CGPA: %.1f, Grade: %c\\n", age, cgpa, grade);\n    return 0;\n}'
  },
  {
    key: 'type-modifiers',
    title: 'Type Modifiers',
    description: 'Modifiers change the size or sign of integer data types.',
    theory: [
      'Use short, long, signed, and unsigned modifiers.',
      'long int can store larger values than int.'
    ],
    practice: [
      'Use unsigned int and print a positive number.',
      'Change int to long int and rerun the code.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    unsigned int score = 100;\n    long int population = 1000000;\n    printf("Score: %u, Population: %ld\\n", score, population);\n    return 0;\n}'
  },
  {
    key: 'operators',
    title: 'Operators',
    description: 'Operators perform arithmetic, comparisons, and logic in C.',
    theory: [
      'Arithmetic operators are +, -, *, /, and %.',
      'Relational and logical operators are used in conditions.'
    ],
    practice: [
      'Calculate expressions and print results.',
      'Use comparison operators in if statements.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int a = 8, b = 3;\n    printf("Sum: %d\\n", a + b);\n    printf("Greater: %d\\n", a > b);\n    return 0;\n}'
  },
  {
    key: 'expressions',
    title: 'Expressions',
    description: 'Expressions combine values, variables, and operators to produce results.',
    theory: [
      'Expressions can be used in assignments, conditions, and function calls.',
      'Operator precedence affects how expressions are evaluated.'
    ],
    practice: [
      'Write expressions with arithmetic and parentheses.',
      'Assign expression results to variables.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int x = 5, y = 2;\n    int result = x * (y + 3);\n    printf("Result: %d\\n", result);\n    return 0;\n}'
  },
  {
    key: 'io',
    title: 'Input/Output',
    description: 'printf displays output and scanf reads input from the user.',
    theory: [
      'printf uses format specifiers like %d, %f, and %c.',
      'scanf reads typed values into variables.'
    ],
    practice: [
      'Use printf to display text and values.',
      'Use scanf to read input from the keyboard.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int number;\n    printf("Enter a number: ");\n    scanf("%d", &number);\n    printf("You entered %d\\n", number);\n    return 0;\n}'
  },
  {
    key: 'escape-sequences',
    title: 'Escape Sequences',
    description: 'Escape sequences represent special characters in strings.',
    theory: [
      '\\n means newline, \\t means tab, and \\\" means a quote inside text.',
      'Use escape sequences inside string literals with printf.'
    ],
    practice: [
      'Print text on multiple lines.',
      'Include quotes and tabs in output.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    printf("Line 1\\nLine 2\\n");\n    printf("Quote: \"Hello\"\\n");\n    return 0;\n}'
  },
  {
    key: 'comments',
    title: 'Comments',
    description: 'Comments document code and are ignored by the compiler.',
    theory: [
      'Use // for single-line comments and /* */ for multi-line comments.',
      'Comments help explain code to others and yourself.'
    ],
    practice: [
      'Add comments to describe each step of a program.',
      'Do not include comments inside string literals.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    // This prints a message\n    printf("Hello, comments!\\n");\n    return 0;\n}'
  },
  {
    key: 'type-casting',
    title: 'Type Casting',
    description: 'Type casting converts values from one data type to another.',
    theory: [
      'Use (int), (float), and (double) for explicit casts.',
      'Casting is useful when performing mixed-type arithmetic.'
    ],
    practice: [
      'Convert a float to int and print the result.',
      'See how casting changes the output.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    float value = 9.8f;\n    int integerValue = (int)value;\n    printf("Value: %.2f, Integer: %d\\n", value, integerValue);\n    return 0;\n}'
  },
  {
    key: 'decision-making',
    title: 'Decision Making',
    description: 'Use if, if-else, nested if, and switch statements to control program flow.',
    theory: [
      'if executes code when a condition is true.',
      'switch selects behavior based on a value.'
    ],
    practice: [
      'Write an if-else statement to compare numbers.',
      'Use switch to handle multiple choices.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int score = 75;\n    if (score >= 90) {\n        printf("Excellent\\n");\n    } else if (score >= 60) {\n        printf("Good\\n");\n    } else {\n        printf("Keep practicing\\n");\n    }\n    return 0;\n}'
  },
  {
    key: 'loops',
    title: 'Loops',
    description: 'Loops repeat code with for, while, and do-while statements.',
    theory: [
      'for loops run a known number of times.',
      'while loops run until a condition becomes false.'
    ],
    practice: [
      'Use a for loop to print numbers.',
      'Use while to repeat until a condition changes.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}'
  },
  {
    key: 'break-continue-goto',
    title: 'break / continue / goto',
    description: 'Use break, continue, and goto for loop control and jump behavior.',
    theory: [
      'break exits the current loop.',
      'continue skips the current iteration.'
    ],
    practice: [
      'Use break to stop a loop early.',
      'Use continue to skip one pass.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) continue;\n        if (i == 5) break;\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}'
  },
  {
    key: 'arrays-1d',
    title: 'Arrays 1D',
    description: 'A one-dimensional array stores a sequence of values in a single dimension.',
    theory: [
      'Arrays group values of the same type.',
      'Indexing starts at 0 in C.'
    ],
    practice: [
      'Create an array of integers and print its values.',
      'Change one value and rerun the code.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int numbers[5] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", numbers[i]);\n    }\n    printf("\\n");\n    return 0;\n}'
  },
  {
    key: 'arrays-2d',
    title: 'Arrays 2D',
    description: 'A two-dimensional array stores data in rows and columns.',
    theory: [
      'Use nested loops to access 2D arrays.',
      'Indices are written as array[row][column].'
    ],
    practice: [
      'Declare a 2D array and print its values.',
      'Modify a single element in the array.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}'
  },
  {
    key: 'arrays-multi',
    title: 'Arrays Multi-dimensional',
    description: 'Multi-dimensional arrays extend the concept of arrays to three or more dimensions.',
    theory: [
      'They are useful for complex data like grids or 3D spaces.',
      'Access elements with multiple indices.'
    ],
    practice: [
      'Understand the memory layout of multi-dimensional arrays.',
      'Use nested loops to traverse dimensions.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int cube[2][2][2] = {{{1,2},{3,4}},{{5,6},{7,8}}};\n    printf("%d\\n", cube[1][0][1]);\n    return 0;\n}'
  },
  {
    key: 'strings',
    title: 'Strings',
    description: 'Strings are arrays of characters ending with a null terminator "\\0".',
    theory: [
      'Use char arrays or pointers to store text.',
      'Strings are manipulated with functions from string.h.'
    ],
    practice: [
      'Create a string and print it with printf.',
      'Learn how the null terminator works.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    char message[] = "Hello, C strings!";\n    printf("%s\\n", message);\n    return 0;\n}'
  },
  {
    key: 'string-functions',
    title: 'String Handling Functions',
    description: 'Use library functions like strcpy, strlen, strcmp, strcat, and strstr to work with strings.',
    theory: [
      'string.h contains useful string functions.',
      'These functions simplify string operations.'
    ],
    practice: [
      'Copy, compare, and concatenate strings.',
      'Print string length and contents.'
    ],
    code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char source[] = "C string";\n    char dest[20];\n    strcpy(dest, source);\n    printf("Copied: %s\\n", dest);\n    printf("Length: %zu\\n", strlen(dest));\n    return 0;\n}'
  },
  {
    key: 'functions',
    title: 'Functions',
    description: 'Functions divide code into reusable blocks and improve program structure.',
    theory: [
      'User-defined functions are created by the programmer.',
      'Library functions are provided by C standard libraries.'
    ],
    practice: [
      'Write a function and call it from main().',
      'Create a recursive function.'
    ],
    code: '#include <stdio.h>\n\nvoid greet() {\n    printf("Hello from a function!\\n");\n}\n\nint main() {\n    greet();\n    return 0;\n}'
  },
  {
    key: 'storage-classes',
    title: 'Storage Classes',
    description: 'Storage classes determine the lifetime and visibility of variables.',
    theory: [
      'auto, register, static, and extern control storage and linkage.',
      'static preserves values between function calls.'
    ],
    practice: [
      'Use static to keep a counter value between calls.',
      'Understand extern for shared variables.'
    ],
    code: '#include <stdio.h>\n\nvoid counter() {\n    static int count = 0;\n    count++;\n    printf("Count: %d\\n", count);\n}\n\nint main() {\n    counter();\n    counter();\n    counter();\n    return 0;\n}'
  },
  {
    key: 'pointers',
    title: 'Pointers',
    description: 'Pointers store the memory address of another variable.',
    theory: [
      'A pointer is declared with an asterisk (*).',
      'Pointers are essential for dynamic memory and data structures.'
    ],
    practice: [
      'Use a pointer to read or modify a variable via its address.',
      'Print the address stored in a pointer.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int value = 42;\n    int *ptr = &value;\n    printf("Value: %d, Address: %p\\n", *ptr, (void*)ptr);\n    return 0;\n}'
  },
  {
    key: 'pointer-arithmetic',
    title: 'Pointer Arithmetic',
    description: 'Pointer arithmetic moves pointers through memory locations.',
    theory: [
      'Adding 1 to a pointer moves it to the next element of its type.',
      'Pointer arithmetic works well with arrays.'
    ],
    practice: [
      'Traverse an array using a pointer.',
      'Print values at pointer positions.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int numbers[] = {10, 20, 30};\n    int *ptr = numbers;\n    for (int i = 0; i < 3; i++) {\n        printf("%d ", *(ptr + i));\n    }\n    printf("\\n");\n    return 0;\n}'
  },
  {
    key: 'pointers-arrays',
    title: 'Pointers with Arrays',
    description: 'Arrays and pointers are closely related in C.',
    theory: [
      'The name of an array is a pointer to its first element.',
      'You can use pointer arithmetic to access array values.'
    ],
    practice: [
      'Use a pointer to loop through an array.',
      'Access array elements with pointer syntax.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int values[] = {5, 10, 15};\n    int *ptr = values;\n    printf("First value: %d\\n", *ptr);\n    return 0;\n}'
  },
  {
    key: 'pointers-functions',
    title: 'Pointers with Functions',
    description: 'Pass pointers to functions to modify variables directly.',
    theory: [
      'Functions can receive pointer arguments to access data by reference.',
      'This is useful for changing values outside the function.'
    ],
    practice: [
      'Write a function that changes a value using a pointer.',
      'Print the updated value after the function call.'
    ],
    code: '#include <stdio.h>\n\nvoid setToTen(int *ptr) {\n    *ptr = 10;\n}\n\nint main() {\n    int value = 0;\n    setToTen(&value);\n    printf("Value: %d\\n", value);\n    return 0;\n}'
  },
  {
    key: 'dynamic-memory',
    title: 'Dynamic Memory',
    description: 'Dynamic memory allocation reserves memory at runtime.',
    theory: [
      'Use malloc, calloc, realloc, and free to manage memory.',
      'Always free memory when it is no longer needed.'
    ],
    practice: [
      'Allocate memory for an array and free it.',
      'Resize memory with realloc as needed.'
    ],
    code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *numbers = malloc(3 * sizeof(int));\n    if (!numbers) return 1;\n    for (int i = 0; i < 3; i++) numbers[i] = i + 1;\n    for (int i = 0; i < 3; i++) printf("%d ", numbers[i]);\n    printf("\\n");\n    free(numbers);\n    return 0;\n}'
  },
  {
    key: 'structures',
    title: 'Structures',
    description: 'Structures group different data types into one custom type.',
    theory: [
      'Use struct to define a record with named fields.',
      'Structures are useful for complex data.'
    ],
    practice: [
      'Create a structure for a student record.',
      'Print structure fields.'
    ],
    code: '#include <stdio.h>\n\nstruct Student {\n    char name[20];\n    int age;\n};\n\nint main() {\n    struct Student student = {"Ravi", 21};\n    printf("Name: %s, Age: %d\\n", student.name, student.age);\n    return 0;\n}'
  },
  {
    key: 'unions',
    title: 'Unions',
    description: 'Unions allow different data types to share the same memory location.',
    theory: [
      'Only one union member can contain a value at a time.',
      'Unions are helpful when memory efficiency is important.'
    ],
    practice: [
      'Define a union and assign different values.',
      'Observe which member is active.'
    ],
    code: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n    char str[8];\n};\n\nint main() {\n    union Data data;\n    data.i = 10;\n    printf("int: %d\\n", data.i);\n    data.f = 3.14f;\n    printf("float: %.2f\\n", data.f);\n    return 0;\n}'
  },
  {
    key: 'enumerations',
    title: 'Enumerations',
    description: 'Enums create named integer constants for readable code.',
    theory: [
      'Use enum to define a set of related names.',
      'Enum values are integers by default.'
    ],
    practice: [
      'Define an enum for days or status codes.',
      'Print enum values.'
    ],
    code: '#include <stdio.h>\n\nenum Color { RED, GREEN, BLUE };\n\nint main() {\n    enum Color favorite = GREEN;\n    printf("Favorite color value: %d\\n", favorite);\n    return 0;\n}'
  },
  {
    key: 'typedef',
    title: 'typedef',
    description: 'typedef creates a new name for an existing type.',
    theory: [
      'It simplifies complex type declarations.',
      'Use typedef for pointer types, structures, and arrays.'
    ],
    practice: [
      'Create a typedef for a struct or pointer type.',
      'Use the new alias in code.'
    ],
    code: '#include <stdio.h>\n\ntypedef unsigned long ulong;\n\nint main() {\n    ulong value = 1000UL;\n    printf("Value: %lu\\n", value);\n    return 0;\n}'
  },
  {
    key: 'bitwise-operators',
    title: 'Bitwise Operators',
    description: 'Bitwise operators manipulate individual bits of integer values.',
    theory: [
      'Operators include &, |, ^, ~, <<, and >>.',
      'They are useful for low-level programming and flags.'
    ],
    practice: [
      'Use bitwise AND to mask bits.',
      'Shift values left or right.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int value = 5;\n    printf("Left shift: %d\\n", value << 1);\n    printf("Right shift: %d\\n", value >> 1);\n    return 0;\n}'
  },
  {
    key: 'file-handling',
    title: 'File Handling',
    description: 'File handling functions let you read from and write to files.',
    theory: [
      'Use fopen, fclose, fprintf, fscanf, fgets, fputs, fread, and fwrite.',
      'Always close files after use.'
    ],
    practice: [
      'Write text to a file and read it back.',
      'Use error checking when opening files.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    FILE *file = fopen("sample.txt", "w");\n    if (!file) return 1;\n    fprintf(file, "Hello file!\\n");\n    fclose(file);\n    return 0;\n}'
  },
  {
    key: 'command-line-arguments',
    title: 'Command Line Arguments',
    description: 'Command line arguments allow users to pass values to the program at startup.',
    theory: [
      'main can receive argc and argv parameters.',
      'argv is an array of strings for each argument.'
    ],
    practice: [
      'Print received command line arguments.',
      'Use argc to check the argument count.'
    ],
    code: '#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n    printf("Argument count: %d\\n", argc);\n    for (int i = 0; i < argc; i++) {\n        printf("%s\\n", argv[i]);\n    }\n    return 0;\n}'
  },
  {
    key: 'preprocessor',
    title: 'Preprocessor Directives',
    description: 'Preprocessor directives run before compilation and include code or define macros.',
    theory: [
      '#include adds header files, #define creates constants or macros.',
      'Macros can simplify repeated code.'
    ],
    practice: [
      'Define a macro and use it in the program.',
      'Include a standard header file.'
    ],
    code: '#include <stdio.h>\n#define PI 3.14\n\nint main() {\n    printf("PI = %.2f\\n", PI);\n    return 0;\n}'
  },
  {
    key: 'header-files',
    title: 'Header Files',
    description: 'Header files contain declarations that can be shared between source files.',
    theory: [
      'Use #include to add header files to a source file.',
      'Standard headers like stdio.h provide library functions.'
    ],
    practice: [
      'Include stdio.h and print a message.',
      'Understand why headers are used.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    printf("Header files allow library functions.\\n");\n    return 0;\n}'
  },
  {
    key: 'error-handling',
    title: 'Error Handling',
    description: 'Error handling helps programs respond gracefully to failures.',
    theory: [
      'Check return values from functions like fopen and scanf.',
      'Use if statements to handle errors.'
    ],
    practice: [
      'Open a file safely and check for failure.',
      'Print an error message if the operation fails.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    FILE *file = fopen("missing.txt", "r");\n    if (!file) {\n        printf("Unable to open file.\\n");\n        return 1;\n    }\n    fclose(file);\n    return 0;\n}'
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
    showOutput('Please enter C code in the editor before running.');
    return;
  }

  showOutput('Compiling and running... Please wait.');
  document.querySelector('.output-panel')?.classList.add('running');

  try {
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: 'c', source, stdin: '' })
    });

    if (!response.ok) {
      throw new Error(`Compiler service returned status ${response.status}`);
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
