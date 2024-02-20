import bcrypt from "bcrypt";
import { v4 } from "uuid";
import { addUserService, findByCredentialsService, getAllUserService, getOneUserService, updateUserDetailsService, deleteUserService} from "../services/userService.js";
import { userValidator, userLoginValidator, userUpdateValidator} from "../validators/userValidator.js";
import { sendServerError, sendCreated, notAuthorized, sendNotFound } from "../helper/helperFunctions.js";

// Register users
export const registerUser = async (req, res) => {
  const { Username, Email, Password, TagName, Location } = req.body;
  const { error } = userValidator({ Username, Email, Password, TagName, Location });
  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(Password, salt);
      const UserID = v4();
      const newUser = {
        UserID,
        Username,
        Email,
        Password: hashedPassword,
        TagName,
        Location,
      };
      const response = await addUserService(newUser);
      if (response.message) {
        sendServerError(res, response.message);
      } else {
        sendCreated(res, "User created successfully");
      }
    } catch (error) {
      sendServerError(res, error.message);
    }
  }
};

// Login the user
export const loginUser = async (req, res) => {
  const { Username, Password } = req.body;
  const { error } = userLoginValidator({ Username, Password });
  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    try {
      const userResponse = await findByCredentialsService({
        Username,
        Password,
      });
      if (userResponse.error) {
        notAuthorized(res, userResponse.error);
      } else {
        res.status(200).send(userResponse);
      }
    } catch (error) {
      sendServerError(res, error.message);
    }
  }
};

//Fetch all users
export const getAllUsers = async (req, res) => {
  try {
    let data = await getAllUserService();
    // console.log(data);
    // console.log(data);
    if (!data.recordset) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).json(data.recordset);
  } catch (error) {
    // console.log(error);
    sendServerError(res, error);
  }
};

//Fetch one user
export const getOneUser = async (req, res) => {
  try {
    let user_id = req.params.user_id;
    let data = await getOneUserService(user_id);
    if (data.length !== 0) {
      return res.status(200).json(data[0]);
    } else {
      sendNotFound(res, "user not found");
    }
  } catch (error) {
    // logger.info(error);
    sendServerError(res, error);
  }
};

//Update users
export const updateUserDetails = async (req, res) => {
  try {
    let user_id = req.params.user_id;
    
    const user = {
      Username: req.body.Username,
      Email: req.body.Email,
      TagName: req.body.TagName,
      Location: req.body.Location,
    };
    const { error } = userUpdateValidator(user);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let response = await updateUserDetailsService(user_id, user);
    // console.log(response);
    if (response.rowsAffected == 1) {
      return res.status(200).send("User details updated successfully");
    } else {
      sendNotFound(res, "User not found");
    }
  } catch (error) {
    // console.log(error);
    sendServerError(res, error);
  }
};

//Delete users
export const deleteUser = async (req, res) => {
  try {
    let user_id = req.params.user_id;
    let response = await deleteUserService(user_id);
    // console.log(response);
    if (response.rowsAffected == 1) {
      res.status(200).send("User deleted successfully");
    } else {
      sendNotFound(res, "User not found");
    }
  } catch (error) {
    // console.log(error);
    sendServerError(res, error);
  }
};
