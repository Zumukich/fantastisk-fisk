function rot13(str) {
    function rotSingleLetter(char) {
        return char.charCodeAt(0) <= 77 || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 109) ? String.fromCharCode(char.charCodeAt(0) + 13) : String.fromCharCode(char.charCodeAt(0) - 13);
    }
    return str.replace(/[a-z]/gi, rotSingleLetter);
}

function rot13Alternative(message) {
    var original = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var encoded = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    return message.replace(/[a-z]/gi, char => encoded[original.indexOf(char)]);
}

console.log(rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf"));
console.log(rot13("EBG13 rknzcyr."));
console.log(rot13("This is my first ROT13 excercise!"));

console.log(rot13Alternative("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf"));
console.log(rot13Alternative("EBG13 rknzcyr."));
console.log(rot13Alternative("This is my first ROT13 excercise!"));
