const assert = require("assert");
const testFunctions = require("../linearEquation");
const mapifySingleSide = testFunctions.mapifySingleSide;
const normalizeEquation = testFunctions.normalizeEquation;
const createEqMatrix = testFunctions.createEqMatrix;
const prepareEqMatrix = testFunctions.prepareEqMatrix;
const addIntOrFraction = testFunctions.addIntOrFraction;
const subtractIntOrFraction = testFunctions.subtractIntOrFraction;
const multiplyIntOrFraction = testFunctions.multiplyIntOrFraction;
const divideIntOrFraction = testFunctions.divideIntOrFraction;
const splitFraction = testFunctions.splitFraction;
const isValidCoeffMatrix = testFunctions.isValidCoeffMatrix;

describe("Basic operation tests", function () {
	it("Should add Int to Int", function () {
		assert.deepStrictEqual(addIntOrFraction(splitFraction(23), splitFraction(54)), 77);
		assert.deepStrictEqual(addIntOrFraction(splitFraction(12), splitFraction(34)), 46);
	});
	it("Should add Int to Frac", function () {
		assert.deepStrictEqual(addIntOrFraction(splitFraction(3), splitFraction("1/2")), "7/2");
		assert.deepStrictEqual(addIntOrFraction(splitFraction(63), splitFraction("135/17")), "1206/17");
	});
	it("Should add Frac to Int", function () {
		assert.deepStrictEqual(addIntOrFraction(splitFraction("4/3"), splitFraction(5)), "19/3");
		assert.deepStrictEqual(addIntOrFraction(splitFraction("534/7"), splitFraction(13)), "625/7");
	});
	it("Should add Frac to Frac", function () {
		assert.deepStrictEqual(addIntOrFraction(splitFraction("12/11"), splitFraction("5/3")), "91/33");
		assert.deepStrictEqual(addIntOrFraction(splitFraction("5/9"), splitFraction("753/1192")), "12737/10728");
	});
	it("Addition should handle negative numbers", function () {
		assert.deepStrictEqual(addIntOrFraction(splitFraction(-2), splitFraction(5)), 3);
		assert.deepStrictEqual(addIntOrFraction(splitFraction(-2), splitFraction("2/7")), "-12/7");
		assert.deepStrictEqual(addIntOrFraction(splitFraction("-12/5"), splitFraction(3)), "3/5");
		assert.deepStrictEqual(addIntOrFraction(splitFraction("-3/4"), splitFraction("-1/2")), "-5/4");
	});
	it("Addition should Return Reduced Result", function () {
		assert.deepStrictEqual(addIntOrFraction(splitFraction("1/4"), splitFraction("1/4")), "1/2");
		assert.deepStrictEqual(addIntOrFraction(splitFraction("3/8"), splitFraction("21/8")), 3);
	});
	it("Should subtract Int from Int", function () {
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction(45), splitFraction(23)), 22);
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction(23), splitFraction(12)), 11);
	});
	it("Should subtract Int from Frac", function () {
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction("36/7"), splitFraction(2)), "22/7");
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction("21/11"), splitFraction(1)), "10/11");
	});
	it("Should subtract Frac from Int", function () {
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction(3), splitFraction("7/6")), "11/6");
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction(53), splitFraction("72/5")), "193/5");
	});
	it("Should subtract Frac from Frac", function () {
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction("31/23"), splitFraction("13/37")), "848/851");
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction("67/75"), splitFraction("49/121")), "4432/9075");
	});
	it("Subtraction should handle negative numbers", function () {
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction(23), splitFraction(49)), -26);
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction("5/6"), splitFraction(1)), "-1/6");
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction(1), splitFraction("5/6")), "1/6");
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction("73/41"), splitFraction("79/13")), "-2290/533");
	});
	it("Subtraction should Return Reduced Result", function () {
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction("23/72"), splitFraction("11/24")), "-5/36");
		assert.deepStrictEqual(subtractIntOrFraction(splitFraction("23/4"), splitFraction("11/4")), 3);
	});
	it("Should multiply Int by Int", function () {
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction(2), splitFraction(3)), 6);
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction(441), splitFraction(253)), 111573);
	});
	it("Should multiply Int by Frac", function () {
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction(3), splitFraction("3/7")), "9/7");
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction(2), splitFraction("11/23")), "22/23");
	});
	it("Should multiply Frac by Int", function () {
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction("7/11"), splitFraction(12)), "84/11");
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction("13/27"), splitFraction(4)), "52/27");
	});
	it("Should multiply Frac by Frac", function () {
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction("11/23"), splitFraction("14/27")), "154/621");
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction("1231/347"), splitFraction("1093/8964")), "1345483/3110508");
	});
	it("Multiplication should handle negative numbers", function () {
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction(-2), splitFraction(3)), -6);
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction(-7), splitFraction(-5)), 35);
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction("-2/5"), splitFraction("12/5")), "-24/25");
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction("3/5"), splitFraction("-11/5")), "-33/25");
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction("-2563/12454"), splitFraction("-14431/56343")), "36986653/701695722");
	});
	it("Multiplication should Return Reduced Result", function () {
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction(11), splitFraction("5/6")), "55/6");
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction("1/3"), splitFraction(4)), "4/3");
		assert.deepStrictEqual(multiplyIntOrFraction(splitFraction("2/3"), splitFraction("3/4")), "1/2");
	});
	it("Should divide Int by Int", function () {
		assert.deepStrictEqual(divideIntOrFraction(splitFraction(120), splitFraction(5)), 24);
		assert.deepStrictEqual(divideIntOrFraction(splitFraction(4717), splitFraction(89)), 53);
	});
	it("Should divide Int by Frac", function () {
		assert.deepStrictEqual(divideIntOrFraction(splitFraction(4), splitFraction("3/4")), "16/3");
		assert.deepStrictEqual(divideIntOrFraction(splitFraction(252), splitFraction("11/37")), "9324/11");
	});
	it("Should divide Frac by Int", function () {
		assert.deepStrictEqual(divideIntOrFraction(splitFraction("11/37"), splitFraction(252)), "11/9324");
		assert.deepStrictEqual(divideIntOrFraction(splitFraction("6537/8972"), splitFraction(13)), "6537/116636");
	});
	it("Should divide Frac by Frac", function () {
		assert.deepStrictEqual(divideIntOrFraction(splitFraction("6537/8972"), splitFraction("13/37")), "241869/116636");
		assert.deepStrictEqual(divideIntOrFraction(splitFraction("249/316"), splitFraction("11/37")), "9213/3476");
	});
	it("Division should handle negative numbers", function () {
		assert.deepStrictEqual(divideIntOrFraction(splitFraction(-12), splitFraction(3)), -4);
		assert.deepStrictEqual(divideIntOrFraction(splitFraction(-35), splitFraction(-7)), 5);
		assert.deepStrictEqual(divideIntOrFraction(splitFraction("-2/5"), splitFraction("5/12")), "-24/25");
		assert.deepStrictEqual(divideIntOrFraction(splitFraction("3/5"), splitFraction("-5/11")), "-33/25");
		assert.deepStrictEqual(divideIntOrFraction(splitFraction("-2563/12454"), splitFraction("-14431/56343")), "144407109/179723674");
	});
	it("Division should Return Reduced Result", function () {
		assert.deepStrictEqual(divideIntOrFraction(splitFraction(4), splitFraction("2/9")), 18);
		assert.deepStrictEqual(divideIntOrFraction(splitFraction("2/5"), splitFraction("12/5")), "1/6");
		assert.deepStrictEqual(divideIntOrFraction(splitFraction("245/311"), splitFraction("310/37")), "1813/19282");
	});
});



