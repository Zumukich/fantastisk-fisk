function persistentBugger(num) {
	var count = 0;
	while (num >= 10) {
		var num = String(num).split("").reduce((a, b) => parseInt(a) * parseInt(b));
		count++;
	}
	return count;
}

console.log(persistentBugger(39));
console.log(persistentBugger(999));
console.log(persistentBugger(4));
