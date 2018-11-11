function matrixTranspose(matrix) {
	var resultMatrix = new Array(matrix[0].length);
	for (var i = 0; i < matrix[0].length; i++) {
		resultMatrix[i] = new Array(matrix.length);
		for (var j = 0; j < matrix.length; j++) {
			resultMatrix[i][j] = matrix[j][i];
		}
	}
	return resultMatrix;
}

Array.prototype.transpose = function () {
	if (this.length === 0) return [];
	if (this[0].length === 0) return [[]];
	var resultMtx = Array(this[0].length).fill(Array(this.length).fill(null)).map(a => a.slice());
	for (let r = 0; r < this.length; r++) {
		for (let c = 0; c < this[0].length; c++) {
			resultMtx[c][r] = this[r][c];
		}
	}
	return resultMtx;
	// return this[0].map((_, i) => this.map(r => r[i]));
}

// From: https://www.codewars.com/kata/matrix-transpose/
// also https://www.codewars.com/kata/transpose-of-a-matrix
// 6 kyu

console.log(matrixTranspose([
	[1, 2, 3],
    [4, 5, 6]]));
console.log(matrixTranspose([
	[1, 2],
	[3, 4],
	[5, 6]]));
console.log([[1, 2, 3], [4, 5, 6]].transpose());
console.log([].transpose());
console.log([[]].transpose());
console.log([[], [], [], []].transpose());
