function incrementString(str) {
	var [textPart, numPart] = str.match(/(\D*)(\d*)/).slice(1, 3);
	var nextNum = (numPart.length > 0 ? parseInt(numPart) : 0) + 1;
	return textPart + nextNum.toString().padStart(numPart.length, "0");
}

// From: https://www.codewars.com/kata/string-incrementer/
// 5 kyu

console.log(incrementString("foobar000"));  // foobar001
console.log(incrementString("foo"));        // foo1
console.log(incrementString("foobar99"));   // foobar100
console.log(incrementString(""));   // foobar100
console.log(incrementString("1"));   // foobar100
