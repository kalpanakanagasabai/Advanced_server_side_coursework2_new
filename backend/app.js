// // const express = require('express');
// // const mysql = require('mysql2');
// // const bcrypt = require('bcryptjs');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');
// // const jwt = require('jsonwebtoken');
// // const crypto = require('crypto'); // For generating a secure API key
// // const cookieParser = require('cookie-parser'); // NEW
// // const axios = require('axios');
// // const postsRouter = require('./routes/posts');

// // const app = express();
// // const port = 5000;

// // // Secret key for JWT
// // const JWT_SECRET = 'your_jwt_secret_key';
// // // Use posts route
// // app.use('/posts', postsRouter);

// // // Database connection setup
// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: '1234',
// //   database: 'blog_db',
// // });

// // db.connect((err) => {
// //   if (err) {
// //     console.error('Database connection error:', err);
// //   } else {
// //     console.log('Connected to MySQL database');
// //   }
// // });

// // // Middleware
// // app.use(cors({
// //   origin: 'http://localhost:3000',
// //   credentials: true // ALLOWS COOKIES
// // }));
// // app.use(bodyParser.json());
// // app.use(cookieParser());

// // // JWT middleware to protect routes
// // const verifyToken = (req, res, next) => {
// //   const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
// //   if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

// //   try {
// //     const decoded = jwt.verify(token, JWT_SECRET);
// //     req.user = decoded;
// //     next();
// //   } catch (err) {
// //     console.error('JWT verification error:', err);
// //     res.status(401).json({ message: 'Invalid or Expired Token' });
// //   }
// // };

// // // REGISTER
// // app.post('/auth/register', async (req, res) => {
// //   const { username, password } = req.body;

// //   if (!username || !password) {
// //     return res.status(400).json({ message: 'Username and password are required' });
// //   }

// //   try {
// //     db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
// //       if (err) {
// //         console.error('Database error during registration:', err);
// //         return res.status(500).json({ message: 'Database error during registration' });
// //       }
// //       if (results.length > 0) return res.status(400).json({ message: 'Username already exists' });

// //       const hashedPassword = await bcrypt.hash(password, 10);
// //       db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
// //         if (err) {
// //           console.error('Database error during user creation:', err);
// //           return res.status(500).json({ message: 'Database error during user creation' });
// //         }

// //         // Generate token after registration
// //         const userId = results.insertId;
// //         const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });

// //         // Set cookie
// //         res.cookie('token', token, {
// //           httpOnly: true,
// //           secure: false, // Set to true in production with HTTPS
// //           sameSite: 'Lax',
// //           maxAge: 3600000,
// //         });

// //         res.status(201).json({ message: 'User registered successfully', token });
// //       });
// //     });
// //   } catch (error) {
// //     console.error('Internal server error during registration:', error);
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // });

// // // LOGIN
// // app.post('/auth/login', (req, res) => {
// //   const { username, password } = req.body;

// //   if (!username || !password) return res.status(400).json({ message: 'Username and password are required' });

// //   try {
// //     db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
// //       if (err) {
// //         console.error('Database error during login:', err);
// //         return res.status(500).json({ message: 'Database error during login' });
// //       }
// //       if (results.length === 0) return res.status(400).json({ message: 'Invalid username or password' });

// //       const user = results[0];
// //       const isPasswordValid = await bcrypt.compare(password, user.password);
// //       if (!isPasswordValid) return res.status(400).json({ message: 'Invalid username or password' });

// //       const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

// //       // Set token in cookie
// //       res.cookie('token', token, {
// //         httpOnly: true,
// //         secure: false,
// //         sameSite: 'Lax',
// //         maxAge: 3600000,
// //       });

// //       res.status(200).json({ message: 'Login successful', token });
// //     });
// //   } catch (error) {
// //     console.error('Internal server error during login:', error);
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // });

// // // LOGOUT
// // app.post('/auth/logout', (req, res) => {
// //   res.clearCookie('token');
// //   res.status(200).json({ message: 'Logged out successfully' });
// // });

// // // PROTECTED ROUTE EXAMPLE
// // app.get('/profile', verifyToken, (req, res) => {
// //   res.status(200).json({ message: `Welcome, user ${req.user.userId}` });
// // });

