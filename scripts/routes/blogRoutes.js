import express from 'express';
import {
  createBlogArticle,
  getBlogArticles,
  removeBlogArticle,
  updateBlogArticle,
} from '../controllers/blogController.js';

const router = express.Router();

router.route('/blogs')
  .get(getBlogArticles)
  .post(createBlogArticle);
router.route('/blogs/:id')
  .put(updateBlogArticle)
  .delete(removeBlogArticle);

export default router;