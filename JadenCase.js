function JadenCase(str) {
    var wordArray = str.split(" ");
    for ( var i = 0; i < wordArray.length; i++ ) {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }
    return wordArray.join(" ");
}

String.prototype.toJadenCase = function () {
    var wordArray = this.split(" ");
    for ( var i = 0; i < wordArray.length; i++ ) {
      wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }
    return wordArray.join(" ");
  };

var testStr = "How can mirrors be real if our eyes aren't real";

console.log(testStr.toJadenCase());
