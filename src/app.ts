import express, { Application, Request, Response, Router } from "express";
import dbInit from "./db/init";
import TaskRouter from "./routers/Task";
const app: Application = express();
const port: number = Number(process.env.PORT) || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  await dbInit();
})();

app.use(TaskRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
