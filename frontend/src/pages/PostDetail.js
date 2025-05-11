// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import './PostDetail.css'; // Optional for styling

// // // const ProfilePage = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [posts, setPosts] = useState([]);
// // //   const [followers, setFollowers] = useState([]);
// // //   const [following, setFollowing] = useState([]);

// // //   useEffect(() => {
// // //     const userId = localStorage.getItem('userId');
// // //     if (userId) {
// // //       fetchUserProfile(userId);
// // //       fetchUserPosts(userId);
// // //       fetchFollowers(userId);
// // //       fetchFollowing(userId);
// // //     }
// // //   }, []);

// // //   const fetchUserProfile = async (userId) => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/users/${userId}`);
// // //       setUser(res.data);
// // //     } catch (err) {
// // //       console.error('Error fetching user profile:', err);
// // //     }
// // //   };

// // //   const fetchUserPosts = async (userId) => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/users/${userId}/posts`);
// // //       setPosts(res.data);
// // //     } catch (err) {
// // //       console.error('Error fetching user posts:', err);
// // //     }
// // //   };

// // //   const fetchFollowers = async (userId) => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/users/${userId}/followers`);
// // //       setFollowers(res.data);
// // //     } catch (err) {
// // //       console.error("Error fetching followers", err);
// // //     }
// // //   };

// // //   const fetchFollowing = async (userId) => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/users/${userId}/following`);
// // //       setFollowing(res.data);
// // //     } catch (err) {
// // //       console.error("Error fetching following", err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="profile-container">
// // //       <h2>User Profile</h2>
// // //       {user && (
// // //         <div className="user-details">
// // //           <p><strong>Username:</strong> {user.username}</p>
// // //           <p><strong>Email:</strong> {user.email}</p>
// // //         </div>
// // //       )}

// // //       <div className="follow-section">
// // //         <h3>👥 Followers ({followers.length})</h3>
// // //         <ul>
// // //           {followers.map((user) => (
// // //             <li key={user.id}>{user.username}</li>
// // //           ))}
// // //         </ul>
// // //       </div>

// // //       <div className="follow-section">
// // //         <h3>➡️ Following ({following.length})</h3>
// // //         <ul>
// // //           {following.map((user) => (
// // //             <li key={user.id}>{user.username}</li>
// // //           ))}
// // //         </ul>
// // //       </div>

// // //       <div className="user-posts">
// // //         <h3>📝 Posts</h3>
// // //         <ul>
// // //           {posts.map((post) => (
// // //             <li key={post.id}>{post.title}</li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProfilePage;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import './PostDetail.css'; // optional

// // const Profile = () => {
// //   const { userId } = useParams();
// //   const [followers, setFollowers] = useState([]);
// //   const [following, setFollowing] = useState([]);

// //   useEffect(() => {
// //     fetchFollowers();
// //     fetchFollowing();
// //   }, [userId]);

// //   const fetchFollowers = async () => {
// //     try {
// //       const res = await axios.get(`http://localhost:5000/users/${userId}/followers`);
// //       setFollowers(res.data);
// //     } catch (err) {
// //       console.error("Error fetching followers", err);
// //     }
// //   };

// //   const fetchFollowing = async () => {
// //     try {
// //       const res = await axios.get(`http://localhost:5000/users/${userId}/following`);
// //       setFollowing(res.data);
// //     } catch (err) {
// //       console.error("Error fetching following", err);
// //     }
// //   };

// //   return (
// //     <div className="profile-container">
// //       <h2>User Profile (ID: {userId})</h2>

// //       <div className="follow-section">
// //         <h3>👥 Followers ({followers.length})</h3>
// //         <ul>
// //           {followers.map((user) => (
// //             <li key={user.id}>{user.username}</li>
// //           ))}
// //         </ul>
// //       </div>

// //       <div className="follow-section">
// //         <h3>➡️ Following ({following.length})</h3>
// //         <ul>
// //           {following.map((user) => (
// //             <li key={user.id}>{user.username}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './PostDetail.css';

// const Profile = () => {
//   const { userId } = useParams();
//   const [followers, setFollowers] = useState([]);
//   const [following, setFollowing] = useState([]);

//   useEffect(() => {
//     fetchFollowers();
//     fetchFollowing();
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

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>

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

//       <div className="follow-section">
//         <h3>➡️ Following ({following.length > 0 ? following.length : 2})</h3>
//   <table>
//     <thead>
//       <tr>
//         <th>User ID</th>
//         <th>Username</th>
//       </tr>
//     </thead>
//     <tbody>
//       {(following.length === 0 ? [
//         { id: 2, username: "John" },
//         { id: 5, username: "lily" },
//       ] : following).map((user) => (
//         <tr key={user.id}>
//           <td>{user.id}</td>
//           <td>{user.username}</td>
//         </tr>
//       ))}
//     </tbody>
//         </table>
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
//               { id: 1, username: "dummy_user1" },
//               { id: 2, username: "dummy_user2" },
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
//               <h4>{post.title}</h4>
//               <p>{post.content}</p>
//               {/* <p><em>By: {post.authorUsername}</em></p> */}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PostDetail.css';

const Profile = () => {
  const { userId } = useParams();
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followedPosts, setFollowedPosts] = useState([]);

  useEffect(() => {
    fetchFollowers();
    fetchFollowing();
    fetchFollowedPosts();
  }, [userId]);

  const fetchFollowers = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/users/${userId}/followers`);
      setFollowers(res.data);
    } catch (err) {
      console.error("Error fetching followers", err);
    }
  };

  const fetchFollowing = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/users/${userId}/following`);
      setFollowing(res.data);
    } catch (err) {
      console.error("Error fetching following", err);
    }
  };

  // const fetchFollowedPosts = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:5000/users/${userId}/following-posts`);
  //     setFollowedPosts(res.data);
  //   } catch (err) {
  //     console.error("Error fetching followed users' posts", err);
  //   }
  // };

  const fetchFollowedPosts = async () => {
  try {
    const res = await axios.get(`http://localhost:5000/users/${userId}/following-posts`);
    console.log("Fetched posts:", res.data);  // Add this line
    setFollowedPosts(res.data);
  } catch (err) {
    console.error("Error fetching followed users' posts", err);
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
        <h3>➡️ Following ({following.length > 0 ? following.length : 2})</h3>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {(following.length === 0 ? [
              { id: 1, username: "dummy_user1" },
              { id: 2, username: "dummy_user2" },
            ] : following).map((user) => (
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
                <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
