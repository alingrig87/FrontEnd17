function setError(element, message) {
	element.classList.add('error');
	element.innerHTML = message;
}

function setSuccess(element) {
	element.classList.add('success');
}

var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');

setError(box1, 'error 1');
setError(box3, 'error 33443');

setSuccess(box5);