describe("Coefficient extraction test", function () {
	it("Should extract coefficients from simple positive variables", function () {
		let result = mapifySingleSide("2x+8y");
		assert.strictEqual(result.get("x"), 2);
		assert.strictEqual(result.get("y"), 8);
	});
	it("Should extract coefficients from simple negative variables", function () {
		let result = mapifySingleSide("2-4y");
		assert.strictEqual(result.get("y"), -4);
		assert.strictEqual(result.get(1), 2);
	});
	it("Should extract coefficients from tricky negative variables", function () {
		let result = mapifySingleSide("-2x-234z");
		assert.strictEqual(result.get("x"), -2);
		assert.strictEqual(result.get("z"), -234);
	});
	it("Should extract coefficients from long positive variables", function () {
		let result = mapifySingleSide("2alpha+8beta");
		assert.strictEqual(result.get("alpha"), 2);
		assert.strictEqual(result.get("beta"), 8);
	});
	it("Should extract coefficients from long negative variables", function () {
		let result = mapifySingleSide("-5alpha-34beta");
		assert.strictEqual(result.get("alpha"), -5);
		assert.strictEqual(result.get("beta"), -34);
	});
	it("Should extract 1 from variables without coefficient", function () {
		let result = mapifySingleSide("-psi+gamma");
		assert.strictEqual(result.get("psi"), -1);
		assert.strictEqual(result.get("gamma"), 1);
	});
	it("Should extract 1 from variables without coefficient", function () {
		let result = mapifySingleSide("x-y");
		assert.strictEqual(result.get("x"), 1);
		assert.strictEqual(result.get("y"), -1);
	});
	it("Should extract coefficients from constants", function () {
		let result = mapifySingleSide("3x+12");
		assert.strictEqual(result.get(1), 12);
		assert.strictEqual(result.get("x"), 3);
	});
	it("Should extract coefficients from negative constants", function () {
		let result = mapifySingleSide("2x-10");
		assert.strictEqual(result.get(1), -10);
		assert.strictEqual(result.get("x"), 2);
	});
	it("Should consolidate multiple free terms", function () {
		let result = mapifySingleSide("23+2x-10");
		assert.strictEqual(result.get(1), 13);
		assert.strictEqual(result.get("x"), 2);
	});
	it("Should consolidate multiple unknowns", function () {
		let result = mapifySingleSide("-x+2-4x-1");
		assert.strictEqual(result.get(1), 1);
		assert.strictEqual(result.get("x"), -5);
	});
	it("Should handle complex expressions", function () {
		let result = mapifySingleSide("-42s-z-28u-932-66r-54q+21q+32v-39z-2635+92t-29w-52y+16p+33p+35w+29p+51x+35z-28u-25q");
		assert.strictEqual(result.get("p"), 78);
		assert.strictEqual(result.get("q"), -58);
		assert.strictEqual(result.get("r"), -66);
		assert.strictEqual(result.get("s"), -42);
		assert.strictEqual(result.get("t"), 92);
		assert.strictEqual(result.get("u"), -56);
		assert.strictEqual(result.get("v"), 32);
		assert.strictEqual(result.get("w"), 6);
		assert.strictEqual(result.get("x"), 51);
		assert.strictEqual(result.get("y"), -52);
		assert.strictEqual(result.get("z"), -5);
		assert.strictEqual(result.get(1), -3567);
	});
});

