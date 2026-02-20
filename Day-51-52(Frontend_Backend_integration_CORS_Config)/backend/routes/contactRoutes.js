const express = require("express");
const Contact = require("../models/Contact");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Get all contacts for logged-in user
router.get("/", protect, async (req, res) => {
  const contacts = await Contact.find({ user: req.user.id });
  res.json(contacts);
});

// Add new contact
router.post("/", protect, async (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = await Contact.create({
    name,
    email,
    phone,
    user: req.user.id,
  });
  res.status(201).json(newContact);
});

// Delete contact
router.delete("/:id", protect, async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
