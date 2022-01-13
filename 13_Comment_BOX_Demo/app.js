var addCommentBtn = document.getElementById('add-comment');

addCommentBtn.addEventListener('click', addComment);

function clearFields() {
	document.getElementById('name').value = '';
	document.getElementById('image').value = '';
	document.getElementById('message').value = '';
}

function addComment(e) {
	e.preventDefault();
	console.log('test');
	var name = document.getElementById('name').value;
	var imgURL = document.getElementById('image').value;
	var message = document.getElementById('message').value;

	var commentsContainer = document.querySelector('.comments-container');

	var newCommentDiv = createCommentDiv(name, imgURL, message);
	if (newCommentDiv) {
		console.log(newCommentDiv);

		commentsContainer.innerHTML += newCommentDiv;
	}
	clearFields();
}

function createCommentDiv(name, imgURL, message) {
	if (isFiledEmpty(name) || isFiledEmpty(imgURL) || isFiledEmpty(message)) {
		setTimeout(function () {
			console.log('Please complete all fields'), 3000;
		});
		return;
	}
	var commentContainer = `<div class="comment">
         <div class="user-info">
            <div class="user-img">
               <img src=${imgURL}>
            </div>
            <div class="user-name">
               <p>${name}</p>
            </div>
         </div>

         <div class="comment-text">
            <p>${message}</p>
         </div>

         <div class="comment-delete">
            <p class="delete-btn">X</p>
         </div>
      </div>`;
	return commentContainer;
}

var commentsContainer = document.querySelector('.comments-container');
commentsContainer.addEventListener('click', deleteComment);

function deleteComment(event) {
	var deleteBtn = event.target;
	if (deleteBtn.classList.contains('delete-btn')) {
		deleteBtn.parentNode.parentNode.remove();
	}
}

function isFiledEmpty(field) {
	if (field.length == 0) {
		return true;
	}
}
