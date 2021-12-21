const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    sessionStorage.setItem("loggedIn", false);
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }

  if (!sessionStorage.getItem('loggedIn')) {
    document.getElementById('#login').classList.remove('hide');
    document.getElementById('#signup').classList.remove('hide');
    document.getElementById('#logout').classList.add('hide');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
