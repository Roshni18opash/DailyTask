// // New proxy/server-side check
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import jwt from "jsonwebtoken";

// export default function Dashboard() {
//   const token = cookies().get("token")?.value;

//   if (!token) redirect("/login"); // redirect if no token

//   try {
//     jwt.verify(token, process.env.JWT_SECRET); // check token validity
//   } catch {
//     redirect("/login"); // redirect if token invalid
//   }

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Only logged-in users can access this page.</p>
//     </div>
//   );
// }

import { NextResponse, nextResponse } from "next/server";
import bcrypt from "bcryptjs";
import clientPromise from "../../../lib/mongodb";
export async function POST(request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return nextResponse.json({
      success: false,
      message: "Email and password required",
    });
  }
  const client = await clientPromise;
  const db =  client.db("authApp");
  const exitingUser = await db.collection("users").findOne({ email});
  if (!exitingUser)
    return NextResponse.json({
  success:false,
message:"User already exits",
});
const hashedPassword = await bcrypt.hash(password, 10);
await db.collection("users")