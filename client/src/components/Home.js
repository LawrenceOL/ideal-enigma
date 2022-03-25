import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  let [ticketCount, setTicketCount] = useState(0)
  let [customerCount, setCustomerCount] = useState(0)
  let [remainingTickets, setRemainingTickets] = useState(0)

  const getRemainingTickets = useEffect(async () => {
    const newTicketCount = await axios.get('http://localhost:3001/ticketcount')
    const newCustomerCount = await axios
      .get('http://localhost:3001/customercount')
      .then((customerCountObject) => customerCountObject.data.customers)
    setTicketCount(newTicketCount.data.tickets)
    setCustomerCount(newCustomerCount)
    setRemainingTickets(ticketCount - customerCount)
  }, [customerCount])

  return (
    <div className="Home">
      <div className="paragraph">
        <p>
          Welcome great warriors. Venture forth into the land of Valhalla!
          Adventure, danger, and ancient magic await behind the great gates of
          Odin. Here there are rollercoasters, cured meats, and ales for every
          kind of viking. Test your courage on The Summit of Ragnar, or relax
          down Still Fjord ... destiny is yours!
        </p>
        <Link to="/form">
          <button>Tokens Available Here {remainingTickets}</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
