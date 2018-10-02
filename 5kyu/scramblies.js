function scramble(str1, str2) {
	if (str2.length > str1.length) return false;
	var occurrences1 = {};
	var occurrences2 = {};
	for (var i = 0; i < str1.length; i++) {
		occurrences1[str1[i]] = (occurrences1[str1[i]] || 0) + 1;
		occurrences2[str2[i]] = (occurrences2[str2[i]] || 0) + 1;
	}
	delete occurrences2[undefined];
	for (var el in occurrences2)
		if (occurrences1[el] == undefined || occurrences1[el] < occurrences2[el]) return false;
	return true;
}

// From: https://www.codewars.com/kata/scramblies
// 5 kyu

console.log(scramble('rkqodlw', 'world'));              // True
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // True
console.log(scramble('katas', 'steak'));                // False
console.log(scramble('scriptjavx', 'javascript'));      // False
