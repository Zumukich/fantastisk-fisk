function mygcd(x, y) {
    if (x % y == 0) {
        return y;
    } else return mygcd(y, x % y);
}

// From: https://www.codewars.com/kata/greatest-common-divisor/
// 7 kyu

console.log(mygcd(30, 24));
