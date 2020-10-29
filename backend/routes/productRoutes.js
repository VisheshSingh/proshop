const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} = require('../controllers/productController');
const { protectRoute, admin } = require('../middlewares/authMiddleware');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.delete('/:id', protectRoute, admin, deleteProduct);
router.post('/', protectRoute, admin, createProduct);
router.put('/:id', protectRoute, admin, updateProduct);

module.exports = router;
