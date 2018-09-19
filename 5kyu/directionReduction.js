function dirReduc(directions) {
	var opposite = {
		"NORTH": "SOUTH",
		"SOUTH": "NORTH",
		"EAST": "WEST",
		"WEST": "EAST"
	}

	if ((directions || []).length === 0 || !directions) return [];
	for (var i = 0; i < directions.length - 1; i++) {
		if (directions[i] == opposite[directions[i + 1]]) {
			directions.splice(i, 2);
			i -= 2;
		}
		// console.log(directions);
	}
	return directions;
}

// From: https://www.codewars.com/kata/directions-reduction/
// 5 kyu

console.log(dirReduc(['EAST', 'EAST', 'WEST', 'NORTH', 'WEST', 'EAST', 'EAST', 'SOUTH', 'NORTH', 'WEST']));  // ['EAST', 'NORTH']
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));  // ['WEST']
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]));          // []
console.log(dirReduc([]));          // []
console.log(dirReduc(0));          // []
console.log(dirReduc(undefined));          // []
