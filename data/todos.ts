import { v4 } from "https://deno.land/std/uuid/mod.ts";

import Todo from "../interfaces/todo.ts";

let todos: Todo[] = [
  {
    id: v4.generate(),
    todo: "walk dog",
    isCompleted: true,
  },
  {
    id: v4.generate(),
    todo: "cook dinner",
    isCompleted: false,
  },
  {
    id: v4.generate(),
    todo: "wash dishes",
    isCompleted: false,
  },
];

export default todos;
