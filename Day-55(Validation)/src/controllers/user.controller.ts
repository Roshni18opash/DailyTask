import { Request, Response } from "express";
import User from "../models/user.model";
import { userSchema } from "../validators/user.validator";

export const showRegister = (req: Request, res: Response) => {
  res.render("register");
};

export const registerUser = async (req: Request, res: Response) => {
  try {

    const validatedData = userSchema.parse(req.body);

    await User.create(validatedData);

    res.render("success", { name: validatedData.name });

  } catch (error: any) {

    res.render("register", {
      error: error.errors?.[0]?.message || "Something went wrong"
    });

  }
};