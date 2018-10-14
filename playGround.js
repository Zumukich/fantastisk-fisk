function printerError(s) {
	return (s.match(/[^a-m]/g) || []).length + "/" + s.length;
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
console.log(printerError(""));
