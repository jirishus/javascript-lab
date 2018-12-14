function findPrimes(n) {
 let nums = [];
 let limit = Math.sqrt(n);
 let output = [];

 for (var i=0;i<n;i++) {
  nums.push(i);
 }

 for (var i=2;i<limit;i++) {
  for (var j=i*i;j<n;j+=i) {
   nums[j] = false;
  }
 }

 for (var i=0;i<n;i++) {
  if (nums[i]) {
   output.push(i);
  }
 }

 return output;
}

var primes = findPrimes(25);

// console.log(primes);