// // routes/follow.js
// const express = require('express');
// const router = express.Router();
// const db = require('../dbBlog'); // your MySQL db connection
// const authenticateToken = require('../auth');

// router.post('/follow/:id', authenticateToken, (req, res) => {
//   const followerId = req.user.id;
//   const followedId = req.params.id;
//   db.query('INSERT INTO follows (follower_id, followed_id) VALUES (?, ?)', [followerId, followedId], (err) => {
//     if (err) return res.status(500).json({ error: 'Already following or DB error' });
//     res.status(200).json({ message: 'Followed' });
//   });
// });

// router.post('/unfollow/:id', authenticateToken, (req, res) => {
//   const followerId = req.user.id;
//   const followedId = req.params.id;
//   db.query('DELETE FROM follows WHERE follower_id = ? AND followed_id = ?', [followerId, followedId], (err) => {
//     if (err) return res.status(500).json({ error: 'DB error' });
//     res.status(200).json({ message: 'Unfollowed' });
//   });
// });

// router.get('/status/:id', authenticateToken, (req, res) => {
//   const followerId = req.user.id;
//   const followedId = req.params.id;
//   db.query('SELECT * FROM follows WHERE follower_id = ? AND followed_id = ?', [followerId, followedId], (err, results) => {
//     if (err) return res.status(500).json({ error: 'DB error' });
//     res.json({ isFollowing: results.length > 0 });
//   });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const db = require('../dbBlog');



// Follow a user
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

// Unfollow a user
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

// Get following list for a user
router.get('/:id/following', async (req, res) => {
  const userId = req.params.id;

  try {
    const [rows] = await db.execute(
      'SELECT followed_id FROM follows WHERE follower_id = ?',
      [userId]
    );
    const followingIds = rows.map(row => row.followed_id);
    res.status(200).json(followingIds);
  } catch (error) {
    console.error('Error fetching following list:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




// GET posts from users the given user follows
router.get('/users/:userId/following-posts', async (req, res) => {
  const { userId } = req.params;

  try {
    const query = `
      SELECT posts.id, posts.title, posts.content, users.username AS authorUsername
      FROM posts
      JOIN users ON posts.user_id = users.id
      WHERE posts.user_id IN (
        SELECT followed_id FROM follows WHERE follower_id = ?
      )
      ORDER BY posts.created_at DESC
    `;

    const [rows] = await db.execute(query, [userId]); // for MySQL
    res.json(rows);
  } catch (error) {
    console.error('Error fetching followed users posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});


module.exports = router;

