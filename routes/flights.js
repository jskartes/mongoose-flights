const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

router.get('/', flightsController.index);
router.get('/new', flightsController.new);
router.get('/:id', flightsController.show);
router.post('/', flightsController.create);

module.exports = router;
