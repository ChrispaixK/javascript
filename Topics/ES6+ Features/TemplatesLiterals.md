# Javascript Template literals

>Template literals are a feature introduced in ECMAScript 6 (ES6) that allow for more flexible and convenient string formatting in JavaScript. They are enclosed by backticks (` `) instead of single or double quotes and support the embedding of expressions and multi-line strings

### 1. **Basic Syntax:**
Template literals are created using backticks (` `) instead of single or double quotes.

#### Example:

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;

console.log(greeting); // Output: Hello, John!
```

### 2. **String Interpolation:**
Template literals support string interpolation, allowing you to embed expressions directly within the string using `${ }`.

#### Example:

```javascript
const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result); // Output: The sum of 5 and 10 is 15.
```

### 3. **Multi-line Strings:**
Template literals make it easy to create multi-line strings without the need for escape characters.

#### Example:

```javascript
const multiLineString = `
    This is a
    multi-line
    string.
`;

console.log(multiLineString);
// Output:
//     This is a
//     multi-line
//     string.
```

### 4. **Expression Evaluation:**
Expressions within `${ }` are evaluated, allowing you to include variables, calculations, or function calls directly within the string.

#### Example:

```javascript
const x = 3;
const y = 4;

const resultString = `The product of ${x} and ${y} is ${x * y}.`;

console.log(resultString); // Output: The product of 3 and 4 is 12.
```

### 5. **Tagged Templates:**
Template literals can be used with a tag function, allowing you to process the template literal with a custom function.

#### Example:

```javascript
function customTag(strings, ...values) {
    console.log(strings); // Array of string parts
    console.log(values);  // Array of evaluated expressions
}

const a = 5;
const b = 10;

customTag`The sum of ${a} and ${b} is ${a + b}.`;
// Output:
// ["The sum of ", " and ", " is ", "."]
// [5, 10, 15]
```

### 6. **Escaping Characters:**
Backticks within a template literal can be escaped using a backslash (`\`) before the backtick.

#### Example:

```javascript
const escapedString = `This is a backtick: \` inside a template literal.`;

console.log(escapedString);
// Output: This is a backtick: ` inside a template literal.
```

### 7. **Use Cases:**
Template literals are useful in various scenarios:
- Creating dynamic strings with variables and expressions.
- Simplifying the creation of HTML templates in JavaScript.
- Improving readability and conciseness in string manipulation.

Template literals provide a more expressive and powerful way to work with strings in JavaScript, especially when building dynamic content or constructing complex strings.