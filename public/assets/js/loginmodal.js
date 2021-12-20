// modal
const loginButton = document.querySelector('#login');
const signupButton = document.querySelector('#signup');
const modalBG = document.querySelector('.modal-background');
const loginModal = document.querySelector('#login-modal');
const signUpModel = document.querySelector('#signup-modal')

loginButton.addEventListener('click', () => {
  loginModal.classList.add('is-active');
});

signupButton.addEventListener('click', () => {
  signUpModel.classList.add('is-active');
});

// modalBG.addEventListener('click', () => {
//   modal.classList.remove('is-active');
// });

// modalBG.addEventListener('click', () => {
//   modal.classList.remove('is-active');
// });

$('.modal-background').on('click', ()=>{
  $('.modal').removeClass('is-active')
})