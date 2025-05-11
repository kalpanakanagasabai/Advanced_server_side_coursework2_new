const express = require('express');
const router = express.Router();
const db = require('../dbBlog'); 

// Create a blog post
router.post('/create', (req, res) => {
  const { user_id, title, content, country_name, date_of_visit } = req.body;

  if (!user_id || !title || !content || !country_name || !date_of_visit) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = `INSERT INTO posts (user_id, title, content, country_name, date_of_visit)
               VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [user_id, title, content, country_name, date_of_visit], (err, result) => {
    if (err) {
      console.error('Insert Error:', err);
      return res.status(500).json({ error: 'Database insert failed' });
    }
    res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
  });
});

// // Edit a blog post
router.put('/:id', authenticateUser, async (req, res) => {
  const postId = req.params.id;
  const { title, content, country_name, date_of_visit } = req.body;
  const userId = req.user.id;

  try {
    // Check if the post exists and if the user is authorized to edit it
    const [rows] = await db.query('SELECT * FROM posts WHERE id = ? AND user_id = ?', [postId, userId]);

    if (rows.length === 0) {
      return res.status(403).json({ error: 'Unauthorized to edit this post' });
    }

    // Update the post
    await db.query(
      'UPDATE posts SET title = ?, content = ?, country_name = ?, date_of_visit = ? WHERE id = ?',
      [title, content, country_name, date_of_visit, postId]
    );

    res.json({ message: 'Post updated successfully' });
  } catch (err) {
    console.error('Update Error:', err);
    res.status(500).json({ error: 'Database update failed' });
  }
});

// Authentication Middleware
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token.' });
    }
    req.user = decoded;  
    next();
  });
};

// Update a post
router.put('/posts/:id', authenticate, (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id; // Get userId from the decoded token

  // Query the database to fetch the post by ID
  connection.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error.' });
    }

    const post = results[0]; 
    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    // Check if the logged-in user is the owner of the post
    if (post.userId !== userId) {
      return res.status(403).json({ message: 'Unauthorized to edit this post.' });
    }

    // Proceed to update the post
    const { title, content } = req.body;
    connection.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, postId], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to update post.' });
      }
      res.status(200).json({ message: 'Post updated successfully.' });
    });
  });
});

// Delete a post
router.delete('/posts/:id', authenticate, (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;

  // Query the database to fetch the post by ID
  connection.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error.' });
    }

    const post = results[0];
    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    // Check if the logged-in user is the owner of the post
    if (post.userId !== userId) {
      return res.status(403).json({ message: 'Unauthorized to delete this post.' });
    }

    // Proceed to delete the post
    connection.query('DELETE FROM posts WHERE id = ?', [postId], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to delete post.' });
      }
      res.status(200).json({ message: 'Post deleted successfully.' });
    });
  });
});


module.exports = router;
