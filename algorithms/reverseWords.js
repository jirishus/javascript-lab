// Reverse words in a string
/*
 Run-time: O(n)
 Space: O(n) - to store result of split by spaces
*/
function reverseWords(s) {
  // remove leading and trailing spaces
  s.trim();
  let words = s.split(/\s+/).reverse();

  return words.join(' ');
}

console.log(reverseWords('happy holidays and new year'))