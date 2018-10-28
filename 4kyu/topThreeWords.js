function top_3_words(text) {
	var wordlist = text.split(" ").map(w => w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase()).filter(e => e.length > 0 && e !== "'");
	console.log(wordlist);
	var words = {};
	wordlist.forEach(e => {
		words[e] = !words[e] ? 1 : ++words[e];
		return e;
	});
	return Object.keys(words).sort((a, b) => words[b] - words[a]).slice(undefined, 3);
}

// From: https://www.codewars.com/kata/most-frequently-used-words-in-a-text/
// 4 kyu

// console.log(top_3_words("aa"));
// console.log(top_3_words(""));
// console.log(top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
console.log(top_3_words("  , e   .. "));
console.log(top_3_words("  ...  "));
console.log(top_3_words("  '  "));
console.log(top_3_words("  //wont won't won't"));
// console.log(top_3_words("In a village of La Mancha, the name of which I have no desire to call to \
// mind, there lived not long since one of those gentlemen that keep a lance \
// in the lance-rack, an old buckler, a lean hack, and a greyhound for \
// coursing. An olla of rather more beef than mutton, a salad on most \
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra \
// on Sundays, made away with three-quarters of his income."));