// // // Routes
// // app.post('/posts/create', (req, res) => {
// //   const { user_id, title, content, country_name, date_of_visit } = req.body;

// //   // Validation
// //   if (!title || !content || !country_name || !date_of_visit) {
// //     return res.status(400).json({ error: 'All fields are required' });
// //   }

// //   // Query to insert post into the database
// //   const query = 'INSERT INTO posts (user_id, title, content, country_name, date_of_visit) VALUES (?, ?, ?, ?, ?)';
// //   const values = [user_id, title, content, country_name, date_of_visit];

// //   db.query(query, values, (err, result) => {
// //     if (err) {
// //       console.error('Error inserting data: ', err);
// //       return res.status(500).json({ error: 'Error inserting post' });
// //     }

// //     res.status(200).json({ message: 'Post created successfully!' });
// //   });
// // });





// // Define the root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the blog API!');
// });

// // Other routes and middleware
// // ... (your existing code)



// // // SERVER
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const postsRouter = require('./routes/posts');
const authRoutes = require('./auth');
const authenticateToken = require('./middleware');
const userRoutes = require('./routes/users');

const app = express();
const port = 5000;

// Secret key for JWT
// const JWT_SECRET = 'your_jwt_secret_key';

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // ALLOWS COOKIES
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Database connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'user_db',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


const blogdb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'blog_db',
});

blogdb.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use('/users', userRoutes);

// JWT middleware to protect routes
const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT verification error:', err);
    res.status(401).json({ message: 'Invalid or Expired Token' });
  }
};

// Root route (fix for "Cannot GET /")
app.get('/', (req, res) => {
  res.send('Welcome to the blog API!');
});

app.use('/api/auth', authRoutes);

// Example protected route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// // REGISTER
// app.post('/auth/register', async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }

//   try {
//     db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
//       if (err) {
//         console.error('Database error during registration:', err);
//         return res.status(500).json({ message: 'Database error during registration' });
//       }
//       if (results.length > 0) return res.status(400).json({ message: 'Username already exists' });

//       const hashedPassword = await bcrypt.hash(password, 10);
//       db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
//         if (err) {
//           console.error('Database error during user creation:', err);
//           return res.status(500).json({ message: 'Database error during user creation' });
//         }

//         // Generate token after registration
//         const userId = results.insertId;
//         const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });

//         // Set cookie
//         res.cookie('token', token, {
//           httpOnly: true,
//           secure: false, // Set to true in production with HTTPS
//           sameSite: 'Lax',
//           maxAge: 3600000,
//         });

//         res.status(201).json({ message: 'User registered successfully', token });
//       });
//     });
//   } catch (error) {
//     console.error('Internal server error during registration:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // LOGIN
// app.post('/auth/login', (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) return res.status(400).json({ message: 'Username and password are required' });

//   try {
//     db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
//       if (err) {
//         console.error('Database error during login:', err);
//         return res.status(500).json({ message: 'Database error during login' });
//       }
//       if (results.length === 0) return res.status(400).json({ message: 'Invalid username or password' });

//       const user = results[0];
//       const isPasswordValid = await bcrypt.compare(password, user.password);
//       if (!isPasswordValid) return res.status(400).json({ message: 'Invalid username or password' });

//       const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

//       // Set token in cookie
//       res.cookie('token', token, {
//         httpOnly: true,
//         secure: false,
//         sameSite: 'Lax',
//         maxAge: 3600000,
//       });

//       res.status(200).json({ message: 'Login successful', token });
//     });
//   } catch (error) {
//     console.error('Internal server error during login:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // LOGOUT
// app.post('/auth/logout', (req, res) => {
//   res.clearCookie('token');
//   res.status(200).json({ message: 'Logged out successfully' });
// });




const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';

// REGISTER
app.post('/auth/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ message: 'Username and password are required' });

  try {
    const [existingUser] = await new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });

    if (existingUser) return res.status(409).json({ message: 'Username already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertResult = await new Promise((resolve, reject) => {
      db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });

    const userId = insertResult.insertId;
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',
      maxAge: 3600000,
    });

    res.status(201).json({ message: 'User registered successfully', token });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error during registration' });
  }
});

