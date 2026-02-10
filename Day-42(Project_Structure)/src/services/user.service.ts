import { task } from "../models/user.model";
import { Task } from "../types/task.type";

export const getAllTask=():Task[]=>{
    return task;
}