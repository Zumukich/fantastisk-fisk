function expandedForm(num) {
	return num
		.toString()
		.split("")
		.reduce((exForm, curVal, idx, arr) => curVal !== "0" ? exForm.concat(" ", curVal, "0".repeat(arr.length - idx - 1)) : exForm, "")
		.trim()
		.replace(/ /g, " + ");
}

// From: https://www.codewars.com/kata/write-number-in-expanded-form
// 6 kyu

console.log(expandedForm(12));
console.log(expandedForm(70304));
