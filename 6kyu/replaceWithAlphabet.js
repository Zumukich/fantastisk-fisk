function replaceWithAlphabet(text) {
	var dict = { "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10, "k": 11, "l": 12, "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26 };
	return text.split("").map(l => l.toLowerCase()).map(e => dict[e] ? dict[e] + " " : "").join("").trim();
}

// From: https://www.codewars.com/kata/replace-with-alphabet-position
// 6 kyu

console.log(replaceWithAlphabet("The sunset sets at twelve o' clock."));
console.log(replaceWithAlphabet(""));
