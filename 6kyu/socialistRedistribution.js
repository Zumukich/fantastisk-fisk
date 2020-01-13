function socialistRedistribution(population, minimum) {
    if (population.reduce((a, b) => { return a + b }) < population.length * minimum) { return []; }
    while (Math.min(...population) < minimum) {
        population[population.indexOf(Math.max(...population))] -= 1;
        population[population.indexOf(Math.min(...population))] += 1;
    }
    return population;
}

function twoMax(arr) {
    let times = 0;
    console.log("Input", arr);
    while (arr.indexOf(0) === arr.lastIndexOf(0)) {
        arr.sort((a, b) => b - a);
        let step = Math.max(1, Math.min(Math.floor(arr[0] / 2), arr[2]));
        arr[1] -= step;
        arr[0] -= step;
        times += step;
    }
    return times;
}

// From: https://www.codewars.com/kata/socialist-distribution/
// also: https://www.codewars.com/kata/5e0b72d2d772160011133654
// 6 kyu

console.log(socialistRedistribution([2, 1, 8, 10], 5));
console.log(socialistRedistribution([2, 3, 5, 45, 45], 5));
console.log(socialistRedistribution([32, 29, 50, 28, 10, 30, 4], -7));

// console.log(twoMax([0, 0, 1]));
// console.log(twoMax([2, 8, 0]));
// console.log(twoMax([1, 2, 1]));
// console.log(twoMax([7, 4, 10]));
// console.log(twoMax([8, 2, 8]));
console.log(twoMax([613232, 709387, 53095]));
// console.log(twoMax([973815, 331601, 748625]));
// console.log(twoMax([12, 12, 12]));
