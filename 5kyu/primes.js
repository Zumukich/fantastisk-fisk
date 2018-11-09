function getPrimes(num) {
	var factors = {};
	var fact = 2;
	while (num > 1) {
		if (num % fact === 0) {
			factors[fact] = !factors[fact] ? 1 : ++factors[fact];
			num /= fact;
		} else {
			fact++;
		}
	}
	return factors;
}

function primesInNumbers(n) {
	var primes = getPrimes(n);
	return primes;
}

// From: https://www.codewars.com/kata/primes-in-numbers
// 5 kyu

console.log(primesInNumbers(86240));

// (2**5)(5)(7**2)(11)
