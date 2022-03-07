function reverse(str) {
	var i = 0;
	var j = str.length - 1;

	var strArr = str.split('');

	while (i < j) {
		var tmp = strArr[i];
		strArr[i] = strArr[j];
		strArr[j] = tmp;

		i++;
		j--;
	}

	return strArr.join('');
}

console.log(reverse('Ana are mere'));
