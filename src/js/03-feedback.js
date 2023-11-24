import throttle from 'lodash.throttle';

const getForm = document.querySelector('.feedback-form');
const getInput = document.querySelector('input');
const getMessage = document.querySelector('textarea');

getForm.addEventListener(
  'click',
  getEmail,
  throttle(() => {}),
  500
);

function getEmail(event) {
  const getUserEmail = {
    email: getForm.email.value,
    message: getForm.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(getUserEmail));

  const getKeyLocal = localStorage.getItem('feedback-form-state');
  const getElementLocalKey = JSON.parse(getKeyLocal);
  console.log(typeof getKeyLocal);

  if (getKeyLocal !== '') {
    return (
      (getInput.textContent = getElementLocalKey.email) &&
      (getMessage.textContent = getElementLocalKey.message)
    );
  } else {
    (getInput.textContent = '') && (getMessage.textContent = '');
  }

  //   console.log(getElementLocalKey);
}
getForm.reset();
