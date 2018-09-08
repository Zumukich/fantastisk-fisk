function findArray(string, array) {
    return array.includes(string);
}

// From: https://www.codewars.com/kata/find-something-in-an-array/
// beta

console.log(findArray("hello", ["bye bye","hello"]));
console.log(findArray("anything", ["bye bye","hello"]));
