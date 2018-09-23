function validBraces(braces) {
	while (/(\(\))|(\[\])|(\{\})/.test(braces)) {
		braces = braces.replace(/(\(\))|(\[\])|(\{\})/, "");
	}
	return braces.length === 0;
}

// From: https://www.codewars.com/kata/valid-braces
// 6 kyu

console.log(validBraces("(){}[]"));              // true
console.log(validBraces("([{}])"));              // true
console.log(validBraces(")(()))"));          // false
console.log(validBraces("[(])"));               // false
console.log(validBraces("(())((()())())"));  // true
console.log(validBraces("[({})](]"));  // false
