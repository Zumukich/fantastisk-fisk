function csvColumns(csv, columns) {
	return csv.split("\n").map(l => l.split(",")).map(r => r.filter((undefined, i) => columns.indexOf(i) !== -1)).map(r => r.join(",")).join("\n").trim();
}

console.log(csvColumns("1,2,3\n4,5,6", [0, 1]));
console.log(csvColumns("1,2\n3,4\n5,6", [5, 6, 7]));
console.log(csvColumns("a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j", [1, 3, 5, 7]));
