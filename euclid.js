function mygcd(x, y) {
    if (x % y == 0) {
        return y;
    } else return mygcd(y, x % y);
}

console.log(mygcd(30, 24));
