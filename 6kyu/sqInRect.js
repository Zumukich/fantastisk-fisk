function sqInRect(length, width) {
	if (length === width) return null;
	var decomposition = [],
		longer = Math.max(length, width),
		shorter = Math.min(length, width);
	while (shorter > 0) {
		decomposition.push(shorter);
		longer -= shorter;
		[longer, shorter] = [Math.max(longer, shorter), Math.min(longer, shorter)];
		// console.log(`longer: ${longer}, shorter: ${shorter}`);
	}
	return decomposition;
}

// From: https://www.codewars.com/kata/rectangle-into-squares
// 6 kyu

console.log(sqInRect(5, 5));
console.log(sqInRect(5, 3));
console.log(sqInRect(20, 14));
