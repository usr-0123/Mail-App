import { v4 } from "uuid";
import {
  addPostService,
  getAllPostsService,
  getOnePostService,
  updatePostService,
  deletePostService,
} from "../services/postService.js";
import { postValidator } from "../validators/postValidator.js";
import {
  sendServerError,
  sendCreated,
  sendNotFound,
  sendDeleteSuccess,
  paginate,
} from "../helper/helperFunctions.js";

// Add new post
export const addPost = async (req, res) => {
  const { UserID, content, post_date, likes, comments } = req.body;
  const { error } = postValidator({
    UserID,
    content,
    post_date,
    likes,
    comments,
  });
  if (error) {
    return sendServerError(res, error.message);
  } else {
    try {
      const post_id = v4();
      const newPost = { post_id, UserID, content, post_date, likes, comments };
      const response = await addPostService(newPost);
      if (response.message) {
        sendServerError(res, response.message);
      } else {
        sendCreated(res, "Post created successfully");
      }
    } catch (error) {
      sendServerError(res, error.message);
    }
  }
};

// Fetch all posts
export const getAllPosts = async (req, res) => {
  try {
    const data = await getAllPostsService();
    if (!data.recordset) {
      return sendNotFound(res, "No posts found");
    }
    return res.status(200).json(data.recordset);
  } catch (error) {
    sendServerError(res, error);
  }
};

// Fetch one post by post ID
export const getOnePost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const data = await getOnePostService(post_id);
    if (data.length !== 0) {
      return res.status(200).json(data[0]);
    } else {
      sendNotFound(res, "Post not found");
    }
  } catch (error) {
    sendServerError(res, error);
  }
};

// Update post
export const updatePost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const { UserID, content, post_date, likes, comments } = req.body;
    const { error } = postValidator({
      UserID,
      content,
      post_date,
      likes,
      comments,
    });
    if (error) {
      return sendServerError(res, error.message);
    }
    const response = await updatePostService(post_id, {
      UserID,
      content,
      post_date,
      likes,
      comments,
    });
    console.log(response);
    if (response.rowsAffected == 1) {
      return res.status(201).json({
        message: "Post updated successfully",
      });
    } else {
      sendNotFound(res, "Post not found or not updated");
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

// Delete post
export const deletePost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const response = await deletePostService(post_id);
    if (response.rowsAffected == 1) {
      sendDeleteSuccess(res, "Post deleted successfully");
    }
  } catch (error) {
    sendServerError(res, error);
  }
};
