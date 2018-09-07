function populationGrowth(p0, percent, aug, p) {
	var pop = p0;
	var count = 0;
	while (pop < p) {
		pop = pop + pop * percent / 100 + aug;
		count++;
	}
	return count;
}

console.log(populationGrowth(1500, 5, 100, 5000));
console.log(populationGrowth(1500000, 2.5, 10000, 2000000));
