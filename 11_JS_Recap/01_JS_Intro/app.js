console.log('JS Recap from app.js');

// comentarii pe o linie

/*
comentarii 
pe 
mai multe 
linii
*/

//TODO

//TODO

var x = 10;
console.log(x);
var y = x + 1;

var price; // declarare
price = 100; // atribuire

var quantity = 30; //initializare

// case sensitive
var Price;
var PRICE;

// variable name rules
// must start with letter, _, $
var _price;
var $price;
var Price;
var price;

// the varianle name should describe the meaning
var t = 100;
var totalPrice = 100;

// primitives
var myFirstNumber = 3; // number
var myFirstRealNumber = 3.25; //number
var description = 'This is a recap day'; // string
var isRaining = true; // boolean

// special values
var specialValue1 = 1 / 0; // Infinity
var specialValue2 = -1 / 0; // -Infinity

// type of
console.log(typeof myFirstNumber); //number

var mySecondNumber;
console.log(mySecondNumber); //undefined
console.log(typeof mySecondNumber); // undefined

// Operators and expressions
//arithmetic operators
var sum = 2 + 3;
var dif = 5 - 3;
var prod = 2 * 18;
var div = 3 / 4;
var mod = 4 % 3;

// incrementing/decrementing
var a = 10;
console.log(++a); // prefixare
console.log(a++); // postfixare
console.log(++a); // prefixare

var b = 2;
console.log(b++ + ++b + b++ + ++b);

// special arithmetic operators
var x = 2;
x += 2; // x = x + 2;
x -= 2;
x *= 2;

// operations precedence
var n = 1 + 2 * 3; // 7

// String operators
var str = 1 + 2 + '3';
var str2 = 'Java' + 'Script';

var ex = 1 + 2 + '3' + 2 + 3; // '3323'

// comparision operators
console.log(2 == 2); //true
console.log(2 == '2'); //true
console.log(2 === '2'); //false

console.log(2 > 3);
console.log(2 < 3);
console.log(2 >= 3);
console.log(2 <= 3);

// logical operators
console.log(!true);
console.log(!false);

var isRaining = false;
if (isRaining) {
	console.log('Imi iau umbrela!!');
}

if (!isRaining) {
	console.log('Imi vad de treaba!!');
}

var amGhete = true;
var amAdidasi = false;

if (amGhete || amAdidasi) {
	console.log('Pot sa ies afara!!');
}

// OR
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

var amPlatitAsigurareaAuto = true;
var amMotorinaInRezervor = true;

if (amPlatitAsigurareaAuto && amMotorinaInRezervor) {
	console.log('Pot circula regulamentar cu masina!!');
}

// AND
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// type coercion
var a = null;
var b = a + 5; // null se converteste automat la 0
console.log(b);

var c = '4';
console.log(c > 3); // '4' se converteste automat la 4

var e = '3';
console.log(100 - e); // '' se converteste automat la 3

// truthy and falsy values
// undefined ==> false
// null ==> false
// 0 ==> false
// '' or "" ==> false
// NaN ==> false

var isRaning = null;
if (isRaning) {
	console.log('truthy value');
} else {
	console.log('falsy value');
}

// var output = document.getElementById('ouput');
// console.log(output);

// if (output) {
// 	output.innerHTML = 'truthy';
// } else {
// 	output.innerHTML = 'falsy';
// }

// condition operator ?:
var a = 3 > 5 ? 3 : 5;
console.log(a);

var isRaining = true;
var decizie = isRaining ? 'imi iau umbrela' : 'imi vad de treaba';
console.log(decizie);

// string on multiple lines -- string interpolation
var noOfLines = 5;
var str = `string
pe ${noOfLines} 
linii`;
console.log(str);
