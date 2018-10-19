function mirror(text) {
	const frame = (char, len) => new Array(len + 4).fill(char).join("");
	const transform = (line, maxLen) => "* ".concat(line.split("").reverse().join("").padStart(maxLen, " "), " *");
	var lines = text.split(" ");
	var longest = lines.reduce((prevVal, curVal) => prevVal.length > curVal.length ? prevVal : curVal).length;
	var retVal = [];

	retVal.push(frame("*", longest));
	lines.forEach(line => retVal.push(transform(line, longest)));
	retVal.push(frame("*", longest));
	return retVal.join("\n");
}

console.log(mirror("Hello World"));
console.log(mirror(""));
// console.log(mirror(null));