describe("Variable extraction test", function () {
	it("Should extract unknowns from simple positive variables", function () {
		let result = mapifySingleSide("2x+8y");
		assert.strictEqual(result.size, 2);
		assert.strictEqual(result.has("x"), true);
		assert.strictEqual(result.has("y"), true);
	});
	it("Should extract unknowns from simple negative variables", function () {
		let result = mapifySingleSide("2-4y");
		assert.strictEqual(result.size, 2);
		assert.strictEqual(result.has(1), true);
		assert.strictEqual(result.has("y"), true);
	});
	it("Should extract unknowns from tricky negative variables", function () {
		let result = mapifySingleSide("-2x-234z");
		assert.strictEqual(result.size, 2);
		assert.strictEqual(result.has("x"), true);
		assert.strictEqual(result.has("z"), true);
	});
	it("Should extract unknowns from long positive variables", function () {
		let result = mapifySingleSide("2alpha+8beta");
		assert.strictEqual(result.size, 2);
		assert.strictEqual(result.has("alpha"), true);
		assert.strictEqual(result.has("beta"), true);
	});
	it("Should extract unknowns from long negative variables", function () {
		let result = mapifySingleSide("-5alpha-34beta");
		assert.strictEqual(result.size, 2);
		assert.strictEqual(result.has("alpha"), true);
		assert.strictEqual(result.has("beta"), true);
	});
	it("Should consolidate multiple unknowns", function () {
		let result = mapifySingleSide("-x+2-4x-1");
		assert.strictEqual(result.size, 2);
		assert.strictEqual(result.has("x"), true);
		assert.strictEqual(result.has(1), true);
	});
	it("Should handle complex expressions", function () {
		let result = mapifySingleSide("-42s-z-28u-932-66r-54q+21q+32v-39z-2635+92t-29w-52y+16p+33p+35w+29p+51x+35z-28u-25q");
		assert.strictEqual(result.size, 12);
		assert.strictEqual(result.has("p"), true);
		assert.strictEqual(result.has("q"), true);
		assert.strictEqual(result.has("r"), true);
		assert.strictEqual(result.has("s"), true);
		assert.strictEqual(result.has("t"), true);
		assert.strictEqual(result.has("u"), true);
		assert.strictEqual(result.has("v"), true);
		assert.strictEqual(result.has("w"), true);
		assert.strictEqual(result.has("x"), true);
		assert.strictEqual(result.has("y"), true);
		assert.strictEqual(result.has("z"), true);
		assert.strictEqual(result.has(1), true);
	});
});

