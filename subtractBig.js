function subtract(a, b) {
	a = a.padStart(Math.max(a.length, b.length), "0");
	b = b.padStart(Math.max(a.length, b.length), "0");
	while (a.charAt(0) === b.charAt(0) && a.length > 1) {
		a = a.substring(1);
		b = b.substring(1);
	}
	var upper = parseInt(a) >= parseInt(b) ? a : b;
	var lower = parseInt(a) >= parseInt(b) ? b : a;
	var result = [];
	var remainder = 0;
	for (var i = upper.length - 1; i >= 0; i--) {
		var diff = parseInt(upper[i]) - (parseInt(lower[i]) + remainder);
		result.unshift(diff >= 0 ? String(diff) : String(diff + 10));
		if (diff >= 0) remainder = 0; else remainder = 1;
	}
	while (result[0] === "0" && result.length > 1) result.shift();
	if (parseInt(a) < parseInt(b)) result.unshift("-");
	return result.join("");
}

console.log(subtract("00000001", "3") == "-2");
console.log(subtract("9007199254740991", "9007199254740991") == "0");
console.log(subtract("98765", "56894") == "41871");
console.log(subtract("2", "0") == "2");
console.log(subtract("0", "30") == "-30");
console.log(subtract("1020303004875647366210", "2774537626200857473632627613") == "-2774536605897852597985261403");
console.log(subtract("234", "242") == "-8");
console.log(subtract("111111111111111110", "111111111111111111") == "-1");
console.log(subtract("58608473622772837728372827", "7586374672263726736374") == "58600887248100574001636453");

// From: https://www.codewars.com/kata/subtract-big-numbers
