// backend/controllers/personalInfoController.js
const personalInfoService = require('../services/personalInfoService');

exports.addPersonalInfo = async (req, res) => {
    try {
        console.log("Inside PersonalInfo")
        const personalInfo = await personalInfoService.createPersonalInfo(req.body);
        res.status(201).json(personalInfo);
    } catch (error) {
        res.status(400).json({ message: 'Error adding personal info', error });
    }
};

exports.getPersonalInfo = async (req, res) => {
    try {
        const personalInfo = await personalInfoService.getPersonalInfo(req.params.id);
        if (personalInfo) {
            res.json(personalInfo);
        } else {
            res.status(404).json({ message: 'Personal info not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving personal info', error });
    }
};
