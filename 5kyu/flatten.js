function flattenArray(arr) {
	return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}

console.log(flattenArray([1, [2, 3], 4, 5, [6, [7]]]));            // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenArray(['a', ['b', 2], 3, null, [[4], ['c']]])); // ['a', 'b', 2, 3, null, 4, 'c']
