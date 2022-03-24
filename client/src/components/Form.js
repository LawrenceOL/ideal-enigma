import { Link } from 'react-router-dom'
import axios from 'axios'

const Form = () => {
  // const submitForm = async () => {
  //   let userInfo = await axios.post('/', (req, res) => {})
  // }

  return (
    <div className="Form">
      <h1>Purchase Details</h1>
      <form>
        <input
          type="text"
          // value=''
          // onChange=''
          // name=''
          placeholder="First Name"
        />
        <input
          type="text"
          // value=''
          // onChange=''
          // name=''
          placeholder="Last Name"
        />
        <input
          type="text"
          // value=''
          // onChange=''
          // name=''
          placeholder="Email"
        />
        <input
          type="text"
          // value=''
          // onChange=''
          // name=''
          placeholder="Credit Card"
        />
        <input
          type="text"
          // value=''
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
