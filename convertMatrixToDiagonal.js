function isValidCoeffMatrix(coeffMatrix) {
	for (let i = 0; i < Math.min(coeffMatrix[0].length, coeffMatrix.length); i++) {
		if (coeffMatrix[i][i] === 0) {
			return false;
		}
	}
	return true;
}

function permute(k, arr) {
	if (k === 1) {
		console.log(arr);
	} else {
		permute(k - 1, arr)
		for (let i = 0; i < k - 1; i++) {
			if (k % 2 === 0) {
				[arr[i], arr[k - 1]] = [arr[k - 1], arr[i]];
			} else {
				[arr[0], arr[k - 1]] = [arr[k - 1], arr[0]];
			}
			permute(k - 1, arr);
		}
	}
	return arr;
}

var tryArr_1 = [
	[1, 0, 1, 0],
	[0, 0, 0, 1],
	[0, 1, 0, 0],
	[1, 0, 0, 1]
]

console.log(tryArr_1.slice(1));

//console.log(tryArr_1);
//console.log(isValidCoeffMatrix(tryArr_1));










/*
function backtrack(junction):

  if is_exit:
    return true  for each direction of junction:
    if backtrack(next_junction):
      return true

  return false
 */
