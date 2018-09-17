function bitCounting(n) {
	var binStr = "";
	for (var i = Math.floor(Math.log2(n)); i >= 0; i--) {
		if (Math.pow(2, i) <= n) {
			binStr += "1";
			n -= Math.pow(2, i);
		} else binStr += "0";
	}
	return binStr.match(/1/gi) || [].length;
}

function fastBitCounting(n) {
	return (n.toString(2).match(/1/gi) || []).length;
}

// From: https://www.codewars.com/kata/bit-counting/
// 6 kyu

console.log(bitCounting(0));
console.log(fastBitCounting(0));
console.log(fastBitCounting(1234));
