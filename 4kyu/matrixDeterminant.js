function getMinor(matrix, row, col) {
	return matrix
		.map(r => r.filter((undefined, i) => i !== col))
		.filter((undefined, i) => i !== row);
}

function matrixDeterminant(matrix) {
	if (matrix.length === 1) {
		return matrix[0];
	}
	if (matrix.length === 2) {
		return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
	} else {
		var det = 0;
		for (let i = 0; i < matrix.length; i++) {
			var sign = i % 2 === 0 ? 1 : -1;
			det += sign * matrix[0][i] * matrixDeterminant(getMinor(matrix, 0, i));
		}
		return det;
	}
}

// From: https://www.codewars.com/kata/matrix-determinant
// 4 kyu

console.log(matrixDeterminant([1]));
console.log(matrixDeterminant([
	[4, 6],
	[3, 8]]));        // 14
console.log(matrixDeterminant([
	[3, 8],
	[4, 6]]));        // -14
console.log(matrixDeterminant([
	[6, 1, 1],
	[4, -2, 5],
	[2, 8, 7]]));     // -306
console.log(matrixDeterminant([
	[5, 3, 7],
	[2, 4, 9],
	[3, 6, 4]]));     // -133
console.log(matrixDeterminant([
	[5, 3, 7, 3],
	[2, 4, 9, 2],
	[3, 6, 4, 8],
	[3, 6, 3, 1]
]));                  // 1001
console.log(matrixDeterminant([
	[5, 3, 7, 3, 2],
	[2, 4, 9, 2, 6],
	[3, 6, 4, 8, 7],
	[3, 6, 3, 1, 3],
	[3, 2, 6, 7, 1]
]));                  // -3810
