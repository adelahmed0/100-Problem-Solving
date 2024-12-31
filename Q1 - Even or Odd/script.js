/**
 * Function to determine if a given integer is even or odd.
 *
 * @param {number} number - The integer to check.
 * @returns {string} Returns "Even" if the number is even, or "Odd" if the number is odd.
 *
 * @example
 * // Example 1
 * console.log(evenOdd(2)); // "Even"
 *
 * @example
 * // Example 2
 * console.log(evenOdd(3)); // "Odd"
 *
 * @example
 * // Example 3
 * console.log(evenOdd(0)); // "Even"
 */
function evenOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Test cases
console.log(evenOdd(2)); // "Even"
console.log(evenOdd(3)); // "Odd"
console.log(evenOdd(0)); // "Even"
console.log(evenOdd(-1)); // "Odd"
console.log(evenOdd(-2)); // "Even"
