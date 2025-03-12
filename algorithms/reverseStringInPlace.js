// reverse string in-place
function reverse(str) {
  for (let i=0;i<str.length/2;i++) {
    let strCopy = str[i];
    let endPortion = str.length - 1 - i;
    str[i] = str[endPortion];
    str[endPortion] = strCopy;
  }

  return str;
}

console.log(reverse(['h','e','l','l','o']));