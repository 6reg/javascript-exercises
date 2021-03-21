function add (a,b) {
return a + b 
}

function subtract (a, b) {
	return a - b	
}

function sum (arr) {
 let total = arr.reduce((a,b) => {
	 return a + b
 }, 0)
 	return total 
}

function multiply (arr) {
	let total = arr.reduce((a,b) => a*b, 1)
	return total

}

function power(a,b) {
	let total = a
	for (let i =  0; i < b; i++) {
		total *= a;
		b--;
	}
	return total
}

function factorial(a) {
	if (a == 1 || a == 0) {
		return 1
	} else {
		let total = a;
		let counter = a
		for (let i = a; i > 1; i--) {
			total *= (counter - 1);
			counter--;
			}
		return total
	}	
=======
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
>>>>>>> 5ef7e6722e917611edcd7471fe78812c2f179c6b
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
