function stringSubtract(a, b) {
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

function stringAdd(a, b) {
	var result = [];
	var remainder = 0;
	for (var i = a.length - 1; i >= 0; i--) {
		var sum = parseInt(a[i]) + parseInt(b[i]) + remainder;
		var digit = String(sum).split("").pop();
		remainder = sum >= 10 ? Math.floor(sum / 10) : 0;
		result.unshift(digit);
	}
	if (remainder != 0) result.unshift(String(remainder));
	while (result[0] === "0" && result.length > 1) result.shift();
	return result.join("");
}

function normalize(input, length) {
	var str = String(input);
	if (str.charAt(0) == "-") {
		var negative = true;
		str = str.substring(1);
	}
	str = str.padStart(Math.max(str.length, length), "0");
	if (negative) str = "-".concat(str);
	return str;
}

function bigAdd() {
	console.log(arguments.length, arguments);
	if (arguments.length === 0) return "0";
	if (arguments.length === 1) return String(arguments[0]);
	if (arguments.length === 2) {
		var strA = normalize(arguments[0], String(arguments[1]).replace(/^-/, "").length);
		var strB = normalize(arguments[1], String(arguments[0]).replace(/^-/, "").length);
		if (strA.charAt(0) !== "-" && strB.charAt(0) !== "-") return stringAdd(strA, strB);
		if (strA.charAt(0) === "-" && strB.charAt(0) !== "-") return stringSubtract(strB, strA.substring(1));
		if (strA.charAt(0) !== "-" && strB.charAt(0) === "-") return stringSubtract(strA, strB.substring(1));
		if (strA.charAt(0) === "-" && strB.charAt(0) === "-") return "-".concat(stringAdd(strA.substring(1), strB.substring(1)));
	} else {
		var args = [...arguments];
		return bigAdd(bigAdd(args.pop(), args.pop()), ...args);
	}
}

function bigSub(a, b) {
	var strA = normalize(a, String(b).replace(/^-/, "").length);
	var strB = normalize(b, String(a).replace(/^-/, "").length);
	if (strA.charAt(0) !== "-" && strB.charAt(0) !== "-") return stringSubtract(strA, strB);
	if (strA.charAt(0) === "-" && strB.charAt(0) !== "-") return "-".concat(stringAdd(strA.substring(1), strB));
	if (strA.charAt(0) !== "-" && strB.charAt(0) === "-") return stringAdd(strA, strB.substring(1));
	if (strA.charAt(0) === "-" && strB.charAt(0) === "-") return stringSubtract(strB.substring(1), strA.substring(1));
}

// From: https://www.codewars.com/kata/big-arithmetic-integer-add-slash-subtract/
// 4 kyu

console.log(bigAdd());
console.log(bigAdd(0));

console.log(bigAdd(
	'26171360011523479938568768502879102014147610585267',
	'54919452849484813416645827897741122706922510451922',
	'60978868971705293697898250181738038209826232123376',
	'69860150841064476785098792603416150336620574263611',
	'56168902810711637957516052113619714978796129638861'
) === "268098735484489701795727691299394128246313057063037");

console.log(bigAdd("1", "123456789012345678901234567890") === "123456789012345678901234567891");
console.log(bigAdd(1, "123456789012345678901234567890") === "123456789012345678901234567891");
console.log(bigAdd("-1", "123456789012345678901234567890") === "123456789012345678901234567889");
console.log(bigAdd(-1, "123456789012345678901234567890") === "123456789012345678901234567889");
console.log(bigAdd(103, 8567) == "8670");
console.log(bigAdd("-123465", -7836451) == "-7959916");
console.log(bigAdd(103, -8567) == "-8464");
console.log(bigAdd("712569312664357328695151392", "8100824045303269669937") == "712577413488402631964821329");
console.log(bigAdd("", 5) == "5");

console.log(bigSub("123456789012345678901234567890", 1) === "123456789012345678901234567889");
console.log(bigSub("123456789012345678901234567890", -1) === "123456789012345678901234567891");
console.log(bigSub(576849, 354657) === "222192");
console.log(bigSub(354657, 576849) === "-222192");
console.log(bigSub(-576849, 354657) === "-931506");
console.log(bigSub(354657, -576849) === "931506");
console.log(bigSub(-576849, -354657) === "-222192");
console.log(bigSub(-354657, -576849) === "222192");
console.log(bigSub("123456789012345678901234567890", "-1") === "123456789012345678901234567891");
