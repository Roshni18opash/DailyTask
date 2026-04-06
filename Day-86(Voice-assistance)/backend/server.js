import express from "express";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const products = JSON.parse(fs.readFileSync("./products.json"));

app.post("/recommend", (req, res) => {
  const { skinType, concern } = req.body;

  if (!skinType || !concern) {
    return res.status(400).json({ message: "Missing input" });
  }

  const result = products.filter(
    (p) =>
      p.ideal_for.toLowerCase().includes(skinType.toLowerCase()) ||
      p.ideal_for.toLowerCase().includes(concern.toLowerCase()),
  );

  res.json(result.slice(0, 1)); // only 1 product (better for voice)
});

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
