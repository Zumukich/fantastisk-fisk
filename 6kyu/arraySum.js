function arraySum(arr) {
	for (var index = 0; index < arr.length; index++) {
		if (arr.slice(0, index).reduce((a, b) => a + b, 0) == arr.slice(index + 1, arr.length).reduce((a, b) => a + b, 0)) {
			return index;
		}
	}
	return -1;
}

// From: https://www.codewars.com/kata/equal-sides-of-an-array/
// 6 kyu

console.log(arraySum([1, 2, 3, 4, 3, 2, 1]));
