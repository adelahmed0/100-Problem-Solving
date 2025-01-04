/**
 * Function to convert a number into a reversed array of its digits.
 *
 * Steps:
 * 1. **Change the number to a string**:
 *    - Use the `toString` method to convert the number into a string.
 * 2. **Split the string into an array**:
 *    - Use the `split("")` method to break the string into an array of individual characters.
 * 3. **Change the string elements in the array to numbers**:
 *    - Use the `map` method to iterate through the array and convert each character back into a number using `Number`.
 * 4. **Reverse the array**:
 *    - Use the `reverse` method to reverse the order of the elements in the array.
 *
 * @param {number} n - The input number (non-negative).
 * @returns {Array<number>} An array of digits in reverse order.
 */
function digitize(n) {
  return n
    .toString() // Step 1: Convert number to string
    .split("") // Step 2: Split string into an array
    .map(Number) // Step 3: Convert each string element to a number
    .reverse(); // Step 4: Reverse the array
}

/**
 * Alternative function to convert a number into a reversed array of its digits manually.
 *
 * Steps:
 * 1. **Initialize an empty array**:
 *    - Create an empty array `result` to store digits.
 * 2. **Extract digits using modulo and division**:
 *    - Use a loop to repeatedly get the last digit using `n % 10` and add it to the array.
 *    - Remove the last digit by dividing `n` by 10 and taking the floor.
 * 3. **Handle edge case for `0`**:
 *    - If the array remains empty (input is 0), return `[0]`.
 *
 * @param {number} n - The input number (non-negative).
 * @returns {Array<number>} An array of digits in reverse order.
 */
function digitizeManual(n) {
  let result = [];
  while (n > 0) {
    result.push(n % 10); // Get the last digit and add it to the array
    n = Math.floor(n / 10); // Remove the last digit
  }
  return result.length > 0 ? result : [0]; // Return [0] if input is 0
}

// Example Usage:
console.log(digitize(35231)); // Output: [1, 3, 2, 5, 3]
console.log(digitize(0)); // Output: [0]

console.log(digitizeManual(35231)); // Output: [1, 3, 2, 5, 3]
console.log(digitizeManual(0)); // Output: [0]
