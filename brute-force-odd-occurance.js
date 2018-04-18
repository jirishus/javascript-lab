const dataSet = [2, 3, 5, 4, 2, 4, 3, 5, 2, 4, 4, 2, 4];

function findOddOccurance(n) {
 let len = n.length;
 for (let i=0;i<len;i++) {
  let itemCount = 0;
  for (let j=0;j<len;j++) {
    if (n[i] === n[j]) itemCount++;
   }
   if (itemCount % 2 !== 0) return n[i];
  }
}

var x = findOddOccurance(dataSet);
