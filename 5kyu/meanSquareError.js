function meanSquareError(firstArray, secondArray) {
	if (firstArray.length !== secondArray.length) return false;
	return firstArray.map((e, i) => e - secondArray[i]).map(e => e * e).reduce((s, c) => s + c, 0) / firstArray.length;
}

// From: https://www.codewars.com/kata/mean-square-error
// 5 kyu

console.log(meanSquareError([1, 2, 3], [4, 5, 6]));             // should === 9 ((9 + 9 + 9) / 3)
console.log(meanSquareError([10, 20, 10, 2], [10, 25, 5, -2]));   // should === 16.5 ((0 + 25 + 25 + 16) / 4)
console.log(meanSquareError([-1, 0], [0, -1]));                   // should === 1 ((1 + 1) / 2)
