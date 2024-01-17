# Javascript Classes and Modules
> Classes and modules are key features introduced in ECMAScript 6 (ES6) that enhance the object-oriented programming capabilities of JavaScript and facilitate modular code organization. Let's explore each of them:

### 1. **Classes:**

#### a. **Class Declaration:**
Classes provide a more concise and structured way to define constructor functions and prototype methods.

```javascript
// Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// Creating an instance of the class
const person1 = new Person("John", 25);

// Accessing properties and calling methods
console.log(person1.name); // Output: John
person1.greet();            // Output: Hello, my name is John.
```

#### b. **Constructor and Methods:**
The `constructor` method is called when an object is instantiated from the class. Other methods defined within the class become part of the object's prototype.

#### c. **Inheritance:**
Classes support inheritance, allowing you to create a subclass that extends the functionality of a superclass.

```javascript
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call the superclass constructor
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

const student1 = new Student("Alice", 20, "A");
student1.greet();  // Output: Hello, my name is Alice.
student1.study();  // Output: Alice is studying.
```

### 2. **Modules:**

#### a. **Module Basics:**
Modules allow you to organize code into separate files, making it more maintainable and scalable.

**`module1.js`**
```javascript
// Exporting variables and functions
export const PI = 3.14;

export function square(x) {
    return x * x;
}
```

**`main.js`**
```javascript
// Importing variables and functions from a module
import { PI, square } from './module1';

console.log(PI);            // Output: 3.14
console.log(square(2));      // Output: 4
```

#### b. **Default Exports:**
A module can have a default export, making it the primary export from the module.

**`module2.js`**
```javascript
// Default export
const greeting = "Hello, World!";
export default greeting;
```

**`main.js`**
```javascript
// Importing the default export
import greeting from './module2';

console.log(greeting);       // Output: Hello, World!
```

#### c. **Combining Named and Default Exports:**
A module can combine named exports and a default export.

**`module3.js`**
```javascript
// Named exports
export const PI = 3.14;
export function square(x) {
    return x * x;
}

// Default export
const greeting = "Hello, Module!";
export default greeting;
```

**`main.js`**
```javascript
// Importing named exports and the default export
import { PI, square } from './module3';
import greeting from './module3';

console.log(PI);            // Output: 3.14
console.log(square(2));      // Output: 4
console.log(greeting);       // Output: Hello, Module!
```

#### d. **Module Features:**
- Modules help in avoiding global namespace pollution.
- Code is encapsulated within modules, preventing unintended variable conflicts.
- Modules can be reused across different parts of an application.

### 3. **Use Cases:**
- **Classes:**
  - Representing real-world entities with encapsulated data and behavior.
  - Promoting code organization and maintainability through inheritance.

- **Modules:**
  - Organizing code into separate files for better structure.
  - Encapsulating related functionality and data within a module.
  - Exporting and importing functionality across different parts of an application.

Both classes and modules contribute to writing more maintainable, organized, and scalable JavaScript code.