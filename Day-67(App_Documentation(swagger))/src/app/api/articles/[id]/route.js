// src/app/api/articles/[id]/route.js
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Article from "../../../lib/models/Article";
import mongoose from "mongoose";
/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Update article
 *     tags:
 *          - Articles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
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
 *         description: Updated
 */

export async function PUT(req, context) {
  try {
    await connectDB();

    const params = await context.params;
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid article ID" },
        { status: 400 },
      );
    }

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

//GET SINGLE
/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Get single article
 *     tags:
 *          - Articles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Article not found
 */
export async function GET(req, context) {
  try {
    await connectDB();

    const params = await context.params;
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid article ID" },
        { status: 400 },
      );
    }

    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(article);
  } catch (err) {
    return NextResponse.json(
      { message: "Error", error: err.message },
      { status: 500 },
    );
  }
}

// DELETE article

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Delete article
 *     tags:
 *          - Articles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
export async function DELETE(req, context) {
  try {
    await connectDB();

    const params = await context.params;
    const { id } = params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid article ID" },
        { status: 400 },
      );
    }

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
