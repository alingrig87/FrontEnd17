//Promises
// 3 states - pending, fulfilled, rejected

var getData = new Promise((resolve, reject) => {
	console.log('loading data from api ....');

	setTimeout(() => resolve('data loading finished'), 5000);
});

getData
	.then((result) => 'rezultatul este ' + result)
	.then((newResult) => console.log(newResult));
