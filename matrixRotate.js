function matrixRotate(matrix) {
	var resultMatrix = new Array(matrix[0].length);
	for (var i = 0; i < matrix[0].length; i++) {
		resultMatrix[i] = new Array(matrix.length);
		for (var j = 0; j < matrix.length; j++) {
			resultMatrix[i][matrix[0].length - j] = matrix[j][i];
		}
	}
	return resultMatrix;
}

console.log(matrixRotate([
	[1, 2, 3],
    [4, 5, 6]]));
// console.log(matrixRotate([
// 	[1, 4],
// 	[2, 5],
// 	[3, 6]]));
