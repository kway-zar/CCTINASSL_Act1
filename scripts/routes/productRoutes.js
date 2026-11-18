import express from 'express';
import {
  createProduct,
  getProducts,
  updateProduct,
  removeProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.post('/products', createProduct);
router.get('/products', getProducts);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', removeProduct);

export default router;

