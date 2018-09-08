function factorial(n) {
    if (n == 1) {
        return 1;
    } else return n * factorial(n - 1);
}

// From: https://www.codewars.com/kata/recursion-number-1-factorial/
// 7 kyu

console.log(factorial(5));
