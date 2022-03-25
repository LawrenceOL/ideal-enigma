const { Customer } = require('../models')

const getForm = (request, response) => {
  response.send({
    message: 'Here is the form'
  })
}

const createCustomer = async (req, res) => {
  console.log(req.body)
  try {
    const customer = await new Customer(req.body)

    await customer.save()
    return res.status(201).json({ customer })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

// const postForm = (req, res) => {
//   res.send(req.body)
// }

module.exports = {
  getForm,
  createCustomer
}
