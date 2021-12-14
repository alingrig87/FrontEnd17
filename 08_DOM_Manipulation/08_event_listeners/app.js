var ulTodoList = document.querySelector('#main > div.card-action > ul');

ulTodoList.addEventListener('click', deleteTodo);

function deleteTodo(event) {
	console.log(event.target.classList);
	if (event.target.classList.contains('fa-remove')) {
		ulTodoList.removeChild(event.target.parentNode.parentNode);
	}
}

var deleteAllTasksBtn = document.querySelector('#main > div.card-action > a');

deleteAllTasksBtn.addEventListener('click', deleteAllTasks);

function deleteAllTasks() {
	// ulTodoList.innerHTML = '';
	var allTodos = document.querySelectorAll('.collection > .collection-item');
	console.log(allTodos);
	for (var todo of allTodos) {
		todo.remove();
	}
}
