function dontGiveMeFive(start, end) {
	var numbers = [];
	for (var i = start; i <= end; i++) {
		numbers.push(i);
	}
	return numbers.map(e => e.toString()).filter(s => !s.includes("5")).length;
  }

// From: https://www.codewars.com/kata/dont-give-me-five/
// 7 kyu

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
