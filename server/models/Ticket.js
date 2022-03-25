const { Schema } = require('mongoose')

const Ticket = new Schema(
  {
    ticket_type: { type: String, required: true },
    ticket_price: { type: String, required: false },
    customer_id: { type: Schema.Types.ObjectId, ref: 'Customer' },
    sold_status: { type: Boolean }
  },
  { timestamps: true }
)

module.exports = Ticket
