async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup-value').value.trim();
    const email = document.querySelector('#email-signup-value').value.trim();
    const password = document.querySelector('#password-signup-value').value.trim();
  
    if (username && email && password) {
      console.log("line9")
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
        console.log("new user created")
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);