const Customer = require('../models/Customer')

const getForm = (request, response) => {
  response.send({
    message: 'Here is the form'
  })
}

const createCustomer = async (req, res) => {
  try {
    const plant = await new Customer(req.body)
    await plant.save()
    return res.status(201).json({
      customer
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// const postForm = (req, res) => {
//   res.send(req.body)
// }

module.exports = {
  getForm,
  createCustomer
}
