function expandedFormInt(num) {
	return num
		.toString()
		.split("")
		.reduce((exForm, curVal, idx, arr) => curVal !== "0" ? exForm.concat(" ", curVal, "0".repeat(arr.length - idx - 1)) : exForm, "")
		.trim()
		.replace(/ /g, " + ");
}

function expandedFormFloat(num) {
	var numStr = num.toString().split(".");
	var int = numStr[0].split("").reverse().map((a, i) => a * Math.pow(10, i)).filter(a => a > 0).reverse().join(" + ");
	var dec = numStr[1].split("").map((e, i) => e > 0 ? `${e}/` + Math.pow(10, i + 1) : 0).filter(a => a !== 0).join(" + ");
	return num >= 1 ? int.concat(" + ", dec) : dec;
}

// From: https://www.codewars.com/kata/write-number-in-expanded-form
// also https://www.codewars.com/kata/write-number-in-expanded-form-part-2
// 6 kyu

console.log(expandedFormInt(12));
console.log(expandedFormInt(70304));

console.log(expandedFormFloat(1.24)); // should return '1 + 2/10 + 4/100'
console.log(expandedFormFloat(7.304)); // should return '7 + 3/10 + 4/1000'
console.log(expandedFormFloat(0.04)); // should return '4/100'
console.log(expandedFormFloat(88.353824)); // should return '80 + 8 + 3/10 + 5/100 + 3/1000 + 8/10000 + 2/100000 + 4/1000000'
