function nbDig(n, d) {
	var arr = [];
	for (var i = 0; i <= n; i++) {
		arr.push(i);
	}
	return arr.map(n => (n * n).toString()).filter(s => s.indexOf(String(d)) !== -1).join("").split("").filter(s => s === d.toString()).length;
}

//
//

console.log(nbDig(10, 1));
console.log(nbDig(25, 1));
console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));
