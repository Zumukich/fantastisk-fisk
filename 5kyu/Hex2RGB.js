function rgb(r, g, b) {
	return (Math.max(0, Math.min(r, 255)).toString(16).padStart(2, "0") +
		Math.max(0, Math.min(g, 255)).toString(16).padStart(2, "0") +
		Math.max(0, Math.min(b, 255)).toString(16).padStart(2, "0")).toUpperCase();
}

function hexStringToRGB(hexStr) {
	return {
		r: parseInt(hexStr.substring(1, 3), 16),
		g: parseInt(hexStr.substring(3, 5), 16),
		b: parseInt(hexStr.substring(5, 7), 16)
	};
}

// From: https://www.codewars.com/kata/rgb-to-hex-conversion
// also: https://www.codewars.com/kata/convert-a-hex-string-to-rgb
// 5 kyu

// console.log(rgb(255, 255, 255)); // returns FFFFFF
// console.log(rgb(255, 255, 300)); // returns FFFFFF
// console.log(rgb(0,0,0)); // returns 000000
// console.log(rgb(148, 0, 211)); // returns 9400D3

console.log(hexStringToRGB("#FF9933")); // returns {r:255, g:153, b:51}
