function populationGrowth(p0, percent, aug, p) {
	var pop = p0;
	var count = 0;
	while (pop < p) {
		pop = pop + pop * percent / 100 + aug;
		count++;
	}
	return count;
}

function calculateYears(principal, interest, tax, desired) {
	var money = principal;
	for (var count = 0; money < desired; count++) {
		money = money + money * interest * (1 - tax);
	}
	return count;
}

// From: https://www.codewars.com/kata/growth-of-a-population/
// also https://www.codewars.com/kata/money-money-money/
// 7 kyu

console.log(populationGrowth(1500, 5, 100, 5000));
console.log(populationGrowth(1500000, 2.5, 10000, 2000000));

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
console.log(calculateYears(1000, 0.05, 0.18, 1000));
