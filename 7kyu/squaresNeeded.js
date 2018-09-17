function squaresNeeded(grains) {
    return Math.ceil(Math.log2(grains + 1));
}

for (var i = 0; i < 64; i++) {
    console.log(squaresNeeded(i));
}

// From: https://www.codewars.com/kata/the-wheat-slash-rice-and-chessboard-problem/
// 7 kyu
