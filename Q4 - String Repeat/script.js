/**
 * Function to repeat a string a specified number of times.
 *
 * Steps:
 * 1. **Create an empty string to store the result (for the manual implementation)**.
 * 2. **Repeat the string**:
 *    - Use the `repeat` method for simplicity and performance.
 *    - Alternatively, use a loop to manually concatenate the string to the result for each iteration.
 * 3. **Return the final concatenated string**:
 *    - This is either directly from `repeat` or the manually built result.
 *
 * @param {number} num - The number of times to repeat the string.
 * @param {string} string - The string to repeat.
 * @returns {string} The repeated string.
 */

// Implementation using the built-in `repeat` method
function numberToString(num, string) {
  return string.repeat(num);
}

// Alternative implementation using a manual loop
function numberToStringManual(num, string) {
  let result = ""; // Step 1: Initialize an empty result string
  for (let i = 0; i < num; i++) {
    result += string; // Step 2: Add the string to the result in each iteration
  }
  return result; // Step 3: Return the final result
}

// Example Usage
console.log(numberToString(5, "h")); // Output: "hhhhh"
console.log(numberToString(3, "ab")); // Output: "ababab"
console.log(numberToString(0, "test")); // Output: ""

console.log(numberToStringManual(5, "h")); // Output: "hhhhh"
console.log(numberToStringManual(3, "ab")); // Output: "ababab"
console.log(numberToStringManual(0, "test")); // Output: ""
