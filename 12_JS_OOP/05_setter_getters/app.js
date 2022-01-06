class Person {
	constructor(firstName, lastName, age) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._age = age;
	}

	get info() {
		return `${this._firstName} ${this._lastName}`;
	}

	set age(value) {
		this._age = value;
	}
}

var p1 = new Person('Marian', 'Popescu', 35);
// console.log(this._age);

console.log(p1.info);
p1._age = 30;
console.log(p1);
p1.age = 35;
console.log(p1);
