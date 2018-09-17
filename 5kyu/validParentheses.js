function validParentheses(parens) {
	var openPar = 0;
	for (var i = 0; i < parens.length; i++) {
		switch (parens[i]) {
			case "(": openPar++; break;
			case ")": openPar--; break;
			default: break;
		}
		if (openPar < 0) return false;
	}
	return openPar === 0;
}

// From: https://www.codewars.com/kata/valid-parentheses
// 5 kyu

console.log(validParentheses("()"));              // true
console.log(validParentheses(")(()))"));          // false
console.log(validParentheses("("));               // false
console.log(validParentheses("(())((()())())"));  // true
