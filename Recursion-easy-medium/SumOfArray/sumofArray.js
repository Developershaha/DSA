// Q- find some of array elements using recursion


// Q- some of odd elements of array using recursion 

const array = [1, 2, 3, 4, 5];

function sumOfArray(n) {

    
  if (n == 0) return array[0];
  return array[n] + sumOfArray(n - 1);
}

console.log("sume of array is ", sumOfArray(array.length - 1));
