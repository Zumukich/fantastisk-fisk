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

console.log(listHappy(1000));
