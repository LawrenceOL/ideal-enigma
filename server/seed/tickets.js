const db = require('../db')
const { Ticket, Customer } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const tickets = [
    {
      ticket_type: 'General Admission',
      customer_id: null
    },
    {
      ticket_type: 'General Admission',
      customer_id: null
    },
    {
      ticket_type: 'General Admission',
      customer_id: null
    },
    {
      ticket_type: 'General Admission',
      customer_id: null
    },
    {
      ticket_type: 'General Admission',
      customer_id: null
    }
  ]

  await Ticket.insertMany(tickets)
  console.log('Created tickets!')
}
const run = async () => {
  await main()
  db.close()
}

run()
