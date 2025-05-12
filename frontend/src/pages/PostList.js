// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch all posts when the component mounts
//     axios.get('http://localhost:5000/posts')
//       .then(response => setPosts(response.data))
//       .catch(error => console.error('Error fetching posts:', error));
//   }, []);

//   const handleDelete = (postId) => {
//     axios.delete(`http://localhost:5000/posts/delete/${postId}`, {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     })
//     .then(response => {
//       alert(response.data.message);
//       setPosts(posts.filter(post => post.id !== postId)); // Remove post from list after deletion
//     })
//     .catch(error => console.error('Error deleting post:', error));
//   };

//   return (
//     <div>
//       <h1>All Blog Posts</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//             <Link to={`/edit/${post.id}`}>
//               <button>Edit</button>
//             </Link>
//             <button onClick={() => handleDelete(post.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;
