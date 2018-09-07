function tickets(peopleInLine) {
	var cassa = 0;
	for (var i = 0; i < (peopleInLine || []).length; i++) {
		//		console.log(cassa, peopleInLine[i]);
		if (peopleInLine[i] == 25) {
			cassa += peopleInLine[i];
		} else {
			cassa -= peopleInLine[i] - 25;
			if (cassa < 0) {
				return "NO";
			}
		}
	}
	return "YES";
}

console.log(tickets([25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 50, 25, 100]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));
console.log(tickets([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 100, 100, 100, 100]));
