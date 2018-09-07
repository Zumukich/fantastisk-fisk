function sudokuValidator(board) {
	var valid = true;
	// for (var i = 0; i < 9; i++) {
	// 	// Validate whether all rows add up to 45
	// 	if (board[i].reduce((a, b) => a + b) != 45) valid = false;
	// 	// Validate whether all columns add up to 45
	// 	var colTotal = 0;
	// 	for (var j = 0; j < 9; j++) {
	// 		colTotal += board[j][i];
	// 	}
	// 	if (colTotal != 45) valid = false;
	// }
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

console.log(sudokuValidator(
	[
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[2, 3, 1, 5, 6, 4, 8, 9, 7],
		[3, 1, 2, 6, 4, 5, 9, 7, 8],
		[4, 5, 6, 7, 8, 9, 1, 2, 3],
		[5, 6, 4, 8, 9, 7, 2, 3, 1],
		[6, 4, 5, 9, 7, 8, 3, 1, 2],
		[7, 8, 9, 1, 2, 3, 4, 5, 6],
		[8, 9, 7, 2, 3, 1, 5, 6, 4],
		[9, 7, 8, 3, 1, 2, 6, 4, 5]
	]
));

console.log(sudokuValidator(
	[
		[5, 3, 4, 6, 7, 8, 9, 1, 2],
		[6, 7, 2, 1, 9, 5, 3, 4, 8],
		[1, 9, 8, 3, 4, 2, 5, 6, 7],
		[8, 5, 9, 7, 6, 1, 4, 2, 3],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[9, 6, 1, 5, 3, 7, 2, 8, 4],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 4, 5, 2, 8, 6, 1, 7, 9]
	]
));

console.log(sudokuValidator(
	[
		[5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5]
	]
))
