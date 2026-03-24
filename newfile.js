// Sample JavaScript file

// Function to greet a user
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Example usage
console.log(greetUser("Developer"));

// Simple array manipulation
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// Object example
const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log("User:", user);

// Export for use in other modules
module.exports = { greetUser, user };