function cakes(recipe, available) {
	var arr = [];
	for (var i in recipe) {
		arr.push(Math.floor(available[i] / recipe[i]));
	}
	if (arr.every(element => Number.isInteger(element))) {
		return arr.reduce((total, current) => current < total ? current : total);
	} else {
		return 0;
	}
}

function getMissingIngredients(recipe, added) {

	function objectify(prev, curr) {
		prev[curr[0]] = curr[1];
		return prev;
	}

	var cakes = Math.ceil(Math.max(...Object.keys(recipe).map(key => added[key] / recipe[key] || 0)));

	return Object.keys(recipe)
		.map(key => [key, Math.max(cakes, 1) * recipe[key] - (added[key] || 0)])
		.filter(([, qty]) => qty != 0)
		.reduce(objectify, {});
}

// From: https://www.codewars.com/kata/pete-the-baker
// also https://www.codewars.com/kata/pete-the-baker-part-2
// 5 kyu, 6kyu

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));               // must return 2
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // must return 0

var recipe = { flour: 200, eggs: 1, sugar: 100 };

console.log(getMissingIngredients(recipe, { flour: 50, eggs: 1 }));      // must return {flour: 150, sugar: 100}
console.log(getMissingIngredients(recipe, {}));                          // must return {flour: 200, eggs: 1, sugar: 100}
console.log(getMissingIngredients(recipe, { flour: 500, sugar: 200 }));  // must return {flour: 100, eggs: 3, sugar: 100}
