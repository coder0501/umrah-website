// backend/models/Payment.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Import Sequelize instance

const Payment = sequelize.define('Payment', {
    cardHolderName: { type: DataTypes.STRING, allowNull: false },
    cardNumber: { type: DataTypes.STRING, allowNull: false },
    expirationDate: { type: DataTypes.STRING, allowNull: false },
    cvv: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false } // Assuming it's linked to User
});

module.exports = Payment;
