const express = require('express');
const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
  })
);

module.exports = router;
