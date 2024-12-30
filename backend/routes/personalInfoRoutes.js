// backend/routes/personalInfoRoutes.js
const express = require('express');
const { addPersonalInfo, getPersonalInfo } = require('../controllers/personalInfoController');
const router = express.Router();

console.log("inside personla info routes")
router.post('/add', addPersonalInfo);
router.get('/:id', getPersonalInfo);

module.exports = router;


