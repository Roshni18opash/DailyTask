// import express from "express";
// import User "../models/User"

// const router = express.Router();
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     const savedUser = await newUser.save();
//     res.json(savedUser);
//   } catch (err) {
//     res.status(400).json({ error: "Invalid Data" });
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(400).json({ error: "Invalid Data" });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.json({ message: "User deleted" });
//   } catch (err) {
//     res.status(400).json({ error: "Invalid Data" });
//   }
// });

// export default router;
