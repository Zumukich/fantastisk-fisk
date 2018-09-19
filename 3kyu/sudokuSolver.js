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

function getPossibleNumbers(board, col, row) {
	var allPossibleNumbers = [];
	for (var i = 0; i < board.length; i++) allPossibleNumbers.push(i + 1);
	var usedNumbers = getRowItems(board, row)
		.concat(getColItems(board, col)
			.concat(getGridItems(board, row, col)))
		.filter(element => element != 0);
	return allPossibleNumbers
		.filter(entry => !usedNumbers.includes(entry));
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

function solve(board) {
	if (validateBoard(board) != true) return "This sudoku is invalid!";
	var emptyCell, filledCell, lastRow, lastCol, lastOpt;
	do {
		emptyCell = false; filledCell = false;
		for (var row = 0; row < board.length; row++) {
			for (var col = 0; col < board[0].length; col++) {
				if (board[row][col] === 0) {
					emptyCell = true;
					var possibilities = getPossibleNumbers(board, col, row);
					if (possibilities.length === 0) return "This sudoku is unsolvable!";
					if (possibilities.length === 1) {
						board[row][col] = possibilities[0];
						filledCell = true;
					} else {
						lastRow = row;
						lastCol = col;
						lastOpt = possibilities[0];
					}
				}
			}
		}
		if (emptyCell && !filledCell && lastOpt != undefined) {
			board[lastRow][lastCol] = lastOpt;
			filledCell = true;
		}
		if (emptyCell && !filledCell) return "This sudoku is unsolvable!";
	} while (emptyCell && filledCell);
	return board;
}

// From: https://www.codewars.com/kata/sudoku-solver
// Also: https://www.codewars.com/kata/finish-this-mini-sudoku/
// 3 kyu

// Valid
console.log(solve([
	[0, 0, 6, 0, 2, 0, 0, 5, 0],
	[0, 0, 2, 0, 0, 0, 1, 9, 4],
	[0, 0, 0, 1, 0, 0, 2, 0, 7],
	[6, 0, 7, 0, 8, 2, 0, 1, 9],
	[0, 8, 5, 0, 7, 0, 0, 3, 0],
	[0, 0, 0, 6, 0, 5, 4, 0, 0],
	[0, 9, 0, 0, 1, 3, 0, 4, 0],
	[0, 0, 1, 0, 0, 9, 0, 0, 0],
	[7, 3, 0, 0, 0, 8, 9, 0, 0]]));
