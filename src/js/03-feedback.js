import throttle from 'lodash.throttle';

const getForm = document.querySelector('.feedback-form');
// console.log(getForm.email);
// console.log(getForm.message);
const getInput = document.querySelector('input');
getInput.addEventListener(
  'click',
  getEmail
  //   _.throttle(() => {}),
  //   500
);

function getEmail(event) {
  const userInfo = {
    email: getForm.email.value,
    massege: getForm.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));

  //   form.reset();
}

// console.log(getInput);
