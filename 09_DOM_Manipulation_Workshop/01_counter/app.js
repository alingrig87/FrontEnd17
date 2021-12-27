// buttons
var plusButton = document.querySelector('#plus');
var minusButton = document.querySelector('#minus');

// value to be changed
var value = Number(document.querySelector('#value').innerHTML);

// paragraph element
var counterParagraph = document.querySelector('#value');

// add events listeners
plusButton.addEventListener('click', incrementNumber);
minusButton.addEventListener('click', decrementNumber);

function incrementNumber() {
	if (value < 10) {
		value++;
	} else {
		value = 0;
	}
	counterParagraph.innerHTML = value;
}

function decrementNumber() {
	if (value > 0) {
		value--;
	} else {
		value = 10;
	}
	counterParagraph.innerHTML = value;
}
