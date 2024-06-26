// Get post ID from endpoint
const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

// Update post
const updatePostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-update-post").value.trim();
  const content = document
    .querySelector("#content-update-post")
    .value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // When successful, load the dashboard page
      document.location.replace("/dashboard"); 
    } else {
      // When unsuccessful, show alert
      alert("Failed to update a post."); 
    }
  }
};

// Delete post
const deletePostFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    // When successful, load the dashboard page
    document.location.replace("/dashboard"); 
  } else {
    // When unsuccessful, show alert
    alert("Failed to delete a post."); 
  }
};

// Event listeners
const updatePostButton = document.querySelector("#update-post");

if (updatePostButton) {
  updatePostButton.addEventListener("click", updatePostFormHandler);
}

const deletePostButton = document.querySelector("#delete-post");

if (deletePostButton) {
  deletePostButton.addEventListener("click", deletePostFormHandler);
}