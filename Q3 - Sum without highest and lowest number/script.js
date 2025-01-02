/**
 * Function to sum all numbers of an array except the highest and lowest values.
 *
 * Steps to Solve:
 * 1. **Input Validation**:
 *    - Check if the input is null, undefined, or has 1 or fewer elements.
 *    - If any of these conditions are true, return `0`.
 *
 * 2. **Find the Highest and Lowest Values**:
 *    - Use `Math.max(...array)` to find the maximum value.
 *    - Use `Math.min(...array)` to find the minimum value.
 *
 * 3. **Calculate the Total Sum**:
 *    - Use the `reduce` method to compute the sum of all elements in the array.
 *
 * 4. **Exclude the Highest and Lowest Values**:
 *    - Subtract the maximum and minimum values from the total sum.
 *
 * 5. **Return the Result**:
 *    - Return the resulting sum after removing the highest and lowest values.
 *
 * ## Example Walkthrough:
 *
 * ### Example 1:
 * Input: `[6, 2, 1, 8, 10]`
 * - Step 1: Validate input (valid array).
 * - Step 2: Max = 10, Min = 1.
 * - Step 3: Total sum = 27.
 * - Step 4: Exclude max and min: `27 - 10 - 1 = 16`.
 * - Output: `16`.
 *
 * ### Example 2:
 * Input: `[1, 1, 11, 2, 3]`
 * - Step 1: Validate input (valid array).
 * - Step 2: Max = 11, Min = 1.
 * - Step 3: Total sum = 18.
 * - Step 4: Exclude max and min: `18 - 11 - 1 = 6`.
 * - Output: `6`.
 *
 * ### Example 3:
 * Input: `[]`
 * - Step 1: Validate input (invalid array).
 * - Output: `0`.
 *
 * ### Example 4:
 * Input: `[1]`
 * - Step 1: Validate input (invalid array).
 * - Output: `0`.
 *
 * @param {Array<number>} array - The array of numbers.
 * @returns {number} The sum of all numbers excluding the highest and lowest. Returns 0 for invalid input.
 */

function sumArray(array) {
  // Step 1: Input Validation
  if (!array || array.length <= 1) {
    return 0; // Invalid input or insufficient elements
  }

  // Step 2: Find the highest and lowest values
  const max = Math.max(...array); // Get the maximum value
  const min = Math.min(...array); // Get the minimum value

  // Step 3: Calculate the total sum of all elements
  const totalSum = array.reduce((sum, num) => sum + num, 0);

  // Step 4: Subtract the highest and lowest values
  const result = totalSum - max - min;

  // Step 5: Return the final result
  return result;
}

// Example Usage:
console.log(sumArray([6, 2, 1, 8, 10])); // Output: 16
console.log(sumArray([1, 1, 11, 2, 3])); // Output: 6
console.log(sumArray([])); // Output: 0
console.log(sumArray(null)); // Output: 0
console.log(sumArray([1])); // Output: 0
