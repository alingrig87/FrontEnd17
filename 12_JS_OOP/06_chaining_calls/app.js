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
}

var remoteControl = new RemoteControl('PRO TV', 30);
console.log(remoteControl);

remoteControl.changeChannel('Kanal D');
remoteControl.changeVolume(100);
console.log(remoteControl);

remoteControl.changeChannel('Antena 1').changeVolume(45);
console.log(remoteControl);

remoteControl.changeVolume(55).changeChannel('Digi Sport 1');
console.log(remoteControl);
