const express = require('express');
const router = express.Router();
const {
  sendOtp,
  verifyOtp,
  resetPassword,
} = require('../controllers/authController');

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/reset-password', resetPassword);

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout); // Optional

module.exports = router;
