// const express = require('express');
// const router = express.Router();
// const db = require('../dbBlog'); // connects to blog_db

// // Create a blog post
// router.post('/create', (req, res) => {
//   const { user_id, title, content, country_name, date_of_visit } = req.body;

//   if (!user_id || !title || !content || !country_name || !date_of_visit) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   const sql = `INSERT INTO posts (user_id, title, content, country_name, date_of_visit)
//                VALUES (?, ?, ?, ?, ?)`;
  
//   db.query(sql, [user_id, title, content, country_name, date_of_visit], (err, result) => {
//     if (err) {
//       console.error('Insert Error:', err);
//       return res.status(500).json({ error: 'Database insert failed' });
//     }
//     res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
//   });
// });

// // POST /posts/create
// router.post('/create', async (req, res) => {
//     const { user_id, title, content, country_name, date_of_visit } = req.body;
  
//     try {
//       const [result] = await db.query(
//         'INSERT INTO posts (user_id, title, content, country_name, date_of_visit) VALUES (?, ?, ?, ?, ?)',
//         [user_id, title, content, country_name, date_of_visit]
//       );
  
//       const [newPost] = await db.query('SELECT * FROM posts WHERE id = ?', [result.insertId]);
//       res.json({ message: 'Post created', post: newPost[0] });
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to create post' });
//     }
//   });
  
  

// module.exports = router;

// const express = require('express');
// const router = express.Router();
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




// // Update a post
// router.put('/:id', authenticateToken, (req, res) => {
//   const postId = req.params.id;
//   const { title, content } = req.body;
//   const userId = req.user.id;

//   blogdb.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
//     if (err) return res.status(500).json({ error: 'DB error' });
//     if (results.length === 0) return res.status(404).json({ error: 'Post not found' });

//     const post = results[0];
//     if (post.user_id !== userId) {
//       return res.status(403).json({ error: 'Unauthorized' });
//     }

//     blogdb.query(
//       'UPDATE posts SET title = ?, content = ? WHERE id = ?',
//       [title, content, postId],
//       (err2) => {
//         if (err2) return res.status(500).json({ error: 'Update failed' });
//         res.json({ message: 'Post updated successfully' });
//       }
//     );
//   });
// });


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

    return res.status(200).json({ message: 'Post updated successfully.' }); // ✅ IMPORTANT
  } catch (error) {
    console.error('Error updating post:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});
// // Delete a post
// router.delete('/:id', authenticateToken, (req, res) => {
//   const postId = req.params.id;
//   const userId = req.user.id;

//   blogdb.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
//     if (err) return res.status(500).json({ error: 'DB error' });
//     if (results.length === 0) return res.status(404).json({ error: 'Post not found' });

//     const post = results[0];
//     if (post.user_id !== userId) {
//       return res.status(403).json({ error: 'Unauthorized' });
//     }

//     blogdb.query('DELETE FROM posts WHERE id = ?', [postId], (err2) => {
//       if (err2) return res.status(500).json({ error: 'Delete failed' });
//       res.json({ message: 'Post deleted successfully' });
//     });
//   });
// });



// router.delete('/posts/:id', authenticateToken, async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleted = await Post.destroy({ where: { id, user_id: req.user.id } });
//     if (!deleted) return res.status(404).json({ error: 'Post not found or not authorized.' });
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// DELETE route to delete a post by ID
router.delete('/:id', (req, res) => {
  const postId = req.params.id;

  // SQL query to delete the post by ID
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
