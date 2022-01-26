// forEach

let numbers = [3, 4, 5, 23, -1, 0, 5];

// for (let i = 0; i <= numbers.length - 1; i++) {
// 	console.log(numbers[i]);
// }

// numbers.forEach((number, i, arr) => {
// 	console.log(number, i, arr);
// });

numbers.forEach((number) => console.log(number));

// filter
let ages = [18, 20, 33, 54, 17, 16];

let canDrive = [];
// for (let i = 0; i <= ages.length - 1; i++) {
// 	if (ages[i] >= 18) {
// 		canDrive.push(ages[i]);
// 	}
// }

// ages.forEach((age) => {
// 	if (age >= 18) {
// 		canDrive.push(age);
// 	}
// });

canDrive = ages.filter((age) => age >= 18);
console.log(canDrive);

let str = 'Ana are mere';
// usual method to remove spaces from string
// str = str.replace(/\s/g, '');

let noSpaceStr = str
	.split('')
	.filter((char) => char !== ' ')
	.join('');

console.log(noSpaceStr);

// sort
let unsortedNumbers = [1, 11, 9, 5, 12, 55, 10, 12, -1];

// let sortedNumbers = unsortedNumbers.sort(compareFunction);

// function compareFunction(a, b) {
// 	if (a > b) return 1;
// 	if (a === b) return 0;
// 	if (a < b) return -1;
// }

let sortedNumbers = unsortedNumbers.sort((a, b) => a - b);

console.log(sortedNumbers);

let phones = [
	{
		name: 'iphone 6',
		price: 500,
		rating: 4.5,
	},
	{
		name: 'iphone 3',
		price: 200,
		rating: 2.5,
	},
	{
		name: 'iphone 4s',
		price: 345,
		rating: 4.7,
	},
	{
		name: 'iphone 13',
		price: 5000,
		rating: 3.2,
	},
];

let sortedPhonesByPrice = phones.sort(
	(phone1, phone2) => phone1.price - phone2.price
);

console.log(sortedPhonesByPrice);

let sortedPhonesByRating = phones.sort(
	(phone1, phone2) => phone1.rating - phone2.rating
);

console.log(sortedPhonesByRating);

// random reorder array elements
let randomlySortedNumbers = unsortedNumbers.sort(() => 0.5 - Math.random());
console.log(randomlySortedNumbers);

// map
let incrementedNumbers = sortedNumbers.map((number) => number + 10);
console.log(incrementedNumbers, sortedNumbers);

const container = document.querySelector('.container');

let phoneCards = phones.map(
	(phone) =>
		`<div class="phone">
         <h2>${phone.name}</h2>
         <h3>${phone.price}</h3>
         <p>${phone.rating}</p>
      </div>`
);

console.log(phoneCards.join(''));
container.innerHTML = phoneCards.join('');
