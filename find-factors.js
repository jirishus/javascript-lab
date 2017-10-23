function findFactors(n) {
	var factors = [],
      quotient = 0;
  
  for (var i=1;i<=n;i++) {
  	quotient = n/i;
    if (quotient === Math.floor(quotient)) {
    	factors.push(i);
    }
  }
  
  return factors;
}

var result = findFactors(20);
