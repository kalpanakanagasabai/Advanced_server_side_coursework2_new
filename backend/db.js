// const mysql = require('mysql2');

// const db = mysql.createConnection({
//     host: 'localhost', // Host is usually localhost
//     user: 'root', // MySQL username
//     password: '1234', // MySQL password
//     database: 'user_db' // The correct database name you want to use
// });

// // Establish a connection to the MySQL server
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err.message); // More detailed error message
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

// // Export the connection to be used in other parts of your application
// module.exports = db;


// // // db.js (or dbBlog.js)

// // // Import mysql2 library
// // const mysql = require('mysql2');

// // // Create connection to the users database
// // const userDB = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',          // Your MySQL username
// //   password: '1234',      // Your MySQL password
// //   database: 'user_db',   // Your user registration database
// // });

// // // Create connection to the blog database
// // const blogDB = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',          // Your MySQL username
// //   password: '1234',      // Your MySQL password
// //   database: 'blog_db',   // Your blog database
// // });

// // // Connect to both databases
// // userDB.connect((err) => {
// //   if (err) {
// //     console.error('User DB connection error:', err);
// //   } else {
// //     console.log('Connected to User DB');
// //   }
// // });

// // blogDB.connect((err) => {
// //   if (err) {
// //     console.error('Blog DB connection error:', err);
// //   } else {
// //     console.log('Connected to Blog DB');
// //   }
// // });

// // // Export both connections
// // module.exports = { userDB, blogDB };


// const mysql = require('mysql2');

// // User DB
// const userDB = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'user_db',
// });

// // Blog DB
// const blogDB = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'blog_db',
// });

// // Connect to userDB
// userDB.connect((err) => {
//   if (err) console.error('user_db connection error:', err);
//   else console.log('Connected to user_db');
// });

// // Connect to blogDB
// blogDB.connect((err) => {
//   if (err) console.error('blog_db connection error:', err);
//   else console.log('Connected to blog_db');
// });

// module.exports = { userDB, blogDB };


