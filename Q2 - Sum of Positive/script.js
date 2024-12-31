/**
 * Function to calculate the sum of all positive numbers in an array.
 *
 * Steps to Solve:
 * 1. **Understand the Problem**:
 *    - Input: An array of numbers.
 *    - Output: The sum of all positive numbers in the array. If no positive numbers exist, return 0.
 *
 * 2. **Iterate Through the Array**:
 *    - Use a method to loop through all elements in the array.
 *    - Accumulate the sum of positive numbers as you iterate.
 *
 * 3. **Check Each Number**:
 *    - For each number in the array:
 *      - If the number is greater than 0 (positive), add it to the cumulative sum.
 *      - If the number is 0 or negative, ignore it.
 *
 * 4. **Handle Edge Cases**:
 *    - Empty array: Return 0 since there are no numbers to sum.
 *    - No positive numbers: Return 0 if all numbers in the array are non-positive.
 *
 * 5. **Return the Final Sum**:
 *    - After processing all numbers, return the cumulative sum.
 *
 * ## Example Walkthrough:
 *
 * ### Example 1:
 * Input: `[1, -4, 7, 12]`
 * Steps:
 * - Start with `sum = 0`.
 * - Add `1` (positive) → `sum = 1`.
 * - Skip `-4` (negative).
 * - Add `7` (positive) → `sum = 8`.
 * - Add `12` (positive) → `sum = 20`.
 * Output: `20`.
 *
 * ### Example 2:
 * Input: `[-1, -2, -3]`
 * Steps:
 * - Start with `sum = 0`.
 * - Skip all numbers (all are negative).
 * Output: `0`.
 *
 * ### Example 3:
 * Input: `[]`
 * Steps:
 * - Start with `sum = 0`.
 * - Array is empty, so return `0`.
 * Output: `0`.
 *
 * @param {Array<number>} numbers - An array of numbers to evaluate.
 * @returns {number} The sum of all positive numbers in the array. Defaults to 0 if no positives exist.
 *
 * @example
 * console.log(sumOfPositives([1, -4, 7, 12])); // Output: 20
 * console.log(sumOfPositives([-1, -2, -3]));   // Output: 0
 * console.log(sumOfPositives([]));             // Output: 0
 */

// Option 1: Using a traditional loop
function sumOfPositivesUsingLoop(numbers) {
  // Step 1: Initialize a variable to store the cumulative sum
  let value = 0;

  // Step 2: Loop through each element in the array
  for (let i = 0; i < numbers.length; i++) {
    // Step 3: Check if the number is positive
    if (numbers[i] > 0) {
      // Step 4: Add the positive number to the cumulative sum
      value += numbers[i];
    }
  }

  // Step 5: Return the cumulative sum
  return value;
}

// Option 2: Using the reduce method
function sumOfPositives(numbers) {
  // Step 1: Use the reduce method to iterate and accumulate the sum
  return numbers.reduce(function (sum, num) {
    // Step 2: Check if the number is positive and add it to the sum
    return num > 0 ? sum + num : sum;
  }, 0); // Step 3: Start with an initial sum of 0
}

// Example Usage:
console.log(sumOfPositives([1, -4, 7, 12])); // Output: 20
console.log(sumOfPositives([-1, -2, -3])); // Output: 0
console.log(sumOfPositives([])); // Output: 0

console.log(sumOfPositivesUsingLoop([1, -4, 7, 12])); // Output: 20
console.log(sumOfPositivesUsingLoop([-1, -2, -3])); // Output: 0
console.log(sumOfPositivesUsingLoop([])); // Output: 0
