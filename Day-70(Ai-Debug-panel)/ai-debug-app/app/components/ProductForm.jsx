"use client";

import { useForm } from "react-hook-form";
//debug
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { addProduct } from "../actions";

const schema = z.object({
  name: z.string().min(1, "Product name is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((val) => !isNaN(Number(val)), {
      message: "Price must be a number",
    }),
});

export default function ProductForm({ setLogs, setProducts, setCurrentPage }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  //ai-debug-panel
  useEffect(() => {
    if (errors.name) {
      setLogs((prev) => [
        ...prev,
        {
          message: errors.name.message,
          type: "VALIDATION_ERROR",
        },
      ]);
    }

    if (errors.price) {
      setLogs((prev) => [
        ...prev,
        {
          message: errors.price.message,
          type: "VALIDATION_ERROR",
        },
      ]);
    }
  }, [errors]);
  //debug
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);

    const res = await addProduct(formData);

    if (!res.success) {
      setLogs((prev) => [...prev, res]);
    } else {
      setProducts((prev) => [...prev, res.product]);
      setCurrentPage(1);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
      <div className="flex gap-3">
        <input
          {...register("name")}
          placeholder="Product Name"
          className="border p-2 w-full"
        />
        <input
          {...register("price")}
          placeholder="Price"
          className="border p-2 w-full"
        />
        <button className="bg-blue-500 text-white px-4">Add</button>
      </div>

      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}
    </form>
  );
}
