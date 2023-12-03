const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
}

async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render('tickets/new', { flight });
}

async function create(req, res) {
  req.body.flight = req.params.id;
  try {
    await Ticket.create(req.body);
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
}
