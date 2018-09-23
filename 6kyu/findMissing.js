function findMissing(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].charCodeAt(0) != arr[i + 1].charCodeAt(0) - 1) return String.fromCharCode(arr[i].charCodeAt(0) + 1);
	}
}

function findMissingLetter(array) {
	return array.reduce((pV, cV, idx, arr) => pV == Infinity && cV.charCodeAt(0) !== arr[idx + 1].charCodeAt(0) - 1 ? String.fromCharCode(cV.charCodeAt(0) + 1) : pV, Infinity);
}

function findMissingArith(array) {
	var diff = Math.min(Math.abs(array[2] - array[1]), Math.abs(array[1] - array[0]));
	return array.reduce((pV, cV, idx, arr) => pV == Infinity && cV !== arr[idx + 1] - diff ? cV + diff : pV, Infinity);
}

function findMissingGeom(arr) {
	var diff = arr.reduce((pV, cV, idx, ar) => ar[idx + 1] / cV < pV ? ar[idx + 1] / cV : pV, Infinity);
	return arr.reduce((pV, cV, idx, ar) => pV == Infinity && cV !== ar[idx + 1] / diff ? cV * diff : pV, Infinity);
}

// From: https://www.codewars.com/kata/find-the-missing-letter
// also: https://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression/
// also: https://www.codewars.com/kata/find-the-missing-term-in-a-geometric-progression/
// 6 kyu

console.log(findMissingLetter(["a", "b", "c", "d", "f", "g"]));
console.log(findMissingLetter(['O','Q','R','S']));
console.log(findMissingArith([1, 3, 4]));
console.log(findMissingArith([1, 3, 5, 9, 11]));
console.log(findMissingGeom([2, 4, 8, 32]));
console.log(findMissingGeom([3, 6, 12, 48]));
console.log(findMissingGeom([1, 4, 16, 256]));
