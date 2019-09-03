// countWord = s => (s.match(/w.*?o.*?r.*?d/gi) || []).length

// console.log(countWord("word"));
// console.log(countWord("WORD"));
// console.log(countWord("hello world"));
// console.log(countWord("woahr dnkwnoyrn sdo"));
// console.log(countWord("faszkalap"));

console.log("---");

function elevatorDistance(array) {
	return array.reduce((dist, floor, idx, arr) => dist + Math.abs(floor - arr[idx - 1])) - array[0];
}

console.log(elevatorDistance([5, 2, 8]));
console.log(elevatorDistance([1, 2, 3]));
console.log(elevatorDistance([7, 1, 7, 1]));
console.log(elevatorDistance([3, 3]));
console.log(elevatorDistance([5]));
console.log(elevatorDistance([0]));

console.log("---");

const result = str => str.match(/\d/g).reduce((f, a) => (f > a) ? 3 : (f === a) ? 1 : 0);

console.log(result("2:0"));
console.log(result("1:1"));
console.log(result("1:4"));

console.log("---");

let gcd = (a, b) => a ? gcd(b % a, a) : b;
let arr = [0, 4, 8, 10];

console.log(arr.reduce(gcd));

console.log("---");

let tryMap = new Map();
tryMap.set("faszom", [1, 2, 3, 4]);
tryMap.set("szekreny", [2, 1, 2, 4]);
tryMap.set(1, [0, 3, 1, 2]);

tryMap.get("faszom").push(2);

console.log(tryMap);
console.log(typeof(tryMap.get("faszom")), tryMap.get("faszom"));
