let demo = 'AbraCadABraAlakAzam';

function removeDuplicates(str) {
	let clean = '';
  let norm = str.toLowerCase();
	for (let i=0;i<str.length;i++) {
  	let letter = norm[i];
		if (clean.indexOf(letter) === -1) {
    	clean += str[i];
    }
  }
  return clean;
}

console.log(removeDuplicates(demo));
