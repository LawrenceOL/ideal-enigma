import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  let [ticketCount, setTicketCount] = useState('')

  const getTickets = useEffect(async () => {
    const ticketCountTemp = await axios.get('http://localhost:3001/ticketing')
    setTicketCount(ticketCountTemp.data.tickets)
  }, [])

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
          <button>Tokens Available Here {`${ticketCount}`}</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
