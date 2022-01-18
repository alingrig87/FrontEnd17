var secondsCounter = 0;
var minutesCounter = 0;

var timerInterval;

document.getElementById('start').addEventListener('click', startTimer);

function startTimer() {
	timerInterval = setInterval(function () {
		showSeconds(secondsCounter);
		showMinutes(minutesCounter);
		if (secondsCounter == 59) {
			secondsCounter = 0;
			minutesCounter++;
		} else {
			secondsCounter++;
		}
	}, 1000);
	console.log(timerInterval);
}

function showSeconds(value) {
	var secondsSpan = document.getElementById('seconds');
	if (value < 10) {
		value = '0' + value;
	}
	secondsSpan.innerHTML = value;
}

function showMinutes(value) {
	var minutesSpan = document.getElementById('minutes');
	if (value < 10) {
		value = '0' + value;
	}
	minutesSpan.innerHTML = value;
}

document.getElementById('stop').addEventListener('click', stopTimer);

function stopTimer() {
	clearInterval(timerInterval);
}

document.getElementById('reset').addEventListener('click', resetTimer);

function resetTimer() {
	secondsCounter = 0;
	minutesCounter = 0;
	document.getElementById('seconds').innerHTML = '00';
	document.getElementById('minutes').innerHTML = '00';
}
