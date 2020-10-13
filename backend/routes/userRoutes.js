const express = require('express');
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require('../controllers/userController');
const protectRoute = require('../middlewares/authMiddleware');

router.post('/login', authUser);
router.post('/', registerUser);
router.get('/profile', protectRoute, getUserProfile);
router.put('/profile', protectRoute, updateUserProfile);

module.exports = router;
