/*
 * Fibonacci Iterative Solution
 * Runtime O(n)
 **/

/*
 * Find nth number in Fibonacci sequence
 **/
function Fib(n) {
 let results = [0,1];
 for (let i=2;i<n+1;i++) {
  results.push(results[i - 1] + results[i - 2]);
 }
 return results[n];
}

// Driver Code
console.log(Fib(6));