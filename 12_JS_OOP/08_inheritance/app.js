class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
		console.log('S-a create o persoana cu numele:', name);
	}

	get name() {
		return this._name;
	}
}

class Employee extends Person {
	constructor(name, salary, age) {
		super(name, age);
		console.log('S-a creat un angajat cu salariul:', salary);
		this._salary = salary;
	}

	get salary() {
		return this._salary;
	}
}

class Manager extends Employee {
	constructor(name, salary, age, bonus) {
		super(name, salary, age);
		this.bonus = bonus;
	}
}

var person1 = new Person('Costel');
var emp1 = new Employee('Vasile', 2500, 35);

// console.log(person1);
console.log(emp1);
console.log(emp1.salary);
console.log(emp1._name);
console.log(emp1._age);
console.log(emp1.name);

console.log(person1);
console.log(person1.__proto__);

console.log(emp1);
console.log(emp1.__proto__);

console.log(Person.isPrototypeOf(Employee));

console.log(emp1);

var manager = new Manager('Viorel', 5500, 44, 2000);
console.log(manager);
