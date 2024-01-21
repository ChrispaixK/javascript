# Javascript Unit Testing

Unit testing is a crucial practice in software development where individual units or components of a program are tested to ensure they work as intended. Jest is a popular JavaScript testing framework that makes it easy to write and run tests for your code. It is widely used in both frontend and backend JavaScript development. Let's go through the basics of unit testing with Jest:

### Installation:

First, you need to install Jest in your project. You can do this using npm (Node Package Manager) if you're working with Node.js:

```bash
npm install --save-dev jest
```

### Writing Tests:

Let's say you have a simple function that adds two numbers, and you want to test it. Create a file named `math.js`:

```javascript
// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

Now, create a test file named `math.test.js`:

```javascript
// math.test.js
const add = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
```

### Running Tests:

Add a script to your `package.json` file to run Jest:

```json
// package.json
{
  "scripts": {
    "test": "jest"
  }
}
```

Now, run your tests:

```bash
npm test
```

Jest will execute your tests, and you should see the output indicating whether your tests passed or failed.

### Basic Concepts:

1. **Test Suites and Test Cases:**
   - A test suite is a collection of test cases that test a specific feature or functionality.
   - A test case (written using `test` or `it` function) is an individual test.

2. **Matchers:**
   - Matchers are functions that check values against expectations. Jest provides a variety of matchers (e.g., `toBe`, `toEqual`, `toMatch`, etc.).

3. **Setup and Teardown:**
   - You can use `beforeEach`, `afterEach`, `beforeAll`, and `afterAll` to set up and tear down resources for your tests.

4. **Mocks and Spies:**
   - Jest provides utilities for mocking and spying on functions and objects.

### Example with Asynchronous Code:

If you're dealing with asynchronous code (e.g., Promises, callbacks), Jest has built-in support for handling it. Here's a simple example:

```javascript
// asyncFunction.js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data');
    }, 1000);
  });
}

module.exports = fetchData;
```

```javascript
// asyncFunction.test.js
const fetchData = require('./asyncFunction');

test('fetchData resolves to "Data"', async () => {
  const data = await fetchData();
  expect(data).toBe('Data');
});
```

### Coverage Reporting:

Jest can also generate coverage reports to show which parts of your code are covered by tests. To enable coverage reporting, modify your `package.json` script:

```json
// package.json
{
  "scripts": {
    "test": "jest --coverage"
  }
}
```

When you run `npm test`, Jest will generate a coverage report in the `coverage` directory.

### Resources:

- [Jest Documentation](https://jestjs.io/docs/en/getting-started)
- [Jest GitHub Repository](https://github.com/facebook/jest)

### Best Practices:

1. **Keep Tests Close to Code:**
   - Place test files alongside the code they are testing.

2. **Write Descriptive Tests:**
   - Clearly describe what each test is checking.

3. **Isolate Tests:**
   - Tests should not depend on the order of execution or the outcome of other tests.

4. **Use Mocks Wisely:**
   - Use mocks and spies to isolate the code being tested.

5. **Run Tests Frequently:**
   - Regularly run tests to catch issues early in development.

Unit testing is an essential part of maintaining code quality and catching bugs early in the development process. Jest, with its simplicity and powerful features, is widely used for JavaScript unit testing.