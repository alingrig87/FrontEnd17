var myName;
console.log(myName);
myName = 'Costel';
console.log(myName);
myName = 'Daniel';
console.log(myName);

// valid variable names
var _abc;
var _AB;
var _1;
var a;
var A;

// invalid variable names
// var 123;
// var @ab;
// var -r;

// naming convention variables - camel case
var firstName;
var myFirstNumberOfElements;

// not for java script
var first_name;
var FirstName; // used for classes

// examples - input for first name
var firstNameInput;
var firstNameInputValue;

// Data types
// Number
var x = 10;
console.log(x);
var y = 10 - 12 + (3 * 4) / 25 - 99 + 18;
console.log(y);
console.log(typeof x);

// String
var myName = 'Vasile';
var s = 'Ana are mere';
console.log(myName);
console.log(typeof myName);
console.log(s.length);

// boolean
var b = true;
console.log(b);
console.log(typeof b);

// objects
var dog = {
	name: 'Jumbo',
	rasa: 'pechinez',
};

console.log(dog.name);
console.log(dog.rasa);

//<input type="text" id="secondNumber" />
var input = {
	type: 'text',
	id: 'secondNumber',
};

console.log(input.type);
