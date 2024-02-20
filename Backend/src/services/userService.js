import { poolRequest, sql } from "../utilis/dbConnect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Register new user and check to prevent entries
export const addUserService = async (newUser) => {
  try {

    // Check if the username or email already exists in the database
    const checkUserQuery = `
    SELECT COUNT(*) AS count
    FROM tbl_user
    WHERE Username = @Username OR Email = @Email`;

    const checkUserResult = await poolRequest()
    .input("Username", sql.VarChar, newUser.Username)
    .input("Email", sql.VarChar, newUser.Email)
    .query(checkUserQuery);

    if (checkUserResult.recordset[0].count > 0) {
      throw new Error('There is a user with the Username or Email already existing, try some unique credentials');
    }

    // if the username and email are both unique, proceed with registration
    const insertUserQuery = `
    INSERT INTO tbl_user (UserID, Username, Email, Password, Tagname, Location)
    VALUES (@UserID, @Username, @Email, @Password, @Tagname, @Location)`;

    const result = await poolRequest()
      .input("UserID", sql.VarChar, newUser.UserID)
      .input("Username", sql.VarChar, newUser.Username)
      .input("Email", sql.VarChar, newUser.Email)
      .input("Password", sql.VarChar, newUser.Password)
      .input("TagName", sql.VarChar, newUser.TagName)
      .input("Location", sql.VarChar, newUser.Location)
      .query(insertUserQuery);

    return result;
  } catch (error) {
    return error;
  }
};

// Fetch all the users
export const getAllUserService = async () => {
  try {
    const result = await poolRequest().query(`SELECT UserID, Username, Email, TagName, Location FROM tbl_user`);
    return result;
  } catch (error) {
    return error;
  }
};

// Fetch one user
export const getOneUserService = async (user_id) => {
  try {
    const result = await poolRequest()
      .input("UserID", sql.VarChar, user_id)
      .query(
        `SELECT UserID, Username, Email, TagName, Location FROM tbl_user WHERE UserID=@UserID`
      );
    return result.recordset;
  } catch (error) {
    return error;
  }
};

//Update details for users
export const updateUserDetailsService = async (user_id, userDetails) => {
  try {
const response = await poolRequest()
        .input("user_id", sql.VarChar, user_id)
        .input("username", sql.VarChar, userDetails.Username)
        .input("email", sql.VarChar, userDetails.Email)
        .input("tagName", sql.VarChar, userDetails.TagName)
        .input("location", sql.VarChar, userDetails.Location)
        .query(`UPDATE tbl_user
                     SET Username=@username,
                        Email=@email,
                        Tagname=@tagname,
                        Location=@location
                    WHERE UserID=@user_id`);
      return response;
    } catch (error) {
    return error;
  }
};

// Delete a user
export const deleteUserService = async (user_id) => {
  try {
      const response = await poolRequest()
        .input("user_id", sql.VarChar, user_id)
        
        .query("DELETE FROM tbl_user WHERE UserID=@user_id");
      return response;
      // console.log(response);
    } catch (error) {
    return error;
  }
};

// Find user by credentials
export const findByCredentialsService = async (user) => {
  try {
    //if there is a user with this Username
    const userFoundResponse = await poolRequest()
      .input("Username", sql.VarChar, user.Username)
      .query("SELECT * FROM tbl_user WHERE Username = @Username");
    if (userFoundResponse.recordset[0]) {

      //take user password from db and compare it with the password from the request with bcrypt
      if (await bcrypt.compare(user.Password, userFoundResponse.recordset[0].Password
        )
      ) {

        // send user details back without password and with a jwt token
        let token = jwt.sign(
          {
            UserID: userFoundResponse.recordset[0].UserID,
            Username: userFoundResponse.recordset[0].Username,
            Email: userFoundResponse.recordset[0].Email,
          },
          process.env.JWT_SECRET,
          { expiresIn: "48h" } // 2hours
        );
        const { Password, ...user } = userFoundResponse.recordset[0];
        return { user, token: `JWT ${token}` };
      } else {
        return { error: "Invalid Credentials" };
      }
    } else {
      return { error: "Invalid Credentials" };
    }
  } catch (error) {
    return error;
  }
};
