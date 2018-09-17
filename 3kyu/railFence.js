function encode(str, rails) {
	if (rails < 2) return str;
	const base = 2 * rails - 2;
	var result = [];
	for (var lane = 0; lane < rails; lane++) {
		var pos = lane;
		var step = base - (2 * lane);
		while (pos < str.length) {
			if (lane !== rails - 1 && str[pos]) {
				result.push(str[pos]);
				// console.log(pos, str[pos]);
			}
			pos += (step);
			if (lane !== 0 && str[pos]) {
				result.push(str[pos]);
				// console.log(pos, str[pos]);
			}
			pos += (base - step);
		}
		// console.log("---- new rail ----");
	}
	return result.join("");
}

function decode(str, rails) {
	if (rails < 2) return str;
	const base = 2 * rails - 2;
	var result = [];
	for (var i = 0; i < str.length; i++) result.push(".");
	var iterator = 0;
	for (var lane = 0; lane < rails; lane++) {
		var pos = lane;
		var step = base - (2 * lane);
		while (pos < str.length) {
			if (lane !== rails - 1 && str[pos]) {
				// console.log("pozicio", pos, "iterator", iterator, str[iterator]);
				result.splice(pos, 1, str[iterator]);
				iterator++;
			}
			pos += (step);
			if (lane !== 0 && str[pos]) {
				// console.log("pozicio", pos, "iterator", iterator, str[iterator]);
				result.splice(pos, 1, str[iterator]);
				iterator++;
			}
			pos += (base - step);
		}
		// console.log("---- new rail ----");
	}
	return result.join("");
}

// From: https://www.codewars.com/kata/rail-fence-cipher-encoding-and-decoding/
// 3 kyu

console.log(encode("HELLOAFRICA", 2));
console.log(decode("HLOFIAELARC", 2));

console.log(encode("LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT", 7));
console.log(decode("LDEUGO OMTTRN RMLA E IEEUO CTACLMSRTOCDSI P INEIITISSP", 7));

console.log(encode("HELLOAFRICATELLMEHOWYOUDOINGHELLOMOTHERLANDTELLMEHOWYOUDOING", 4));
console.log(decode("HFEOOLHDEUEARTLHWDIELTENTMHODGLOIALEYUNHOORAELOYONLCMOGMLLWI", 4));

console.log(encode("WEAREDISCOVEREDFLEEATONCE", 3));
console.log(decode("WECRLTEERDSOEEFEAOCAIVDEN", 3));
