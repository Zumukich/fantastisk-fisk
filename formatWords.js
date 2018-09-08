function likes (words) {
    if (!words) { return "" };
    var wordsOnly = words.filter((word) => { return word.length > 0 });
    if (wordsOnly.length == 0) { return "" };
    if (wordsOnly.length > 1) {
        var lastWord = wordsOnly.pop();
    }
    var sentence = (wordsOnly.length > 1) ? wordsOnly.join(", ") : wordsOnly[0];
    return (lastWord) ? sentence.concat(" and ", lastWord) : sentence;
}

// From: https://www.codewars.com/kata/format-words-into-a-sentence/
// 6 kyu

console.log(likes (['ninja', 'samurai', 'ronin', '', 'warlord']));
console.log(likes (['ninja', 'samurai', 'ronin']));
console.log(likes (['ninja', '', 'ronin']));
console.log(likes (['ronin']));
console.log(likes ());
