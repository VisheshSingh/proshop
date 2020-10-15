const express = require('express');
const router = express.Router();
const { addOrderItems } = require('../controllers/ordersController');
const protectRoute = require('../middlewares/authMiddleware');

router.post('/', protectRoute, addOrderItems);

module.exports = router;
