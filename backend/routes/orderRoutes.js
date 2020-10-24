const express = require('express');
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} = require('../controllers/ordersController');
const protectRoute = require('../middlewares/authMiddleware');

router.post('/', protectRoute, addOrderItems);
router.get('/:id', protectRoute, getOrderById);
router.put('/:id/pay', protectRoute, updateOrderToPaid);

module.exports = router;