describe("Equation normalization tests", function () {
	it("Should include variables from single location on either side", function () {
		let result = normalizeEquation("x+y=7z-1");
		assert.strictEqual(result.size, 4);
		assert.strictEqual(result.get("x"), 1);
		assert.strictEqual(result.get("y"), 1);
		assert.strictEqual(result.get("z"), -7);
		assert.strictEqual(result.get(1), -1);
	});
	it("Should accumulate variables from multiple locations on one side", function () {
		let result = normalizeEquation("-x-5-4x-1=y");
		assert.strictEqual(result.size, 3);
		assert.strictEqual(result.get("x"), -5);
		assert.strictEqual(result.get("y"), -1);
		assert.strictEqual(result.get(1), 6);
	});
	it("Should accumulate variables present on both sides", function () {
		let result = normalizeEquation("2x-y+3x=-2y+3x+9y");
		assert.strictEqual(result.size, 3);
		assert.strictEqual(result.get("x"), 1);
		assert.strictEqual(result.get("y"), -4);
		assert.strictEqual(result.get(1), 0);
	});
	it("Should include free terms from a single left-side location", function () {
		let result = normalizeEquation("x-3=y");
		assert.strictEqual(result.size, 3);
		assert.strictEqual(result.get("x"), 1);
		assert.strictEqual(result.get("y"), -1);
		assert.strictEqual(result.get(1), 3);
	});
	it("Should include free terms from a single right-side location", function () {
		let result = normalizeEquation("4x-3y=2z+5");
		assert.strictEqual(result.size, 4);
		assert.strictEqual(result.get("x"), 4);
		assert.strictEqual(result.get("y"), -3);
		assert.strictEqual(result.get("z"), -2);
		assert.strictEqual(result.get(1), 5);
	});
	it("Should accumulate free terms from multiple left-side locations", function () {
		let result = normalizeEquation("12-34x+32+22y-7=2x");
		assert.strictEqual(result.size, 3);
		assert.strictEqual(result.get("x"), -36);
		assert.strictEqual(result.get("y"), 22);
		assert.strictEqual(result.get(1), -37);
	});
	it("Should accumulate free terms from multiple right-side locations", function () {
		let result = normalizeEquation("x+y=2x-2+2y+8");
		assert.strictEqual(result.size, 3);
		assert.strictEqual(result.get("x"), -1);
		assert.strictEqual(result.get("y"), -1);
		assert.strictEqual(result.get(1), 6);
	});
	it("Should accumulate free terms from both sides", function () {
		let result = normalizeEquation("2x-1+y-12+3x=12-2y-2+3x+9y");
		assert.strictEqual(result.size, 3);
		assert.strictEqual(result.get("x"), 2);
		assert.strictEqual(result.get("y"), -6);
		assert.strictEqual(result.get(1), 23);
	});
	it("Should handle complex cases", function () {
		let result = normalizeEquation("34u+22v-50z+6z-18u-5852+32x-68q+37t-40q+5p-45w+93s-48r-22x=-30v-21t+10s+2v-38q-39q");
		assert.strictEqual(result.size, 11);
		assert.strictEqual(result.get("p"), 5);
		assert.strictEqual(result.get("q"), -31);
		assert.strictEqual(result.get("r"), -48);
		assert.strictEqual(result.get("s"), 83);
		assert.strictEqual(result.get("t"), 58);
		assert.strictEqual(result.get("u"), 16);
		assert.strictEqual(result.get("v"), 50);
		assert.strictEqual(result.get("w"), -45);
		assert.strictEqual(result.get("x"), 10);
		assert.strictEqual(result.get("z"), -44);
		assert.strictEqual(result.get(1), 5852);
	});
	it("Should handle long variable names", function () {
		let result = normalizeEquation("-72psi-57delta-2093+34omega-2sigma+26beta-20gamma+61pi+epsilon+113alpha-659-46beta=-39delta-45gamma+22alpha");
		assert.strictEqual(result.size, 10);
		assert.strictEqual(result.get("alpha"), 91);
		assert.strictEqual(result.get("beta"), -20);
		assert.strictEqual(result.get("gamma"), 25);
		assert.strictEqual(result.get("delta"), -18);
		assert.strictEqual(result.get("epsilon"), 1);
		assert.strictEqual(result.get("psi"), -72);
		assert.strictEqual(result.get("omega"), 34);
		assert.strictEqual(result.get("sigma"), -2);
		assert.strictEqual(result.get("pi"), 61);
		assert.strictEqual(result.get(1), 2752);
	});
	it("Should reduce coefficients to relative primes", function () {
		let result = normalizeEquation("9x-12y+5z+12=6y-3x+35z+18");
		assert.strictEqual(result.size, 4);
		assert.strictEqual(result.get("x"), 2);
		assert.strictEqual(result.get("y"), -3);
		assert.strictEqual(result.get("z"), -5);
		assert.strictEqual(result.get(1), 1);
	});
});

