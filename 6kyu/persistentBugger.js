function persistentBugger(num) {
	var count = 0;
	while (num >= 10) {
		num = String(num).split("").reduce((a, b) => parseInt(a) * parseInt(b));
		count++;
	}
	return count;
}

// From: https://www.codewars.com/kata/persistent-bugger/
// 6 kyu
console.log(persistentBugger(39));
console.log(persistentBugger(999));
console.log(persistentBugger(4));
