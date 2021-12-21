const session = require("express-session");

const loginFormHandler = async function(event) {
  event.preventDefault();
  console.log("loginFormHandler");

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    sessionStorage.setItem('loggedIn', 'true');
    document.location.replace('/');
    sessionStorage.setItem("loggedIn", "true");
    let loggedIn = sessionStorage.getItem("loggedIn");
    console.log ("LoggedIn = ", loggedIn);
  } else {
    alert('Failed to login');
  }

  if (response.ok) {
    document.getElementById('#logout').classList.add('hide')
  }

  if (response.ok) {
    document.getElementById('#signup').classList.add('hide')
  }
};

document
  .querySelector('#submit')
  .addEventListener('click', loginFormHandler);

