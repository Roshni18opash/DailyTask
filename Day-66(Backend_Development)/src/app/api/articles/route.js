import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Article from "../../lib/models/Article";

// GET all articles
export async function GET() {
  try {
    await connectDB();
    const articles = await Article.find({});
    return NextResponse.json(articles);
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to fetch articles", error: err.message },
      { status: 500 },
    );
  }
}

// POST new article
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    if (!body.title || !body.description) {
      return NextResponse.json(
        { message: "Title and description required" },
        { status: 400 },
      );
    }

    const newArticle = await Article.create({
      title: body.title,
      description: body.description,
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to create article", error: err.message },
      { status: 500 },
    );
  }
}
