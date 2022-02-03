window.onload = () => {
	let cart = localStorage.getItem('cart');
	if (cart) {
		const cartObj = JSON.parse(cart);
		let output = `
      <table>
         ${cartObj
						.map(
							(el) =>
								`
            <tr>
               <td>${el.name}</td>
               <td>${el.details}</td>
               <td>${el.price}</td>
            </tr>
            `
						)
						.join('')}
      </table>
      `;
		console.log(output);
		document.querySelector('.container').innerHTML = output;
	}
};
