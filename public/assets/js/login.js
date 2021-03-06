const loginFormHandler = async function(event) {
	event.preventDefault();

	const email = document.querySelector('#email-login').value.trim();
	const password = document.querySelector('#password-login').value.trim();

	const response = await fetch('/api/user/login', {
		method: 'POST',
		body: JSON.stringify({ email, password }),
		headers: { 'Content-Type': 'application/json' }
	});

	if (response.ok) {
		sessionStorage.setItem('loggedIn', true);
		let loggedIn = sessionStorage.getItem('loggedIn');
		document.location.replace('/');		
		// document.querySelector('#login').classList.add('is-hidden');
		// document.getElementById('signup').classList.add('is-hidden');
		// document.getElementById('logout').classList.remove('is-hidden');

	} else {
		displayMessage('Failed to login');
	}
}

document.querySelector('#submit').addEventListener('click', loginFormHandler);
