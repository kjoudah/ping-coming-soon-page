let email = document.getElementById('email');
let errorMsg = document.getElementById('error-message');
const notifyMeButton = document.getElementById('notify-me-button');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function invalidEmail(text) {
  return !emailRegex.test(text);
}

notifyMeButton.addEventListener('click', () => {
  let inputText = email.value;
  if (!inputText) {
    const error = 'Whoops! It looks like you forgot to add your email';
    errorMsg.innerHTML = error;
    errorMsg.classList.add('visible');
  } else if (invalidEmail(inputText)) {
    const error = 'Please provide a valid email address';
    errorMsg.innerHTML = error;
    errorMsg.classList.add('visible');
  } else {
    errorMsg.classList.remove('visible');
  }
});
