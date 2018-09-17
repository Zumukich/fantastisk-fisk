function bouncingBalls(h, bounce, window) {
	if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
	var count = 0;
	while (h * Math.pow(bounce, count) > window) {
		count++;
	}
	return 2 * count - 1;
}

// From: https://www.codewars.com/kata/bouncing-balls/
// 6 kyu

console.log(bouncingBalls(3, 0.66, 1.5));
console.log(bouncingBalls(30, 0.66, 1.5));
console.log(bouncingBalls(3, 1, 1.5));
console.log(bouncingBalls(10, 0.5, 1.25));
