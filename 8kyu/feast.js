function feast(beast, dish) {
	return dish.startsWith(beast.slice(0, 1)) && dish.endsWith(beast.slice(beast.length - 1));
}

// From: https://www.codewars.com/kata/the-feast-of-many-beasts/
// 8 kyu

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));
