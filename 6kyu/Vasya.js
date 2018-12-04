function tickets(peopleInLine) {
	var cassa = [];
	while (peopleInLine.length > 0) {
		cassa.push(peopleInLine.shift());
		console.log(cassa[cassa.length - 1]);
		switch (cassa[cassa.length - 1]) {
			case 25: break;
			case 50:
				if (cassa.indexOf(25) > -1) {
					cassa.splice(cassa.indexOf(25), 1);
				} else {
					return "NO";
				}
				break;
			case 100:
				if (cassa.indexOf(50) > -1 && cassa.indexOf(25) > -1) {
					cassa.splice(cassa.indexOf(50), 1);
					cassa.splice(cassa.indexOf(25), 1);
				} else {
					if (cassa.filter(e => e === 25).length >= 3) {
						for (let i = 0; i < 3; i++)
							cassa.splice(cassa.indexOf(25), 1);
					} else {
						return "NO";
					}
				}
				break;
			default: return "NO";
		}
		console.log("cassa", cassa, "line", peopleInLine);
	}
	return "YES";
}

// From: https://www.codewars.com/kata/vasya-clerk
// 6 kyu

console.log(tickets([25, 25, 50]));            // YES
console.log(tickets([50]));                    // NO
console.log(tickets([25, 100]));               // NO
console.log(tickets([25, 25, 50, 50, 100]));   // NO
