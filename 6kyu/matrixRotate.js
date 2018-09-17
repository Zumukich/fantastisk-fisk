function matrixRotate(matrix, direction, times) {
	if (times % 4 === 0) return matrix;
	if (times > 1) {
		return matrixRotate(matrixRotate(matrix, direction, times % 4 - 1), direction, 1);
	} else {
		var resultMatrix = new Array(matrix[0].length);
		for (var i = 0; i < matrix[0].length; i++) {
			resultMatrix[i] = new Array(matrix.length);
			for (var j = 0; j < matrix.length; j++) {
				resultMatrix[i][matrix.length - j - 1] = direction === "counter-clockwise" ? matrix[matrix.length - j - 1][matrix[0].length - i - 1] : matrix[j][i];
			}
		}
		return resultMatrix;
	}
}

// if (direction === "cw") matrix[0].map((_, i) => matrix.map(row => row[i]).reverse());
// if (direction === "ccw") matrix[0].map((_, i) => matrix.map(row => row[n - i - 1]));

// From: https://www.codewars.com/kata/rotate-an-array-matrix/
// https://www.codewars.com/kata/rotate-matrix-counter-clockwise-n-times/
// https://www.codewars.com/kata/basics-04-rotate-matrix/
// 6 kyu, 5 kyu

console.log(matrixRotate([[1, 2], [3, 4]], "counter-clockwise", 5));

console.log(matrixRotate([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[10, 11, 12],
	[13, 14, 15]], "clockwise", 3));

console.log(matrixRotate([
	[1, 2, 3],
	[4, 5, 6]], "counter-clockwise", 2));
console.log(matrixRotate([
	[1, 4],
	[2, 5],
	[3, 6]], "counter-clockwise", 1));
