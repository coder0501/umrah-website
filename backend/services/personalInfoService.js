// backend/services/personalInfoService.js
const PersonalInfo = require('../models/PersonalInfo');

exports.createPersonalInfo = async (data) => {
    return await PersonalInfo.create(data);
};

exports.getPersonalInfo = async (id) => {
    return await PersonalInfo.findByPk(id);
};
