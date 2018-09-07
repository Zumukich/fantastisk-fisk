function oddNumbers(A) {
	return A.sort((a, b) => a - b).reduce((acc, curVal, curIdx, arr) => acc == Infinity && curVal != arr[curIdx + 1] && curIdx % 2 == 0 ? curVal : acc, Infinity);
}

console.log(oddNumbers([1, 2, 1, 2, 1, 2, 1, 2, 3]));
console.log([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5].sort((a, b) => a - b));
console.log(oddNumbers([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
