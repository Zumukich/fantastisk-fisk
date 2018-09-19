function oddNumbers(A) {
    return A.sort((a, b) => a - b).reduce((acc, curVal, curIdx, arr) => acc == Infinity && curVal != arr[curIdx + 1] && curIdx % 2 == 0 ? curVal : acc, Infinity);
}

function oldFindOdd(A) {
    A.sort((a, b) => { return a - b });
    while (A.length > 0) {
        var counter = 1;
        var examVal = A.shift();
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

// From: https://www.codewars.com/kata/find-the-odd-int/
// 6 kyu

console.log(oldFindOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(oddNumbers([1, 2, 1, 2, 1, 2, 1, 2, 3]));
console.log(oddNumbers([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
