function isPrime(num) {
	if (num == 0 || Math.abs(num) == 1) return false;
	for (i = 2; i <= Math.abs(num) / 2; i++) {
		if (num % i == 0) return false;
	}
	return true;
}

for (var j = -100; j <= 100; j++) {
	console.log(j, isPrime(j));
}
