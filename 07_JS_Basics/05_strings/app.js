var lastName = 'Ion';
var firstName = 'Popescu';
var space = ' ';

var fullName = lastName + ' ' + firstName;
console.log(fullName);

var x = 1 + 2 + '3' + 4;
// x = 1 + 2 + "3" + 4
// x = 3 + "3" + 4
// x = "33" + 4
// x = "334"
console.log(x);
console.log(typeof x);

var x1 = '1' + 2 + 3;
console.log(x1);

var x2 = (2 * 3) / 4 + '12' + 3;
console.log(x2);

console.log(Number(x2) + 1);

var x3 = '1.523a';
console.log(Number(x3));
console.log(parseInt(x3));
console.log(parseFloat(x3));

var nickname = 'I\'m \n "Dudu"';
console.log(nickname);

var book1 = 'Amintiri din copilarie';
var book2 = 'Mara';
var book3 = 'Morometii';

// Am citit urmatoarele carti:
// - Amintiri din copilarie
// - Mara
// - Morometii

console.log(
	'Am citit urmatoarele carti: \n - ' +
		book1 +
		'\n' +
		' - ' +
		book2 +
		'\n' +
		' - ' +
		book3
);

var path = 'C:\\Users\\nPoze2003\\poza1.jpg';
console.log(path);

var link = 'http://google.com';

//indexing
var CNP = '1991215223349';
console.log(CNP.length);
var sex = CNP[0];
console.log(sex);
var gender = Number(sex) % 2 == 0 ? 'Female' : 'Male';
console.log(gender);

var year = CNP[1] + CNP[2];
year = sex == '1' || sex == '2' ? '19' + year : '20' + year;
console.log(year);

console.log(CNP[CNP.length - 1]);

// indexOf
console.log(CNP.indexOf('49'));
console.log(CNP.lastIndexOf('9'));

// substring
var month = CNP.substring(3, 5);
console.log(month);
var day = CNP.substr(5, 2);
console.log(day);

// split
var str = 'Ana are mere, dar si pere';
console.log(str.split(' '));
console.log(str.split(','));

var date = '25/12/2021';
var day = date.split('/')[0];
console.log(day);
var month = date.split('/')[1];
console.log(month);
var year = date.split('/')[2];
console.log(year);

// replace
str = str.replace('mere', 'struguri');
console.log(str);
