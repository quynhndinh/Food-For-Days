const loginFormHandler = async function(event) {
  event.preventDefault();

// change usernames to email and make sure userId match **Camelcase

  const emailEL = document.querySelector('#email-login');
  const passwordEl = document.querySelector('#password-login');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      email: emailEL.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#email')
  .addEventListener('#submit', loginFormHandler);
