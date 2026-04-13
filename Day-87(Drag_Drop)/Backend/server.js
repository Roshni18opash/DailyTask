import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO } from "y-socket.io/dist/server";

const app = express();

app.use(express.static("public")); // Serve static files from the "public" directory, allowing clients to access resources like HTML, CSS, and JavaScript files that are necessary for the frontend of the application. This is important for delivering the user interface and client-side functionality to users when they access the server.

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const ySocketIO = new YSocketIO(io); // Create a YSocketIO server instance
ySocketIO.initialize(); // Initialize the YSocketIO server

app.get("/health", (req, res) => {
  //which server is running or not
  res.status(200).json({ message: "Health check passed", success: true });
});

httpServer.listen(4000, () => {
  console.log("http://localhost:4000");
});
