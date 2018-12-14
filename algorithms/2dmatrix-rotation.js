// rotate 2dmatrix
/*
*
*  [
*   [1,2],
*   [3,4]
*  ]
*
* result
* [
*  [3,1],
*  [4,2]
* ]
*/

var matrix =
[
   [1,2],
   [3,4]
];

/**
 * Define Our Function
 */
function rotateClockWise(matrix) {
 // 1. flip matrix
 matrix.reverse();
 // 2. iterate and swap the corners
 for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < i; j++) {
   const temp = matrix[i][j];
   matrix[i][j] = matrix[j][i];
   matrix[j][i] = temp;
  }
 }

 return matrix;
}

let result = rotateClockWise(matrix);

/**
 * Log Output
 */

 console.log('Result : ', result);