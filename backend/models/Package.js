const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// Define the Package model
const Package = sequelize.define('Package', {
  packageName: {
    type: DataTypes.STRING, // For the package name text
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Package name is required' },
    },
  },
  packageFile: {
    type: DataTypes.STRING, // To store the file path or URL
    allowNull: true,
    validate: {
      isUrl: { msg: 'Package file must be a valid URL if provided' },
    },
  },
  type: {
    type: DataTypes.ENUM('Umrah', 'Hajj'), // Enum for Umrah or Hajj
    allowNull: false,
  },
  planType: {
    type: DataTypes.ENUM('Fixed Plan', 'Flexible Plan'), // Enum for plan type
    allowNull: false,
  },
  dateFrom: {
    type: DataTypes.DATE, // For start date
    allowNull: false,
  },
  dateTo: {
    type: DataTypes.DATE, // For end date
    allowNull: false,
  },
  nights: {
    type: DataTypes.INTEGER, // For the number of nights
    allowNull: false,
  },
  departureFlight: {
    type: DataTypes.STRING, // Flight details as text
    allowNull: true,
  },
  returnFlight: {
    type: DataTypes.STRING, // Flight details as text
    allowNull: true,
  },
  visaAssistance: {
    type: DataTypes.ENUM('Include', 'Exclude'), // Enum for visa assistance
    allowNull: false,
  },
  locations: {
    type: DataTypes.JSON, // JSON to handle multiple locations (e.g., Makkah, Madina)
    allowNull: false,
  },
  packagePrice: {
    type: DataTypes.JSON, // JSON to handle prices (e.g., Double, Triple, Quad)
    allowNull: false,
  },
  includedActivities: {
    type: DataTypes.TEXT, // Text for included activities
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT, // Text for package description
    allowNull: true,
  },
  itinerary: {
    type: DataTypes.JSON, // JSON for detailed itinerary (day-by-day breakdown)
    allowNull: true,
  },
  groupSizeMin: {
    type: DataTypes.INTEGER, // Minimum group size
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  groupSizeMax: {
    type: DataTypes.INTEGER, // Maximum group size
    allowNull: false,
    validate: {
      min: 1,
    },
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
  tableName: 'packages', // Table name in the database
});

// Export the model
module.exports = Package;
