function largestArrangement(array) {
	const sortBySignificance = (a, b) => {
		var strA = String(a);
		var strB = String(b);
		var len = Math.max(strA.length, strB.length);
		strA = strA.padEnd(len, strA[0]);
		strB = strB.padEnd(len, strB[0]);
		return parseInt(strB) - parseInt(strA);
	}
	return array.sort(sortBySignificance).join("-");
}



// From: https://www.codewars.com/kata/largest-number-arrangement
// 6 kyu

console.log(largestArrangement([4, 50, 8, 145]));        //  8504145(8 - 50 - 4 - 145)
console.log(largestArrangement([4, 40, 7]));             //  7440(7 - 4 - 40)
console.log(largestArrangement([5, 60, 299, 56]));       //  60565299(60 - 56 - 5 - 299)
console.log(largestArrangement([5, 2, 1, 9, 50, 56]));   //  95655021(9 - 56 - 5 - 50 - 21)
console.log(largestArrangement([6, 73, 79, 356, 7]));    //  797736356 (79 - 7 - 73 - 6 - 356)
console.log(largestArrangement([64, 29, 5, 9, 982, 3])); //  9982645329 (9 - 982 - 64 - 5 - 3 - 29)
console.log(largestArrangement([141, 63, 51, 966, 520, 48, 82, 14, 397])); //  9.66826352051484e+21 (966 - 82 - 63 - 520 - 51 - 48 - 397 - 14 - 141)
console.log(largestArrangement([70, 7, 81, 28, 336, 246, 817, 77, 4, 550])); //  8.181777770550434e+21 (81 - 817 - 77 - 7 - 70 - 550 - 4 - 336 - 28 - 246)

81781
81817
