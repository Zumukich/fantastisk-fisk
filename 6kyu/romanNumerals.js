function romanEncoder(num) {
	if (!num || !Number.isInteger(num) || num > 3999 || num < 1) return null;
	var romanNum = "";

	const thousands = Math.floor(num / 1000);
	romanNum += "M".repeat(thousands);
	num -= thousands * 1000;

	var hundreds = Math.floor(num / 100);
	if (hundreds === 9) {
		romanNum += "CM";
		num -= 900;
		hundreds -= 9;
	}
	if (hundreds >= 5) {
		romanNum += "D";
		num -= 500;
		hundreds -= 5;
	}
	if (hundreds === 4) {
		romanNum += "CD";
		num -= 400;
		hundreds -= 4;
	}
	if (hundreds <= 3) {
		romanNum += "C".repeat(hundreds);
		num -= hundreds * 100;
	}

	var tens = Math.floor(num / 10);
	if (tens === 9) {
		romanNum += "XC";
		num -= 90;
		tens -= 9;
	}
	if (tens >= 5) {
		romanNum += "L";
		num -= 50;
		tens -= 5;
	}
	if (tens === 4) {
		romanNum += "XL";
		num -= 40;
		tens -= 4;
	}
	if (tens <= 3) {
		romanNum += "X".repeat(tens);
		num -= tens * 10;
	}

	if (num === 9) {
		romanNum += "IX";
		num -= 9;
	}
	if (num >= 5) {
		romanNum += "V";
		num -= 5;
	}
	if (num === 4) {
		romanNum += "IV";
		num -= 4;
	}
	if (num <= 3) {
		romanNum += "I".repeat(num);
	}

	return romanNum;
}

console.log(romanEncoder(1666));
console.log(romanEncoder(2008));
console.log(romanEncoder(1975));
