// const express = require('express');
// const mysql = require('mysql2');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// dotenv.config();  // For environment variables
// const port = 5000;
// const app = express();


// const postRoutes = require('./routes/posts'); // Adjust path if necessary
// app.use('/posts', postRoutes);


// // Middleware to parse incoming request bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // MySQL database connection
// const db = mysql.createConnection({
//   host: 'localhost',     // Database host
//   user: 'root',          // Database username
//   password: '1234',          // Database password
//   database: 'user_db'    // Database name
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Could not connect to MySQL:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });


// const cors = require('cors');

// const corsOptions = {
//   origin: 'http://localhost:3000',  // Your frontend URL (React app)
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOptions));  // Using the custom CORS configuration


// app.use(cors());
// app.use(express.json());

// // Import routes

// // app.listen(5000, () => {
// //   console.log('Server running on port 5000');
// // });

// // Register Route
// app.post('/auth/register', async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }

//   try {
//     // Check if the user already exists
//     db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
//       if (err) {
//         return res.status(500).json({ message: 'Database error during registration' });
//       }

//       if (results.length > 0) {
//         return res.status(400).json({ message: 'Username already exists' });
//       }

//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Insert the new user into the database
//       db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
//         if (err) {
//           return res.status(500).json({ message: 'Database error during user creation' });
//         }
//         res.status(201).json({ message: 'User registered successfully' });
//       });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Login Route
// app.post('/auth/login', (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }

//   // Check if the user exists
//   db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
//     if (err) {
//       return res.status(500).json({ message: 'Database error during login' });
//     }

//     if (results.length === 0) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     const user = results[0];

//     // Compare the password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ message: 'Login successful', token });
//   });
// });


// // // Edit Blog Post Route
// // app.put('/blog/:id', authenticateJWT, (req, res) => {
// //   const { title, content, country, date_of_visit } = req.body;
// //   const postId = req.params.id;
// //   const userId = req.user.id;

// //   if (!title || !content || !country || !date_of_visit) {
// //     return res.status(400).json({ message: 'All fields are required' });
// //   }

// //   db.query('SELECT * FROM blog_posts WHERE id = ? AND user_id = ?', [postId, userId], (err, results) => {
// //     if (err) return res.status(500).json({ message: 'Error fetching blog post' });
// //     if (results.length === 0) return res.status(404).json({ message: 'Blog post not found or not authorized' });

// //     db.query('UPDATE blog_posts SET title = ?, content = ?, country = ?, date_of_visit = ? WHERE id = ?', [title, content, country, date_of_visit, postId], (err) => {
// //       if (err) return res.status(500).json({ message: 'Error updating blog post' });
// //       res.status(200).json({ message: 'Blog post updated successfully' });
// //     });
// //   });
// // });

// // // Delete Blog Post Route
// // app.delete('/blog/:id', authenticateJWT, (req, res) => {
// //   const postId = req.params.id;
// //   const userId = req.user.id;

// //   db.query('SELECT * FROM blog_posts WHERE id = ? AND user_id = ?', [postId, userId], (err, results) => {
// //     if (err) return res.status(500).json({ message: 'Error fetching blog post' });
// //     if (results.length === 0) return res.status(404).json({ message: 'Blog post not found or not authorized' });

// //     db.query('DELETE FROM blog_posts WHERE id = ?', [postId], (err) => {
// //       if (err) return res.status(500).json({ message: 'Error deleting blog post' });
// //       res.status(200).json({ message: 'Blog post deleted successfully' });
// //     });
// //   });
// // });

// // View All Blog Posts Route (Public)
// app.get('/blog', (req, res) => {
//   db.query('SELECT * FROM blog_posts', (err, results) => {
//     if (err) return res.status(500).json({ message: 'Error fetching blog posts' });
//     res.status(200).json({ posts: results });
//   });
// });


// // Middleware to authenticate JWT
// const authenticateJWT = (req, res, next) => {
//   const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

//   if (!token) {
//     return res.status(403).json({ message: 'Access denied' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid token' });
//     }

//     req.user = user;
//     next();
//   });
// };


// // Update blog post route (protected with JWT authentication)
// app.put('/blog/:id', authenticateJWT, (req, res) => {
//   const blogId = req.params.id;
//   const { title, content, country, date_of_visit } = req.body;

