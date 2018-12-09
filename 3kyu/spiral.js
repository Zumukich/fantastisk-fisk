function spiral(n) {
	var spiralMap = Array(n).fill(Array(n).fill(" ")).map(a => a.slice());
	var idxN = 0, idxM = -1;
	for (var dirCount = n; dirCount > 0; dirCount--) {
		const steps = dirCount + (dirCount < n && dirCount % 2 === n % 2 ? 1 : 0);
		const stepDirection = (n - dirCount) % 4;
		// console.log(`Iteration ${dirCount}: ${steps} steps to ${stepDirection}`);
		for (let i = 0; i < steps; i++) {
			switch (stepDirection) {
				case 0:
					idxM++; break; // Right
				case 1:
					idxN++; break; // Down
				case 2:
					idxM--; break; // Left
				case 3:
					idxN--; break; // Up
			}
			spiralMap[idxN][idxM] = "0";
			// console.log(`[${idxN}, ${idxM}]`);
		}
	}
	return spiralMap;
	// return spiralMap.map(subArray => subArray.join("")).join("\n").concat("\n");
}

// From: https://www.codewars.com/kata/make-a-spiral
// 3 kyu

console.log(spiral(0));
console.log(spiral(1));
console.log(spiral(2));
console.log(spiral(3));
console.log(spiral(4));
console.log(spiral(5));
console.log(spiral(6));
console.log(spiral(10));
