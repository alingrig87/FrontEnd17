class RemoteControl {
	constructor(channel, volume) {
		this.channel = channel;
		this.volume = volume;
	}

	changeChannel(newChannel) {
		this.channel = newChannel;
		return this;
	}

	changeVolume(newVolume) {
		this.volume = newVolume;
		return this;
	}

	static showClassInfo() {
		console.log('Remote Control');
	}
}

var remoteControl = new RemoteControl('PRO TV', 30);

RemoteControl.showClassInfo();

//examples
var randomNumber = Math.random();
console.log(randomNumber);
