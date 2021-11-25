function calculTaxaPoluare() {
	var clasaDePoluare = Number(
		document.getElementById('norma-de-poluare').value
	);
	var output = document.getElementById('output');
	var taxaDePoluare = 0;

	if (isNaN(clasaDePoluare)) {
		output.innerHTML = 'Introduceti un numar valid';
		output.style.color = 'red';
	} else if (clasaDePoluare < 0 || clasaDePoluare > 6) {
		output.innerHTML = 'Introduceti un numar intre 0 si 6';
		output.style.color = 'red';
	} else {
		output.innerHTML = '';

		switch (clasaDePoluare) {
			case 0:
				taxaDePoluare = 900;
				break;
			case 1:
				taxaDePoluare = 700;
				break;
			case 2:
			case 3:
				taxaDePoluare = 500;
				break;
			case 4:
				taxaDePoluare = 300;
				break;
			default:
				taxaDePoluare = 100;
				break;
		}

		output.innerHTML = 'Aveti de platit ' + taxaDePoluare + ' lei';
		output.style.color = 'green';
	}
}
