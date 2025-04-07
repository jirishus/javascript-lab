function runLengthDecode(encodedStr) {
  if (!encodedStr) return '';

  let output = '';
  let i = 0;

  while (i < encodedStr.length) {
    let countStr = '';
    // extract the count
    while (i < encodedStr.length && !isNaN(parseInt(encodedStr[i]))) {
      countStr += encodedStr[i];
      i++;
    }

    // convert count to number
    const count = parseInt(countStr);

    // get the character to repeat
    if (i < encodedStr.length) {
      const char = encodedStr[i];

      output += char.repeat(count);

      i++;
    }
  }
  return output;
}

console.log(runLengthDecode('3a2b4c'));