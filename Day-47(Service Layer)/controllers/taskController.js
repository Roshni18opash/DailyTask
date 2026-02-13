const taskService = require("../services/taskService");

const taskController = {
  index: async (req, res) => {
    const tasks = await taskService.getAllTask();
    const categories = await taskService.getAllCategories();
    res.render("index", { tasks, categories });
  },

  addForm: async (req, res) => {
    const categories = await taskService.getAllCategories();
    res.render("addTask", { categories });
  },
  createTask: async (req, res) => {
    await taskService.createTask(req.body);
    res.redirect("/");
  },
  editForm: async (req, res) => {
    const task = await taskService.getTaskById(req.params.id);
    const categories = await taskService.getAllCategories();
    res.render("editTask", { task, categories });
  },
  updateTask: async (req, res) => {
    await taskService.updateTask(req.params.id, req.body);
    res.redirect("/");
  },
  deleteTask: async (req, res) => {
    await taskService.deleteTask(req.params.id);
    res.redirect("/");
  },
  toggleComplete: async (req, res) => {
    await taskService.toggleComplete(req.params.id);
    res.redirect("/");
  },
};
// exports.getAllTasks = async (req, res) => {
//   const tasks = await taskService.getAllTasks();
//   res.render("index", { tasks });
// };
// exports.deleteTask = async (req, res) => {
//   await taskService.deleteTask(req.params.id);
//   res.redirect("/");
// };

module.exports = taskController;
