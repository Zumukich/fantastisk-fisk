function primeFactors(num) {
	var result = "";
	for (var fact = 2, factors = {}; num > 1;) {
		if (num % fact === 0) {
			factors[fact] = !factors[fact] ? 1 : ++factors[fact];
			num /= fact;
		} else {
			fact++;
		}
	}
	for (var i = 0; i < Object.keys(factors).length; i++) {
		result = result.concat(`(${Object.keys(factors)[i]}${Object.values(factors)[i] > 1 ? "**" + Object.values(factors)[i] : ""})`);
	}
	return result;
}

function primesOf(n) {
	for (var f = 2, factors = []; n > 1;) {
		if (n % f === 0) {
			factors.push(f);
			n /= f;
		} else {
			f++;
		}
	}
	return factors;
}

function countKprimes(k, start, end) {
	for (var i = start, result = []; i <= end; i++) {
		result.push(i);
	}
	return result.filter(e => primesOf(e).length === k);
}

function puzzle(s) {
	var onePrime = countKprimes(1, 1, s);
	var threePrimes = countKprimes(3, 1, s);
	var sevenPrimes = countKprimes(7, 1, s);
	return [onePrime, threePrimes, sevenPrimes];
}

// From: https://www.codewars.com/kata/primes-in-numbers
// 5 kyu

console.log(primeFactors(86240));
console.log(primeFactors(9007199254740991));
console.log(countKprimes(5, 500, 600));

console.log(puzzle(138));
console.log(puzzle(143));
