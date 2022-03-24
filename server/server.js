const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Customer, Ticket } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is the root')
})

app.get('/customers', async (req, res) => {
  const customers = await Customer.find()
  res.json(customers)
})

app.get('/tickets', async (req, res) => {
  const tickets = await Ticket.find()
  res.json(tickets)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
