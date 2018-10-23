function palindrome_chain_length(num) {
	const isPalindrome = n => String(n) === String(n).split("").reverse().join("");
	var count = 0;

	while (!isPalindrome(num)) {
		num = num + parseInt(String(num).split("").reverse().join(""));
		count++;
	}
	return count;
}

// From: https://www.codewars.com/kata/palindrome-chain-length/
// 7 kyu

console.log(palindrome_chain_length(87));
console.log(palindrome_chain_length(4884));
