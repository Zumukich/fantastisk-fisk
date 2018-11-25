const assert = require("assert");
const pointsCollision = require("../pointsCollision");

describe("Points", function () {
		it("should collide if their starting point and vector crosses each other", function() {
			assert.equal(pointsCollision([0, 0], [10, 0], [40, 0], [-30, 0]), true);
			assert.equal(pointsCollision([1, 1], [30, 30], [5, 5], [4, 4]), true);
			assert.equal(pointsCollision([1, 1], [8, 2], [2, 6], [-12, 4]), true);
			assert.equal(pointsCollision([1, 1], [1, 1], [-2, -6], [12, -4]), true);
			assert.equal(pointsCollision([1, 1], [1, 1], [0, 0], [0, 0]), true);
		});
		it("should not collide if their vector don't cross", function() {
			assert.equal(pointsCollision([1, 1], [8, 2], [-2, -6], [12, -4]), false);
			assert.equal(pointsCollision([-3, 0], [-2, 0], [2, 0], [2, 0]), false);
			assert.equal(pointsCollision([1, 7], [1, -3], [0, 1], [0, -1]), false);
			assert.equal(pointsCollision([1, 1], [2, 2], [0, 0], [0, 0]), false);
		});
});
