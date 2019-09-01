// const assert = require('chai').assert;
const assert = require("assert");
const testFunctions = require("../linearEquation");
const getSideMap = testFunctions.getSideMap;
const normalizeEquation = testFunctions.normalizeEquation;

describe("Coefficient extraction test", function () {
	it("Should extract coefficients from simple positive variables", function () {
		let result = getSideMap("2x+8y");
		assert.equal(result.get("x"), 2);
		assert.equal(result.get("y"), 8);
	});
	it("Should extract coefficients from simple negative variables", function () {
		let result = getSideMap("2-4y");
		assert.equal(result.get("y"), -4);
		assert.equal(result.get(1), 2);
	});
	it("Should extract coefficients from tricky negative variables", function () {
		let result = getSideMap("-2x-234z");
		assert.equal(result.get("x"), -2);
		assert.equal(result.get("z"), -234);
	});
	it("Should extract coefficients from long positive variables", function () {
		let result = getSideMap("2alpha+8beta");
		assert.equal(result.get("alpha"), 2);
		assert.equal(result.get("beta"), 8);
	});
	it("Should extract coefficients from long negative variables", function () {
		let result = getSideMap("-5alpha-34beta");
		assert.equal(result.get("alpha"), -5);
		assert.equal(result.get("beta"), -34);
	});
	it("Should extract 1 from variables without coefficient", function () {
		let result = getSideMap("-psi+gamma");
		assert.equal(result.get("psi"), -1);
		assert.equal(result.get("gamma"), 1);
	});
	it("Should extract 1 from variables without coefficient", function () {
		let result = getSideMap("x-y");
		assert.equal(result.get("x"), 1);
		assert.equal(result.get("y"), -1);
	});
	it("Should extract coefficients from constants", function () {
		let result = getSideMap("3x+12");
		assert.equal(result.get(1), 12);
		assert.equal(result.get("x"), 3);
	});
	it("Should extract coefficients from negative constants", function () {
		let result = getSideMap("2x-10");
		assert.equal(result.get(1), -10);
		assert.equal(result.get("x"), 2);
	});
	it("Should consolidate multiple free terms", function () {
		let result = getSideMap("23+2x-10");
		assert.equal(result.get(1), 13);
		assert.equal(result.get("x"), 2);
	});
	it("Should consolidate multiple unknowns", function () {
		let result = getSideMap("-x+2-4x-1");
		assert.equal(result.get(1), 1);
		assert.equal(result.get("x"), -5);
	});
	it("Should handle complex expressions", function () {
		let result = getSideMap("-42s-z-28u-932-66r-54q+21q+32v-39z-2635+92t-29w-52y+16p+33p+35w+29p+51x+35z-28u-25q");
		assert.equal(result.get("p"), 78);
		assert.equal(result.get("q"), -58);
		assert.equal(result.get("r"), -66);
		assert.equal(result.get("s"), -42);
		assert.equal(result.get("t"), 92);
		assert.equal(result.get("u"), -56);
		assert.equal(result.get("v"), 32);
		assert.equal(result.get("w"), 6);
		assert.equal(result.get("x"), 51);
		assert.equal(result.get("y"), -52);
		assert.equal(result.get("z"), -5);
		assert.equal(result.get(1), -3567);
	});
});

describe("Variable extraction test", function () {
	it("Should extract unknowns from simple positive variables", function () {
		let result = getSideMap("2x+8y");
		assert.equal(result.size, 2);
		assert.equal(result.has("x"), true);
		assert.equal(result.has("y"), true);
	});
	it("Should extract unknowns from simple negative variables", function () {
		let result = getSideMap("2-4y");
		assert.equal(result.size, 2);
		assert.equal(result.has(1), true);
		assert.equal(result.has("y"), true);
	});
	it("Should extract unknowns from tricky negative variables", function () {
		let result = getSideMap("-2x-234z");
		assert.equal(result.size, 2);
		assert.equal(result.has("x"), true);
		assert.equal(result.has("z"), true);
	});
	it("Should extract unknowns from long positive variables", function () {
		let result = getSideMap("2alpha+8beta");
		assert.equal(result.size, 2);
		assert.equal(result.has("alpha"), true);
		assert.equal(result.has("beta"), true);
	});
	it("Should extract unknowns from long negative variables", function () {
		let result = getSideMap("-5alpha-34beta");
		assert.equal(result.size, 2);
		assert.equal(result.has("alpha"), true);
		assert.equal(result.has("beta"), true);
	});
	it("Should consolidate multiple unknowns", function () {
		let result = getSideMap("-x+2-4x-1");
		assert.equal(result.size, 2);
		assert.equal(result.has("x"), true);
		assert.equal(result.has(1), true);
	});
	it("Should handle complex expressions", function () {
		let result = getSideMap("-42s-z-28u-932-66r-54q+21q+32v-39z-2635+92t-29w-52y+16p+33p+35w+29p+51x+35z-28u-25q");
		assert.equal(result.size, 12);
		assert.equal(result.has("p"), true);
		assert.equal(result.has("q"), true);
		assert.equal(result.has("r"), true);
		assert.equal(result.has("s"), true);
		assert.equal(result.has("t"), true);
		assert.equal(result.has("u"), true);
		assert.equal(result.has("v"), true);
		assert.equal(result.has("w"), true);
		assert.equal(result.has("x"), true);
		assert.equal(result.has("y"), true);
		assert.equal(result.has("z"), true);
		assert.equal(result.has(1), true);
	});
});

