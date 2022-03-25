//stuff we need
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const customersController = require('./controllers/customersController.js')
const ticketsController = require('./controllers/ticketsController.js')

//middleware goes here

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

//routes
app.get('/', (req, res) => {
  res.send('This is the root')
})

app.get('/form', customersController.getForm)
app.post('/form', customersController.createCustomer)
app.get('/ticketing', ticketsController.getAllTickets)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
