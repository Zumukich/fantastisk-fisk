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

console.log("---");

console.log(parseInt("0".match(/(?:[+-]|^)\d+/) || 1));
console.log(parseInt("1".match(/(?:[+-]|^)\d+/) || 1));
console.log(parseInt("-1".match(/(?:[+-]|^)\d+/) || 1));
console.log(parseInt("12".match(/(?:[+-]|^)\d+/) || 1));
console.log(parseInt("-321".match(/(?:[+-]|^)\d+/) || 1));
console.log(parseInt("-x".match(/(?:[+-]|^)\d+/) || 1));
console.log(parseInt("y".match(/(?:[+-]|^)\d+/) || 1));
console.log(parseInt("-3alpha".match(/(?:[+-]|^)\d+/) || 1));
console.log(parseInt("4gamma".match(/(?:[+-]|^)\d+/) || 1));
