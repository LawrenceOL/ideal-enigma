const getCustomers = (request, response) => {
  response.send({
    message: 'Getting Customers'
  })
}

module.exports = {
  getCustomers
}
