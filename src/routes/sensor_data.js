const express = require('express');
const router = express.Router();
const controller = require('../controllers/sensor_data');

router.post('', controller.addSensorData);
router.post('', controller.getSensorData);

module.exports = router;
