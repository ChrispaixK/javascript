# JavaScript Operators

### 1. Arithmetic Operators:

These operators perform mathematical calculations.

- **Addition (+):**
  ```javascript
  let result = 5 + 3; // result is 8
  ```

- **Subtraction (-):**
  ```javascript
  let result = 5 - 3; // result is 2
  ```

- **Multiplication (*):**
  ```javascript
  let result = 5 * 3; // result is 15
  ```

- **Division (/):**
  ```javascript
  let result = 6 / 2; // result is 3
  ```

- **Modulus (%):**
  ```javascript
  let remainder = 7 % 2; // remainder is 1 (7 divided by 2 leaves a remainder of 1)
  ```

### 2. Assignment Operators:

These operators assign values to variables.

- **Assignment (=):**
  ```javascript
  let x = 10; // x is assigned the value 10
  ```

- **Addition Assignment (+=):**
  ```javascript
  let x = 5;
  x += 3; // equivalent to x = x + 3; // x is now 8
  ```

### 3. Comparison Operators:

These operators compare values and return a Boolean result.

- **Equal (==):**
  ```javascript
  5 == "5"; // true (loose equality, type coercion)
  ```

- **Strict Equal (===):**
  ```javascript
  5 === "5"; // false (strict equality, no type coercion)
  ```

- **Not Equal (!=):**
  ```javascript
  5 != "5"; // false (loose inequality, type coercion)
  ```

- **Strict Not Equal (!==):**
  ```javascript
  5 !== "5"; // true (strict inequality, no type coercion)
  ```

### 4. Logical Operators:

These operators perform logical operations.

- **AND (&&):**
  ```javascript
  if (x > 0 && x < 10) {
    // true if x is greater than 0 and less than 10
  }
  ```

- **OR (||):**
  ```javascript
  if (x > 0 || y > 0) {
    // true if either x or y is greater than 0
  }
  ```

- **NOT (!):**
  ```javascript
  if (!isTrue) {
    // true if isTrue is false
  }
  ```

### 5. Bitwise Operators:

These operators perform bit-level operations.

- **Bitwise AND (&):**
  ```javascript
  let result = 5 & 3; // result is 1 (binary 101 & 011 = 001)
  ```

- **Bitwise OR (|):**
  ```javascript
  let result = 5 | 3; // result is 7 (binary 101 | 011 = 111)
  ```

- **Bitwise XOR (^):**
  ```javascript
  let result = 5 ^ 3; // result is 6 (binary 101 ^ 011 = 110)
  ```

- **Bitwise NOT (~):**
  ```javascript
  let result = ~5; // result is -6 (binary ~00000101 = 11111010, two's complement)
  ```

These are some of the basic operators in JavaScript. Understanding and using them effectively is essential for writing JavaScript code.