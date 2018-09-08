function isTriangle(a, b, c) {
    return 2 * Math.max(a, b, c) < a + b + c;
}

// From: https://www.codewars.com/kata/is-this-a-triangle/train/javascript
// 7 kyu

console.log(isTriangle(3, 4, 5));
console.log(isTriangle(3, 4, 8));
