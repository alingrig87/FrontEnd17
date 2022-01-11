function Person(name, age) {
	this.name = name;
	this.age = age;

	this.test = function () {
		console.log(this, 'person test');
	};
}

var person = new Person('costel', 30);
var wrongPerson = Person('Daniel', 49);
console.log(person, wrongPerson);

console.log(this.name);
console.log(this.age);

console.log(window.document);
console.log(window.name);
console.log(window.age);

// implicit binding
console.log(this == window);

function test() {
	console.log(this);
}

test();
person.test();
// wrongPerson.test();

// explicit binding
class Byke {
	constructor(brand) {
		this.brand = brand;
	}

	run() {
		console.log('BIKE METHOD');
		console.log('Bycicle is running!!!', this.brand);
	}
}

class Motocycle {
	constructor(brand) {
		this.brand = brand;
	}
}

var byke = new Byke('Super Bike');
var motocycle = new Motocycle('BMW');

byke.run();
let motoRun = byke.run.bind(motocycle);
motoRun();
