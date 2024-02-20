import { poolRequest, closePool, sql } from "../utilis/dbConnect.js";

export const getTodosService = async () => {
  try {
    const result = await poolRequest().query("select * from tbl_todo");
    console.log(result.recordset);
    return result.recordset;
  } catch (error) {
    return error.message;
  }
};

export const getTodoByIdService = async (id) => {
  try {
    // const result = await poolRequest().query(`select * from tbl_todo where id = ${id}`);
    const result = await poolRequest()
      .input("id", sql.Int, id)
      .query("select * from tbl_todo where id = @id");
    return result.recordset;
  } catch (error) {
    return error.message;
  }
};

export const deleteTodoService = async (id) => {
  try {
    const result = await poolRequest()
      .input("id", sql.Int, id)
      .query("delete from tbl_todo where id = @id");
    return result;
  } catch (error) {
    return error;
  }
};

export const addTodoServices = async (todo) => {
  try {
    const result = await poolRequest()
      .input("title", sql.VarChar, todo.title)
      .input("completed", sql.Bit, todo.completed)
      .query(
        "INSERT INTO tbl_todo (title, completed) VALUES( @title, @completed)"
      );
    return result;
  } catch (error) {
    return error;
  }
};

export const updateTodoService = async (id, todo) => {
  try {
    const result = await poolRequest()
      .input("id", sql.Int, id)
      .input("title", sql.VarChar, todo.title)
      .input("completed", sql.Bit, todo.completed)
      .query(
        "UPDATE tbl_todo SET title = @title, completed = @completed WHERE id = @id"
      );
    return result;
  } catch (error) {
    return error;
  }
};
export const completeTodoService = async (id) => {
  try {
    const result = await poolRequest()
      .input("id", sql.Int, id)
      .query("UPDATE tbl_todo SET completed = 1 WHERE id = @id");
    return result;
  } catch (error) {
    return error;
  }
};
