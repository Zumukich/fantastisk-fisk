function getPrimes(num) {
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

// From: https://www.codewars.com/kata/primes-in-numbers
// 5 kyu

console.log(getPrimes(86240));
console.log(getPrimes(9007199254740991));
