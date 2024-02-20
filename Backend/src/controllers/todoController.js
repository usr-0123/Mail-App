import { sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from "../helper/helperFunctions.js";
import { getTodosService, deleteTodoService, getTodoByIdService, addTodoServices, updateTodoService, completeTodoService } from "../services/todoServices.js";
import { todoValidator } from "../validators/todoValidator.js";

export const getTodos = async (req, res) => {
  //localhost:3000/todos?page=1&limit=10
  try {
    const data = await getTodosService();
    if (data.length === 0) {
      sendNotFound(res, "No todos found");
    } else {
      if (!req.query.page && !req.query.limit) {
        if (req.query.order) {
          res.status(200).json(orderData(data, req.query.order));
        } else {
          res.status(200).json(data);
        }
      } else {
        if (req.query.order) {
          paginate(orderData(data, req.query.order), req, res);
        } else {
          paginate(data, req, res);
        }
      }
    }
  } catch (error) {
    sendServerError(res, error);
  }
};

export const getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await getTodoByIdService(id);
    if (todo.length === 0) {
      sendNotFound(res, "Todo not found");
    } else {
      res.status(200).json(todo);
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todoToDelete = await getTodoByIdService(id);
    if (todoToDelete.length === 0) {
      sendNotFound(res, "Todo not found");
    } else {
      const response = await deleteTodoService(id);
      if (response.message) {
        sendServerError(res, response.message);
      } else {
        sendDeleteSuccess(res, `Todo with id: ${id} was deleted successfully`);
      }
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

export const createTodo = async (req, res) => {
  const { title, completed } = req.body;
  const { error } = todoValidator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    try {
      const newTodo = {
        title: title,
        completed: completed,
      };
      let response = await addTodoServices(newTodo);
      console.log(response);
      if (response.message) {
        sendServerError(res, response.message);
      } else {
        sendCreated(res, `Todo with title: ${title} was created successfully`);
      }
    } catch (error) {
      sendServerError(res, error.message);
    }
  }
};
export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const searchTodo = await getTodoByIdService(id);
    if (searchTodo.length === 0) {
      sendNotFound(res, "Todo not found");
    } else {
      let todo = {};
      const { title, completed } = req.body;
      if (title !== undefined) {
        todo.title = title;
      } else {
        todo.title = searchTodo[0].title;
      }
      if (completed !== undefined) {
        todo.completed = completed;
      } else {
        todo.completed = searchTodo[0].completed;
      }
      const response = await updateTodoService(id, todo);
      if (response.message) {
        sendServerError(res, response.message);
      } else {
        sendCreated(res, "Todo updated successfully");
      }
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

export const completeTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const searchTodo = await getTodoByIdService(id);
    if (searchTodo.length === 0) {
      sendNotFound(res, "Todo not found");
    } else {
      const response = await completeTodoService(id);
      if (response.message) {
        sendServerError(res, response.message);
      } else {
        sendCreated(res, "Todo updated successfully");
      }
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};
