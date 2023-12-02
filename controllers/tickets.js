module.exports = {
  new: newTicket
}

async function newTicket(req, res) {
  res.render('tickets/new');
}
