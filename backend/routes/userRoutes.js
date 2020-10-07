const express = require('express');
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
} = require('../controllers/userController');
const protectRoute = require('../middlewares/authMiddleware');

router.post('/login', authUser);
router.post('/', registerUser);
router.get('/profile', protectRoute, getUserProfile);

module.exports = router;
