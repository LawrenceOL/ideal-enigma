const Form = ({ info, handleChange, submitForm }) => {
  return (
    <div className="Form">
      <h1>Purchase Details</h1>
      <form onSubmit={submitForm}>
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