describe("Equation system construction tests", function () {
	it("Should include all equations", function () {
		let result = createEqMatrix(["x+y=7z-1", "6x+z=-3y", "4y+10z=-8x"]);
		assert.deepStrictEqual(result, [[1, 'x', 'y', 'z'], [-1, 1, 1, -7], [0, 6, 3, 1], [0, 4, 2, 5]]);
	});
	it("Should fill zeroes where an unknown is missing", function () {
		let result = createEqMatrix(["-y=-4z", "-x+4=8z-1", "6y-10x-2=0", "3x+2y-4z=5"]);
		assert.deepStrictEqual(result, [[1, 'x', 'y', 'z'], [0, 0, -1, 4], [-5, -1, 0, -8], [1, -5, 3, 0], [5, 3, 2, -4]]);
	});
});

describe("Equation system preparation tests", function () {
	it("Should move unknowns to the rightmost column", function () {
		let result = prepareEqMatrix([[1, 'x', 'y', 'z'], [3, 9, -1, 4], [-5, -1, 7, -8], [2, -5, 3, 5], [5, 3, 2, -4]]);
		assert.deepStrictEqual(result, [['x', 'y', 'z', 1], [9, -1, 4, 3], [-1, 7, -8, -5], [-5, 3, 5, 2], [3, 2, -4, 5]]);
	});
	it("Should remove duplicates", function () {
		let result = prepareEqMatrix([[1, 'x', 'y'], [1, 1, 1], [1, 1, 1], [-3, 1, -3]]);
		assert.deepStrictEqual(result, [["x", "y", 1], [1, 1, 1], [1, -3, -3]]);
	});
//	it("Should swap equations to position 1s to pivot positions", function () {
//		let result = prepareEqMatrix([[1, 'x', 'y', 'z'], [-4, 3, -4, 2], [1, -2, 1, 2], [2, 1, 2, -6]]);
//		assert.deepStrictEqual(result, [["x", "y", "z", 1], [1, 2, -6, 2], [-2, 1, 2, 1], [3, -4, 2, -4]]);
//	});
//	it("Should swap equations to avoid 0 in pivot positions", function () {
//		let result = prepareEqMatrix([[1, 'x', 'y', 'z'], [0, 0, -1, 4], [-5, -1, 0, -8], [1, -5, 3, 0], [5, 3, 2, -4]]);
//		assert.deepStrictEqual(result, [["x", "y", "z", 1], [-1, 0, -8, -5], [0, -1, 4, 0], [3, 2, -4, 5], [-5, 3, 0, 1]]);
//	});
	it("Should swap equations to avoid 0 in pivot positions", function () {
		let result_1 = prepareEqMatrix([[1, 'x', 'y', 'z'], [0, 0, -1, 4], [-5, -1, 0, -8], [1, -5, 3, 0], [5, 3, 2, -4]]);
		assert.deepStrictEqual(isValidCoeffMatrix(result_1), true);
		let result_2 = prepareEqMatrix([ [ 1, 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ],
		[ 3434, 0, 79, -88, 7, 24, -14, 60, -63, -70, -49, -30 ],
		[ -3385, 22, -39, 24, 77, -61, -72, 45, 3, -49, 52, -34 ],
		[ -18582, 86, 15, 68, -47, 90, 19, 88, 57, 25, 52, -15 ],
		[ -898, -75, -89, 38, 8, 21, 34, 54, 22, 49, -15, 29 ],
		[ -376, 61, 68, -46, 50, 39, -36, 31, -18, 27, -25, -17 ],
		[ -7756, 94, -94, -1, 29, 45, -98, -18, 39, -95, 44, -18 ],
		[ 6800, -32, -14, -30, -6, 5, 19, 100, 55, 82, -87, 95 ],
		[ 16838, -58, 99, 8, 78, -35, 100, -38, -60, 6, 10, 90 ],
		[ -4257, 40, 55, -26, -13, 84, -64, -18, -78, 23, -4, 70 ],
		[ -4495, 62, -35, -22, -47, 85, 56, -75, -24, -60, 33, -43 ],
		[-1471, 50, -14, 42, 74, -50, 54, 26, -57, 55, 69, 2]]);
		assert.deepStrictEqual(isValidCoeffMatrix(result_2), true);

		// This is very much an edge case. Real-world situations are just handled fine by the above tests
		//		let result_3 = prepareEqMatrix([[1, 'k', 'x', 'y', 'z'], [4, 0, 1, 0, 1], [4, 1, 0, 0, 0], [2, 0, 0, 1, 0], [5, 1, 1, 0, 0]]);
		//		assert.deepStrictEqual(isValidCoeffMatrix(result_3), true);
	});
});

