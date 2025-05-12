// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './PostDetail.css';

// const Profile = () => {
//   const { userId } = useParams();
//   const [followers, setFollowers] = useState([]);
//   const [following, setFollowing] = useState([]);
//   const [followedPosts, setFollowedPosts] = useState([]);

//   // useEffect(() => {
//   //   fetchFollowers();
//   //   fetchFollowing();
//   //   fetchFollowedPosts();
//   // }, [userId]);

//   useEffect(() => {
//   console.log("👤 Viewing profile of userId:", userId);  // Debug line
//   fetchFollowers();
//   fetchFollowing();
//   fetchFollowedPosts();
// }, [userId]);


//   const fetchFollowers = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/users/${userId}/followers`);
//       setFollowers(res.data);
//     } catch (err) {
//       console.error("Error fetching followers", err);
//     }
//   };

//   const fetchFollowing = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/users/${userId}/following`);
//       setFollowing(res.data);
//     } catch (err) {
//       console.error("Error fetching following", err);
//     }
//   };

//   // const fetchFollowedPosts = async () => {
//   //   try {
//   //     const res = await axios.get(`http://localhost:5000/users/${userId}/following-posts`);
//   //     setFollowedPosts(res.data);
//   //   } catch (err) {
//   //     console.error("Error fetching followed users' posts", err);
//   //   }
//   // };

//   const fetchFollowedPosts = async () => {
//   try {
//     const res = await axios.get(`http://localhost:5000/users/${userId}/following-posts`);
//     console.log("Fetched posts:", res.data);  // Add this line
//     setFollowedPosts(res.data);
//   } catch (err) {
//     console.error("Error fetching followed users' posts", err);
//   }
// };

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>

//       {/* Followers Section */}
//       <div className="follow-section">
//         <h3>👥 Followers ({followers.length})</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>User ID</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {followers.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.username}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Following Section */}
//       <div className="follow-section">
//         <h3>➡️ Following ({following.length > 0 ? following.length : 2})</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>User ID</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(following.length === 0 ? [
//               { id: 1, username: "Lily" },
//             ] : following).map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.username}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Followed Users' Posts Feed */}
//       <div className="follow-section">
//         <h3>📰 Feed from Users You Follow</h3>
//         {followedPosts.length === 0 ? (
//           <p>No posts from followed users yet.</p>
//         ) : (
//           followedPosts.map((post) => (
//             <div key={post.id} className="post-card">
//               <h3>{post.title}</h3>
//               <p>{post.content}</p>
//               <p className="post-meta">
//                 <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


// src/components/Profile.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './Profile.css';

// const Profile = () => {
//   const { userId } = useParams();
//   const [followers, setFollowers] = useState([]);
//   const [following, setFollowing] = useState([]);
//   const [followedPosts, setFollowedPosts] = useState([]);

//   useEffect(() => {
//     fetchFollowers();
//     fetchFollowing();
//     fetchFollowedPosts();
//   }, [userId]);

//   const fetchFollowers = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/users/${userId}/followers`);
//       setFollowers(res.data);
//     } catch (err) {
//       console.error("Error fetching followers", err);
//     }
//   };

//   const fetchFollowing = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/users/${userId}/following`);
//       setFollowing(res.data);
//     } catch (err) {
//       console.error("Error fetching following", err);
//     }
//   };

//   const fetchFollowedPosts = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/users/${userId}/following-posts`);
//       setFollowedPosts(res.data);
//     } catch (err) {
//       console.error("Error fetching posts", err);
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2>User Profile (ID: {userId})</h2>

//       {/* Followers */}
//       <div className="follow-section">
//         <h3>👥 Followers ({followers.length})</h3>
//         <ul>
//           {followers.map(user => (
//             <li key={user.id}>{user.username} (ID: {user.id})</li>
//           ))}
//         </ul>
//       </div>

//       {/* Following */}
//       <div className="follow-section">
//         <h3>➡️ Following ({following.length})</h3>
//         <ul>
//           {following.map(user => (
//             <li key={user.id}>{user.username} (ID: {user.id})</li>
//           ))}
//         </ul>
//       </div>

//       {/* Followed Posts */}
//       <div className="follow-section">
//         <h3>📰 Feed from Followed Users</h3>
//         {followedPosts.length === 0 ? (
//           <p>No posts yet from followed users.</p>
//         ) : (
//           followedPosts.map(post => (
//             <div key={post.id} className="post-card">
//               <h4>{post.title}</h4>
//               <p>{post.content}</p>
//               <small>
//                 By {post.username} | {new Date(post.date_of_visit).toLocaleDateString()}
//               </small>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './Profile.css';

