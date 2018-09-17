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
	var startX = Math.floor(col / gridSize) * gridSize;
	var startY = Math.floor(row / gridSize) * gridSize;
	for (var j = startY; j < startY + gridSize; j++) {
		for (var i = startX; i < startX + gridSize; i++) {
			retArray.push(board[i][j]);
		}
	}
	return retArray;
}

function checkCompleteness(array, boardSize) {
	var allPossibleNumbers = [];
	var tempArray = array.slice();
	for (var i = 0; i < boardSize; i++) allPossibleNumbers.push(i + 1);
	return tempArray.sort((a, b) => a - b).join("") === allPossibleNumbers.join("");
}

function sudokuValidator(board) {
	var valid = true;
	const boardSize = board.length;
	const gridSize = Math.sqrt(boardSize);
	if (Number.isInteger(gridSize) === false) return false;
	for (var i = 0; i < boardSize; i++) {
		var checkedRow = getRowItems(board, i);
		var checkedCol = getColItems(board, i);
		if (!checkCompleteness(checkedRow, boardSize) || !checkCompleteness(checkedCol, boardSize)) valid = false;
	}
	for (var gridY = 0; gridY < boardSize; gridY += gridSize) {
		for (var gridX = 0; gridX < boardSize; gridX += gridSize) {
			var checkedGrid = getGridItems(board, gridX, gridY);
			if (!checkCompleteness(checkedGrid, boardSize)) valid = false;
		}
	}
	return valid;
}

// From: https://www.codewars.com/kata/sudoku-solution-validator/
// also https://www.codewars.com/kata/did-i-finish-my-sudoku/
// also https://www.codewars.com/kata/validate-sudoku-with-size-nxn/
// 4 (5) kyu

console.log(sudokuValidator([
	[1, 4, 4, 3, 'a'],
	[3, 2, 4, 1],
	[4, 1, 3, 3],
	[2, 0, 1, 4],
	['', false, NaN, '4']
]));

// console.log(sudokuValidator(
// 	[
// 		[1, 2, 3, 4, 5, 6, 7, 8, 9],
// 		[2, 3, 1, 5, 6, 4, 8, 9, 7],
// 		[3, 1, 2, 6, 4, 5, 9, 7, 8],
// 		[4, 5, 6, 7, 8, 9, 1, 2, 3],
// 		[5, 6, 4, 8, 9, 7, 2, 3, 1],
// 		[6, 4, 5, 9, 7, 8, 3, 1, 2],
// 		[7, 8, 9, 1, 2, 3, 4, 5, 6],
// 		[8, 9, 7, 2, 3, 1, 5, 6, 4],
// 		[9, 7, 8, 3, 1, 2, 6, 4, 5]
// 	]
// ));

// console.log(sudokuValidator(
// 	[
// 		[5, 3, 4, 6, 7, 8, 9, 1, 2],
// 		[6, 7, 2, 1, 9, 5, 3, 4, 8],
// 		[1, 9, 8, 3, 4, 2, 5, 6, 7],
// 		[8, 5, 9, 7, 6, 1, 4, 2, 3],
// 		[4, 2, 6, 8, 5, 3, 7, 9, 1],
// 		[7, 1, 3, 9, 2, 4, 8, 5, 6],
// 		[9, 6, 1, 5, 3, 7, 2, 8, 4],
// 		[2, 8, 7, 4, 1, 9, 6, 3, 5],
// 		[3, 4, 5, 2, 8, 6, 1, 7, 9]
// 	]
// ));

// console.log(sudokuValidator(
// 	[
// 		[5, 5, 5, 5, 5, 5, 5, 5, 5],
// 		[5, 5, 5, 5, 5, 5, 5, 5, 5],
// 		[5, 5, 5, 5, 5, 5, 5, 5, 5],
// 		[5, 5, 5, 5, 5, 5, 5, 5, 5],
// 		[5, 5, 5, 5, 5, 5, 5, 5, 5],
// 		[5, 5, 5, 5, 5, 5, 5, 5, 5],
// 		[5, 5, 5, 5, 5, 5, 5, 5, 5],
// 		[5, 5, 5, 5, 5, 5, 5, 5, 5],
// 		[5, 5, 5, 5, 5, 5, 5, 5, 5]
// 	]
// ))
