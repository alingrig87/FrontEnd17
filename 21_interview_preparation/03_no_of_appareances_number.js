function noOfApp(number, value) {
	var count = 0;
	var reversedNumber = 0;
	while (number != 0) {
		if (number % 10 == value) {
			console.log(number % 10 == value);
			count++;
		}
		// reversedNumber = 10 * reversedNumber + (number % 10);
		// console.log(reversedNumber);
		number = parseInt(number / 10);
	}
	return count;
}

console.log(noOfApp(123456, 5));
