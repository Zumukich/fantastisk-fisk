function duplicateEncoder(word) {
	return word.toLowerCase().split("").map((el, idx, arr) => arr.indexOf(el) !== arr.lastIndexOf(el) ? ")" : "(").join("");
}

// From: https://www.codewars.com/kata/duplicate-encoder
// 6 kyu

console.log(duplicateEncoder("din"));
console.log(duplicateEncoder("recede"));
console.log(duplicateEncoder("Success"));
console.log(duplicateEncoder("(( @"));
