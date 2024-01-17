# Javascript Closures
>Understanding closures is key to writing efficient and expressive code. Let's break down what closures are and how they work

### 1. **Definition:**
A closure is the combination of a function and the lexical environment within which that function was declared. In simpler terms, a closure allows a function to access variables from its outer (enclosing) scope even after that scope has finished executing.

### 2. **Creating a Closure:**
A closure is created when a function is defined within another function, and the inner function refers to variables from the outer function.

```javascript
function outerFunction() {
    let outerVariable = "I am from outer";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: I am from outer
```

In this example, `innerFunction` forms a closure because it references `outerVariable` from its lexical scope, even after `outerFunction` has completed execution.

### 3. **Preserving State:**
Closures are often used to create private variables and preserve state between function calls.

```javascript
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); // Output: 1
increment(); // Output: 2
```

Here, the `counter` function returns a closure. The inner function (`increment`) has access to the `count` variable, and each time it's called, the count is incremented and printed.

### 4. **Data Encapsulation:**
Closures can be used to encapsulate and protect data.

```javascript
function createPerson(name) {
    let age;

    return {
        setName: function(newName) {
            name = newName;
        },
        setAge: function(newAge) {
            age = newAge;
        },
        getInfo: function() {
            return `Name: ${name}, Age: ${age}`;
        }
    };
}

const person = createPerson("John");
person.setAge(25);
console.log(person.getInfo()); // Output: Name: John, Age: 25
```

In this example, the `createPerson` function returns an object with methods that can be used to manipulate the internal state. The inner variables (`name` and `age`) are encapsulated within the closure, providing a form of data privacy.

### 5. **Callbacks and Functional Programming:**
Closures are commonly used in callbacks, allowing functions to remember and access the surrounding scope.

```javascript
function doSomethingAsync(callback) {
    setTimeout(function() {
        console.log("Task done!");
        callback();
    }, 1000);
}

doSomethingAsync(function() {
    console.log("Callback executed!");
});
```

Here, the anonymous function passed as a callback forms a closure, capturing the surrounding scope and enabling access to variables from that scope.

### 6. **Common Pitfalls:**
- **Memory Consumption:** Be mindful of memory consumption, especially when closures are used in long-lived contexts. Unused variables captured in closures may prevent them from being garbage-collected.

- **Loop Issues:** Closures within loops can lead to unexpected behavior due to the asynchronous nature of JavaScript. Proper use of `let` or creating a closure with a function can help mitigate this.

### 7. **Use Cases:**
- **Module Pattern:** Creating private and encapsulated modules.
  
- **Callback Functions:** Passing functions as arguments to other functions.

- **Event Handlers:** Handling events with access to the enclosing scope.

- **Partial Application:** Creating functions with predefined arguments.

Closures are a powerful tool in JavaScript, providing a mechanism for creating modular and encapsulated code. As you become more familiar with closures, you'll find various use cases where they can enhance your code structure and maintainability.