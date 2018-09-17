function multiples(number) {
	var sum = 0;
	for (var i = 0; i < number; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	return sum;
}

// From: https://www.codewars.com/kata/multiples-of-3-or-5/
// 6 kyu

console.log(multiples(10));
