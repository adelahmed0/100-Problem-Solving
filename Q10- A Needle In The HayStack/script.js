/**
 * Function to find the position of "needle" in an array.
 *
 * Steps:
 * 1. **Loop through the array**:
 *    - Use a `for` loop to iterate through each element in the array.
 *
 * 2. **Check if the current value is "needle"**:
 *    - Compare the current element to the string `"needle"`.
 *    - If it matches, return a message with the index of the element.
 *
 * 3. **Alternative Using `indexOf`**:
 *    - Use the `indexOf` method to find the index of `"needle"` directly.
 *    - Return the formatted message using the result from `indexOf`.
 *
 * @param {Array<string>} array - The array of strings containing one "needle".
 * @returns {string} A message indicating the position of "needle" in the array.
 */

// Implementation Using a Loop
function findNeedle(array) {
  for (let i = 0; i < array.length; i++) {
    // Step 1: Loop through the array
    if (array[i] === "needle") {
      // Step 2: Check if the element is "needle"
      return `found the needle at position ${i}`; // Return the message with the index
    }
  }
}

// Alternative Implementation Using `indexOf`
function findNeedleUsingIndexOf(array) {
  const index = array.indexOf("needle"); // Step 3: Find the index of "needle"
  return `found the needle at position ${index}`; // Return the message with the index
}

// Example Usage:
const haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];

console.log(findNeedle(haystack)); // Output: "found the needle at position 5"
console.log(findNeedleUsingIndexOf(haystack)); // Output: "found the needle at position 5"
