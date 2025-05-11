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

const express = require('express');
const router = express.Router();
const db = require('../dbBlog'); // Import blogDB from combined db.js

const postsController = require('../controllers/postsController');

router.get('/user/:userId', postsController.getPostsByUserId);

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


module.exports = router;
