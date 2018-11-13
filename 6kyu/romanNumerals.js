function romanEncoder(num) {
	if (!num || !Number.isInteger(num) || num > 3999 || num < 1) return null;
	var romanNum = "";
	const thousands = Math.floor(num / 1000);
	romanNum += "M".repeat(thousands);
	num -= thousands * 1000;

	if (num >= 500) {
		romanNum += "D";
		num -= 500;
	}

	if (num >= 400) {
		romanNum += "CM"
		num -= 400;
	} else {
		const hundreds = Math.floor(num / 100);
		romanNum += "C".repeat(hundreds);
		num -= hundreds * 100;
	}

	return romanNum;
}

console.log(romanEncoder(1666));
console.log(romanEncoder(2008));
console.log(romanEncoder(1975));
