const { Schema } = require('mongoose')

const Customer = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    ticket_id: { type: Schema.Types.ObjectId, ref: 'Ticket' }
  },
  { timestamps: true }
)

module.exports = Customer
