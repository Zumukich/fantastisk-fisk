function deleteDigit(n) {
	var values = [];
	n.toString().split("").forEach((element, idx, arr) => {
		values.push(parseInt(arr.filter((v, i) => idx !== i).join("")));
		return 0;
	});
	return Math.max(...values);
}

// From: https://www.codewars.com/kata/simple-fun-number-79-delete-a-digit
// 6 kyu

console.log(deleteDigit(152));   // 52
console.log(deleteDigit(1001));  // 101
