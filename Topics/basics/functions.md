# Functions in Javascript

### Function Declaration:

In JavaScript, you can declare a function using the `function` keyword. Here's the basic syntax:

```javascript
function functionName(parameter1, parameter2, ...) {
    // Function body
    // Code to be executed when the function is called
    return returnValue; // Optional
}
```

- **Function Name:** A name that identifies the function.
- **Parameters:** Input values that the function can accept (optional).
- **Function Body:** The block of code that gets executed when the function is called.
- **Return Statement:** Optional. Specifies the value to be returned from the function.

Example:

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!
```

### Function Expression:

Another way to create a function is through a function expression. This involves assigning an anonymous function to a variable:

```javascript
const functionName = function(parameter1, parameter2, ...) {
    // Function body
    // Code to be executed when the function is called
    return returnValue; // Optional
};
```

Example:

```javascript
const greet = function(name) {
    return "Hello, " + name + "!";
};

console.log(greet("Jane")); // Output: Hello, Jane!
```

### Arrow Functions (ES6+):

Arrow functions provide a more concise syntax for writing functions, especially useful for short functions. They are introduced in ECMAScript 6 (ES6):

```javascript
const functionName = (parameter1, parameter2, ...) => {
    // Function body
    // Code to be executed when the function is called
    return returnValue; // Optional
};
```

Example:

```javascript
const greet = name => "Hello, " + name + "!";

console.log(greet("Alice")); // Output: Hello, Alice!
```

### Function Invocation:

Calling or invoking a function is done using parentheses `()` after the function name. If the function has parameters, you provide values inside the parentheses:

```javascript
function addNumbers(a, b) {
    return a + b;
}

const result = addNumbers(3, 5);
console.log(result); // Output: 8
```

### Scope and Closure:

Functions have their own scope. Variables declared inside a function are local to that function, while variables declared outside any function have global scope. Additionally, JavaScript supports closures, which means a function can access variables from its outer (enclosing) scope.

Example:

```javascript
function outer() {
    const outerVar = "I'm outer!";

    function inner() {
        const innerVar = "I'm inner!";
        console.log(outerVar); // Accessing outerVar from the outer scope
    }

    inner();
}

outer();
```

### Callback Functions:

In JavaScript, functions can be passed as arguments to other functions. These functions are called callback functions. They are commonly used in asynchronous operations and event handling.

Example:

```javascript
function doSomething(callback) {
    // Performing some task
    console.log("Task done!");

    // Calling the callback function
    callback();
}

function callbackFunction() {
    console.log("Callback executed!");
}

doSomething(callbackFunction);
```

These are some fundamental aspects of functions in JavaScript. They play a crucial role in creating modular, reusable, and organized code.