// const Profile = () => {
//   const { userId } = useParams();
//   const [followers, setFollowers] = useState([]);
//   const [following, setFollowing] = useState([]);
//   const [followedPosts, setFollowedPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const [followersRes, followingRes, postsRes] = await Promise.all([
//           axios.get(`http://localhost:5000/users/${userId}/followers`),
//           axios.get(`http://localhost:5000/users/${userId}/following`),
//           axios.get(`http://localhost:5000/users/${userId}/following-posts`)
//         ]);
//         setFollowers(followersRes.data);
//         setFollowing(followingRes.data);
//         setFollowedPosts(postsRes.data);
//       } catch (err) {
//         console.error('Error loading profile data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [userId]);

//   if (loading) {
//     return <div className="profile-container"><p>Loading profile data...</p></div>;
//   }

//   return (
//     <div className="profile-container">
//       <h2>User Profile (ID: {userId})</h2>

//       {/* Followers */}
//       <div className="follow-section">
//         <h3>👥 Followers ({followers.length})</h3>
//         {followers.length === 0 ? (
//           <p>No followers yet.</p>
//         ) : (
//           <ul>
//             {followers.map(user => (
//               <li key={user.id}>{user.username} (ID: {user.id})</li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Following */}
//       <div className="follow-section">
//         <h3>➡️ Following ({following.length})</h3>
//         {following.length === 0 ? (
//           <p>Not following anyone yet.</p>
//         ) : (
//           <ul>
//             {following.map(user => (
//               <li key={user.id}>{user.username} (ID: {user.id})</li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Followed Posts */}
//       <div className="follow-section">
//         <h3>📰 Feed from Followed Users</h3>
//         {followedPosts.length === 0 ? (
//           <p>No posts yet from followed users.</p>
//         ) : (
//           followedPosts.map(post => (
//             <div key={post.id} className="post-card">
//               <h4>{post.title}</h4>
//               <p>{post.content}</p>
//               <small>
//                 By <strong>{post.username}</strong> |{' '}
//                 {new Date(post.date_of_visit).toLocaleDateString(undefined, {
//                   year: 'numeric',
//                   month: 'short',
//                   day: 'numeric'
//                 })}
//               </small>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './PostDetail.css';

// const Profile = () => {
//   const { userId } = useParams();
//   const [followers, setFollowers] = useState([]);
//   const [following, setFollowing] = useState([]);
//   const [followedPosts, setFollowedPosts] = useState([]);
//   const [userProfile, setUserProfile] = useState(null);

//   useEffect(() => {
//     fetchUserInfo();
//     fetchFollowers();
//     fetchFollowing();
//     fetchFollowedPosts();
//   }, [userId]);

//   const fetchUserInfo = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/users/${userId}`);
//       setUserProfile(res.data);
//     } catch (err) {
//       console.error("Error fetching user info", err);
//     }
//   };

//   const fetchFollowers = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/users/${userId}/followers`);
//       setFollowers(res.data);
//     } catch (err) {
//       console.error("Error fetching followers", err);
//     }
//   };

//   const fetchFollowing = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/users/${userId}/following`);
//       setFollowing(res.data);
//     } catch (err) {
//       console.error("Error fetching following", err);
//     }
//   };

//   const fetchFollowedPosts = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/users/${userId}/following-posts`);
//       setFollowedPosts(res.data);
//     } catch (err) {
//       console.error("Error fetching followed users' posts", err);
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2>{userProfile ? `${userProfile.username}'s Profile` : "User Profile"}</h2>

//       {/* Followers Section */}
//       <div className="follow-section">
//         <h3>👥 Followers ({followers.length})</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>User ID</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {followers.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.username}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Following Section */}
//       <div className="follow-section">
//         <h3>➡️ Following ({following.length})</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>User ID</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {following.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.username}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Followed Users' Posts Feed */}
//       <div className="follow-section">
//         <h3>📰 Feed from Users You Follow</h3>
//         {followedPosts.length === 0 ? (
//           <p>No posts from followed users yet.</p>
//         ) : (
//           followedPosts.map((post) => (
//             <div key={post.id} className="post-card">
//               <h3>{post.title}</h3>
//               <p>{post.content}</p>
//               <p className="post-meta">
//                 <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './PostDetail.css';

// const PostDetail = () => {
//   const { userId } = useParams();
//   const [followers, setFollowers] = useState([]);
//   const [following, setFollowing] = useState([]);
//   const [followedPosts, setFollowedPosts] = useState([]);

//   useEffect(() => {
//     console.log("👤 Viewing profile of userId:", userId);  // Debug line
//     fetchFollowers();
//     fetchFollowing();
//     fetchFollowedPosts();
//   }, [userId]);

