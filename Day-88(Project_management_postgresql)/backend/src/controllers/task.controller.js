const prisma = require("../config/db");

// CREATE TASK
const createTask = async (req, res) => {
  try {
    const { title, description, projectId, assignedTo, priority, dueDate } =
      req.body;

    if (!title || !projectId) {
      return res.status(400).json({ message: "Title and projectId required" });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        priority,
        dueDate: dueDate ? new Date(dueDate) : null,

        project: {
          connect: { id: projectId },
        },

        ...(assignedTo && {
          assignee: {
            connect: { id: assignedTo },
          },
        }),
      },
    });

    res.status(201).json({
      message: "Task created",
      task,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// GET TASKS
const getTasks = async (req, res) => {
  try {
    const { status, projectId } = req.query;

    // Admin/Manager can see all tasks, Users only see their assigned tasks
    const where = {};
    if (req.user.role === "USER") {
      where.assignedTo = req.user.id;
    }
    if (status) {
      where.status = status;
    }
    if (projectId) {
      where.projectId = projectId;
    }

    const tasks = await prisma.task.findMany({
      where,
      include: {
        project: true,
        assignee: true,
      },
    });

    res.json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//  UPDATE TASK STATUS
const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await prisma.task.update({
      where: { id },
      data: { status },
    });

    res.json({ message: "Task updated", task });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.task.delete({
      where: { id },
    });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTaskStatus,
  deleteTask,
};
