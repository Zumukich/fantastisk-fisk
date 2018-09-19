function isPrime(num) {
	if (num == 0 || Math.abs(num) == 1) return false;
	for (var i = 2; i <= Math.abs(num) / 2; i++) {
		if (num % i == 0) return false;
	}
	return true;
}

// From: https://www.codewars.com/kata/is-a-number-prime/
// 6 kyu

for (var j = -100; j <= 100; j++) {
	console.log(j, isPrime(j));
}
