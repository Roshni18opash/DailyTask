const prisma = require("../config/db");

// CREATE PROJECT
const createProject = async (req, res) => {
  try {
    const { name, teamId } = req.body;

    const project = await prisma.project.create({
      data: {
        name,
        team: {
          connect: { id: teamId },
        },
      },
    });

    res.status(201).json({
      message: "Project created",
      project,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// GET PROJECTS
const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        team: true,
        tasks: true,
      },
    });

    res.json({ projects });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE PROJECT
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const project = await prisma.project.update({
      where: { id },
      data: { name },
    });
    res.json({ message: "Project updated", project });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE PROJECT
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.project.delete({ where: { id } });
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
};
