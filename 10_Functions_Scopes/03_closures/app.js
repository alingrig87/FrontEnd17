var a = 10;

function calculateTotalPrice() {
	var totalNumberOfProducts = 355;

	function discount() {
		//premium client
		if (totalNumberOfProducts > 300) {
			return 0.25;
		} else if (totalNumberOfProducts > 100) {
			return 0.1;
		} else {
			return 0;
		}
	}

	function total(price) {
		return totalNumberOfProducts * price * (1 - discount());
	}

	return total;
}

var calculateTotal = calculateTotalPrice();

console.log(calculateTotal);
console.log(calculateTotal(10));
