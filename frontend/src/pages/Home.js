// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Ensure you are using the correct version of 'react-router-dom'
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

//   useEffect(() => {
//     fetchPosts();
//   }, []);

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


// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import { useNavigate } from 'react-router-dom'; // Ensure you are using the correct version of 'react-router-dom'
// // // // // // // // import './Home.css';

// // // // // // // // const Home = () => {
// // // // // // // //   const [posts, setPosts] = useState([]);
// // // // // // // //   const [editingPostId, setEditingPostId] = useState(null);
// // // // // // // //   const [editForm, setEditForm] = useState({
// // // // // // // //     title: '',
// // // // // // // //     content: '',
// // // // // // // //     country_name: '',
// // // // // // // //     date_of_visit: ''
// // // // // // // //   });
// // // // // // // //   const [saveMessage, setSaveMessage] = useState('');
// // // // // // // //   const userId = 1;
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   // Fetch all posts when the component loads
// // // // // // // //   const fetchPosts = async () => {
// // // // // // // //     try {
// // // // // // // //       const res = await axios.get(`http://localhost:5000/posts/user/${userId}`);
// // // // // // // //       setPosts(res.data);
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error('Failed to fetch posts:', err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchPosts();
// // // // // // // //   }, [fetchPosts]); // Added fetchPosts in the dependency array to avoid the warning

// // // // // // // //   // Start editing the selected post
// // // // // // // //   const startEditing = (post) => {
// // // // // // // //     setEditingPostId(post.id);
// // // // // // // //     setEditForm({
// // // // // // // //       title: post.title,
// // // // // // // //       content: post.content,
// // // // // // // //       country_name: post.country_name,
// // // // // // // //       date_of_visit: post.date_of_visit.slice(0, 10), // Format for input
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   // Handle changes in the input fields while editing
// // // // // // // //   const handleEditChange = (e) => {
// // // // // // // //     setEditForm({ ...editForm, [e.target.name]: e.target.value });
// // // // // // // //   };

// // // // // // // //   // Cancel the editing and reset the form
// // // // // // // //   const cancelEditing = () => {
// // // // // // // //     setEditingPostId(null);
// // // // // // // //     setEditForm({
// // // // // // // //       title: '',
// // // // // // // //       content: '',
// // // // // // // //       country_name: '',
// // // // // // // //       date_of_visit: ''
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   // Handle saving the edited post
// // // // // // // //   const handleSave = async () => {
// // // // // // // //     try {
// // // // // // // //       const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);

// // // // // // // //       if (response.status === 200) {
// // // // // // // //         await fetchPosts();
// // // // // // // //         setEditingPostId(null);
// // // // // // // //         setSaveMessage('✅ Post updated successfully!');
// // // // // // // //         setTimeout(() => setSaveMessage(''), 3000); // Clear message after 3 seconds

// // // // // // // //         // Redirect to home page immediately after saving
// // // // // // // //         navigate('/'); // This should work if everything is set up correctly
// // // // // // // //       }
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error('Update failed:', err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="home-container">
// // // // // // // //       <h2>My Blog Posts</h2>

// // // // // // // //       {saveMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{saveMessage}</p>}

// // // // // // // //       {posts.length === 0 ? (
// // // // // // // //         <p>No posts found.</p>
// // // // // // // //       ) : (
// // // // // // // //         posts.map((post) => (
// // // // // // // //           <div key={post.id} className="post-card">
// // // // // // // //             {editingPostId === post.id ? (
// // // // // // // //               <div className="edit-form">
// // // // // // // //                 <input
// // // // // // // //                   name="title"
// // // // // // // //                   value={editForm.title}
// // // // // // // //                   onChange={handleEditChange}
// // // // // // // //                   placeholder="Title"
// // // // // // // //                 />
// // // // // // // //                 <textarea
// // // // // // // //                   name="content"
// // // // // // // //                   value={editForm.content}
// // // // // // // //                   onChange={handleEditChange}
// // // // // // // //                   placeholder="Content"
// // // // // // // //                 />
// // // // // // // //                 <input
// // // // // // // //                   name="country_name"
// // // // // // // //                   value={editForm.country_name}
// // // // // // // //                   onChange={handleEditChange}
// // // // // // // //                   placeholder="Country"
// // // // // // // //                 />
// // // // // // // //                 <input
// // // // // // // //                   type="date"
// // // // // // // //                   name="date_of_visit"
// // // // // // // //                   value={editForm.date_of_visit}
// // // // // // // //                   onChange={handleEditChange}
// // // // // // // //                 />
// // // // // // // //                 <button onClick={handleSave}>Save</button>
// // // // // // // //                 <button onClick={cancelEditing}>Cancel</button>
// // // // // // // //               </div>
// // // // // // // //             ) : (
// // // // // // // //               <div>
// // // // // // // //                 <h3>{post.title}</h3>
// // // // // // // //                 <p>{post.content}</p>
// // // // // // // //                 <small>
// // // // // // // //                   {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// // // // // // // //                 </small>
// // // // // // // //                 <div>
// // // // // // // //                   <button onClick={() => startEditing(post)}>Edit</button>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         ))
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Home;

// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import './Home.css';
// // // // // // import EditPost from './pages/EditPost';

// // // // // const Home = () => {
// // // // //   const [posts, setPosts] = useState([]);
// // // // //   const [editingPostId, setEditingPostId] = useState(null);
// // // // //   const [editForm, setEditForm] = useState({
// // // // //     title: '',
// // // // //     content: '',
// // // // //     country_name: '',
// // // // //     date_of_visit: ''
// // // // //   });
// // // // //   const [saveMessage, setSaveMessage] = useState('');
// // // // //   const [searchCountry, setSearchCountry] = useState('');
// // // // //   const [searchUsername, setSearchUsername] = useState('');
// // // // //   const userId = 1;
// // // // //   const navigate = useNavigate();

// // // // //   // Fetch all posts when the component loads
// // // // //   const fetchPosts = async () => {
// // // // //     try {
// // // // //       const res = await axios.get(`http://localhost:5000/posts/user/${userId}`);
// // // // //       setPosts(res.data);
// // // // //     } catch (err) {
// // // // //       console.error('Failed to fetch posts:', err);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchPosts();
// // // // //   }, [fetchPosts]);

// // // // //   // Start editing the selected post
// // // // //   const startEditing = (post) => {
// // // // //     setEditingPostId(post.id);
// // // // //     setEditForm({
// // // // //       title: post.title,
// // // // //       content: post.content,
// // // // //       country_name: post.country_name,
// // // // //       date_of_visit: post.date_of_visit.slice(0, 10), // Format for input
// // // // //     });
// // // // //   };

// // // // //   // Handle changes in the input fields while editing
// // // // //   const handleEditChange = (e) => {
// // // // //     setEditForm({ ...editForm, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   // Cancel the editing and reset the form
// // // // //   const cancelEditing = () => {
// // // // //     setEditingPostId(null);
// // // // //     setEditForm({
// // // // //       title: '',
// // // // //       content: '',
// // // // //       country_name: '',
// // // // //       date_of_visit: ''
// // // // //     });
// // // // //   };


// // // // //   // <EditPost />
  
// // // // //   // Handle saving the edited post
// // // // //   const handleSave = async () => {
// // // // //     try {
// // // // //       const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);

// // // // //       if (response.status === 200) {
// // // // //         await fetchPosts();
// // // // //         setEditingPostId(null);
// // // // //         setSaveMessage('✅ Post updated successfully!');
// // // // //         setTimeout(() => setSaveMessage(''), 3000); // Clear message after 3 seconds

// // // // //         // Redirect to home page immediately after saving
// // // // //         navigate('/');
// // // // //       }
// // // // //     } catch (err) {
// // // // //       console.error('Update failed:', err);
// // // // //     }
// // // // //   };

// // // // //   const handleLogout = async () => {
// // // // //     try {
// // // // //       await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true }); // if your backend uses cookies
// // // // //     } catch (err) {
// // // // //       console.error('Logout error:', err);
// // // // //     }
  
// // // // //     // Clear any stored tokens or session info
// // // // //     localStorage.removeItem('token');
// // // // //     localStorage.removeItem('userId');
  
// // // // //     // Redirect to login
// // // // //     navigate('/login');
// // // // //   };
  

// // // // //   // Filter posts based on country_name
// // // // //   const filteredByCountry = posts.filter(post =>
// // // // //     post.country_name && post.country_name.toLowerCase().includes(searchCountry.toLowerCase())
// // // // //   );

// // // // //   // Filter posts based on username
// // // // //   const filteredByUsername = posts.filter(post =>
// // // // //     post.username && post.username.toLowerCase().includes(searchUsername.toLowerCase())
// // // // //   );

// // // // //   return (
// // // // //     <div className="home-container">
// // // // //       <h2>My Blog Posts</h2>

// // // // //       <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>


// // // // //       {/* Search input for country */}
// // // // //       <div className="search-container">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search by country name..."
// // // // //           value={searchCountry}
// // // // //           onChange={(e) => setSearchCountry(e.target.value)} // Update country search term
// // // // //         />
// // // // //       </div>

// // // // //       {/* Search input for username */}
// // // // //       <div className="search-container">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search by username..."
// // // // //           value={searchUsername}
// // // // //           onChange={(e) => setSearchUsername(e.target.value)} // Update username search term
// // // // //         />
// // // // //       </div>

// // // // //       {saveMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{saveMessage}</p>}

// // // // //       {/* Display filtered posts based on search terms */}
// // // // //       {filteredByCountry.length === 0 && filteredByUsername.length === 0 ? (
// // // // //         <p>No posts found matching your search.</p>
// // // // //       ) : (
// // // // //         [...filteredByCountry, ...filteredByUsername].map((post) => (
// // // // //           <div key={post.id} className="post-card">
// // // // //             {editingPostId === post.id ? (
// // // // //               <div className="edit-form">
// // // // //                 <input
// // // // //                   name="title"
// // // // //                   value={editForm.title}
// // // // //                   onChange={handleEditChange}
// // // // //                   placeholder="Title"
// // // // //                 />
// // // // //                 <textarea
// // // // //                   name="content"
// // // // //                   value={editForm.content}
// // // // //                   onChange={handleEditChange}
// // // // //                   placeholder="Content"
// // // // //                 />
// // // // //                 <input
// // // // //                   name="country_name"
// // // // //                   value={editForm.country_name}
// // // // //                   onChange={handleEditChange}
// // // // //                   placeholder="Country"
// // // // //                 />
// // // // //                 <input
// // // // //                   type="date"
// // // // //                   name="date_of_visit"
// // // // //                   value={editForm.date_of_visit}
// // // // //                   onChange={handleEditChange}
// // // // //                 />
// // // // //                 <button onClick={handleSave}>Save</button>
// // // // //                 <button onClick={cancelEditing}>Cancel</button>
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div>
// // // // //                 <h3>{post.title}</h3>
// // // // //                 <p>{post.content}</p>
// // // // //                 {/* <small>
// // // // //                   {post.username ? post.username : 'Unknown User'} — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// // // // //                 </small> */}

// // // // //                 <small>
// // // // //                   {post. user_id} — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// // // // //                 </small>


// // // // //                 <div>
// // // // //                   <button onClick={() => startEditing(post)}>Edit</button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         ))
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;

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
//   const [sortOption, setSortOption] = useState('newest');
//   const userId = 1;
//   const navigate = useNavigate();

//   // Fetch user posts
//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/posts/user/${userId}`);
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Failed to fetch posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const startEditing = (post) => {
//     setEditingPostId(post.id);
//     setEditForm({
//       title: post.title,
//       content: post.content,
//       country_name: post.country_name,
//       date_of_visit: post.date_of_visit.slice(0, 10)
//     });
//   };

//   const cancelEditing = () => {
//     setEditingPostId(null);
//     setEditForm({
//       title: '',
//       content: '',
//       country_name: '',
//       date_of_visit: ''
//     });
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     try {
//       const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);
//       if (response.status === 200) {
//         setSaveMessage('✅ Post updated successfully!');
//         setTimeout(() => setSaveMessage(''), 3000);
//         cancelEditing();
//         fetchPosts();
//         navigate('/');
//       }
//     } catch (error) {
//       console.error('Update failed:', error);
//     }
//   };

//   const handleLike = async (postId) => {
//     try {
//       await axios.post(`http://localhost:5000/posts/${postId}/like`);
//       fetchPosts();
//     } catch (error) {
//       console.error('Like failed:', error);
//     }
//   };

//   const handleDislike = async (postId) => {
//     try {
//       await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
//       fetchPosts();
//     } catch (error) {
//       console.error('Dislike failed:', error);
//     }
//   };

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//   };

//   const getSortedPosts = () => {
//     const sorted = [...posts];
//     switch (sortOption) {
//       case 'newest':
//         return sorted.sort((a, b) => new Date(b.date_of_visit) - new Date(a.date_of_visit));
//       case 'mostLiked':
//         return sorted.sort((a, b) => (b.likes || 0) - (a.likes || 0));
//       case 'mostCommented':
//         return sorted.sort((a, b) => (b.comments_count || 0) - (a.comments_count || 0));
//       default:
//         return sorted;
//     }
//   };

//   return (
//     <div className="home-container">
//       <h2>My Blog Posts</h2>

//       <div className="sort-section">
//         <label>Sort by: </label>
//         <select value={sortOption} onChange={handleSortChange}>
//           <option value="newest">🕒 Newest</option>
//           <option value="mostLiked">👍 Most Liked</option>
//           <option value="mostCommented">💬 Most Commented</option>
//         </select>
//       </div>

//       {saveMessage && (
//         <p className="success-message">{saveMessage}</p>
//       )}

//       {posts.length === 0 ? (
//         <p>No posts found.</p>
//       ) : (
//         getSortedPosts().map((post) => (
//           <div key={post.id} className="post-card">
//             {editingPostId === post.id ? (
//               <div className="edit-form">
//                 <input
//                   type="text"
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
//                   type="text"
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
//                 <div className="form-actions">
//                   <button onClick={handleSave}>💾 Save</button>
//                   <button onClick={cancelEditing}>❌ Cancel</button>
//                 </div>
//               </div>
//             ) : (
//               <div className="post-content">
//                 <h3>{post.title}</h3>
//                 <p>{post.content}</p>
//                 <p className="post-meta">
//                   {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//                 </p>
//                 <div className="post-actions">
//                   <button onClick={() => startEditing(post)}>✏️ Edit</button>
//                   <button onClick={() => handleLike(post.id)}>👍 Like</button>
//                   <button onClick={() => handleDislike(post.id)}>👎 Dislike</button>
//                 </div>
//                 <div className="post-stats">
//                   <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> | <span>Comments: {post.comments_count || 0}</span>
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
//   const [sortOption, setSortOption] = useState('newest');

//   const [searchCountry, setSearchCountry] = useState('');
//   const [searchUsername, setSearchUsername] = useState('');
//   const [commentInputs, setCommentInputs] = useState({}); // New state for comment inputs
//   const userId = 1;
//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/posts/user/${userId}`);
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Failed to fetch posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, [fetchPosts]);




//   const startEditing = (post) => {
//     setEditingPostId(post.id);
//     setEditForm({
//       title: post.title,
//       content: post.content,
//       country_name: post.country_name,
//       date_of_visit: post.date_of_visit.slice(0, 10)
//     });
//   };

//   const cancelEditing = () => {
//     setEditingPostId(null);
//     setEditForm({
//       title: '',
//       content: '',
//       country_name: '',
//       date_of_visit: ''
//     });
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     try {
//       const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);
//       if (response.status === 200) {
//         setSaveMessage('✅ Post updated successfully!');
//         setTimeout(() => setSaveMessage(''), 3000);
//         cancelEditing();
//         fetchPosts();
//         navigate('/');
//       }
//     } catch (error) {
//       console.error('Update failed:', error);
//     }
//   };

//   const handleLike = async (postId) => {
//     try {
//       await axios.post(`http://localhost:5000/posts/${postId}/like`);
//       fetchPosts();
//     } catch (error) {
//       console.error('Like failed:', error);
//     }
//   };

//   const handleDislike = async (postId) => {
//     try {
//       await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
//       fetchPosts();
//     } catch (error) {
//       console.error('Dislike failed:', error);
//     }
//   };

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//   };

//   const handleCommentChange = (postId, value) => {
//     setCommentInputs((prev) => ({ ...prev, [postId]: value }));
//   };

//   const handleCommentSubmit = async (postId) => {
//     const commentText = commentInputs[postId];
//     if (!commentText) return;

//     try {
//       await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
//         content: commentText,
//         user_id: userId,
//       });
//       setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
//       fetchPosts();
//     } catch (error) {
//       console.error('Comment failed:', error);
//     }
//   };

//   const getSortedPosts = () => {
//     const sorted = [...posts];
//     switch (sortOption) {
//       case 'newest':
//         return sorted.sort((a, b) => new Date(b.date_of_visit) - new Date(a.date_of_visit));
//       case 'mostLiked':
//         return sorted.sort((a, b) => (b.likes || 0) - (a.likes || 0));
//       case 'mostCommented':
//         return sorted.sort((a, b) => (b.comments_count || 0) - (a.comments_count || 0));
//       default:
//         return sorted;
//     }
//   };


//      const handleLogout = async () => {
//         try {
//           await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true }); // if your backend uses cookies
//         } catch (err) {
//           console.error('Logout error:', err);
//         }
      
//         // Clear any stored tokens or session info
//         localStorage.removeItem('token');
//         localStorage.removeItem('userId');
      
//         // Redirect to login
//         navigate('/login');
//       };



// //Filter posts based on country_name
//   const filteredByCountry = posts.filter(post =>
//     post.country_name && post.country_name.toLowerCase().includes(searchCountry.toLowerCase())
//   );

//   // Filter posts based on username
//   const filteredByUsername = posts.filter(post =>
//     post.username && post.username.toLowerCase().includes(searchUsername.toLowerCase())
//   );
      
//   return (
//     <div className="home-container">
//       <h2>My Blog Posts</h2>

      

//       <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>


//        <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by country name..."
//           value={searchCountry}
//           onChange={(e) => setSearchCountry(e.target.value)} // Update country search term
//         />
//       </div>

//        <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by username..."
//           value={searchUsername}
//           onChange={(e) => setSearchUsername(e.target.value)} // Update username search term
//         />
//       </div>

//       <div className="sort-section">
//         <label>Sort by: </label>
//         <select value={sortOption} onChange={handleSortChange}>
//           <option value="newest">🕒 Newest</option>
//           <option value="mostLiked">👍 Most Liked</option>
//           <option value="mostCommented">💬 Most Commented</option>
//         </select>
//       </div>

//       {saveMessage && (
//         <p className="success-message">{saveMessage}</p>
//       )}


//        {filteredByCountry.length === 0 && filteredByUsername.length === 0 ? (
//         <p>No posts found matching your search.</p>
//       ) : (
//         [...filteredByCountry, ...filteredByUsername].map((post) => (
//           <div key={post.id} className="post-card">
//             {editingPostId === post.id ? (
//               <div className="edit-form">
//                 <input
//                   type="text"
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
//                   type="text"
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
//                 <div className="form-actions">
//                   <button onClick={handleSave}>💾 Save</button>
//                   <button onClick={cancelEditing}>❌ Cancel</button>
//                 </div>
//               </div>
//             ) : (
//               <div className="post-content">
//                 <h3>{post.title}</h3>
//                 <p>{post.content}</p>
//                 <p className="post-meta">
//                   {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//                 </p>
//                 <div className="post-actions">
//                   <button onClick={() => startEditing(post)}>✏️ Edit</button>
//                   <button onClick={() => handleLike(post.id)}>👍 Like</button>
//                   <button onClick={() => handleDislike(post.id)}>👎 Dislike</button>
//                 </div>
//                 <div className="post-stats">
//                   <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> | <span>Comments: {post.comments_count || 0}</span>
//                 </div>

//                 {/* Comments Section */}
//                 <div className="comment-section">
//                   <input
//                     type="text"
//                     placeholder="Add a comment..."
//                     value={commentInputs[post.id] || ''}
//                     onChange={(e) => handleCommentChange(post.id, e.target.value)}
//                   />
//                   <button onClick={() => handleCommentSubmit(post.id)}>💬 Post</button>
//                 </div>

//                 {/* Optional: Display existing comments */}
//                 {post.comments && post.comments.length > 0 && (
//                   <div className="comment-list">
//                     <h4>Comments:</h4>
//                     <ul>
//                       {post.comments.map((comment, index) => (
//                         <li key={index}>
//                           <strong>User {comment.user_id}:</strong> {comment.content}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Home;


// // // // // import React, { useEffect, useState, useMemo } from 'react';
// // // // // import axios from 'axios';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import './Home.css';

// // // // // const Home = () => {
// // // // //   const [posts, setPosts] = useState([]);
// // // // //   const [editingPostId, setEditingPostId] = useState(null);
// // // // //   const [editForm, setEditForm] = useState({
// // // // //     title: '',
// // // // //     content: '',
// // // // //     country_name: '',
// // // // //     date_of_visit: ''
// // // // //   });
// // // // //   const [saveMessage, setSaveMessage] = useState('');
// // // // //   const [sortOption, setSortOption] = useState('newest');

// // // // //   const [searchCountry, setSearchCountry] = useState('');
// // // // //   const [searchUsername, setSearchUsername] = useState('');
// // // // //   const [commentInputs, setCommentInputs] = useState({});
// // // // //   // const userId = 1;
  
// // // // // const userId = localStorage.getItem('userId');

// // // // //   const navigate = useNavigate();

// // // // //   const fetchPosts = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(`http://localhost:5000/posts/user/${userId}`);
// // // // //       setPosts(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Failed to fetch posts:', error);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchPosts();
// // // // //   }, []);

  
// // // // //   const startEditing = (post) => {
// // // // //     setEditingPostId(post.id);
// // // // //     setEditForm({
// // // // //       title: post.title,
// // // // //       content: post.content,
// // // // //       country_name: post.country_name,
// // // // //       date_of_visit: post.date_of_visit.slice(0, 10)
// // // // //     });
// // // // //   };

// // // // //   const cancelEditing = () => {
// // // // //     setEditingPostId(null);
// // // // //     setEditForm({
// // // // //       title: '',
// // // // //       content: '',
// // // // //       country_name: '',
// // // // //       date_of_visit: ''
// // // // //     });
// // // // //   };

// // // // //   const handleEditChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setEditForm((prev) => ({ ...prev, [name]: value }));
// // // // //   };

// // // // //   const handleSave = async () => {
// // // // //     try {
// // // // //       const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);
// // // // //       if (response.status === 200) {
// // // // //         setSaveMessage('✅ Post updated successfully!');
// // // // //         setTimeout(() => setSaveMessage(''), 3000);
// // // // //         cancelEditing();
// // // // //         fetchPosts();
// // // // //         navigate('/');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Update failed:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleLike = async (postId) => {
// // // // //     try {
// // // // //       await axios.post(`http://localhost:5000/posts/${postId}/like`);
// // // // //       fetchPosts();
// // // // //     } catch (error) {
// // // // //       console.error('Like failed:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleDislike = async (postId) => {
// // // // //     try {
// // // // //       await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
// // // // //       fetchPosts();
// // // // //     } catch (error) {
// // // // //       console.error('Dislike failed:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleSortChange = (e) => {
// // // // //     setSortOption(e.target.value);
// // // // //   };

// // // // //   const handleCommentChange = (postId, value) => {
// // // // //     setCommentInputs((prev) => ({ ...prev, [postId]: value }));
// // // // //   };

// // // // //   const handleCommentSubmit = async (postId) => {
// // // // //     const commentText = commentInputs[postId];
// // // // //     if (!commentText) return;

// // // // //     try {
// // // // //       await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
// // // // //         content: commentText,
// // // // //         user_id: userId,
// // // // //       });
// // // // //       setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
// // // // //       fetchPosts();
// // // // //     } catch (error) {
// // // // //       console.error('Comment failed:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleLogout = async () => {
// // // // //     try {
// // // // //       await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true });
// // // // //     } catch (err) {
// // // // //       console.error('Logout error:', err);
// // // // //     }
// // // // //     localStorage.removeItem('token');
// // // // //     localStorage.removeItem('userId');
// // // // //     navigate('/login');
// // // // //   };

// // // // //   // Filtering + sorting combined
// // // // //   const filteredAndSortedPosts = useMemo(() => {
// // // // //     let filtered = posts;

// // // // //     if (searchCountry) {
// // // // //       filtered = filtered.filter(post =>
// // // // //         post.country_name?.toLowerCase().includes(searchCountry.toLowerCase())
// // // // //       );
// // // // //     }

// // // // //     if (searchUsername) {
// // // // //       filtered = filtered.filter(post =>
// // // // //         post.username?.toLowerCase().includes(searchUsername.toLowerCase())
// // // // //       );
// // // // //     }

// // // // //     switch (sortOption) {
// // // // //       case 'newest':
// // // // //         return filtered.sort((a, b) => new Date(b.date_of_visit) - new Date(a.date_of_visit));
// // // // //       case 'mostLiked':
// // // // //         return filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
// // // // //       case 'mostCommented':
// // // // //         return filtered.sort((a, b) => (b.comments_count || 0) - (a.comments_count || 0));
// // // // //       default:
// // // // //         return filtered;
// // // // //     }
// // // // //   }, [posts, searchCountry, searchUsername, sortOption]);

// // // // //   return (
// // // // //     <div className="home-container">
// // // // //       <h2>My Blog Posts</h2>
// // // // //       <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>

// // // // //       <div className="search-container">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search by country name..."
// // // // //           value={searchCountry}
// // // // //           onChange={(e) => setSearchCountry(e.target.value)}
// // // // //         />
// // // // //       </div>

// // // // //       <div className="search-container">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search by username..."
// // // // //           value={searchUsername}
// // // // //           onChange={(e) => setSearchUsername(e.target.value)}
// // // // //         />
// // // // //       </div>

// // // // //       <div className="sort-section">
// // // // //         <label>Sort by: </label>
// // // // //         <select value={sortOption} onChange={handleSortChange}>
// // // // //           <option value="newest">🕒 Newest</option>
// // // // //           <option value="mostLiked">👍 Most Liked</option>
// // // // //           <option value="mostCommented">💬 Most Commented</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       {saveMessage && (
// // // // //         <p className="success-message">{saveMessage}</p>
// // // // //       )}

// // // // //       {filteredAndSortedPosts.length === 0 ? (
// // // // //         <p>No posts found matching your search.</p>
// // // // //       ) : (
// // // // //         filteredAndSortedPosts.map((post) => (
// // // // //           <div key={post.id} className="post-card">
// // // // //             {editingPostId === post.id ? (
// // // // //               <div className="edit-form">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="title"
// // // // //                   value={editForm.title}
// // // // //                   onChange={handleEditChange}
// // // // //                   placeholder="Title"
// // // // //                 />
// // // // //                 <textarea
// // // // //                   name="content"
// // // // //                   value={editForm.content}
// // // // //                   onChange={handleEditChange}
// // // // //                   placeholder="Content"
// // // // //                 />
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="country_name"
// // // // //                   value={editForm.country_name}
// // // // //                   onChange={handleEditChange}
// // // // //                   placeholder="Country"
// // // // //                 />
// // // // //                 <input
// // // // //                   type="date"
// // // // //                   name="date_of_visit"
// // // // //                   value={editForm.date_of_visit}
// // // // //                   onChange={handleEditChange}
// // // // //                 />
// // // // //                 <div className="form-actions">
// // // // //                   <button onClick={handleSave}>💾 Save</button>
// // // // //                   <button onClick={cancelEditing}>❌ Cancel</button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="post-content">
// // // // //                 <h3>{post.title}</h3>
// // // // //                 <p>{post.content}</p>
// // // // //                 <p className="post-meta">
// // // // //                  {post. user_id} — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// // // // //                 </p>
// // // // //                 <div className="post-actions">
// // // // //                   <button onClick={() => startEditing(post)}>✏️ Edit</button>
// // // // //                   <button onClick={() => handleLike(post.id)}>👍 Like</button>
// // // // //                   <button onClick={() => handleDislike(post.id)}>👎 Dislike</button>
// // // // //                 </div>
// // // // //                 <div className="post-stats">
// // // // //                   <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> | <span>Comments: {post.comments_count || 0}</span>
// // // // //                 </div>

// // // // //                 <div className="comment-section">
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     placeholder="Write a comment..."
// // // // //                     value={commentInputs[post.id] || ''}
// // // // //                     onChange={(e) => handleCommentChange(post.id, e.target.value)}
// // // // //                   />
// // // // //                   <button onClick={() => handleCommentSubmit(post.id)}>💬 Comment</button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         ))
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;



// // // // // import React, { useEffect, useState, useMemo } from 'react';
// // // // // import axios from 'axios';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import './Home.css';

// // // // // const Home = () => {
// // // // //   const [posts, setPosts] = useState([]);
// // // // //   const [editingPostId, setEditingPostId] = useState(null);
// // // // //   const [editForm, setEditForm] = useState({
// // // // //     title: '',
// // // // //     content: '',
// // // // //     country_name: '',
// // // // //     date_of_visit: ''
// // // // //   });
// // // // //   const [saveMessage, setSaveMessage] = useState('');
// // // // //   const [sortOption, setSortOption] = useState('newest');
// // // // //   const [searchCountry, setSearchCountry] = useState('');
// // // // //   const [searchUsername, setSearchUsername] = useState('');
// // // // //   const [commentInputs, setCommentInputs] = useState({});

// // // // //   const userId = localStorage.getItem('userId');
// // // // //   const navigate = useNavigate();

// // // // //   const fetchPosts = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(`http://localhost:5000/posts`); // 🔄 Get all posts
// // // // //       setPosts(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Failed to fetch posts:', error);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchPosts();
// // // // //   }, []);

// // // // //   const startEditing = (post) => {
// // // // //     setEditingPostId(post.id);
// // // // //     setEditForm({
// // // // //       title: post.title,
// // // // //       content: post.content,
// // // // //       country_name: post.country_name,
// // // // //       date_of_visit: post.date_of_visit.slice(0, 10)
// // // // //     });
// // // // //   };

// // // // //   const cancelEditing = () => {
// // // // //     setEditingPostId(null);
// // // // //     setEditForm({
// // // // //       title: '',
// // // // //       content: '',
// // // // //       country_name: '',
// // // // //       date_of_visit: ''
// // // // //     });
// // // // //   };

// // // // //   const handleEditChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setEditForm((prev) => ({ ...prev, [name]: value }));
// // // // //   };

// // // // //   const handleSave = async () => {
// // // // //     try {
// // // // //       const response = await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);
// // // // //       if (response.status === 200) {
// // // // //         setSaveMessage('✅ Post updated successfully!');
// // // // //         setTimeout(() => setSaveMessage(''), 3000);
// // // // //         cancelEditing();
// // // // //         fetchPosts();
// // // // //         navigate('/');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Update failed:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleLike = async (postId) => {
// // // // //     try {
// // // // //       await axios.post(`http://localhost:5000/posts/${postId}/like`);
// // // // //       fetchPosts();
// // // // //     } catch (error) {
// // // // //       console.error('Like failed:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleDislike = async (postId) => {
// // // // //     try {
// // // // //       await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
// // // // //       fetchPosts();
// // // // //     } catch (error) {
// // // // //       console.error('Dislike failed:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleSortChange = (e) => {
// // // // //     setSortOption(e.target.value);
// // // // //   };

// // // // //   const handleCommentChange = (postId, value) => {
// // // // //     setCommentInputs((prev) => ({ ...prev, [postId]: value }));
// // // // //   };

// // // // //   const handleCommentSubmit = async (postId) => {
// // // // //     const commentText = commentInputs[postId];
// // // // //     if (!commentText) return;

// // // // //     try {
// // // // //       await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
// // // // //         content: commentText,
// // // // //         user_id: userId,
// // // // //       });
// // // // //       setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
// // // // //       fetchPosts();
// // // // //     } catch (error) {
// // // // //       console.error('Comment failed:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleLogout = async () => {
// // // // //     try {
// // // // //       await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true });
// // // // //     } catch (err) {
// // // // //       console.error('Logout error:', err);
// // // // //     }
// // // // //     localStorage.removeItem('token');
// // // // //     localStorage.removeItem('userId');
// // // // //     navigate('/login');
// // // // //   };

// // // // //   const filteredAndSortedPosts = useMemo(() => {
// // // // //     let filtered = posts;

// // // // //     if (searchCountry) {
// // // // //       filtered = filtered.filter(post =>
// // // // //         post.country_name?.toLowerCase().includes(searchCountry.toLowerCase())
// // // // //       );
// // // // //     }

// // // // //     if (searchUsername) {
// // // // //       filtered = filtered.filter(post =>
// // // // //         post.username?.toLowerCase().includes(searchUsername.toLowerCase())
// // // // //       );
// // // // //     }

// // // // //     switch (sortOption) {
// // // // //       case 'newest':
// // // // //         return filtered.sort((a, b) => new Date(b.date_of_visit) - new Date(a.date_of_visit));
// // // // //       case 'mostLiked':
// // // // //         return filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
// // // // //       case 'mostCommented':
// // // // //         return filtered.sort((a, b) => (b.comments_count || 0) - (a.comments_count || 0));
// // // // //       default:
// // // // //         return filtered;
// // // // //     }
// // // // //   }, [posts, searchCountry, searchUsername, sortOption]);

// // // // //   return (
// // // // //     <div className="home-container">
// // // // //       <h2>All Blog Posts</h2>
// // // // //       <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>

// // // // //       <div className="search-container">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search by country name..."
// // // // //           value={searchCountry}
// // // // //           onChange={(e) => setSearchCountry(e.target.value)}
// // // // //         />
// // // // //       </div>

// // // // //       <div className="search-container">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search by username..."
// // // // //           value={searchUsername}
// // // // //           onChange={(e) => setSearchUsername(e.target.value)}
// // // // //         />
// // // // //       </div>

// // // // //       <div className="sort-section">
// // // // //         <label>Sort by: </label>
// // // // //         <select value={sortOption} onChange={handleSortChange}>
// // // // //           <option value="newest">🕒 Newest</option>
// // // // //           <option value="mostLiked">👍 Most Liked</option>
// // // // //           <option value="mostCommented">💬 Most Commented</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       {saveMessage && <p className="success-message">{saveMessage}</p>}

// // // // //       {filteredAndSortedPosts.length === 0 ? (
// // // // //         <p>No posts found matching your search.</p>
// // // // //       ) : (
// // // // //         filteredAndSortedPosts.map((post) => (
// // // // //           <div key={post.id} className="post-card">
// // // // //             {editingPostId === post.id ? (
// // // // //               <div className="edit-form">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="title"
// // // // //                   value={editForm.title}
// // // // //                   onChange={handleEditChange}
// // // // //                   placeholder="Title"
// // // // //                 />
// // // // //                 <textarea
// // // // //                   name="content"
// // // // //                   value={editForm.content}
// // // // //                   onChange={handleEditChange}
// // // // //                   placeholder="Content"
// // // // //                 />
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="country_name"
// // // // //                   value={editForm.country_name}
// // // // //                   onChange={handleEditChange}
// // // // //                   placeholder="Country"
// // // // //                 />
// // // // //                 <input
// // // // //                   type="date"
// // // // //                   name="date_of_visit"
// // // // //                   value={editForm.date_of_visit}
// // // // //                   onChange={handleEditChange}
// // // // //                 />
// // // // //                 <div className="form-actions">
// // // // //                   <button onClick={handleSave}>💾 Save</button>
// // // // //                   <button onClick={cancelEditing}>❌ Cancel</button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="post-content">
// // // // //                 <h3>{post.title}</h3>
// // // // //                 <p>{post.content}</p>
// // // // //                 <p className="post-meta">
// // // // //                   <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// // // // //                 </p>
// // // // //                 <div className="post-actions">
// // // // //                   {/* <button onClick={() => startEditing(post)}>✏️ Edit</button> */}
// // // // //                   <button onClick={() => handleLike(post.id)}>👍 Like</button>
// // // // //                   <button onClick={() => handleDislike(post.id)}>👎 Dislike</button>
// // // // //                 </div>
// // // // //                 <div className="post-stats">
// // // // //                   <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> | <span>Comments: {post.comments_count || 0}</span>
// // // // //                 </div>
// // // // //                 <div className="comment-section">
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     placeholder="Write a comment..."
// // // // //                     value={commentInputs[post.id] || ''}
// // // // //                     onChange={(e) => handleCommentChange(post.id, e.target.value)}
// // // // //                   />
// // // // //                   <button onClick={() => handleCommentSubmit(post.id)}>💬 Comment</button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         ))
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;


// // // // // import React, { useEffect, useState, useMemo } from 'react';
// // // // // import axios from 'axios';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import './Home.css';

// // // // // const Home = () => {
// // // // //   const [posts, setPosts] = useState([]);
// // // // //   const [editingPostId, setEditingPostId] = useState(null);
// // // // //   const [editForm, setEditForm] = useState({
// // // // //     title: '',
// // // // //     content: '',
// // // // //     country_name: '',
// // // // //     date_of_visit: ''
// // // // //   });
// // // // //   const [saveMessage, setSaveMessage] = useState('');
// // // // //   const [sortOption, setSortOption] = useState('newest');
// // // // //   const [searchCountry, setSearchCountry] = useState('');
// // // // //   const [searchUsername, setSearchUsername] = useState('');
// // // // //   const [commentInputs, setCommentInputs] = useState({});
// // // // //   const [following, setFollowing] = useState([]);

// // // // //   const userId = localStorage.getItem('userId');
// // // // //   const navigate = useNavigate();

// // // // //   const fetchPosts = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(`http://localhost:5000/posts`);
// // // // //       setPosts(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Failed to fetch posts:', error);
// // // // //     }
// // // // //   };

// // // // //   const fetchFollowing = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(`http://localhost:5000/users/${userId}/following`);
// // // // //       setFollowing(response.data); // Assume response is an array of userIds
// // // // //     } catch (error) {
// // // // //       console.error('Failed to fetch following list:', error);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchPosts();
// // // // //     if (userId) fetchFollowing();
// // // // //   }, []);

// // // // //   const handleFollow = async (targetUserId) => {
// // // // //     try {
// // // // //       await axios.post(`http://localhost:5000/users/${targetUserId}/follow`, {
// // // // //         followerId: userId
// // // // //       });
// // // // //       fetchFollowing();
// // // // //     } catch (error) {
// // // // //       console.error('Follow failed:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleUnfollow = async (targetUserId) => {
// // // // //     try {
// // // // //       await axios.post(`http://localhost:5000/users/${targetUserId}/unfollow`, {
// // // // //         followerId: userId
// // // // //       });
// // // // //       fetchFollowing();
// // // // //     } catch (error) {
// // // // //       console.error('Unfollow failed:', error);
// // // // //     }
// // // // //   };

// // // // //   const isFollowing = (targetUserId) => following.includes(targetUserId);

// // // // //   const handleLogout = async () => {
// // // // //     try {
// // // // //       await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true });
// // // // //     } catch (err) {
// // // // //       console.error('Logout error:', err);
// // // // //     }
// // // // //     localStorage.removeItem('token');
// // // // //     localStorage.removeItem('userId');
// // // // //     navigate('/login');
// // // // //   };

// // // // //   const filteredAndSortedPosts = useMemo(() => {
// // // // //     let filtered = posts;

// // // // //     if (searchCountry) {
// // // // //       filtered = filtered.filter(post =>
// // // // //         post.country_name?.toLowerCase().includes(searchCountry.toLowerCase())
// // // // //       );
// // // // //     }

// // // // //     if (searchUsername) {
// // // // //       filtered = filtered.filter(post =>
// // // // //         post.username?.toLowerCase().includes(searchUsername.toLowerCase())
// // // // //       );
// // // // //     }

// // // // //     switch (sortOption) {
// // // // //       case 'newest':
// // // // //         return filtered.sort((a, b) => new Date(b.date_of_visit).getTime() - new Date(a.date_of_visit).getTime());
// // // // //       case 'mostLiked':
// // // // //         return filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
// // // // //       case 'mostCommented':
// // // // //         return filtered.sort((a, b) => (b.comments_count || 0) - (a.comments_count || 0));
// // // // //       default:
// // // // //         return filtered;
// // // // //     }
// // // // //   }, [posts, searchCountry, searchUsername, sortOption]);

// // // // //   const handleLike = async (postId) => {
// // // // //   console.log(`Liked post: ${postId}`);
// // // // //    try {
// // // // //       await axios.post(`http://localhost:5000/posts/${postId}/like`);
// // // // //       fetchPosts();
// // // // //     } catch (error) {
// // // // //       console.error('Like failed:', error);
// // // // //     }
// // // // // };

// // // // // const handleDislike = async (postId) => {
// // // // //   console.log(`Disliked post: ${postId}`);
// // // // //   try {
// // // // //       const response = await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
// // // // //       if (response.status === 200) {
// // // // //         fetchPosts(); // Re-fetch posts to update dislike count
// // // // //       }
// // // // //     } catch (err) {
// // // // //       console.error('Dislike failed:', err);
// // // // //     }
// // // // // };

// // // // // const handleCommentSubmit = async (postId) => {
// // // // //   const comment = commentInputs[postId];
// // // // //   if (!comment) return;

// // // // //   try {
// // // // //     await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
// // // // //       userId,
// // // // //       content: comment,
// // // // //     });
// // // // //     console.log(`Commented on post: ${postId}`);
// // // // //     setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
// // // // //     fetchPosts(); // Refresh post list to show new comment
// // // // //   } catch (error) {
// // // // //     console.error('Failed to submit comment:', error);
// // // // //   }
// // // // // };

// // // // //   return (
// // // // //     <div className="home-container">
// // // // //       <h2>All Blog Posts</h2>
// // // // //       <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>

// // // // //       <div className="search-container">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search by country name..."
// // // // //           value={searchCountry}
// // // // //           onChange={(e) => setSearchCountry(e.target.value)}
// // // // //         />
// // // // //       </div>

// // // // //       <div className="search-container">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search by username..."
// // // // //           value={searchUsername}
// // // // //           onChange={(e) => setSearchUsername(e.target.value)}
// // // // //         />
// // // // //       </div>

// // // // //       <div className="sort-section">
// // // // //         <label>Sort by: </label>
// // // // //         <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
// // // // //           <option value="newest">🕒 Newest</option>
// // // // //           <option value="mostLiked">👍 Most Liked</option>
// // // // //           <option value="mostCommented">💬 Most Commented</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       {saveMessage && <p className="success-message">{saveMessage}</p>}

// // // // //       {filteredAndSortedPosts.length === 0 ? (
// // // // //         <p>No posts found matching your search.</p>
// // // // //       ) : (
// // // // //         filteredAndSortedPosts.map((post) => (
// // // // //           <div key={post.id} className="post-card">
// // // // //             <div className="post-content">
// // // // //               <h3>{post.title}</h3>
// // // // //               <p>{post.content}</p>
// // // // //               <p className="post-meta">
// // // // //                 <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// // // // //               </p>
// // // // //               {post.user_id !== userId && (
// // // // //                 <div className="follow-button">
// // // // //                   {isFollowing(post.user_id) ? (
// // // // //                     <button onClick={() => handleUnfollow(post.user_id)}>Unfollow</button>
// // // // //                   ) : (
// // // // //                     <button onClick={() => handleFollow(post.user_id)}>Follow</button>
// // // // //                   )}
// // // // //                 </div>
// // // // //               )}
// // // // //               <div className="post-actions">
// // // // //                 <button onClick={() => handleLike(post.id)}>👍 Like</button>
// // // // //                 <button onClick={() => handleDislike(post.id)}>👎 Dislike</button>
// // // // //               </div>
// // // // //               <div className="post-stats">
// // // // //                 <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> | <span>Comments: {post.comments_count || 0}</span>
// // // // //               </div>
// // // // //               <div className="comment-section">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="Write a comment..."
// // // // //                   value={commentInputs[post.id] || ''}
// // // // //                   onChange={(e) => setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))}
// // // // //                 />
// // // // //                 <button onClick={() => handleCommentSubmit(post.id)}>💬 Comment</button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;


// // // // import React, { useEffect, useState, useMemo } from 'react';
// // // // import axios from 'axios';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import './Home.css';

// // // // const Home = () => {
// // // //   const [posts, setPosts] = useState([]);
// // // //   const [commentInputs, setCommentInputs] = useState({});
// // // //   const [postComments, setPostComments] = useState({});
// // // //   const [sortOption, setSortOption] = useState('newest');
// // // //   const [searchCountry, setSearchCountry] = useState('');
// // // //   const [searchUsername, setSearchUsername] = useState('');
// // // //   const [following, setFollowing] = useState([]);
// // // //   const [followMessage, setFollowMessage] = useState('');


// // // //   const userId = localStorage.getItem('userId');
// // // //   const navigate = useNavigate();

// // // //   const fetchPosts = async () => {
// // // //     try {
// // // //       const response = await axios.get(`http://localhost:5000/posts`);
// // // //       setPosts(response.data);
// // // //     } catch (error) {
// // // //       console.error('Failed to fetch posts:', error);
// // // //     }
// // // //   };

// // // //   const fetchFollowing = async () => {
// // // //     try {
// // // //       const response = await axios.get(`http://localhost:5000/users/${userId}/following`);
// // // //       setFollowing(response.data);
// // // //     } catch (error) {
// // // //       console.error('Failed to fetch following list:', error);
// // // //     }
// // // //   };

// // // //   const fetchCommentsForPost = async (postId) => {
// // // //     try {
// // // //       const response = await axios.get(`http://localhost:5000/posts/${postId}/comments`);
// // // //       setPostComments(prev => ({ ...prev, [postId]: response.data }));
// // // //     } catch (error) {
// // // //       console.error(`Failed to fetch comments for post ${postId}:`, error);
// // // //     }
// // // //   };

// // // //   const fetchAllComments = async () => {
// // // //     for (const post of posts) {
// // // //       await fetchCommentsForPost(post.id);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchPosts();
// // // //     if (userId) fetchFollowing();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (posts.length > 0) fetchAllComments();
// // // //   }, [posts]);

// // // //   // const handleFollow = async (targetUserId) => {
// // // //   //   try {
// // // //   //     await axios.post(`http://localhost:5000/users/${targetUserId}/follow`, { followerId: userId });
// // // //   //     fetchFollowing();
// // // //   //   } catch (error) {
// // // //   //     console.error('Follow failed:', error);
// // // //   //   }
// // // //   // };

// // // //   // const handleUnfollow = async (targetUserId) => {
// // // //   //   try {
// // // //   //     await axios.post(`http://localhost:5000/users/${targetUserId}/unfollow`, { followerId: userId });
// // // //   //     fetchFollowing();
// // // //   //   } catch (error) {
// // // //   //     console.error('Unfollow failed:', error);
// // // //   //   }
// // // //   // };

// // // //   const handleFollow = async (targetUserId) => {
// // // //   try {
// // // //     await axios.post(`http://localhost:5000/users/${targetUserId}/follow`, {
// // // //       followerId: userId
// // // //     });
// // // //     setFollowMessage('Followed successfully.');
// // // //     fetchFollowing();
// // // //     setTimeout(() => setFollowMessage(''), 3000); // Clear message after 3 seconds
// // // //   } catch (error) {
// // // //     console.error('Follow failed:', error);
// // // //   }
// // // // };

// // // // const handleUnfollow = async (targetUserId) => {
// // // //   try {
// // // //     await axios.post(`http://localhost:5000/users/${targetUserId}/unfollow`, {
// // // //       followerId: userId
// // // //     });
// // // //     setFollowMessage('Unfollowed successfully.');
// // // //     fetchFollowing();
// // // //     setTimeout(() => setFollowMessage(''), 3000);
// // // //   } catch (error) {
// // // //     console.error('Unfollow failed:', error);
// // // //   }
// // // // };


// // // //   const isFollowing = (targetUserId) => following.includes(targetUserId);

// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true });
// // // //     } catch (err) {
// // // //       console.error('Logout error:', err);
// // // //     }
// // // //     localStorage.removeItem('token');
// // // //     localStorage.removeItem('userId');
// // // //     navigate('/login');
// // // //   };

// // // //   const filteredAndSortedPosts = useMemo(() => {
// // // //     let filtered = posts;

// // // //     if (searchCountry) {
// // // //       filtered = filtered.filter(post =>
// // // //         post.country_name?.toLowerCase().includes(searchCountry.toLowerCase())
// // // //       );
// // // //     }

// // // //     if (searchUsername) {
// // // //       filtered = filtered.filter(post =>
// // // //         post.username?.toLowerCase().includes(searchUsername.toLowerCase())
// // // //       );
// // // //     }

// // // //     switch (sortOption) {
// // // //       case 'newest':
// // // //         return filtered.sort((a, b) => new Date(b.date_of_visit).getTime() - new Date(a.date_of_visit).getTime());
// // // //       case 'mostLiked':
// // // //         return filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
// // // //       case 'mostCommented':
// // // //         return filtered.sort((a, b) => (b.comments_count || 0) - (a.comments_count || 0));
// // // //       default:
// // // //         return filtered;
// // // //     }
// // // //   }, [posts, searchCountry, searchUsername, sortOption]);

  

// // // //   const handleLike = async (postId) => {
// // // //     try {
// // // //       await axios.post(`http://localhost:5000/posts/${postId}/like`);
// // // //       fetchPosts();
// // // //     } catch (error) {
// // // //       console.error('Like failed:', error);
// // // //     }
// // // //   };

// // // //   const handleDislike = async (postId) => {
// // // //     try {
// // // //       const response = await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
// // // //       if (response.status === 200) {
// // // //         fetchPosts();
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Dislike failed:', err);
// // // //     }
// // // //   };

// // // //   const handleCommentSubmit = async (postId) => {
// // // //     const comment = commentInputs[postId];
// // // //     if (!comment) return;

// // // //     try {
// // // //       await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
// // // //         userId,
// // // //         content: comment,
// // // //       });
// // // //       setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
// // // //       fetchPosts();
// // // //       fetchCommentsForPost(postId);
// // // //     } catch (error) {
// // // //       console.error('Failed to submit comment:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="home-container">
// // // //       <h2>All Blog Posts</h2>
// // // //       <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>

// // // //       <div className="search-container">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search by country name..."
// // // //           value={searchCountry}
// // // //           onChange={(e) => setSearchCountry(e.target.value)}
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search by username..."
// // // //           value={searchUsername}
// // // //           onChange={(e) => setSearchUsername(e.target.value)}
// // // //         />
// // // //         <label>Sort by: </label>
// // // //         <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
// // // //           <option value="newest">🕒 Newest</option>
// // // //           <option value="mostLiked">👍 Most Liked</option>
// // // //           <option value="mostCommented">💬 Most Commented</option>
// // // //         </select>
// // // //       </div>

// // // //       {filteredAndSortedPosts.length === 0 ? (
// // // //         <p>No posts found matching your search.</p>
// // // //       ) : (
// // // //         filteredAndSortedPosts.map((post) => (
// // // //           <div key={post.id} className="post-card">
// // // //             <div className="post-content">
// // // //               <h3>{post.title}</h3>
// // // //               <p>{post.content}</p>
// // // //               <p className="post-meta">
// // // //                 <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// // // //               </p>
// // // //                     {post.user_id !== userId && (
// // // //                       <div className="follow-button">
// // // //                         <button onClick={() => handleFollow(post.user_id)}>Follow</button>
// // // //                         <button onClick={() => handleUnfollow(post.user_id)}>Unfollow</button>
// // // //                       </div>
// // // //                     )}
// // // //               <div className="post-actions">
// // // //                 <button onClick={() => handleLike(post.id)}>👍 Like</button>
// // // //                 <button onClick={() => handleDislike(post.id)}>👎 Dislike</button>
// // // //               </div>
// // // //               <div className="post-stats">
// // // //                 <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> | <span>Comments: {postComments[post.id]?.length || 0}</span>
// // // //               </div>

// // // //               {/* Comment Input */}
// // // //               <div className="comment-section">
// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="Write a comment..."
// // // //                   value={commentInputs[post.id] || ''}
// // // //                   onChange={(e) => setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))}
// // // //                 />
// // // //                 <button onClick={() => handleCommentSubmit(post.id)}>💬 Comment</button>
// // // //               </div>

// // // //               {/* Show Comments */}
// // // //               <div className="comment-list">
// // // //                 {postComments[post.id]?.map((comment, idx) => (
// // // //                   <div key={idx} className="comment">
// // // //                     <strong>{comment.username}</strong>: {comment.content}
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ))
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;


// // // import React, { useEffect, useState, useMemo } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
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
// // //   const [sortOption, setSortOption] = useState('newest');
// // //   const [searchCountry, setSearchCountry] = useState('');
// // //   const [searchUsername, setSearchUsername] = useState('');
// // //   const [commentInputs, setCommentInputs] = useState({});
// // //   const [following, setFollowing] = useState([]);
// // //   const [followMessage, setFollowMessage] = useState('');

// // //   const userId = localStorage.getItem('userId');
// // //   const navigate = useNavigate();

// // //   const fetchPosts = async () => {
// // //     try {
// // //       const response = await axios.get(`http://localhost:5000/posts`);
// // //       setPosts(response.data);
// // //     } catch (error) {
// // //       console.error('Failed to fetch posts:', error);
// // //     }
// // //   };

// // //   const fetchFollowing = async () => {
// // //     try {
// // //       const response = await axios.get(`http://localhost:5000/users/${userId}/following`);
// // //       setFollowing(response.data);
// // //     } catch (error) {
// // //       console.error('Failed to fetch following list:', error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchPosts();
// // //     if (userId) fetchFollowing();
// // //   }, []);

// // //   const handleFollow = async (targetUserId) => {
// // //     try {
// // //       await axios.post(`http://localhost:5000/users/${targetUserId}/follow`, {
// // //         followerId: userId
// // //       });
// // //       setFollowMessage('✅ Followed successfully.');
// // //       fetchFollowing();
// // //       setTimeout(() => setFollowMessage(''), 3000);
// // //     } catch (error) {
// // //       console.error('Follow failed:', error);
// // //     }
// // //   };

// // //   const handleUnfollow = async (targetUserId) => {
// // //     try {
// // //       await axios.post(`http://localhost:5000/users/${targetUserId}/unfollow`, {
// // //         followerId: userId
// // //       });
// // //       setFollowMessage('🚫 Unfollowed successfully.');
// // //       fetchFollowing();
// // //       setTimeout(() => setFollowMessage(''), 3000);
// // //     } catch (error) {
// // //       console.error('Unfollow failed:', error);
// // //     }
// // //   };

// // //   const isFollowing = (targetUserId) => following.includes(targetUserId);

// // //   const handleLogout = async () => {
// // //     try {
// // //       await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true });
// // //     } catch (err) {
// // //       console.error('Logout error:', err);
// // //     }
// // //     localStorage.removeItem('token');
// // //     localStorage.removeItem('userId');
// // //     navigate('/login');
// // //   };

// // //   const filteredAndSortedPosts = useMemo(() => {
// // //     let filtered = posts;

// // //     if (searchCountry) {
// // //       filtered = filtered.filter(post =>
// // //         post.country_name?.toLowerCase().includes(searchCountry.toLowerCase())
// // //       );
// // //     }

// // //     if (searchUsername) {
// // //       filtered = filtered.filter(post =>
// // //         post.username?.toLowerCase().includes(searchUsername.toLowerCase())
// // //       );
// // //     }

// // //     switch (sortOption) {
// // //       case 'newest':
// // //         return filtered.sort((a, b) => new Date(b.date_of_visit).getTime() - new Date(a.date_of_visit).getTime());
// // //       case 'mostLiked':
// // //         return filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
// // //       case 'mostCommented':
// // //         return filtered.sort((a, b) => (b.comments_count || 0) - (a.comments_count || 0));
// // //       default:
// // //         return filtered;
// // //     }
// // //   }, [posts, searchCountry, searchUsername, sortOption]);

// // //   const handleLike = async (postId) => {
// // //     try {
// // //       await axios.post(`http://localhost:5000/posts/${postId}/like`);
// // //       fetchPosts();
// // //     } catch (error) {
// // //       console.error('Like failed:', error);
// // //     }
// // //   };

// // //   const handleDislike = async (postId) => {
// // //     try {
// // //       const response = await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
// // //       if (response.status === 200) {
// // //         fetchPosts();
// // //       }
// // //     } catch (err) {
// // //       console.error('Dislike failed:', err);
// // //     }
// // //   };

// // //   const handleCommentSubmit = async (postId) => {
// // //     const comment = commentInputs[postId];
// // //     if (!comment) return;

// // //     try {
// // //       await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
// // //         userId,
// // //         content: comment,
// // //       });
// // //       setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
// // //       fetchPosts();
// // //     } catch (error) {
// // //       console.error('Failed to submit comment:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="home-container">
// // //       <h2>All Blog Posts</h2>
// // //       <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>

// // //       <div className="search-container">
// // //         <input
// // //           type="text"
// // //           placeholder="Search by country name..."
// // //           value={searchCountry}
// // //           onChange={(e) => setSearchCountry(e.target.value)}
// // //         />
// // //       </div>

// // //       <div className="search-container">
// // //         <input
// // //           type="text"
// // //           placeholder="Search by username..."
// // //           value={searchUsername}
// // //           onChange={(e) => setSearchUsername(e.target.value)}
// // //         />
// // //       </div>

// // //       <div className="sort-section">
// // //         <label>Sort by: </label>
// // //         <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
// // //           <option value="newest">🕒 Newest</option>
// // //           <option value="mostLiked">👍 Most Liked</option>
// // //           <option value="mostCommented">💬 Most Commented</option>
// // //         </select>
// // //       </div>

// // //       {saveMessage && <p className="success-message">{saveMessage}</p>}
// // //       {followMessage && <p className="success-message">{followMessage}</p>}

// // //       {filteredAndSortedPosts.length === 0 ? (
// // //         <p>No posts found matching your search.</p>
// // //       ) : (
// // //         filteredAndSortedPosts.map((post) => (
// // //           <div key={post.id} className="post-card">
// // //             <div className="post-content">
// // //               <h3>{post.title}</h3>
// // //               <p>{post.content}</p>
// // //               <p className="post-meta">
// // //                 <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// // //               </p>

// // //               {post.user_id !== userId && (
// // //                 <div className="follow-buttons">
// // //                   <button onClick={() => handleFollow(post.user_id)}>Follow</button>
// // //                   <button onClick={() => handleUnfollow(post.user_id)}>Unfollow</button>
// // //                 </div>
// // //               )}

// // //               <div className="post-actions">
// // //                 <button onClick={() => handleLike(post.id)}>👍 Like</button>
// // //                 <button onClick={() => handleDislike(post.id)}>👎 Dislike</button>
// // //               </div>

// // //               <div className="post-stats">
// // //                 <span>Likes: {post.likes || 0}</span> | 
// // //                 <span> Dislikes: {post.dislikes || 0}</span> | 
// // //                 <span> Comments: {post.comments_count || 0}</span>
// // //               </div>

// // //               <div className="comment-section">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Write a comment..."
// // //                   value={commentInputs[post.id] || ''}
// // //                   onChange={(e) => setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))}
// // //                 />
// // //                 <button onClick={() => handleCommentSubmit(post.id)}>💬 Comment</button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import React, { useEffect, useState, useMemo } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import './Home.css';

// // const Home = () => {
// //   const [posts, setPosts] = useState([]);
// //   const [sortOption, setSortOption] = useState('newest');
// //   const [searchCountry, setSearchCountry] = useState('');
// //   const [searchUsername, setSearchUsername] = useState('');
// //   const [commentInputs, setCommentInputs] = useState({});
// //   const [following, setFollowing] = useState([]);
// //   const [followMessage, setFollowMessage] = useState('');

// //   const userId = localStorage.getItem('userId');
// //   const navigate = useNavigate();

// //   const fetchPosts = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:5000/posts`);
// //       setPosts(response.data);
// //     } catch (error) {
// //       console.error('Failed to fetch posts:', error);
// //     }
// //   };

// //   const fetchFollowing = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:5000/users/${userId}/following`);
// //       setFollowing(response.data);
// //     } catch (error) {
// //       console.error('Failed to fetch following list:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchPosts();
// //     if (userId) fetchFollowing();
// //   }, []);

// //   const handleFollow = async (targetUserId) => {
// //     try {
// //       await axios.post(`http://localhost:5000/users/${targetUserId}/follow`, {
// //         followerId: userId
// //       });
// //       fetchFollowing();
// //       setFollowMessage('✅ Followed successfully.');
// //       setTimeout(() => setFollowMessage(''), 3000);
// //     } catch (error) {
// //       console.error('Follow failed:', error);
// //     }
// //   };

// //   const handleUnfollow = async (targetUserId) => {
// //     try {
// //       await axios.post(`http://localhost:5000/users/${targetUserId}/unfollow`, {
// //         followerId: userId
// //       });
// //       fetchFollowing();
// //       setFollowMessage('🚫 Unfollowed successfully.');
// //       setTimeout(() => setFollowMessage(''), 3000);
// //     } catch (error) {
// //       console.error('Unfollow failed:', error);
// //     }
// //   };

// //   const isFollowing = (targetUserId) => following.includes(targetUserId);

// //   const handleLogout = async () => {
// //     try {
// //       await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true });
// //     } catch (err) {
// //       console.error('Logout error:', err);
// //     }
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('userId');
// //     navigate('/login');
// //   };

// //   const filteredAndSortedPosts = useMemo(() => {
// //     let filtered = posts;

// //     if (searchCountry) {
// //       filtered = filtered.filter(post =>
// //         post.country_name?.toLowerCase().includes(searchCountry.toLowerCase())
// //       );
// //     }

// //     if (searchUsername) {
// //       filtered = filtered.filter(post =>
// //         post.username?.toLowerCase().includes(searchUsername.toLowerCase())
// //       );
// //     }

// //     switch (sortOption) {
// //       case 'newest':
// //         return filtered.sort((a, b) => new Date(b.date_of_visit) - new Date(a.date_of_visit));
// //       case 'mostLiked':
// //         return filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
// //       case 'mostCommented':
// //         return filtered.sort((a, b) => (b.comments_count || 0) - (a.comments_count || 0));
// //       default:
// //         return filtered;
// //     }
// //   }, [posts, searchCountry, searchUsername, sortOption]);

// //   const handleLike = async (postId) => {
// //     try {
// //       await axios.post(`http://localhost:5000/posts/${postId}/like`);
// //       fetchPosts();
// //     } catch (error) {
// //       console.error('Like failed:', error);
// //     }
// //   };

// //   const handleDislike = async (postId) => {
// //     try {
// //       const response = await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
// //       if (response.status === 200) {
// //         fetchPosts();
// //       }
// //     } catch (err) {
// //       console.error('Dislike failed:', err);
// //     }
// //   };

// //   const handleCommentSubmit = async (postId) => {
// //     const comment = commentInputs[postId];
// //     if (!comment) return;

// //     try {
// //       await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
// //         userId,
// //         content: comment,
// //       });
// //       setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
// //       fetchPosts();
// //     } catch (error) {
// //       console.error('Failed to submit comment:', error);
// //     }
// //   };

// //   return (
// //     <div className="home-container">
// //       <h2>All Blog Posts</h2>
// //       <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>

// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search by country name..."
// //           value={searchCountry}
// //           onChange={(e) => setSearchCountry(e.target.value)}
// //         />
// //       </div>

// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search by username..."
// //           value={searchUsername}
// //           onChange={(e) => setSearchUsername(e.target.value)}
// //         />
// //       </div>

// //       <div className="sort-section">
// //         <label>Sort by: </label>
// //         <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
// //           <option value="newest">🕒 Newest</option>
// //           <option value="mostLiked">👍 Most Liked</option>
// //           <option value="mostCommented">💬 Most Commented</option>
// //         </select>
// //       </div>

// //       {followMessage && (
// //         <div className="follow-message">{followMessage}</div>
// //       )}

// //       {filteredAndSortedPosts.length === 0 ? (
// //         <p>No posts found matching your search.</p>
// //       ) : (
// //         filteredAndSortedPosts.map((post) => (
// //           <div key={post.id} className="post-card">
// //             <div className="post-content">
// //               <h3>{post.title}</h3>
// //               <p>{post.content}</p>
// //               <p className="post-meta">
// //                 <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
// //               </p>
// //               {post.user_id !== userId && (
// //                 <div className="follow-button">
// //                   <button onClick={() => handleFollow(post.user_id)}>Follow</button>
// //                   <button onClick={() => handleUnfollow(post.user_id)}>Unfollow</button>
// //                 </div>
// //               )}
// //               <div className="post-actions">
// //                 <button onClick={() => handleLike(post.id)}>👍 Like</button>
// //                 <button onClick={() => handleDislike(post.id)}>👎 Dislike</button>
// //               </div>
// //               <div className="post-stats">
// //                 <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> | <span>Comments: {post.comments_count || 0}</span>
// //               </div>
// //               <div className="comment-section">
// //                 <input
// //                   type="text"
// //                   placeholder="Write a comment..."
// //                   value={commentInputs[post.id] || ''}
// //                   onChange={(e) => setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))}
// //                 />
// //                 <button onClick={() => handleCommentSubmit(post.id)}>💬 Comment</button>
// //               </div>
// //             </div>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;



// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [sortOption, setSortOption] = useState('newest');
//   const [searchCountry, setSearchCountry] = useState('');
//   const [searchUsername, setSearchUsername] = useState('');
//   const [commentInputs, setCommentInputs] = useState({});
//   const [following, setFollowing] = useState([]);
//   const [followers, setFollowers] = useState([]);
//   const [followMessage, setFollowMessage] = useState('');

//   const userId = localStorage.getItem('userId');
//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/posts`);
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Failed to fetch posts:', error);
//     }
//   };

//   // const fetchFollowing = async () => {
//   //   try {
//   //     const response = await axios.get(`http://localhost:5000/users/${userId}/following`);
//   //     setFollowing(response.data);
//   //   } catch (error) {
//   //     console.error('Failed to fetch following list:', error);
//   //   }
//   // };

//   const fetchFollowers = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/users/${userId}/followers`);
//       setFollowers(response.data);
//     } catch (error) {
//       console.error('Failed to fetch followers list:', error);
//     }
//   };
  
//   const fetchFollowing = async () => {
//   console.log(`Fetching following list for userId: ${userId}`);
//   try {
//     const response = await axios.get(`http://localhost:5000/users/${userId}/following`);
//     setFollowing(response.data);
//   } catch (error) {
//     console.error('Failed to fetch following list:', error.response ? error.response.data : error.message);
//   }
// };


//   useEffect(() => {
//     fetchPosts();
//     if (userId) {
//       fetchFollowing();
//       fetchFollowers();
//     }
//   }, []);

//   const handleFollow = async (targetUserId) => {
//     try {
//       await axios.post(`http://localhost:5000/users/${targetUserId}/follow`, {
//         followerId: userId
//       });
//       fetchFollowing();
//       fetchFollowers();
//       setFollowMessage('✅ Followed successfully.');
//       setTimeout(() => setFollowMessage(''), 3000);
//     } catch (error) {
//       console.error('Follow failed:', error);
//     }
//   };

//   const handleUnfollow = async (targetUserId) => {
//     try {
//       await axios.post(`http://localhost:5000/users/${targetUserId}/unfollow`, {
//         followerId: userId
//       });
//       fetchFollowing();
//       fetchFollowers();
//       setFollowMessage('🚫 Unfollowed successfully.');
//       setTimeout(() => setFollowMessage(''), 3000);
//     } catch (error) {
//       console.error('Unfollow failed:', error);
//     }
//   };

//   const isFollowing = (targetUserId) => {
//     return following.some(user => user.id === targetUserId);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true });
//     } catch (err) {
//       console.error('Logout error:', err);
//     }
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     navigate('/login');
//   };

//   const filteredAndSortedPosts = useMemo(() => {
//     let filtered = posts;

//     if (searchCountry) {
//       filtered = filtered.filter(post =>
//         post.country_name?.toLowerCase().includes(searchCountry.toLowerCase())
//       );
//     }

//     if (searchUsername) {
//       filtered = filtered.filter(post =>
//         post.username?.toLowerCase().includes(searchUsername.toLowerCase())
//       );
//     }

//     switch (sortOption) {
//       case 'newest':
//         return filtered.sort((a, b) => new Date(b.date_of_visit) - new Date(a.date_of_visit));
//       case 'mostLiked':
//         return filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
//       case 'mostCommented':
//         return filtered.sort((a, b) => (b.comments_count || 0) - (a.comments_count || 0));
//       default:
//         return filtered;
//     }
//   }, [posts, searchCountry, searchUsername, sortOption]);

//   const handleLike = async (postId) => {
//     try {
//       await axios.post(`http://localhost:5000/posts/${postId}/like`);
//       fetchPosts();
//     } catch (error) {
//       console.error('Like failed:', error);
//     }
//   };

//   const handleDislike = async (postId) => {
//     try {
//       const response = await axios.post(`http://localhost:5000/posts/${postId}/dislike`);
//       if (response.status === 200) {
//         fetchPosts();
//       }
//     } catch (err) {
//       console.error('Dislike failed:', err);
//     }
//   };

//   const handleCommentSubmit = async (postId) => {
//     const comment = commentInputs[postId];
//     if (!comment) return;

//     try {
//       await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
//         userId,
//         content: comment,
//       });
//       setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
//       fetchPosts();
//     } catch (error) {
//       console.error('Failed to submit comment:', error);
//     }
//   };

//   return (
//     <div className="home-container">
//       <h2>All Blog Posts</h2>
//       <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by country name..."
//           value={searchCountry}
//           onChange={(e) => setSearchCountry(e.target.value)}
//         />
//       </div>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by username..."
//           value={searchUsername}
//           onChange={(e) => setSearchUsername(e.target.value)}
//         />
//       </div>

//       <div className="sort-section">
//         <label>Sort by: </label>
//         <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
//           <option value="newest">🕒 Newest</option>
//           <option value="mostLiked">👍 Most Liked</option>
         
//         </select>
//       </div>

//       {/* <div className="follow-info">
//         <p>👥 Following: {following.length}</p>
//         <p>👤 Followers: {followers.length}</p>
//       </div> */}

//       {followMessage && (
//         <div className="follow-message">{followMessage}</div>
//       )}

//       {filteredAndSortedPosts.length === 0 ? (
//         <p>No posts found matching your search.</p>
//       ) : (
//         filteredAndSortedPosts.map((post) => (
//           <div key={post.id} className="post-card">
//             <div className="post-content">
//               <h3>{post.title}</h3>
//               <p>{post.content}</p>
//               <p className="post-meta">
//                 <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//               </p>
//               {post.user_id !== userId && (
//                 <div className="follow-button">
//                   {isFollowing(post.user_id) ? (
//                     <button onClick={() => handleUnfollow(post.user_id)}>Unfollow</button>
//                   ) : (
//                     <button onClick={() => handleFollow(post.user_id)}>Follow</button>
//                   )}
//                 </div>
//               )}
//               <div className="post-actions">
//                 <button onClick={() => handleLike(post.id)}>👍 Like</button>
//                 <button onClick={() => handleDislike(post.id)}>👎 Dislike</button>
//               </div>
//               <div className="post-stats">
//                 <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> 
//               </div>
//               {/* <div className="comment-section">
//                 <input
//                   type="text"
//                   placeholder="Write a comment..."
//                   value={commentInputs[post.id] || ''}
//                   onChange={(e) => setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))}
//                 />
//                 <button onClick={() => handleCommentSubmit(post.id)}>💬 Comment</button>
//               </div> */}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [sortOption, setSortOption] = useState('newest');
  const [searchCountry, setSearchCountry] = useState('');
  const [searchUsername, setSearchUsername] = useState('');
  const [commentInputs, setCommentInputs] = useState({});
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [followMessage, setFollowMessage] = useState('');
   const [editingPostId, setEditingPostId] = useState(null);

  // NEW: holds REST Countries info per post
  const [countryInfo, setCountryInfo] = useState({}); // postId -> { flag, capital, currency, languages }

  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  // 1) Your existing fetchPosts
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  // 2) Following / followers as before...
  const fetchFollowers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${userId}/followers`);
      setFollowers(response.data);
    } catch (error) {
      console.error('Failed to fetch followers list:', error);
    }
  };
  const fetchFollowing = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${userId}/following`);
      setFollowing(response.data);
    } catch (error) {
      console.error('Failed to fetch following list:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
    if (userId) {
      fetchFollowing();
      fetchFollowers();
    }
  }, []);

  // 3) NEW: fetch REST Countries once posts arrive
  useEffect(() => {
    if (!posts.length) return;
    posts.forEach(post => {
      if (countryInfo[post.id]) return; // already fetched
      const name = encodeURIComponent(post.country_name);
      const info = countryInfo[post.id]
      axios
        .get(`https://restcountries.com/v3.1/name/${name}?fields=capital,currencies,languages,flags`)
        .then(res => {
          const c = res.data[0] || {};
          setCountryInfo(prev => ({
            ...prev,
            [post.id]: {
              flag: c.flags?.svg || null,
              capital: c.capital?.[0] || '—',
              currency: Object.values(c.currencies || {})
                .map(cur => `${cur.name} (${cur.symbol})`)
                .join(', ') || '—',
              languages: Object.values(c.languages || {}).join(', ') || '—',
            }
          }));
        })
        .catch(() => {
          // on any lookup failure, still record placeholders
          setCountryInfo(prev => ({
            ...prev,
            [post.id]: { flag: null, capital: '—', currency: '—', languages: '—' }
          }));
        });
    });
  }, [posts, countryInfo]);

  // 4) Rest of your existing handlers (follow/unfollow/like/dislike...)
  // const handleFollow = async targetUserId => {
  //   try {
  //     await axios.post(`http://localhost:5000/users/${targetUserId}/follow`, { followerId: userId });
  //     fetchFollowing(); fetchFollowers();
  //     setFollowMessage('✅ Followed successfully.');
  //     setTimeout(() => setFollowMessage(''), 3000);
  //   } catch (error) {
  //     console.error('Follow failed:', error);
  //   }
  // };

