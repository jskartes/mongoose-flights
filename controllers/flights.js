const Flight = require('../models/flight');

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
  res.render('flights/show', { flight });
}

function newFlight(req, res) {
  res.render('flights/new');
}

async function create(req, res) {
  if (req.body.departs === '') delete req.body.departs;
  console.log(req.body);
  try {
    await Flight.create(req.body);
    res.redirect('/flights');
  } catch (err) {
    console.log(err);
  }
}