// LOGIN
app.post('/auth/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ message: 'Username and password are required' });

  try {
    const [user] = await new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });

    if (!user) return res.status(401).json({ message: 'Invalid username or password' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid username or password' });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',
      maxAge: 3600000,
    });

    res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error during login' });
  }
});


// Logout route
app.post('/auth/logout', (req, res) => {
  res.clearCookie('token'); // Clear JWT cookie if set
  return res.status(200).json({ message: 'Logout successful' });
});
// PROTECTED ROUTE EXAMPLE
app.get('/profile', verifyToken, (req, res) => {
  res.status(200).json({ message: `Welcome, user ${req.user.userId}` });
});

// Routes for posts (using the postsRouter)
app.use('/posts', postsRouter);

// // Dummy in-memory posts array (replace with DB in real app)
// let posts = [
//   { id: 1, user_id: 1, title: "Trip to Paris", content: "It was great!", country_name: "France", date_of_visit: "2023-06-01" },
//   { id: 2, user_id: 2, title: "Trip to Tokyo", content: "Amazing sushi!", country_name: "Japan", date_of_visit: "2023-05-15" },
// ];

// // Get posts by user
// app.get('/posts/user/:userId', (req, res) => {
//   const userId = parseInt(req.params.userId);
//   const userPosts = posts.filter(post => post.user_id === userId);
//   res.json(userPosts);
// });

// const db = require('./dbBlog'); // path to your MySQL connection module

app.get('/posts/user/:userId', (req, res) => {
  const userId = req.params.userId;
  const query = 'SELECT * FROM posts WHERE user_id = ? ORDER BY created_at DESC';

  blogdb.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching posts:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
});


// const jwt = require('jsonwebtoken');

// Middleware to authenticate and extract user from token
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1]; // Expect "Bearer <token>"

//   if (!token) return res.status(401).json({ error: 'Token missing' });

//   jwt.verify(token, 'your_secret_key', (err, user) => {
//     if (err) return res.status(403).json({ error: 'Invalid token' });

//     req.user = user; // Save decoded user data for use in the route
//     next();
//   });
// }


// app.get('/user/profile', authenticateToken, (req, res) => {
//   const userId = req.user.userId;

//   const query = 'SELECT id, username, name, email FROM users WHERE id = ?';
//   blogdb.query(query, [userId], (err, results) => {
//     if (err) {
//       console.error('Error fetching user:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.json(results[0]);
//   });
// });


app.get('/posts', (req, res) => {
  const query = `
    SELECT blog_db.posts.*, user_db.users.username
    FROM blog_db.posts
    JOIN user_db.users ON blog_db.posts.user_id = user_db.users.id
    ORDER BY blog_db.posts.date_of_visit DESC
  `;

  blogdb.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching posts:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});



app.delete('/posts/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id; // from authenticateToken

  const conn = require('./dbBlog'); // Update path

  try {
    const [result] = await conn.execute('DELETE FROM posts WHERE id = ? AND user_id = ?', [id, userId]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Post not found or not authorized.' });
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete post.' });
  }
});


// Edit post route
// app.put('/posts/edit/:id', async (req, res) => {
//   const { id } = req.params;
//   const { title, content, country_name, date_of_visit } = req.body;

//   try {
//     const [result] = await blogdb.execute(
//       'UPDATE posts SET title = ?, content = ?, country_name = ?, date_of_visit = ? WHERE id = ?',
//       [title, content, country_name, date_of_visit, id]
//     );

//     if (result.affectedRows === 0) {
//       return res.status(404).send({ error: 'Post not found' });
//     }

//     res.send({ message: 'Post updated successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ error: 'An error occurred while updating the post' });
//   }
// });

// app.put('/posts/:id', authenticateToken, async (req, res) => {
//   const { id } = req.params;
//   const { title, content, country_name, date_of_visit } = req.body;
//   const userId = req.user.id;

