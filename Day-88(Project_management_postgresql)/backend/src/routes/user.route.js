const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth.middleware");
const { getUsers, updateUserRole, updateUserTeam } = require("../controllers/user.controller");

router.get("/", protect, getUsers);
router.patch("/:id/role", protect, updateUserRole);
router.patch("/:id/team", protect, updateUserTeam);

router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

module.exports = router;
