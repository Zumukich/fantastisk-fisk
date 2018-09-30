function countDuplicates(str) {
	return Object.values(str.toLowerCase().split("").reduce((list, letter) => {
		list[letter] ? list[letter]++ : list[letter] = 1;
		return list;
	}, {})).reduce((acc, cur) => cur > 1 ? ++acc : acc, 0);
}

// From: https://www.codewars.com/kata/counting-duplicates
// 6 kyu

console.log(countDuplicates("abcde"));            // 0
console.log(countDuplicates("aabbcde"));          // 2
console.log(countDuplicates("aabBcde"));          // 2
console.log(countDuplicates("Indivisibilities")); // 2
