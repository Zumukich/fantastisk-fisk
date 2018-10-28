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

function minimalistMoveZeros(arr) {
	var limit = arr.length - 1;
	for (var i = limit - 1; i >= 0; i--) {
		if (arr[i] === 0 || arr[i] === "0") {
			var temp = arr[i];
			for (var sh = i; sh <= limit; sh++) {
				arr[sh] = arr[sh + 1];
			}
			arr[limit] = temp;
			limit--;
		}
	}
	return arr;
}

// From: https://www.codewars.com/kata/moving-zeros-to-the-end
// 5 kyu
// also https://www.codewars.com/kata/remove-zeros
// 4 kyu

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([false, 1, 0, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZerosNew([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZerosNew([false, 1, 0, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]

console.log(minimalistMoveZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
console.log(minimalistMoveZeros([ 1, null, "5", "0", "2", 0, 8, 6, null, false ]));
console.log(minimalistMoveZeros(["0"]));
console.log(minimalistMoveZeros([]));
