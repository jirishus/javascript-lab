/*
 Given two strings s and t, return true if t is an anagram of s, and false otherwise
*/
function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let wordMap = {};

  for (let i=0;i<str1.length;i++) {
    let char1 = str1[i];
    if (!wordMap[char1]) {
      wordMap[char1] = 0;
    }
    wordMap[char1] += 1;
  }

  for (let i=0;i<str2.length;i++) {
    let char2 = str2[i];
    if (!wordMap[char2]) {
      return false;
    }

    wordMap[char2] -= 1;
    if (wordMap[char2] === 0) {
      delete wordMap[char2]
    }
  }
  return Object.keys(wordMap).length === 0;
}
