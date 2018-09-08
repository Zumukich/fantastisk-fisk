function arrayDiff(inArray, toRemove) {
	for (var i = 0; i < toRemove.length; i++) {
		inArray = inArray.filter((element) => element != toRemove[i]);
	}
	return inArray;
}

// From: https://www.codewars.com/kata/array-dot-diff/
// 6 kyu

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 2, 2, 3], []));
console.log(arrayDiff([], [2]));
