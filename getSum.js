function getSum(a, b) {
    var sum = 0;
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i;
    }
    return sum;
}

// From: https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/
// 7 kyu

console.log(getSum(1, 0) == 1);   // 1 + 0 = 1
console.log(getSum(1, 2) == 3);   // 1 + 2 = 3
console.log(getSum(0, 1) == 1);   // 0 + 1 = 1
console.log(getSum(1, 1) == 1);   // 1 Since both are same
console.log(getSum(-1, 0) == -1); // -1 + 0 = -1
console.log(getSum(-1, 2) == 2);  // -1 + 0 + 1 + 2 = 2
