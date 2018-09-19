function sequenceSum(begin, end, step) {
    if (isNaN(begin) || isNaN(end) || isNaN(step) || begin > end) return 0;
    var sumOfSequence = 0;
    for (var i = begin; i <= end; i += step) {
        sumOfSequence += i;
    }
    return sumOfSequence;
}

// From: https://www.codewars.com/kata/sum-of-a-sequence
// 7 kyu

console.log(sequenceSum(2, 6, 2));   // should return 12
console.log(sequenceSum(1, 5, 1));    // should return 15
console.log(sequenceSum(1, 5, 3));    // should return 5
console.log(sequenceSum(2, 2, 2));    // should return 2
