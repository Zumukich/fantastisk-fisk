function matrixAddition(mtxA, mtxB) {
	if (mtxA.length !== mtxB.length || mtxA[0].length !== mtxB[0].length) return null;
	return mtxA.map((row, rowIdx) => row.map((col, colIdx) => col + mtxB[rowIdx][colIdx]));
}

// From: https://www.codewars.com/kata/matrix-addition
// 6 kyu

console.log(matrixAddition([
	[1, 2, 3],
	[3, 2, 1],
	[1, 1, 1]],
	//      +
	[[2, 2, 1],
	[3, 2, 3],
	[1, 1, 3]]));
