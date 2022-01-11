// XML
{
	/* <product>
	<name>Iphone 10</name>
	<price>200</price>
</product>; */
}

// JSON
// product: {
//    "name" : "Iphone 10",
//    "price": 200
// }

// {
// 	"price": 200,
// 	"name": 'iphone x',
// };

var phone = {
	price: 200,
	name: 'iphone x',
};

// Login
class User {
	constructor(name, password) {
		this.name = name;
		this.password = password;
	}
}

var user = new User('test', 'passwd');
console.log(user);

// serialization
var jsonUser = JSON.stringify(user);
console.log(jsonUser);

// deserialization
async function getJoke() {
	var randomJoke = await fetch('https://api.chucknorris.io/jokes/random');
	var randomJokeJSON = await randomJoke.json();
	console.log(typeof randomJokeJSON);
	// console.log(JSON.parse(randomJokeJSON));
}

getJoke();
