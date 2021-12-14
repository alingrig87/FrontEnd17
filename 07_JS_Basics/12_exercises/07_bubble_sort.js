// - before [ 3, 8, 1, 2, 4]
// - after [ 2, 8, 1, 3, 4]
// i = 0, j = 3
// tmp = 3
//

function swapElementsFromArray(arr, i, j) {
	// console.log(arr);
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
	// console.log(arr);
}

// swapElementsFromArray([3, 8, 1, 2, 4], 0, 3);

function bubbleSort(arr) {
	console.log(arr);
	for (var i = 0; i <= arr.length - 1; i++) {
		for (var j = 0; j <= arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swapElementsFromArray(arr, j, j + 1);
			}
		}
		console.log(arr);
	}

	console.log(arr);
}

var arr = [9, 8, 1, 6, 3];
bubbleSort(arr);
