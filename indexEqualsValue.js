function indexEqualsValue(a) {
    return a.reduce((prevVal, curVal, curIdx) => { return prevVal == -1 && curVal == curIdx ? curIdx : prevVal }, -1);
}

function indexEqualsValueFast(a) {

    function splitArray(start, end) {
        if (start + 10 > end || a.length < 10) {
            return [start, end]
        } else 
        var mid = ~~((start + end) / 2);
        return a[mid] < mid ? splitArray(mid - 1, end) : splitArray(start, mid + 1);
    }

    var indexes = splitArray(0, a.length);
    var lo = indexes[0];
    var hi = indexes[1];

    for (var j = lo; j < hi; j++) {
        if (j == a[j]) {
            return j;
        }
    }
    return -1;
}

console.log(indexEqualsValueFast([-8, 0, 2, 5]));
console.log(indexEqualsValueFast([-1, 0, 3, 6]));
console.log(indexEqualsValueFast([-3, 0, 1, 3, 10]));
console.log(indexEqualsValueFast([-5, 1, 2, 3, 4, 5, 7, 10, 15]));
console.log(indexEqualsValueFast([9, 10, 11, 12, 13, 14]));
console.log(indexEqualsValueFast([0]));
console.log(indexEqualsValueFast([-18, -17, -16, -16, -11, -6, -1, 1, 3, 3, 4, 4, 6, 7, 7, 8, 12, 13, 14, 16, 20, 20, 22, 24, 26, 27, 29, 32, 32, 35, 36, 37, 38, 38, 42, 44, 45, 46, 47, 47, 50, 53, 58, 59, 64, 66, 67, 70, 71, 76, 77, 82, 83, 85, 87, 88, 89, 90, 91, 91, 92, 93, 98, 98, 98, 101, 101, 103, 103, 104, 106, 106, 107, 110, 112, 112, 112, 112, 113, 114, 114, 116, 117, 121, 122, 124, 127, 130, 130, 131, 137, 139, 139, 143, 143, 144, 145, 146, 147, 147]));
