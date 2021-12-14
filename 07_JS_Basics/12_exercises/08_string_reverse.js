// costel => letsoc

function swapElementsFromArray(arr, i, j) {
	// console.log(arr);
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
	// console.log(arr);
}

function reverseString(str) {
	console.log(str);
	var arr = str.split('');
	var i = 0;
	var j = arr.length - 1;
	while (i < j) {
		swapElementsFromArray(arr, i, j);
		i++;
		j--;
	}
	str = arr.join('');
	console.log(str);
}

reverseString('Costel');
// i = 0, j = 5
// i = 1, j = 4
// i = 2, j = 3
// i = 3, j = 2

function reverseString2(str) {
	var tmp = '';
	for (var i = str.length - 1; i >= 0; i--) {
		tmp = tmp + str[i];
	}
	str = tmp;
	console.log(str);
}

reverseString2('Vasile');
