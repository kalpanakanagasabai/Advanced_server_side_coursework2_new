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
