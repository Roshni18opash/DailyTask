const express = require("express");
const {
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
  getUserById,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
//console.log("User Routes Loaded");

router.post("/register", registerUser);
router.put("/:id", validateToken, updateUser);
router.get("/:id", validateToken, getUserById);
router.post("/login", loginUser);
router.delete("/:id", validateToken, deleteUser);
router.get("/current", validateToken, currentUser);

module.exports = router;
