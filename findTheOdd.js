function findTheOdd(A) {
    A.sort((a, b) => { return a - b });
    while (A.length > 0) {
        var examVal = A.shift();
        var counter = 1;
        while (A[0] == examVal) {
            counter++;
            A.shift();
        }
        if (counter % 2 == 1) {
            return examVal;
        }
    }
    return 0;
}

console.log(findTheOdd([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ]));
