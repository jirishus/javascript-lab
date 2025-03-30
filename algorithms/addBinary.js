
function addBinary(a,b) {
  let aBin = `0b${a}`;
  let bBin = `0b${b}`;
  let sum = BigInt(aBin) + BigInt(bBin);

  return sum.toString(2);
}