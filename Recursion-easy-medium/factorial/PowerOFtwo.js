// Q- find power of two using recursion
function powerOfTwo(n) {
  if (n == 1) return true;
  if (n < 1 || n % 2 != 0) return false;
  return powerOfTwo(n / 2);
}

console.log("first", powerOfTwo(5));
