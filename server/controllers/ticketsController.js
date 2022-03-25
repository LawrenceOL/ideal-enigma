const { Ticket } = require('../models')

const getTicketCount = async (req, res) => {
  try {
    const tickets = await Ticket.count()
    return res.status(200).json({ tickets })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getId = async (req, res) => {
  try {
    const tickets = await Ticket.findOne({ sold_status: 'false' })
    return res.status(200).json({ tickets })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getTicketCount,
  getId
}
