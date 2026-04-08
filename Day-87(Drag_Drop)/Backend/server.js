import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO } from "y-socket.io/dist/server";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const ySocketIO = new YSocketIO(io); // Create a YSocketIO server instance
ySocketIO.initialize(); // Initialize the YSocketIO server
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World", success: true });
});
app.get("/health", (req, res) => {
  //which server is running or not
  res.status(200).json({ message: "Health check passed", success: true });
});

httpServer.listen(3000, () => {
  console.log("http://localhost:3000");
});
