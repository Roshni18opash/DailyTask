import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ success: true, message: "Logged out" });

  // Delete the cookie by overwriting it
  response.cookies.set({
    name: "token",
    value: "",
    path: "/",
    maxAge: 0, // expires immediately
    httpOnly: true,
  });

  return response;
}
