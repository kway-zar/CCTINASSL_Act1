import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, trim: true },
  category: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  excerpt: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  date: { type: String, required: true, trim: true },
  readTime: { type: String, required: true, trim: true },
}, { timestamps: true, id: false });

const BlogArticle = mongoose.models.BlogArticle || mongoose.model('BlogArticle', blogSchema, 'blogs');

export default BlogArticle;
