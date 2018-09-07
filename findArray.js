function findArray(string, array) {
    return array.includes(string);
}

console.log(findArray("hello", ["bye bye","hello"]));
console.log(findArray("anything", ["bye bye","hello"]));
