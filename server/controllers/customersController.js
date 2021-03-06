const { Customer } = require('../models')

const getForm = (request, response) => {
  response.send({
    message: 'Here is the form'
  })
}

const createCustomer = async (req, res) => {
  try {
    const customer = await new Customer(req.body)

    await customer.save()
    return res.status(201).json({ customer })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const getCustomerCount = async (req, res) => {
  console.log(req.body)
  try {
    const customers = await Customer.count()
    return res.status(200).json({ customers })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getForm,
  createCustomer,
  getCustomerCount
}
