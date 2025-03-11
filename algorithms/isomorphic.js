// determin if two strings are isomorphic
function isomorphic(s1, s2) {
  if (s1.length !== s2.length) return false;

  // define 2 maps to map both ways a=>b b<=a
  let map1 = [];
  let map2 = [];

  for (let i=0;i<s1.length;i++) {
    let char1 = s1.charCodeAt(i);
    let char2 = s2.charCodeAt(i);

    if (map1[char1] === undefined && map2[char2] === undefined) {
      map1[char1] = char2;
      map2[char2] = char1;
    } else if (map1[char1] !== char2 || map2[char2] !== char1) {
      return false;
    }
  }

  return true;
}

console.log(isomorphic('foo', 'bar'));
console.log(isomorphic('egg', 'add'));
console.log(isomorphic('paper', 'title'));