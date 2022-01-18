var jsonButton = document.getElementById('json');

jsonButton.addEventListener('click', getUsersFromJSON);

function getUsersFromJSON() {
	fetch('./users.json')
		.then((result) => result.json())
		.then((data) => console.log(data));
}

var apiButton = document.getElementById('api');

apiButton.addEventListener('click', getUsersFromAPI);

function getUsersFromAPI() {
	fetch('https://api.github.com/users')
		.then((result) => result.json())
		.then((data) => console.log(data));
}
