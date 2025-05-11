import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [countryName, setCountryName] = useState('');
  const [dateOfVisit, setDateOfVisit] = useState('');
  const [message, setMessage] = useState('');
  const [errorDetails, setErrorDetails] = useState('');

  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/posts/create',
        {
          user_id: userId,
          title,
          content,
          country_name: countryName,
          date_of_visit: dateOfVisit,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.message);
      setTitle('');
      setContent('');
      setCountryName('');
      setDateOfVisit('');
      setErrorDetails('');
    } catch (err) {
      if (!err.response) {
        setMessage('Network Error: Could not reach the server.');
        setErrorDetails('No response received from server.');
      } else {
        const { status, data } = err.response;
        setMessage(`Error ${status}: ${data.error || err.message}`);
        setErrorDetails(`Error details: ${JSON.stringify(data)}\nStatus Code: ${status}`);
      }
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create a New Blog Post</h2>

      {message && <p className="message">{message}</p>}
      {errorDetails && (
        <div className="error-details">
          <h4>Error Details:</h4>
          <pre>{errorDetails}</pre>
        </div>
      )}

      <form onSubmit={handleSubmit} className="create-post-form">
        <label>Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <label>Country Visited:</label>
        <input
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          required
        />

        <label>Date of Visit:</label>
        <input
          type="date"
          value={dateOfVisit}
          onChange={(e) => setDateOfVisit(e.target.value)}
          required
        />

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;



