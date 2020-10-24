const Order = require('../models/orderModel');
const asyncHandler = require('express-async-handler');

// @desc    Create new order
// @route   POSt /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items found');
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc    Get order by id
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const order = await Order.findById(id).populate('user', 'name email');

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  } else {
    res.json(order);
  }
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const order = await Order.findById(id);

  if (!order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body._id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await Order.save();
    res.json(updatedOrder);
    throw new Error('Order not found');
  } else {
    res.json(order);
  }
});

module.exports = { addOrderItems, getOrderById, updateOrderToPaid };
