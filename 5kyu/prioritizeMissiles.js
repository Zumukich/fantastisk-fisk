function prioritizeMissiles(missiles) {
	var priority = [];
	for (var i = 0; i < missiles.length; i++) {
		var shortestTime = Infinity;
		var fastest = 0;
		for (var missile in missiles) {
			if (missiles[missile].distance / missiles[missile].speed < shortestTime) {
				shortestTime = missiles[missile].distance / missiles[missile].speed;
				fastest = missile;
			}
		}
		priority.push(missiles[fastest].name);
		delete missiles[fastest];
	}
	return priority;
}

function prioritizeMissilesNew(missiles) {
	return missiles.sort((a, b) => a.distance / a.speed - b.distance / b.speed).map((a) => a.name);
}

// From: https://www.codewars.com/kata/how-the-grinch-almost-ended-christmas/
// 5 kyu

console.log(prioritizeMissiles([
	{ name: 'DASHER_V3', distance: 1000, speed: 100 },
	{ name: 'DANCER_V2.3', distance: 1000, speed: 10 },
	{ name: 'PRANCER_V1.2', distance: 1000, speed: 1 }
])); // => returns ['DASHER_V3', 'DANCER_V2.3', 'PRANCER_V1.2']
console.log(prioritizeMissilesNew([
	{ name: 'VIXEN_V1.1', distance: 500, speed: 4 },
	{ name: 'COMET_V4', distance: 1000, speed: 500 },
	{ name: 'CUPID_V5', distance: 100, speed: 1 }
])); // => returns ['COMET_V4', 'CUPID_V5', 'VIXEN_V1.1']
