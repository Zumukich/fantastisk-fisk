function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        return Math.pow(Math.sqrt(sq) + 1, 2);
    }
    return -1;
}

// From: https://www.codewars.com/kata/find-the-next-perfect-square/
// 7 kyu

console.log(findNextSquare(121)); // returns 144
console.log(findNextSquare(625)); // returns 676
console.log(findNextSquare(114)); // returns -1 since 114 is not a perfect
