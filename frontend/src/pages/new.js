 import React, { useEffect, useState, useMemo } from 'react';
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
//   const [editingPostId, setEditingPostId] = useState(null);
// const [editedContent, setEditedContent] = useState('');
// const [editForm, setEditForm] = useState({
//     title: '',
//     content: '',
//     country_name: '',
//     date_of_visit: ''
//   });
//   const [saveMessage, setSaveMessage] = useState('');


//   // NEW: holds REST Countries info per post
//   const [countryInfo, setCountryInfo] = useState({}); // postId -> { flag, capital, currency, languages }

//   const userId = localStorage.getItem('userId');
//   const navigate = useNavigate();

//   // 1) Your existing fetchPosts
//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/posts`);
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Failed to fetch posts:', error);
//     }
//   };

//   // 2) Following / followers as before...
//   const fetchFollowers = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/users/${userId}/followers`);
//       setFollowers(response.data);
//     } catch (error) {
//       console.error('Failed to fetch followers list:', error);
//     }
//   };
//   const fetchFollowing = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/users/${userId}/following`);
//       setFollowing(response.data);
//     } catch (error) {
//       console.error('Failed to fetch following list:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//     if (userId) {
//       fetchFollowing();
//       fetchFollowers();
//     }
//   }, []);

//   // 3) NEW: fetch REST Countries once posts arrive
//   useEffect(() => {
//     if (!posts.length) return;
//     posts.forEach(post => {
//       if (countryInfo[post.id]) return; // already fetched
//       const name = encodeURIComponent(post.country_name);
//       axios
//         .get(`https://restcountries.com/v3.1/name/${name}?fields=capital,currencies,languages,flags`)
//         .then(res => {
//           const c = res.data[0] || {};
//           setCountryInfo(prev => ({
//             ...prev,
//             [post.id]: {
//               flag: c.flags?.svg || null,
//               capital: c.capital?.[0] || '—',
//               currency: Object.values(c.currencies || {})
//                 .map(cur => `${cur.name} (${cur.symbol})`)
//                 .join(', ') || '—',
//               languages: Object.values(c.languages || {}).join(', ') || '—',
//             }
//           }));
//         })
//         .catch(() => {
//           // on any lookup failure, still record placeholders
//           setCountryInfo(prev => ({
//             ...prev,
//             [post.id]: { flag: null, capital: '—', currency: '—', languages: '—' }
//           }));
//         });
//     });
//   }, [posts, countryInfo]);

//   // 4) Rest of your existing handlers (follow/unfollow/like/dislike...)
//   const handleFollow = async targetUserId => {
//     try {
//       await axios.post(`http://localhost:5000/users/${targetUserId}/follow`, { followerId: userId });
//       fetchFollowing(); fetchFollowers();
//       setFollowMessage('✅ Followed successfully.');
//       setTimeout(() => setFollowMessage(''), 3000);
//     } catch (error) {
//       console.error('Follow failed:', error);
//     }
//   };
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
//   const isFollowing = id => following.some(u => u.id === id);
//   const handleLogout = async () => {
//     try { await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true }); }
//     catch (_) {}
//     localStorage.clear();
//     navigate('/login');
//   };
//   const handleLike = async postId => { try { await axios.post(`http://localhost:5000/posts/${postId}/like`); fetchPosts(); } catch (_) {} };
//   const handleDislike = async postId => { try { await axios.post(`http://localhost:5000/posts/${postId}/dislike`); fetchPosts(); } catch (_) {} };
//   const handleCommentSubmit = async postId => {
//     const comment = commentInputs[postId];
//     if (!comment) return;
//     try {
//       await axios.post(`http://localhost:5000/posts/${postId}/comments`, { userId, content: comment });
//       setCommentInputs(prev => ({ ...prev, [postId]: '' }));
//       fetchPosts();
//     } catch (_) {}
//   };

//     const startEditing = (post) => {
//     setEditingPostId(post.id);
//     setEditForm({
//       title: post.title,
//       content: post.content,
//       country_name: post.country_name,
//       date_of_visit: post.date_of_visit.slice(0, 10), // Format for input
//     });
//     setSaveMessage('');
//   };
// //   const handleEdit = (postId, currentContent) => {
// //   setEditingPostId(postId);
// //   setEditedContent(currentContent);
// // };
// const handleDelete = async (postId) => {
//   try {
//     await axios.delete(`http://localhost:5000/posts/${postId}`, {
//       data: { userId }  // include current user ID
//     });
//     fetchPosts();
//   } catch (error) {
//     console.error('Delete failed:', error.response?.data || error);
//     alert(error.response?.data?.error || 'Failed to delete post.');
//   }
// };

// const handleEditChange = (e) => {
//     setEditForm({ ...editForm, [e.target.name]: e.target.value });
//   };

//   const handleSaveEdit = async (postId) => {
//   try {
//     await axios.put(`http://localhost:5000/posts/${postId}`, {
//       userId, // ensure backend checks this
//       content: editedContent,
//     });
//     setEditingPostId(null);
//     setEditedContent('');
//     fetchPosts();
//   } catch (error) {
//     console.error('Edit failed:', error.response?.data || error);
//     alert(error.response?.data?.error || 'Failed to edit post.');
//   }
// };

