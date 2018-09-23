function maskify(cc) {
	var retArr = []
	for (var i = cc.length; i >= 0 ; i--) {
		retArr.push(cc.length - i > 4 ? "#" : cc[i]);
	}
	return retArr.reverse().join("");
}

// From: https://www.codewars.com/kata/credit-card-mask/
// 7 kyu

console.log(maskify("4556364607935616"));
console.log(maskify("Nananananananananananananananana Batman!"));
console.log(maskify("1"));
console.log(maskify(""));
