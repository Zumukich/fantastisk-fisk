function isHappy(num) {
	var sums = [num];
	for (var count = 0; sums[count] != 1; count++) {
		sums.push(String(sums[count]).split("").reduce((a, b) => a + Math.pow(parseInt(b), 2), 0));
		if (count != sums.indexOf(sums[count])) return false;
	}
	return true;
}

function listHappy(limit) {
	var happyList = [];
	for (var i = 0; i <= limit; i++) {
		if (isHappy(i)) happyList.push(i);
	}
	return happyList;
}

// From: https://www.codewars.com/kata/happy-numbers-5/
// 6 kyu

console.log(listHappy(1000));

function isHappyNthPower(num, pow) {
	var sums = [num];
	for (var count = 0; sums[count] != 1; count++) {
		sums.push(String(sums[count]).split("").reduce((a, b) => a + Math.pow(parseInt(b), pow), 0));
		if (count != sums.indexOf(sums[count])) {
			sums.splice(0, sums.indexOf(sums[count]));
			sums.pop();
			return sums;
		}
	}
	return [1];
}

// From: https://www.codewars.com/kata/happy-numbers-to-the-n-power/
// 6 kyu

console.log(isHappy(7, 2));
console.log(isHappy(42, 2));
console.log(isHappy(41451, 2));
