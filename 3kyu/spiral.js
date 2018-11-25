function spiral(n) {
	var spiralMap = Array(n).fill(Array(n).fill(0)).map(a => a.slice());
	return spiralMap;
}

// From: https://www.codewars.com/kata/make-a-spiral
// 3 kyu

console.log(spiral(5));
console.log(spiral(10));
