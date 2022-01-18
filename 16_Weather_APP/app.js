var URL_CURRENT_WEATHER =
	'https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=';

document.querySelector('#show').addEventListener('click', showWeather);

function showWeather() {
	var city = document.getElementById('city').value;
	var url = URL_CURRENT_WEATHER + city;

	fetch(url)
		.then((result) => result.json())
		.then((data) => {
			var output = `<div class="city-weather">
            <h2>${data.name}</h2>
            <p>Temp: ${Math.round(data.main.temp)}°C</p>
            <p>${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/w/${
							data.weather[0].icon
						}.png">
         </div>`;
			document.querySelector('.weather').innerHTML = output;
		});
}
