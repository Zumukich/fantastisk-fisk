countWord=s=>(s.match(/w.*?o.*?r.*?d/gi)||[]).length

console.log(countWord("word"));
console.log(countWord("WORD"));
console.log(countWord("hello world"));
console.log(countWord("woahr dnkwnoyrn sdo"));
console.log(countWord("faszkalap"));
