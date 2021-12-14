var taskTitle = document.getElementById('task-title');

console.log(taskTitle.id);
console.log(taskTitle.className);

taskTitle.style.background = 'lightblue';
taskTitle.style.width = '50%';
taskTitle.style.fontSize = '24px';

taskTitle.innerHTML = '<span class="darkblue" >Sarcini</span>';

taskTitle.innerText = 'Tasks';

// using css selectors
// .card-content > input[type="submit"].btn
// var addTaskBtn = document.querySelector(
// 	".card-content > input[type='submit'].btn"
// );

var addTaskBtn = document.querySelector('#add-task');

console.log(addTaskBtn);
addTaskBtn.style.background = 'darkgreen';

console.log(
	document.querySelector('#main > div.card-content > span.card-title')
);
