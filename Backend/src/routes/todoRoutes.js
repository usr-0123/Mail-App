import { Router } from "express";
import {
  getTodos,
  createTodo,
  getTodoById,
  deleteTodo,
  updateTodo,
  completeTodo,
} from "../controllers/todoController.js";
import { authMiddleware } from "../middlewares/userAuthMiddleware.js";
const todoRouter = Router();

todoRouter.get("/todos", authMiddleware, getTodos);
todoRouter.post("/todos", authMiddleware, createTodo);
todoRouter.put("/todos/:id", authMiddleware, updateTodo);
todoRouter.get("/todos/:id", authMiddleware, getTodoById);
todoRouter.delete("/todos/:id", authMiddleware, deleteTodo);
todoRouter.patch("/todos/:id", authMiddleware, completeTodo);

export default todoRouter;
