function tankvol(height, diameter, totalVol) {
	const radius = diameter / 2;
	const length = totalVol / (Math.PI * Math.pow(radius, 2));
	var remainingVol = length * (Math.pow(radius, 2) * Math.acos((radius - height) / radius) - (radius - height) * Math.sqrt(2 * radius * height - Math.pow(height, 2)));
	return Math.floor(remainingVol);
}

// From: https://www.codewars.com/kata/tank-truck
// 6 kyu

console.log(tankvol(40, 120, 3500));
console.log(tankvol(60, 120, 3500));
console.log(tankvol(80, 120, 3500));
