function sumStrings(a, b) {
	a = a.replace(/^[0]+/g, "");
	b = b.replace(/^[0]+/g, "");
	a.length > b.length ? b = b.padStart(a.length, "0") : a = a.padStart(b.length, "0");
	var result = [];
	var remainder = 0;
	for (var i = a.length - 1; i >= 0; i--) {
		var sum = parseInt(a[i]) + parseInt(b[i]) + remainder;
		var digit = String(sum).split("").pop();
		remainder = sum >= 10 ? Math.floor(sum / 10) : 0;
		result.unshift(digit);
	}
	if (remainder != 0) result.unshift(String(remainder));
	return result.join("");
}


console.log(sumStrings("00103", "08567") == "8670");
console.log(sumStrings("712569312664357328695151392", "8100824045303269669937") == "712577413488402631964821329");
console.log(sumStrings("", "5") == "5");

/*
712569312664357328695151392
000008100824045303269669937
                          9

1. a rövidebbet kipaddeljük jobbról nullákkal a hosszabb hosszáig


*/
