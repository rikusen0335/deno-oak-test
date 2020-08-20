import { v4 } from "https://deno.land/std/uuid/mod.ts";
import todos from "../data/todos.ts";

import Todo from "../interfaces/todo.ts";

export default {
  /**
   * @description Get all todos
   * @route GET /todos
   */
  getAllTodos: ({ response }: { response: any }) => {
    response.status = 200;
    response.body = {
      success: true,
      data: todos,
    };
  },
  createTodo: async (
    { request, response }: { request: any; response: any },
  ) => {
    const body = await request.body();
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        message: "No data provided",
      };
      return;
    }

    // if everything is fine then perform
    // operation and return todos with the
    // new data added.
    let newTodo: Todo = {
      id: v4.generate(),
      todo: body.value.todo,
      isCompleted: false,
    };
    let data = [...todos, newTodo];
    response.body = {
      success: true,
      data,
    };
  },
  getTodoById: () => {},
  updateTodoById: async () => {},
  deleteTodoById: () => {},
};
