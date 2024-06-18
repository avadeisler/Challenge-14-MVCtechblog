// Signup request
const SignupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // When successful, load homepage
      document.location.replace('/'); 
    } else {
      // When unsuccessful, show alert
      alert('Failed to sign up.'); 
    }
  }
};

// Event listener
const SignupForm = document.querySelector('#signup-form');
if (SignupForm) {
  SignupForm.addEventListener('submit', SignupFormHandler);
}
