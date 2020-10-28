const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

// @desc    Fetch all the products
// @route   GET /api/products
// @access  Public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch a single product by id
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Could not find the product 😌');
  } else {
    res.json(product);
  }
});

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Could not find the product 😌');
  } else {
    await product.remove();
    res.json({ message: 'Product deleted!' });
  }
});

module.exports = {
  getAllProducts,
  getProductById,
  deleteProduct,
};
