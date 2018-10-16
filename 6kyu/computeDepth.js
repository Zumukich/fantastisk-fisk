function computeDepth(num) {
	var digits = new Set();
	var iterator = 0;
	while (digits.size !== 10) {
		iterator++;
		String(num * iterator).split("").forEach(element => digits.add(element));
	}
	return iterator;
}

// From: https://www.codewars.com/kata/integer-depth
// 6 kyu

console.log(computeDepth(42));    // 9
console.log(computeDepth(1));     // 10
