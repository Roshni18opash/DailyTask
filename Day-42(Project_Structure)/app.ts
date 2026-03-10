import express from "express";
import taskRoutes from "./src/routes/user.routes"

const app = express();

app.use(express.json());
app.use("/api", taskRoutes);

export default app;
