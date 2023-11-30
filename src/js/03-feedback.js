import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function chekInputValue(key) {
  //перевірка на наявність даних
  const savedData = localStorage.getItem(key);
  const parsedData = JSON.parse(savedData);
  if (parsedData === null) {
    return;
  }
  form[0].value = parsedData.email;
  form[1].value = parsedData.message;
}
chekInputValue(localStorageKey);

//додаємо подію на поле ввода
form.addEventListener('input', throttle(onInputListener, 500));
function onInputListener(evt) {
  const enteredData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(enteredData));
  const savedSettings = localStorage.getItem(localStorageKey);
  const parsedSettings = JSON.parse(savedSettings);
}

//додаємо подію на кнопку
form.addEventListener('submit', onSubmitListener);
function onSubmitListener(evt) {
  const a = JSON.parse(localStorage.getItem(localStorageKey));
  console.log(a);
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
}
