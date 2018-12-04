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

function towerBuilder(nFloors) {
	var baseWidth = nFloors * 2 - 1;
	var tower = [];
	for (var i = 1; i <= nFloors; i++) {
		tower.push("*".repeat(i * 2 - 1).padStart(Math.floor(baseWidth / 2) + i, " ").padEnd(baseWidth, " "));
	}
	return tower;
}

// From: https://www.codewars.com/kata/framed-reflection
// also: https://www.codewars.com/kata/build-tower/
// 6 kyu

console.log(mirror("Hello World"));
console.log(mirror(""));

console.log(towerBuilder(6));
