import BlogArticle from '../models/blogs.js';

export async function getBlogArticles(req, res, next) {
  try {
    const articles = await BlogArticle.find().sort({ _id: 1 });
    res.json(articles);
  } catch (error) {
    next(error);
  }
}

export async function createBlogArticle(req, res, next) {
  try {
    const article = await BlogArticle.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    next(error);
  }
}

export async function updateBlogArticle(req, res, next) {
  try {
    const article = await BlogArticle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!article) {
      return res.status(404).json({ message: 'Blog article not found' });
    }

    res.json(article);
  } catch (error) {
    next(error);
  }
}

export async function removeBlogArticle(req, res, next) {
  try {
    const article = await BlogArticle.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({ message: 'Blog article not found' });
    }

    res.json(article);
  } catch (error) {
    next(error);
  }
}
