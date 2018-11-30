function getGCD(x, y) {
	if (x % y === 0) {
		return y;
	} else {
		return getGCD(y, x % y);
	}
}

function getLCM(a, b) {
	return Math.abs(a) / getGCD(a, b) * Math.abs(b);
}

function convertFrac(fractions) {
	var lcs = fractions.reduce((lcd, [, denom]) => getLCM(lcd, denom), 1);
	return fractions.map(([num, denom]) => [lcs / denom * num, lcs]).map(e => "(" + e.join(",") + ")").join("");
}

console.log(convertFrac([[1, 2], [1, 3], [1, 4]]));
