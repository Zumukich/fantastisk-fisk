function multiples(number) {
	var sum = 0;
	for (var i = 0; i < number; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(multiples(10));
