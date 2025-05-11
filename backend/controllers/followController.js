const pool = require('../dbBlog'); 

exports.followUser = async (req, res) => {
  const followerId = parseInt(req.body.followerId);
  const followingId = parseInt(req.params.id);

  if (followerId === followingId) return res.status(400).json({ error: 'Cannot follow yourself' });

  try {
    await pool.query(
      'INSERT INTO followers (follower_id, following_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [followerId, followingId]
    );
    res.status(200).json({ message: 'Followed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error during follow' });
  }
};

exports.unfollowUser = async (req, res) => {
  const followerId = parseInt(req.body.followerId);
  const followingId = parseInt(req.params.id);

  try {
    await pool.query(
      'DELETE FROM followers WHERE follower_id = $1 AND following_id = $2',
      [followerId, followingId]
    );
    res.status(200).json({ message: 'Unfollowed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error during unfollow' });
  }
};

exports.getFollowingList = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const result = await pool.query(
      'SELECT following_id FROM followers WHERE follower_id = $1',
      [userId]
    );
    const followingIds = result.rows.map(row => row.following_id);
    res.json(followingIds);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching following list' });
  }
};
