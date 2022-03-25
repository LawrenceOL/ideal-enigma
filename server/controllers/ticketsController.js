const { Ticket } = require('../models')

const getTicketCount = (req, res) => {
  console.log(req.query)
  res.send({
    message: `Tickets available: ${req.query}`
  })
}

const getAllTickets = async (req, res) => {
  console.log(req.body)
  try {
    const tickets = await Ticket.count()
    return res.status(200).json({ tickets })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllTickets
}
