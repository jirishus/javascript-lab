/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Time: O(n)
Space: O(1)
*/

function romanToInt(s) {
  let values = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000,
  };

  let total = 0;
  let i = 0;
  while (i < s.length) {
    if (i + 1 < s.length && values[s[i]] < values[s[i + 1]]) {
      total += values[s[i + 1]] - values[s[i]];
      i += 2;
    } else {
      total += values[s[i]];
      i += 1;
    }
  }
  return total; 
}