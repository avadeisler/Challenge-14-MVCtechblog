// New post public/js/new-post.js
const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-post').value.trim();
  const content = document.querySelector('#content-new-post').value.trim();

  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // When successful, load dashboard page
      document.location.replace('/dashboard'); 
    } else {
      // When unsuccessful, show alert
      alert('Failed to create a new post.'); 
    }
  }
};

// Event listeners
const newPostForm = document.querySelector('.new-post-form');
if (newPostForm) {
  newPostForm.addEventListener('submit', newPostFormHandler);
}
