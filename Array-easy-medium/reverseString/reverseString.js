// wrtite a function that reverse a string
// use in place means don't use any extra space
let str = ["h", "e", "l", "l", "o"];
function reverseString(str) {
  let length = str.length;
  console.log("first", length);
  for (let i = 0; i < Math.floor(length / 2); i++) {
    // Swap characters at positions i and length - 1 - i
    let temp = str[i];
    str[i] = str[length - 1 - i];
    str[length - 1 - i] = temp;
  }
  return str;
}

console.log(reverseString(str)); // Output: "olleh"
