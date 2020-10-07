let commentField = document.querySelector('.textarea');
let submitButton = document.querySelector('.submit-button');

commentField.oninput = function () {

  if (commentField.value.length > 200) {
    commentField.classList.add('warning');
    submitButton.disabled = true;
  } else if (commentField.value.length < 10) {
    commentField.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentField.classList.remove('warning');
    submitButton.disabled = false;
  }

};
