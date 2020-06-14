const express = require('express');
const router = express.Router();
const controller = require('../controllers/place');

router.get('/', controller.homePage);

module.exports = router;
