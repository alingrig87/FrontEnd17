var arr = [1, 4, 5, 5];

function sumOfArrElems(arr) {
	var sum = 0;
	for (var i = 0; i <= arr.length - 1; i++) {
		sum = sum + arr[i];
	}
	console.log(sum);
}
