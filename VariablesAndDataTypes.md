# JavaScript Variables and Data Types

## Variables

In JavaScript, variables are used to store and manipulate data. You can declare a variable using the `var`, `let`, or `const` keyword. Here's a brief overview:

### `var`: 
- Historically used to declare variables, but it has some scoping issues.
- Variables declared with `var` are function-scoped, which means they are only visible within the function where they are declared.

```javascript
var x = 10;
```

### `let`: 
- Introduced in ECMAScript 6 (ES6) to address the scoping issues of `var`.
- `let` allows you to declare variables with block-scoping, making them accessible only within the block where they are defined.

```javascript
let y = "Hello";
```

### `const`: 
- Also introduced in ES6, used to declare constants.
- Variables declared with `const` cannot be reassigned after they are initialized.

```javascript
const PI = 3.14;
```

## Data Types

JavaScript has several built-in data types, broadly categorized into primitive and object types.

### Primitive Data Types

1. **Number:**
   - Represents numeric values.
   ```javascript
   let num = 42;
   ```

2. **String:**
   - Represents textual data.
   ```javascript
   let str = "Hello, World!";
   ```

3. **Boolean:**
   - Represents true or false values.
   ```javascript
   let isTrue = true;
   ```

4. **Undefined:**
   - Represents the absence of a value.
   ```javascript
   let undefinedVar;
   ```

5. **Null:**
   - Represents the absence of any object value.
   ```javascript
   let nullVar = null;
   ```

6. **Symbol:**
   - Introduced in ES6, represents unique identifiers.
   ```javascript
   let symbol = Symbol('unique');
   ```

### Object Data Type

1. **Object:**
   - A collection of key-value pairs.
   ```javascript
   let person = {
     name: "John",
     age: 30,
     city: "New York"
   };
   ```

2. **Array:**
   - An ordered list of values.
   ```javascript
   let colors = ["red", "green", "blue"];
   ```

3. **Function:**
   - A reusable block of code.
   ```javascript
   function greet(name) {
     console.log("Hello, " + name + "!");
   }
   ```

This is a basic overview of JavaScript variables and data types. 