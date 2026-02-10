import type { Request, Response } from "express";
const { User } = require("../models/user.model");

export const showUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.render("form", { users });
  } catch (err) {
    console.error(err);
    res.send("Error fetching users");
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, city } = req.body;
    await User.create({ name, email, password, city });
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.send("Error adding user");
  }
};
