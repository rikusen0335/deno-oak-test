import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";

const app = new Application();
const port: number = 3000;

import todoRouter from "./routes/todo.ts";
app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

console.log(`Running on ${green(`http://0.0.0.0:${port}`)}`);
await app.listen({ port });

// References
// https://www.freecodecamp.org/news/create-a-todo-api-in-deno-written-by-a-guy-coming-from-node/
