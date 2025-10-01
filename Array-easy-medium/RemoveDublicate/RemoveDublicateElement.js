// Q- Remove dublicate Element from the given sorted non decreasing order

// for this problem we will use two pointer approach
// the first pointer will point to the last unique element // the second pointer will iterate through the array
// // the second pointer will check if the current element is greater than the last unique element
// if it is greater, we will increment the first pointer and assign the current element to the first pointer position 4, 5, 6]
//  // the first pointer will return the length of the unique elements 4, 5, 6]
// Time Complexity: O(n)
let array = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
// we can also use the same logic with for loop
// Space Complexity: O(1)
function removeDuplicateElement(arr) {
  let x = 0;
  for (const num of arr) {
    if (num > arr[x]) {
      x = x + 1;
      arr[x] = num;
    }
  }
  return x + 1;
}

// var removeDuplicates = function(nums) {
//     if (nums.length === 0) return 0; // If array is empty, return 0

//     let k = 1; // Start with the first unique element at index 0

//     for (let i = 1; i < nums.length; i++) {
//         // Check if the current element is different from the previous unique element
//         if (nums[i] !== nums[k - 1]) {
//             nums[k] = nums[i]; // Place the unique element at the kth position
//             k++; // Increment the count of unique elements
//         }
//     }

//     return k;

// };
// Alternative implementation using a for loop
// This implementation uses a for loop to achieve the same result as the above function.
// function removeDuplicateElement(arr) {
//   let x = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[x]) {
//       x = x + 1;
//       arr[x] = arr[i];
//     }
//   }
//   return x + 1;
// }

// Output: [0, 1, 2, 3,

let result = removeDuplicateElement(array);
console.log(result, array); // Output: [0, 1, 2, 3,
