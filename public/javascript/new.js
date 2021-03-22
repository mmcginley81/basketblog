async function newFormHandler(event) {
  event.preventDefault();
  // <input type="text" name="title" class="form-input" />
  // <label class="form-label" for="post_text">Content</label>
  // <textarea name="post_text" class="form-input"></textarea>
  const title = document.querySelector('.form-input').value;
  const post_text = document.querySelector('.text-form-input').value;
  const token = localStorage.getItem("token");
  console.log(title, post_text, token)
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_text
    }),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
