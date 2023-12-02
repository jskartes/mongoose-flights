const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

router.get('/', flightsController.index);

module.exports = router;
