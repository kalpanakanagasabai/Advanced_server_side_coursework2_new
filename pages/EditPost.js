import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';  // Corrected the import

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Get user information from JWT
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token); // Decoding the JWT
      setUserId(decoded.id); // Set the user ID
    }

    // Fetch posts from the backend
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const editPost = (postId) => {
    // Only allow editing if the logged-in user is the owner
    const post = posts.find((p) => p.id === postId);
    if (post.userId === userId) {
      // Proceed with editing logic
    } else {
      alert('You are not authorized to edit this post');
    }
  };

  const deletePost = (postId) => {
    const post = posts.find((p) => p.id === postId);
    if (post.userId === userId) {
      // Proceed with deleting the post
    } else {
      alert('You are not authorized to delete this post');
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {post.userId === userId && (
            <div>
              <button onClick={() => editPost(post.id)}>Edit</button>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Post;
