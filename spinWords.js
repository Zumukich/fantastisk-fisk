function spinWords(str) {
	var words = str.split(" ");
	for (var i = 0; i < words.length; i++){
		if ( words[i].length >= 5 ) {
			words[i] = words[i].split("").reverse().join("");
		}
	}
	return words.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
