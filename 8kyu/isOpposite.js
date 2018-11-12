function isOpposite(str1, str2) {
	if (str1.length === 0 || str1.length !== str2.length) return false;
	var arr1 = str1.split("");
	var arr2 = str2.split("");
	var retVal = true;
	for (let i = 0; i < str1.length; i++) {
		if (
			!(arr1[i] === arr2[i].toLowerCase() || arr2[i] === arr1[i].toLowerCase())
			||
			!(arr1[i] === arr2[i].toUpperCase() || arr2[i] === arr1[i].toUpperCase())
		) retVal = false;
	}
	return retVal;
}

function isOppositeFunctional(str1, str2) {
	if (str1.length === 0 || str1.length !== str2.length) return false;
	return str1.split("").every((e, i) => (e === str2[i].toLowerCase() || str2[i] === e.toLowerCase()) && (e === str2[i].toUpperCase() || str2[i] === e.toUpperCase()));
}



// From: https://www.codewars.com/kata/they-say-that-only-the-name-is-long-enough-to-attract-attention-they-also-said-that-only-a-simple-kata-will-have-someone-to-solve-it-this-is-a-sadly-story-number-1-are-they-opposite/javascript
// 8 kyu

console.log(isOpposite("ab", "AB"));
console.log(isOpposite("aB", "Ab"));
console.log(isOpposite("aBcd", "AbCD"));
console.log(isOpposite("AB", "Ab"));
console.log(isOpposite("", ""));

console.log(isOppositeFunctional("ab", "AB"));
console.log(isOppositeFunctional("aB", "Ab"));
console.log(isOppositeFunctional("aBcd", "AbCD"));
console.log(isOppositeFunctional("AB", "Ab"));
console.log(isOppositeFunctional("", ""));
