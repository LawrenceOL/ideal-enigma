const { Schema } = require('mongoose')

const Customer = new Schema(
  {
    first_name: { type: String, required: true },
    first_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    ticket_id: { type: Schema.Types.ObjectId, ref: 'Ticket' }
  },
  { timestamps: true }
)

module.exports = Customer
