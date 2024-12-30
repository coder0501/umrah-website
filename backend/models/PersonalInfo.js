// backend/models/PersonalInfo.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Import Sequelize instance

const PersonalInfo = sequelize.define('PersonalInfo', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    dob: { type: DataTypes.DATE, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false }
});

module.exports = PersonalInfo;
