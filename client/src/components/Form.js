const Form = ({ info, handleChange, submitForm }) => {
  return (
    <div className="Form">
      <h1>Purchase Details</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={info.first_name}
          onChange={handleChange}
          name="first_name"
          placeholder="First Name"
        />
        <input
          type="text"
          value={info.last_name}
          onChange={handleChange}
          name="last_name"
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
          value={info.phone}
          onChange={handleChange}
          name="phone"
          placeholder="Phone"
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

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default Form
