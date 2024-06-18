const deletPost = async (post_id) => {
  const response =await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    //reload
      document.location.reload(); 
  } else {
    // if fails alerts
      alert("Failed to delete the post.");
  }
};

const deletePostHandler = (event) => {
  if (event.target.matches(".delete-post")) {
      const post_id = event.target.getAttribute("data-post-id");
      deletePostHandler(post_id);
  }
};

document.addEventListener("click", deletePostHandler);