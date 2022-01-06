function Phone(brand, model, price, imgURL) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.imgURL = imgURL;
}

Phone.prototype.showInfo = function () {
	console.log('Brand:' + this.brand);
	console.log('model:' + this.model);
};

var iphone = new Phone(
	'Apple',
	'13 PRO Max',
	1400,
	'https://s13emagst.akamaized.net/products/40685/40684425/images/res_b2965868335e50e5726c369f5b159ce3.jpg?width=300&height=300&hash=59DA50C45CF1DBC3488B62FC90E362A6'
);

var samsung = new Phone(
	'samsung',
	's20fe',
	'1200',
	'https://s13emagst.akamaized.net/products/40685/40684425/images/res_b2965868335e50e5726c369f5b159ce3.jpg?width=300&height=300&hash=59DA50C45CF1DBC3488B62FC90E362A6',
	false
);

console.log(samsung.__proto__);

iphone.showInfo();
samsung.showInfo();

var products = [iphone, samsung];
console.log(Phone.prototype);
