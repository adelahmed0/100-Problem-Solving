/**
 * Function to find the opposite (additive inverse) of a number.
 *
 * Steps:
 * 1. **Understand the Problem**:
 *    - The opposite of a number `x` is `-x`.
 *    - If the input is positive, return the negative equivalent.
 *    - If the input is negative, return the positive equivalent.
 *
 * 2. **Return the Opposite**:
 *    - Use the unary minus operator `-` to negate the input number.
 *    - Return the result.
 *
 * @param {number} number - The input number (integer or decimal).
 * @returns {number} The opposite (additive inverse) of the input number.
 *
 * @example
 * console.log(opposite(1));    // Output: -1
 * console.log(opposite(14));   // Output: -14
 * console.log(opposite(-34));  // Output: 34
 */

function opposite(number) {
  return -number; // Negate the input number
}

// Example Usage:
console.log(opposite(1)); // Output: -1
console.log(opposite(14)); // Output: -14
console.log(opposite(-34)); // Output: 34
console.log(opposite(0)); // Output: -0
console.log(opposite(-0)); // Output: 0
