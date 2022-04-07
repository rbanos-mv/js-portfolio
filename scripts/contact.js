const form = document.querySelector('.contact-form');
const formName = document.querySelector('#contact-name');
const formEmail = document.querySelector('#contact-mail');
const formMessage = document.querySelector('#contact-message');
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

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

const fillForm = () => {
  const record = JSON.parse(localStorage.getItem('formValues')) || {
    name: '',
    email: '',
    message: '',
  };
  formName.value = record.name;
  formEmail.value = record.email;
  formMessage.value = record.message;
};

const saveForm = () => {
  const record = {
    name: formName.value,
    email: formEmail.value,
    message: formMessage.value,
  };

  localStorage.setItem('formValues', JSON.stringify(record));
};

if (storageAvailable('localStorage')) {
  fillForm();
  formName.oninput = saveForm;
  formEmail.oninput = saveForm;
  formMessage.oninput = saveForm;
}
