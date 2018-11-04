function check(board) {
	var queenSquare = board.reduce((pos, rank, idx) => {
		if (rank.indexOf("q") !== -1) {
			pos.push(rank.indexOf("q"));
			pos.push(idx);
		}
		return pos;
	}, []);

	var kingSquare = board.reduce((pos, rank, idx) => {
		if (rank.indexOf("k") !== -1) {
			pos.push(rank.indexOf("k"));
			pos.push(idx);
		}
		return pos;
	}, []);
	return queenSquare[0] === kingSquare[0]
		|| queenSquare[1] === kingSquare[1]
		|| Math.max(queenSquare[0], kingSquare[0]) - Math.min(queenSquare[0], kingSquare[0]) === Math.max(queenSquare[1], kingSquare[1]) - Math.min(queenSquare[1], kingSquare[1]);
}

// From: https://www.codewars.com/kata/check-by-queen/
// 6 kyu

console.log(check([
	['*', 'k', '*', '*', '*'],
	['*', '*', 'q', '*', '*'],
	['*', '*', '*', '*', '*'],
	['*', '*', '*', '*', '*'],
	['*', '*', '*', '*', '*']
])); // true

console.log(check([
	['*', '*', 'q', '*', '*'],
	['k', '*', '*', '*', '*'],
	['*', '*', '*', '*', '*'],
	['*', '*', '*', '*', '*'],
	['*', '*', '*', '*', '*']
])); // false
