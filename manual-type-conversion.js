// Convert string to integer 
// without casting or parseInt()

var sample = '-43002';

function convert(str) {
  var resultInt = 0;
  var factor = 1;
  var radix = 10;
  var isSigned = false;
  
  if (str[0] === '-') {
    isSigned = true;
    str = str.replace('-','');
  }
  
  for (var i=str.length - 1;i>=0;i--) {
  	resultInt += str[i] * factor;
    factor *= radix;
  }
	
  if (isSigned) {
   resultInt = 0 - resultInt;
  }
  return resultInt;
}

var payload = convert(sample);
console.log(payload);
