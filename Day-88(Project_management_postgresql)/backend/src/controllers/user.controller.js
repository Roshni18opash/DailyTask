const prisma = require("../config/db");

// GET ALL USERS
const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        teamId: true,
      },
    });
    res.json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE USER ROLE
const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const user = await prisma.user.update({
      where: { id },
      data: { role },
    });
    res.json({ message: "User role updated", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE USER TEAM
const updateUserTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const { teamId } = req.body;
    const user = await prisma.user.update({
      where: { id },
      data: { teamId: teamId || null },
    });
    res.json({ message: "User team updated", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  updateUserRole,
  updateUserTeam,
};
