

// services/authService.js
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Agent = require('../models/Agent');
const { generateToken } = require('../utils/jwtUtil');
const crypto = require('crypto'); // for reset token
const nodemailer = require('nodemailer'); // for email

// Signup Services
const signup = async (data) => {

  const { role } = data;
  if (role === 'user') {
    const { firstName, lastName, email, userPassword, userConfirmPassword } = data;
    console.log("inside signup", data)

    try {

      // Check if user already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      console.log(userPassword)
      // Hashing password
      const hashedPassword = await bcrypt.hash(userPassword, 10);
      console.log("inside signup")

      // Creating new user 
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role
      });

      console.log("new user", newUser)
      // returning new user
      return { user: newUser };
    } catch (error) {
      throw new Error(error.message);
    }
  }
  else {
    const { fullName, companyName, phoneNumber, businessEmail, travelAgencyLicenseNumber, agentPassword, agentConfirmPassword } = data;
    console.log("inside signup", data)

    try {
      // Check if user already exists
      const existingUser = await Agent.findOne({ where: { businessEmail } });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      console.log(agentPassword)
      // Hashing password
      const hashedPassword = await bcrypt.hash(agentPassword, 10);
      console.log("inside signup")

      // Creating new user 
      const newUser = await Agent.create({
        fullName,
        companyName,
        phoneNumber,
        businessEmail,
        travelAgencyLicenseNumber,
        agentPassword: hashedPassword,
      });

      console.log("new user", newUser)
      // returning new user
      return { user: newUser };

    } catch (error) {
      throw new Error(error.message);
    }

  }
};

// login services 
const login = async (data) => {
  const { email, password } = data;

  try {
    console.log("inside login")
    // Find user
    const user = await User.findOne({ where: { email } });

    // const agent = await Agent.findOne({ where: { businessEmail: email } });
    console.log("inside login", user)

    // if (
    //   (!user || !(await bcrypt.compare(password, user.userPassword))) 
    //   // (!agent || !(await bcrypt.compare(password, agent.agentPassword)))
    // ) {
    //   throw new Error(' Email or Password Incorrect');
    // }

    // let token;
    // if (user) {
    console.log("User login")
    const token = generateToken({ email: user.email, firstName: user.firstName, role: "user" });
    // }
    // else {
    //   console.log("Agent login")
    //   token = generateToken({ businessEmail: agent.businessEmail, fullName: agent.fullName, role: "agent" });
    // }

    // res.cookie('token', token, { httpOnly: true, secure: false, path: '/', sameSite: 'Lax', maxAge: 3600000 });

    return { user, token };
  } catch (error) {
    console.log("inside login")

    throw new Error(error.message);
  }
};

//forgot password services
const forgotPassword = async (data) => {
  const { email } = data;

  try {
    // Find One user
    const user = await User.findOne({ where: { email } });
    console.log(user)
    if (!user) {
      throw new Error('User not found.');
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    console.log(resetToken)
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email with reset link
    const resetUrl = `http://localhost:5173/resetPassword/${resetToken}`;
    const mailOptions = {
      to: email,
      from: process.env.EMAIL_USER,
      subject: 'Password Reset Request',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste this into your browser, to complete the process:\n\n
      ${resetUrl}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASS,
      }
    });

    await transporter.sendMail(mailOptions);
    return { message: 'Email sent successfully' };

  } catch (err) {
    throw new Error('An error occurred.');
  }
};

//resetPassword services
const resetPassword = async (data1, data2) => {
  const { password } = data1;
  const { token } = data2;


  try {
    // Find One User
    const user = await User.findOne({
      where: {
        resetPasswordToken: token,
      }
    });

    if (user) {
      // Convert resetPasswordExpires to JavaScript Date object
      const resetPasswordExpiresDate = new Date(user.resetPasswordExpires);

      const now = new Date();

      // console.log("resetPad
      // Compare if the resetPasswordExpires is greater than current date
      if (resetPasswordExpiresDate > now) {
        console.log("Token is still valid");
      } else {
        throw new Error('Password reset token is invalid or has expired');
      }
    } else {
      throw new Error('Password reset token is invalid or has expired');
    }

    // Hash the new password
    user.password = await bcrypt.hash(password, 12);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    // Saving user to postgre database
    await user.save();

    return { user };
  } catch (err) {
    throw new Error('Server error');
  }
};

module.exports = { signup, login, forgotPassword, resetPassword };































// const googleLogin = async (idToken) => {
//   const ticket = await client.verifyIdToken({
//     idToken,
//     audience: process.env.GOOGLE_CLIENT_ID,
//   });

//   const payload = ticket.getPayload();
//   const { email, name } = payload;
//   const [firstName, lastName] = name.split(' '); // Assuming the name is "FirstName LastName"

//   // Check if user already exists in the PostgreSQL database
//   let user = await User.findOne({ where: { email } });

//   if (!user) {
//     // If the user does not exist, create a new user
//     const hashedPassword = await bcrypt.hash(Date.now().toString(), 10); // Create a dummy password

//     user = await User.create({
//       email,
//       firstName,
//       lastName: lastName || '', // Handle cases where the name might not include a last name
//       password: hashedPassword, // Store the hashed dummy password
//     });
//   }

//   // Generate a JWT token
//   const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//   return { user, token };
// };




