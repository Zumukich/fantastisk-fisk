function findOutlier(integers) {
	// Filter the original array to its even and odd elements
	const even = integers.filter((num) => num % 2 == 0);
	const odd = integers.filter((num) => Math.abs(num % 2) == 1);
	// Return the first (a.k.a.: only) element of the shorter one
	return even.length < odd.length ? even[0] : odd[0];
}


console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(findOutlier([113448820, -63909159, 150530110, -195538114, -125125936, 118231076, -183685662, 107700136, -59110720, -61981478, -73132362, -72277482, -110030498, -121323816, -137747948, 92340792, -11760466, 89916038, -35720926, 137455042, 783006, 85959956, 19673166, 41623264, -11566432, -43086886, 18807776, -80796962 ]));
