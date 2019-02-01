const getGCD = (x, y) => (x % y === 0) ? y : getGCD(y, x % y);
const getLCM = (x, y) => Math.abs(x) / getGCD(x, y) * Math.abs(y);

function convertFrac(fractions) {
	var lcs = fractions.reduce((lcd, [, denom]) => getLCM(lcd, denom), 1);
	return fractions.map(([num, denom]) => [lcs / denom * num, lcs]).map(e => "(" + e.join(",") + ")").join("");
}

function sumFracts(fracList) {
	if (!fracList || fracList.length === 0) return null;
	var cd = fracList.reduce((lcd, [, denom]) => getLCM(lcd, denom), 1);
	var sum = fracList.map(([num, denom]) => [cd / denom * num, cd]).reduce((sum, [num,]) => sum += num, 0);
	var gcd = getGCD(sum, cd);
	return sum % cd === 0 ? sum / cd : [sum / gcd, cd / gcd];
}

// From: https://www.codewars.com/kata/greatest-common-divisor
// also: https://www.codewars.com/kata/common-denominators
// also: https://www.codewars.com/kata/irreducible-sum-of-rationals
// 5-7 kyu

console.log(convertFrac([[1, 2], [1, 3], [1, 4]]));

console.log(sumFracts([[1, 2], [1, 3], [1, 4]]));      // [13, 12]
console.log(sumFracts([[1, 3], [5, 3]]));              // 2
console.log(sumFracts([[12, 3], [15, 3]]));            // 9
console.log(sumFracts([[2, 7], [1, 3], [1, 12]]));     // [59, 84]
