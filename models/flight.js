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
  departs: {
    type: Date,
    default: () => {
      const now = new Date().toString();
      const yearFromNow = now.setFullYear(now.getFullYear() + 1);
      return yearFromNow;
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
