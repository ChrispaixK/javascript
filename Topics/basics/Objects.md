# Objects in Javascript

### 1. **Creating Objects:**
   Objects in JavaScript are created using curly braces `{}`. They can contain key-value pairs, where each key is a string (or a symbol) and each value can be any data type.

   ```javascript
   // Empty object
   const emptyObject = {};

   // Object with properties
   const person = {
       name: "John",
       age: 25,
       city: "New York"
   };
   ```

### 2. **Accessing Properties:**
   You can access the properties of an object using dot notation (`object.property`) or bracket notation (`object["property"]`).

   ```javascript
   const person = {
       name: "John",
       age: 25,
       city: "New York"
   };

   console.log(person.name); // Output: John
   console.log(person["age"]); // Output: 25
   ```

### 3. **Adding and Modifying Properties:**
   You can add new properties or modify existing ones.

   ```javascript
   const person = {
       name: "John",
       age: 25,
       city: "New York"
   };

   // Adding a new property
   person.gender = "Male";

   // Modifying an existing property
   person.age = 26;

   console.log(person);
   ```

### 4. **Nested Objects:**
   Objects can contain other objects as properties.

   ```javascript
   const person = {
       name: "John",
       address: {
           street: "123 Main St",
           city: "New York"
       }
   };

   console.log(person.address.street); // Output: 123 Main St
   ```

### 5. **Object Methods:**
   Properties in an object can also be functions, making them methods.

   ```javascript
   const calculator = {
       add: function (a, b) {
           return a + b;
       },
       subtract: function (a, b) {
           return a - b;
       }
   };

   console.log(calculator.add(5, 3)); // Output: 8
   ```

### 6. **Object Destructuring:**
   You can use object destructuring to extract properties and assign them to variables.

   ```javascript
   const person = {
       name: "John",
       age: 25,
       city: "New York"
   };

   const { name, age } = person;

   console.log(name); // Output: John
   console.log(age); // Output: 25
   ```

### 7. **Object Spread Operator (ES6+):**
   The spread operator (`...`) can be used to create a shallow copy of an object or merge multiple objects.

   ```javascript
   const person = {
       name: "John",
       age: 25,
       city: "New York"
   };

   const updatedPerson = { ...person, age: 26 };

   console.log(updatedPerson);
   ```

### 8. **Object.keys(), Object.values(), Object.entries():**
   These methods provide ways to iterate over the properties of an object.

   ```javascript
   const person = {
       name: "John",
       age: 25,
       city: "New York"
   };

   const keys = Object.keys(person);
   const values = Object.values(person);
   const entries = Object.entries(person);

   console.log(keys); // Output: ["name", "age", "city"]
   console.log(values); // Output: ["John", 25, "New York"]
   console.log(entries); // Output: [["name", "John"], ["age", 25], ["city", "New York"]]
   ```

### 9. **Checking if a Property Exists:**
   You can use the `in` operator or the `hasOwnProperty()` method to check if a property exists in an object.

   ```javascript
   const person = {
       name: "John",
       age: 25,
       city: "New York"
   };

   console.log("name" in person); // Output: true
   console.log(person.hasOwnProperty("gender")); // Output: false
   ```

### 10. **Prototype and `Object.create()`:**
   Objects in JavaScript have a prototype, and you can create objects with a specific prototype using `Object.create()`.

   ```javascript
   const animal = {
       sound: "Roar",
       makeSound: function () {
           console.log(this.sound);
       }
   };

   const lion = Object.create(animal);
   lion.makeSound(); // Output: Roar
   ```

These are some foundational concepts related to objects in JavaScript. Understanding how to work with objects is crucial for developing robust and maintainable JavaScript code.