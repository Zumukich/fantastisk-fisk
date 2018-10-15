function getUniquePrimeFactors(num) {
	var primeFactors = [];
	var factor = 2;
	while (num > 1) {
		if (num % factor === 0) {
			primeFactors.push(factor);
			num /= factor;
		} else {
			factor++;
		}
	}
	return primeFactors.filter((val, idx, arr) => arr.indexOf(val) === idx);
}

function properFractions(num) {
	var factors = getUniquePrimeFactors(num);
	var numerators = [];
	for (var i = 1; i < num; i++) {
		var candidate = true;
		for (var j = 0; j < factors.length; j++){
			if (i % factors[j] === 0) {
				candidate = false;
			}
		}
		if (candidate) numerators.push(i);
	}
	return numerators.length;
}

// From: https://www.codewars.com/kata/number-of-proper-fractions-with-denominator-d
// 4 kyu

// console.log(getUniquePrimeFactors(1));
// console.log(getUniquePrimeFactors(25));
// console.log(getUniquePrimeFactors(10240));
// console.log(getUniquePrimeFactors(5915981415));

// console.log(properFractions(1));
// console.log(properFractions(5));
// console.log(properFractions(25));
console.log(properFractions(5915981415));
