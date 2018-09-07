function sequenceValidator(sequence, number) {
	if (sequence.length != number) return false;
	for (var i = 1; i < number; i++) {
		if (sequence.indexOf(i) != sequence.lastIndexOf(i) || sequence.indexOf(i) == -1) return false;
	}
	return true;
}


// var other = array.reduce((pV, cV) => pV[2] < cV[2] ? pV : cV);

console.log(sequenceValidator([1, 2, 3, 4, 5, 6, 7, 8, 9], 9) == true);
console.log(sequenceValidator([16, 1, 10, 2, 11, 3, 12, 4, 13, 5, 14, 6, 15, 7, 8, 9], 16) == true);
console.log(sequenceValidator([1, 1, 3, 4, 5, 6, 7, 8, 9], 9) == false);
console.log(sequenceValidator([1, 2, 3, 4, 5, 6, 7, 8, 9, 1], 9) == false);
console.log(sequenceValidator([2, 3, 4, 5, 6, 7, 8, 9], 9) == false);
console.log(sequenceValidator([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9) == false);

var names = [1, 2, 3, 4, 5, 5, 5];

var countedNames = names.reduce(function (allNames, name) {
	if (name in allNames) {
		allNames[name]++;
	}
	else {
		allNames[name] = 1;
	}
	return allNames;
}, {});

console.log(typeof countedNames);
console.log(countedNames);
