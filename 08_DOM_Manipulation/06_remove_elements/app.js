//create a new element
var newTodoLi = document.createElement('li');

newTodoLi.classList.add('collection-item');
newTodoLi.innerText = 'Playing football';

var linkDeleteButton = document.createElement('a');
linkDeleteButton.href = '#';
linkDeleteButton.classList.add('delete-item', 'secondary-content');
linkDeleteButton.innerHTML = '<i class="fa fa-remove"></i>';

newTodoLi.appendChild(linkDeleteButton);

var ulTodoList = document.querySelector('#main > div.card-action > ul');

// ulTodoList.appendChild(newTodoLi);

var ulTodoList = document.querySelector('#main > div.card-action > ul');

var firstLi = document.querySelector(
	'#main > div.card-action > ul > li:nth-child(1)'
);
console.log(firstLi);

ulTodoList.removeChild(firstLi);

var secondLi = document.querySelector(
	'#main > div.card-action > ul > li:nth-child(1)'
);

ulTodoList.replaceChild(newTodoLi, secondLi);
ulTodoList.appendChild(secondLi);
