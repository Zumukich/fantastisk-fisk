function race(velo1, velo2, lead) {
	if (velo1 > velo2) return null;
	var result = [];
	var seconds = lead / (velo2 - velo1) * 3600;
	var hours = Math.floor(seconds / 3600);
	result.push(hours);
	seconds -= hours * 3600;
	var minutes = Math.floor(seconds / 60);
	result.push(minutes);
	seconds -= minutes * 60;
	result.push(Math.floor(seconds));
	return result;
}

// From: https://www.codewars.com/kata/tortoise-racing/
// 6 kyu

console.log(race(720, 850, 70));  // => [0, 32, 18] or "0 32 18"
console.log(race(80, 91, 37));    // => [3, 21, 49] or "3 21 49"
