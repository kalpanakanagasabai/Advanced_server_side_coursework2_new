// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import { useNavigate } from 'react-router-dom'; // Ensure you are using the correct version of 'react-router-dom'
// // // // import './Home.css';

// // // // const Home = () => {
// // // //   const [posts, setPosts] = useState([]);
// // // //   const [editingPostId, setEditingPostId] = useState(null);
// // // //   const [editForm, setEditForm] = useState({
// // // //     title: '',
// // // //     content: '',
// // // //     country_name: '',
// // // //     date_of_visit: ''
// // // //   });
// // // //   const [saveMessage, setSaveMessage] = useState('');
// // // //   const userId = 1;
// // // //   const navigate = useNavigate();

// // // //   // Fetch all posts when the component loads
// // // //   const fetchPosts = async () => {
// // // //     try {
// // // //       const res = await axios.get(`http://localhost:5000/posts/user/${userId}`);
// // // //       setPosts(res.data);
// // // //     } catch (err) {
// // // //       console.error('Failed to fetch posts:', err);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchPosts();
// // // //   }, []);

// // // //   // Start editing the selected post
// // // //   const startEditing = (post) => {
// // // //     setEditingPostId(post.id);
// // // //     setEditForm({
// // // //       title: post.title,
// // // //       content: post.content,
// // // //       country_name: post.country_name,
// // // //       date_of_visit: post.date_of_visit.slice(0, 10), // Format for input
// // // //     });
// // // //   };

// // // //   // Handle changes in the input fields while editing
// // // //   const handleEditChange = (e) => {
// // // //     setEditForm({ ...editForm, [e.target.name]: e.target.value });
// // // //   };

// // // //   // Cancel the editing and reset the form
// // // //   const cancelEditing = () => {
// // // //     setEditingPostId(null);
// // // //     setEditForm({
// // // //       title: '',
// // // //       content: '',
// // // //       country_name: '',
// // // //       date_of_visit: ''
// // // //     });
// // // //   };

// // // //   // Handle saving the edited post
// // // //   const handleSave = async () => {
// // // //     try {
// // // //       const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);

// // // //       if (response.status === 200) {
// // // //         await fetchPosts();
// // // //         setEditingPostId(null);
// // // //         setSaveMessage('✅ Post updated successfully!');
// // // //         setTimeout(() => setSaveMessage(''), 3000); // Clear message after 3 seconds

// // // //         // Redirect to home page immediately after saving
// // // //         navigate('/'); // This should work if everything is set up correctly
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Update failed:', err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="home-container">
// // // //       <h2>My Blog Posts</h2>

// // // //       {saveMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{saveMessage}</p>}

// // // //       {posts.length === 0 ? (
// // // //         <p>No posts found.</p>
// // // //       ) : (
// // // //         posts.map((post) => (
// // // //           <div key={post.id} className="post-card">
// // // //             {editingPostId === post.id ? (
// // // //               <div className="edit-form">
// // // //                 <input
// // // //                   name="title"
// // // //                   value={editForm.title}
// // // //                   onChange={handleEditChange}
// // // //                   placeholder="Title"
// // // //                 />
// // // //                 <textarea
// // // //                   name="content"
// // // //                   value={editForm.content}
// // // //                   onChange={handleEditChange}
// // // //                   placeholder="Content"
// // // //                 />
// // // //                 <input
// // // //                   name="country_name"
// // // //                   value={editForm.country_name}
// // // //                   onChange={handleEditChange}
// // // //                   placeholder="Country"
// // // //                 />
// // // //                 <input
// // // //                   type="date"
// // // //                   name="date_of_visit"
// // // //                   value={editForm.date_of_visit}
// // // //                   onChange={handleEditChange}
// // // //                 />
// // // //                 <button onClick={handleSave}>Save</button>
// // // //                 <button onClick={cancelEditing}>Cancel</button>
// // // //               </div>
// // // //             ) : (
// // // //               <div>
// // // //                 <h3>{post.title}</h3>
// // // //                 <p>{post.content}</p>
// // // //                 <small>
// // // //                   {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// // // //                 </small>
// // // //                 <div>
// // // //                   <button onClick={() => startEditing(post)}>Edit</button>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         ))
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;


// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom'; // Ensure you are using the correct version of 'react-router-dom'
// // // import './Home.css';

// // // const Home = () => {
// // //   const [posts, setPosts] = useState([]);
// // //   const [editingPostId, setEditingPostId] = useState(null);
// // //   const [editForm, setEditForm] = useState({
// // //     title: '',
// // //     content: '',
// // //     country_name: '',
// // //     date_of_visit: ''
// // //   });
// // //   const [saveMessage, setSaveMessage] = useState('');
// // //   const userId = 1;
// // //   const navigate = useNavigate();

// // //   // Fetch all posts when the component loads
// // //   const fetchPosts = async () => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/posts/user/${userId}`);
// // //       setPosts(res.data);
// // //     } catch (err) {
// // //       console.error('Failed to fetch posts:', err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchPosts();
// // //   }, [fetchPosts]); // Added fetchPosts in the dependency array to avoid the warning

// // //   // Start editing the selected post
// // //   const startEditing = (post) => {
// // //     setEditingPostId(post.id);
// // //     setEditForm({
// // //       title: post.title,
// // //       content: post.content,
// // //       country_name: post.country_name,
// // //       date_of_visit: post.date_of_visit.slice(0, 10), // Format for input
// // //     });
// // //   };

// // //   // Handle changes in the input fields while editing
// // //   const handleEditChange = (e) => {
// // //     setEditForm({ ...editForm, [e.target.name]: e.target.value });
// // //   };

// // //   // Cancel the editing and reset the form
// // //   const cancelEditing = () => {
// // //     setEditingPostId(null);
// // //     setEditForm({
// // //       title: '',
// // //       content: '',
// // //       country_name: '',
// // //       date_of_visit: ''
// // //     });
// // //   };

// // //   // Handle saving the edited post
// // //   const handleSave = async () => {
// // //     try {
// // //       const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);

// // //       if (response.status === 200) {
// // //         await fetchPosts();
// // //         setEditingPostId(null);
// // //         setSaveMessage('✅ Post updated successfully!');
// // //         setTimeout(() => setSaveMessage(''), 3000); // Clear message after 3 seconds

// // //         // Redirect to home page immediately after saving
// // //         navigate('/'); // This should work if everything is set up correctly
// // //       }
// // //     } catch (err) {
// // //       console.error('Update failed:', err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="home-container">
// // //       <h2>My Blog Posts</h2>

// // //       {saveMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{saveMessage}</p>}

// // //       {posts.length === 0 ? (
// // //         <p>No posts found.</p>
// // //       ) : (
// // //         posts.map((post) => (
// // //           <div key={post.id} className="post-card">
// // //             {editingPostId === post.id ? (
// // //               <div className="edit-form">
// // //                 <input
// // //                   name="title"
// // //                   value={editForm.title}
// // //                   onChange={handleEditChange}
// // //                   placeholder="Title"
// // //                 />
// // //                 <textarea
// // //                   name="content"
// // //                   value={editForm.content}
// // //                   onChange={handleEditChange}
// // //                   placeholder="Content"
// // //                 />
// // //                 <input
// // //                   name="country_name"
// // //                   value={editForm.country_name}
// // //                   onChange={handleEditChange}
// // //                   placeholder="Country"
// // //                 />
// // //                 <input
// // //                   type="date"
// // //                   name="date_of_visit"
// // //                   value={editForm.date_of_visit}
// // //                   onChange={handleEditChange}
// // //                 />
// // //                 <button onClick={handleSave}>Save</button>
// // //                 <button onClick={cancelEditing}>Cancel</button>
// // //               </div>
// // //             ) : (
// // //               <div>
// // //                 <h3>{post.title}</h3>
// // //                 <p>{post.content}</p>
// // //                 <small>
// // //                   {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// // //                 </small>
// // //                 <div>
// // //                   <button onClick={() => startEditing(post)}>Edit</button>
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         ))
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import './Home.css';
// // // import EditPost from './pages/EditPost';

