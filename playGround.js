countWord=s=>(s.match(/w.*?o.*?r.*?d/gi)||[]).length

// console.log(countWord("word"));
// console.log(countWord("WORD"));
// console.log(countWord("hello world"));
// console.log(countWord("woahr dnkwnoyrn sdo"));
// console.log(countWord("faszkalap"));

function hello(name) {
	var greeting = !name || name === "" ? "World" : name.replace(/(.)(.+)/, (match, p1, p2) => p1.toUpperCase() + p2.toLowerCase());
	return `Hello ${greeting}!`;
}

function elevatorDistance(array) {
	return array.reduce((dist, floor, idx, arr) => dist + Math.abs(floor - arr[idx - 1])) - array[0];
}

console.log(hello('johN'));
console.log(hello('alice'));
console.log(elevatorDistance([5, 2, 8]));
console.log(elevatorDistance([1, 2, 3]));
console.log(elevatorDistance([7, 1, 7, 1]));
console.log(elevatorDistance([3, 3]));
console.log(elevatorDistance([5]));
console.log(elevatorDistance([0]));

function whatday(num) {
	switch (num) {
		case 1: return "Sunday";
		case 2: return "Monday";
		case 3: return "Tuesday";
		case 4: return "Wednesday";
		case 5: return "Thursday";
		case 6: return "Friday";
		case 7: return "Saturday";
		default: return "Wrong, please enter a number between 1 and 7";
	}
}

console.log(whatday(1));
console.log(whatday(12));

const result = str => str.match(/\d/g).reduce((f, a) => (f > a) ? 3 : (f === a) ? 1 : 0);

console.log(result("2:0"));
console.log(result("1:1"));
console.log(result("1:4"));

function points(list) {
	return list.map(m => m.match(/\d/g).reduce((f, a) => (f > a) ? 3 : (f === a) ? 1 : 0)).reduce((s, e) => s + e, 0);
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]));
console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]));

function monkeyCount(n) {
	return Array(n).fill(0).map((v, i) => i + 1).reduce((p, c, _, arr) => p + c / arr.length, 0);
}

console.log(monkeyCount(3));
