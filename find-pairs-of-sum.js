var dataSet = [2,3,4,4,1];

function pairCount(sum, set) {
  var len = set.length;
  var hm = {};
  var pairs = 0;
  
	for (var i=0;i<len;i++) {
    var temp = set[i];
  	if (!(hm[temp])) {
    	hm[temp] = 0;
    }
    hm[temp] += 1;
  }
  
  for (var j=0;j<len;j++) {
  	var compliments = hm[sum - set[j]];
    
    if (compliments) {
    	pairs += compliments;	
    }
    
    if (sum - set[j] === set[j]) {
    	pairs--;
    }
        
  }
  
  return pairs/2;
}

var result = pairCount(5, dataSet);
