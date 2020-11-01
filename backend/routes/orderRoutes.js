const express = require('express');
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} = require('../controllers/ordersController');
const { protectRoute, admin } = require('../middlewares/authMiddleware');

router.post('/', protectRoute, addOrderItems);
router.get('/myorders', protectRoute, getMyOrders);
router.get('/:id', protectRoute, getOrderById);
router.put('/:id/pay', protectRoute, updateOrderToPaid);
router.put('/:id/deliver', protectRoute, admin, updateOrderToDelivered);
router.get('/', protectRoute, admin, getOrders);

module.exports = router;
