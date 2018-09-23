function sumTwoLowest(arr) {
	return parseInt(arr.splice(arr.indexOf(Math.min(...arr)), 1)) + Math.min(...arr);
}

// From: https://www.codewars.com/kata/sum-of-two-lowest-positive-integers
// 7 kyu

console.log(sumTwoLowest([19, 5, 42, 2, 77]));
console.log(sumTwoLowest([10, 343445353, 3453445, 3453545353453]));
