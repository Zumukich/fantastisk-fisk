function anagrams(word, words) {
	return words.filter(element => word.split("").sort().join("") == element.split("").sort().join(""));
}

// From: https://www.codewars.com/kata/where-my-anagrams-at/
// 5 kyu

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));                // ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));                    // []
