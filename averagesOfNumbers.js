function averages(numbers) {
    var output = [];
    if (numbers != null) {
        for (var i = 0; i < numbers.length - 1; i++) {
            output.push((numbers[i] + numbers[i + 1]) / 2);
        }
    }
    return output;
}

// From: https://www.codewars.com/kata/averages-of-numbers/train/javascript
// 7 kyu

console.log(averages([1, 2]));
