function zero() {
	return arguments[0] ? eval(0 + arguments[0]) : 0;
}

function one() {
	return arguments[0] ? eval(1 + arguments[0]) : 1;
}

function two() {
	return arguments[0] ? eval(2 + arguments[0]) : 2;
}

function three() {
	return arguments[0] ? eval(3 + arguments[0]) : 3;
}

function four() {
	return arguments[0] ? eval(4 + arguments[0]) : 4;
}

function five() {
	return arguments[0] ? eval(5 + arguments[0]) : 5;
}

function six() {
	return arguments[0] ? eval(6 + arguments[0]) : 6;
}

function seven() {
	return arguments[0] ? eval(7 + arguments[0]) : 7;
}

function eight() {
	return arguments[0] ? eval(8 + arguments[0]) : 8;
}

function nine() {
	return arguments[0] ? eval(9 + arguments[0]) : 9;
}

function plus() {
	return "+" + arguments[0];
}

function minus() {
	return "-" + arguments[0];
}

function times() {
	return "*" + arguments[0];
}

function dividedBy() {
	return "/" + arguments[0] + ">> 0";
}

// From: https://www.codewars.com/kata/calculating-with-functions/
// 5 kyu

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
