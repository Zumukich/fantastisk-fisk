function mxdiflg(arr1, arr2) {
	if (!arr1.length || !arr2.length) return -1;
	arr1 = arr1.map(e => e.length);
	arr2 = arr2.map(e => e.length);
	return Math.max(Math.max(...arr1) - Math.min(...arr2), Math.max(...arr2) - Math.min(...arr1));
}

var a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(a1, a2));
