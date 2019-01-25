function iterate(remainder, factors) {
	if (remainder === 0) return factors;
	for (let i = Math.floor(Math.sqrt(remainder)); i > 0; i--) {
		if ((factors.length === 0 && Math.pow(i, 2) < remainder) || (factors.length > 0 && Math.pow(i, 2) <= remainder && i < factors[0])) {
			factors.unshift(i);
			console.log(factors);
			if (iterate(remainder - Math.pow(i, 2), factors)) {
				return factors;
			}
			else {
				factors.shift();  // backtrack
				console.log("backtrack");
			}
		}
	}
	return false;
}

function decompose(n) {
	var result = iterate(Math.pow(n, 2), []);
	return result ? result : null;
}

// From: https://www.codewars.com/kata/square-into-squares-protect-trees
// 4 kyu

console.log(decompose(50));
// console.log(decompose(12));
// console.log(decompose(44));
// console.log(decompose(625));
// console.log(decompose(5));
// console.log(decompose(7100));
// console.log(decompose(123456));
// console.log(decompose(1234567));
// console.log(decompose(7654321));
// console.log(decompose(7654322));
// console.log(decompose(76));
// console.log(decompose(2));
// console.log(decompose(7));
// console.log(decompose(9927447));
