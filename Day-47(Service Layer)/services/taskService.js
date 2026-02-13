const Task = require("../models/taskModel");
const Category = require("../models/categoryModel");

const taskService = {
  getAllTask: async () => {
    return await Task.find().populate("category").sort({ createdAt: -1 });
  },

  getTaskById: async (id) => Task.findById(id),

  createTask: async (data) => {
    const task = new Task(data);
    return task.save();
  },

  updateTask: async (id, data) => {
    return await Task.findByIdAndUpdate(id, {
      title: data.title,
      category: data.category,
    });
  },

  deleteTask: async (id) => Task.findByIdAndDelete(id),
  toggleComplete: async (id) => {
    const task = await Task.findById(id);
    task.completed = !task.completed;
    return task.save();
  },
  getAllCategories: async () => Category.find(),
};
module.exports = taskService;
