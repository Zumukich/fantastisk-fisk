function stripComments(input, markers) {
	var pattern = new RegExp("[" + markers.join("|") + "]" + ".*$");
	return input.split("\n")
		.map(line => line.replace(pattern, "").trimRight())
		.join("\n");
}

// From: https://www.codewars.com/kata/strip-comments
// 4 kyu

console.log(stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
