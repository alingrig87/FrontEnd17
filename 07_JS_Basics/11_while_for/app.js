function printNumberFrom1to10() {
	// console.log(1);
	// console.log(2);
	// console.log(3);
	// console.log(4);
	// console.log(5);
	// console.log(6);
	// console.log(7);
	// console.log(8);
	// console.log(9);
	// console.log(10);

	var i = 1;
	var output = document.getElementById('output1');
	while (i <= 10) {
		output.innerHTML = output.innerHTML + i + ' ';
		i = i + 1;
	}
}

function printNumberFrom1ton() {
	var i = 1;
	var n = Number(document.getElementById('ex2').value);
	var output = document.getElementById('output2');
	output.innerHTML = '';
	while (i <= n) {
		output.innerHTML = output.innerHTML + i + ' ';
		i = i + 1;
	}
	document.getElementById('ex1').value = '';
}

function factorial() {
	var produs = 1;
	var n = Number(document.getElementById('ex3').value);
	// 1 * 2 * 3 * .... * n

	// var i = 1;
	// while (i <= n) {
	// 	produs = produs * i;
	// 	i++;
	// }
	for (var i = 1; i <= n; i++) {
		produs = produs * i;
	}

	document.getElementById('output3').innerHTML = n + '!' + ' = ' + produs;
}

function showArrayElems() {
	var arr = [2, 3, 4, 121, 4, 8, 9];
	// console.log(arr[0]);
	// console.log(arr[1]);
	// console.log(arr[2]);
	// console.log(arr[3]);
	// console.log(arr[4]);
	// console.log(arr[5]);
	// console.log(arr[6]);
	var output4 = document.getElementById('output4');
	for (var i = 0; i <= arr.length - 1; i++) {
		console.log(arr[i]);
		output4.innerHTML = output4.innerHTML + arr[i] + '<br>';
	}
}
