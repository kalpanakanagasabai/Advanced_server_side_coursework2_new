import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css'; // Add this line for external styling

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [countryName, setCountryName] = useState('');
  const [dateOfVisit, setDateOfVisit] = useState('');
  const [message, setMessage] = useState('');
  const [errorDetails, setErrorDetails] = useState(''); // To capture detailed error

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/posts/create', {
        user_id: 1,
        title,
        content,
        country_name: countryName,
        date_of_visit: dateOfVisit,
      });

      setMessage(res.data.message);
      setTitle('');
      setContent('');
      setCountryName('');
      setDateOfVisit('');
      setErrorDetails(''); // Clear error details after a successful post

    } catch (err) {
      // Handle network errors
      if (!err.response) {
        setMessage('Network Error: Could not reach the server.');
        setErrorDetails('No response received from server.');
        console.error('Network error:', err);
      } else {
        // Handle API error responses
        const { status, data } = err.response;
        setMessage(`Error ${status}: ${data.error || err.message}`);
        setErrorDetails(`Error details: ${JSON.stringify(data)}\nStatus Code: ${status}`);
        console.error('API error:', err.response);
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
