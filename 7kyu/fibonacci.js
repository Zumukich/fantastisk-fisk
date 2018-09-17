function fibonacci(n) {
    if (n <= 2) {
        return 1;
    } else return fibonacci(n - 1) + fibonacci(n - 2);
}

// From: https://www.codewars.com/kata/recursion-number-2-fibonacci/
// 7 kyu

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));
