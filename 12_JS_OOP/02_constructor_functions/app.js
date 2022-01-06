function FootballPlayer(name, currentTeam, age, position) {
	this.name = name;
	this.currentTeam = currentTeam;
	this.age = age;
	this.position = position;
}

var neymar = new FootballPlayer('Neymar', 'PSG', 29, 'LF');
console.log(neymar.name);
console.log(neymar.currentTeam);
console.log(neymar.age);
console.log(neymar.position);

function Phone(brand, model, price, imgURL) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.imgURL = imgURL;
}

var iphone = new Phone(
	'Apple',
	'13 PRO Max',
	1400,
	'https://s13emagst.akamaized.net/products/40685/40684425/images/res_b2965868335e50e5726c369f5b159ce3.jpg?width=300&height=300&hash=59DA50C45CF1DBC3488B62FC90E362A6'
);

var samsung = new Phone('samsung', 's20fe', '1200');

var phones = [iphone, samsung];
