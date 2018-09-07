function arrayDiff(inArray, toRemove) {
	for (var i = 0; i < toRemove.length; i++) {
		inArray = inArray.filter((element) => element != toRemove[i]);
	}
	return inArray;
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 2, 2, 3], []));
console.log(arrayDiff([], [2]));
