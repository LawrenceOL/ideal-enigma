const db = require('../db')
const { Ticket, Customer } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const tickets = {
    ticket_type: 'General Admission',
    customer_id: null,
    sold_status: false
  }

  const ticketArray = []

  for (let i = 0; i < 60; i++) {
    ticketArray.push(tickets)
  }

  await Ticket.insertMany(ticketArray)
  console.log('Created tickets!')
}
const run = async () => {
  await main()
  db.close()
}

run()
