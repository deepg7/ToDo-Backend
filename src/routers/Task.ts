import { Router, Request, Response } from "express";
import Task from "../models/Task";

const TaskRouter = Router();

TaskRouter.post("/task", async (req: Request, res: Response) => {
  const task: Task = await Task.create(req.body);
  res.send(task);
});

TaskRouter.get("/task", async (req: Request, res: Response) => {
  const tasks: Task[] = await Task.findAll();
  res.send(tasks);
});

TaskRouter.get("/task/:id", async (req: Request, res: Response) => {
  const task: Task | null = await Task.findByPk(req.params.id);
  res.send(task);
});

TaskRouter.patch("/task/:id", async (req: Request, res: Response) => {
  const task: Task | null = await Task.findByPk(req.params.id);
  if (task && req.body.name) {
    task.name = req.body.name;
    await task.save();
    return res.send(task);
  } else {
    return res.send("Task not found");
  }
});

TaskRouter.delete("/task/:id", async (req: Request, res: Response) => {
  const task: Task | null = await Task.findByPk(req.params.id);
  if (task) {
    await task.destroy();
    return res.send("Task deleted");
  } else {
    return res.send("Task not found");
  }
});

export default TaskRouter;
