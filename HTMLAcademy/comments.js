let commentForm = document.querySelector('.comment_form');
let commentList = document.querySelector('.comments');
let commentField = document.querySelector('.textarea');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
};