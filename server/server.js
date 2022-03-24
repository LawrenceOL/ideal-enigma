//stuff we need
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const customersController = require('./controllers/customersController.js')

//middleware goes here

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

//routes
app.get('/', (req, res) => {
  res.send('This is the root')
})

app.get('/form', customersController.getForm)
app.post('/form', customersController.postForm)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