//   // const fetchFollowers = async () => {
//   //   try {
//   //     const res = await axios.get(`http://localhost:5000/users/${userId}/followers`);
//   //     setFollowers(res.data);
//   //   } catch (err) {
//   //     console.error("Error fetching followers", err);
//   //   }
//   // };

//   // const fetchFollowing = async () => {
//   //   try {
//   //     const res = await axios.get(`http://localhost:5000/users/${userId}/following`);
//   //     setFollowing(res.data);
//   //   } catch (err) {
//   //     console.error("Error fetching following", err);
//   //   }
//   // };

//   const fetchFollowers = async () => {
//   console.log(`Requesting followers for user: ${userId}`);  // This should show the actual userId
//   try {
//     const res = await axios.get(`http://localhost:5000/users/${userId}/followers`);
//     setFollowers(res.data);
//   } catch (err) {
//     console.error("Error fetching followers", err);
//   }
// };

// const fetchFollowing = async () => {
//   console.log(`Requesting following for user: ${userId}`);  // This should show the actual userId
//   try {
//     const res = await axios.get(`http://localhost:5000/users/${userId}/following`);
//     setFollowing(res.data);
//   } catch (err) {
//     console.error("Error fetching following", err);
//   }
// };


//   const fetchFollowedPosts = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/users/${userId}/following-posts`);
//       console.log("Fetched posts:", res.data);  // Add this line
//       setFollowedPosts(res.data);
//     } catch (err) {
//       console.error("Error fetching followed users' posts", err);
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>

//       {/* Followers Section */}
//       <div className="follow-section">
//         <h3>👥 Followers ({followers.length})</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>User ID</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {followers.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.username}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Following Section */}
//       <div className="follow-section">
//         <h3>➡️ Following ({following.length})</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>User ID</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {following.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.username}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Followed Users' Posts Feed */}
//       <div className="follow-section">
//         <h3>📰 Feed from Users You Follow</h3>
//         {followedPosts.length === 0 ? (
//           <p>No posts from followed users yet.</p>
//         ) : (
//           followedPosts.map((post) => (
//             <div key={post.id} className="post-card">
//               <h3>{post.title}</h3>
//               <p>{post.content}</p>
//               <p className="post-meta">
//                 <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default PostDetail;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PostDetail.css';

const PostDetail = () => {
  // Retrieve userId from localStorage
  const userId = localStorage.getItem('userId');
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followedPosts, setFollowedPosts] = useState([]);

  useEffect(() => {
    // Ensure the userId is available before making requests
    if (userId) {
      console.log("👤 Viewing profile of userId:", userId);  // Debug line
      fetchFollowers();
      fetchFollowing();
       fetchFollowedPosts();
    } else {
      console.error("No userId found in localStorage.");
    }
  }, [userId]);

  const fetchFollowers = async () => {
    console.log(`Requesting followers for user: ${userId}`);  // This should show the actual userId
    try {
      const res = await axios.get(`http://localhost:5000/users/${userId}/followers`);
      setFollowers(res.data);
    } catch (err) {
      console.error("Error fetching followers", err);
    }
  };

  const fetchFollowing = async () => {
  console.log(`Requesting following for user: ${userId}`);

  if (!userId) {
    console.error("No userId found!");
    return;
  }

  try {
    const res = await axios.get(`http://localhost:5000/users/${userId}/following`);
    console.log(res.data); // Log the response to see if it contains the expected data
    setFollowing(res.data);
  } catch (err) {
    console.error("Error fetching following", err);
  }
};



const fetchFollowedPosts = async () => {
  console.log(`Requesting following posts for user: ${userId}`);
  if (!userId) {
    console.error("No userId found!");
    return;
  }

  try {
    const res = await axios.get(`http://localhost:5000/users/${userId}/following-posts`);
    
    // Remove duplicates by post ID
    const uniquePosts = [];
    const seenIds = new Set();

    for (const post of res.data) {
      if (!seenIds.has(post.id)) {
        seenIds.add(post.id);
        uniquePosts.push(post);
      }
    }

    setFollowedPosts(uniquePosts);
  } catch (err) {
    console.error("Error fetching following posts", err);
  }
};



  return (
    <div className="profile-container">
      <h2>User Profile</h2>

      {/* Followers Section */}
      <div className="follow-section">
        <h3>👥 Followers ({followers.length})</h3>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {followers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Following Section */}
      <div className="follow-section">
        <h3>➡️ Following ({following.length})</h3>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {following.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Followed Users' Posts Feed */}
      <div className="follow-section">
        <h3>📰 Feed from Users You Follow</h3>
        {followedPosts.length === 0 ? (
          <p>No posts from followed users yet.</p>
        ) : (
          followedPosts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p className="post-meta">
               {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostDetail;
