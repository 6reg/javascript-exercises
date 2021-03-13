function add (x, y) {
return x + y	
}

function subtract (x, y) {
return x - y	
}

function sum (arr) {
	return arr.reduce((a, b) => a + b, 0)
}


function multiply (arr) {
	return arr.length ? arr.reduce((a,b) => a * b)
	: 0;
}

function power(x, y) {
	return Math.pow(x, y)	
}

function factorial(n) {
	if (n == 0 || n == 1) {
		return 1
	}	
	return n * factorial(n - 1)
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}