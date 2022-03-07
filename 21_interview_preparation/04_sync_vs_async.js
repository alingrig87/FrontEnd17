console.log(1);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 0);
setTimeout(() => console.log(4), 900);
setTimeout(() => console.log(5), 0);
console.log(6);
new Promise((resolve, reject) => {
	setTimeout(() => resolve(7), 0);
}).then((data) => console.log(data));

console.log(Math.random());
