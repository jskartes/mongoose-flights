const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

async function index(req, res) {
  const flights = await Flight.find({}).sort({ departs: 'asc' });
  res.render('flights/index', { flights });
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const tickets = await Ticket.find({ flight: flight._id });
  
          /*----- DEBUG -----*/
          console.log(flight, tickets);
  
  res.render('flights/show', { flight, tickets });
}

function newFlight(req, res) {
  res.render('flights/new');
}

async function create(req, res) {
  if (req.body.departs === '') delete req.body.departs;
  try {
    await Flight.create(req.body);
    res.redirect('/flights');
  } catch (err) {
    console.log(err);
  }
}
