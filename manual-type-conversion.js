// Convert string to integer 
// without casting or parseInt()

var sample = '43002';

function convert(str) {
	var resultInt = 0;
  var factor = 1;
  
  for (var i=str.length - 1;i>=0;i--) {
  	resultInt += str[i] * factor;
    factor *= 10;
  }
  
  return resultInt;
}

var pl = convert(sample);

console.log(pl);
