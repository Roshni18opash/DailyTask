import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import pollRoutes from "./routes/pollRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/pollapp");

app.use("/api/auth", authRoutes);
app.use("/api/polls", pollRoutes);

app.listen(5000, () => console.log("Server running"));
Model/ user.js
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: String,
  password: String,
});

export default mongoose.model("User", schema);
// Model.poll.js
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  question: String,
  options: [
    {
      text: String,
      count: { type: Number, default: 0 },
    },
  ],
});

export default mongoose.model("Poll", schema);
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  pollId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  optionIndex: Number,
});

schema.index({ pollId: 1, userId: 1 }, { unique: true });

export default mongoose.model("Vote", schema);
,
// Midl/authjs
import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};
// Route/ authroute
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    email: req.body.email,
    password: hash,
  });
  res.json(user);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).json({ msg: "User not found" });

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ token });
});

export default router;
Pollroute
import express from "express";
import Poll from "../models/Poll.js";
import Vote from "../models/Vote.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// create poll
router.post("/", auth, async (req, res) => {
  const { question, options } = req.body;

  if (!question || options.length < 2) {
    return res.status(400).json({ msg: "Invalid data" });
  }

  const poll = await Poll.create({
    question,
    options: options.map((o) => ({ text: o })),
  });

  res.json(poll);
});

// get poll
router.get("/:id", async (req, res) => {
  const poll = await Poll.findById(req.params.id);
  res.json(poll);
});

// vote
router.post("/:id/vote", auth, async (req, res) => {
  try {
    await Vote.create({
      pollId: req.params.id,
      userId: req.user.id,
      optionIndex: req.body.optionIndex,
    });

    await Poll.updateOne(
      { _id: req.params.id },
      { $inc: { [`options.${req.body.optionIndex}.count`]: 1 } }
    );

    res.json({ msg: "Voted" });

  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ msg: "Already voted" });
    }
    res.status(500).json({ msg: "Error" });
  }
});

export default router;
npx create-react-app client
cd client
npm start
Appjs
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [poll, setPoll] = useState(null);
  const [selected, setSelected] = useState(0);

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "


Serverjs
import config from "./config/config.js";

mongoose.connect(config.MONGO_URI);

app.listen(config.PORT, () => {
  console.log("Server running");
});
Authmidl
import config from "../config/config.js";

const decoded = jwt.verify(token, config.JWT_SECRET);
Regi
POST http://localhost:5000/api/auth/register
Add in poll route
// get my polls
router.get("/my", auth, async (req, res) => {
  const polls = await Poll.find({ creatorId: req.user.id });

  const result = polls.map((poll) => {
    const totalVotes = poll.options.reduce((sum, o) => sum + o.count, 0);

    return {
      _id: poll._id,
      question: poll.question,
      totalVotes,
    };
  });

  res.json(result);
});
My poll frontend
import { useEffect, useState } from "react";

export default function MyPolls({ token }) {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/polls/my", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then(setPolls);
  }, []);

  return (
    <div>
      <h2>My Polls</h2>

      {polls.map((p) => (
        <div key={p._id}>
          <h4>{p.question}</h4>
          <p>Total Votes: {p.totalVotes}</p>
        </div>
      ))}
    </div>
  );
}
// Poll results
import { useEffect, useState } from "react";

export default function PollResult({ pollId }) {
  const [poll, setPoll] = useState(null);

  const fetchPoll = () => {
    fetch(`http://localhost:5000/api/polls/${pollId}`)
      .then((res) => res.json())
      .then(setPoll);
  };

  useEffect(() => {
    fetchPoll();

    const interval = setInterval(fetchPoll, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!poll) return <p>Loading...</p>;

  return (
    <div>
      <h3>{poll.question}</h3>

      {poll.options.map((o, i) => (
        <div key={i}>
          {o.text} - {o.count}
        </div>
      ))}
    </div>
  );
}
Add in create poll
const poll = await Poll.create({
  creatorId: req.user.id,   // ✅ ADD THIS
  question,
  options: options.map((o) => ({ text: o })),
});
Server.seeejs
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

await mongoose.connect("mongodb://127.0.0.1:27017/pollapp");

const hash = await bcrypt.hash("123456", 10);

await User.deleteMany({});

await User.create({
  email: "test@test.com",
  password: hash,
});

console.log("Demo user created");
process.exit(); 
