var semaphorColor = 'magenta';

if (semaphorColor == 'red') {
	console.log('STOP');
} else if (semaphorColor == 'magenta') {
	console.log('INVALID COLOR!!');
} else {
	console.log('CONTINUE');
}

// frequent errors
// using = instead of ==
if ((semaphorColor = 'black')) {
	console.log(semaphorColor);
}

if (semaphorColor == 'blue');
{
	console.log(semaphorColor);
}
{
	console.log(semaphorColor);
}

// loops
var isRaining = true;
var n = 100;
while (isRaining && n >= 0) {
	console.log('Port umbrela', n);
	n--;
}

for (var i = 100; isRaining && i >= 0; i--) {
	console.log('Port umbrela in for', i);
}
