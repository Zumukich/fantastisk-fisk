function beeramid(bonus, price) {
	for (var height = 1; height * (height + 1) * (2 * height + 1) / 6 <= bonus / price; height++);
	return Math.max(height - 1, 0);
}

//
//

console.log((beeramid(9, 2)));    // 1
console.log((beeramid(10, 2)));   // 2
console.log((beeramid(11, 2)));   // 2
console.log((beeramid(21, 1.5))); // 3
console.log((beeramid(454, 5)));  // 5
console.log((beeramid(455, 5)));  // 6
console.log((beeramid(4, 4)));    // 1
console.log((beeramid(3, 4)));    // 0
console.log((beeramid(0, 4)));    // 0
console.log((beeramid(-1, 4)));   // 0
