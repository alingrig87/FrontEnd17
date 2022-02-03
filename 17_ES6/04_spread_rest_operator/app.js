// spread
let numbers = [4, 5, 9];
let newNumbers = [...numbers, 2, 3];

console.log(newNumbers);

let product = {
	name: 'dacia logan',
	price: 10000,
};

let productInCart = { ...product, numberOfProducts: 1 };

console.log(productInCart);
