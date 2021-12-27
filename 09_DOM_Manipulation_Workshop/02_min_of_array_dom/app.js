var calculateMinButton = document.querySelector('#select-min');
calculateMinButton.addEventListener('click', createDivNumbers);
var inputElement = document.querySelector('#numbers');

function createDivNumbers() {
	var inputOfNumbers = inputElement.value;
	var arrOfStringNumbers = inputOfNumbers.replaceAll(' ', '').split(',');
	var numbersContainer = document.querySelector('.container');
	numbersContainer.innerHTML = '';

	var min = calculateMin(arrOfStringNumbers);
	console.log(min);

	for (var i = 0; i <= arrOfStringNumbers.length - 1; i++) {
		var divNumber = document.createElement('div');
		divNumber.classList.add('number');
		if (Number(arrOfStringNumbers[i]) == min) {
			divNumber.classList.add('min');
		}
		divNumber.innerHTML = arrOfStringNumbers[i];
		numbersContainer.appendChild(divNumber);
	}

	return arrOfStringNumbers;
}

function calculateMin(arrNumberStrings) {
	var min = Number(arrNumberStrings[0]);
	for (var i = 1; i <= arrNumberStrings.length - 1; i++) {
		if (Number(arrNumberStrings[i]) < min) {
			min = Number(arrNumberStrings[i]);
		}
	}
	return min;
}

calculateMin(['2', '4']);
