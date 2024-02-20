import express from "express";
import {
  addPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

// Add new post
router.post("/posts", addPost);

// Fetch all posts
router.get("/posts", getAllPosts);

// Fetch one post by post ID
router.get("/posts/:post_id", getOnePost);

// Update post
router.put("/posts/:post_id", updatePost);

// Delete post
router.delete("/posts/:post_id", deletePost);

export default router;
