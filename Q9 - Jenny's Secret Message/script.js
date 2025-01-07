/**
 * Function to return a greeting for a user with a special case for "Johnny".
 *
 * Steps:
 * 1. **Check if the name is "Johnny"**:
 *    - Use a ternary operator to compare the input name with "Johnny".
 *    - If the name is "Johnny", return "Hello, my love!".
 *
 * 2. **Return a generic greeting for other names**:
 *    - If the name is not "Johnny", return "Hello, [name]!".
 *
 * @param {string} name - The name of the person to greet.
 * @returns {string} A personalized greeting for "Johnny" or a generic greeting for others.
 *
 * @example
 * console.log(greet("Johnny")); // Output: "Hello, my love!"
 * console.log(greet("Jenny"));  // Output: "Hello, Jenny!"
 */

function greet(name) {
    return name !== "Johnny" ? "Hello, " + name + "!" : "Hello, my love!";
}

// Example Usage:
console.log(greet("Johnny")); // Output: "Hello, my love!"
console.log(greet("Jenny")); // Output: "Hello, Jenny!"
console.log(greet("Alex")); // Output: "Hello, Alex!"
console.log(greet("Tom")); // Output: "Hello, Tom!"
