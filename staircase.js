function buildStairs(steps) {
	let output = "";
	for (var i=0;i<steps;i++) {
  	output += " ".repeat(steps - i);
    output += "#".repeat(i);
    output += '\n';
  }
  return output;
}

let staircase = buildStairs(6);
console.log(staircase);
