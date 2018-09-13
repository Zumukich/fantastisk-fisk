function getRowItems(board, row) {
	return board[row];
}

function getColItems(board, col) {
	var retArray = [];
	for (var i = 0; i < board.length; i++) {
		retArray.push(board[i][col]);
	}
	return retArray;
}

function getGridItems(board, col, row) {
	const gridSize = Math.sqrt(board.length);
	var retArray = [];
	startX = Math.floor(col / gridSize) * gridSize;
	startY = Math.floor(row / gridSize) * gridSize;
	for (var j = startY; j < startY + gridSize; j++) {
		for (var i = startX; i < startX + gridSize; i++) {
			retArray.push(board[i][j]);
		}
	}
	return retArray;
}

function checkZeroes(array) {
	return !array ? false : array.includes(0);
}

function checkDuplicates(array) {
	return !array ? false : array.some((val, idx) => array.indexOf(val) !== idx);
}

console.log("zeroesF", checkZeroes([1, 2, 3, 4, 5, 6, 7, 8, "a", false, 9]));
console.log("zeroesT", checkZeroes([1, 2, 3, 4, 5, 6, 7, 8, "a", false, 0, 9, 0]));
console.log("zeroesF", checkZeroes([]));
console.log("zeroesF", checkZeroes(undefined));
console.log("zeroesF", checkZeroes(NaN));

console.log("dupsF", checkDuplicates([1, 2, 3, 4, 5, 6, 7, 8, "a", false, 9]));
console.log("dupsT", checkDuplicates([1, 2, 3, 4, 5, 6, 7, 8, "a", false, 0, 9, 0]));
console.log("dupsF", checkDuplicates([]));
console.log("dupsF", checkDuplicates(undefined));
console.log("dupsF", checkDuplicates(NaN));

function checkCompleteness(array, boardSize) {
	var allPossibleNumbers = [];
	for (var i = 0; i < boardSize; i++) allPossibleNumbers.push(i + 1);
	var diffArr = allPossibleNumbers.filter(entry => !array.includes(entry));
	console.log(typeof diffArr, diffArr, typeof [], [], diffArr == [], diffArr === []);
	return diffArr == [];
}

console.log("completeT", checkCompleteness([3, 1, 2, 4], 4));
console.log("completeF", checkCompleteness([1, 3, 4], 4));
console.log("completeF", checkCompleteness([1, 10, 3, 4], 4));
console.log("completeT", checkCompleteness([4, 5, 6, 7, 8, 9, 1, 2, 3], 9));
console.log("completeF", checkCompleteness([4, 5, 5, 7, 8, 9, 1, 2, 3], 9));
console.log("completeT", checkCompleteness([4, 5, 6, 7, 8, 9, 1, 2, 3, 10], 10));

function getPossibleNumbers(board, col, row) {
	var allPossibleNumbers = [];
	for (var i = 0; i < board.length; i++) allPossibleNumbers.push(i + 1);
	var usedNumbers = getRowItems(board, row)
		.concat(getColItems(board, col)
			.concat(getGridItems(board, row, col)))
		.filter(element => element != 0);
	return;
}

function duplicateExists(array) {
	var tempWoZeros = array.filter(element => element !== 0);
	return tempWoZeros.some((val, i) => tempWoZeros.indexOf(val) !== i);
}

function validateBoard(board) {
	var valid = true;
	for (var i = 0; i < board.length; i++)
		if (duplicateExists(getRowItems(board, i)) || duplicateExists(getColItems(board, i))) valid = false;
	return valid;
}

function sudokuValidator(board) {
	var valid = true;
	var allPossibleNumbers = [];
	for (var i = 0; i < board.length; i++) allPossibleNumbers.push(i + 1);

	for (var i = 0; i < board.length; i++) {
		var checkedRow = getRowItems(board, i);
		if (
			checkedRow.indexOf(0) === -1 ||
			checkedRow.some((val, i) => checkedRow.indexOf(val) !== i)
		) valid = false;


		var checkedCol = getColItems(board, i);
		if (
			checkedCol.indexOf(0) === -1 ||
			checkedCol.some((val, i) => checkedRow.indexOf(val) !== i)
		) valid = false;
	}
	return valid;

	var usedNumbers = getRowItems(board, row)
		.concat(getColItems(board, col)
			.concat(getGridItems(board, row, col)))
		.filter(element => element != 0);
	return allPossibleNumbers
		.filter(entry => !usedNumbers.includes(entry));


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

// From: https://www.codewars.com/kata/sudoku-solution-validator/
// also https://www.codewars.com/kata/did-i-finish-my-sudoku/
// 4 (5) kyu

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