//   const query = 'UPDATE blog_posts SET title = ?, content = ?, country = ?, date_of_visit = ? WHERE id = ?';

//   db.query(query, [title, content, country, date_of_visit, blogId], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error updating blog post' });
//     }

//     res.status(200).json({ message: 'Blog post updated successfully' });
//   });
// });

// // JWT Verification Middleware
// const verifyToken = (req, res, next) => {
//   const token = req.header('Authorization')?.split(' ')[1];
//   if (!token) {
//     return res.status(403).json({ message: 'Access denied, no token provided' });
//   }
//   try {
//     const decoded = jwt.verify(token, 'your_jwt_secret');  // Replace with your secret key
//     req.user = decoded;  // Attach user data to the request object
//     next();  // Proceed with the next middleware/route handler
//   } catch (err) {
//     return res.status(400).json({ message: 'Invalid token' });
//   }
// };

// // Create Post Route (Protected)
// app.post('/posts', verifyToken, (req, res) => {
//   const { title, content } = req.body;

//   if (!title || !content) {
//     return res.status(400).json({ message: 'Title and content are required' });
//   }

//   const userId = req.user.userId;  // Get the userId from the decoded JWT

//   // Insert the new post into the database
//   db.query(
//     'INSERT INTO posts (title, content, userId) VALUES (?, ?, ?)',
//     [title, content, userId],
//     (err, results) => {
//       if (err) {
//         console.error('Database error during post creation:', err);
//         return res.status(500).json({ message: 'Error creating post' });
//       }
//       res.status(201).json({ message: 'Post created successfully', postId: results.insertId });
//     }
//   );
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// const express = require('express');
// const mysql = require('mysql2');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const cors = require('cors');  // Make sure cors is correctly imported

// // const postsRouter = require('./routes/posts');


// // const cors = require('cors');







// dotenv.config();  // For environment variables
// const port = 5000;
// const app = express();

// // Middleware to parse incoming request bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // app.use('/posts', postsRouter);

// // MySQL database connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'user_db',
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Could not connect to MySQL:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// app.use(cors());
// app.use(express.json());

// // Import routes
// // const postRoutes = require('./routes/posts');
// // app.use('/posts', postRoutes);

// // CORS configuration
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOptions));  // Use the custom CORS configuration

// // Import routes
// // const postRoutes = require('./routes/posts'); // Adjust path if necessary
// // app.use('/posts', postRoutes);

// // Register Route
// app.post('/auth/register', async (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }

//   try {
//     db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
//       if (err) {
//         return res.status(500).json({ message: 'Database error during registration' });
//       }

//       if (results.length > 0) {
//         return res.status(400).json({ message: 'Username already exists' });
//       }

//       const hashedPassword = await bcrypt.hash(password, 10);
//       db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
//         if (err) {
//           return res.status(500).json({ message: 'Database error during user creation' });
//         }
//         res.status(201).json({ message: 'User registered successfully' });
//       });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Login Route
// app.post('/auth/login', (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }

//   db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
//     if (err) {
//       return res.status(500).json({ message: 'Database error during login' });
//     }

//     if (results.length === 0) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     const user = results[0];
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ message: 'Login successful', token });
//   });
// });

// // Middleware to authenticate JWT
// const authenticateJWT = (req, res, next) => {
//   const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

//   if (!token) {
//     return res.status(403).json({ message: 'Access denied' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid token' });
//     }
//     req.user = user;
//     next();
//   });
// };


// // Routes
// app.post('/posts/create', (req, res) => {
//   const { user_id, title, content, country_name, date_of_visit } = req.body;

//   // Validation
//   if (!title || !content || !country_name || !date_of_visit) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   // Query to insert post into the database
//   const query = 'INSERT INTO posts (user_id, title, content, country_name, date_of_visit) VALUES (?, ?, ?, ?, ?)';
//   const values = [user_id, title, content, country_name, date_of_visit];

//   db.query(query, values, (err, result) => {
//     if (err) {
//       console.error('Error inserting data: ', err);
//       return res.status(500).json({ error: 'Error inserting post' });
//     }

//     res.status(200).json({ message: 'Post created successfully!' });
//   });
// });
// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
