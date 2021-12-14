function printEmptyRectangleStars(cols, rows) {
	// ********
	var outputFullLine = '';
	for (var i = 1; i <= cols; i++) {
		outputFullLine = outputFullLine + '<div class="circle red"></div>';
	}
	outputFullLine = "<div class='line'>" + outputFullLine + '</div>';

	// *       *
	var outputLineMargins = '';
	for (var j = 1; j <= cols; j++) {
		if (j == 1 || j == cols) {
			outputLineMargins = outputLineMargins + '<div class="circle red"></div>';
		} else {
			outputLineMargins =
				outputLineMargins + '<div class="circle transparent"></div>';
		}
		outputLineMargins = "<div class='line'>" + outputLineMargins + '</div>';
	}

	// *******
	// *     *
	// *     *
	// *     *
	// *******

	for (var k = 1; k <= rows; k++) {
		if (k == 1 || k == rows) {
			document.getElementById('container').innerHTML += outputFullLine;
		} else {
			document.getElementById('container').innerHTML += outputLineMargins;
		}
	}
}

printEmptyRectangleStars(5, 5);
