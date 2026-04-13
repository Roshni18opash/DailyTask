const prisma = require("../config/db");

// CREATE TEAM
const createTeam = async (req, res) => {
  try {
    const { name } = req.body;

    const team = await prisma.team.create({
      data: { name },
    });

    res.status(201).json({ message: "Team created", team });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

// GET TEAMS
const getTeams = async (req, res) => {
  try {
    const teams = await prisma.team.findMany({
      include: {
        users: true,
        projects: true,
      },
    });

    res.json({ teams });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE TEAM
const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.team.delete({ where: { id } });
    res.json({ message: "Team deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createTeam,
  getTeams,
  deleteTeam,
};
