const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    sessionStorage.setItem("loggedIn", false);
    document.getElementById('login').classList.remove('is-hidden');
    document.getElementById('signup').classList.remove('is-hidden');
    document.getElementById('logout').classList.add('is-hidden');
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }


  }
};

document.querySelector('#logout').addEventListener('click', logout);
