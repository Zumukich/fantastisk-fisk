/*
Kéne egy olyan függvény, ami:
 - Visszaadja egy adott koordinátájú elem
   * sorának elemeit
   * oszlopának elemeit
   * gridjének elemeit
 - Meglévő tömbből megadott elemeket eltávolítja

*/

var puzzle = [
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9]];

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

function getPossibleNumbers(board, col, row) {
	var allPossibleNumbers = [];
	for (var i = 0; i < board.length; i++) allPossibleNumbers.push(i + 1);
	var usedNumbers = getRowItems(board, row)
		.concat(getColItems(board, col)
			.concat(getGridItems(board, row, col)))
		.filter(element => element != 0);
	return allPossibleNumbers.removeMultipleElements(usedNumbers).removeDuplicateElements();
}

Array.prototype.removeMultipleElements = function (removedElements) {
	return this.filter(entry => !removedElements.includes(entry));
};

Array.prototype.removeDuplicateElements = function () {
	return this.filter((entry, index) => index === this.indexOf(entry));
};

function main(board) {
	for (var count = 0; count < 10; count++) {
		for (var row = 0; row < board.length; row++) {
			for (var col = 0; col < board[0].length; col++) {
				if (board[row][col] === 0) {
					var possibilities = getPossibleNumbers(board, col, row);
					if (possibilities.length === 1) {
						board[row][col] = possibilities[0];
						console.log(col, row, possibilities[0]);
					}
				}
			}
		}
	}
	return board;
}


// console.log(getRowItems(puzzle, 3));
// console.log(getColItems(puzzle, 3));
// console.log(getGridItems(puzzle, 3, 4));
// console.log([5, 3, 0, 0, 7, 0, 0, 0, 0].removeMultipleElements([0, 3, 5]));
// console.log([5, 3, 0, 0, 7, 0, 0, 0, 0].removeDuplicateElements());
// console.log([5, 3, 0, 0, 7, 0, 0, 0, 0].removeDuplicateElements());
// console.log([5, 3, 5, 7, 0, 0, 7, 0, 0, 0, 0].removeDuplicateElements());

// console.log(getPossibleNumbers(puzzle, 2, 0).removeDuplicateElements());

// console.log(puzzle);

console.log(main(puzzle));