// // const Home = () => {
// //   const [posts, setPosts] = useState([]);
// //   const [editingPostId, setEditingPostId] = useState(null);
// //   const [editForm, setEditForm] = useState({
// //     title: '',
// //     content: '',
// //     country_name: '',
// //     date_of_visit: ''
// //   });
// //   const [saveMessage, setSaveMessage] = useState('');
// //   const [searchCountry, setSearchCountry] = useState('');
// //   const [searchUsername, setSearchUsername] = useState('');
// //   const userId = 1;
// //   const navigate = useNavigate();

// //   // Fetch all posts when the component loads
// //   const fetchPosts = async () => {
// //     try {
// //       const res = await axios.get(`http://localhost:5000/posts/user/${userId}`);
// //       setPosts(res.data);
// //     } catch (err) {
// //       console.error('Failed to fetch posts:', err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchPosts();
// //   }, [fetchPosts]);

// //   // Start editing the selected post
// //   const startEditing = (post) => {
// //     setEditingPostId(post.id);
// //     setEditForm({
// //       title: post.title,
// //       content: post.content,
// //       country_name: post.country_name,
// //       date_of_visit: post.date_of_visit.slice(0, 10), // Format for input
// //     });
// //   };

// //   // Handle changes in the input fields while editing
// //   const handleEditChange = (e) => {
// //     setEditForm({ ...editForm, [e.target.name]: e.target.value });
// //   };

// //   // Cancel the editing and reset the form
// //   const cancelEditing = () => {
// //     setEditingPostId(null);
// //     setEditForm({
// //       title: '',
// //       content: '',
// //       country_name: '',
// //       date_of_visit: ''
// //     });
// //   };


// //   // <EditPost />
  
// //   // Handle saving the edited post
// //   const handleSave = async () => {
// //     try {
// //       const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);

// //       if (response.status === 200) {
// //         await fetchPosts();
// //         setEditingPostId(null);
// //         setSaveMessage('✅ Post updated successfully!');
// //         setTimeout(() => setSaveMessage(''), 3000); // Clear message after 3 seconds

// //         // Redirect to home page immediately after saving
// //         navigate('/');
// //       }
// //     } catch (err) {
// //       console.error('Update failed:', err);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true }); // if your backend uses cookies
// //     } catch (err) {
// //       console.error('Logout error:', err);
// //     }
  
// //     // Clear any stored tokens or session info
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('userId');
  
// //     // Redirect to login
// //     navigate('/login');
// //   };
  

// //   // Filter posts based on country_name
// //   const filteredByCountry = posts.filter(post =>
// //     post.country_name && post.country_name.toLowerCase().includes(searchCountry.toLowerCase())
// //   );

// //   // Filter posts based on username
// //   const filteredByUsername = posts.filter(post =>
// //     post.username && post.username.toLowerCase().includes(searchUsername.toLowerCase())
// //   );

// //   return (
// //     <div className="home-container">
// //       <h2>My Blog Posts</h2>

// //       <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>


// //       {/* Search input for country */}
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search by country name..."
// //           value={searchCountry}
// //           onChange={(e) => setSearchCountry(e.target.value)} // Update country search term
// //         />
// //       </div>

// //       {/* Search input for username */}
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search by username..."
// //           value={searchUsername}
// //           onChange={(e) => setSearchUsername(e.target.value)} // Update username search term
// //         />
// //       </div>

// //       {saveMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{saveMessage}</p>}

