const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopRatedProducts,
} = require('../controllers/productController');
const { protectRoute, admin } = require('../middlewares/authMiddleware');

router.get('/', getAllProducts);
router.get('/toprated', getTopRatedProducts);
router.get('/:id', getProductById);
router.delete('/:id', protectRoute, admin, deleteProduct);
router.post('/', protectRoute, admin, createProduct);
router.put('/:id', protectRoute, admin, updateProduct);
router.post('/:id/reviews', protectRoute, createProductReview);

module.exports = router;
