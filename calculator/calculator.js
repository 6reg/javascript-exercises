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
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}