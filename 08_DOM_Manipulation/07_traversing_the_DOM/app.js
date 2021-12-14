var deleteBtn5 = document.querySelector(
	'#main > div.card-action > ul > li:nth-child(5) > a > i'
);

deleteBtn5.addEventListener('click', deleteTask5);

function deleteTask5() {
	// console.log(event.target);
	var elemenToBeDeleted = deleteBtn5.parentNode.parentNode;
	console.log(elemenToBeDeleted);
	elemenToBeDeleted.remove();
}
