function validSolution(board) {
	var valid = true;
	for (offset = 0; offset <= 6; offset += 3) {
		var firstSqareSum = 0;
		var secondSqareSum = 0;
		var thirdSqareSum = 0;
		for (row = 0; row < 3; row++) {
			for (col = 0; col < 3; col++) {
				firstSqareSum += board[row + offset][col];
				secondSqareSum += board[row + offset][col + 3];
				thirdSqareSum += board[row + offset][col + 6];
			}
		}
		if (firstSqareSum != 45 || secondSqareSum != 45 || thirdSqareSum != 45) valid = false;
	}
	return valid;
}

console.log(validSolution([
	[5, 3, 4, 6, 7, 8, 9, 1, 2],
	[6, 7, 2, 1, 9, 5, 3, 4, 8],
	[1, 9, 8, 3, 4, 2, 5, 6, 7],
	[8, 5, 9, 7, 6, 1, 4, 2, 3],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 6, 1, 5, 3, 7, 2, 8, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 4, 5, 2, 8, 6, 1, 7, 9]
]));

console.log(validSolution([
	[5, 3, 4, 6, 7, 8, 9, 1, 2],
	[6, 7, 2, 1, 9, 0, 3, 4, 8],
	[1, 0, 0, 3, 4, 2, 5, 6, 0],
	[8, 5, 9, 7, 6, 1, 0, 2, 0],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 0, 1, 5, 3, 7, 2, 1, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 0, 0, 4, 8, 1, 1, 7, 9]
]));
