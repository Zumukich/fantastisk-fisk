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

function diamond(n) {
	if (n < 3 || n % 2 === 0) return null;
	for (var diam = "", i = 1; i <= n; i++) {
		const diff = Math.abs(Math.ceil(n / 2) - i) * 2;
		diam += "*".repeat(n - diff).padStart(n - diff / 2, " ").padEnd(n, " ") + "\n";
	}
	return diam;
}

// From: https://www.codewars.com/kata/framed-reflection
// also: https://www.codewars.com/kata/build-tower/
// also: https://www.codewars.com/kata/give-me-a-diamond/
// 6 kyu

console.log(mirror("Hello World"));
console.log(mirror(""));

console.log(towerBuilder(6));

console.log(diamond(7));
console.log(diamond(2));
console.log(diamond(-3));
console.log(diamond(0));
