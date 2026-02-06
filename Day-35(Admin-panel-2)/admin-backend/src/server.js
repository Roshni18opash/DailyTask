
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users"



//const port=8082;
const app=express();

app.use(cors());
app.use(express.json());
const MONGO_URL =  "mongodb://localhost:27017/Admin_panel";


// console.log("connecting MongoDB URL:", MONGO_URL);
// app.get("/",(req,res)=>{
//     res.send("Backend is running");
// });


mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
    app.listen(5000, () => console.log("Server running at http://localhost:5000"));
  })
  .catch((err) => console.log("MongoDB connection error:", err));


app.get("/", (req, res) => res.send("Backend is running"));

app.use("/api/users",userRoutes);