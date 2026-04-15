import { Request, Response, NextFunction } from "express";
import { error } from "node:console";
import { Schema, ZodSchema } from "zod/v3";

export const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: result.error.flatten(),
      });
    }
    req.body = result.data;
  };
};
