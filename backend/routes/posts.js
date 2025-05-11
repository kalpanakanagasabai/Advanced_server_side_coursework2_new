const db = require('../dbBlog'); 
const express = require('express');
const router = express.Router();
const authenticateToken = require('../auth');// Import blogDB from combined db.js

// const postsController = require('../controllers/postController');

// router.get('/user/:userId', postsController.getPostsByUserId);

// Create a blog post
router.post('/create', (req, res) => {
  const { user_id, title, content, country_name, date_of_visit } = req.body;

  // Validate inputs
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


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, country_name, date_of_visit } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE posts SET title = ?, content = ?, country_name = ?, date_of_visit = ? WHERE id = ?',
      [title, content, country_name, date_of_visit, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    return res.status(200).json({ message: 'Post updated successfully.' }); 
  } catch (error) {
    console.error('Error updating post:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});


// DELETE route to delete a post by ID
router.delete('/:id', (req, res) => {
  const postId = req.params.id;

 
  const query = 'DELETE FROM posts WHERE id = ?';

  db.query(query, [postId], (err, result) => {
    if (err) {
      console.error('Error deleting post:', err);
      return res.status(500).json({ message: 'Error deleting post' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  });
});

module.exports = router;
