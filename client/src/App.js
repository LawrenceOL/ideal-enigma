import { Routes, Route, useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Form from './components/Form'
import Confirm from './components/Confirm'
import './styles/App.css'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [info, setInfo] = useState({
    first: '',
    last: '',
    email: ''
  })

  let navigate = useNavigate()
  // Fx needed to store the first 3 input values (axios.post), the last 2 values need to be reset

  const handleChange = (e) => {
    const updateForm = {
      ...info,
      [e.target.name]: e.target.value
    }
    setInfo(updateForm)
  }

  const submitForm = async () => {
    let userInfo = await axios.post('/createCustomer', info)
    navigate('/confirm')
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
