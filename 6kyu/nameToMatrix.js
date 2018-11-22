function nameToSquareMatrix(name) {
	if (name.length === 0) return "name must be at least one letter";
	var dim = Math.ceil(Math.sqrt(name.length));
	var resultMtx = Array(dim).fill(Array(dim).fill(".")).map(a => a.slice());
	for (let c = 0; c < name.length; c++) {
		resultMtx[Math.floor(c / dim)][c % dim] = name[c];
	}
	return resultMtx;
}

function nameToAnyMatrix(text, col) {
	// if (text.length === 0 || col === 0) return "";
	if (text.length <= 2) return text.split("").reverse().join("");
	var dim = Math.ceil(text.length / col);
	var resultMtx = Array(dim).fill(Array(col).fill(" ")).map(a => a.slice());
	for (let c = 0; c < text.length; c++) {
		resultMtx[Math.floor(c / col)][c % col] = text[c];
	}
	return resultMtx
		.map((_, i) => resultMtx.map(r => r[i])) // Transpose
		.map(r => r.join("")) // Join sub-arrays first
		.join("")
		.trim();
}

function splitStrings(str) {
	return str.padEnd(Math.ceil(str.length / 2) * 2, "_").match(/../g);
}

// From: https://www.codewars.com/kata/name-to-matrix
// also https://www.codewars.com/kata/simple-transposition/
// also https://www.codewars.com/kata/split-strings
// 6 kyu

console.log(nameToSquareMatrix("Bill"));
console.log(nameToSquareMatrix("Frankie"));
console.log(nameToAnyMatrix("Simple text", 2));
console.log(nameToAnyMatrix("wa", 2));
console.log(splitStrings("abc"));
console.log(splitStrings("abcdef"));
