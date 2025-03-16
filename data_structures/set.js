/**
 * 
 * @param [] a 
 * @param [] b 
 * @returns []
 */
function findIntersect(a,b) {
  let set1 = new Set(a);
  let set2 = new Set(b);

  let intersectionSet = new Set([...set1].filter(x => set2.has(x)));
  return intersectionSet;
}

const r = findIntersect([1,2,2,1], [2,2]);
console.log(r);