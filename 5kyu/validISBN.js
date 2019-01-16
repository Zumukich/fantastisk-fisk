function validISBN(str) {
	return str.length === 10 && str.split("").map((e, i) => (i === 9 && e === "x".toUpperCase()) ? 10 : parseInt(e)).reduce((sum, entry, idx) => sum + entry * (idx + 1), 0) % 11 === 0;
}

// From: https://www.codewars.com/kata/isbn-10-validation
// 5 kyu

console.log(validISBN('1112223339'));
console.log(validISBN('1234554321'));
console.log(validISBN('1234512345'));
console.log(validISBN('155404295X'));
console.log(validISBN('X123456788'));
