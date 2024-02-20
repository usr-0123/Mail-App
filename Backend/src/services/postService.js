import { poolRequest, sql } from "../utilis/dbConnect.js";
import { sendServerError, sendNotFound, sendDeleteSuccess} from "../helper/helperFunctions.js";

// Add new post
export const addPostService = async (newPost) => {
  try {

    //Check if post id already exists in the database
    const checkPostQuery = `
    SELECT COUNT(*) AS count
    FROM post
    WHERE post_id = @post_id`;

    const checkPostResult = await poolRequest()
    .input("post_id", sql.VarChar, newPost.post_id)
    .query(checkPostQuery);

    if (checkPostResult.recordset[0].count > 0) {
      throw new Error('The post seem duplicate, try something differenty')
    }

    // If the post_id is UniqueIdentifier, the post will be added
    const addPostQuery = `
    INSERT INTO post (post_id, UserID, content, post_date, likes, comments)
    VALUES (@post_id, @UserID, @content, @post_date, @likes, @comments)
    `;
    const result = await poolRequest()
      .input("post_id", sql.VarChar(300), newPost.post_id)
      .input("UserID", sql.VarChar(255), newPost.UserID)
      .input("content", sql.VarChar(sql.MAX), newPost.content)
      .input("post_date", sql.DateTime, newPost.post_date)
      .input("likes", sql.Int, newPost.likes)
      .input("comments", sql.Int, newPost.comments)
      .query(addPostQuery);

    return result;
  } catch (error) {
    return error;
  }
};

// Fetch all posts
export const getAllPostsService = async () => {
  try {
    const result = await poolRequest().query(`SELECT * FROM post`);
    // console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// Fetch one post
export const getOnePostService = async (post_id) => {
  try {
    const result = await poolRequest()
      .input("post_id", sql.VarChar(300), post_id)
      .query(`SELECT * FROM post WHERE post_id=@post_id`);
    return result.recordset;
  } catch (error) {
    return error;
  }
};

// Update post
export const updatePostService = async (post_id, postDetails) => {
  try {
    const response = await poolRequest()
      .input("post_id", sql.VarChar(300), post_id)
      .input("UserID", sql.VarChar(255), postDetails.UserID)
      .input("content", sql.VarChar(sql.MAX), postDetails.content)
      .input("post_date", sql.DateTime, postDetails.post_date)
      .input("likes", sql.Int, postDetails.likes)
      .input("comments", sql.Int, postDetails.comments)
      .query(
        `UPDATE post SET UserID=@UserID, content=@content, post_date=@post_date, likes=@likes, comments=@comments WHERE post_id=@post_id`
      );
    return response;
  } catch (error) {
    return error;
  }
};
// Delete post
export const deletePostService = async (post_id) => {
  try {
    const response = await poolRequest()
      .input("post_id", sql.VarChar(300), post_id)
      .query("DELETE FROM post WHERE post_id=@post_id");
    return response;
  } catch (error) {
    return error;
  }
};
