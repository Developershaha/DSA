function findMissingNumber(arr) {
  let n = arr.length; // Length of the array
  let totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
  let arraySum = arr.reduce((acc, num) => acc + num, 0); // Sum of elements in the array
  return totalSum - arraySum; // The missing number is the difference between the total sum and the array sum
}
let array = [0, 1, 2, 3, 5]; // Example input array
console.log(findMissingNumber(array)); // Output: 4 (The missing number is 4