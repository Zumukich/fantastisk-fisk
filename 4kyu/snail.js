function snail(inArray) {
	var idxN = 0, idxM = -1, outArray = [];
	if (inArray[0].length === 0) return outArray;
	const passCount = 2 * inArray.length - 1;
	for (let pass = passCount; pass > 0; pass--) {
		var cells = Math.ceil(pass / 2);
		var stepDirection = (passCount - pass) % 4;
		for (let i = 0; i < cells; i++) {
			switch (stepDirection) {
				case 0: idxM++; break; // Right
				case 1: idxN++; break; // Down
				case 2: idxM--; break; // Left
				case 3: idxN--; break; // Up
			}
			outArray.push(inArray[idxN][idxM]);
		}
	}
	return outArray;
}

// From: https://www.codewars.com/kata/snail
// 4 kyu

var array0 = [[]];

var array1 = [[1]];

var array2 = [
	[1, 2],
	[3, 4]
];

var array3 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]];

var array4 = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]];

console.log(snail(array0));
console.log(snail(array1));
console.log(snail(array2));
console.log(snail(array3));
console.log(snail(array4));
