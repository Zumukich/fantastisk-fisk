function count(string) {
	var result = {};
	string.split("").map(letter => {
		result[letter] ? result[letter]++ : result[letter] = 1;
		return 0;
	});
	return result;
}

// From: https://www.codewars.com/kata/count-characters-in-your-string/
// 6 kyu

console.log(count("aba"));
