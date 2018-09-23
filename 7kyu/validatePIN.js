function validatePIN(pin) {
	var re = new RegExp("^\\d+$");
	return (pin.length === 4 || pin.length === 6) && re.test(pin);
}

// From: https://www.codewars.com/kata/regex-validate-pin-code/
// 7 kyu

console.log(validatePIN("1"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
console.log(validatePIN("1111"));
