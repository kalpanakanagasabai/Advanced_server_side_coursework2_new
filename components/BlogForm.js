// import React, { useState } from "react";
// import { api } from "../api";

// const BlogForm = ({ onSuccess }) => {
//   const [form, setForm] = useState({ title: "", content: "", country: "", date_of_visit: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await api.post("/blogs", form);
//     onSuccess();
//     setForm({ title: "", content: "", country: "", date_of_visit: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="Title" required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
//       <textarea placeholder="Content" required value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} />
//       <input placeholder="Country" required value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} />
//       <input type="date" required value={form.date_of_visit} onChange={e => setForm({ ...form, date_of_visit: e.target.value })} />
//       <button type="submit">Post</button>
//     </form>
//   );
// };

// export default BlogForm;
