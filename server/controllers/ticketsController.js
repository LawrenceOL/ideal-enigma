const { Ticket } = require('../models')

const getTicketCount = async (req, res) => {
  console.log(req.body)
  try {
    const tickets = await Ticket.count()
    return res.status(200).json({ tickets })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getTicketCount
}
