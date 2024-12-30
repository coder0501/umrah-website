const bcrypt = require('bcrypt');
const User = require('../models/User');
const Agent = require('../models/Agent');
const { generateToken } = require('../utils/jwtUtil');
const Package = require('../models/Package');

const createPackage = async (data) => {
    try {
        const {
            packageName,
            packageFile,
            type,
            planType,
            dateFrom,
            dateTo,
            nights,
            departureFlight,
            returnFlight,
            visaAssistance,
            locations,
            packagePrice,
            includedActivities,
            description,
            itinerary,
            groupSizeMin,
            groupSizeMax
        } = data;

        const existingPackage = Package.findOne({ where: { packageName } });
        if (existingPackage) {
            throw new Error('Package already exists');
        }

        const newPackage = Package.create({
            packageName,
            packageFile,
            type,
            planType,
            dateFrom,
            dateTo,
            nights,
            departureFlight,
            returnFlight,
            visaAssistance,
            locations,
            packagePrice,
            includedActivities,
            description,
            itinerary,
            groupSizeMin,
            groupSizeMax
        });

        return { package: newPackage };
    } catch (error) {
        throw new Error(error.message);
    }
};

const updatePackage = async (data) => {

    try {

        const {
            packageName,
            packageFile,
            type,
            planType,
            dateFrom,
            dateTo,
            nights,
            departureFlight,
            returnFlight,
            visaAssistance,
            locations,
            packagePrice,
            includedActivities,
            description,
            itinerary,
            groupSizeMin,
            groupSizeMax,
        } = data;

        // const existingPackage = Package.findOne({ packageName: packageName });

        // if (!existingPackage) {
        //     throw new Error("No such Package exists");
        // }

        await Package.update({
            packageName: packageName,
            packageFile: packageFile,
            type: type,
            planType: planType,
            dateFrom: dateFrom,
            dateTo: dateTo,
            nights: nights,
            departureFlight: departureFlight,
            returnFlight: returnFlight,
            visaAssistance: visaAssistance,
            locations: locations,
            packagePrice: packagePrice,
            includedActivities: includedActivities,
            description: description,
            itinerary: itinerary,
            groupSizeMin: groupSizeMin,
            groupSizeMax: groupSizeMax,
        },
            { where: { packageName: packageName } }
        );

        return { message: "Package Updated Successfully" };
    } catch (error) {
        throw new Error(error.message)
    }
};

const deletePackage = async (data) => {
    try {
        const { packageName } = data;

        await Package.destroy({
            where: { packageName: packageName }
        });

        return { message: "Package deleted successfully!" };
    } catch (error) {
        console.error(error);
        throw new Error(error.message)
    }
};

module.exports = {
    createPackage,
    updatePackage,
    deletePackage
};










// const existingPackage = Package.findOne({
//     where: { packageName: packageName },
// })

// if (existingPackage) {
//     throw new Error("Package doesn't exists");
// }