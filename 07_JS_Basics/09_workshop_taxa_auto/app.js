function calculImpozit() {
	var capacitateCilindrica = Number(
		document.getElementById('capacitate-cilindrica').value
	);
	console.log(capacitateCilindrica);
	var output = document.getElementById('output');

	var impozit = 0;

	if (
		isNaN(capacitateCilindrica) ||
		capacitateCilindrica < 800 ||
		capacitateCilindrica > 10000
	) {
		output.innerHTML = 'Introduceti o valoare intre 800 si 10.000';
	} else {
		if (capacitateCilindrica <= 1000) {
			impozit = 40;
		} else if (capacitateCilindrica > 1000 && capacitateCilindrica <= 1200) {
			impozit = 48;
		} else if (capacitateCilindrica > 1200 && capacitateCilindrica <= 1400) {
			impozit = 56;
		} else {
			impozit = 200;
		}

		output.innerHTML = 'Aveti de platit ' + impozit + ' lei';
	}
}
