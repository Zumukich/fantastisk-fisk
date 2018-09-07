function reverseDiagonals(matrix) {
    for (var i = 0; i < Math.floor(matrix.length / 2); i++) {
        var j = matrix.length - i - 1;
        var temp = matrix[i][i];
        matrix[i][i] = matrix[j][j];
        matrix[j][j] = temp;
        temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
    return matrix;
}

console.log("Result: ", reverseDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log("Result: ", reverseDiagonals([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
