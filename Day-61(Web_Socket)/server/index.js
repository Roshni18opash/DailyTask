import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import jwt from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const server = createServer(app);
const PORT = 3000;

const secretKeyJWT = "mysecretkey";
app.use(cookieParser());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/login", (req, res) => {
  const token = jwt.sign({ _id: "12345" }, secretKeyJWT);
  res
    .cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .json({ message: "Logging in successfully" });
});

io.use((socket, next) => {
  cookieParser()(socket.request, {}, (err) => {
    if (err) return next(err);
    const token = socket.request.cookies.token;
    if (!token) {
      return next(new Error("Authentication error"));
    }
    //     const decoded = jwt.verify(token, secretKeyJWT);
    //     next();
    //   });
    // });
    try {
      jwt.verify(token, secretKeyJWT);
      next();
    } catch (err) {
      next(new Error("Invalid token"));
    }
  });
});
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`user ${socket.id} joined room ${room}`);
    //   socket
    //     .to(room)
    //     .emit("welcome", ` ${socket.id} joined to the room ${room}!`);
  });

  socket.on("message", ({ message, room }) => {
    console.log({ message, room });
    // socket.broadcast.emit("Received-message", data);
    io.to(room).emit("Received-message", { message, room, sender: socket.id });
  });
  // socket.emit("welcome", "Welcome to the server!");
  // socket.broadcast.emit("welcome", ` ${socket.id} joined to the server!`);

  socket.on("disconnect", () => {
    console.log(`user ${socket.id} disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
