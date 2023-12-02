const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DEN', 'DFW', 'LAX', 'SAN']
  },
  arrival: Date
}, {
  timestamps: true
});

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DEN', 'DFW', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: () => {
      const now = new Date();
      return new Date(
        now.getFullYear() + 1,
        now.getMonth(),
        now.getDate(),
        now.getHours(),
        now.getMinutes()
      );
    }
  },
  destinations: [destinationSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
