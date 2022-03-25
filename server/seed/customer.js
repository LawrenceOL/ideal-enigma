const db = require('../db')
const { Customer, Ticket } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const customers = [
    {
      name: 'Lawrence',
      email: 'lawrence@GA.com',
      phone: '18001234567',
      ticket_id: null
    },
    {
      name: 'Tak',
      email: 'tag@GA.com',
      phone: '18001234567',
      ticket_id: null
    },
    {
      name: 'Alissa',
      email: 'alissa@GA.com',
      phone: '18001234567',
      ticket_id: null
    }
  ]

  await Customer.insertMany(customers)
  console.log('Created customers !')
}
const run = async () => {
  await main()
  db.close()
}

run()
