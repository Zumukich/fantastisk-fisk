function isTriangle(a, b, c) {
    return 2 * Math.max(a, b, c) < a + b + c;
}

console.log(isTriangle(3, 4, 5));
console.log(isTriangle(3, 4, 8));
