/**
 * Function to ensure a number is negative.
 *
 * Steps:
 * 1. **Check if the number is already negative**:
 *    - If the input number is less than `0`, return it as is.
 *
 * 2. **Make the number negative if it’s positive or zero**:
 *    - Use the unary minus operator `-` to convert the positive number to its negative equivalent.
 *
 * 3. **Handle edge cases**:
 *    - If the input is `0`, return `0` since negative zero has no practical use.
 *
 * @param {number} num - The input number (integer or decimal).
 * @returns {number} The negative version of the input number.
 *
 * @example
 * console.log(makeNegative(1));    // Output: -1
 * console.log(makeNegative(-5));   // Output: -5
 * console.log(makeNegative(0));    // Output: 0
 * console.log(makeNegative(0.12)); // Output: -0.12
 */

function makeNegative(num) {
  return num < 0 ? num : -num; // If negative, return as is; otherwise, negate it
}

// Example Usage:
console.log(makeNegative(1)); // Output: -1
console.log(makeNegative(-5)); // Output: -5
console.log(makeNegative(0)); // Output: 0
console.log(makeNegative(0.12)); // Output: -0.12
