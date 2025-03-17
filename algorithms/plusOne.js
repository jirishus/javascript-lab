// Given a int array, add one to the least significat digit
function plusOne(digits) {
  let digitsStr = digits.join('');
  let plusOneSum = BigInt(digitsStr) + BigInt(1);
  return plusOneSum
    .toString()
    .split('')
    .map(num => Number(num));
}

let input = [2,3,4,9,9,9];

console.log(plusOne(input));