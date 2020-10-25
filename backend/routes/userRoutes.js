const express = require('express');
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} = require('../controllers/userController');
const { protectRoute, admin } = require('../middlewares/authMiddleware');

router.post('/login', authUser);
router.post('/', registerUser);
router.get('/profile', protectRoute, getUserProfile);
router.put('/profile', protectRoute, updateUserProfile);
router.get('/', protectRoute, admin, getUsers);

module.exports = router;
