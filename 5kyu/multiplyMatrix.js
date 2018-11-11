function multiplyMatrix(mtxA, mtxB) {
	if (mtxA[0].length !== mtxB.length) {
		return "Invalid input!";
	}
	var product = Array(mtxA.length).fill(Array(mtxB[0].length).fill(null)).map(a => a.slice());
	for (let row = 0; row < mtxA.length; row++) {
		for (let col = 0; col < mtxB[0].length; col++) {
			for (let s = 0; s < mtxB.length; s++) {
				product[row][col] += mtxA[row][s] * mtxB[s][col]
			}
		}
	}
	return product;
}

// From: https://www.codewars.com/kata/square-matrix-multiplication
// 5 kyu

console.log(multiplyMatrix([
	[1, 2, 1],
	[0, 1, 0],
	[2, 3, 4],
	[3, 2, 5]
], [
	[2, 5],
	[6, 7],
	[1, 8]]));   // 15, 27, 6, 7, 26, 63, 23, 69

console.log(multiplyMatrix([
	[1, 2],
	[3, 1]
], [
	[2, 5],
	[6, 7]]));    // 14, 19, 12, 22
