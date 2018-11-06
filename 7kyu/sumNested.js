function sumNested(arr) {
	return arr.reduce((a, b) => a.concat(Array.isArray(b) ? sumNested(b) : b), []).reduce((x, y) => x + y, 0);
}

// From: https://www.codewars.com/kata/sum-of-a-nested-list
// 7 kyu

console.log(sumNested([1, [2, [3, [4]]]])); // 10
