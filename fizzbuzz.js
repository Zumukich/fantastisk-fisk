function fizzbuzz(n) {
    if (n % 15 == 0) {
        return("fizz buzz");
    } else if (n % 3 == 0) {
        return ("fizz");
    } else if (n % 5 == 0) {
        return ("buzz");
    }
    return n;
}

console.log(fizzbuzz(1) );  // 1
console.log(fizzbuzz(9) );  // "fizz"
console.log(fizzbuzz(25));  // "buzz"
console.log(fizzbuzz(37));  // 37
console.log(fizzbuzz(45));  // "fizz buzz"
