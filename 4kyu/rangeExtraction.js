function rangeExtraction(list) {
	var ranges = [];
	for (let i = 1; i <= list.length; i++) {
		if (list[i] !== list[i - 1] + 1 || list[i] !== list[i + 1] - 1) {
			ranges.push(list[i - 1].toString());
		} else {
			let start = list[i - 1];
			while (list[i] === list[i - 1] + 1) {
				i++
			}
			ranges.push(start + "-" + list[i - 1]);
		}
	}
	return ranges.join(",");
}

// From: https://www.codewars.com/kata/range-extraction
// 4 kyu

console.log(rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
