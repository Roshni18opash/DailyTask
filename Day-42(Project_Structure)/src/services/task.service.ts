import { task } from "../models/task.model";
import { Task } from "../types/task.type";

export const getAllTask=():Task[]=>{
    return task;
}