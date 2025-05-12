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
// app.use('/users', userRoutes);

// Example protected route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

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
//   const userId = req.params.userId;
//   const query = `
//     SELECT user_db.users.id, user_db.users.username
//     FROM blog_db.follows
//     JOIN user_db.users ON blog_db.follows.follower_id = user_db.users.id
//     WHERE blog_db.follows.followed_id = 1;
//   `;

//   db.query(query, [userId], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Error fetching followers' });
//     }
//     res.json(result);
//   });
// });

app.get('/users/:userId/followers', (req, res) => {
  const userId = req.params.userId;

  // Dynamically use the userId in the query
  const query = `
    SELECT user_db.users.id, user_db.users.username
    FROM blog_db.follows
    JOIN user_db.users ON blog_db.follows.follower_id = user_db.users.id
    WHERE blog_db.follows.followed_id = ?;
  `;

  // Execute the query with the dynamic userId
  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error fetching followers' });
    }
    res.json(result);
  });
});


// app.get('/users/:userId/following', (req, res) => {
//   const userId = req.params.userId;
  
//   if (!userId) {
//     return res.status(400).json({ error: 'User ID is required' });
//   }

//   const query = `
//     SELECT user_db.users.id, user_db.users.username
//     FROM blog_db.follows
//     JOIN user_db.users ON blog_db.follows.followed_id = user_db.users.id
//     WHERE blog_db.follows.follower_id = ?;
//   `;

//   db.query(query, [userId], (err, result) => {
//     if (err) {
//       console.error('Database error:', err);
//       return res.status(500).json({ error: 'Error fetching following' });
//     }
//     res.json(result);
//   });
// });

app.get('/users/:userId/following-posts', (req, res) => {
  const userId = req.params.userId;

  const query = `
    SELECT blog_db.posts.*, user_db.users.username
    FROM blog_db.posts
    JOIN user_db.users ON blog_db.posts.user_id = 1
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

app.get('/users/:userId/following', (req, res) => {
  const userId = req.params.userId;
  console.log(`Fetching following for user: ${userId}`);

  // Your database query here
  const query = `
    SELECT user_db.users.id, user_db.users.username
    FROM blog_db.follows
    JOIN user_db.users ON blog_db.follows.follower_id = user_db.users.id
    WHERE blog_db.follows.followed_id = ?;
  `;

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching following:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// POST /users/:targetUserId/follow
app.post('/users/:targetUserId/follow', (req, res) => {
  const targetUserId = req.params.targetUserId;
  const { followerId } = req.body;

  const sql = `INSERT INTO follows (follower_id, followed_id) VALUES (?, ?)`;

  blogdb.query(sql, [followerId, targetUserId], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'Already following' });
      }
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to follow user' });
    }
    res.json({ message: 'Followed successfully' });
  });
});




// // Route to get user profile
// app.get('/user/profile', authenticateToken, (req, res) => {
//   const userId = req.userId;
//   pool.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
//     if (err) return res.status(500).json({ message: 'Server Error' });
//     if (result.length === 0) return res.status(404).json({ message: 'User not found' });
//     res.json(result[0]);
//   });
// });

// // Route to get followers of a user (from the 'follows' table in blog_db)
// app.get('/user/followers/:userId', (req, res) => {
//   const userId = req.params.userId;
//   pool.query(`
//     SELECT u.id, u.username, u.name
//     FROM blog_db.follows f
//     JOIN blog_db.users u ON f.following_id = u.id
//     WHERE f.followed_id = ?`, [userId], (err, result) => {
//     if (err) return res.status(500).json({ message: 'Server Error' });
//     res.json(result);
//   });
// });

// // Route to get followings of a user (from the 'follows' table in blog_db)
app.get('/user/followings/:userId', (req, res) => {
  const userId = req.params.userId;
  pool.query(`
    SELECT u.id, u.username, u.name
    FROM blog_db.follows f
    JOIN blog_db.users u ON f.following_id = u.id
    WHERE f.followed_id = ?`, [userId], (err, result) => {
    if (err) return res.status(500).json({ message: 'Server Error' });
    res.json(result);
  });
});

// Route to get posts from followed users
app.get('/posts', authenticateToken, (req, res) => {
  const userId = req.userId;

  // Get the users that the current user is following (from blog_db)
  pool.query(`
    SELECT followed_id FROM blog_db.follows WHERE following_id = ?`, [userId], (err, result) => {
    if (err) return res.status(500).json({ message: 'Server Error' });

    const followedUserIds = result.map(row => row.followed_id);
    if (followedUserIds.length === 0) return res.status(404).json({ message: 'No followed users' });

    // Fetch posts from those followed users (posts table assumed to be in the default db)
    pool.query(`
      SELECT p.id, p.title, p.content, p.user_id, p.date_of_visit, u.username
      FROM posts p
      JOIN users u ON p.user_id = u.id
      WHERE p.user_id IN (?)`, [followedUserIds], (err, posts) => {
      if (err) return res.status(500).json({ message: 'Server Error' });
      res.json(posts);
    });
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
