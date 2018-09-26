function recoverSecret(triplets) {
	var messageLength = triplets
		.reduce((acc, val) => acc.concat(val), [])
		.filter((val, idx, arr) => arr.indexOf(val) === idx)
		.length;
	var safetySwitch = 0;
	do {
		var secret = [];
		var seenTriplets = new Array(triplets.length).fill(0);
		triplets.push(triplets.shift());
		for (var i = 0; i < 3; i++) secret.push(triplets[0][i]);
		seenTriplets[0] = 1;
		console.log(`Used ${secret} as a start`);
		var iterator = 1;
		safetySwitch++;
		do {
			var decipheredLength = secret.length;
			console.log(`Considering ${triplets[iterator]} for ${secret}`)
			if (triplets[iterator].every(element => secret.includes(element)))
				seenTriplets[iterator] = 1;
			if (triplets[iterator][2] === secret[0]) {
				secret.unshift(triplets[iterator][1]);
				secret.unshift(triplets[iterator][0]);
				console.log(`Used ${triplets[iterator]} to get to ${secret}`);
			}
			if (triplets[iterator][0] === secret[secret.length - 1]) {
				secret.push(triplets[iterator][1]);
				secret.push(triplets[iterator][2]);
				console.log(`Used ${triplets[iterator]} to get to ${secret}`);
			}
			if (triplets[iterator][1] === secret[0]) {
				secret.unshift(triplets[iterator][0]);
				console.log(`Used ${triplets[iterator]} to get to ${secret}`);
			}
			if (triplets[iterator][1] === secret[secret.length - 1]) {
				secret.push(triplets[iterator][2]);
				console.log(`Used ${triplets[iterator]} to get to ${secret}`);
			}
			if (secret.indexOf(triplets[iterator][2]) - secret.indexOf(triplets[iterator][0]) === 1) {
				secret.splice(secret.indexOf(triplets[iterator][0]) + 1, 0, triplets[iterator][1]);
				console.log(`Used ${triplets[iterator]} to get to ${secret}`);
			}
			if (decipheredLength !== secret.length) {
				seenTriplets[iterator] = 1;
				iterator = seenTriplets.indexOf(0);
			} else {
				iterator = Math.max(iterator, seenTriplets.lastIndexOf(1)) + 1;
			}
		} while (iterator < triplets.length)
		console.log("--");
	} while (secret.length < messageLength && safetySwitch < triplets.length);
	return secret.join("");
}

// From: https://www.codewars.com/kata/recover-a-secret-string-from-random-triplets/
// 4 kyu

// console.log(recoverSecret([
// 	['a', 't', 's'],
// 	['h', 'a', 'p'],
// 	['t', 'i', 's'],
// 	['w', 'h', 'i'],
// 	['t', 's', 'u'],
// 	['t', 'u', 'p'],
// 	['w', 'h', 's']
// ]));

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