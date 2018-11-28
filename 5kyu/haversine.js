const degreeToRadian = degree => degree
	.match(/(\d+)°\s(\d+)′\s(\d+)″\s(\w)/)
	.filter((_, i) => i > 0 && i < 5)
	.reduce((dec, dms, idx) => idx < 3 ? dec += dms / Math.pow(60, idx) : dec += dms, 0)
	.replace(/(\d+\.\d+)[SE]/, "-$1")
	.replace(/\w$/, "") / 180 * Math.PI;

function distance(coord1, coord2) {
	const radius = 6371;
	var [lat1, lon1] = [...coord1.split(",")].map(e => degreeToRadian(e));
	var [lat2, lon2] = [...coord2.split(",")].map(e => degreeToRadian(e));
	var inverseHaversine = Math.asin(Math.sqrt(Math.pow(Math.sin((lat2 - lat1) / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin((lon2 - lon1) / 2), 2)));
	return Math.floor(2 * radius * inverseHaversine / 10) * 10;
}

const decimalDegToRadian = decDegree => decDegree
	.match(/(\d+\.*\d*)°\s(\w)/)
	.filter((_, i) => i > 0 && i < 3)
	.join("")
	.replace(/(\d+\.\d+)[SE]/, "-$1")
	.replace(/\w$/, "") * Math.PI / 180;

function saveMark(c1, c2) {
	const radius = 3390;
	var [phi1, lambda1] = [...c1.split(",")].map(e => decimalDegToRadian(e));
	var [phi2, lambda2] = [...c2.split(",")].map(e => decimalDegToRadian(e));
	var inverseHaversine = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((phi2 - phi1) / 2), 2) + Math.cos(phi1) * Math.cos(phi2) * Math.pow(Math.sin((lambda2 - lambda1) / 2), 2)));
	console.log("haversine", inverseHaversine);
	var havDist = radius * inverseHaversine;

	var vincenty = Math.sqrt(Math.pow(Math.cos(phi2) * Math.sin(lambda2 - lambda1), 2) + Math.pow(Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(lambda2 - lambda1), 2)) / Math.sin(phi1) * Math.sin(phi2) + Math.cos(phi1) * Math.cos(phi2) * Math.cos(lambda2 - lambda1);
	console.log("vincenty", Math.atan(vincenty));
	var centralAngle = Math.atan(vincenty) < 0 ? Math.atan(vincenty + Math.PI) : Math.atan(vincenty);

	console.log("central angle", centralAngle);
	var cenDist = radius * centralAngle;
	return havDist;
	// return Math.floor(2 * radius * inverseHaversine / 10) * 10 + "KM";
	// return 2 * radius * inverseHaversine + "KM";
}

// From: https://www.codewars.com/kata/the-captains-distance-request/
// 5 kyu

// console.log(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "23° 33′ 0″ S, 46° 38′ 0″ W"));   // Returns 10130
// console.log(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "58° 18′ 0″ N, 134° 25′ 0″ W"));  // Returns 7870
// console.log(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "48° 12′ 30″ N, 16° 22′ 23″ E")); // Returns 0
// console.log(distance("47° 48′ 0″ N, 13° 2′ 0″ E", "38° 53′ 42″ N, 77° 2′ 12″ W"));     // Returns 6920
// console.log(distance("18° 56′ 0″ S, 47° 31′ 0″ E", "47° 48′ 0″ N, 13° 2′ 0″ E"));      // Returns 8170
// console.log(distance("18° 56′ 0″ S, 47° 31′ 0″ E", "38° 53′ 42″ N, 77° 2′ 12″ W"));    // Returns 14270

console.log(saveMark("48.23° N, 89.10° E", "48.84° N, 89.40° E"));   // 30KM
console.log(saveMark("52.10° S, 56.25° W", "52.10° N, 56.25° W"));   // 6160KM
console.log(saveMark("11.28° S, 78.98° E", "21.28° S, 75.56° E"));   // 620KM
console.log(saveMark("68.66° S, 35.05° E", "56.23° N, 51.25° E"));   // 7420KM
console.log(saveMark("48.33° N, 24.56° W", "17.39° N, 67.74° E"));   // 4650KM
console.log(saveMark("55.98° N, 78.11° E", "12.29° S, 43.41° W"));   // 6950KM

// console.log(decimalDegToRadian("68.66° S"));
// console.log(decimalDegToRadian("55.98° N"));
// console.log(decimalDegToRadian("35.05° E"));
// console.log(decimalDegToRadian("24.56° W"));
// console.log(decimalDegToRadian("12.29° S"));
// console.log(decimalDegToRadian("89.10° E"));
