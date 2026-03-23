// src/app/api/articles/[id]/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Article from "../../../lib/models/Article";

// UPDATE article
export async function PUT(req, context) {
  try {
    await connectDB();

    // ✅ Next.js 16.2 App Router: params is a Promise
    const params = await context.params;
    const { id } = params;

    const body = await req.json();

    const updated = await Article.findByIdAndUpdate(
      id,
      { title: body.title, description: body.description },
      { returnDocument: "after" },
    );

    if (!updated) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(updated);
  } catch (err) {
    console.error("Failed to update article:", err);
    return NextResponse.json(
      { message: "Update failed", error: err.message },
      { status: 500 },
    );
  }
}

// DELETE article
export async function DELETE(req, context) {
  try {
    await connectDB();

    const params = await context.params;
    const { id } = params;

    await Article.findByIdAndDelete(id);

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("Failed to delete article:", err);
    return NextResponse.json(
      { message: "Delete failed", error: err.message },
      { status: 500 },
    );
  }
}
