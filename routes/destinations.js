const express = require('express');
const router = express.Router();
const destinationsController = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsController.add);

module.exports = router;
