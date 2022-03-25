import axios from 'axios'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Form from './components/Form'
import Confirm from './components/Confirm'
import './styles/App.css'

function App() {
  // const [tickets, setTickets] = useState('')
  const [info, setInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
  })

  let navigate = useNavigate()
  // Fx needed to store the first 3 input values (axios.post), the last 2 values need to be reset

  // const getTickets = () => {
  //   let tickets = await axios.get('http://localhost:3001/ticketing')
  //   setTickets(tickets)
  // }

  const handleChange = (e) => {
    const updatedForm = {
      ...info,
      [e.target.name]: e.target.value
    }
    setInfo(updatedForm)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    console.log('submit')
    let userInfo = await axios.post('http://localhost:3001/form', info)
    navigate('/confirm')
    setInfo({
      first_name: '',
      last_name: '',
      email: '',
      phone: ''
    })
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
