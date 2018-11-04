function biggestNum(a, b) {
	// Normalize input by reducing signs and removing leading zeros
	function normalize(str) {
		const lastSign = str.lastIndexOf("-") + 1;
		return (str.slice(0, lastSign).length % 2 === 1 ? "-" : "") + str.slice(lastSign).replace(/^0*(.+)$/, "$1");
	}
	var normA = normalize(a);
	var normB = normalize(b);
	// console.log(a, "==>", normA + "\n" + b, "==>", normB);
	// Establish a shared beginning between equal-length strings
	for (var redLen = 0; normA.length === normB.length && redLen < Math.max(normA.length, normB.length) - 1 && normA.slice(0, redLen + 1) === normB.slice(0, redLen + 1); redLen++);
	const commonPart = normA.slice(0, redLen).replace(/^-/, "");
	// Compare strins after removing any shared beginning
	// console.log("Ilyen hoszú:", redLen, "; Ez a közös:", `"${commonPart}"` + "\n" + normA, "==>", normA.split(commonPart).join("") + "\n" + normB, "==>", normB.split(commonPart).join(""));
	return parseInt(normA.split(commonPart).join("")) > parseInt(normB.split(commonPart).join("")) ? normA : normB;
}

// From: https://www.codewars.com/kata/biggest-number-with-strings/
// 6 kyu

console.log(biggestNum("--25", "7"));          // 25
console.log(biggestNum("---25", "7"));         // 7
console.log(biggestNum("0000", "0006"));
console.log(biggestNum("-----05", "-5"));
console.log(biggestNum("-45", "-54"));
console.log(biggestNum("9007199254740991", "9007199254740990"));
console.log(biggestNum("9007199254740990", "9007199254740991"));
console.log(biggestNum("4159256226770199821", "02745013005431679876795716322992"));
console.log(biggestNum("90071992547409910", "90071992547409911"));
console.log(biggestNum("90071992547409911", "90071992547409910"));
console.log(biggestNum("-90071992547409910", "-90071992547409911"));
console.log(biggestNum("-90071992547409911", "-90071992547409910"));
console.log(biggestNum("100000000000000000000000000000000000002", "100000000000000000000000000000000000001"));
console.log(biggestNum("464084863726052772550764938718872786466654603733723917851373053722118600358625924431415551607", "4701317113155134665516627885971381177608148686342312501369252919981566395797048615233310966"));
