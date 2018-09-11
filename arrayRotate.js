function arrayRotate(array, n) {
	var retArray = array.slice();
	if (n > 0)
		for (var r = 0; r < n % retArray.length; r++) retArray.unshift(retArray.pop());
	else
		for (r = 0; r < Math.abs(n) % retArray.length; r++) retArray.push(retArray.shift());
	return retArray;
}

// From: https://www.codewars.com/kata/rotate-array-js/
// 6 kyu

console.log(arrayRotate([1, 2, 3, 4, 5], 2));
console.log(arrayRotate([1, 2, 3, 4, 5], -1));
console.log(arrayRotate([1, 2, 3, 4, 5], -2));
console.log(arrayRotate([1, 2, 3, 4, 5], 3));
console.log(arrayRotate([1, 2, 3, 4, 5], -4));
console.log(arrayRotate([1, 2, 3, 4, 5], 5));
console.log(arrayRotate([1, 2, 3, 4, 5], 11));
console.log(arrayRotate([1, 2, 3, 4, 5], 12478));
console.log(arrayRotate([1.0, 2.0, 3.0], 1));
console.log(arrayRotate(['a', 'b', 'c'], 1));
