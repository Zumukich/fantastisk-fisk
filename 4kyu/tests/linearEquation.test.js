const assert = require("assert");
const pointsCollision = require("../linearEquation");

describe("Variables", function () {
	it("of a single char", function () {
		it("should be extracted from one side of an equation", function () {
			assert.equal(pointsCollision([0, 0], [10, 0], [40, 0], [-30, 0]), true);
		});
		it("should be summed from both side of an equation", function () {
			assert.equal(pointsCollision([0, 0], [10, 0], [40, 0], [-30, 0]), true);
		});

		it("of a long name should be extracted from one side of an equation", function () {
			assert.equal(pointsCollision([1, 1], [8, 2], [-2, -6], [12, -4]), false);
		});
	});

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
