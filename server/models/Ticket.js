const { Schema } = require('mongoose')

const Ticket = new Schema(
  {
    ticket_type: { type: String, required: true },
    ticket_price: { type: String, required: true },
    customer_id: { type: Schema.Types.ObjectId, ref: 'Customer' }
  },
  { timestamps: true }
)

module.exports = Ticket
