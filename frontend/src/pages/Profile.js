// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const ProfilePage = () => {
// //   const [user, setUser] = useState(null);       // User info
// //   const [posts, setPosts] = useState([]);       // User posts
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (!token) {
// //       setError('You are not logged in.');
// //       return;
// //     }

// //     // Fetch user profile info
// //     const fetchUserProfile = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/user/profile', {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         setUser(response.data);
// //       } catch (err) {
// //         console.error('Error fetching user info:', err);
// //         setError('Failed to load user profile.');
// //       }
// //     };

// //     // Fetch user's posts
// //     const fetchUserPosts = async () => {
// //       try {
// //         const userId = localStorage.getItem('userId');
// //         const response = await axios.get(`http://localhost:5000/posts/user/${userId}`, {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         setPosts(response.data);
// //       } catch (err) {
// //         console.error('Error fetching posts:', err);
// //         setError('Failed to fetch posts.');
// //       }
// //     };

// //     fetchUserProfile();
// //     fetchUserPosts();
// //   }, []);

// //   const handleCreatePost = () => {
// //     navigate('/create');
// //   };

// //   const handleEditPost = (postId) => {
// //     navigate(`/edit/${postId}`);
// //   };

// //   const handleDeletePost = async (postId) => {
// //     const confirm = window.confirm('Are you sure you want to delete this post?');
// //     if (!confirm) return;

// //     try {
// //       const token = localStorage.getItem('token');
// //       await axios.delete(`http://localhost:5000/posts/${postId}`, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       setPosts(posts.filter((post) => post.id !== postId));
// //       alert('Post deleted successfully.');
// //     } catch (err) {
// //       console.error('Delete error:', err);
// //       setError('Failed to delete post.');
// //     }
// //   };

// //   return (
// //     <div className="profile-page">
// //       <h1>👤 User Profile</h1>

// //       {error && <p className="error">{error}</p>}

// //       {user ? (
// //         <div className="user-details">
// //           <p><strong>Name:</strong> {user.name}</p>
// //           <p><strong>Username:</strong> {user.username}</p>
// //           <p><strong>Email:</strong> {user.email}</p>
// //         </div>
// //       ) : (
// //         <p>Loading user info...</p>
// //       )}

// //       <div className="create-post">
// //         <button onClick={handleCreatePost}>➕ Create New Post</button>
// //       </div>

// //       <h2>Your Posts</h2>
// //       {posts.length === 0 ? (
// //         <p>No posts yet.</p>
// //       ) : (
// //         posts.map((post) => (
// //           <div key={post.id} className="post-card">
// //             <h3>{post.title}</h3>
// //             <p>{post.content}</p>
// //             <div className="actions">
// //               <button onClick={() => handleEditPost(post.id)}>✏️ Edit</button>
// //               <button onClick={() => handleDeletePost(post.id)}>🗑️ Delete</button>
// //             </div>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default ProfilePage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);       // User info
//   const [posts, setPosts] = useState([]);       // User posts
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You are not logged in.');
//       return;
//     }

//     // Fetch user profile info
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/user/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(response.data);
//       } catch (err) {
//         console.error('Error fetching user info:', err);
//         // setError('Failed to load user profile.');
//       }
//     };

//     // Fetch user's posts
//     const fetchUserPosts = async () => {
//       try {
//         const userId = localStorage.getItem('userId');
//         const response = await axios.get(`http://localhost:5000/posts/user/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setPosts(response.data);
//       } catch (err) {
//         console.error('Error fetching posts:', err);
//         setError('Failed to fetch posts.');
//       }
//     };

//     fetchUserProfile();
//     fetchUserPosts();
//   }, []);

//   const handleCreatePost = () => {
//     navigate('/create');
//   };

//   const handleEditPost = (postId) => {
//     navigate(`/edit/${postId}`);
//   };

//   const handleDeletePost = async (postId) => {
//     const confirm = window.confirm('Are you sure you want to delete this post?');
//     if (!confirm) return;

//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:5000/posts/${postId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setPosts(posts.filter((post) => post.id !== postId));
//       alert('Post deleted successfully.');
//     } catch (err) {
//       console.error('Delete error:', err);
//       setError('Failed to delete post.');
//     }
//   };

//   return (
//     <div className="profile-page">
//       <h1>👤 User Profile</h1>

//       {error && <p className="error">{error}</p>}

//       {user ? (
//         <div className="user-details">
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Username:</strong> {user.username}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//         </div>
//       ) : (
//         <p></p>
//       )}

//       <div className="create-post">
//         <button onClick={handleCreatePost}>➕ Create New Post</button>
//       </div>

//       <h2>Your Posts</h2>
//       {posts.length === 0 ? (
//         <p>No posts yet.</p>
//       ) : (
//         posts.map((post) => (
//           <div key={post.id} className="post-card">
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//             <p className="post-meta">
//                   <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//                 </p>
//             <div className="actions">
//               <button onClick={() => handleEditPost(post.id)}>✏️ Edit</button>
//               <button onClick={() => handleDeletePost(post.id)}>🗑️ Delete</button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [editingPostId, setEditingPostId] = useState(null);
//    const [saveMessage, setSaveMessage] = useState('');
//   const [editForm, setEditForm] = useState({
//     title: '',
//     content: '',
//     country_name: '',
//     date_of_visit: '',
//   });
  const [error, setError] = useState('');
  const navigate = useNavigate();


// // // // // //   // Start editing the selected post
//   const startEditing = (post) => {
//     setEditingPostId(post.id);
//     setEditForm({
//       title: post.title,
//       content: post.content,
//       country_name: post.country_name,
//       date_of_visit: post.date_of_visit.slice(0, 10), // Format for input
//     });
//   };

// // // // // //   // Handle changes in the input fields while editing
  

//   // Cancel the editing and reset the form
//   const cancelEditing = () => {
//     setEditingPostId(null);
//     setEditForm({
//       title: '',
//       content: '',
//       country_name: '',
//       date_of_visit: ''
//     });
//   };


// // // // // //   // <EditPost />
  
// // // // // //   // Handle saving the edited post
//   const handleSave = async () => {
//   try {
//     const token = localStorage.getItem('token');
//     const response = await axios.put(
//       `http://localhost:5000/posts/${editingPostId}`,
//       editForm,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (response.status === 200) {
//       // Update the local state
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === editingPostId ? { ...post, ...editForm } : post
//         )
//       );

//       setEditingPostId(null);
//       setSaveMessage('✅ Post updated successfully!');
//       setTimeout(() => setSaveMessage(''), 3000);
//     }
//   } catch (err) {
//     console.error('Update failed:', err);
//     setError('Failed to update the post.');
//   }
// };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You are not logged in.');
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (err) {
        console.error('Error fetching user info:', err);
      }
    };

    const fetchUserPosts = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:5000/posts/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch posts.');
      }
    };

    fetchUserProfile();
    fetchUserPosts();
  }, []);

  const handleCreatePost = () => {
    navigate('/create');
  };


   const handlePost = () => {
    navigate('/PostDetail');
  };

