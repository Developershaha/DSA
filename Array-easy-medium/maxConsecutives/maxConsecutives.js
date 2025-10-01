function maxConsecutives(arr) {
  let maxCount = 0; // Variable to keep track of the maximum count of consecutive elements
  let currentCount = 0; // Variable to keep track of the current count of consecutive elements
  let prevElement = null; // Variable to store the previous element for comparison
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // If the current element is not zero, increment the current count
      currentCount++;
    } else {
      // If the current element is zero, reset the current count to 0
      maxCount = currentCount > maxCount ? currentCount : maxCount; // Update maxCount if currentCount is greater
      currentCount = 0;
    }
  }
  return currentCount > maxCount ? currentCount : maxCount; // Return the maximum count of consecutive elements found
}

let array = [1, 1, 0, 1, 1, 1];
console.log(maxConsecutives(array)); // Output: 3 (The maximum count of consecutive elements is 3 for the element 3)
