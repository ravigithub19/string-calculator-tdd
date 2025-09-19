# String Calculator TDD Kata
## Overview:
This project is a straightforward implementation of the String Calculator kata using Test-Driven Development (TDD), aimed at showcasing software craftsmanship through clean, maintainable, and thoroughly tested code built with TDD principles.

## Requirements:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ravigithub19/string-calculator-tdd.git
   cd string-calculator-tdd
   ```

1. **Install dependencies:**

    ```bash
    npm install
    ```

1. **Run the tests:**

    ```bash
    npm test
    ```

## Project Structure

- **`src/StringCalculator.ts`**: Core implementation of the String Calculator.
- **`test/StringCalculator.test.ts`**: Contains the unit tests for the String Calculator.
- **`tsconfig.json`**: TypeScript configuration file.
- **`package.json`**: Node.js project configuration file.

## Directory Layout

```bash
/string-calculator-tdd
├── src
│   └── StringCalculator.ts
├── test
│   └── StringCalculator.test.ts
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 🧪 Features Implemented

The ```add``` method in ```StringCalculator``` supports:

1. Empty string → returns 0
    ```bash 
    calculator.add("") // 0
    ```

2. Single number input → returns that number
    ```bash
    calculator.add("5") // 5
    ```

3. Two numbers (comma-separated) → returns their sum
    ```bash
    calculator.add("1,2") // 3
    ```

4. Multiple numbers → handles an unknown amount of numbers
    ```bash
    calculator.add("1,2,3,4") // 10
    ```

5. Newline as a delimiter
    ```bash
    calculator.add("1\n2,3") // 6
    ```

6. Custom single-character delimiter
    ```bash
    calculator.add("//;\n1;2") // 3
    ```

7. Delimiters of any length
    ```bash
    calculator.add("//[***]\n1***2***3") // 6
    calculator.add("//[abc]\n4abc5abc6") // 15
    ```

8. Multiple delimiters of any length
    ```bash
    calculator.add("//[***][%%]\n1***2%%3") // 6
    calculator.add("//[abc][---]\n4abc5---6") // 15
    ```

9. Negative numbers throw an error
    ```bash
    calculator.add("1,-2,3")
    // Error: "negative numbers not allowed -2"
    ```

10. Numbers greater than 1000 are ignored
    ```bash
    calculator.add("2,1001") // 2
    calculator.add("1000,2") // 1002
    ```

## TDD Workflow

This project was built using the Test-Driven Development (TDD) methodology:

1. <span style="color:red">**Red**</span> – Write a failing test.  
2. <span style="color:green">**Green**</span> – Implement the minimum code required to make the test pass.  
3. <span style="color:orange">**Refactor**</span> – Improve the code while ensuring all tests still pass.  

## 🏆 Key Takeaways

- Practiced **incremental development** with TDD.

- Implemented **custom delimiters** (single, multi-char, multiple).

- Added validation for **negative numbers** and **ignored >1000 values**.

- Produced **clean, maintainable**, and **testable** code.