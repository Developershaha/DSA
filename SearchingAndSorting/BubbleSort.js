// Q bubble sort

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSorted = false; // Optimization: Track if any swaps were made
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = true; // A swap was made, so the array may not be sorted
      }
    }
    if (!isSorted) break; // No swaps were made, the array is sorted  
  }
  return arr;
}
// Example usage:
let array = [64, 34, 25, 12, 22, 11, 11, 90];
console.log("Unsorted array:", array);
let sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);