//   try {
//     // Check if post exists and belongs to the user
//     const [existingPost] = await db.query('SELECT * FROM posts WHERE id = ? AND user_id = ?', [id, userId]);
//     if (existingPost.length === 0) {
//       return res.status(404).json({ message: 'Post not found or unauthorized' });
//     }

//     // Perform update
//     await db.query(
//       'UPDATE posts SET title = ?, content = ?, country_name = ?, date_of_visit = ? WHERE id = ? AND user_id = ?',
//       [title, content, country_name, date_of_visit, id, userId]
//     );

//     res.json({ message: 'Post updated successfully' });
//   } catch (err) {
//     console.error('Update error:', err); // Log error
//     res.status(500).json({ message: 'Failed to update post', error: err.message });
//   }
// });


// // UPDATE POST
// app.put('/posts/update/:id', verifyToken, (req, res) => {
//   const postId = req.params.id;
//   const { title, content, country_name, date_of_visit } = req.body;

//   // Validate the data
//   if (!title || !content || !country_name || !date_of_visit) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   // Update the post in the database
//   const query = 'UPDATE posts SET title = ?, content = ?, country_name = ?, date_of_visit = ? WHERE id = ? AND user_id = ?';
//   const values = [title, content, country_name, date_of_visit, postId, req.user.userId];  // Ensuring that the user is updating their own post

//   db.query(query, values, (err, result) => {
//     if (err) {
//       console.error('Error updating post:', err);
//       return res.status(500).json({ error: 'Error updating post' });
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: 'Post not found or you are not authorized to edit this post' });
//     }

//     res.status(200).json({ message: 'Post updated successfully!' });
//   });
// });
// app.put('/posts/:id', authenticateToken, async (req, res) => {
//   try {
//     const { title, content, country_name, date_of_visit } = req.body;
//     const { id } = req.params;

//     await db.query(
//       'UPDATE posts SET title = ?, content = ?, country_name = ?, date_of_visit = ? WHERE id = ? AND user_id = ?',
//       [title, content, country_name, date_of_visit, id, req.user.id]
//     );

//     res.json({ message: 'Post updated successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to update post' });
//   }
// });

// app.put('/posts/:id', async (req, res) => {
//   const { title, content, country_name, date_of_visit } = req.body;
//   const postId = req.params.id;

//   try {
//     await blogdb.query(
//       'UPDATE posts SET title = ?, content = ?, country_name = ?, date_of_visit = ? WHERE id = ?',
//       [title, content, country_name, date_of_visit, postId]
//     );
//     res.json({ message: 'Post updated successfully' });
//   } catch (error) {
//     console.error("Database update error:", error);
//     res.status(500).json({ error: 'Failed to update post' });
//   }
// });


// Delete post route
// app.delete('/posts/delete/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const [result] = await blogdb.execute('DELETE FROM posts WHERE id = ?', [id]);

//     if (result.affectedRows === 0) {
//       return res.status(404).send({ error: 'Post not found' });
//     }

//     res.send({ message: 'Post deleted successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ error: 'An error occurred while deleting the post' });
//   }
// });


app.put('/posts/:id', async (req, res) => {
  const { title, content, country_name, date_of_visit } = req.body;
  const postId = req.params.id;

  try {
    await db.query(
      'UPDATE posts SET title = ?, content = ?, country_name = ?, date_of_visit = ? WHERE id = ?',
      [title, content, country_name, date_of_visit, postId]
    );
    res.json({ message: 'Post updated successfully' });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ error: 'Failed to update post' });
  }
});

// Like post
app.post('/posts/:id/like', async (req, res) => {
  try {
    await blogdb.execute('UPDATE posts SET likes = likes + 1 WHERE id = ?', [req.params.id]);
    res.status(200).json({ message: 'Liked' });
  } catch (err) {
    console.error('Like error:', err);
    res.status(500).json({ message: 'Like failed' });
  }
});

// Dislike post
app.post('/posts/:id/dislike', async (req, res) => {
  try {
    await blogdb.execute('UPDATE posts SET dislikes = dislikes + 1 WHERE id = ?', [req.params.id]);
    res.status(200).json({ message: 'Disliked' });
  } catch (err) {
    console.error('Dislike error:', err);
    res.status(500).json({ message: 'Dislike failed' });
  }
});


