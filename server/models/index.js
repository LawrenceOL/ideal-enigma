const mongoose = require('mongoose')
const CustomerSchema = require('./Customer')
const TicketSchema = require('./Ticket')

const Customer = mongoose.model('Customer', CustomerSchema)
const Ticket = mongoose.model('Ticket', TicketSchema)

module.exports = {
  Customer,
  Ticket
}
