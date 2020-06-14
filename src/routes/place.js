const express = require('express');
const router = express.Router();
const controller = require('../controllers/place');

router.post('', controller.listPlaces);
router.get('/place/:id', controller.listPlace);

router.get('/reset', controller.reset);

router.post('/rate', controller.rate);

module.exports = router;
