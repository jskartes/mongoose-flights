const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  seat: {
    type: String,
    match: /[1-9]\d?[A-F]/
  },
  price: {
    type: Number,
    min: 0
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);
