function isSub(s, t) {
  let i=0,j=0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
}

/**
 * Driver Code
 */

let str1 = 'able';
let str2 = 'appppble';

const r = isSub(str1, str2);

console.log(r);