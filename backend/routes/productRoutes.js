const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  deleteProduct,
} = require('../controllers/productController');
const { protectRoute, admin } = require('../middlewares/authMiddleware');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.delete('/:id', protectRoute, admin, deleteProduct);

module.exports = router;
