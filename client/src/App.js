import axios from 'axios'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Form from './components/Form'
import Confirm from './components/Confirm'
import './styles/App.css'

function App() {
  const [info, setInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    ticket_id: ''
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    const updatedForm = {
      ...info,
      [e.target.name]: e.target.value
    }
    setInfo(updatedForm)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    const ticketId = await getTicketId().then((temp) => temp.data.tickets._id)

    await setInfo({ ...info, ticket_id: `${ticketId}` })

    await axios.post('http://localhost:3001/form', info)
    navigate('/confirm')
    setInfo({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      ticket_id: ''
    })
  }

  const getTicketId = async () => {
    const ticketId = await axios.get('http://localhost:3001/ticketId')
    console.log(ticketId)
    return ticketId
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/form"
            element={
              <Form
                info={info}
                handleChange={handleChange}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
