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

ulTodoList.appendChild(newTodoLi);

console.log(linkDeleteButton);
console.log(newTodoLi);

var index = 5;

var firstLi = document.querySelector(
	'#main > div.card-action > ul > li:nth-child(' + index + ')'
);

ulTodoList.insertBefore(newTodoLi, firstLi);
