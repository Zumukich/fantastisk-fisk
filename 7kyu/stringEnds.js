function solution(str, ending) {
	var pattern = new RegExp(`${ending}$`);
	return pattern.test(str);
}

// From: https://www.codewars.com/kata/nextel-phone-number-validator
// 6 kyu

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
