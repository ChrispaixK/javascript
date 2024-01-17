# JavaScript Control Structures

### 1. If Statements:

An `if` statement is used to make decisions in your code based on a condition. If the condition evaluates to true, the code block inside the `if` statement is executed.

```javascript
let x = 10;

if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}
```

In this example, if `x` is greater than 5, the first block of code inside the `if` statement is executed; otherwise, the block inside the `else` statement is executed.

You can also use the `else if` statement to add more conditions:

```javascript
let y = 8;

if (y > 10) {
    console.log("y is greater than 10");
} else if (y > 5) {
    console.log("y is greater than 5 but not 10");
} else {
    console.log("y is 5 or less");
}
```

### 2. Loops:

Loops are used to repeatedly execute a block of code as long as a specified condition is true. There are different types of loops in JavaScript, but we'll cover the `for` loop and `while` loop here.

#### a. For Loop:

A `for` loop is often used when you know the number of iterations in advance.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}
```

This loop will iterate five times, and in each iteration, it will log the message with the current value of `i`.

#### b. While Loop:

A `while` loop is used when you don't know the number of iterations in advance, and the loop continues as long as a specified condition is true.

```javascript
let counter = 0;

while (counter < 3) {
    console.log("Loop iteration " + counter);
    counter++;
}
```

In this example, the loop will iterate as long as the `counter` variable is less than 3.

### 3. Do-While Loop:

A `do-while` loop is similar to a `while` loop, but it guarantees that the block of code is executed at least once, as the condition is checked after the block.

```javascript
let i = 0;

do {
    console.log("Iteration " + i);
    i++;
} while (i < 3);
```

This loop will execute the block at least once, and then it will check the condition.

These control structures allow you to create more dynamic and flexible programs by controlling the flow of execution based on conditions or by repeating certain tasks.