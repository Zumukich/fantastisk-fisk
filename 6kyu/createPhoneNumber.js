function createPhoneNumber(numbers) {
	return numbers.join("").replace(/([0-9]{3})([0-9]{3})([0-9]{4})/, "($1) $2-$3");
}

// From: https://www.codewars.com/kata/create-phone-number/
// 6 kyu

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
