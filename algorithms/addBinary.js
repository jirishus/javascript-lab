/*
Given two binary strings a and b, return their sum as a binary string
*/
function addBinary(a,b) {
  let aBin = `0b${a}`;
  let bBin = `0b${b}`;
  let sum = BigInt(aBin) + BigInt(bBin);

  return sum.toString(2);
}
