String.prototype.delete = function () {
	var retString = this;
	for (var i = 0; i < arguments.length; i++) {
		retString.replace(arguments[i], "");
	}
	return retString;
};

// From: https://www.codewars.com/kata/ruplesjs-number-2-string-delete
// 6 kyu

console.log("1: Are you enjoying this kata?".delete(/[^a-z ]/gi));
console.log("1: Are you enjoying this kata?".delete("a", "?", [], /[0-9]/g));
