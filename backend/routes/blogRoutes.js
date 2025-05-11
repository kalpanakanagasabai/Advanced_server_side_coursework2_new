// const express = require("express");
// const router = express.Router();
// const Blog = require("../models/Blog");
// const authenticateJWT = require("../middleware/auth");

// router.get("/", (req, res) => {
//   Blog.getAll((err, results) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json(results);
//   });
// });

// router.post("/", authenticateJWT, (req, res) => {
//   const blog = { ...req.body, user_id: req.user.id };
//   Blog.create(blog, (err, result) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json({ id: result.insertId, ...blog });
//   });
// });

// router.put("/:id", authenticateJWT, (req, res) => {
//   Blog.update(req.params.id, req.body, (err) => {
//     if (err) return res.status(500).json({ error: err });
//     res.sendStatus(200);
//   });
// });

// router.delete("/:id", authenticateJWT, (req, res) => {
//   Blog.delete(req.params.id, req.user.id, (err) => {
//     if (err) return res.status(500).json({ error: err });
//     res.sendStatus(200);
//   });
// });

// module.exports = router;
