// Q - remove dublciate element from the given array of interner and val is interger
// condition: remove all the elements that are equal to val 4, 5, 6]
// Time Complexity: O(n)
// change the array of num such that all the first k elements of the array contain the elements that are not equal to val
function remvoeElement(arr, val) {
  let x = 0; // Pointer for the position of the next unique element
    for (const num of arr) {
      if (num !== val) {
        // Check if the current element is not equal to val
        arr[x] = num; // Place the current element at the next unique position
        x++; // Increment the pointer
      }

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== val) {
  //     // Check if the current element is not equal to val
  //     arr[x] = arr[i]; // Place the current element at the next unique position
  //     x++; // Increment the pointer
  //   }
  // }
  return x; // Return the count of unique elements
}
// }

let array = [0, 5, 2, 5, 4, 5, 6, 5, 8, 9];
let val = 5; // Value to be removed
console.log(remvoeElement(array, val), array); // Output: 9 [0, 1, 2, 3, 4, 6, 7, 8, 9]
