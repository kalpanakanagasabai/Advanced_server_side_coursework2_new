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

  const [countryInfo, setCountryInfo] = useState({}); // postId -> { flag, capital, currency, languages }

  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

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

  useEffect(() => {
    if (!posts.length) return;
    posts.forEach(post => {
      if (countryInfo[post.id]) return; 
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
    
          setCountryInfo(prev => ({
            ...prev,
            [post.id]: { flag: null, capital: '—', currency: '—', languages: '—' }
          }));
        });
    });
  }, [posts, countryInfo]);


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
             
               <p className="post-meta">
                 <strong>{post.username}</strong> — {post.country_name} — {new Date(post.date_of_visit).toLocaleDateString()}
               </p>
              </p>

              {post.user_id !== userId && (
                <div className="follow-button">
                   <button onClick={() => handleFollow(post.user_id)}>Follow</button>
                  <button onClick={() => handleUnfollow(post.user_id)}>Unfollow</button>
                </div>
              )}

              <div className="post-content">
                
                {editingPostId === post.id ? (
                  <>
                  
                  </>
                ) : (
                  <>
                    {post.user_id === parseInt(userId) && (
                      <>
                      
                        <button onClick={handleCreatePost}>Edit </button>
                      
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
