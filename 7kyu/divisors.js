function divisors(integer) {
    var retArr = [];
    for (var i = 2; i <= integer / 2; i++) {
        if (integer % i == 0) {
            retArr.push(i);
        }
    }
    if (retArr.length > 0) {
        return retArr;
    } else
        return (`${integer} is prime`);
}

// From: https://www.codewars.com/kata/find-the-divisors/
// 7 kyu

console.log(divisors(7));
