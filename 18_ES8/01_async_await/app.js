//https://api.github.com/users

// document
// 	.getElementById('get-users')
// 	.addEventListener('click', fetchGithubUsers);

window.addEventListener('load', fetchGithubUsers);

// function fetchGithubUsers() {
// 	fetch('https://api.github.com/users')
// 		.then((result) => result.json())
// 		.then((users) => console.log(users));
// }

async function fetchGithubUsers() {
	let result = await fetch('https://api.github.com/users');
	let users = await result.json();

	let userCardsString = users
		.map(
			(user) =>
				`<div class="user-card">
         <h2>${user.login}</h2>
         <img src=${user.avatar_url} />
      </div>`
		)
		.join('');

	document.querySelector('.users').innerHTML = userCardsString;
}
