function nextBigger(num) {
	var numArray = String(num).split("");
	var possibleSwaps = [];
	// In an array, make a note of every possible swap where a greater number can be moved to a higher position
	// Possible swaps are stored as lower index, upper index, and digit to be swapped forward
	for (var i = numArray.length - 1; i > 0; i--) {
		var j = i;
		do j--; while (numArray[j] >= numArray[i]);
		if (j >= 0) possibleSwaps.push([j, i, parseInt(numArray[i])]);
	}
	// If no such swap is possible, e.g. for same numbers or digits in decreasing order, return the error value of -1
	if (possibleSwaps.length == 0) return -1;
	// Of all possible swaps, find the ones where the movement affects the lowest possible place-value
	// (The higher the place-value, the bigger is the number, and we look for the smallest of the bigger numbers)
	// First, we find this position where the greater digit will be swapped to
	var changePos = 0;
	for (var k = 0; k < possibleSwaps.length; k++) {
		changePos = possibleSwaps[k][0] > changePos ? possibleSwaps[k][0] : changePos;
	}
	// Then, if there are multiple options to swap into the given position, we find the smallest of them
	var theOnlySwap = possibleSwaps
		.filter((element) => element[0] >= changePos)
		.reduce((prevVal, curVal) => prevVal[2] < curVal[2] ? prevVal : curVal);
	const lowerIdx = theOnlySwap[0];
	const upperIdx = theOnlySwap[1];
	// Finally, we swap the greater number to the established position
	numArray[lowerIdx] = numArray.splice(upperIdx, 1, numArray[lowerIdx])[0];
	// The swap in itself will only ensure a bigger number, but not necessarily the "next bigger" one
	// To find the next one precisely, we construct the smallest possible number after the swap site
	var unchangedHalf = numArray.slice(0, lowerIdx + 1);
	var orderedHalf = numArray.slice(lowerIdx + 1, numArray.length).sort();
	return parseInt(unchangedHalf.concat(orderedHalf).join(""));
}

// From: https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/
// 4 kyu

console.log(nextBigger(3877), "should be 7378");
console.log(nextBigger(6296), "should be 6629");
console.log(nextBigger(50833), "should be 53038");
console.log(nextBigger(371), "should be 713");
console.log(nextBigger(49176250), "should be 49176502");
