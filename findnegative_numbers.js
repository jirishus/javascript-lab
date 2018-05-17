// Problem
// Find Number of negative ints in 
// row-wise / column-wise sorted matrix

var dataSet = [
	[-3, -2, -1, 1],
  [-2, 2, 3, 4],
  [4, 5, 7, 8]
];

// Brute Force Solution O(n^2)
function countNegativeInts() {
	var negativeNumCount = 0;
  for (var i=0;i<dataSet.length;i++) {
    for (var j=0;j<dataSet[i].length;j++) {

      if (Math.abs(dataSet[i][j]) !== dataSet[i][j]) {
				negativeNumCount++;
      }
      
    }
  }
  return negativeNumCount;
}

var x = countNegativeInts();

console.log(`${x} negative numbers found!`);
