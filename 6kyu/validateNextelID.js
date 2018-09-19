function validateNextelID(str) {
	var re = new RegExp("^\\d+\\s*\\*\\s*\\d+\\s*\\*\\s*\\d+$");
	return str.replace(/[^0-9]/g, "").split("").length === 9 && re.test(str.trim());
}

// From: https://www.codewars.com/kata/nextel-phone-number-validator
// 6 kyu

console.log(validateNextelID("72 * 673639 * 2"));
console.log(validateNextelID("52 * 50875 * 12"));
console.log(validateNextelID("30 * 5 * 547604"));
console.log(validateNextelID("3 * 05 * 547604"));
console.log(validateNextelID("6235 * 1 * 5292"));

console.log(validateNextelID("* 72 * 673639 * 22"));
console.log(validateNextelID("72 * 673639 * 22"));
console.log(validateNextelID("72 * 6736392 *"));
console.log(validateNextelID("72 * 673 * 639 * 2"));
