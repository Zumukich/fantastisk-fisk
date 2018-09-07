function noFive(start, end) {
	var allDigits = end - start + 1;
	const rangeLength = Math.floor((end - start) / 10);
	const startAtFive = start % 5 == 0 ? 1 : 0;

	const startDistance = Math.abs(Math.floor(start / 10) * 10 - start) < allDigits ? 1 : 0;

	Math.floor(start / 5) * 5
	// 6 -> 5
	// -9 -> -10
	
	var faszom = Math.abs(start % 10 - start)
	console.log("Faszom: " + faszom);
	console.log("Gross: " + allDigits);
	console.log("Tens: " + Math.floor((end - start) / 10));
	console.log("Start dist: " + startDistance);
	console.log("Start: " + (Number.isInteger(start / 5) ? 1 : 0));
	return allDigits - rangeLength - startDistance;
}

// todo: one or both are negative

console.log(noFive(1, 9));  // Expected: 8
console.log(noFive(4, 17)); // Expected: 12
console.log(noFive(10,11)); // Expected: 2
console.log(noFive(5, 15)); // Expected: 9
console.log(noFive(6, 14)); // Expected: 9
