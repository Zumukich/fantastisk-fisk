function findEvenIndex(arr)
{
    for (var index = 1; index < arr.length - 1; index++) {
        if (array.slice(0, index).reduce((a, b) => a + b) == array.slice(index + 1, array.length).reduce((a, b) => a + b)) {
            return index;
        } else return -1;
    }
}

function leftSum(array, index) {
        return array.slice(0, index).reduce((a, b) => a + b);
}

function rightSum(array, index) {
        return array.slice(index + 1, array.length).reduce((a, b) => a + b);
}

console.log(leftSum([1, 2, 3, 4, 3, 2, 1], 3));
console.log(leftSum([1, 100, 50, -51, 1, 1], 1));
console.log(leftSum([20,10,-80,10,10,15,35], 0));

console.log(rightSum([1, 2, 3, 4, 3, 2, 1], 3));
console.log(rightSum([1, 100, 50, -51, 1, 1], 1));
console.log(rightSum([20,10,-80,10,10,15,35], 6));
