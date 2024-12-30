
// controllers/authController.js
const { signup, login, forgotPassword, resetPassword } = require('../services/authService');

// handleSignup
const handleSignup = async (req, res) => {
  try {
    // Receving and sending user
    console.log("Inside handleSignup")
    const { user } = await signup(req.body);
    return res.status(201).json({ user, message: "User Registered Successfully" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// handleLogin
const handleLogin = async (req, res) => {
  try {
    // sending user details to login method
    const { user, token } = await login(req.body);
    return res.status(200).json({ user, token, message: "Login Successful" });
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

// handleForgotPassword
const handleForgotPassword = async (req, res) => {
  try {
    // sending user details forgotPassword method
    const result = await forgotPassword(req.body);
    return res.status(200).json({ message: result });
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
}

// handleResetPassword
const handleResetPassword = async (req, res) => {
  try {
    // sending user details resetPassword method
    const result = await resetPassword(req.body, req.params);
    return res.status(200).json({ result, message: 'Password has been reset' });
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
}


module.exports = { handleSignup, handleLogin, handleForgotPassword, handleResetPassword };


















// const handleGoogleLogin = async (req, res) => {
//   try {
//     console.log("inside handleGoogleLogin");
//     const { idToken } = req.body;

//     // Call the googleLogin service function
//     const { user, token } = await googleLogin(idToken);

//     return res.status(200).json({ user, token, message: "Google login successful" });
//   } catch (err) {
//     return res.status(401).json({ error: err.message });
//   }
// };


