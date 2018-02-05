var input = 'AnacoNdA';

function deDup(str) {
 var output = '';
  var normalized_str = str.toUpperCase();
  
  for (var i=0;i<str.length;i++) {
    var temp = normalized[i];
   if (output.indexOf(temp) === -1) {
     output += str[i];
    }
  }
  return output;
}

var clean_string = deDup(input);
