function formatDuration(seconds) {
	var result = [];
	if (seconds === 0) return "now";
	var years = Math.floor(seconds / 31536000);
	result.push([years, "years"]);
	seconds -= years * 31536000;
	var days = Math.floor(seconds / 86400);
	result.push([days, "days"]);
	seconds -= days * 86400;
	var hours = Math.floor(seconds / 3600);
	result.push([hours, "hours"]);
	seconds -= hours * 3600;
	var minutes = Math.floor(seconds / 60);
	result.push([minutes, "minutes"]);
	seconds -= minutes * 60;
	result.push([seconds, "seconds"]);
	return result
		.filter((element) => element[0] > 0)
		.map((element) => element[0] == 1 ? [element[0], element[1].replace(/s$/, "")] : [element[0], element[1]])
		.map((element) => String(element[0]).concat(" ", element[1]))
		.join(', ')
		.replace(/,(?= [^,]*$)/, ' and');
}

// From: https://www.codewars.com/kata/human-readable-duration-format
// 4 kyu

console.log(formatDuration(62));
console.log(formatDuration(3662));
