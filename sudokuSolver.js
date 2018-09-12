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
	startX = col === 0 ? 0 : Math.floor(col / gridSize) * gridSize;
	startY = row === 0 ? 0 : Math.floor(row / gridSize) * gridSize;
	for (var j = startY; j < startY + gridSize; j++) {
		for (var i = startX; i < startX + gridSize; i++) {
			retArray.push(board[i][j]);
		}
	}
	return retArray;
}

Array.prototype.removeElements = function (removedElements) {
	return this.filter(entry => !removedElements.includes(entry));
};

Array.prototype.removeDuplicateElements = function () {
	return this.filter((entry, index) => index === this.indexOf(entry));
};

function getPossibleNumbers(board, col, row) {
	var allPossibleNumbers = [];
	for (var i = 0; i < board.length; i++) allPossibleNumbers.push(i + 1);
	var usedNumbers = getRowItems(board, row)
		.concat(getColItems(board, col)
		.concat(getGridItems(board, row, col)))
		.filter(element => element != 0);
	return allPossibleNumbers
		.removeDuplicateElements()
		.removeElements(usedNumbers);
}

function validateBoard(board) {
	var valid = true;
	for (var i = 0; i < board.length; i++) {
		console.log(getRowItems(board, i), getRowItems(board, i).removeDuplicateElements(), getRowItems(board, i).join("").split("") != getRowItems(board, i).removeDuplicateElements().join("").split(""));
		if (getRowItems(board, i) != getRowItems(board, i).removeDuplicateElements()) valid = false;
	}
	return valid;
}
a.some((val, i) => a.indexOf(val) !== i);
function solve(board) {
	if (validateBoard(board) != true) return "This sudoku is unsolvable!";
		do {
		var emptyCell = false;
		var filledCell = false;
		for (var row = 0; row < board.length; row++) {
			for (var col = 0; col < board[0].length; col++) {
				if (board[row][col] === 0) {
					emptyCell = true;
					var possibilities = getPossibleNumbers(board, col, row);
					if (possibilities.length === 1) {
						board[row][col] = possibilities[0];
						filledCell = true;
					}
				}
			}
		}
		if (emptyCell && !filledCell) return "This sudoku is unsolvable!";
	} while (emptyCell && filledCell);
	return board;
}

// From: https://www.codewars.com/kata/sudoku-solver
// 3 kyu

console.log(solve(
	[[0, 4, 1, 4],
	[3, 1, 2, 4],
	[4, 2, 0, 1],
	[1, 3, 4, 0]]));

// console.log(solve([
// 	[2, 0, 0, 1],
// 	[0, 0, 1, 0],
// 	[0, 2, 0, 0],
// 	[0, 0, 0, 4]]));

// console.log(solve([
// 	[0, 0, 2, 0],
// 	[0, 3, 0, 4],
// 	[3, 0, 4, 0],
// 	[0, 2, 0, 0]]));

// console.log(solve([
// 	[0, 0, 6, 0, 2, 0, 0, 5, 0],
// 	[0, 0, 2, 0, 0, 0, 1, 9, 4],
// 	[0, 0, 0, 1, 0, 0, 2, 0, 7],
// 	[6, 0, 7, 0, 8, 2, 0, 1, 9],
// 	[0, 8, 5, 0, 7, 0, 0, 3, 0],
// 	[0, 0, 0, 6, 0, 5, 4, 0, 0],
// 	[0, 9, 0, 0, 1, 3, 0, 4, 0],
// 	[0, 0, 1, 0, 0, 9, 0, 0, 0],
// 	[7, 3, 0, 0, 0, 8, 9, 0, 0]]));
