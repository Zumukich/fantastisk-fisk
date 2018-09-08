function socialistRedistribution(population, minimum) {
    if (population.reduce((a, b) => { return a + b }) < population.length * minimum) { return []; }
    while ( Math.min(...population) < minimum ) {
        population[population.indexOf(Math.max(...population))] -= 1;
        population[population.indexOf(Math.min(...population))] += 1;
    }
    return population;
}

// From: https://www.codewars.com/kata/socialist-distribution/
// 6 kyu

console.log(socialistRedistribution([2, 1, 8, 10], 5));
console.log(socialistRedistribution([2, 3, 5, 45, 45], 5));
console.log(socialistRedistribution([32, 29, 50, 28, 10, 30, 4], -7));
