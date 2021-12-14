var allDivs = document.getElementsByTagName('div');
console.log(allDivs);

allDivs[0].style.background = 'lightblue';

for (var i = 0; i <= allDivs.length - 1; i++) {
	allDivs[i].style.background = 'lightblue';
}

for (var currentDiv of allDivs) {
	currentDiv.style.background = 'lightgray';
}

//
var allTodos = document.getElementsByClassName('collection-item');
console.log(allTodos);

// for (var todo of allTodos) {
// 	console.log(todo);
// 	todo.style.background = 'lightblue';
// }

for (var i = 0; i <= allTodos.length - 1; i++) {
	allTodos[i].id = 'todo' + i;
	// allTodos[i].setAttribute('id', 'todo' + i);

	if (i % 2 == 0) {
		allTodos[i].style.background = 'lightblue';
	}
}

//
var allTodosUsingSelectorAll = document.querySelectorAll('.collection > li');
console.log(allTodosUsingSelectorAll);

allTodosUsingSelectorAll.forEach((todo) => (todo.style.background = 'gray'));

var addTask = document.getElementById('add-task');
console.log(addTask.classList);
addTask.classList.remove('btn');
addTask.classList.add('btn-dark');
addTask.classList.replace('btn-dark', 'btn');
addTask.classList.toggle('btn');
addTask.classList.toggle('btn');
