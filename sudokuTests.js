// Not unique, but solvable
console.log(solve([
	[0, 2, 0, 1],    // [3, 2, 4, 1]
	[0, 1, 0, 0],    // [4, 1, 3, 2]
	[2, 3, 0, 4],    // [2, 3, 1, 4]
	[1, 4, 2, 3]])); // [1, 4, 2, 3]

// Invalid due to repetition
console.log(solve(
	[[0, 4, 1, 4],
	[3, 1, 2, 4],
	[4, 2, 0, 1],
	[1, 3, 4, 0]]));

// Valid
console.log(solve([
	[0, 0, 2, 0],
	[0, 3, 0, 4],
	[3, 0, 4, 0],
	[0, 2, 0, 0]]));
