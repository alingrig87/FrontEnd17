// setTimeout(coolAlert, 5000);

// function coolAlert() {
// 	alert('Salut');
// }
var button = document.getElementById('show-message');
button.addEventListener('click', showTempMessage);

function showTempMessage() {
	var container = document.querySelector('.container');
	var newDivMessage = document.createElement('div');
	newDivMessage.innerHTML = 'Multumim pentru mesaj!';
	newDivMessage.style.backgroundColor = 'green';

	container.appendChild(newDivMessage);

	var timer = setTimeout(function () {
		newDivMessage.remove();
	}, 3000);
	clearTimeout(timer);
}

// setTimeout(function () {
// 	console.log('1');
// }, 1000);
// setTimeout(function () {
// 	console.log('2');
// }, 0);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// setTimeout(function () {
// 	console.log('55');
// }, 0);
