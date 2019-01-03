function smallest(n) {
	var digits = n.toString().split("").map(e => parseInt(e));
	var moves = [];

	function getValueAfterMove(arr, oldIdx, newIdx) {
		var tempArr = arr.slice();
		tempArr.splice(newIdx, 0, tempArr.splice(oldIdx, 1)[0]);
		return parseInt(tempArr.join(""));
	}

	for (var i1 = digits.length - 1; i1 >= 0; i1--) {
		for (var j1 = 0; digits[i1] > digits[j1]; j1++);
		if (j1 <= i1) {
			moves.push([getValueAfterMove(digits, i1, j1), i1, j1]);
		}
	}
	for (let i2 = 0; i2 < digits.length - 1; i2++) {
		for (var j2 = i2; digits[i2] >= digits[j2 + 1]; j2++);
		while (digits[i2] === digits[j2]) j2--;
		if (j2 >= i2) {
			moves.push([getValueAfterMove(digits, i2, j2), i2, j2]);
		}
	}
	return moves.sort(([val1, i1, j1], [val2, i2, j2]) => val1 - val2 || i1 - i2 || j1 - j2)[0];
}

// From: https://www.codewars.com/kata/find-the-smallest
// 5 kyu

console.log(261235, "==>", smallest(261235));  // 126235
console.log(209917, "==>", smallest(209917));  //  29917
console.log(285365, "==>", smallest(285365));  // 238565
console.log(269045, "==>", smallest(269045));  //  26945
console.log(296837, "==>", smallest(296837));  // 239687
console.log(100000, "==>", smallest(100000));  //      1
console.log(199819884756, "==>", smallest(199819884756));         // [119989884756, 4, 0]
console.log(111111111, "==>", smallest(111111111));               // [111111111, 0, 0]
console.log(1952512413227178, "==>", smallest(1952512413227178)); // [1195251241322778, 13, 0]
console.log(8137851449686271, "==>", smallest(8137851449686271)); // [1378514489686271, 0, 8]
console.log(2424599888863869, "==>", smallest(2424599888863869)); // [2244599888863869, 1, 2]
