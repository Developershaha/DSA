// given an array of integers, the task is to remove all the zeros from the array
// and shift the non-zero elements to the front, filling the rest of the array with zeros
// Time Complexity: O(n)
// Space Complexity: O(1)
// This function modifies the input array in place, so no extra space is used for storing results.
// Example: Input: [0, 1, 0, 3, 12]
//          Output: [1, 3, 12, 0, 0]
//          Explanation: The non-zero elements are moved to the front, and the remaining positions are filled with zeros.
// Example: Input: [0, 5, 0, 2, 0, 4]
//          Output: [5, 2, 4, 0, 0, 0]
//          Explanation: The non-zero elements are moved to the front, and the remaining positions are filled with zeros.
// Example: Input: [0, 0, 0, 0]

function removeZereos(arr) {
  let x = 0; // Pointer for the position of the next non-zero element
  for (const num of arr) {
    if (num !== 0) {
      // Check if the current element is not zero
      arr[x] = num; // Place the current element at the next non-zero position
      x++; // Increment the pointer
    }
  }
  // Fill the rest of the array with zeros
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

const array = [0, 1, 0, 3, 12];
console.log(removeZereos(array)); // Output: [1, 3, 12, 0, 0]
