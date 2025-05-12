const express = require('express');
const router = express.Router();
const db = require('../dbBlog');

// // Follow a user
router.post('/:id/follow', async (req, res) => {
  const followedId = req.params.id;
  const { followerId } = req.body;

  if (followerId === followedId) {
    return res.status(400).json({ message: "You can't follow yourself." });
  }

  try {
    const [rows] = await db.execute(
      'INSERT IGNORE INTO follows (follower_id, followed_id) VALUES (?, ?)',
      [followerId, followedId]
    );
    return res.status(200).json({ message: 'Followed successfully' });
  } catch (error) {
    console.error('Error following user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// // Unfollow a user
router.post('/:id/unfollow', async (req, res) => {
  const followedId = req.params.id;
  const { followerId } = req.body;

  try {
    const [rows] = await db.execute(
      'DELETE FROM follows WHERE follower_id = ? AND followed_id = ?',
      [followerId, followedId]
    );
    return res.status(200).json({ message: 'Unfollowed successfully' });
  } catch (error) {
    console.error('Error unfollowing user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// // Get following list for a user
// router.get('/:id/following', async (req, res) => {
//   const userId = req.params.id;

//   try {
//     const [rows] = await db.execute(
//       'SELECT followed_id FROM follows WHERE follower_id = ?',
//       [userId]
//     );
//     const followingIds = rows.map(row => row.followed_id);
//     res.status(200).json(followingIds);
//   } catch (error) {
//     console.error('Error fetching following list:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });




// // GET posts from users the given user follows
// router.get('/users/:userId/following-posts', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const query = `
//       SELECT posts.id, posts.title, posts.content, users.username AS authorUsername
//       FROM posts
//       JOIN users ON posts.user_id = users.id
//       WHERE posts.user_id IN (
//         SELECT followed_id FROM follows WHERE follower_id = ?
//       )
//       ORDER BY posts.created_at DESC
//     `;

//     const [rows] = await db.execute(query, [userId]); // for MySQL
//     res.json(rows);
//   } catch (error) {
//     console.error('Error fetching followed users posts:', error);
//     res.status(500).json({ error: 'Failed to fetch posts' });
//   }
// });


module.exports = router;

// routes/userRoutes.js
// const express = require('express');
// const router = express.Router();
// const { userdb, blogdb } = require('../db');

// // 🧑‍🤝‍🧑 Get followers of a user
// router.get('/:userId/followers', (req, res) => {
//   const { userId } = req.params;
//   const sql = `
//     SELECT u.id, u.username
//     FROM follows f
//     JOIN users u ON f.follower_id = u.id
//     WHERE f.following_id = ?
//   `;
//   userdb.query(sql, [userId], (err, results) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(results);
//   });
// });

// // 🔁 Get users that the user is following
// router.get('/:userId/following', (req, res) => {
//   const { userId } = req.params;
//   const sql = `
//     SELECT u.id, u.username
//     FROM follows f
//     JOIN users u ON f.following_id = u.id
//     WHERE f.follower_id = ?
//   `;
//   userdb.query(sql, [userId], (err, results) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(results);
//   });
// });

// // ➕ Follow a user
// router.post('/:userId/follow/:targetId', (req, res) => {
//   const { userId, targetId } = req.params;

//   if (userId === targetId) {
//     return res.status(400).json({ error: "You can't follow yourself." });
//   }

//   const sql = `INSERT INTO follows (follower_id, following_id) VALUES (?, ?)`;
//   userdb.query(sql, [userId, targetId], (err, result) => {
//     if (err) {
//       if (err.code === 'ER_DUP_ENTRY') {
//         return res.status(400).json({ message: 'Already following this user' });
//       }
//       return res.status(500).json({ error: err.message });
//     }
//     res.json({ message: 'User followed successfully' });
//   });
// });

// // ➖ Unfollow a user
// router.delete('/:userId/unfollow/:targetId', (req, res) => {
//   const { userId, targetId } = req.params;
//   const sql = `DELETE FROM follows WHERE follower_id = ? AND following_id = ?`;
//   userdb.query(sql, [userId, targetId], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ message: 'User unfollowed successfully' });
//   });
// });

// // 📰 Get posts from followed users
// router.get('/:userId/following-posts', (req, res) => {
//   const { userId } = req.params;

//   const getFollowedUserIds = `SELECT following_id FROM follows WHERE follower_id = ?`;
//   userdb.query(getFollowedUserIds, [userId], (err, followResults) => {
//     if (err) return res.status(500).json({ error: err.message });

//     const followedIds = followResults.map(row => row.following_id);
//     if (followedIds.length === 0) return res.json([]);

//     const placeholders = followedIds.map(() => '?').join(',');
//     const getPosts = `
//       SELECT p.*, u.username
//       FROM blog_db.posts p
//       JOIN user_db.users u ON p.user_id = u.id
//       WHERE p.user_id IN (${placeholders})
//       ORDER BY p.date_of_visit DESC
//     `;

//     blogdb.query(getPosts, followedIds, (err, postResults) => {
//       if (err) return res.status(500).json({ error: err.message });
//       res.json(postResults);
//     });
//   });
// });

// module.exports = router;

