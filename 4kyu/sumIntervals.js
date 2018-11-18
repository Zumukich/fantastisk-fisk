function sumIntervals(intervals) {
	return new Set(intervals.reduce((union, curArr) => {
		for (let i = Math.min(...curArr); i < Math.max(...curArr); i++) {
			union.push(i);
		}
		return union;
	}, [])).size;
}

// From: https://www.codewars.com/kata/sum-of-intervals/
// 4 kyu

console.log(sumIntervals([
	[1, 2],
	[6, 10],
	[11, 15]]));   // 9
console.log(sumIntervals([
	[1, 4],
	[7, 10],
	[3, 5]]));    // 7
console.log(sumIntervals([
	[1, 5],
	[10, 20],
	[1, 6],
	[16, 19],
	[5, 11]]));   // 19
