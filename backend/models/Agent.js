const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Agent = sequelize.define('Agent', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Full name is required' },
        },
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Company name is required' },
        },
    },
    phoneNumber: {
        type: DataTypes.STRING, // Use STRING to handle phone numbers with leading zeros or special characters
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Phone number is required' },
            isNumeric: { msg: 'Phone number must contain only numbers' },
        },
    },
    businessEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Business email is required' },
            isEmail: { msg: 'Invalid email format' },
        },
    },
    travelAgencyLicenseNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Travel agency license number is required' },
        },
    },
    agentPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Password is required' },
            len: {
                args: [6, 128],
                msg: 'Password must be between 6 and 128 characters',
            },
        },
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
    },
    resetPasswordToken: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    resetPasswordExpires: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
});

module.exports =  Agent;
