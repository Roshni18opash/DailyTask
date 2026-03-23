import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Article =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);

export default Article;
