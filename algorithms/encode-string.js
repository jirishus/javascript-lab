var str = '33!#$!7@@@$$Y%$@%444@@@@@#####';

function encoder(s) {
	var hm = {};
  var len = s.length;
  var finalString = '';
  
  for (var i=0;i<len;i++) {
  	var temp = s[i];
    if (!(hm[temp])) {
    	hm[temp] = 0;
    }
    hm[temp] += 1;
  }
  
  for (var prop in hm) {
  	finalString += prop + hm[prop];
  }
  
  return finalString;
}

var result = encoder(str);
