function flatten(sequence) {
	console.log(sequence);
	if (!Array.isArray(sequence)) {
		sequence = Array.from(sequence);
	}
	return sequence.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

console.log(flatten([1, [2, 3], 4, 5, [6, [7]]]));            // [1, 2, 3, 4, 5, 6, 7]
console.log(flatten(['a', ['b', 2], 3, null, [[4], ['c']]])); // ['a', 'b', 2, 3, null, 4, 'c']
console.log(flatten(1, 2));                                      // [1]