describe("Equation normalization tests", function () {
	it("Should include variables from single location on either side", function () {
		let result = normalizeEquation("x+y=7z-1");
		// assert.equal(result.size, 4);
		assert.equal(result.get("x"), 1);
		assert.equal(result.get("y"), 1);
		assert.equal(result.get("z"), -7);
		assert.equal(result.get(1), -1);
	});
	it("Should accumulate variables from multiple locations on one side", function () {
		let result = normalizeEquation("-x-5-4x-1=y");
		assert.equal(result.size, 3);
		assert.equal(result.get("x"), -5);
		assert.equal(result.get("y"), -1);
		assert.equal(result.get(1), 6);
	});
	it("Should accumulate variables present on both sides", function () {
		let result = normalizeEquation("2x-y+3x=-2y+3x+9y");
		assert.equal(result.size, 3);
		assert.equal(result.get("x"), 2);
		assert.equal(result.get("y"), -8);
		assert.equal(result.get(1), 0);
	});
	it("Should handle complex cases", function () {
		let result = normalizeEquation("34u+22v-50z+6z-18u-5852+32x-68q+37t-40q+5p-45w+93s-48r-22x=-30v-21t+10s+2v-38q-39q");
		assert.equal(result.size, 11);
		assert.equal(result.get("p"), 5);
		assert.equal(result.get("q"), -31);
		assert.equal(result.get("r"), -48);
		assert.equal(result.get("s"), 83);
		assert.equal(result.get("t"), 58);
		assert.equal(result.get("u"), 16);
		assert.equal(result.get("v"), 50);
		assert.equal(result.get("w"), -45);
		assert.equal(result.get("x"), 10);
		assert.equal(result.get("z"), -44);
		assert.equal(result.get(1), 5852);
	});
	it("Should include free terms from a single left-side location", function () {
		let result = normalizeEquation("x-3=y");
		assert.equal(result.size, 3);
		assert.equal(result.get("x"), 1);
		assert.equal(result.get("y"), -1);
		assert.equal(result.get(1), 3);
	});
	it("Should include free terms from a single right-side location", function () {
		let result = normalizeEquation("4x-3y=2z+5");
		assert.equal(result.size, 4);
		assert.equal(result.get("x"), 4);
		assert.equal(result.get("y"), -3);
		assert.equal(result.get("z"), -2);
		assert.equal(result.get(1), 5);
	});
	it("Should accumulate free terms from multiple left-side locations", function () {
		let result = normalizeEquation("12-34x+32+22y-7=2x");
		assert.equal(result.size, 3);
		assert.equal(result.get("x"), -36);
		assert.equal(result.get("y"), 22);
		assert.equal(result.get(1), -37);
	});
	it("Should accumulate free terms from multiple right-side locations", function () {
		let result = normalizeEquation("x+y=2x-2+2y+8");
		assert.equal(result.size, 3);
		assert.equal(result.get("x"), -1);
		assert.equal(result.get("y"), -1);
		assert.equal(result.get(1), 6);
	});
	it("Should accumulate free terms from both sides", function () {
		let result = normalizeEquation("2x-1+y-12+3x=12-2y-2+3x+9y");
		assert.equal(result.size, 3);
		assert.equal(result.get("x"), 2);
		assert.equal(result.get("y"), -6);
		assert.equal(result.get(1), 23);
	});
	it("Should handle long variable names", function () {
		let result = normalizeEquation("-72psi-57delta-2093+34omega-2sigma+26beta-20gamma+61pi+epsilon+113alpha-659-46beta=-39delta-45gamma+22alpha");
		assert.equal(result.size, 10);
		assert.equal(result.get("alpha"), 91);
		assert.equal(result.get("beta"), -20);
		assert.equal(result.get("gamma"), 25);
		assert.equal(result.get("delta"), -18);
		assert.equal(result.get("epsilon"), 1);
		assert.equal(result.get("psi"), -72);
		assert.equal(result.get("omega"), 34);
		assert.equal(result.get("sigma"), -2);
		assert.equal(result.get("pi"), 61);
		assert.equal(result.get(1), 2752);
	});
});


/*
	describe("Equations", function () {
		it("with a single variable should be solved", function () {
			assert.equal(solve(["2x=4"]), 2.0);
		});
		it("with multiple variables should be solved", function () {
			assert.equal(solve(["2x+8y=4", "-x+4y=14"]), { x: -6, y: 2 });
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