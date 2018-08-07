// Given a list of strings, return all pairs of strings that can make a palindrome
var words = ['ana','brian','slip','alula'];

var palindromes = getPalindromes(words);
console.log(palindromes);

function getPalindromes(arr) {
	var matches = [];
	for (let i=0;i<arr.length;i++) {
  	var temp = arr[i];
  	if (isPalin(temp)) {
    	matches.push(temp);
    }
  }
  return matches
}

function isPalin(str) {
	
  var clean = str;
  var reversed = str.split('').reverse().join('');
  
  if (clean === reversed) {
  	return true;
  }
  
  return false;
  
}
