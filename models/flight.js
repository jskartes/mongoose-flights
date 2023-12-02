const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['american', 'southwest', 'united']
  },
  airport: {
    type: String,
    enum: ['aus', 'den', 'dfw', 'lax', 'san'],
    default: 'den'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: Date
});
