# Javascript Custom errors

In JavaScript, you can create custom errors by extending the built-in `Error` object. Creating custom errors is useful when you want to represent specific types of errors in your application and provide meaningful information about what went wrong. Here's how you can define and use custom errors:

### Creating Custom Errors:

To create a custom error, you can use the `class` syntax to define a new class that extends the built-in `Error` object. The constructor of your custom error class can accept parameters to customize the error message or additional properties.

```javascript
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyCustomError';
  }
}

// Example usage
try {
  throw new MyCustomError('This is a custom error message');
} catch (error) {
  if (error instanceof MyCustomError) {
    console.error(`Caught a custom error: ${error.message}`);
  } else {
    console.error('Caught an unexpected error:', error);
  }
}
```

In this example, `MyCustomError` is a custom error class that extends the `Error` object. It sets the `name` property to 'MyCustomError' for better identification.

### Adding Custom Properties:

You can add custom properties to your custom error class to provide additional information about the error.

```javascript
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

// Example usage
try {
  throw new ValidationError('username', 'Username is required');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation error in field ${error.field}: ${error.message}`);
  } else {
    console.error('Caught an unexpected error:', error);
  }
}
```

### Asynchronous Custom Errors:

When working with asynchronous code and promises, you can create custom errors that extend the `Error` class and handle them in `catch` blocks.

```javascript
class APICustomError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'APICustomError';
    this.status = status;
  }
}

// Example usage with a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an API error
    const status = 404;
    const message = 'Data not found';

    reject(new APICustomError(status, message));
  });
}

// Using fetchData with a catch block
fetchData()
  .catch((error) => {
    if (error instanceof APICustomError) {
      console.error(`API error: Status ${error.status}, ${error.message}`);
    } else {
      console.error('Caught an unexpected error:', error);
    }
  });
```

### Best Practices:

1. **Use Descriptive Names:** Choose meaningful names for your custom error classes to clearly indicate the type of error.

2. **Include Relevant Information:** Add custom properties to provide additional information about the error, making it easier to handle and debug.

3. **Use `instanceof` for Type Checking:** When catching errors, use `instanceof` to check whether the caught error is an instance of your custom error class.

4. **Inherit from `Error`:** Always extend the built-in `Error` object when creating custom errors to maintain compatibility with standard error-handling practices.
