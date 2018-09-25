function recoverSecret(triplets) {
	var messageLength = triplets
		.reduce((acc, val) => acc.concat(val), [])
		.filter((val, idx, arr) => arr.indexOf(val) === idx)
		.length;
	do {
		var seenTriplets = new Array(triplets.length).fill(0);
		var secret = [];
		triplets.push(triplets.shift());
		for (var i = 0; i < 3; i++) secret.push(triplets[0][i]);
		seenTriplets[0] = 1;
		console.log(`Used ${secret} as a start`);
		var iterator = 1;

		do {
			var usedHint = false;
			if (triplets[iterator][1] === secret[0]) {
				secret.unshift(triplets[iterator][0]);
				console.log(`Used ${triplets[iterator]} to get to ${secret}`);
				seenTriplets[iterator] = 1;
				usedHint = true;
			}
			if (triplets[iterator][1] === secret[secret.length - 1]) {
				secret.push(triplets[iterator][2]);
				console.log(`Used ${triplets[iterator]} to get to ${secret}`);
				seenTriplets[iterator] = 1;
				usedHint = true;
			}
			if (secret.indexOf(triplets[iterator][2]) - secret.indexOf(triplets[iterator][0]) === 1) {
				secret.splice(secret.indexOf(triplets[iterator][0]) + 1, 0, triplets[iterator][1]);
				console.log(`Used ${triplets[iterator]} to get to ${secret}`);
				seenTriplets[iterator] = 1;
				usedHint = true;
			}
			iterator = usedHint ? seenTriplets.indexOf(0) : seenTriplets.indexOf(1) + 1;

		} while (!seenTriplets.includes(0) || secret.length < messageLength)

		console.log("--");
	} while (secret.length < messageLength);
	return secret.join("");
}

// From: https://www.codewars.com/kata/recover-a-secret-string-from-random-triplets/
// 4 kyu

console.log(recoverSecret([
	['a', 't', 's'],
	['h', 'a', 'p'],
	['t', 'i', 's'],
	['w', 'h', 'i'],
	['t', 's', 'u'],
	['t', 'u', 'p'],
	['w', 'h', 's']
]));

console.log(recoverSecret([
	['t', 's', 'f'],
	['a', 's', 'u'],
	['m', 'a', 'f'],
	['a', 'i', 'n'],
	['s', 'u', 'n'],
	['m', 'f', 'u'],
	['a', 't', 'h'],
	['t', 'h', 'i'],
	['h', 'i', 'f'],
	['m', 'h', 'f'],
	['a', 'u', 'n'],
	['m', 'a', 't'],
	['f', 'u', 'n'],
	['h', 's', 'n'],
	['a', 'i', 's'],
	['m', 's', 'n'],
	['m', 's', 'u']
]));
