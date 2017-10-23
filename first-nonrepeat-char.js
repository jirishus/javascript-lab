var str = 'aaaaafvvvbbbccc';

function uniqueChar(string) {
  var len = string.length;
	for (var i=0;i<len;i++) {
   var c = string.charAt(i);
   var fc = string.indexOf(c) === i;
   var sc = string.indexOf(c, i + 1) === -1;
   if (fc && sc) {
   	return c;
   }
  }
  return null;
}

var result = uniqueChar(str);
