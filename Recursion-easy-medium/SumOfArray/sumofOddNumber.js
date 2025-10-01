// Q find out some of all odd elements of array using recursion

const array = [1, 2, 3, 4, 5];

function sum(n) {
  let isOdd = array[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? array[0] : 0;
  }
  return (isOdd ? array[n] : 0) + sum(n - 1);
}

console.log("first odd sum is ", sum(array.length - 1));