// app.get('/users/:userId/followers', (req, res) => {
//   const { userId } = req.params;

//   const query = `
//     SELECT u.id, u.username
//     FROM users u
//     JOIN follows f ON u.id = f.follower_id
//     WHERE f.following_id = ?`;

//   blogdb.query(query, [userId], (err, results) => {
//     if (err) {
//       console.error('Error fetching followers:', err);
//       return res.status(500).json({ message: 'Database error fetching followers' });
//     }
//     res.json(results);
//   });
// });



// app.get('/users/:userId/following', (req, res) => {
//   const { userId } = req.params;

//   const query = `
//     SELECT u.id, u.username
//     FROM users u
//     JOIN follows f ON u.id = f.following_id
//     WHERE f.follower_id = ?`;

//   blogdb.query(query, [userId], (err, results) => {
//     if (err) {
//       console.error('Error fetching following:', err);
//       return res.status(500).json({ message: 'Database error fetching following' });
//     }
//     res.json(results);
//   });
// });

// === Route to get followers ===
app.get('/users/:userId/followers', (req, res) => {
  const userId = req.params.userId;
  const query = `
    SELECT user_db.users.id, user_db.users.username
    FROM blog_db.follows
    JOIN user_db.users ON blog_db.follows.follower_id = user_db.users.id
    WHERE blog_db.follows.followed_id = 1;
  `;

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error fetching followers' });
    }
    res.json(result);
  });
});


app.get('/users/:userId/following', (req, res) => {
  const userId = req.params.userId;
  
  // Ensure the userId is valid before querying the database
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  const query = `
    SELECT user_db.users.id, user_db.users.username
    FROM blog_db.follows
    JOIN user_db.users ON blog_db.follows.followed_id = user_db.users.id
    WHERE blog_db.follows.follower_id = ?;
  `;

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error('Database error:', err); // Detailed logging
      return res.status(500).json({ error: 'Error fetching following' });
    }
    res.json(result);
  });
});

// // === Route to get following ===
// app.get('/users/:userId/following', (req, res) => {
//   const userId = req.params.userId;
//   const query = `
//     SELECT u.id, u.username
//     FROM blog_db.follows f
//     JOIN user_db.users u ON f.followed_id = u.id
//     WHERE f.follower_id = 1;
//   `;

//   db.query(query, [userId], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Error fetching following' });
//     }
//     res.json(result);
//   });
// });
// Get following of a user (users whom userId is following)
// app.get('/users/:userId/following', (req, res) => {
//   const userId = req.params.userId;
//   const query = `
//     SELECT u.id, u.username
//     FROM blog_db.follows f
//     JOIN user_db.users u ON f.followed_id = u.id
//     WHERE f.follower_id = 4;
//   `;
//   db.query(query, [userId], (err, results) => {
//     if (err) {
//       console.error('Error fetching following:', err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//     res.json(results);
//   });
// });


// ✅ Route: Get posts from followed users
// app.get('/users/:userId/following-posts', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const connection = await mysql.createConnection(dbConfig);

//     const [rows] = await connection.execute(
//       `
//         SELECT posts.id, posts.title, posts.content, users.username AS authorUsername
//         FROM posts
//         JOIN users ON posts.user_id = users.id
//         WHERE posts.user_id IN (
//           SELECT followed_id FROM follows WHERE follower_id = ?
//         )
//         ORDER BY posts.created_at DESC
//       `,
//       [userId]
//     );

//     await connection.end();

//     res.json(rows);
//   } catch (error) {
//     console.error('Error fetching followed users posts:', error);
//     res.status(500).json({ error: 'Failed to fetch posts' });
//   }
// });



app.get('/users/:userId/following-posts', (req, res) => {
  const userId = req.params.userId;

  const query = `
 SELECT blog_db.posts.*, user_db.users.username
    FROM blog_db.posts
    JOIN user_db.users ON blog_db.posts.user_id = 4
    ORDER BY blog_db.posts.date_of_visit DESC
  `;

  blogdb.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching followed users posts:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// SERVER
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
