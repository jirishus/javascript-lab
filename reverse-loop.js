var str = 'samplestring';

function reverseString(s) {
  var len = s.length;
  var str = '';
  for (let i=len - 1;i>=0;i--) {
   str += s[i];
  }
  return str;
}

var result = reverseString(str);
