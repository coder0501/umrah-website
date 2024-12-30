// backend/services/paymentService.js
const Payment = require('../models/Payment');

exports.processPayment = async (data) => {
    return await Payment.create(data);
};
