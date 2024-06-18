// Logout req (public/js/logout.js)
const Logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // When successful, load homepage
      document.location.replace('/'); 
    } else {
      // When unsuccessful, show alert
      alert('Failed to log out.'); 
    }
  };
  
  const LogoutButton = document.querySelector('#logout');
  if (LogoutButton) {
    LogoutButton.addEventListener('click', Logout);
  }