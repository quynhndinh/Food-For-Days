// modal
const loginButton = document.querySelector('#login');
const signupButton = document.querySelector('#signup');
const modalBG = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

loginButton.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBG.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

signupButton.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBG.addEventListener('click', () => {
  modal.classList.remove('is-active');
});