// //       {/* Display filtered posts based on search terms */}
// //       {filteredByCountry.length === 0 && filteredByUsername.length === 0 ? (
// //         <p>No posts found matching your search.</p>
// //       ) : (
// //         [...filteredByCountry, ...filteredByUsername].map((post) => (
// //           <div key={post.id} className="post-card">
// //             {editingPostId === post.id ? (
// //               <div className="edit-form">
// //                 <input
// //                   name="title"
// //                   value={editForm.title}
// //                   onChange={handleEditChange}
// //                   placeholder="Title"
// //                 />
// //                 <textarea
// //                   name="content"
// //                   value={editForm.content}
// //                   onChange={handleEditChange}
// //                   placeholder="Content"
// //                 />
// //                 <input
// //                   name="country_name"
// //                   value={editForm.country_name}
// //                   onChange={handleEditChange}
// //                   placeholder="Country"
// //                 />
// //                 <input
// //                   type="date"
// //                   name="date_of_visit"
// //                   value={editForm.date_of_visit}
// //                   onChange={handleEditChange}
// //                 />
// //                 <button onClick={handleSave}>Save</button>
// //                 <button onClick={cancelEditing}>Cancel</button>
// //               </div>
// //             ) : (
// //               <div>
// //                 <h3>{post.title}</h3>
// //                 <p>{post.content}</p>
// //                 {/* <small>
// //                   {post.username ? post.username : 'Unknown User'} — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// //                 </small> */}

// //                 <small>
// //                   {post. user_id} — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// //                 </small>


// //                 <div>
// //                   <button onClick={() => startEditing(post)}>Edit</button>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [editingPostId, setEditingPostId] = useState(null);
//   const [editForm, setEditForm] = useState({
//     title: '',
//     content: '',
//     country_name: '',
//     date_of_visit: ''
//   });
//   const [saveMessage, setSaveMessage] = useState('');
//   const userId = 1;
//   const navigate = useNavigate();

//   // Fetch all posts when the component loads
//   const fetchPosts = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/posts/user/${userId}`);
//       setPosts(res.data);
//     } catch (err) {
//       console.error('Failed to fetch posts:', err);
//     }
//   };

//   // useEffect(() => {
//   //   fetchPosts();
//   // }, [fetchPosts]);
//   useEffect(() => {
//     fetchPosts();
//   }, []); // <- Remove fetchPosts from the dependency array
  

//   // Start editing the selected post
//   const startEditing = (post) => {
//     setEditingPostId(post.id);
//     setEditForm({
//       title: post.title,
//       content: post.content,
//       country_name: post.country_name,
//       date_of_visit: post.date_of_visit.slice(0, 10), // Format for input
//     });
//   };

//   // Handle changes in the input fields while editing
//   const handleEditChange = (e) => {
//     setEditForm({ ...editForm, [e.target.name]: e.target.value });
//   };

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

//   // Handle saving the edited post
//   const handleSave = async () => {
//     try {
//       const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);

//       if (response.status === 200) {
//         await fetchPosts();
//         setEditingPostId(null);
//         setSaveMessage('✅ Post updated successfully!');
//         setTimeout(() => setSaveMessage(''), 3000); // Clear message after 3 seconds

//         // Redirect to home page immediately after saving
//         navigate('/'); // This should work if everything is set up correctly
//       }
//     } catch (err) {
//       console.error('Update failed:', err);
//     }
//   };

//   // Handle Like Button Click
//   const handleLike = async (postId) => {
//     try {
//       const response = await axios.post(`http://localhost:5000/posts/${postId}/like`);
//       if (response.status === 200) {
//         fetchPosts(); // Re-fetch posts to update like count
//       }
//     } catch (err) {
//       console.error('Like failed:', err);
//     }
//   };

//   // Handle Dislike Button Click
//   const handleDislike = async (postId) => {
//     try {
//       const response = await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
//       if (response.status === 200) {
//         fetchPosts(); // Re-fetch posts to update dislike count
//       }
//     } catch (err) {
//       console.error('Dislike failed:', err);
//     }
//   };

//   return (
//     <div className="home-container">
//       <h2>My Blog Posts</h2>

//       {saveMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{saveMessage}</p>}

