var capitals = function (word) {
	return word.match(/[A-Z]/g).map(letter => word.indexOf(letter));
};

console.log(capitals("CodEWaRs"));
