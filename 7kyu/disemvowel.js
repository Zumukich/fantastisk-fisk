function disemvowel(trollStr) {
	if ( !trollStr ) return "";
	return trollStr.replace(/[aeiou]/gi, "");
}

// From: https://www.codewars.com/kata/disemvowel-trolls/
// 7 kyu

console.log(disemvowel());