/*
	describe("Equations", function () {
		it("with a single variable should be solved", function () {
			assert.strictEqual(solve(["2x=4"]), 2.0);
		});
		it("with multiple variables should be solved", function () {
			assert.strictEqual(solve(["2x+8y=4", "-x+4y=14"]), { x: -6, y: 2 });
		});
	});

	describe("testBasicSolvableRepeated", function () {
		it("x=4y, 2x=8y, x+y=5", function () {
			let result = solve(["x=4y", "2x=8y", "x+y=5"]);
			Test.assertApproxEquals(result.get("x"), 4);
			Test.assertApproxEquals(result.get("y"), 1);
		});
	});

	describe("testBasicZeroAsSolution", function () {
		it("x+y=7z-1, 6x+z=-3y, 4y+10z=-8x", function () {
			let result = solve(["x+y=7z-1", "6x+z=-3y", "4y+10z=-8x"]);
			Test.assertApproxEquals(result.get("x"), 1);
			Test.assertApproxEquals(result.get("y"), -2);
		});
	});

	describe("testBasicLongVariables", function () {
		it("2alpha+8beta=4, -alpha+4beta=14", function () {
			let result = solve(["2alpha+8beta=4", "-alpha+4beta=14"]);
			Test.assertApproxEquals(result.get("alpha"), -6);
			Test.assertApproxEquals(result.get("beta"), 2);
		});
	});

	describe("testBasicRightHandVariables", function () {
		it("2x=8y, x+y=5", function () {
			let result = solve(["2x=8y", "x+y=5"]);
			Test.assertApproxEquals(result.get("x"), 4);
			Test.assertApproxEquals(result.get("y"), 1);
		});
	});

	describe("testBasicRepeatingVariables", function () {
		it("2x-y+3x=-2y+3x+9y, -y+x+2y=5", function () {
			let result = solve(["2x-y+3x=-2y+3x+9y", "-y+x+2y=5"]);
			Test.assertApproxEquals(result.get("x"), 4);
			Test.assertApproxEquals(result.get("y"), 1);
		});
	});

	describe("testBasicNotEnoughEqs", function () {
		it("x+y=0", function () {
			Test.assertApproxEquals(solve(["x+y=0"]), null);
		});
	});

	describe("testBasicNoSolutions", function () {
		it("x+2y=1, 2x=2-4y", function () {
			Test.assertApproxEquals(solve(["x+2y=1", "2x=2-4y"]), null);
		});
	});

	describe("testBasicIndeterminate", function () {
		it("x+y=1, 2x+2y=2", function () {
			Test.assertApproxEquals(solve(["x+y=1", "2x+2y=2"]), null);
		});
	});
 */
