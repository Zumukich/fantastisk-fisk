function disemvowel(trollStr) {
	if ( !trollStr ) return "";
	return trollStr.replace(/[aeiou]/gi, "");
}

console.log(disemvowel());
