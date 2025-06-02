/*
Given a string s, find the length of the longest substring without duplicate characters

Time: O(n)
Space: O(min(m,n))
*/
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i=0;i<s.length;i++) {    
    let curr = s[i];
    while (set.has(curr)) {
      set.delete(s[left]);
      left++;
    }

    set.add(curr);
    maxSize = Math.max(maxSize, i - left + 1);
  }
  return maxSize;
}