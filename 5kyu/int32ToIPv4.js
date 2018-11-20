function int32ToIPv4(num) {
	return num.toString(2).padStart(32, "0").match(/.{8}/g).map(e => parseInt(e, 2)).join(".");
}

// From: https://www.codewars.com/kata/int32-to-ipv4
// 5 kyu

console.log(int32ToIPv4(2149583361));
console.log(int32ToIPv4(32));
console.log(int32ToIPv4(0));
