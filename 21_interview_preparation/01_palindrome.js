function isPalindrome(str) {
	var i = 0;
	var j = str.length - 1;

	while (i < j) {
		if (str[i] != str[j]) {
			return false;
		}

		console.log(str[i], str[j]);

		i++;
		j--;
	}

	return true;
}

function isPalindrome2(str) {
	return str.split('').reverse().join('') == str;
}

const isPalindrome3 = (test) => {
	const array = test.split('');
	return array === array.reverse();
};

console.log(isPalindrome3('SAIPPUAKIWIKAUPPIAS'));
