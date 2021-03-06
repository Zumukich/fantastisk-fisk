function validateNextelID(str) {
	var re = new RegExp("^\\d+\\s*\\*\\s*\\d+\\s*\\*\\s*\\d+$");
	return str.replace(/[^0-9]/g, "").split("").length === 9 && re.test(str.trim());
}

function isValidIP(str) {
	// return /* str.split(".").every(n => parseInt(n) >= 0 && parseInt(n) < 256) && */ /^((0|[^0 \n]\d*)\.){3}(0|[^0]\d*)$/.test(str);
	return str.split(".").every(n => parseInt(n) >= 0 && parseInt(n) < 256 && n === parseInt(n).toString()) && /^(\d*\.){3}\d*$/.test(str);
}

function validatePassword(password) {
	return /^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[.!?;: ]).*$/.test(password);
}

// From: https://www.codewars.com/kata/nextel-phone-number-validator
// also https://www.codewars.com/kata/regex-password-validation/
// also https://www.codewars.com/kata/ip-validation
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

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("123.45.67.89"));

console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));

console.log(isValidIP("81.28.48.1"));
console.log(isValidIP("31.41.59.26"));
console.log(isValidIP("0.0.0.0"));
console.log(isValidIP(" 1.2.3.4"));
console.log(isValidIP("1.2.3.4 "));
console.log(isValidIP("\n1.2.3.4"));

console.log(validatePassword("djI38D55"));     // true
console.log(validatePassword("a2.d412"));     // false
console.log(validatePassword("JHD5FJ53"));     // false
console.log(validatePassword("!fdjn345"));     // false
console.log(validatePassword("jfkdfj3j"));     // false
console.log(validatePassword("123"));     // false
console.log(validatePassword("abc"));     // false
console.log(validatePassword("Password123"));     // true
console.log(validatePassword("fjd3IR9.;"));     // false
console.log(validatePassword("fjd3  IR9"));     // false
