function decipherThis(str) {
	var tempArr = str.replace(/\b(\d+)(.+?)\b/g, (match, c1, c2) => String.fromCharCode(c1) + c2).split(" ").map(w => w.split(""));
	tempArr.forEach(a => a.length > 2 ? [a[1], a[a.length - 1]] = [a[a.length - 1], a[1]] : a);
	return tempArr.map(a => a.join("")).join(" ");
}

console.log(decipherThis('72olle 103doo 100ya'));                             // 'Hello good day'
console.log(decipherThis('82yade 115te 103o'));                               // 'Ready set go'
console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka"));    // "A wise old owl lived in an oak"
