Array.prototype.remove_ = function (integer_list, values_list) {
	return integer_list.filter(element => values_list.indexOf(element) === -1)
}

// From: https://www.codewars.com/kata/remove-all-the-marked-elements-of-a-list/
// 7 kyu

var l = new Array();
var integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
var values_list = [1, 3];

console.log(l.remove_(integer_list, values_list));
