function arraySum(arr) {
	for (var index = 0; index < arr.length; index++) {
		if (arr.slice(0, index).reduce((a, b) => a + b, 0) == arr.slice(index + 1, arr.length).reduce((a, b) => a + b, 0)) {
			return index;
		}
	}
	return -1;
}

console.log(arraySum([1, 2, 3, 4, 3, 2, 1]));
