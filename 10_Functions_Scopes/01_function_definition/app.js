// var price = 100;
// var quantity = 50;
// var discount = 0.2;

function calculateTotalPrice(price, quantity, discount) {
	var totalPrice = (price - price * discount) * quantity;

	return totalPrice;
}

var totalCocaColaPrice = calculateTotalPrice(5, 4, 0.2);
console.log(totalCocaColaPrice);
var totalCheesePrice = calculateTotalPrice(40, 2, 0.1);
console.log(totalCheesePrice);

function sumOfTwoNumbers(firstNumber, secondNumber) {
	if (typeof firstNumber != 'number') {
		console.error(firstNumber + 'is not a number');
	}
	if (typeof secondNumber != 'number') {
		console.error(secondNumber + 'is not a number');
	}
	var sum = firstNumber + secondNumber;

	return sum;
}

console.log(sumOfTwoNumbers(2, 3));

var sum1 = sumOfTwoNumbers(12, 44);
console.log(sum1);

sumOfTwoNumbers(12, 44);
sumOfTwoNumbers('dffd', 'ffddfdf');
var specialSum = sumOfTwoNumbers(
	sumOfTwoNumbers(2, 3),
	sumOfTwoNumbers(sumOfTwoNumbers(4, 5), 8)
);
console.log(specialSum);

function isWeekend(day) {
	switch (day.toLowerCase()) {
		case 'sambata':
		case 'duminica':
			return true;
		// default:
		// 	return false;
	}

	return false;
}

console.log(isWeekend('SamBata'));
console.log(isWeekend('Luni'));
