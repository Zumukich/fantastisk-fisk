function constructPossibleMsg(triplets, startTriplet) {
	var constructedMsg = [];
	var seenTriplets = new Array(triplets.length).fill(0);
	for (var i = 0; i < 3; i++) constructedMsg.push(triplets[startTriplet][i]);
	seenTriplets[startTriplet] = 1;
	var iterator = seenTriplets.indexOf(0);
	// console.log(`Used ${constructedMsg} as a start`);
	do {
		var decipheredLength = constructedMsg.length;
		// console.log(`Considering ${triplets[iterator]} for ${constructedMsg}`);
		if (triplets[iterator].every(element => constructedMsg.includes(element)))
			seenTriplets[iterator] = 1;
		if (triplets[iterator][2] === constructedMsg[0]) {
			constructedMsg.unshift(triplets[iterator][1]);
			constructedMsg.unshift(triplets[iterator][0]);
			// console.log(`Used ${triplets[iterator]} to get to ${constructedMsg}`);
		}
		if (triplets[iterator][0] === constructedMsg[constructedMsg.length - 1]) {
			constructedMsg.push(triplets[iterator][1]);
			constructedMsg.push(triplets[iterator][2]);
			// console.log(`Used ${triplets[iterator]} to get to ${constructedMsg}`);
		}
		if (triplets[iterator][1] === constructedMsg[0]) {
			constructedMsg.unshift(triplets[iterator][0]);
			// console.log(`Used ${triplets[iterator]} to get to ${constructedMsg}`);
		}
		if (triplets[iterator][1] === constructedMsg[constructedMsg.length - 1]) {
			constructedMsg.push(triplets[iterator][2]);
			// console.log(`Used ${triplets[iterator]} to get to ${constructedMsg}`);
		}
		if (constructedMsg.indexOf(triplets[iterator][2]) - constructedMsg.indexOf(triplets[iterator][0]) === 1) {
			constructedMsg.splice(constructedMsg.indexOf(triplets[iterator][0]) + 1, 0, triplets[iterator][1]);
			// console.log(`Used ${triplets[iterator]} to get to ${constructedMsg}`);
		}
		if (decipheredLength !== constructedMsg.length) {
			seenTriplets[iterator] = 1;
			iterator = seenTriplets.indexOf(0);
		}
		else {
			iterator = seenTriplets.indexOf(0, iterator + 1);
		}
	} while (iterator !== -1 && iterator < triplets.length);
	return constructedMsg;
}

function recoverSecretByPatternMatching(triplets) {
	// var messageLength = triplets.reduce((acc, val) => acc.concat(val), []).filter((val, idx, arr) => arr.indexOf(val) === idx).length;
	var result = constructPossibleMsg(triplets, 0);
	return result.join("");
}

function recoverSecretBySort(triplets) {
	var relationPairs = [];
	for (var i = 0; i < triplets.length; i++) {
		relationPairs.push([triplets[i][0], triplets[i][1]]);
		relationPairs.push([triplets[i][0], triplets[i][2]]);
		relationPairs.push([triplets[i][1], triplets[i][2]]);
	}
	relationPairs = relationPairs.filter(function (t) {
		var key = t.join('-');
		return this[key] ? false : (this[key] = true);
	}, Object.create(null));
	console.log(relationPairs);
	var secret = triplets.reduce((acc, val) => acc.concat(val), []).filter((val, idx, arr) => arr.indexOf(val) === idx);
	console.log(secret);
	for (var count = 1; count < 100; count++) {
		for (var j = 0; j < relationPairs.length; j++) {
			secret = secret.sort((a, b) => a == relationPairs[j][0] && b == relationPairs[j][1] ? -1 : 0);
		}
	}
	return secret;
}


// From: https://www.codewars.com/kata/recover-a-secret-string-from-random-triplets/
// 4 kyu

console.log(recoverSecretBySort([
	['a', 't', 's'],
	['h', 'a', 'p'],
	['t', 'i', 's'],
	['w', 'h', 'i'],
	['t', 's', 'u'],
	['t', 'u', 'p'],
	['w', 'h', 's']
]));

// console.log(recoverSecretBySort([
// 	['t', 's', 'f'],
// 	['a', 's', 'u'],
// 	['m', 'a', 'f'],
// 	['a', 'i', 'n'],
// 	['s', 'u', 'n'],
// 	['m', 'f', 'u'],
// 	['a', 't', 'h'],
// 	['t', 'h', 'i'],
// 	['h', 'i', 'f'],
// 	['m', 'h', 'f'],
// 	['a', 'u', 'n'],
// 	['m', 'a', 't'],
// 	['f', 'u', 'n'],
// 	['h', 's', 'n'],
// 	['a', 'i', 's'],
// 	['m', 's', 'n'],
// 	['m', 's', 'u']
// ]));
