// *******
// *******
// *******
// *******
// *******

function printRectangleStars(cols, rows) {
	var output = '';
	for (var i = 1; i <= cols; i++) {
		output = output + '*';
	}

	for (var i = 1; i <= rows; i++) {
		console.log(output);
	}
}

// printRectangleStars(12, 4);

// *******
// *     *
// *     *
// *     *
// *******

function printEmptyRectangleStars(cols, rows) {
	// ********
	var outputFullLine = '';
	for (var i = 1; i <= cols; i++) {
		outputFullLine = outputFullLine + '* ';
	}

	// *       *
	var outputLineMargins = '';
	for (var j = 1; j <= cols; j++) {
		if (j == 1 || j == cols) {
			outputLineMargins = outputLineMargins + '* ';
		} else {
			outputLineMargins = outputLineMargins + '  ';
		}
	}

	// *******
	// *     *
	// *     *
	// *     *
	// *******

	for (var k = 1; k <= rows; k++) {
		if (k == 1 || k == rows) {
			console.log(outputFullLine);
		} else {
			console.log(outputLineMargins);
		}
	}
}

// printEmptyRectangleStars(5, 5);

function printEmptyRectangleStars2(cols, rows) {
	var output = '';
	var i, j;
	for (i = 1; i <= cols; i++) {
		for (j = 1; j <= rows; j++) {
			if (i == 1 || i == cols || j == 1 || j == rows) {
				output = output + '* ';
			} else {
				output = output + '  ';
			}
		}
		output = output + '\n';
	}

	console.log(output);
}

printEmptyRectangleStars2(12, 5);
