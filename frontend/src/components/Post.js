// // // const express = require('express');
// // // const router = express.Router();
// // // const db = require('../db');

// // // // CREATE POST
// // // router.post('/create', (req, res) => {
// // //   const { user_id, title, content, country_name, date_of_visit } = req.body;
// // //   const sql = `INSERT INTO posts (user_id, title, content, country_name, date_of_visit)
// // //                VALUES (?, ?, ?, ?, ?)`;
// // //   db.query(sql, [user_id, title, content, country_name, date_of_visit], (err, result) => {
// // //     if (err) return res.status(500).json({ error: err });
// // //     res.status(201).json({ message: 'Post created', postId: result.insertId });
// // //   });
// // // });

// // // // GET ALL POSTS (public)
// // // router.get('/', (req, res) => {
// // //   const sql = `SELECT posts.*, users.username FROM posts
// // //                JOIN users ON posts.user_id = users.id
// // //                ORDER BY created_at DESC`;
// // //   db.query(sql, (err, results) => {
// // //     if (err) return res.status(500).json({ error: err });
// // //     res.json(results);
// // //   });
// // // });

// // // // UPDATE POST
// // // router.put('/edit/:id', (req, res) => {
// // //   const { title, content, country_name, date_of_visit } = req.body;
// // //   const postId = req.params.id;
// // //   const sql = `UPDATE posts SET title = ?, content = ?, country_name = ?, date_of_visit = ? WHERE id = ?`;
// // //   db.query(sql, [title, content, country_name, date_of_visit, postId], (err) => {
// // //     if (err) return res.status(500).json({ error: err });
// // //     res.json({ message: 'Post updated' });
// // //   });
// // // });

// // // // DELETE POST
// // // router.delete('/delete/:id', (req, res) => {
// // //   const postId = req.params.id;
// // //   db.query('DELETE FROM posts WHERE id = ?', [postId], (err) => {
// // //     if (err) return res.status(500).json({ error: err });
// // //     res.json({ message: 'Post deleted' });
// // //   });
// // // });

// // // module.exports = router;

// // // // routes/posts.js
// // const express = require('express');
// // const router = express.Router();
// // const db = require('../dbBlog');
// // // create/view/edit/delete blog posts using blog_db


// // // Create a blog post
// // router.post('/create', (req, res) => {
// //   const { user_id, title, content, country_name, date_of_visit } = req.body;

// //   // Validate inputs
// //   if (!user_id || !title || !content || !country_name || !date_of_visit) {
// //     return res.status(400).json({ error: 'All fields are required' });
// //   }

// //   const sql = `INSERT INTO posts (user_id, title, content, country_name, date_of_visit)
// //                VALUES (?, ?, ?, ?, ?)`;
// //   db.query(sql, [user_id, title, content, country_name, date_of_visit], (err, result) => {
// //     if (err) return res.status(500).json({ error: err.message });

// //     // Send success response with the post ID
// //     res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
// //   });
// // });

// // module.exports = router;


// // // // routes/posts.js
// // // const express = require('express');
// // // const router = express.Router();
// // // const { blogDB } = require('../db');
// // //   // Import the blog DB connection

// // // // Create a blog post
// // // router.post('/create', (req, res) => {
// // //   const { user_id, title, content, country_name, date_of_visit } = req.body;

// // //   // Validate inputs
// // //   if (!user_id || !title || !content || !country_name || !date_of_visit) {
// // //     return res.status(400).json({ error: 'All fields are required' });
// // //   }

// // //   const sql = `INSERT INTO posts (user_id, title, content, country_name, date_of_visit)
// // //                VALUES (?, ?, ?, ?, ?)`;

// // //   blogDB.query(sql, [user_id, title, content, country_name, date_of_visit], (err, result) => {
// // //     if (err) {
// // //       console.error('Error creating post:', err);
// // //       return res.status(500).json({ error: 'Error creating post' });
// // //     }

// // //     res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
// // //   });
// // // });

// // // module.exports = router;


// // // const express = require('express');
// // // const router = express.Router();
// // // const { blogDB } = require('../db');

// // // // Create a blog post
// // // router.post('/create', (req, res) => {
// // //   const { user_id, title, content, country_name, date_of_visit } = req.body;

// // //   // Validate inputs
// // //   if (!user_id || !title || !content || !country_name || !date_of_visit) {
// // //     return res.status(400).json({ error: 'All fields are required' });
// // //   }

// // //   const sql = 'INSERT INTO posts (user_id, title, content, country_name, date_of_visit) VALUES (?, ?, ?, ?, ?)';

// // //   blogDB.query(sql, [user_id, title, content, country_name, date_of_visit], (err, result) => {
// // //     if (err) {
// // //       console.error('Error creating post:', err);
// // //       return res.status(500).json({ error: 'Error creating post' });
// // //     }

// // //     res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
// // //   });
// // // });

// // // module.exports = router;


// const express = require('express');
// const router = express.Router();
// const blogDB = require('../dbBlog'); // adjust the relative path as necessary
//  // connects to blog_db

// // Create a blog post
// router.post('/create', (req, res) => {
//   const { user_id, title, content, country_name, date_of_visit } = req.body;

//   if (!user_id || !title || !content || !country_name || !date_of_visit) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   const sql = `INSERT INTO posts (user_id, title, content, country_name, date_of_visit)
//                VALUES (?, ?, ?, ?, ?)`;
  
//   blogDB.query(sql, [user_id, title, content, country_name, date_of_visit], (err, result) => {
//     if (err) {
//       console.error('Insert Error:', err);
//       return res.status(500).json({ error: 'Database insert failed' });
//     }
//     res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
//   });
// });


// router.put('/:id', authenticateUser, async (req, res) => {
//   const postId = req.params.id;
//   const { title, content, country_name, date_of_visit } = req.body;
//   const userId = req.user.id;

//   try {
//     const [rows] = await db.query('SELECT * FROM posts WHERE id = ? AND user_id = ?', [postId, userId]);

//     if (rows.length === 0) {
//       return res.status(403).json({ error: 'Unauthorized to edit this post' });
//     }

//     await db.query(
//       'UPDATE posts SET title = ?, content = ?, country_name = ?, date_of_visit = ? WHERE id = ?',
//       [title, content, country_name, date_of_visit, postId]
//     );

//     res.json({ message: 'Post updated successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const db = require('../dbBlog'); // assuming dbBlog is your database connection

// // Middleware to authenticate the user
// const authenticateUser = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ error: 'No token, authorization denied' });
  
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: 'Token is not valid' });
//   }
// };

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
    req.user = decoded;  // Attach user info to the request object
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

    const post = results[0];  // Assuming only one result
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
