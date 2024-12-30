const express = require('express');
const router = express.Router();
const { handleSignup, handleLogin, handleForgotPassword, handleResetPassword } = require('../controllers/authController');

// signup/login routes
router.post('/signup', handleSignup);
router.post('/login', handleLogin);

// Forgot & Reset Password Routes
router.post('/forgot-password', handleForgotPassword);
router.post('/reset-password/:token', handleResetPassword);

module.exports = router;











// router.post('/google', handleGoogleLogin); // Google login
