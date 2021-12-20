const signupFormHandler = async function(event) {
  event.preventDefault();
  console.log("SignupFormHandler");

  const email = document.querySelector('#email-signup').value.trim();;
  const password = document.querySelector('#password-signup').value.trim();;

  if (email && password) {
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to sign up');
  }
}};

document
  .querySelector('#submitx')
  .addEventListener('click', signupFormHandler);
