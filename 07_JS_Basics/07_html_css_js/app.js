function sumOfTwoNumbers() {
	var firstNumberInput = document.getElementById('firstNumber');
	var firstNumber = Number(firstNumberInput.value);
	var secondNumberInput = document.getElementById('secondNumber');
	var secondNumber = Number(secondNumberInput.value);

	var sum = firstNumber + secondNumber;

	var output = document.getElementById('output');
	output.innerHTML = firstNumber + ' + ' + secondNumber + ' = ' + sum;

	var outputColorInput = document.getElementById('output-color');
	console.log(outputColorInput.value);
	// background-color css property => object attribute ---> backgroundColor
	output.style.fontFamily = 'Verdana';
	output.style.backgroundColor = outputColorInput.value;
}

// sumOfTwoNumbers();
