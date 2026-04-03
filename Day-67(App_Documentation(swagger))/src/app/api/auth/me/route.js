import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "../../../lib/db";
import User from "../../../lib/models/User";
/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get current user
 *     description: Retrieves the currently logged-in user using the JWT token stored in cookies
 *     tags:
 *        - Auth
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns current user object if logged in, otherwise null
 */
export async function GET(req) {
  await connectDB();

  const token = req.cookies.get("token")?.value;

  if (!token) return NextResponse.json({ user: null });

  try {
    const decoded = jwt.verify(token, "secret123");
    const user = await User.findById(decoded.id).select("-password");

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}
