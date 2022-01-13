var getBtn = document.getElementById('get');
var postBtn = document.getElementById('post');
var putBtn = document.getElementById('put');
var deleteBtn = document.getElementById('delete');

getBtn.addEventListener('click', getAllDogs);

async function getAllDogs() {
	var response = await fetch(
		'https://61e0713863f8fc0017618791.mockapi.io/dogs'
	);
	var data = await response.json();
	console.log(data);
}

postBtn.addEventListener('click', addNewDog);

async function addNewDog() {
	var response = await fetch(
		'https://61e0713863f8fc0017618791.mockapi.io/dogs',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: 'Masha',
				image:
					'https://content.fun-japan.jp/renewal-prod/cms/articles/content/shutterstock1481706194jpg_2021-03-03-03-15-17.jpg',
			}),
		}
	);
	console.log('POST new dog:', response);
}

putBtn.addEventListener('click', updateDog);

async function updateDog() {
	var response = await fetch(
		'https://61e0713863f8fc0017618791.mockapi.io/dogs/1',
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: 'Test',
				image: 'test.img',
			}),
		}
	);
	console.log('Update dog:', response);
}

deleteBtn.addEventListener('click', deleteDog);

async function deleteDog() {
	var response = await fetch(
		'https://61e0713863f8fc0017618791.mockapi.io/dogs/6',
		{
			method: 'DELETE',
		}
	);
	console.log('Update dog:', response);
}
