const express = require('express');
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
} = require('../controllers/ordersController');
const protectRoute = require('../middlewares/authMiddleware');

router.post('/', protectRoute, addOrderItems);
router.get('/:id', protectRoute, getOrderById);

module.exports = router;
