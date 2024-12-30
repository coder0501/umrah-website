const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const personalInfoRoutes = require('./routes/personalInfoRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const packageRoutes = require('./routes/packageRoutes');

const app = express();

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// auth Routes
app.use('/auth', authRoutes);

//
app.use('/personal-info', personalInfoRoutes);
app.use('/payment', paymentRoutes);


// agent routes
app.use('/package', packageRoutes)


module.exports = app;
