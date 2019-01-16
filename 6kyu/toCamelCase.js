function toCamelCase(str) {
	return (str.match(/([a-z0-9]+)/gi) || [""]).map((e, i) => i > 0 ? e[0].toUpperCase() + e.slice(1) : e).join("");
}

// From: https://www.codewars.com/kata/convert-string-to-camel-case
// 6 kyu

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase(""));
