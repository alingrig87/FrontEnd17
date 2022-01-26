// var a; - hoisting
// console.log(a);
// var a = 10;

// console.log(sum(3, 4));

// function sum(a, b) {
// 	return a + b;
// }

function test() {
	// var b; - hoisting function scope
	console.log(b);
	var b = 20;
}
// console.log(b);

test();

function loop() {
	// i - function scope
	for (var i = 0; i <= 10; i++) {
		console.log(i);
	}
	console.log('outside for', i);
}

loop();
