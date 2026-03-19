import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { email, password } = await request.json();

  if (!email || !password)
    return NextResponse.json({
      success: false,
      message: "Email and password required",
    });

  const client = await clientPromise;
  const db = client.db("authApp");

  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser)
    return NextResponse.json({
      success: false,
      message: "User already exists",
    });

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.collection("users").insertOne({ email, password: hashedPassword });

  return NextResponse.json({
    success: true,
    message: "User created successfully",
  });
}
