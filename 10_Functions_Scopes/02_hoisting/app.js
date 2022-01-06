console.log(sumOfTwo(2, 5));
coolLog(4);

// hoisting
console.log(a); // only the declaration was moved, but not the initialization
var a = 10;
console.log(a);

console.log(sumOfTwo(2, 5));

function sumOfTwo(a, b) {
	coolLog(a + b);
	return a + b;
}

function coolLog(x) {
	console.log('Value is: ' + x);
}
