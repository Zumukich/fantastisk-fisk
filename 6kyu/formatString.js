function list(names) {
    if (!names || names.length === 0) return "";
    var nameArr = [];
    for (var i = 0; i < names.length; i++) nameArr.push(names[i].name);
    var wordsOnly = nameArr.filter((word) => { return word.length > 0 });
    if (wordsOnly.length == 0) return "";
    if (wordsOnly.length > 1) {
        var lastWord = wordsOnly.pop();
    }
    var sentence = (wordsOnly.length > 1) ? wordsOnly.join(", ") : wordsOnly[0];
    return (lastWord) ? sentence.concat(" & ", lastWord) : sentence;
}

// From: https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/
// 6 kyu

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
console.log(list([{ name: 'Bart' }]));
console.log(list([]));
