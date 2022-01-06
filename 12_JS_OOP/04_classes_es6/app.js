class Phone {
	constructor(brand, model, price, imgURL) {
		this.brand = brand;
		this.model = model;
		this.price = price;
		this.imgURL = imgURL;
	}

	showInfo() {
		console.log('Brand:' + this.brand);
		console.log('model:' + this.model);
	}
}

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
	'https://s13emagst.akamaized.net/products/40685/40684425/images/res_b2965868335e50e5726c369f5b159ce3.jpg?width=300&height=300&hash=59DA50C45CF1DBC3488B62FC90E362A6'
);

console.log(iphone, samsung);

console.log(Phone.prototype);
console.log(iphone.showInfo());
Phone.prototype.showText = function () {
	console.log("I'm an iphone");
};
console.log(iphone.__proto__);

class ContactFormInfo {
	constructor(firstName, lastName, gender, message) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.message = message;
		this.allFormElementsAreValid = true;
	}

	validateFirstName() {
		if (this.firstName == null) this.setErrorBorder(this.firstNameInput);
	}

	validLastName() {}

	validateGender() {}

	validateMessage() {}

	setErrorBorder() {}

	setSuccessBorder() {}

	showInformationBanner() {
		console.log('Thank you for contacting us,', this.firstName);
	}
}

var submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', validateForm);

function validateForm() {
	var firstName = document.getElementById('first-name').value;
	var lastName = document.getElementById('first-name').value;
	var gender = document.getElementById('first-name');
	var message = document.getElementById('first-name').value;

	var contactFormInfo = new ContactFormInfo(
		firstName,
		lastName,
		gender,
		message
	);

	contactFormInfo.validLastName();
	contactFormInfo.validLastName();
	contactFormInfo.validateGender();
	contactFormInfo.validateMessage();

	if (contactFormInfo.allFormElementsAreValid == true) {
		contactFormInfo.showInformationBanner(this.firstName);
	}
}
