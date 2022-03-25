import { Link } from 'react-router-dom'

const Home = () => {
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
          <button>Tokens Available Here</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
