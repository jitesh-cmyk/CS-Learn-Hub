window.subjectCourse = {
  subject: "Computer Organization",
  modules: [
    ["Introduction to Computer Organization", "What is Computer Organization?|What is Computer Architecture?|Computer Organization vs Architecture|Functional Units of Computer|Basic Computer System|Characteristics of Computer|Types of Computers|Computer Generations|Block Diagram of Computer"],
    ["Data Representation", "Number Systems|Decimal Number System|Binary Number System|Octal Number System|Hexadecimal Number System|Number System Conversion|Binary Addition|Binary Subtraction|1's Complement|2's Complement|Signed Numbers|Unsigned Numbers|Integer Representation|Floating Point Representation|IEEE 754 Floating Point"],
    ["Computer Arithmetic", "Binary Arithmetic|Binary Addition|Binary Subtraction|Binary Multiplication|Binary Division|Signed Arithmetic|1's Complement Arithmetic|2's Complement Arithmetic|Overflow|Arithmetic Logic Unit (ALU)"],
    ["Boolean Algebra & Logic Gates", "Boolean Algebra|Boolean Laws|Boolean Expressions|AND Gate|OR Gate|NOT Gate|NAND Gate|NOR Gate|XOR Gate|XNOR Gate|Universal Gates|Truth Tables|Logic Gate Applications"],
    ["Combinational Circuits", "What are Combinational Circuits?|Half Adder|Full Adder|Half Subtractor|Full Subtractor|Parallel Adder|Binary Adder|Multiplexer|Demultiplexer|Encoder|Decoder|Comparator"],
    ["Sequential Circuits", "What are Sequential Circuits?|Latches|Flip-Flops|SR Flip-Flop|JK Flip-Flop|D Flip-Flop|T Flip-Flop|Master-Slave Flip-Flop|Registers|Shift Registers|Counters|Synchronous Counter|Asynchronous Counter"],
    ["Basic Computer Organization", "CPU|ALU|Control Unit|Registers|Memory Unit|Input Unit|Output Unit|System Bus|Data Bus|Address Bus|Control Bus|Block Diagram of CPU"],
    ["CPU Organization", "Central Processing Unit|CPU Registers|General Purpose Registers|Special Purpose Registers|Accumulator|Program Counter|Instruction Register|Memory Address Register|Memory Data Register|Stack Pointer|Status Register|Register Organization"],
    ["Instruction Set & Instruction Cycle", "What is an Instruction?|Instruction Format|Opcode|Operand|Instruction Types|Zero Address Instruction|One Address Instruction|Two Address Instruction|Three Address Instruction|Instruction Cycle|Fetch Cycle|Decode Cycle|Execute Cycle|Interrupt Cycle"],
    ["Instruction Addressing Modes", "What is Addressing Mode?|Immediate Addressing|Direct Addressing|Indirect Addressing|Register Addressing|Register Indirect Addressing|Indexed Addressing|Relative Addressing|Base Register Addressing|Auto Increment|Auto Decrement"],
    ["Control Unit", "What is Control Unit?|Functions of Control Unit|Hardwired Control Unit|Microprogrammed Control Unit|Control Signals|Control Memory|Microinstruction|Microprogram|Hardwired vs Microprogrammed Control"],
    ["Memory Organization", "What is Computer Memory?|Memory Hierarchy|Primary Memory|Secondary Memory|RAM|ROM|SRAM|DRAM|PROM|EPROM|EEPROM|Flash Memory|Memory Characteristics|Memory Capacity|Memory Addressing"],
    ["Cache Memory", "What is Cache Memory?|Need for Cache|Cache Levels|L1 Cache|L2 Cache|L3 Cache|Cache Hit|Cache Miss|Hit Ratio|Cache Mapping|Direct Mapping|Associative Mapping|Set Associative Mapping|Cache Replacement"],
    ["Secondary Storage", "Secondary Memory|Hard Disk|SSD|Optical Disk|CD|DVD|Blu-ray|Magnetic Tape|Flash Storage|Storage Comparison"],
    ["Input and Output Organization", "Input/Output System|I/O Devices|I/O Interface|I/O Ports|I/O Controllers|Input Devices|Output Devices|Memory-Mapped I/O|Isolated I/O"],
    ["I/O Data Transfer", "Programmed I/O|Interrupt-Driven I/O|Direct Memory Access (DMA)|DMA Controller|DMA Transfer|Programmed I/O vs Interrupt I/O|Interrupt vs DMA"],
    ["Interrupts", "What is an Interrupt?|Need for Interrupts|Hardware Interrupt|Software Interrupt|Maskable Interrupt|Non-Maskable Interrupt|Vectored Interrupt|Non-Vectored Interrupt|Interrupt Handling|Interrupt Priority"],
    ["Bus Organization", "What is a Bus?|System Bus|Data Bus|Address Bus|Control Bus|Bus Structure|Single Bus Organization|Multiple Bus Organization|Bus Arbitration|Synchronous Bus|Asynchronous Bus"],
    ["Pipelining", "What is Pipelining?|Need for Pipelining|Instruction Pipeline|Pipeline Stages|Pipeline Performance|Pipeline Speedup|Pipeline Hazards|Structural Hazard|Data Hazard|Control Hazard|Solutions to Pipeline Hazards"],
    ["RISC and CISC", "What is RISC?|RISC Characteristics|RISC Architecture|What is CISC?|CISC Characteristics|CISC Architecture|RISC vs CISC|Advantages and Disadvantages"],
    ["Parallel Processing", "What is Parallel Processing?|Need for Parallel Processing|Types of Parallelism|Instruction-Level Parallelism|Data-Level Parallelism|Multiprocessor Systems|Multicore Processors|SIMD|MIMD"],
    ["Multiprocessor & Multicore Systems", "Multiprocessor System|Single Processor vs Multiprocessor|Shared Memory|Distributed Memory|Multicore Processor|Advantages of Multicore|Symmetric Multiprocessing|Multithreading"],
    ["Performance of Computer", "Computer Performance|CPU Performance|Clock Speed|Clock Cycle|Instruction Count|CPI|Execution Time|MIPS|FLOPS|Benchmarking|Performance Factors|Amdahl's Law"],
    ["Microprocessor Basics", "What is a Microprocessor?|Microprocessor Architecture|CPU vs Microprocessor|Registers|ALU|Control Unit|Instruction Set|Microprocessor Applications"],
    ["Modern Computer Architecture", "Von Neumann Architecture|Harvard Architecture|Modified Harvard Architecture|Von Neumann vs Harvard|Modern CPU Architecture|Multicore Architecture|GPU Basics|CPU vs GPU"],
    ["Computer Architecture Security Basics", "Hardware Security|Secure Boot|Trusted Execution|Memory Protection|Privilege Levels|Hardware-based Security|Basic Side-Channel Concepts"],
    ["Practical / Numerical Topics", "Number System Conversion|1's & 2's Complement Problems|Binary Arithmetic|Boolean Simplification|Logic Gate Problems|Cache Mapping Problems|Addressing Mode Problems|CPU Performance Calculations|Pipeline Problems|Memory Capacity Calculations"]
  ].map(([title, topics]) => ({
    title,
    topics: topics.split("|").map((topic) => topic.trim())
  }))
};
