// import { useState, useEffect } from 'react';
// import { jwtDecode } from 'jwt-decode';  // Corrected the import

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     // Get user information from JWT
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decoded = jwtDecode(token); // Decoding the JWT
//       setUserId(decoded.id); // Set the user ID
//     }

//     // Fetch posts from the backend
//     fetch('/api/posts')
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//       .catch((error) => console.error('Error fetching posts:', error));
//   }, []);

//   const editPost = (postId) => {
//     // Only allow editing if the logged-in user is the owner
//     const post = posts.find((p) => p.id === postId);
//     if (post.userId === userId) {
//       // Proceed with editing logic
//     } else {
//       alert('You are not authorized to edit this post');
//     }
//   };

//   const deletePost = (postId) => {
//     const post = posts.find((p) => p.id === postId);
//     if (post.userId === userId) {
//       // Proceed with deleting the post
//     } else {
//       alert('You are not authorized to delete this post');
//     }
//   };

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>
//           {post.userId === userId && (
//             <div>
//               <button onClick={() => editPost(post.id)}>Edit</button>
//               <button onClick={() => deletePost(post.id)}>Delete</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Post;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({ title: '', content: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/posts/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPost(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch the post.');
      }
    };
    fetchPost();
  }, [postId]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/posts/${postId}`, post, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Post updated successfully.');
      navigate('/profile'); // Or wherever you want to go after editing
    } catch (err) {
      console.error(err);
      setError('Failed to update post.');
    }
  };

  return (
    <div>
      <h1>Edit Post</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <br />
      <textarea
        name="content"
        value={post.content}
        onChange={handleChange}
        placeholder="Content"
      />
      <br />
      <button onClick={handleUpdate}>Update Post</button>
    </div>
  );
};

export default EditPostPage;
