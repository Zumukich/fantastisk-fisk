function digPow(n, p) {
	var total = 0;
	const numArr = String(n).split("");
	for (var i = 0; i < numArr.length; i++) {
		total += Math.pow(numArr[i], p + i);
	}
	return total % n == 0 ? total / n : -1;
}

// From: https://www.codewars.com/kata/playing-with-digits/
// 6 kyu

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));
