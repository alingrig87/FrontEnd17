// function sum(a, b) {
// 	return a + b;
// }

// function square(a) {
// 	return a * a;
// }

// const sum = (a, b) => {
// 	return a + b;
// };

const sum = (a, b) => a + b;

console.log(sum(2, 5));

const square = (a) => a * a;

document.getElementById('ch-color').addEventListener('click', (e) => {
	console.log(e.target);
	document.getElementById('title').classList.toggle('red');
});
