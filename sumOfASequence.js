function sequenceSum(begin, end, step) {
    if (begin == NaN || end == NaN || step == NaN || begin > end) return 0; 
    var sumOfSequence = 0;
    for (var i = begin; i <= end; i += step) {
        sumOfSequence += i;
    }
    return sumOfSequence;
}

console.log(sequenceSum(2, 6, 2));   // should return 12
console.log(sequenceSum(1, 5, 1));    // should return 15
console.log(sequenceSum(1, 5, 3));    // should return 5
console.log(sequenceSum(2, 2, 2));    // should return 2

// From: https://www.codewars.com/kata/sum-of-a-sequence