//       {posts.length === 0 ? (
//         <p>No posts found.</p>
//       ) : (
//         posts.map((post) => (
//           <div key={post.id} className="post-card">
//             {editingPostId === post.id ? (
//               <div className="edit-form">
//                 <input
//                   name="title"
//                   value={editForm.title}
//                   onChange={handleEditChange}
//                   placeholder="Title"
//                 />
//                 <textarea
//                   name="content"
//                   value={editForm.content}
//                   onChange={handleEditChange}
//                   placeholder="Content"
//                 />
//                 <input
//                   name="country_name"
//                   value={editForm.country_name}
//                   onChange={handleEditChange}
//                   placeholder="Country"
//                 />
//                 <input
//                   type="date"
//                   name="date_of_visit"
//                   value={editForm.date_of_visit}
//                   onChange={handleEditChange}
//                 />
//                 <button onClick={handleSave}>Save</button>
//                 <button onClick={cancelEditing}>Cancel</button>
//               </div>
//             ) : (
//               <div>
//                 <h3>{post.title}</h3>
//                 <p>{post.content}</p>
//                 <small>
//                   {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//                 </small>
//                 <div>
//                   <button onClick={() => startEditing(post)}>Edit</button>
//                   <div>
//                     {/* Like and Dislike buttons */}
//                     <button onClick={() => handleLike(post.id)}>Like</button>
//                     <button onClick={() => handleDislike(post.id)}>Dislike</button>
//                   </div>
//                   <div>
//                     {/* Display total likes and dislikes */}
//                     <p>Likes: {post.likes || 0}</p>
//                     <p>Dislikes: {post.dislikes || 0}</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    content: '',
    country_name: '',
    date_of_visit: ''
  });
  const [saveMessage, setSaveMessage] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const userId = 1;
  const navigate = useNavigate();

  // Fetch user posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/posts/user/${userId}`);
      setPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const startEditing = (post) => {
    setEditingPostId(post.id);
    setEditForm({
      title: post.title,
      content: post.content,
      country_name: post.country_name,
      date_of_visit: post.date_of_visit.slice(0, 10)
    });
  };

  const cancelEditing = () => {
    setEditingPostId(null);
    setEditForm({
      title: '',
      content: '',
      country_name: '',
      date_of_visit: ''
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);
      if (response.status === 200) {
        setSaveMessage('✅ Post updated successfully!');
        setTimeout(() => setSaveMessage(''), 3000);
        cancelEditing();
        fetchPosts();
        navigate('/');
      }
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handleLike = async (postId) => {
    try {
      await axios.post(`http://localhost:5000/posts/${postId}/like`);
      fetchPosts();
    } catch (error) {
      console.error('Like failed:', error);
    }
  };

  const handleDislike = async (postId) => {
    try {
      await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
      fetchPosts();
    } catch (error) {
      console.error('Dislike failed:', error);
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const getSortedPosts = () => {
    const sorted = [...posts];
    switch (sortOption) {
      case 'newest':
        return sorted.sort((a, b) => new Date(b.date_of_visit) - new Date(a.date_of_visit));
      case 'mostLiked':
        return sorted.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      case 'mostCommented':
        return sorted.sort((a, b) => (b.comments_count || 0) - (a.comments_count || 0));
      default:
        return sorted;
    }
  };

  return (
    <div className="home-container">
      <h2>My Blog Posts</h2>

      <div className="sort-section">
        <label>Sort by: </label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="newest">🕒 Newest</option>
          <option value="mostLiked">👍 Most Liked</option>
          <option value="mostCommented">💬 Most Commented</option>
        </select>
      </div>

      {saveMessage && (
        <p className="success-message">{saveMessage}</p>
      )}

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        getSortedPosts().map((post) => (
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
                <div className="form-actions">
                  <button onClick={handleSave}>💾 Save</button>
                  <button onClick={cancelEditing}>❌ Cancel</button>
                </div>
              </div>
            ) : (
              <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p className="post-meta">
                  {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
                </p>
                <div className="post-actions">
                  <button onClick={() => startEditing(post)}>✏️ Edit</button>
                  <button onClick={() => handleLike(post.id)}>👍 Like</button>
                  <button onClick={() => handleDislike(post.id)}>👎 Dislike</button>
                </div>
                <div className="post-stats">
                  <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> | <span>Comments: {post.comments_count || 0}</span>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
