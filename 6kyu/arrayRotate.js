function arrayRotate(array, n) {
	var retArray = array.slice();
	if (n > 0)
		for (var r = 0; r < n % retArray.length; r++) retArray.unshift(retArray.pop());
	else
		for (r = 0; r < Math.abs(n) % retArray.length; r++) retArray.push(retArray.shift());
	return retArray;
}

function simpleRotation(array) {
	var diffs = array.reduce((acc, cur, idx, arr) => {
		if (arr[idx + 1]) {
			acc.push(arr[idx + 1] - cur > 0 ? 1 : -1);
		} else {
			if (cur - arr[idx - 1] > 0 === arr[0] - cur > 0) {
				acc.push(arr[0] - cur > 0 ? 1 : -1);
			}
		}
		return acc;
	}, []);
	return (diffs.some(a => a !== diffs[0]) ? "R" : "") + (diffs.reduce((sum, val) => sum + val) > 0 ? "A" : "D");
}

// From: https://www.codewars.com/kata/rotate-array-js/
// also: https://www.codewars.com/kata/simple-array-rotation
// 6 kyu

console.log(arrayRotate([1, 2, 3, 4, 5], 2));
console.log(arrayRotate([1, 2, 3, 4, 5], -4));
console.log(arrayRotate([1, 2, 3, 4, 5], 12478));
console.log(arrayRotate(['a', 'b', 'c'], 1));

console.log(simpleRotation([1, 2, 3, 4, 5, 7]));
console.log(simpleRotation([7, 12, 1, 2, 3, 4, 5]));
console.log(simpleRotation([4, 5, 6, 1, 2, 3]));
console.log(simpleRotation([9, 8, 7, 6]));
console.log(simpleRotation([5, 9, 8, 7, 6]));
console.log(simpleRotation([9, 6, 7]));
