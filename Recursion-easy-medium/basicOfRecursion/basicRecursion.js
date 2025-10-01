function recirsion(n) {
  console.log("done", n);
  if (n <= 0) return;
  n = n - 1;
  recirsion(n);
}
recirsion(5);