//  const handleSave = async () => {
//     try {
//       await axios.put(`http://localhost:5000/posts/${editingPostId}`, editForm);
//       // await fetchPosts();
//       setEditingPostId(null);
//       setSaveMessage('✅ Post updated successfully!');

//       //  window.location.reload();

//       // Hide message after 3 seconds
//       setTimeout(() => setSaveMessage(''), 3000);
//     } catch (err) {
//       console.error('Update failed:', err);
//       // setSaveMessage('❌ Failed to update post.');
//       //  window.location.reload();
//     }
//   };
//   // 5) Your existing filtering & sorting
//   const filteredAndSortedPosts = useMemo(() => {
//     let filtered = posts;
//     if (searchCountry) filtered = filtered.filter(p => p.country_name?.toLowerCase().includes(searchCountry.toLowerCase()));
//     if (searchUsername) filtered = filtered.filter(p => p.username?.toLowerCase().includes(searchUsername.toLowerCase()));
//     switch (sortOption) {
//       case 'newest': return filtered.sort((a, b) => new Date(b.date_of_visit) - new Date(a.date_of_visit));
//       case 'mostLiked': return filtered.sort((a, b) => (b.likes||0) - (a.likes||0));
//       case 'mostCommented': return filtered.sort((a, b) => (b.comments_count||0) - (a.comments_count||0));
//       default: return filtered;
//     }
//   }, [posts, searchCountry, searchUsername, sortOption]);

//   return (
//     <div className="home-container">
//       <h2>All Blog Posts</h2>
//       <button onClick={handleLogout} style={{ float:'right' }}>Logout</button>

//       <div className="search-container">
//         <input placeholder="Search by country"    value={searchCountry}  onChange={e=>setSearchCountry(e.target.value)} />
//         <input placeholder="Search by author"     value={searchUsername} onChange={e=>setSearchUsername(e.target.value)} />
//         <select value={sortOption} onChange={e=>setSortOption(e.target.value)}>
//           <option value="newest">🕒 Newest</option>
//           <option value="mostLiked">👍 Most Liked</option>
//           <option value="mostCommented">💬 Most Commented</option>
//         </select>
//       </div>

//       {followMessage && <div className="follow-message">{followMessage}</div>}

//       {filteredAndSortedPosts.map(post => {
//         const info = countryInfo[post.id] || {};
//         return (
//           <div key={post.id} className="post-card">
//             <div className="post-content">
//               <h3>{post.title}</h3>
//                <p>{post.content}</p>
//                <p className="post-meta">
//                  <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//                </p>
//               {/* NEW: inline‐styled small flag */}
//               {info.flag && (
//                 <img
//                   src={info.flag}
//                   alt={`Flag of ${post.country_name}`}
//                   style={{
//                     display: 'block',
//                     margin: '0.5em auto',
//                     maxWidth: '80px',
//                     height: 'auto'
//                   }}
//                 />
//               )}
//               {/* <p>{post.content}</p> */}
//               {/* NEW: display country details */}
//               <p className="post-meta">
//                 <strong>Capital:</strong> {info.capital} <br/>
//                 <strong>Currency:</strong> {info.currency} <br/>
//                 <strong>Languages:</strong> {info.languages} <br/>
//                 <strong>Visited:</strong> {new Date(post.date_of_visit).toLocaleDateString()}
//                 {/* <h3>{post.title}</h3>
//                <p>{post.content}</p>
//                <p className="post-meta">
//                  <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//                </p> */}
//               </p>

//               {post.user_id !== userId && (
//                 <div className="follow-button">
//                    <button onClick={() => handleFollow(post.user_id)}>Follow</button>
//                   <button onClick={() => handleUnfollow(post.user_id)}>Unfollow</button>
//                   {/* {isFollowing(post.user_id)
//                     ? <button onClick={()=>handleUnfollow(post.user_id)}>Unfollow</button>
//                     : <button onClick={()=>handleFollow(post.user_id)}>Follow</button>} */}
//                 </div>
//               )}
// <div className="post-content">
  
//   {editingPostId === post.id ? (
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
//                 {/* <button onClick={() => handleEditSubmit(post.id)}>💾 Save</button> */}
//                  <button onClick={handleSave}>💾 Save</button>
//                 <button onClick={() => setEditingPostId(null)}>❌ Cancel</button>
//               </div>
//             ) : (
//               <>
//        <h3>{post.title}</h3>
//                 <p>{post.content}</p>
//                 <p className="post-meta">
//                   <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
//                 </p>
//       {post.user_id === parseInt(userId) && (
//         <>
//           <button onClick={() =>  startEditing(post) }>✏️ Edit</button>
//           <button onClick={() => handleDelete(post.id)}>🗑️ Delete</button>
//         </>
//       )}
//     </>
//   )}
// </div>



//               <div className="post-actions">
//                 <button onClick={()=>handleLike(post.id)}>👍 Like</button>
//                 <button onClick={()=>handleDislike(post.id)}>👎 Dislike</button>
//               </div>
//               <div className="post-stats">
//                 <span>Likes: {post.likes || 0}</span> | <span>Dislikes: {post.dislikes || 0}</span> 
//               </div>
//            </div>
//           </div>
//         );
//       })}
//       {filteredAndSortedPosts.length===0 && <p>No posts found matching your search.</p>}
//     </div>
//   );
// };

// export default Home;
