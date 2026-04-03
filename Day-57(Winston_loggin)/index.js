const express = require("express");
const logger = require("./logger");
const app = express();

app.use(express.json());

let users = [];
//Register
app.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    logger.error("Missing required information. Registration not completed.");
    return res.status(400).json({ message: "All fields are required." });
  }
  users.push({ email, password });

  logger.info(`User registered successfully with email: ${email}`);
  res.json({ message: "Registration successful." });
});
//Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    logger.warn(`Oops! User not found. Login failed: ${email}`);
    return res.status(404).json({ message: "User not found." });
  }
  if (user.password !== password) {
    logger.error(`Incorrect password for email: ${email}. Login failed.`);
    return res.status(401).json({ message: "Invalid password." });
  }
  logger.info(`User logged in successfully with email: ${email}`);
  res.json({ message: "Login successful." });
});

app.listen(8080, () => {
  logger.info("http://localhost:8080");
});
