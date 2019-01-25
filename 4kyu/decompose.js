function decompose(remainder, factors) {
	if (remainder === 0) return true;
	if (factors.length >= 2 && factors[factors.length - 1] === factors[factors.length - 2]) return false;
	for (let i = Math.floor(Math.sqrt(remainder)); i > 0; i--) {
		if ((factors.length === 0 && Math.pow(i, 2) < remainder) ||	(factors.length > 0 && Math.pow(i, 2) <= remainder)) {
			factors.push(i);
			console.log(i, factors, factors[factors.length - 1]);
			//  i < factors[factors.length - 1]
			if (decompose(remainder - Math.pow(i, 2), factors)) {
				return true;
			} else {
				factors.pop();
				return false;
			}
		}
	}
}

var decomp = [];

decompose(144, decomp);
console.log(decomp);
