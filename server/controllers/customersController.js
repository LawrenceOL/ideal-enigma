const getForm = (request, response) => {
  response.send({
    message: 'Here is the form'
  })
}

const postForm = (req, res) => {
  res.send(req.body)
}

module.exports = {
  getForm,
  postForm
}
