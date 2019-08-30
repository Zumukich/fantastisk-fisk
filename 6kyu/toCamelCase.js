function toCamelCase(str) {
	return (str.match(/([a-z0-9]+)/gi) || [""]).map((e, i) => i > 0 ? e[0].toUpperCase() + e.slice(1) : e).join("");
}

String.prototype.camelCase = function () {
    return this == "" ? "" : this.match(/([a-z0-9]+)/gi).map(e => e[0].toUpperCase() + e.slice(1)).join("");
};


// From: https://www.codewars.com/kata/convert-string-to-camel-case
// also https://www.codewars.com/kata/camelcase-method/
// 6 kyu

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase(""));

console.log("hello case".camelCase());
console.log("camel case word".camelCase());
console.log("".camelCase());
