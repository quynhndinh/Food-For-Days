const loginFormHandler = async function(event) {
  event.preventDefault();
  // console.log("loginFormHandler");

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    sessionStorage.setItem('loggedIn', true);
    let loggedIn = sessionStorage.getItem("loggedIn");
    // test = loggedIn;
    document.location.replace('/');
  } else {
    displayMessage('Failed to login');
  }

  if (sessionStorage.getItem('loggedIn')) {
    document.getElementById('#login').classList.add('hide');
    document.getElementById('#signup').classList.add('hide');
    document.getElementById('#logout').classList.remove('hide');
  }
};

<<<<<<< HEAD
=======
// console.log ("logged in", test);
>>>>>>> 29b7d0f2b58535db170d8590604b8604fa7c1634

document
  .querySelector('#submit')
  .addEventListener('click', loginFormHandler);


