let arr = [4, 9, 1, 0, 2,10];
let target = 10;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(
  "index is ",
  linearSearch(arr, target),
  arr[linearSearch(arr, target)]
);
