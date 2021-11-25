var note = [9, 9, 8, 7];

function mediaGenerala(arr) {
	var avg;
	var sum = 0;
	for (var i = 0; i <= arr.length - 1; i++) {
		sum = sum + arr[i];
	}
	avg = sum / arr.length;
	console.log(avg);
}

mediaGenerala(note);
