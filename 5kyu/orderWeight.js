function orderWeight(str) {
	const sumDigits = n => n.toString().split("").reduce((sum, val) => sum + parseInt(val), 0);
	return str.split(" ").sort((a, b) => sumDigits(a) === sumDigits(b) ? ('' + a).localeCompare(b) : sumDigits(a) - sumDigits(b)).join(" ");
}

// From: https://www.codewars.com/kata/weight-for-weight/train/javascript
// 5 kyu

console.log(orderWeight("103 123 4444 99 2000"));   // 2000 103 123 4444 99
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));   // 11 11 2000 10003 22 123 1234000 44444444 9999
console.log(orderWeight("71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81"));   // 1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703
