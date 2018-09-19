function oldFindTheOdd(A) {
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

function findOdd(A) {
    return A.sort((a, b) => a - b).reduce((acc, curVal, curIdx, arr) => acc == Infinity && curVal != arr[curIdx + 1] && curIdx % 2 == 0 ? curVal : acc, Infinity);
}

// From: https://www.codewars.com/kata/find-the-odd-int/
// 6 kyu

console.log(oldFindTheOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
