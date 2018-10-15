function averages(numbers) {
    var output = [];
    if (numbers != null) {
        for (var i = 0; i < numbers.length - 1; i++) {
            output.push((numbers[i] + numbers[i + 1]) / 2);
        }
    }
    return output;
}

function getAverage(marks) {
    // return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
    return Math.round(marks.reduce((avg, mark) => avg + mark / marks.length, 0));
}

// From: https://www.codewars.com/kata/averages-of-numbers/
// also https://www.codewars.com/kata/get-the-mean-of-an-array/
// 7 kyu

console.log(getAverage([3, 15, 16, 2, 12, 2, 4, 10, 2, 6, 5]));
console.log(averages([3, 15, 16, 2, 12, 2, 4, 10, 2, 6, 5]));
