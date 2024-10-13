/*
Write a function isPalindrome($string) that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise. Ignore spaces, punctuation, and capitalization.
*/

function isPalindrome(x) {
  // Convert string to lowercase and remove non-alphanumeric characters
  x = x.toLowerCase().replace(/[^a-z0-9]/g, "");
  let i = 0,
    l = x.length - 1;

  while (i < l) {
    if (x[i] !== x[l]) return false;
    i++;
    l--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("ABC")); // false
