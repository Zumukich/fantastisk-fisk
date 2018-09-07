function averages(numbers) {
    var output = [];
    if (numbers != null) {
        for (var i = 0; i < numbers.length - 1; i++) {
            output.push((numbers[i] + numbers[i + 1]) / 2);
        }
    }
    return output;
}

console.log(averages([1, 2]));
/* 
Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
 */