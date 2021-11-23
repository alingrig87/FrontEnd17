// arithmetic operators
var a = 12;
var b = 5;

var sum = a + b;
console.log(sum);

var diff = a - b;
console.log(diff);

var prod = a * b;
console.log(prod);

var div = a / b;
console.log(div);

var mod = a % b;
console.log(mod);

console.log(5 % 2);
console.log(17 % 6);
console.log(2004 % 4);
console.log(3 % 2);
console.log(8 % 2);

// comparision operators
var x = 5;
console.log(x == 5);
console.log((x = 3));
console.log(x);

console.log(2 == 2);
console.log(2 == '2'); //true
console.log(2 === '2'); //false

console.log(2 != 2); // false
console.log(2 != '2'); //false
console.log(2 !== '2'); //true

console.log(2 < 5);
console.log(2 <= 5);
console.log(2 > 5);
console.log(2 >= 5);

// AND - card and pin
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true && true);

// OR - cash or card
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(true || true);

console.log(2 < 5 && 3 < 4);
console.log(2 > 3 || 18 > 22);

// ternary operator
var n = 13;
var numberType = n % 2 == 0 ? 'The number is even' : 'The number is odd';
console.log(numberType);
