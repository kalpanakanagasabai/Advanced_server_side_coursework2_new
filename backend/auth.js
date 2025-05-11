// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('./db');
// // const { userDB } = require('./db');
// require('dotenv').config();

// const router = express.Router();

// // Register
// router.post('/register', async (req, res) => {
//   const { email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   userDB.query(
//     'INSERT INTO users (email, password) VALUES (?, ?)',
//     [email, hashedPassword],
//     (err, results) => {
//       if (err) {
//         if (err.code === 'ER_DUP_ENTRY') {
//           return res.status(400).json({ message: 'Email already exists' });
//         }
//         return res.status(500).json({ message: 'Database error' });
//       }
//       res.status(201).json({ message: 'User registered' });
//     }
//   );
// });

// // Login
// router.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   userDB.query(
//     'SELECT * FROM users WHERE email = ?',
//     [email],
//     async (err, results) => {
//       if (err) return res.status(500).json({ message: 'Database error' });
//       if (results.length === 0) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
//       const user = results[0];
//       const match = await bcrypt.compare(password, user.password);
//       if (!match) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
//       const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
//         expiresIn: '1h',
//       });
//       res.json({ token });
//     }
//   );
// });

// module.exports = router;


const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token missing' });

  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) return res.status(403).json({ error: 'Token invalid' });

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;

