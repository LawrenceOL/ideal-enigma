import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Form = () => {
  const [info, setInfo] = useState({
    first: '',
    last: '',
    email: ''
  })

  // Fx needed to store the first 3 input values (axios.post), the last 2 values need to be reset

  // const handleChange = (e) => {
  //   const updateForm =
  // Store info.first
  // Store info.last
  // Store info.email
  //     setInfo(updateForm)
  // }

  // const submitForm = async () => {
  //   let userInfo = await axios.post('/', (req, res) => {})
  // }

  return (
    <div className="Form">
      <h1>Purchase Details</h1>
      <form>
        <input
          type="text"
          value={info.first}
          onChange={handleChange}
          name="first"
          placeholder="First Name"
        />
        <input
          type="text"
          value={info.last}
          onChange={handleChange}
          name="last"
          placeholder="Last Name"
        />
        <input
          type="text"
          value={info.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <input
          type="text"
          // onChange=''
          // name=''
          placeholder="Credit Card"
        />
        <input
          type="text"
          // onChange=''
          // name=''
          placeholder="MM/YY"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
