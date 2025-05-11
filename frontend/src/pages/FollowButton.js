// components/FollowButton.js
import React, { useEffect, useState } from 'react';

const FollowButton = ({ userId, currentUser }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Check if currentUser is following userId
    const checkFollowStatus = async () => {
      const res = await fetch(`http://localhost:5000/follow/status/${userId}`, {
        headers: { Authorization: `Bearer ${currentUser.token}` }
      });
      const data = await res.json();
      setIsFollowing(data.isFollowing);
    };
    checkFollowStatus();
  }, [userId]);

  const toggleFollow = async () => {
    const url = `http://localhost:5000/follow/${isFollowing ? 'unfollow' : 'follow'}/${userId}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${currentUser.token}`,
        'Content-Type': 'application/json',
      }
    });
    if (res.ok) setIsFollowing(!isFollowing);
  };

  return (
    <button onClick={toggleFollow}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
