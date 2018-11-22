function JadenCase(str) {
    var wordArray = str.split(" ");
    for (var i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }
    return wordArray.join(" ");
}

String.prototype.toJadenCase = function () {
    return this
        .split(" ")
        .map(w => w.replace(/^(.)(.*)/, (m, p1, p2) => p1.toUpperCase() + p2))
        .join(" ");
};

function toWeirdCase(string) {
    return string
        .split(" ")
        .map(w => w.split("").map((e, i) => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join(""))
        .join(" ");
}

// From: https://www.codewars.com/kata/jaden-casing-strings/
// also: https://www.codewars.com/kata/weird-string-case
// 6-7 kyu

console.log(JadenCase("How can mirrors be real if our eyes aren't real"));
console.log(toWeirdCase('This is a test'));
var testStr = "How can mirrors be real if our eyes aren't real";
console.log(testStr.toJadenCase());
