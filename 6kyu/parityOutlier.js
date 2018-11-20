function oldFindOdd(A) {
    A.sort((a, b) => { return a - b });
    while (A.length > 0) {
        var counter = 1;
        var examVal = A.shift();
        while (A[0] == examVal) {
            counter++;
            A.shift();
        }
        if (counter % 2 == 1) {
            return examVal;
        }
    }
    return 0;
}

function findOdd(A) {
    return A.sort((a, b) => a - b).reduce((acc, curVal, curIdx, arr) => acc == Infinity && curVal != arr[curIdx + 1] && curIdx % 2 == 0 ? curVal : acc, Infinity);
}

function findOutlier(integers) {
	// Filter the original array to its even and odd elements
	const even = integers.filter((num) => num % 2 == 0);
	const odd = integers.filter((num) => Math.abs(num % 2) == 1);
	// Return the first (a.k.a.: only) element of the shorter one
	return even.length < odd.length ? even[0] : odd[0];
}

function iqTest(numbers) {
	const numArr = numbers.split(" ");
	const even = numArr.filter(num => num % 2 === 0);
	const odd = numArr.filter(num => Math.abs(num % 2) === 1);
	return (even.length < odd.length ? numArr.indexOf(even[0]) : numArr.indexOf(odd[0])) + 1;
}

function stray(numbers) {
	return numbers.sort()[0] === numbers.sort()[1] ? numbers[numbers.length - 1] : numbers[0];
}

function findKey(keys) {
    var clues = keys.map(e => e.toString().split(""));
    return clues[0].map((_, i) => clues.map(r => r[i])).reduce((key, subArr) => key += subArr.sort()[0] === subArr.sort()[1] ? subArr[subArr.length - 1] : subArr[0], "");
}

// From: https://www.codewars.com/kata/find-the-odd-int/
// also https://www.codewars.com/kata/find-the-parity-outlier/
// also https://www.codewars.com/kata/iq-test
// also https://www.codewars.com/kata/find-the-stray-number/
// also https://www.codewars.com/kata/t-dot-t-t-number-4-key-of-door/
// also https://www.codewars.com/kata/find-the-unique-number-1/
// 6 kyu, 7 kyu

console.log(stray([1, 1, 2]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(oldFindOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(findOutlier([113448820, -63909159, 150530110, -195538114, -125125936, 118231076, -183685662, 107700136, -59110720, -61981478, -73132362, -72277482, -110030498, -121323816, -137747948, 92340792, -11760466, 89916038, -35720926, 137455042, 783006, 85959956, 19673166, 41623264, -11566432, -43086886, 18807776, -80796962 ]));
console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));
console.log(findKey([153456, 123406, 124456, 323456, 123458, 123756]));
