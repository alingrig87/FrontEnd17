function test(n) {
	if (n == 10) throw new Error('Error when executing test function');

	console.log('Test function succesfully executed');
}

try {
	console.log('before error');
	test(10);
	console.log('after error');
} catch (error) {
	console.log(
		'Please wait few more minutes, we try to solve the error: ',
		error
	);
}
