function longestConsecutive(strings, n) {
	if (!strings || n < 1) return "";
	var bestSoFar = "";
	for (var i = 0; i <= strings.length - n; i++) {
		const currentOne = "".concat(...strings.slice(i, i + n));
		if (currentOne.length > bestSoFar.length) {
			bestSoFar = currentOne;
		}
	}
	return bestSoFar;
}

// From: https://www.codewars.com/kata/consecutive-strings
// 6 kyu

console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));
