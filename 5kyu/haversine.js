const degreeToRadian = degree => degree
	.match(/(\d+)°\s(\d+)′\s(\d+)″\s(\w)/)
	.filter((_, i) => i > 0 && i < 5)
	.reduce((dec, dms, idx) => idx < 3 ? dec += dms / Math.pow(60, idx) : (dec *= !/[NW]/i.test(dms) ? -1 : 1), 0) / 180 * Math.PI;

function distance(coord1, coord2) {
	const radius = 6371;
	var [lat1, lon1] = [...coord1.split(",")].map(e => degreeToRadian(e));
	var [lat2, lon2] = [...coord2.split(",")].map(e => degreeToRadian(e));
	var inverseHaversine = Math.asin(Math.sqrt(Math.pow(Math.sin((lat2 - lat1) / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin((lon2 - lon1) / 2), 2)));
	return Math.floor(2 * radius * inverseHaversine / 10) * 10;
}

// From: https://www.codewars.com/kata/the-captains-distance-request/
// 5 kyu

console.log(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "23° 33′ 0″ S, 46° 38′ 0″ W"));   // Returns 10130
console.log(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "58° 18′ 0″ N, 134° 25′ 0″ W"));  // Returns 7870
console.log(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "48° 12′ 30″ N, 16° 22′ 23″ E")); // Returns 0
console.log(distance("47° 48′ 0″ N, 13° 2′ 0″ E", "38° 53′ 42″ N, 77° 2′ 12″ W"));     // Returns 6920
console.log(distance("18° 56′ 0″ S, 47° 31′ 0″ E", "47° 48′ 0″ N, 13° 2′ 0″ E"));      // Returns 8170
console.log(distance("18° 56′ 0″ S, 47° 31′ 0″ E", "38° 53′ 42″ N, 77° 2′ 12″ W"));    // Returns 14270
