import { Request, Response }from "express";
import { getAllTask } from "../services/task.service";

export const getTasks = (req: Request, res: Response): void => {
  const tasks = getAllTask();
  res.status(200).json(tasks);
};