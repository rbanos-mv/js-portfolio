const form = document.querySelector('.contact-form');
const formEmail = document.querySelector('#contact-mail');
const errorDiv = document.querySelector('.error-div');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  if (formEmail.value.match(/^[a-z.0-9-_]+@[a-z.0-9-_]+$/)) {
    errorDiv.classList.add('hidden');
    errorMessage.textContent = '';
    formEmail.style.border = 'none';
  } else {
    event.preventDefault();
    errorDiv.classList.remove('hidden');
    errorMessage.textContent = 'Email should be in lower case';
    formEmail.style.border = '3px solid #f47174';
  }
});
