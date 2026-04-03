"use server";

import { z } from "zod";
import Product from "./model/product";
import { connectDB } from "./lib/db";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((val) => !isNaN(Number(val)), {
      message: "Price must be number",
    }),
});

export async function addProduct(formData) {
  try {
    await connectDB();

    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
    };

    const result = schema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        message: result.error.errors[0].message,
        type: "VALIDATION_ERROR",
      };
    }

    const newProduct = await Product.create({
      name: result.data.name,
      price: Number(result.data.price),
    });

    return {
      success: true,
      product: JSON.parse(JSON.stringify(newProduct)),
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      type: "UNKNOWN_ERROR",
    };
  }
}

export async function getProducts() {
  await connectDB();
  const products = await Product.find();
  return JSON.parse(JSON.stringify(products));
}

export async function deleteProduct(id) {
  await connectDB();
  await Product.findByIdAndDelete(id);
  return { success: true };
}
export async function updateProduct(id, name, price) {
  await connectDB();
  await Product.findByIdAndUpdate(id, {
    name,
    price,
  });
  return { success: true };
}
