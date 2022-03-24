import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={newBoat.name}
          onChange={props.handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <input></input>
        <input></input>
        <input></input>
        <button></button>
      </form>
    </div>
  )
}

export default Form
