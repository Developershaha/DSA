// Q- fibonacci series using recursion
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("fibonacci is ", fibonacci(6));
