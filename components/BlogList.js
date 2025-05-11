// import React, { useEffect, useState } from "react";
// import { api } from "../api";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);

//   const fetchBlogs = async () => {
//     const res = await api.get("/blogs");
//     setBlogs(res.data);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <div>
//       <h2>All Blog Posts</h2>
//       {blogs.map((blog) => (
//         <div key={blog.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
//           <h3>{blog.title}</h3>
//           <p>{blog.content}</p>
//           <p><strong>Country:</strong> {blog.country}</p>
//           <p><strong>Visited:</strong> {new Date(blog.date_of_visit).toDateString()}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogList;
