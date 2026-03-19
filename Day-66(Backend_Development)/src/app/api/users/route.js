import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import User from "../../lib/models/User";

//GET ALL USERS
export async function GET() {
  await connectDB();
  const users = await User.find(); //get all users with articles
  return NextResponse.json(users);
}
//CREATE
export async function POST(request) {
  await connectDB();
  const body = await request.json();
  const newUser = await User.create(body); // save new record in mongodb
  return NextResponse.json(newUser, { status: 201, statusText: "Created" });
}
