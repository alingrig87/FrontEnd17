var arr = [1, 4, 5, 9, 19];

function swapTwoArrElems(position1, position2) {
	if (position1 < 0 || position1 > arr.length - 1) {
		console.log('Position 1 is invalid');
		return;
	}

	if (position2 < 0 || position2 > arr.length - 1) {
		console.log('Position 2 is invalid');
		return;
	}

	if (position1 == position2) {
		console.log('Please use different positions');
		return;
	}

	var tmp;
	tmp = arr[position1];
	arr[position1] = arr[position2];
	arr[position2] = tmp;
}

console.log('before ', arr);
swapTwoArrElems(2, 4);
console.log('after ', arr);
