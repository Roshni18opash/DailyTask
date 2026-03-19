import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  const { email, password } = await request.json();

  const client = await clientPromise;
  const db = client.db("authApp");

  const user = await db.collection("users").findOne({ email });
  if (!user)
    return NextResponse.json({ success: false, message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return NextResponse.json({ success: false, message: "Wrong password" });

  const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: "1h" });
  const response = NextResponse.json({
    success: true,
    message: "Login successful",
  });
  response.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 3600,
  });

  return response;
}
