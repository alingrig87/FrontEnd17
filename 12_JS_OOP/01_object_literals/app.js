var phone = {
	brand: 'Apple',
	model: '13 PRO Max',
	price: 1400,
	imgURL:
		'https://s13emagst.akamaized.net/products/40685/40684425/images/res_b2965868335e50e5726c369f5b159ce3.jpg?width=300&height=300&hash=59DA50C45CF1DBC3488B62FC90E362A6',
	showInfo: function () {
		console.log('Brand:' + this.brand);
		console.log('model:' + this.model);
	},
};

console.log(phone.brand);
console.log(phone['brand']);

console.log(phone);
console.log(typeof phone);

var createProductBtn = document.getElementById('create-btn');
createProductBtn.addEventListener('click', createProductCard);

function createProductCard() {
	var productsContainer = document.querySelector('.products');
	productsContainer.innerHTML = '';

	var card = document.createElement('div');
	card.classList.add('card');
	card.innerHTML = `<h2> ${phone.brand} ${phone.model} </h2>
                     <img src=${phone.imgURL} />
                     <h3> ${phone.price} EUR </h3>`;

	productsContainer.appendChild(card);
}

phone.qt = 200;
console.log(phone);

phone.showInfo();

let cugirWeather = {
	coord: {
		lon: 23.3667,
		lat: 45.8333,
	},
	weather: [
		{
			id: 804,
			main: 'Clouds',
			description: 'overcast clouds',
			icon: '04n',
		},
	],
	base: 'stations',
	main: {
		temp: 2.85,
		feels_like: 0.15,
		temp_min: 2.85,
		temp_max: 3.05,
		pressure: 1017,
		humidity: 84,
		sea_level: 1017,
		grnd_level: 979,
	},
	visibility: 10000,
	wind: {
		speed: 2.73,
		deg: 246,
		gust: 6.08,
	},
	clouds: {
		all: 100,
	},
	dt: 1641489936,
	sys: {
		type: 1,
		id: 6920,
		country: 'RO',
		sunrise: 1641449245,
		sunset: 1641481004,
	},
	timezone: 7200,
	id: 679995,
	name: 'Cugir',
	cod: 200,
};

console.log('temperatura curenta la Cugir:', cugirWeather.main.temp);
