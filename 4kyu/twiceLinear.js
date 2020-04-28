function dblLinear(n) {
	let values = [] //new Set();
	let newElements = [1];
	let loops = Math.ceil(Math.log2(n)) + 2;
	console.log(`${n} elemre ${loops} ciklus ${Math.pow(2, loops) - 1} elemmel`);
	for (let j = 0; j < loops; j++) {
		//while (values.size < n + newElements.length) {
		var newCount = newElements.length;
		newElements.sort((a, b) => a - b);
		// console.log(`Entering cycle, as we only have ${values.size} elements, and ${newElements.length} more will be added`);
		// console.log(`New elements in this loop are ${newElements}`);
		for (let i = 0; i < newCount; i++) {
			newElements.push(2 * newElements[0] + 1);
			newElements.push(3 * newElements[0] + 1);
			values.push(newElements.shift());
		}
		// console.log(`Exiting cycle with a new size of set is ${values.size}; and ${newElements.length} more to be added next`);
	}
	return [...values].sort((a, b) => a - b).filter((e, _, a) => a.indexOf(e) != a.lastIndexOf(e));
}

// From: https://www.codewars.com/kata/5672682212c8ecf83e000050/
// 4 kyu

console.time("runtime");
console.log(dblLinear(10));  // 22
console.log(dblLinear(20));  // 57
console.log(dblLinear(30));  // 91
console.log(dblLinear(50));  // 175
console.log(dblLinear(100)); // 447
console.log(dblLinear(500)); // 3355
console.log(dblLinear(1000)); // 8488
// console.log(dblLinear(60000)); // 1511311



console.timeEnd("runtime");
