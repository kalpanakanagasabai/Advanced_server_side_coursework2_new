// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BlogPost from './BlogPost';

// const BlogList = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch blog posts from the backend
//     axios.get('http://localhost:5000/blog')
//       .then(response => {
//         setPosts(response.data.posts); // Assuming the response contains a 'posts' array
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Error fetching blog posts');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="blog-list">
//       <h1>Blog Posts</h1>
//       {posts.map(post => (
//         <BlogPost
//           key={post.id}
//           title={post.title}
//           content={post.content}
//           country={post.country}
//           dateOfVisit={post.date_of_visit}
//         />
//       ))}
//     </div>
//   );
// };

// export default BlogList;
