import Product from '../models/products.js';

export const createProduct = async (req,res) => {
  const newProduct = new Product(req.body);
  const product = await newProduct.save();
  res.send(product);
};
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    next(error);
  }
};
export const updateProduct = async (req,res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!product) {
    return res.status(404).send({ message: 'Product not found' });
  }

  res.send(product);
};
export const removeProduct = async (req,res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return res.status(404).send({ message: 'Product not found' });
  }

  res.send(product);
};

