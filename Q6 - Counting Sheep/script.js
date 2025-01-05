/**
 * Function to count the number of sheep present in the array.
 *
 * Steps:
 * 1. **Loop-Based Approach**:
 *    - Initialize a counter variable to 0.
 *    - Loop through the array and check if each element is `true`.
 *    - Increment the counter for each `true` value.
 *    - Return the counter.
 *
 * 2. **Filter-Based Approach**:
 *    - Use the `filter` method to create a new array containing only `true` values.
 *    - Return the length of the filtered array as the result.
 *
 * @param {Array<boolean>} sheep - An array of `true`/`false` values representing sheep.
 * @returns {number} The number of `true` values in the array.
 */

// Loop-Based Implementation
function countSheeps(sheep) {
  let counter = 0; // Initialize the counter
  for (let i = 0; i < sheep.length; i++) {
    // Loop through the array
    if (sheep[i] === true) {
      // Check if the element is `true`
      counter += 1; // Increment the counter
    }
  }
  return counter; // Return the counter
}

// Filter-Based Implementation
function countSheepsUsingFilter(sheep) {
  return sheep.filter(Boolean).length; // Filter `true` values and return their count
}

// Example Usage:
const sheepArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(sheepArray)); // Output: 17 (Loop-Based)
console.log(countSheepsUsingFilter(sheepArray)); // Output: 17 (Filter-Based)
