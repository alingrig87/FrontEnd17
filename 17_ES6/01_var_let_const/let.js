// let
let x = 10;
console.log(x);

function test() {
	let y = 20;
	console.log(y);
}

test();

function loop() {
	// i - block scope
	for (let i = 0; i <= 10; i++) {
		console.log(i);
	}
	// console.log('outside for', i);

	{
		let z = 20;
	}
	// z - is not available outside the scope
	// console.log(z);
}

loop();

let myFirstNumber = 10;
console.log(myFirstNumber);
myFirstNumber = 55;
console.log(myFirstNumber);
