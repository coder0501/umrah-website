const { createPackage, updatePackage, deletePackage } = require('../services/authService');

const handlePackageCreate = async (req, res) => {
    try {
        // Receving  and sending user
        console.log("Inside handlePackageCreation")
        const { newPackage } = await createPackage(req.body);
        return res.status(201).json({ newPackage, message: "New Package Created Successfully" });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

const handlePackageUpdate = async (req, res) => {
    try {
        console.log("Inside handlePackageUpdate");
        const { updatedPackage } = await updatePackage(req.body);
        return res.status(201).json({ updatedPackage, message: "Package Updated Successfully" });
    } catch (error) {
        return res.status(400).json({ error: err.message });
    }
};

const handlePackageDelete = async (req, res) => {
    try {
        console.log("Inside handlePackageUpdate");
        const { removedPackage } = await deletePackage(req.body);
        return res.status(201).json({ removedPackage, message: "Package Deleted Successfully" });
    } catch (error) {
        return res.status(400).json({ error: err.message });
    }
};



module.exports = { handlePackageCreate, handlePackageUpdate, handlePackageDelete };
