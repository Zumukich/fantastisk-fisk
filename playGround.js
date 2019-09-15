// countWord = s => (s.match(/w.*?o.*?r.*?d/gi) || []).length

// console.log(countWord("word"));
// console.log(countWord("WORD"));
// console.log(countWord("hello world"));
// console.log(countWord("woahr dnkwnoyrn sdo"));
// console.log(countWord("faszkalap"));

// console.log("---");

function elevatorDistance(array) {
	return array.reduce((dist, floor, idx, arr) => dist + Math.abs(floor - arr[idx - 1])) - array[0];
}

// console.log(elevatorDistance([5, 2, 8]));
// console.log(elevatorDistance([1, 2, 3]));
// console.log(elevatorDistance([7, 1, 7, 1]));
// console.log(elevatorDistance([3, 3]));
// console.log(elevatorDistance([5]));
// console.log(elevatorDistance([0]));
//
// console.log("---");

const result = str => str.match(/\d/g).reduce((f, a) => (f > a) ? 3 : (f === a) ? 1 : 0);

// console.log(result("2:0"));
// console.log(result("1:1"));
// console.log(result("1:4"));
//
// console.log("---");

// let gcd = (a, b) => a ? gcd(b % a, a) : b;
// let arr = [0, 4, 8, 10];
//
// console.log(arr.reduce(gcd));
//
// console.log("---");

let unPivotedMatrix = [
	['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1],
	[-26, -63, -49, 62, -58, -25, -69, 63, 67, -20, 78, -3631],
	[52, 73, 71, -33, 71, 38, -28, 66, 75, -92, -24, -16811],
	[58, 47, -83, -62, -86, 32, -7, -50, 46, 82, 0, 10775],
	[-27, 87, -33, 59, 94, -62, -59, 100, 31, -79, -97, -2561],
	[54, 40, -45, -50, 3, -66, 26, 71, -56, -71, 27, -9096],
	[91, 73, -3, 67, 95, 13, 77, -79, -65, 93, 1, 20308],
	[19, -73, -28, 48, -28, -44, 49, -42, 17, -83, 16, 2697],
	[-50, -83, 62, -60, -28, 38, 0, 72, -70, 7, -1, -20978],
	[24, -7, -46, 87, 53, 60, 27, -61, 20, 82, 86, 15807],
	[95, -40, -8, 60, 75, 56, -80, -70, -86, 14, -13, -6097],
	[-81, 52, -6, 51, -65, -2, 53, -3, 54, -3, -38, 10989]];

function pivotMatrix(matrix) {
	// sorcsere
//	[matrix[1], matrix[11]] = [matrix[11], matrix[1]];

	// oszlopcsere
//	for (let ar of matrix) {
//		[ar[0], ar[10]] = [ar[10], ar[0]];
//	}

	// ar.slice(0, ar.length - 1)

	// sor maximuma
	// matrix[1].slice(0, matrix[1].length - 1).reduce((p, c) => Math.max(p, Math.abs(c)));

	// mátrix maximuma
	// matrix.slice(1).map(ar => ar.slice(0, ar.length - 1).reduce((p, c) => Math.max(p, Math.abs(c)))).reduce((p, c) => Math.max(p, Math.abs(c)));

	// sorok maximumai
	// matrix.slice(1).map(ar => ar.slice(0, ar.length - 1).reduce((p, c) => Math.max(p, Math.abs(c))));

	// const eqNumber = 1;

	for (let currentEq = 1; currentEq < Math.min(matrix.length, matrix[0].length - 1); currentEq++) {
//		let eqWithMaxCoeff = eqNumber + matrix.slice(eqNumber)
//			.map(ar => ar.slice(eqNumber-1, ar.length - 1).reduce((p, c) => Math.max(p, Math.abs(c))))
//			.reduce((p, _, i, a) => Math.abs(a[i]) > Math.abs(a[p]) ? i : p, 0);

		let maxCoeffs = matrix.slice(currentEq)
			.map(ar => ar.slice(0, ar.length - 1).reduce((p, c) => Math.max(p, Math.abs(c))));
		let swappedRow = currentEq + maxCoeffs.reduce((p, _, i, a) => Math.abs(a[i]) > Math.abs(a[p]) ? i : p, 0);

		console.log("egyenlet", currentEq, "Maxok", maxCoeffs, "\naktuális max", Math.max(...maxCoeffs), "\nlegnagyobbat tartalmazó", matrix[swappedRow]);


		// sorcsere
		[matrix[currentEq], matrix[swappedRow]] = [matrix[swappedRow], matrix[currentEq]];

		console.log(`Becseréljük a(z) ${currentEq} és ${swappedRow} sorokat`);

		let ezMiEz = matrix[currentEq].slice(currentEq - 1, matrix[currentEq].length - 1);
		let colWithMax = ezMiEz.reduce((p, _, i, a) => Math.abs(a[i]) > Math.abs(a[p]) ? i : p, 0);

		console.log("aktuális egyenlet", ezMiEz, colWithMax);

		console.log(`Becseréljük a(z) ${currentEq - 1} és ${colWithMax + currentEq -1} oszlopokat`);


		for (let ar of matrix) {
			[ar[currentEq - 1], ar[colWithMax + currentEq - 1]] = [ar[colWithMax + currentEq - 1], ar[currentEq - 1]];
		}

		console.log("ez lett belőle\n", matrix);

	}

	// let maxCoeffs = matrix.slice(1).map(ar => ar.slice(0, ar.length - 1).reduce((p, c) => Math.max(p, Math.abs(c))));
	// let eqWithMaxCoeff = maxCoeffs.reduce((p, _, i, a) => a[i] > a[p] ? i : p, 0) + eqNumber;

	// This line gets the ordinal of the equation having the greatest coeff by
	// reducing each equations to their greatest coefficient
	// then by reducing this list to the index of this value


	// megkeressük annak az egyenletnek az indexét, ami a legnagyobb értéket tartalmazza
		// Mindegyik sort redukáljuk a maximumára (mínusz a free term)
		// redukáljuk a teljes mátrixot a maximum indexére
	// becseréljük aktuális sorba
	// megkeressük az érintett egyenlet azon indexét, ahol a legnagyobb érték ténylegesen található
	// becseréljük az aktuális oszlopba



	return matrix;
}

console.log(unPivotedMatrix);
console.log("===>");
console.log(pivotMatrix(unPivotedMatrix));
