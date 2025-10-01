// // Q insertion sort
// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let current = arr[i];
//     let prev = i - 1;
//     // Move elements of arr[0..i-1], that are greater than current,
//     // to one position ahead of their current position
//     while (prev >= 0 && arr[prev] > current) {
//       arr[prev + 1] = arr[prev];
//       prev--;
//     }
//     arr[prev + 1] = current;
//   }
//   return arr;
// }
// // Example usage:
// let array = [12, 11, 13, 5, 6];
// console.log("Unsorted array:", array);
// let sortedArray = insertionSort(array);
// console.log("Sorted array:", sortedArray);

let i = 1;
while (i <= 5) {
  if (i === 3) {
    // i++;
    continue;
  }
  console.log(i);
  i++;
}
