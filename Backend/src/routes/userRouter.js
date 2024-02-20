import { Router } from "express";
import { loginUser, registerUser,getAllUsers, getOneUser, updateUserDetails, deleteUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/users/register", registerUser);

userRouter.post("/users/auth/login", loginUser);

userRouter.get("/allusers", getAllUsers);

userRouter.get("/users/:user_id", getOneUser);

userRouter.put("/users/:user_id", updateUserDetails);

userRouter.delete("/users/:user_id", deleteUser);

export default userRouter;
