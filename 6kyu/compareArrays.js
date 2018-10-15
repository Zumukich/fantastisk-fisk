function comp(array1, array2) {
	if (!array1 || !array2) return false;
	array1.forEach(element => array2.indexOf(Math.pow(element, 2)) !== -1 ? array2.splice(array2.indexOf(Math.pow(element, 2)), 1) : -1);
	return array2.length === 0;
}

// From: https://www.codewars.com/kata/are-they-the-same/
// 6 kyu

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));  // true
console.log(comp([2, 2, 3], [4, 9, 9]));  // false
console.log(comp([], []));  // true
console.log(comp(null, null));  // false
