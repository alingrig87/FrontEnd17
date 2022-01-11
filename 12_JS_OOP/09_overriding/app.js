class Car {
	constructor(speed) {
		this.speed = speed;
	}

	run() {
		console.log('Normal mode:', this.speed);
	}
}

class TurboCar extends Car {
	constructor(speed, extraSpeed) {
		super(speed);
		this.extraSpeed = extraSpeed;
		this.turbo = false;
	}

	run() {
		if (this.turbo == true) {
			console.log('Turbo mode:', this.speed + this.extraSpeed);
		} else {
			super.run();
		}
	}

	enableTurbo() {
		this.turbo = true;
	}

	disableTurbo() {
		this.turbo = false;
	}
}

var normalCar = new Car(200);
normalCar.run();

var turboCar = new TurboCar(200, 50);
turboCar.run();
turboCar.enableTurbo();
turboCar.run();
