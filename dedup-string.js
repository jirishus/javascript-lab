var demo = 'AbraCadABraAlakAzam';

function dedup(str) {
	let clean = '';
  let copy = str;
  for (let i=0;i<str.length;i++) {
		
		let check = clean.indexOf(copy[i].toLowerCase()) === -1 && clean.indexOf(copy[i].toUpperCase()) == -1;
    if (check) {
    	clean += str[i];
    }
  }
  
  return clean;
}

var result = dedup(demo);

console.log(result);
