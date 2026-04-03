import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Article from "../../lib/models/Article";

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Get all articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: Success
 */

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
/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Create article
 *     tags:
 *          - Articles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Created
 */

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
