function matrixTranspose(matrix, direction) {
	var resultMatrix = new Array(matrix[0].length);
	for (var i = 0; i < matrix[0].length; i++) {
		resultMatrix[i] = new Array(matrix.length);
		for (var j = 0; j < matrix.length; j++) {
			resultMatrix[i][matrix.length - j - 1] = direction === "counter-clockwise" ? matrix[matrix.length - j - 1][matrix[0].length - i - 1] : matrix[j][i];
		}
	}
	return resultMatrix;
}

// From: https://www.codewars.com/kata/rotate-an-array-matrix/
// 5 kyu

console.log(matrixTranspose([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[10, 11, 12],
	[13, 14, 15]], "clockwise"));

console.log(matrixTranspose([
	[1, 2, 3],
    [4, 5, 6]], "counter-clockwise"));
console.log(matrixTranspose([
	[1, 4],
	[2, 5],
	[3, 6]], "counter-clockwise"));
