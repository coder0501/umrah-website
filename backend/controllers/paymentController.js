// backend/controllers/paymentController.js
const paymentService = require('../services/paymentService');

exports.processPayment = async (req, res) => {
    try {
        const payment = await paymentService.processPayment(req.body);
        res.status(201).json({ message: 'Payment processed successfully', payment });
    } catch (error) {
        res.status(400).json({ message: 'Error processing payment', error });
    }
};
