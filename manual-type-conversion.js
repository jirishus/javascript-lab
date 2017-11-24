// Convert string to integer 
// without casting or parseInt()

var sample = '-43002.22';

function convert(str) {
  var resultInt = 0;
  var factor = 1;
  var radix = 10;
  var clean = '';
  var isSigned = false;
  
  // check if signed or unsigned integer
  if (str[0] === '-') {
    isSigned = true;
    str = str.replace('-','');
  }
  
  // check if floating point
  for (var j=0;j<str.length;j++) {
   if (str[j] === '.') {
		break;
   } else {
    clean += str[j];
   }
  }
     
  for (var i=clean.length - 1;i>=0;i--) {
  	resultInt += clean[i] * factor;
    factor *= radix;
  }
	
  if (isSigned) {
   resultInt = 0 - resultInt;
  }
  return resultInt;
}

var payload = convert(sample);
console.log(payload);