//   const handleFollow = async targetUserId => {
//   console.log(`Attempting to follow user ${targetUserId} by user ${userId}`);
//   try {
//     await axios.post(`http://localhost:5000/users/${targetUserId}/follow`, { followerId: userId });
//     fetchFollowing(); fetchFollowers();
//     setFollowMessage('✅ Followed successfully.');
//     setTimeout(() => setFollowMessage(''), 3000);
//   } catch (error) {
//     console.error('❌ Follow failed:', error.response?.data || error.message);
//   }
// };

//   const handleUnfollow = async targetUserId => {
//     try {
//       await axios.post(`http://localhost:5000/users/${targetUserId}/unfollow`, { followerId: userId });
//       fetchFollowing(); fetchFollowers();
//       setFollowMessage('🚫 Unfollowed successfully.');
//       setTimeout(() => setFollowMessage(''), 3000);
//     } catch (error) {
//       console.error('Unfollow failed:', error);
//     }
//   };

 const handleFollow = async (targetUserId) => {
    try {
      await axios.post(`http://localhost:5000/users/${targetUserId}/follow`, {
        followerId: userId
      });
      fetchFollowing();
    } catch (error) {
      console.error('Follow failed:', error);
    }
  };

  const handleUnfollow = async (targetUserId) => {
    try {
      await axios.post(`http://localhost:5000/users/${targetUserId}/unfollow`, {
        followerId: userId
      });
      fetchFollowing();
    } catch (error) {
      console.error('Unfollow failed:', error);
    }
  };
  const isFollowing = id => following.some(u => u.id === id);
  const handleLogout = async () => {
    try { await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true }); }
    catch (_) {}
    localStorage.clear();
    navigate('/login');
  };
  const handleLike = async postId => { try { await axios.post(`http://localhost:5000/posts/${postId}/like`); fetchPosts(); } catch (_) {} };
  const handleDislike = async postId => { try { await axios.post(`http://localhost:5000/posts/${postId}/dislike`); fetchPosts(); } catch (_) {} };
  const handleCommentSubmit = async postId => {
    const comment = commentInputs[postId];
    if (!comment) return;
    try {
      await axios.post(`http://localhost:5000/posts/${postId}/comments`, { userId, content: comment });
      setCommentInputs(prev => ({ ...prev, [postId]: '' }));
      fetchPosts();
    } catch (_) {}
  };
 const handlePost = () => {
    navigate('/Register')
  };

   const handleCreatePost = () => {
    navigate('/Profile')
  };
  // 5) Your existing filtering & sorting
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts;
    if (searchCountry) filtered = filtered.filter(p => p.country_name?.toLowerCase().includes(searchCountry.toLowerCase()));
    if (searchUsername) filtered = filtered.filter(p => p.username?.toLowerCase().includes(searchUsername.toLowerCase()));
    switch (sortOption) {
      case 'newest': return filtered.sort((a, b) => new Date(b.date_of_visit) - new Date(a.date_of_visit));
      case 'mostLiked': return filtered.sort((a, b) => (b.likes||0) - (a.likes||0));
      default: return filtered;
    }
  }, [posts, searchCountry, searchUsername, sortOption]);

  return (
    
    <div className="home-container">
      <div style={{
  backgroundColor: '#e3f2fd',
  padding: '1.5rem',
  borderRadius: '10px',
  marginBottom: '1.5rem',
  textAlign: 'center',
  color: '#0d47a1',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
}}>
  <h1 style={{ marginBottom: '0.5rem' }}>✈️ Explore. Share. Connect.</h1>
  <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    Welcome to the Travel Blog Hub! Whether you’re a globe-trotter or just love discovering new cultures,
    this is your space to share unforgettable journeys and discover stories from around the world.
  </p>
  <button
    onClick={handlePost}
    style={{
      backgroundColor: '#1976d2',
      color: 'white',
      padding: '0.6rem 1.2rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold'
    }}
  >
    📝 Share Your Story
  </button>
</div>

      <h2>All Blog Posts</h2>
      <button onClick={handleLogout} style={{ float:'right' }}>Logout</button>

      <div className="search-container">
        <input placeholder="Search by country"    value={searchCountry}  onChange={e=>setSearchCountry(e.target.value)} />
        <input placeholder="Search by author"     value={searchUsername} onChange={e=>setSearchUsername(e.target.value)} />
        <select value={sortOption} onChange={e=>setSortOption(e.target.value)}>
          <option value="newest">🕒 Newest</option>
          <option value="mostLiked">👍 Most Liked</option>
        </select>
      </div>

      {followMessage && <div className="follow-message">{followMessage}</div>}

      {filteredAndSortedPosts.map(post => {
        const info = countryInfo[post.id] || {};
        return (
          <div key={post.id} className="post-card">
            <div className="post-content">
              <h3>{post.title}</h3>
              {/* NEW: inline‐styled small flag */}
              {info.flag && (
                <img
                  src={info.flag}
                  alt={`Flag of ${post.country_name}`}
                  style={{
                    display: 'block',
                    margin: '0.5em auto',
                    maxWidth: '250px',
                    height: 'auto'
                  }}
                />
              )}
              <p>{post.content}</p>
              {/* NEW: display country details */}
              <p className="post-meta">
                <strong>Capital:</strong> {info.capital} <br/>
                <strong>Currency:</strong> {info.currency} <br/>
                <strong>Languages:</strong> {info.languages} <br/>
                <strong>Visited:</strong> {new Date(post.date_of_visit).toLocaleDateString()}
                {/* <h3>{post.title}</h3>
               <p>{post.content}</p> */}
               <p className="post-meta">
                 <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
               </p>
              </p>

              {post.user_id !== userId && (
                <div className="follow-button">
                   <button onClick={() => handleFollow(post.user_id)}>Follow</button>
                  <button onClick={() => handleUnfollow(post.user_id)}>Unfollow</button>
                  {/* {isFollowing(post.user_id)
                    ? <button onClick={()=>handleUnfollow(post.user_id)}>Unfollow</button>
                    : <button onClick={()=>handleFollow(post.user_id)}>Follow</button>} */}
                </div>
              )}

<div className="post-content">
  {/* <h3>{post.title}</h3> */}
  
  {editingPostId === post.id ? (
    <>
      {/* <textarea
        value={editedContent}
        onChange={e => setEditedContent(e.target.value)}
        rows={4}
        cols={50}
      />
      <div>
        <button onClick={() => handleSaveEdit(post.id)}>💾 Save</button>
        <button onClick={() => setEditingPostId(null)}>❌ Cancel</button>
      </div> */}
    </>
  ) : (
    <>
      {/* <p>{post.content}</p> */}
      {post.user_id === parseInt(userId) && (
        <>
          {/* <button onClick={() => handleEdit(post.id, post.content)}>✏️ Edit</button> */}
          <button onClick={handleCreatePost}>Edit </button>
          {/* <button onClick={() => handleDelete(post.id)}>🗑️ Delete</button> */}
        </>
      )}
    </>
  )}
</div>

              <div className="post-actions">
                <button onClick={()=>handleLike(post.id)}>👍 Like</button>
                <button onClick={()=>handleDislike(post.id)}>👎 Dislike</button>
              </div>
              <div className="post-stats">
                <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> 
              </div>
           </div>
          </div>
        );
      })}
      {filteredAndSortedPosts.length===0 && <p>No posts found matching your search.</p>}
    </div>
  );
};

export default Home;
