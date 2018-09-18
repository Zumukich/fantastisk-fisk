function nextSmaller(num) {
	var numArray = String(num).split("");
	var possibleSwaps = [];
	// In an array, make a note of every possible swap where a smaller number can be moved to a higher position
	// Possible swaps are stored as lower index, upper index, and digit to be swapped forward
	// A zero should only be moved if it doesn't end up in the first position
	for (var i = numArray.length - 1; i >= 0; i--) {
		var j = i;
		do j--; while (parseInt(numArray[j]) <= parseInt(numArray[i]));
		if (j > 0 || j == 0 && numArray[i] != 0) possibleSwaps.push([j, i, parseInt(numArray[i])]);
	}
	// If no such swap is possible, e.g. for same numbers or digits in decreasing order, return the error value of -1
	if (possibleSwaps.length == 0) return -1;
	// Of all possible swaps, find the ones where the movement affects the lowest possible place-value
	// (The higher the place-value, the bigger is the change, and we look for the biggest of the smaller numbers)
	// First, we find this position where the smaller digit will be swapped to
	var changePos = possibleSwaps.reduce((prevVal, curVal) => prevVal[0] > curVal[0] ? prevVal : curVal)[0];
	// Then, if there are multiple options to swap into the given position, we find the greatest of them
	var theOnlySwap = possibleSwaps
		.filter((element) => element[0] >= changePos)
		.reduce((prevVal, curVal) => prevVal[2] > curVal[2] ? prevVal : curVal);
	const lowerIdx = theOnlySwap[0];
	const upperIdx = theOnlySwap[1];
	// Finally, we swap the greater number to the established position
	numArray[lowerIdx] = numArray.splice(upperIdx, 1, numArray[lowerIdx])[0];
	// The swap in itself will only ensure a smaller number, but not necessarily the "next smaller" one
	// To find the next one precisely, we construct the biggest possible number after the swap site
	return parseInt(numArray.slice(0, lowerIdx + 1).concat(numArray.slice(lowerIdx + 1, numArray.length).sort((a, b) => parseInt(b) - parseInt(a))).join(""));
}

// From: https://www.codewars.com/kata/next-smaller-number-with-the-same-digits
// 4 kyu

console.log(nextSmaller(7868186111606), nextSmaller(7868186111606) == 7868186111066);
console.log(nextSmaller(7640), nextSmaller(7640) == 7604 ? true : "7640 should become 7604");
console.log(nextSmaller(3609), nextSmaller(3609) == 3096);
console.log(nextSmaller(152149642710), nextSmaller(152149642710) == 152149642701);

// console.log(nextSmaller(21), nextSmaller(21) == 12);
// console.log(nextSmaller(531), nextSmaller(531) == 513);
// console.log(nextSmaller(1234567908), nextSmaller(1234567908) == 1234567890);
// console.log(nextSmaller(2071), nextSmaller(2071) == 2017);
// console.log(nextSmaller(1027), nextSmaller(1027) == -1);
// console.log(nextSmaller(135), nextSmaller(135) == -1);
// console.log(nextSmaller(111), nextSmaller(111) == -1);
// console.log(nextSmaller(9), nextSmaller(9) == -1);
