function pigLatin(str) {
    var words = str.split(" ");
    words.forEach((element, index, array) => {
        array[index] = (/\w+\b/.test(element)) ? element.replace(/(.)(\w+\b)/, "$2$1").concat("ay") : element;
    });
    return words.join(" ");
}

// From: https://www.codewars.com/kata/simple-pig-latin/
// 5 kyu

console.log(pigLatin("Pig latin is cool !"));
console.log(pigLatin("O tempora o mores !"));
