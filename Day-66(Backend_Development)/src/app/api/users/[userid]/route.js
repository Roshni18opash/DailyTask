import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import User from "../../../lib/models/User";

// GET ONE
export async function GET(req, context) {
  await connectDB();
  //dynamic route mate context use thy che
  const { userid } = await context.params; //take data from URL
  //in next16 awaiot is promise so we use await
  const user = await User.findById(userid);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

// UPDATE
export async function PUT(req, context) {
  await connectDB();

  const { userid } = await context.params;

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const updatedUser = await User.findByIdAndUpdate(userid, body, {
    returnDocument: "after",
  });

  return NextResponse.json(updatedUser);
}

//DELETE
export async function DELETE(req, context) {
  await connectDB();

  const { userid } = await context.params;

  await User.findByIdAndDelete(userid);

  return NextResponse.json({ message: "Deleted successfully" });
}
