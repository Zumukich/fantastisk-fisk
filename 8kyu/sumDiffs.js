function sumOfDifferences(arr) {
	return arr.sort((a, b) => b - a).reduce((prev, cur, idx, arr) => prev + cur - arr[idx+1], 0);
}

// From: https://www.codewars.com/kata/sum-of-differences-in-array/
// 8 kyu

console.log(sumOfDifferences([1, 2, 10]));    // 9
console.log(sumOfDifferences([-3, -2, -1]));  // 2