//   // const handleEditClick = (post) => {
//   //   setEditingPostId(post.id);
//   //   setEditForm({
//   //     title: post.title,
//   //     content: post.content,
//   //     country_name: post.country_name,
//   //     date_of_visit: post.date_of_visit.split('T')[0], // format date for input[type="date"]
//   //   });
//   // };

//   const handleEditChange = (e) => {
//     setEditForm({ ...editForm, [e.target.name]: e.target.value });
//   };

//   // const handleEditSubmit = async (postId) => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     const response = await axios.put(
//   //       `http://localhost:5000/posts/${postId}`,
//   //       editForm,
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       }
//   //     );
//   //     setPosts((prevPosts) =>
//   //       prevPosts.map((post) => (post.id === postId ? response.data : post))
//   //     );
//   //     setEditingPostId(null);
//   //     alert('Post updated successfully.');
//   //   } catch (err) {
//   //     console.error('Update error:', err);
//   //     setError('Failed to update post.');
//   //   }
//   // };

//   const handleDeletePost = async (postId) => {
//   const confirm = window.confirm('Are you sure you want to delete this post?');
//   if (!confirm) return;

//   try {
//     const token = localStorage.getItem('token');
//     await axios.delete(`http://localhost:5000/posts/${postId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     setPosts(posts.filter((post) => post.id !== postId));
//     alert('Post deleted successfully.');
//   } catch (err) {
//     console.error('Delete error:', err.response?.data || err.message);
    
//     // setError('Failed to delete post.');
//   }
// };
const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    content: '',
    country_name: '',
    date_of_visit: ''
  });
  const [saveMessage, setSaveMessage] = useState('');

  // const userId = 1;

  // const fetchPosts = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:5000/posts/user/${userId}`);
  //     setPosts(res.data);
  //   } catch (err) {
  //     console.error('Failed to fetch posts:', err);
  //   }
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const startEditing = (post) => {
    setEditingPostId(post.id);
    setEditForm({
      title: post.title,
      content: post.content,
      country_name: post.country_name,
      date_of_visit: post.date_of_visit.slice(0, 10), // Format for input
    });
    setSaveMessage('');
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const cancelEditing = () => {
    setEditingPostId(null);
    setEditForm({
      title: '',
      content: '',
      country_name: '',
      date_of_visit: ''
    });
    setSaveMessage('');
  };

  const handleDeletePost = async (postId) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this post?');
  if (!confirmDelete) return;

  try {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Remove post from local state
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    alert('✅ Post deleted successfully!');
  } catch (err) {
    console.error('Delete failed:', err);
    alert('❌ Failed to delete the post.');
  }
};


  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);
      // await fetchPosts();
      setEditingPostId(null);
      setSaveMessage('✅ Post updated successfully!');

       window.location.reload();

      // Hide message after 3 seconds
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (err) {
      console.error('Update failed:', err);
      // setSaveMessage('❌ Failed to update post.');
       window.location.reload();
    }
  };

  return (
    <div className="profile-page">
      <h1>👤 User Profile</h1>

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="user-details">
          {/* <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p> */}
        </div>
      )}

      <div className="create-post">
        <button onClick={handleCreatePost}>➕ Create New Post</button>

         <button onClick={handlePost}>➕ View followers</button>
      </div>

      <h2>Your Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            {editingPostId === post.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="title"
                  value={editForm.title}
                  onChange={handleEditChange}
                  placeholder="Title"
                />
                <textarea
                  name="content"
                  value={editForm.content}
                  onChange={handleEditChange}
                  placeholder="Content"
                />
                <input
                  type="text"
                  name="country_name"
                  value={editForm.country_name}
                  onChange={handleEditChange}
                  placeholder="Country"
                />
                <input
                  type="date"
                  name="date_of_visit"
                  value={editForm.date_of_visit}
                  onChange={handleEditChange}
                />
                {/* <button onClick={() => handleEditSubmit(post.id)}>💾 Save</button> */}
                 <button onClick={handleSave}>💾 Save</button>
                <button onClick={() => setEditingPostId(null)}>❌ Cancel</button>
              </div>
            ) : (
              <>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p className="post-meta">
                  <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
                </p>
                <div className="actions">
                  <button onClick={() => startEditing(post)}>✏️ Edit</button>
                  <button onClick={() => handleDeletePost(post.id)}>🗑️ Delete</button>
                </div>
              </>
              
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ProfilePage;



