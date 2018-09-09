function moveZeros(arr) {
	for (var idx = arr.length - 2; idx >= 0; idx--) {
		if (arr[idx] === 0) arr.push(arr.splice(idx, 1)[0]);
	}
	return arr;
}

function moveZerosNew(arr) {
	arr.reverse().forEach((val, idx) => { if (val === 0) arr.unshift(arr.splice(idx, 1)[0]) });
	return arr.reverse();
}

// From: https://www.codewars.com/kata/moving-zeros-to-the-end
// 5 kyu

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([false, 1, 0, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZerosNew([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZerosNew([false, 1, 0, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
