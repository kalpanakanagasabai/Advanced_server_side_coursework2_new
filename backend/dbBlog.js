const mysql = require('mysql2');

const blogDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'blog_db'
});

blogDB.connect((err) => {
  if (err) {
    console.error('Failed to connect to blog_db:', err);
  } else {
    console.log('Connected to blog_db');
  }
});


module.exports = blogDB;
