function uniqueInOrder(sequence) {
	if (!sequence) {
		return [];
	}
	if (!Array.isArray(sequence)) {
		sequence = sequence.split("");
	}
	return sequence.reduce((acc, cur) => {
		if (acc[acc.length - 1] != cur) acc.push(cur);
		return acc;
	}, []);
}

// From: https://www.codewars.com/kata/unique-in-order
// 6 kyu

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder(""));
console.log(uniqueInOrder([]));
console.log(uniqueInOrder(null));
console.log(uniqueInOrder(undefined));
