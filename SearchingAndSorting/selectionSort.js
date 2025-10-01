// Q selection sort
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
// Example usage:
let array = [7, 1, 5, 4, 3, 2];
console.log("Unsorted array:", array);
let sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray);
