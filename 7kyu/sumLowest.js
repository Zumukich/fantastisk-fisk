function sumTwoLowest(arr) {
	return parseInt(arr.splice(arr.indexOf(Math.min(...arr)), 1)) + Math.min(...arr);
}

function minSum(arr) {
	let sum = 0;
	do {
		sum += parseInt(arr.splice(arr.indexOf(Math.min(...arr)), 1)) * parseInt(arr.splice(arr.indexOf(Math.max(...arr)), 1));
	} while (arr.length > 0);
	return sum;
}

// From: https://www.codewars.com/kata/sum-of-two-lowest-positive-integers
// also: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
// 7 kyu

//console.log(sumTwoLowest([19, 5, 42, 2, 77]));
//console.log(sumTwoLowest([10, 343445353, 3453445, 3453545353453]));

console.log(minSum([5, 4, 2, 3]));
console.log(minSum([12, 6, 10, 26, 3, 24]));
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));
